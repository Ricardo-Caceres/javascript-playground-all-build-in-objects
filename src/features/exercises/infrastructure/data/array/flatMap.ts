import type { Exercise } from '@/shared/types/exercises'

export const flatMapExercises: Exercise[] = [
  {
    slug: 'array-flatmap-double',
    title: 'Array.prototype.flatMap() — duplicate each element',
    description: `## Array.prototype.flatMap()

\`Array.prototype.flatMap(callback)\` maps each element using a callback and then flattens the result by one level. It is equivalent to \`arr.map(fn).flat(1)\` but slightly more efficient.

**Challenge:** Implement \`duplicateEach(arr)\` that returns a new array where each element appears twice, using \`flatMap(x => [x, x])\`.

\`\`\`ts
duplicateEach([1, 2, 3]) // → [1, 1, 2, 2, 3, 3]
duplicateEach([])        // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.flatMap',
    initialCode: `function duplicateEach(arr: number[]): number[] {
  // Use arr.flatMap(x => [x, x]) to duplicate each element
}`,
    solution: `function duplicateEach(arr: number[]): number[] {
  return arr.flatMap(x => [x, x])
}`,
    tests: [
      { description: 'duplicates each element', assertion: "expect(duplicateEach([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])" },
      { description: 'empty array returns empty', assertion: "expect(duplicateEach([])).toEqual([])" },
      { description: 'single element duplicated', assertion: "expect(duplicateEach([5])).toEqual([5, 5])" },
      { description: 'result has double the length', assertion: "expect(duplicateEach([1, 2, 3])).toHaveLength(6)" },
      { description: 'order is preserved', assertion: "expect(duplicateEach([3, 1, 2])[0]).toBe(3)" },
    ],
    hints: [
      '`flatMap(x => [x, x])` returns `[x, x]` for each element, which are then flattened into the result.',
      'The flattening is exactly one level deep — nested arrays inside the returned arrays are not unwrapped further.',
    ],
    tags: ['Array', 'Array.prototype.flatMap', 'duplicate', 'beginner'],
    usageExample: {
      code: `const nums = [1, 2, 3]
nums.flatMap(n => [n, n])  // → [1, 1, 2, 2, 3, 3]`,
      explanation: {
        en: 'Use flatMap() to map each element to an array and flatten the results by one level.',
        es: 'Usa flatMap() para mapear cada elemento a un array y aplanar los resultados un nivel.',
      },
    },
  },
  {
    slug: 'array-flatmap-split-words',
    title: 'Array.prototype.flatMap() — split sentences into words',
    description: `## Array.prototype.flatMap() — string splitting

\`flatMap()\` is perfect for transforming each element into multiple values and collecting them all into a flat array.

**Challenge:** Implement \`splitWords(sentences)\` that splits each sentence into words and returns all words in a single flat array.

\`\`\`ts
splitWords(['hello world', 'foo bar baz']) // → ['hello', 'world', 'foo', 'bar', 'baz']
splitWords(['one'])                         // → ['one']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flatMap',
    initialCode: `function splitWords(sentences: string[]): string[] {
  // Use sentences.flatMap(s => s.split(' '))
}`,
    solution: `function splitWords(sentences: string[]): string[] {
  return sentences.flatMap(s => s.split(' '))
}`,
    tests: [
      { description: 'splits and flattens sentences', assertion: "expect(splitWords(['hello world', 'foo bar baz'])).toEqual(['hello', 'world', 'foo', 'bar', 'baz'])" },
      { description: 'single word sentence', assertion: "expect(splitWords(['one'])).toEqual(['one'])" },
      { description: 'empty array returns empty', assertion: "expect(splitWords([])).toEqual([])" },
      { description: 'single sentence split correctly', assertion: "expect(splitWords(['a b c'])).toEqual(['a', 'b', 'c'])" },
      { description: 'result has all words', assertion: "expect(splitWords(['hi there', 'bye'])).toHaveLength(3)" },
    ],
    hints: [
      '`s.split(\' \')` splits a sentence into an array of words.',
      '`flatMap` then flattens all those word-arrays into a single flat array.',
    ],
    tags: ['Array', 'Array.prototype.flatMap', 'string', 'split', 'intermediate'],
    usageExample: {
      code: `const sentences = ['hello world', 'foo bar']
sentences.flatMap(s => s.split(' '))
// → ['hello', 'world', 'foo', 'bar']`,
      explanation: {
        en: 'Use flatMap() to split each string and collect all words into a single flat array.',
        es: 'Usa flatMap() para dividir cada cadena y recopilar todas las palabras en un array plano.',
      },
    },
  },
  {
    slug: 'array-flatmap-filter-map',
    title: 'Array.prototype.flatMap() — double even numbers',
    description: `## Array.prototype.flatMap() — combined filter and map

\`flatMap()\` can replace a \`filter().map()\` chain. Returning an empty array \`[]\` for skipped elements and a wrapped value \`[result]\` for kept ones achieves filtering and mapping in a single pass.

**Challenge:** Implement \`doubleEvens(nums)\` that returns doubled even numbers, skipping odds.

\`\`\`ts
doubleEvens([1, 2, 3, 4, 5]) // → [4, 8]
doubleEvens([1, 3, 5])       // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flatMap',
    initialCode: `function doubleEvens(nums: number[]): number[] {
  // Use flatMap(x => x % 2 === 0 ? [x * 2] : []) to filter and map
}`,
    solution: `function doubleEvens(nums: number[]): number[] {
  return nums.flatMap(x => x % 2 === 0 ? [x * 2] : [])
}`,
    tests: [
      { description: 'doubles evens and skips odds', assertion: "expect(doubleEvens([1, 2, 3, 4, 5])).toEqual([4, 8])" },
      { description: 'all odds returns empty', assertion: "expect(doubleEvens([1, 3, 5])).toEqual([])" },
      { description: 'all evens all doubled', assertion: "expect(doubleEvens([2, 4, 6])).toEqual([4, 8, 12])" },
      { description: 'empty array returns empty', assertion: "expect(doubleEvens([])).toEqual([])" },
      { description: 'result has correct length', assertion: "expect(doubleEvens([1, 2, 3, 4])).toHaveLength(2)" },
    ],
    hints: [
      'Returning `[]` for unwanted elements effectively skips them.',
      'Returning `[x * 2]` wraps the result; `flatMap` then unwraps it into the final array.',
    ],
    tags: ['Array', 'Array.prototype.flatMap', 'filter-map', 'intermediate'],
    usageExample: {
      code: `const nums = [1, 2, 3, 4]
nums.flatMap(n => n % 2 === 0 ? [n * 10] : [])
// → [20, 40]  (filter + transform in one step)`,
      explanation: {
        en: 'Return an empty array from flatMap() to filter out unwanted elements while transforming.',
        es: 'Devuelve un array vacío desde flatMap() para filtrar elementos no deseados mientras transformas.',
      },
    },
  },
  {
    slug: 'array-flatmap-expand',
    title: 'Array.prototype.flatMap() — expand ranges',
    description: `## Array.prototype.flatMap() — generating sequences

\`flatMap()\` can expand each element into multiple elements. For example, each \`[start, end]\` pair can be expanded into the full range.

**Challenge:** Implement \`expandRange(pairs)\` where each \`[start, end]\` pair expands to \`[start, start+1, ..., end]\`.

\`\`\`ts
expandRange([[1, 3], [6, 8]]) // → [1, 2, 3, 6, 7, 8]
expandRange([[5, 5]])         // → [5]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.flatMap',
    initialCode: `function expandRange(pairs: [number, number][]): number[] {
  // Use flatMap to expand each [start, end] pair into [start, start+1, ..., end]
}`,
    solution: `function expandRange(pairs: [number, number][]): number[] {
  return pairs.flatMap(([start, end]) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)
  )
}`,
    tests: [
      { description: 'expands two ranges', assertion: "expect(expandRange([[1, 3], [6, 8]])).toEqual([1, 2, 3, 6, 7, 8])" },
      { description: 'single-element range', assertion: "expect(expandRange([[5, 5]])).toEqual([5])" },
      { description: 'empty pairs returns empty', assertion: "expect(expandRange([])).toEqual([])" },
      { description: 'single pair expanded correctly', assertion: "expect(expandRange([[1, 5]])).toEqual([1, 2, 3, 4, 5])" },
      { description: 'consecutive ranges merged', assertion: "expect(expandRange([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])" },
    ],
    hints: [
      '`Array.from({ length: end - start + 1 }, (_, i) => start + i)` generates the range sequence.',
      '`flatMap` then flattens all these range arrays into one.',
    ],
    tags: ['Array', 'Array.prototype.flatMap', 'range', 'expand', 'intermediate'],
    usageExample: {
      code: `const ranges = [2, 3]
