import type { Exercise } from '@/shared/types/exercises'

export const toSplicedExercises: Exercise[] = [
  {
    slug: 'array-to-spliced-remove',
    title: 'Remove Element Immutably',
    description: `## Array.prototype.toSpliced\n\n\`toSpliced\` is the immutable version of \`splice\`. It returns a **new** array with elements removed or replaced, leaving the original untouched.\n\nImplement \`removeImmutable\` which returns a new array with the element at \`index\` removed.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.toSpliced',
    initialCode: `function removeImmutable(arr: number[], index: number): number[] {\n  // remove 1 element at index, return new array\n}`,
    solution: `function removeImmutable(arr: number[], index: number): number[] {\n  return arr.toSpliced(index, 1)\n}`,
    tests: [
      { description: 'removes element at given index', assertion: `expect(removeImmutable([1, 2, 3], 1)).toEqual([1, 3])` },
      { description: 'removes first element', assertion: `expect(removeImmutable([10, 20, 30], 0)).toEqual([20, 30])` },
      { description: 'removes last element', assertion: `expect(removeImmutable([1, 2, 3], 2)).toEqual([1, 2])` },
      { description: 'result has one fewer element', assertion: `expect(removeImmutable([1, 2, 3, 4], 2)).toHaveLength(3)` },
      { description: 'removes from single-element array', assertion: `expect(removeImmutable([42], 0)).toEqual([])` },
    ],
    hints: [
      'toSpliced(index, deleteCount) removes deleteCount elements starting at index',
      'Pass 1 as deleteCount to remove exactly one element',
    ],
    tags: ['array', 'toSpliced', 'immutable', 'remove'],
    usageExample: {
      code: `const arr = [1, 2, 3, 4, 5]
arr.toSpliced(1, 2)  // → [1, 4, 5]
arr  // → [1, 2, 3, 4, 5]  (unchanged)`,
      explanation: {
        en: 'Use toSpliced() to remove elements and return a new array, leaving the original intact.',
        es: 'Usa toSpliced() para eliminar elementos y devolver un nuevo array, dejando el original intacto.',
      },
    },
  },
  {
    slug: 'array-to-spliced-insert',
    title: 'Insert Element Immutably',
    description: `## Array.prototype.toSpliced — Insert\n\nPassing \`0\` as the delete count lets you **insert** elements without removing any.\n\nImplement \`insertImmutable\` which returns a new array with \`val\` inserted at \`index\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSpliced',
    initialCode: `function insertImmutable(arr: number[], index: number, val: number): number[] {\n  // insert val at index without removing anything\n}`,
    solution: `function insertImmutable(arr: number[], index: number, val: number): number[] {\n  return arr.toSpliced(index, 0, val)\n}`,
    tests: [
      { description: 'inserts element at given index', assertion: `expect(insertImmutable([1, 2, 3], 1, 99)).toEqual([1, 99, 2, 3])` },
      { description: 'inserts at the start', assertion: `expect(insertImmutable([2, 3], 0, 1)).toEqual([1, 2, 3])` },
      { description: 'inserts at the end', assertion: `expect(insertImmutable([1, 2], 2, 3)).toEqual([1, 2, 3])` },
      { description: 'result has one more element', assertion: `expect(insertImmutable([1, 2, 3], 1, 99)).toHaveLength(4)` },
      { description: 'inserted value is at correct position', assertion: `expect(insertImmutable([10, 30], 1, 20)[1]).toBe(20)` },
    ],
    hints: [
      'Use toSpliced(index, 0, val) — deleteCount of 0 means nothing is removed',
      'The new element appears at the given index in the returned array',
    ],
    tags: ['array', 'toSpliced', 'immutable', 'insert'],
    usageExample: {
      code: `const arr = [1, 2, 4, 5]
arr.toSpliced(2, 0, 3)  // → [1, 2, 3, 4, 5]
arr  // → [1, 2, 4, 5]  (unchanged)`,
      explanation: {
        en: 'Use toSpliced() to insert elements at a position without modifying the original array.',
        es: 'Usa toSpliced() para insertar elementos en una posición sin modificar el array original.',
      },
    },
  },
  {
    slug: 'array-to-spliced-no-mutation',
    title: 'toSpliced Does Not Mutate',
    description: `## Array.prototype.toSpliced — Immutability\n\nUnlike \`splice\`, \`toSpliced\` never modifies the original array. This makes it safe to use in scenarios where immutability matters.\n\nImplement \`checkSplicedImmutable\` which calls \`toSpliced(0, 1)\` but returns the **original** array.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSpliced',
    initialCode: `function checkSplicedImmutable(arr: number[]): number[] {\n  // call toSpliced, then return original arr\n}`,
    solution: `function checkSplicedImmutable(arr: number[]): number[] {\n  arr.toSpliced(0, 1)\n  return arr\n}`,
    tests: [
      { description: 'original array is unchanged', assertion: `expect(checkSplicedImmutable([1, 2, 3])).toEqual([1, 2, 3])` },
      { description: 'first element is unchanged', assertion: `expect(checkSplicedImmutable([9, 8, 7])[0]).toBe(9)` },
      { description: 'length is unchanged', assertion: `expect(checkSplicedImmutable([1, 2, 3])).toHaveLength(3)` },
      { description: 'preserves all elements', assertion: `expect(checkSplicedImmutable([4, 5, 6])).toEqual([4, 5, 6])` },
      { description: 'works with single element', assertion: `expect(checkSplicedImmutable([42])).toEqual([42])` },
    ],
    hints: [
      'toSpliced returns a new array — you can safely ignore that return value',
      'The original array reference is always left intact',
    ],
    tags: ['array', 'toSpliced', 'immutable', 'mutation'],
    usageExample: {
      code: `const original = [1, 2, 3]
const result = original.toSpliced(0, 1)
original  // → [1, 2, 3]  (unchanged)
result    // → [2, 3]`,
      explanation: {
        en: 'toSpliced() is the immutable version of splice() — it never changes the source array.',
        es: 'toSpliced() es la versión inmutable de splice(); nunca modifica el array fuente.',
      },
    },
  },
  {
    slug: 'array-to-spliced-replace',
    title: 'Replace Element Immutably',
    description: `## Array.prototype.toSpliced — Replace\n\nCombining a delete count of \`1\` with a replacement value lets you **replace** an element at a given index without mutating the original.\n\nImplement \`replaceImmutable\` which returns a new array with the element at \`index\` replaced by \`val\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSpliced',
    initialCode: `function replaceImmutable(arr: number[], index: number, val: number): number[] {\n  // replace element at index with val\n}`,
    solution: `function replaceImmutable(arr: number[], index: number, val: number): number[] {\n  return arr.toSpliced(index, 1, val)\n}`,
    tests: [
      { description: 'replaces element at given index', assertion: `expect(replaceImmutable([1, 2, 3], 1, 99)).toEqual([1, 99, 3])` },
      { description: 'replaces first element', assertion: `expect(replaceImmutable([1, 2, 3], 0, 10)).toEqual([10, 2, 3])` },
      { description: 'replaces last element', assertion: `expect(replaceImmutable([1, 2, 3], 2, 30)).toEqual([1, 2, 30])` },
      { description: 'length stays the same', assertion: `expect(replaceImmutable([1, 2, 3], 1, 99)).toHaveLength(3)` },
      { description: 'replaced value is at correct position', assertion: `expect(replaceImmutable([10, 20, 30], 2, 99)[2]).toBe(99)` },
    ],
    hints: [
      'Use toSpliced(index, 1, val) — remove 1 element at index and insert val in its place',
      'The length of the result equals the length of the original',
    ],
    tags: ['array', 'toSpliced', 'immutable', 'replace'],
    usageExample: {
      code: `const arr = ['a', 'b', 'c']
arr.toSpliced(1, 1, 'X')  // → ['a', 'X', 'c']
arr  // → ['a', 'b', 'c']  (unchanged)`,
      explanation: {
        en: 'Use toSpliced() to replace elements at a position, returning a new array.',
        es: 'Usa toSpliced() para reemplazar elementos en una posición, devolviendo un nuevo array.',
      },
    },
  },
  {
    slug: 'array-to-spliced-vs-splice',
    title: 'toSpliced Returns a New Array',
    description: `## Array.prototype.toSpliced — New Reference\n\nWhile \`splice\` mutates and returns removed elements, \`toSpliced\` always returns a **new** array. The result is never the same reference as the input.\n\nImplement \`toSplicedReturnsNew\` which returns \`true\` if \`arr.toSpliced(0, 0)\` is a different reference than \`arr\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toSpliced',
    initialCode: `function toSplicedReturnsNew(arr: number[]): boolean {\n  // return true if toSpliced(0, 0) !== arr\n}`,
    solution: `function toSplicedReturnsNew(arr: number[]): boolean {\n  return arr.toSpliced(0, 0) !== arr\n}`,
    tests: [
      { description: 'always returns true', assertion: `expect(toSplicedReturnsNew([1, 2, 3])).toBe(true)` },
      { description: 'true for single element array', assertion: `expect(toSplicedReturnsNew([42])).toBe(true)` },
      { description: 'true for empty array', assertion: `expect(toSplicedReturnsNew([])).toBe(true)` },
      { description: 'true regardless of content', assertion: `expect(toSplicedReturnsNew([0, 0, 0])).toBe(true)` },
      { description: 'return type is boolean', assertion: `expect(typeof toSplicedReturnsNew([1, 2, 3])).toBe('boolean')` },
    ],
    hints: [
      'Use strict inequality (!==) to compare references',
      'toSpliced(0, 0) removes nothing but still returns a new array copy',
    ],
    tags: ['array', 'toSpliced', 'reference', 'immutable'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.splice(0, 1)       // mutates arr → [2, 3]
const r = [1,2,3].toSpliced(0, 1)  // safe → [2, 3]`,
      explanation: {
        en: 'Prefer toSpliced() over splice() in functional code to avoid unintended mutation.',
        es: 'Prefiere toSpliced() sobre splice() en código funcional para evitar mutaciones no deseadas.',
      },
    },
  },
]
