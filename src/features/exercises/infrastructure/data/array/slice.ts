import type { Exercise } from '@/shared/types/exercises'

export const sliceExercises: Exercise[] = [
  {
    slug: 'array-slice-basic',
    title: 'Array.prototype.slice() — basic slice',
    description: `## Array.prototype.slice()

\`Array.prototype.slice(start, end)\` returns a shallow copy of a portion of an array from \`start\` (inclusive) to \`end\` (exclusive). It does **not** mutate the original.

**Challenge:** Implement \`getSlice(arr, start, end)\` that returns \`arr.slice(start, end)\`.

\`\`\`ts
getSlice([1, 2, 3, 4, 5], 1, 3) // → [2, 3]
getSlice([10, 20, 30], 0, 2)    // → [10, 20]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.slice',
    initialCode: `function getSlice(arr: number[], start: number, end: number): number[] {
  // Use arr.slice(start, end)
}`,
    solution: `function getSlice(arr: number[], start: number, end: number): number[] {
  return arr.slice(start, end)
}`,
    tests: [
      { description: 'slices from index 1 to 3', assertion:'expect(getSlice([1, 2, 3, 4, 5], 1, 3)).toEqual([2, 3])' },
      { description: 'slices from 0 to 2', assertion:'expect(getSlice([10, 20, 30], 0, 2)).toEqual([10, 20])' },
      { description: 'start equals end returns empty array', assertion:'expect(getSlice([1, 2, 3], 2, 2)).toEqual([])' },
      { description: 'end beyond array length returns to end', assertion:'expect(getSlice([1, 2, 3], 1, 10)).toEqual([2, 3])' },
      { description: 'returns an array', assertion:'expect(Array.isArray(getSlice([1, 2, 3], 0, 1))).toBe(true)' },
    ],
    hints: [
      '`slice(start, end)` does not include the element at `end`.',
      'The original array is never mutated — `slice` always returns a new array.',
    ],
    tags: ['Array', 'Array.prototype.slice', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3, 4, 5]
arr.slice(1, 4)  // → [2, 3, 4]  (indices 1, 2, 3)`,
      explanation: {
        en: 'Use slice(start, end) to extract a sub-array without modifying the original.',
        es: 'Usa slice(inicio, fin) para extraer un sub-array sin modificar el original.',
      },
    },
  },
  {
    slug: 'array-slice-copy',
    title: 'Array.prototype.slice() — shallow copy',
    description: `## Array.prototype.slice() — copying an array

Calling \`slice()\` with no arguments returns a **shallow copy** of the entire array. This is a common pattern to duplicate an array without mutating the original.

**Challenge:** Implement \`shallowCopy(arr)\` that returns a full copy using \`arr.slice()\`.

\`\`\`ts
shallowCopy([1, 2, 3]) // → [1, 2, 3]  (new array reference)
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.slice',
    initialCode: `function shallowCopy(arr: number[]): number[] {
  // Use arr.slice() with no arguments
}`,
    solution: `function shallowCopy(arr: number[]): number[] {
  return arr.slice()
}`,
    tests: [
      { description: 'returns same values', assertion:'expect(shallowCopy([1, 2, 3])).toEqual([1, 2, 3])' },
      { description: 'empty array copies to empty array', assertion:'expect(shallowCopy([])).toEqual([])' },
      { description: 'returns a different reference', assertion:'const a = [1, 2]; expect(shallowCopy(a) !== a).toBe(true)' },
      { description: 'single element copy', assertion:'expect(shallowCopy([42])).toEqual([42])' },
      { description: 'result has same length', assertion:'expect(shallowCopy([1, 2, 3, 4])).toHaveLength(4)' },
    ],
    hints: [
      '`arr.slice()` with no arguments is equivalent to `arr.slice(0)`.',
      'The returned array is a new object — modifying it does not affect the original.',
    ],
    tags: ['Array', 'Array.prototype.slice', 'copy', 'beginner'],
    usageExample: {
      code: `const original = [1, 2, 3]
const copy = original.slice()  // shallow copy
copy !== original  // → true`,
      explanation: {
        en: 'Call slice() with no arguments to create a shallow copy of an array.',
        es: 'Llama a slice() sin argumentos para crear una copia superficial de un array.',
      },
    },
  },
  {
    slug: 'array-slice-negative',
    title: 'Array.prototype.slice() — last N elements',
    description: `## Array.prototype.slice() — negative indices

When a negative index is passed to \`slice()\`, it counts from the **end** of the array. \`arr.slice(-n)\` returns the last \`n\` elements.

**Challenge:** Implement \`lastN(arr, n)\` that returns the last \`n\` elements using \`arr.slice(-n)\`.

\`\`\`ts
lastN([1, 2, 3, 4, 5], 2) // → [4, 5]
lastN([10, 20, 30], 1)    // → [30]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.slice',
    initialCode: `function lastN(arr: number[], n: number): number[] {
  // Use arr.slice(-n)
}`,
    solution: `function lastN(arr: number[], n: number): number[] {
  return arr.slice(-n)
}`,
    tests: [
      { description: 'last 2 elements', assertion:'expect(lastN([1, 2, 3, 4, 5], 2)).toEqual([4, 5])' },
      { description: 'last 1 element', assertion:'expect(lastN([10, 20, 30], 1)).toEqual([30])' },
      { description: 'last 3 of 3 returns all', assertion:'expect(lastN([7, 8, 9], 3)).toEqual([7, 8, 9])' },
      { description: 'last 0 returns empty', assertion:'expect(lastN([1, 2, 3], 0)).toEqual([])' },
      { description: 'does not mutate original', assertion:'const a = [1,2,3]; lastN(a, 2); expect(a).toEqual([1,2,3])' },
    ],
    hints: [
      '`slice(-n)` is shorthand for `slice(arr.length - n)`.',
      'If `n === 0`, `slice(0)` returns the full array — but `-0` is treated as `0` by `slice`, returning the full array too. Handle edge cases as needed.',
    ],
    tags: ['Array', 'Array.prototype.slice', 'negative-index', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3, 4, 5]
arr.slice(-2)  // → [4, 5]  (last 2 elements)`,
      explanation: {
        en: 'Use a negative argument with slice() to extract elements counting from the end.',
        es: 'Usa un argumento negativo con slice() para extraer elementos contando desde el final.',
      },
    },
  },
  {
    slug: 'array-slice-first-n',
    title: 'Array.prototype.slice() — first N elements',
    description: `## Array.prototype.slice() — first N elements

\`arr.slice(0, n)\` returns the first \`n\` elements of the array. It is a clean, non-mutating alternative to manually trimming an array.

**Challenge:** Implement \`firstN(arr, n)\` that returns the first \`n\` elements using \`arr.slice(0, n)\`.

\`\`\`ts
firstN([1, 2, 3, 4, 5], 3) // → [1, 2, 3]
firstN([10, 20], 1)         // → [10]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.slice',
    initialCode: `function firstN(arr: number[], n: number): number[] {
  // Use arr.slice(0, n)
}`,
    solution: `function firstN(arr: number[], n: number): number[] {
  return arr.slice(0, n)
}`,
    tests: [
      { description: 'first 3 of 5', assertion:'expect(firstN([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3])' },
      { description: 'first 1', assertion:'expect(firstN([10, 20], 1)).toEqual([10])' },
      { description: 'n=0 returns empty array', assertion:'expect(firstN([1, 2, 3], 0)).toEqual([])' },
      { description: 'n >= length returns all', assertion:'expect(firstN([1, 2], 5)).toEqual([1, 2])' },
      { description: 'does not mutate original', assertion:'const a = [1,2,3]; firstN(a, 2); expect(a).toHaveLength(3)' },
    ],
    hints: [
      '`slice(0, n)` starts at index 0 and stops before index `n`.',
      'If `n` exceeds the array length, you get the full array — no out-of-bounds error.',
    ],
    tags: ['Array', 'Array.prototype.slice', 'beginner'],
    usageExample: {
      code: `const arr = [10, 20, 30, 40, 50]
arr.slice(0, 3)  // → [10, 20, 30]`,
      explanation: {
        en: 'Use slice(0, n) to get the first n elements of an array as a new array.',
        es: 'Usa slice(0, n) para obtener los primeros n elementos de un array como uno nuevo.',
      },
    },
  },
  {
    slug: 'array-slice-remove-first-last',
    title: 'Array.prototype.slice() — remove first and last',
    description: `## Array.prototype.slice() — interior elements

\`arr.slice(1, -1)\` removes the first and last element, returning only the interior items. This is useful for stripping delimiters or boundary values.

**Challenge:** Implement \`withoutFirstAndLast(arr)\` that returns \`arr.slice(1, -1)\`.

\`\`\`ts
withoutFirstAndLast([1, 2, 3, 4, 5]) // → [2, 3, 4]
withoutFirstAndLast([10, 20, 30])     // → [20]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.slice',
    initialCode: `function withoutFirstAndLast(arr: number[]): number[] {
  // Use arr.slice(1, -1)
}`,
    solution: `function withoutFirstAndLast(arr: number[]): number[] {
  return arr.slice(1, -1)
}`,
    tests: [
      { description: 'removes first and last from 5 elements', assertion:'expect(withoutFirstAndLast([1, 2, 3, 4, 5])).toEqual([2, 3, 4])' },
      { description: 'removes first and last from 3 elements', assertion:'expect(withoutFirstAndLast([10, 20, 30])).toEqual([20])' },
      { description: 'two elements returns empty', assertion:'expect(withoutFirstAndLast([1, 2])).toEqual([])' },
      { description: 'single element returns empty', assertion:'expect(withoutFirstAndLast([5])).toEqual([])' },
      { description: 'does not mutate original', assertion:'const a = [1,2,3,4]; withoutFirstAndLast(a); expect(a).toHaveLength(4)' },
    ],
    hints: [
      '`slice(1, -1)` combines a positive start index with a negative end index.',
      'For arrays with fewer than 2 elements, this returns an empty array.',
    ],
    tags: ['Array', 'Array.prototype.slice', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3, 4, 5]
arr.slice(1)       // → [2, 3, 4, 5]  (remove first)
arr.slice(0, -1)   // → [1, 2, 3, 4]  (remove last)`,
      explanation: {
        en: 'Use slice() to exclude the first or last element without mutating the array.',
        es: 'Usa slice() para excluir el primer o último elemento sin mutar el array.',
      },
    },
  },
]
