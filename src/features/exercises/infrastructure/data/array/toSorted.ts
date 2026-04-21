import type { Exercise } from '@/shared/types/exercises'

export const toSortedExercises: Exercise[] = [
  {
    slug: 'array-to-sorted-basic',
    title: 'Sort Array Immutably',
    description: `## Array.prototype.toSorted\n\n\`toSorted\` returns a **new** sorted copy of the array without modifying the original — unlike \`sort\`, which mutates in place.\n\nImplement \`sortImmutable\` that returns a numerically sorted copy of the input array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.toSorted',
    initialCode: `function sortImmutable(arr: number[]): number[] {\n  // return a numerically sorted copy\n}`,
    solution: `function sortImmutable(arr: number[]): number[] {\n  return arr.toSorted((a, b) => a - b)\n}`,
    tests: [
      { description: 'sorts numbers ascending', assertion: `expect(sortImmutable([3, 1, 2])).toEqual([1, 2, 3])` },
      { description: 'handles already sorted array', assertion: `expect(sortImmutable([1, 2, 3])).toEqual([1, 2, 3])` },
      { description: 'sorts reversed array', assertion: `expect(sortImmutable([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])` },
      { description: 'handles single element', assertion: `expect(sortImmutable([42])).toEqual([42])` },
      { description: 'handles negative numbers', assertion: `expect(sortImmutable([-3, 1, -1, 2])).toEqual([-3, -1, 1, 2])` },
    ],
    hints: [
      'Pass (a, b) => a - b as the comparator for numeric sort',
      'toSorted returns a new array — the original is not modified',
    ],
    tags: ['array', 'toSorted', 'immutable', 'sort'],
    usageExample: {
      code: `const nums = [3, 1, 4, 1, 5]
nums.toSorted((a, b) => a - b)  // → [1, 1, 3, 4, 5]
nums  // → [3, 1, 4, 1, 5]  (unchanged)`,
      explanation: {
        en: 'Use toSorted() to get a sorted copy of an array without mutating the original.',
        es: 'Usa toSorted() para obtener una copia ordenada de un array sin mutar el original.',
      },
    },
  },
  {
    slug: 'array-to-sorted-no-mutation',
    title: 'toSorted Does Not Mutate',
    description: `## Array.prototype.toSorted — Immutability\n\nUnlike \`sort\`, \`toSorted\` never mutates the original array. The original remains unchanged after the call.\n\nImplement \`checkSortedImmutable\` which calls \`toSorted()\` but returns the **original** array, proving it was not changed.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSorted',
    initialCode: `function checkSortedImmutable(arr: number[]): number[] {\n  // call toSorted, then return the original arr\n}`,
    solution: `function checkSortedImmutable(arr: number[]): number[] {\n  arr.toSorted()\n  return arr\n}`,
    tests: [
      { description: 'original array is unchanged', assertion: `expect(checkSortedImmutable([3, 1, 2])).toEqual([3, 1, 2])` },
      { description: 'order of original is preserved', assertion: `expect(checkSortedImmutable([5, 4, 3])).toEqual([5, 4, 3])` },
      { description: 'first element unchanged', assertion: `expect(checkSortedImmutable([9, 1, 5])[0]).toBe(9)` },
      { description: 'length is unchanged', assertion: `expect(checkSortedImmutable([3, 1, 2])).toHaveLength(3)` },
      { description: 'single element unchanged', assertion: `expect(checkSortedImmutable([7])).toEqual([7])` },
    ],
    hints: [
      'toSorted always returns a brand-new array — the original is safe to return as-is',
      'You can ignore the return value of toSorted here',
    ],
    tags: ['array', 'toSorted', 'immutable', 'mutation'],
    usageExample: {
      code: `const original = ['c', 'a', 'b']
const sorted = original.toSorted()
original  // → ['c', 'a', 'b']  (unchanged)
sorted    // → ['a', 'b', 'c']`,
      explanation: {
        en: 'toSorted() is the immutable counterpart of sort() — the original array is never changed.',
        es: 'toSorted() es la contraparte inmutable de sort(); el array original nunca se modifica.',
      },
    },
  },
  {
    slug: 'array-to-sorted-strings',
    title: 'Sort Strings Lexicographically',
    description: `## Array.prototype.toSorted — Strings\n\nCalling \`toSorted()\` without a comparator defaults to **lexicographic** (alphabetical) ordering — the same default as \`sort\`.\n\nImplement \`sortStrings\` which returns a lexicographically sorted copy of the input string array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.toSorted',
    initialCode: `function sortStrings(arr: string[]): string[] {\n  // return a lexicographically sorted copy\n}`,
    solution: `function sortStrings(arr: string[]): string[] {\n  return arr.toSorted()\n}`,
    tests: [
      { description: 'sorts alphabetically', assertion: `expect(sortStrings(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry'])` },
      { description: 'handles already sorted input', assertion: `expect(sortStrings(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])` },
      { description: 'returns correct length', assertion: `expect(sortStrings(['z', 'y', 'x'])).toHaveLength(3)` },
      { description: 'single string is unchanged', assertion: `expect(sortStrings(['hello'])).toEqual(['hello'])` },
      { description: 'first element is lexicographically smallest', assertion: `expect(sortStrings(['c', 'a', 'b'])[0]).toBe('a')` },
    ],
    hints: [
      'No comparator needed — toSorted() defaults to lexicographic order',
      'Lexicographic means character-by-character comparison, like a dictionary',
    ],
    tags: ['array', 'toSorted', 'strings', 'lexicographic'],
    usageExample: {
      code: `const words = ['cherry', 'apple', 'banana']
words.toSorted()  // → ['apple', 'banana', 'cherry']`,
      explanation: {
        en: 'Call toSorted() without arguments to sort strings alphabetically into a new array.',
        es: 'Llama a toSorted() sin argumentos para ordenar cadenas alfabéticamente en un nuevo array.',
      },
    },
  },
  {
    slug: 'array-to-sorted-custom',
    title: 'Sort by String Length',
    description: `## Array.prototype.toSorted — Custom Comparator\n\nYou can pass any comparator function to \`toSorted\`, just like \`sort\`.\n\nImplement \`sortByLength\` which returns a copy of the string array sorted by **string length** (shortest first).`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSorted',
    initialCode: `function sortByLength(arr: string[]): string[] {\n  // sort by string length, shortest first\n}`,
    solution: `function sortByLength(arr: string[]): string[] {\n  return arr.toSorted((a, b) => a.length - b.length)\n}`,
    tests: [
      { description: 'sorts by length ascending', assertion: `expect(sortByLength(['banana', 'hi', 'hey'])).toEqual(['hi', 'hey', 'banana'])` },
      { description: 'first element is shortest', assertion: `expect(sortByLength(['long', 'x', 'medium'])[0]).toBe('x')` },
      { description: 'last element is longest', assertion: `expect(sortByLength(['a', 'bb', 'ccc'])[2]).toBe('ccc')` },
      { description: 'returns correct length', assertion: `expect(sortByLength(['ab', 'cd', 'e'])).toHaveLength(3)` },
      { description: 'single element unchanged', assertion: `expect(sortByLength(['hello'])).toEqual(['hello'])` },
    ],
    hints: [
      'Use (a, b) => a.length - b.length as the comparator',
      'toSorted with a comparator works identically to sort with one, but returns a copy',
    ],
    tags: ['array', 'toSorted', 'comparator', 'strings'],
    usageExample: {
      code: `const nums = [5, 2, 8, 1]
nums.toSorted((a, b) => b - a)  // → [8, 5, 2, 1]`,
      explanation: {
        en: 'Pass a comparator to toSorted() to control the sort order without mutating the original.',
        es: 'Pasa un comparador a toSorted() para controlar el orden sin mutar el original.',
      },
    },
  },
  {
    slug: 'array-to-sorted-vs-sort',
    title: 'toSorted Returns a New Reference',
    description: `## Array.prototype.toSorted — New Array\n\nUnlike \`sort\`, which sorts in place and returns the **same** reference, \`toSorted\` always returns a **new** array — the result is never \`===\` the input.\n\nImplement \`toSortedReturnsNew\` which returns \`true\` if \`arr.toSorted()\` is a different reference than \`arr\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSorted',
    initialCode: `function toSortedReturnsNew(arr: number[]): boolean {\n  // return true if toSorted() !== arr\n}`,
    solution: `function toSortedReturnsNew(arr: number[]): boolean {\n  return arr.toSorted() !== arr\n}`,
    tests: [
      { description: 'returns true for sorted array', assertion: `expect(toSortedReturnsNew([1, 2, 3])).toBe(true)` },
      { description: 'returns true for unsorted array', assertion: `expect(toSortedReturnsNew([3, 1, 2])).toBe(true)` },
      { description: 'returns true for single element', assertion: `expect(toSortedReturnsNew([1])).toBe(true)` },
      { description: 'returns true for empty array', assertion: `expect(toSortedReturnsNew([])).toBe(true)` },
      { description: 'return type is boolean', assertion: `expect(typeof toSortedReturnsNew([1, 2, 3])).toBe('boolean')` },
    ],
    hints: [
      'Use strict inequality (!==) to compare array references',
      'toSorted always allocates a new array, even if elements are identical',
    ],
    tags: ['array', 'toSorted', 'reference', 'immutable'],
    usageExample: {
      code: `const arr = [3, 1, 2]
arr.sort((a,b)=>a-b)  // mutates arr → [1, 2, 3]
const s = [3,1,2].toSorted((a,b)=>a-b)  // safe copy`,
      explanation: {
        en: 'Choose toSorted() over sort() when working in functional or immutable patterns.',
        es: 'Elige toSorted() sobre sort() cuando trabajes en patrones funcionales o inmutables.',
      },
    },
  },
]
