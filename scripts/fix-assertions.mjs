import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.resolve(__dirname, "../src/features/exercises/infrastructure/data")

function collectFiles(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...collectFiles(full))
    else if (entry.name.endsWith(".ts") && entry.name !== "index.ts") results.push(full)
  }
  return results
}

function isFunctionSolution(solution) {
  const s = solution.trim()
  return /^(function[\s*]|class |const \w+ = |let \w+ = |var \w+ = )/.test(s)
}

function rewriteAssertionsInFile(content, solution) {
  let count = 0
  const result = content.split("\n").map((line) => {
    if (!line.includes("assertion:") || !line.includes(solution)) return line
    count += line.split(solution).length - 1
    return line.replaceAll(solution, "result")
  }).join("\n")
  return { result, count }
}

const files = collectFiles(DATA_DIR)
let totalFiles = 0
let totalAssertionsReplaced = 0

for (const file of files) {
  const original = fs.readFileSync(file, "utf-8")
  let updated = original
  let fileReplaced = 0

  const solutionRegex = /solution:\s*`([\s\S]*?)`/g
  let match
  while ((match = solutionRegex.exec(original)) !== null) {
    const solution = match[1].trim()
    if (isFunctionSolution(solution)) continue
    if (solution.length < 2) continue
    const { result, count } = rewriteAssertionsInFile(updated, solution)
    updated = result
    fileReplaced += count
  }

  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf-8")
    totalFiles++
    totalAssertionsReplaced += fileReplaced
  }
}

console.log("Done!")
console.log("  Files modified:       " + totalFiles)
console.log("  Assertions rewritten: " + totalAssertionsReplaced)