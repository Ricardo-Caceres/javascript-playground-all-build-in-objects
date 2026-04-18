#!/usr/bin/env node
/**
 * translate-exercises.mjs
 *
 * Translates exercise content (title, description, hints, tests[].description)
 * to a target locale using Claude (Anthropic API).
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-exercises.mjs [--locale es] [--batch 20]
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-exercises.mjs --fix-broken [--locale es]
 *
 * --fix-broken: Re-translate entries whose description ends with \ (truncation artifact).
 *
 * Idempotent: already-translated slugs are skipped.
 * Output: messages/exercises/<locale>.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Anthropic from '@anthropic-ai/sdk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)

function getArg(flag, defaultVal) {
  const idx = args.indexOf(flag)
  if (idx === -1) return defaultVal
  const val = args[idx + 1]
  // Treat another flag or missing value as "not provided"
  if (!val || val.startsWith('--')) return defaultVal
  return val
}

const locale = getArg('--locale', 'es')
const batchSize = parseInt(getArg('--batch', '20'), 10)
const fixBroken = args.includes('--fix-broken')

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
if (!ANTHROPIC_API_KEY) {
  console.error('Error: ANTHROPIC_API_KEY environment variable is required.')
  console.error('Get your key at: https://console.anthropic.com/settings/keys')
  process.exit(1)
}

const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY })

// ── Load exercises ─────────────────────────────────────────────────────────────
const dataDir = path.join(ROOT, 'src/features/exercises/infrastructure/data')

function walkTs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walkTs(full))
    else if (entry.name.endsWith('.ts')) files.push(full)
  }
  return files
}

const allFiles = walkTs(dataDir)

function parseExercisesFromFile(content) {
  const result = []
  const slugRegex = /\bslug:\s*['"]([^'"]+)['"]/g
  let m
  while ((m = slugRegex.exec(content)) !== null) {
    const slug = m[1]
    // Walk backwards to find the opening { of this exercise object
    let start = m.index - 1
    let depth = 0
    while (start >= 0) {
      if (content[start] === '}') depth++
      if (content[start] === '{') { if (depth === 0) break; depth-- }
      start--
    }
    // Walk forwards to find the closing }
    let end = start + 1
    depth = 1
    while (end < content.length && depth > 0) {
      if (content[end] === '{') depth++
      if (content[end] === '}') depth--
      end++
    }
    const block = content.slice(start, end)
    const title = (block.match(/\btitle:\s*['"`]([^'"`\n]+)['"`]/) ?? [])[1] ?? ''
    // Match template literals handling escaped backticks (\`) and other escapes
    const rawDesc = (block.match(/\bdescription:\s*`((?:[^`\\]|\\[\s\S])*)`/) ?? [])[1] ?? ''
    // Unescape JS template literal escape sequences
    const description = rawDesc.replace(/\\([\s\S])/g, (_, c) => {
      if (c === 'n') return '\n'
      if (c === 'r') return '\r'
      if (c === 't') return '\t'
      if (c === '\\') return '\\'
      return c // \` → `, \' → ', etc.
    })
    const hintsMatch = block.match(/\bhints:\s*\[([\s\S]*?)\]/)
    const hints = hintsMatch
      ? [...hintsMatch[1].matchAll(/`([\s\S]*?)`|'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"/g)].map(
          (hm) => hm[1] ?? hm[2] ?? hm[3],
        ).filter(Boolean)
      : []
    const testDescriptions = [...block.matchAll(/\bdescription:\s*['"]([^'"]+)['"]/g)].map((t) => t[1])
    result.push({ slug, title, description, hints, testDescriptions })
  }
  return result
}

const exercises = []
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8')
  exercises.push(...parseExercisesFromFile(content))
}

console.log(`Loaded ${exercises.length} exercises from data files.`)

// ── Load existing translations ─────────────────────────────────────────────────
const outPath = path.join(ROOT, `messages/exercises/${locale}.json`)
let existing = {}
if (fs.existsSync(outPath)) {
  existing = JSON.parse(fs.readFileSync(outPath, 'utf-8'))
}

const isBrokenEntry = (entry) => (entry?.description ?? '').endsWith('\\')

const toTranslate = exercises.filter(
  (ex) => !existing[ex.slug] || (fixBroken && isBrokenEntry(existing[ex.slug])),
)
console.log(`${Object.keys(existing).length} already translated. ${toTranslate.length} remaining.`)

if (toTranslate.length === 0) {
  console.log('Nothing to do.')
  process.exit(0)
}

// ── Claude call ────────────────────────────────────────────────────────────────
async function translateBatch(batch) {
  const LOCALE_NAMES = { es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese' }
  const targetName = LOCALE_NAMES[locale] ?? locale

  const prompt = `Translate the following JavaScript exercise data from English to ${targetName}.
Return a JSON object with key "exercises" containing an array with one object per exercise, in the same order. Each object must have:
- slug (unchanged)
- title (translated)
- description (translated, preserve Markdown formatting and code blocks unchanged)
- hints (array of translated strings, same length as input)
- tests (array of objects with translated "description" field, same length as input)

Do NOT translate: code blocks (\`\`\`), inline code (\`...\`), variable names, method names, or technical terms like "slug", "Array", "Promise", etc.

Exercises:
${JSON.stringify(batch, null, 2)}`

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 8192,
    messages: [{ role: 'user', content: prompt }],
  })

  const text = message.content[0]?.text
  if (!text) throw new Error('Empty response from Claude')

  // Strip markdown code fences if present
  const cleaned = text.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim()
  const parsed = JSON.parse(cleaned)
  return Array.isArray(parsed) ? parsed : parsed.exercises ?? parsed.translations ?? []
}

// ── Batch and save ─────────────────────────────────────────────────────────────
let processed = 0
for (let i = 0; i < toTranslate.length; i += batchSize) {
  const batch = toTranslate.slice(i, i + batchSize)
  console.log(`Translating batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(toTranslate.length / batchSize)} (${batch.length} exercises)…`)

  try {
    const results = await translateBatch(batch)
    for (const result of results) {
      if (!result.slug) continue
      existing[result.slug] = {
        title: result.title,
        description: result.description,
        hints: result.hints ?? [],
        tests: (result.tests ?? []).map((t) => ({ description: t.description ?? t })),
      }
      processed++
    }
    // Save after every batch (idempotent)
    fs.writeFileSync(outPath, JSON.stringify(existing, null, 2) + '\n', 'utf-8')
    console.log(`  ✓ Saved ${processed} total translations.`)
  } catch (err) {
    console.error(`  ✗ Batch failed: ${err.message}`)
    console.error('  Saving progress and stopping.')
    fs.writeFileSync(outPath, JSON.stringify(existing, null, 2) + '\n', 'utf-8')
    process.exit(1)
  }

  // Rate limit: 500ms between batches
  if (i + batchSize < toTranslate.length) {
    await new Promise((r) => setTimeout(r, 500))
  }
}

console.log(`\nDone! Translated ${processed} exercises → ${outPath}`)
