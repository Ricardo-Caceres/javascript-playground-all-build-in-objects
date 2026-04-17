#!/usr/bin/env node
/**
 * translate-exercises.mjs
 *
 * Translates exercise content (title, description, hints, tests[].description)
 * to a target locale using OpenAI gpt-4o-mini.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/translate-exercises.mjs [--locale es] [--batch 20]
 *
 * Idempotent: already-translated slugs are skipped.
 * Output: messages/exercises/<locale>.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const locale = args[args.indexOf('--locale') + 1] ?? 'es'
const batchSize = parseInt(args[args.indexOf('--batch') + 1] ?? '20', 10)

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY environment variable is required.')
  process.exit(1)
}

// ── Load exercises ─────────────────────────────────────────────────────────────
const dataDir = path.join(ROOT, 'src/features/exercises/infrastructure/data')
const allFiles = fs.readdirSync(dataDir).filter((f) => f.endsWith('.ts'))

const exercises = []
for (const file of allFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8')
  // Extract exercise objects via regex — parse title, description, hints, tests[].description, slug
  const exerciseBlocks = content.matchAll(
    /\{[^{}]*slug:\s*['"]([^'"]+)['"][^{}]*\}/gs,
  )
  for (const match of exerciseBlocks) {
    const block = match[0]
    const slug = match[1]
    const title = (block.match(/title:\s*['"`]([^'"`]+)['"`]/) ?? [])[1] ?? ''
    const description = (block.match(/description:\s*`([\s\S]*?)`/) ?? [])[1] ?? ''
    const hintsMatch = block.match(/hints:\s*\[([\s\S]*?)\]/)
    const hints = hintsMatch
      ? [...hintsMatch[1].matchAll(/['"`]([\s\S]*?)['"`]/g)].map((m) => m[1])
      : []
    const testDescriptions = [...block.matchAll(/description:\s*['"`]([^'"`]+)['"`]/g)].map(
      (m) => m[1],
    )
    if (slug) exercises.push({ slug, title, description, hints, testDescriptions })
  }
}

console.log(`Loaded ${exercises.length} exercises from data files.`)

// ── Load existing translations ─────────────────────────────────────────────────
const outPath = path.join(ROOT, `messages/exercises/${locale}.json`)
let existing = {}
if (fs.existsSync(outPath)) {
  existing = JSON.parse(fs.readFileSync(outPath, 'utf-8'))
}

const toTranslate = exercises.filter((ex) => !existing[ex.slug])
console.log(`${Object.keys(existing).length} already translated. ${toTranslate.length} remaining.`)

if (toTranslate.length === 0) {
  console.log('Nothing to do.')
  process.exit(0)
}

// ── OpenAI call ────────────────────────────────────────────────────────────────
async function translateBatch(batch) {
  const LOCALE_NAMES = { es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese' }
  const targetName = LOCALE_NAMES[locale] ?? locale

  const prompt = `Translate the following JavaScript exercise data from English to ${targetName}.
Return a JSON array with one object per exercise, in the same order. Each object must have:
- slug (unchanged)
- title (translated)
- description (translated, preserve Markdown formatting and code blocks unchanged)
- hints (array of translated strings, same length as input)
- tests (array of objects with translated "description" field, same length as input)

Do NOT translate: code blocks (\`\`\`), inline code (\`...\`), variable names, method names, or technical terms like "slug", "Array", "Promise", etc.

Exercises:
${JSON.stringify(batch, null, 2)}`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.2,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`OpenAI API error: ${response.status} ${err}`)
  }

  const data = await response.json()
  const content = data.choices[0].message.content
  const parsed = JSON.parse(content)
  // The model returns { exercises: [...] } or just [...]
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
