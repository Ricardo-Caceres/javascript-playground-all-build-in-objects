import type { Exercise } from '@/shared/types/exercises'

export const toReversedExercises: Exercise[] = [
  {
    slug: 'array-to-reversed-basic',
    title: 'Array.prototype.toReversed() — immutable reverse',
    description: `## Array.prototype.toReversed()

\`Array.prototype.toReversed()\` returns a **new** array with the elements in reversed order. Unlike \`reverse()\`, it does **not** mutate the original array.

**Challenge:** Implement \`reverseImmutable(arr)\` that returns \`arr.toReversed()\`.

\`\`\`ts
reverseImmutable([1, 2, 3]) // → [3, 2, 1]
reverseImmutable([10, 20])  // → [20, 10]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.toReversed',
    initialCode: `function reverseImmutable(arr: number[]): number[] {
  // Use arr.toReversed()
}`,
    solution: `function reverseImmutable(arr: number[]): number[] {
  return arr.toReversed()
}`,
    tests: [
      { description: 'reverses a 3-element array', assertion:'expect(reverseImmutable([1, 2, 3])).toEqual([3, 2, 1])' },
      { description: 'reverses a 2-element array', assertion:'expect(reverseImmutable([10, 20])).toEqual([20, 10])' },
      { description: 'empty array returns empty', assertion:'expect(reverseImmutable([])).toEqual([])' },
      { description: 'single element unchanged', assertion:'expect(reverseImmutable([42])).toEqual([42])' },
      { description: 'returns an array', assertion:'expect(Array.isArray(reverseImmutable([1, 2, 3]))).toBe(true)' },
    ],
    hints: [
      '`toReversed()` is the immutable counterpart of `reverse()`.',
      'Available in modern JavaScript (ES2023). Check compatibility if targeting older environments.',
    ],
    tags: ['Array', 'Array.prototype.toReversed', 'immutable', 'ES2023', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.toReversed()  // → [3, 2, 1]
arr               // → [1, 2, 3]  (unchanged)`,
      explanation: {
        en: 'Use toReversed() to get a reversed copy of an array without mutating the original.',
        es: 'Usa toReversed() para obtener una copia invertida de un array sin mutar el original.',
      },
    },
  },
  {
    slug: 'array-to-reversed-no-mutation',
    title: 'Array.prototype.toReversed() — no mutation',
    description: `## Array.prototype.toReversed() — non-destructive

A key feature of \`toReversed()\` is that it leaves the **original array unchanged**. This makes it safe to use in functional or reactive contexts where mutation is undesirable.

**Challenge:** Implement \`checkImmutable(arr)\` that calls \`arr.toReversed()\` but returns the **original** array unchanged.

\`\`\`ts
checkImmutable([1, 2, 3]) // → [1, 2, 3]  (original order preserved)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toReversed',
    initialCode: `function checkImmutable(arr: number[]): number[] {
  // Call arr.toReversed() (ignore the result), then return arr
}`,
    solution: `function checkImmutable(arr: number[]): number[] {
  arr.toReversed()
  return arr
}`,
    tests: [
      { description: 'original array unchanged after toReversed', assertion:'expect(checkImmutable([1, 2, 3])).toEqual([1, 2, 3])' },
      { description: 'first element still first', assertion:'expect(checkImmutable([5, 6, 7])[0]).toBe(5)' },
      { description: 'length preserved', assertion:'expect(checkImmutable([1, 2, 3, 4])).toHaveLength(4)' },
      { description: 'empty array stays empty', assertion:'expect(checkImmutable([])).toEqual([])' },
      { description: 'single element unchanged', assertion:'expect(checkImmutable([99])).toEqual([99])' },
    ],
    hints: [
      '`toReversed()` creates a new array — the original is never touched.',
      'Contrast with `reverse()` which would reverse `arr` in place.',
    ],
    tags: ['Array', 'Array.prototype.toReversed', 'immutable', 'intermediate'],
    usageExample: {
      code: `const original = [1, 2, 3]
const reversed = original.toReversed()
original  // → [1, 2, 3]  (unchanged)
reversed  // → [3, 2, 1]`,
      explanation: {
        en: 'Unlike reverse(), toReversed() leaves the original array untouched.',
        es: 'A diferencia de reverse(), toReversed() deja el array original sin modificar.',
      },
    },
  },
  {
    slug: 'array-to-reversed-string',
    title: 'Array.prototype.toReversed() — reverse string array',
    description: `## Array.prototype.toReversed() — any element type

\`toReversed()\` works on arrays of any element type — numbers, strings, objects, etc.

**Challenge:** Implement \`reverseStringArray(arr)\` that returns \`arr.toReversed()\` for a string array.

\`\`\`ts
reverseStringArray(['a', 'b', 'c']) // → ['c', 'b', 'a']
reverseStringArray(['hello', 'world']) // → ['world', 'hello']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toReversed',
    initialCode: `function reverseStringArray(arr: string[]): string[] {
  // Use arr.toReversed()
}`,
    solution: `function reverseStringArray(arr: string[]): string[] {
  return arr.toReversed()
}`,
    tests: [
      { description: 'reverses string array', assertion:"expect(reverseStringArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a'])" },
      { description: 'two strings reversed', assertion:"expect(reverseStringArray(['hello', 'world'])).toEqual(['world', 'hello'])" },
      { description: 'empty string array returns empty', assertion:"expect(reverseStringArray([])).toEqual([])" },
      { description: 'single string unchanged', assertion:"expect(reverseStringArray(['only'])).toEqual(['only'])" },
      { description: 'does not mutate original', assertion:"const a = ['x','y','z']; reverseStringArray(a); expect(a[0]).toBe('x')" },
    ],
    hints: [
      '`toReversed()` is generic — it works the same way regardless of element type.',
      'The returned array is always a new object, even for string arrays.',
    ],
    tags: ['Array', 'Array.prototype.toReversed', 'string', 'intermediate'],
    usageExample: {
      code: `const words = ['alpha', 'beta', 'gamma']
words.toReversed()  // → ['gamma', 'beta', 'alpha']`,
      explanation: {
        en: 'Use toReversed() on string arrays to produce a reversed copy for display or comparison.',
        es: 'Usa toReversed() en arrays de cadenas para producir una copia invertida para visualización o comparación.',
      },
    },
  },
  {
    slug: 'array-to-reversed-vs-reverse',
    title: 'Array.prototype.toReversed() — new reference',
    description: `## Array.prototype.toReversed() — reference identity

\`toReversed()\` always returns a **new array object**. This means \`arr.toReversed() !== arr\` is always \`true\`, even if the array has one element or is empty.

**Challenge:** Implement \`toReversedReturnsNew(arr)\` that returns \`true\` if the result of \`arr.toReversed()\` is a different reference than \`arr\`.

\`\`\`ts
toReversedReturnsNew([1, 2, 3]) // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.toReversed',
    initialCode: `function toReversedReturnsNew(arr: number[]): boolean {
  // Return true if arr.toReversed() !== arr
}`,
    solution: `function toReversedReturnsNew(arr: number[]): boolean {
  return arr.toReversed() !== arr
}`,
    tests: [
      { description: 'returns true for non-empty array', assertion:'expect(toReversedReturnsNew([1, 2, 3])).toBe(true)' },
      { description: 'returns true for single element', assertion:'expect(toReversedReturnsNew([1])).toBe(true)' },
      { description: 'returns true for empty array', assertion:'expect(toReversedReturnsNew([])).toBe(true)' },
      { description: 'result is a boolean', assertion:"expect(typeof toReversedReturnsNew([1,2])).toBe('boolean')" },
      { description: 'never returns false', assertion:'expect(toReversedReturnsNew([5, 4, 3]) !== false).toBe(true)' },
    ],
    hints: [
      '`!==` checks reference identity — two arrays with the same values are still different objects.',
      'Compare with `reverse()`: `arr.reverse() === arr` would be `true` since it mutates in place.',
    ],
    tags: ['Array', 'Array.prototype.toReversed', 'reference', 'intermediate'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.reverse()        // mutates: arr is now [3, 2, 1]
const r = [1,2,3].toReversed()  // safe: original preserved`,
      explanation: {
        en: 'Prefer toReversed() over reverse() in functional pipelines to avoid mutation side effects.',
        es: 'Prefiere toReversed() sobre reverse() en pipelines funcionales para evitar efectos secundarios de mutación.',
      },
    },
  },
  {
    slug: 'array-to-reversed-empty',
    title: 'Array.prototype.toReversed() — empty array',
    description: `## Array.prototype.toReversed() — edge case: empty array

Calling \`toReversed()\` on an empty array returns a new empty array. There are no elements to reverse, so the result is simply \`[]\`.

**Challenge:** Implement \`toReversedEmpty()\` that returns \`([] as number[]).toReversed()\`.

\`\`\`ts
toReversedEmpty() // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.toReversed',
    initialCode: `function toReversedEmpty(): number[] {
  // Return ([] as number[]).toReversed()
}`,
    solution: `function toReversedEmpty(): number[] {
  return ([] as number[]).toReversed()
}`,
    tests: [
      { description: 'returns an empty array', assertion:'expect(toReversedEmpty()).toEqual([])' },
      { description: 'result has length 0', assertion:'expect(toReversedEmpty()).toHaveLength(0)' },
      { description: 'returns an array', assertion:'expect(Array.isArray(toReversedEmpty())).toBe(true)' },
      { description: 'result is not null', assertion:'expect(toReversedEmpty() !== null).toBe(true)' },
      { description: 'result is truthy', assertion:'expect(toReversedEmpty()).toBeTruthy()' },
    ],
    hints: [
      'An empty array reversed is still an empty array.',
      'Even though the contents are the same, the result is a **new** array object.',
    ],
    tags: ['Array', 'Array.prototype.toReversed', 'empty', 'ES2023', 'beginner'],
    usageExample: {
      code: `const arr = []
arr.toReversed()  // → []`,
      explanation: {
        en: 'toReversed() on an empty array returns a new empty array.',
        es: 'toReversed() en un array vacío devuelve un nuevo array vacío.',
      },
    },
  },
]