ranges.flatMap(n => Array.from({length: n}, (_, i) => i))
// → [0, 1, 0, 1, 2]`,
      explanation: {
        en: 'Use flatMap() to expand each element into a sequence of values.',
        es: 'Usa flatMap() para expandir cada elemento en una secuencia de valores.',
      },
    },
  },
  {
    slug: 'array-flatmap-remove-empty',
    title: 'Array.prototype.flatMap() — compact strings',
    description: `## Array.prototype.flatMap() — trim and filter

\`flatMap()\` can both transform and filter in one pass. Trimming strings and removing empty ones is a clean use case.

**Challenge:** Implement \`compactMap(arr)\` that trims each string and removes empty strings using \`flatMap\`.

\`\`\`ts
compactMap(['  hello  ', '', '  world  ', '   ']) // → ['hello', 'world']
compactMap(['', '  '])                             // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.flatMap',
    initialCode: `function compactMap(arr: string[]): string[] {
  // Trim each string and remove empties using flatMap
}`,
    solution: `function compactMap(arr: string[]): string[] {
  return arr.flatMap(s => {
    const trimmed = s.trim()
    return trimmed.length > 0 ? [trimmed] : []
  })
}`,
    tests: [
      { description: 'trims and removes empty strings', assertion: "expect(compactMap(['  hello  ', '', '  world  ', '   '])).toEqual(['hello', 'world'])" },
      { description: 'all empty returns []', assertion: "expect(compactMap(['', '  '])).toEqual([])" },
      { description: 'empty input returns []', assertion: "expect(compactMap([])).toEqual([])" },
      { description: 'non-empty strings are trimmed', assertion: "expect(compactMap(['  hi  '])).toEqual(['hi'])" },
      { description: 'already trimmed strings unchanged', assertion: "expect(compactMap(['a', 'b'])).toEqual(['a', 'b'])" },
    ],
    hints: [
      '`s.trim()` removes leading/trailing whitespace.',
      'Return `[trimmed]` to keep or `[]` to discard — `flatMap` handles the flattening.',
    ],
    tags: ['Array', 'Array.prototype.flatMap', 'trim', 'filter', 'advanced'],
    usageExample: {
      code: `const strs = ['hello', '', 'world', '']
strs.flatMap(s => s ? [s.trim()] : [])
// → ['hello', 'world']`,
      explanation: {
        en: 'Use flatMap() to simultaneously trim, filter out empty strings, and flatten results.',
        es: 'Usa flatMap() para recortar, filtrar cadenas vacías y aplanar resultados simultáneamente.',
      },
    },
  },
]
