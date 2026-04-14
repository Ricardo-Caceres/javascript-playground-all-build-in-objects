import type { Exercise } from '@/shared/types/exercises'

export const lengthExercises: Exercise[] = [
  {
    slug: 'array-length-basic',
    title: 'Array.prototype.length — read the length',
    description: `## Array.prototype.length

\`Array.prototype.length\` is a property (not a method) that returns the number of elements in an array. It is always a non-negative integer and updates automatically as elements are added or removed.

**Challenge:** Implement \`getLength(arr)\` that returns the length of the array.

\`\`\`ts
getLength([1, 2, 3]) // → 3
getLength([])        // → 0
\`\`\``,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.length',
    initialCode: `function getLength(arr: unknown[]): number {
  // Return arr.length
}`,
    solution: `function getLength(arr: unknown[]): number {
  return arr.length
}`,
    tests: [
      { description: 'returns 3 for a 3-element array', assertion: 'expect(getLength([1, 2, 3])).toBe(3)' },
      { description: 'returns 0 for empty array', assertion: 'expect(getLength([])).toBe(0)' },
      { description: 'returns 1 for single element', assertion: 'expect(getLength([42])).toBe(1)' },
      { description: 'works with mixed types', assertion: "expect(getLength([1, 'two', true])).toBe(3)" },
      { description: 'returns a number', assertion: 'expect(typeof getLength([1, 2])).toBe(\'number\')' },
    ],
    hints: [
      '`arr.length` is a property — no parentheses needed.',
      'The length of an empty array is `0`.',
    ],
    tags: ['Array', 'Array.prototype.length', 'property', 'beginner'],
  },
  {
    slug: 'array-length-empty',
    title: 'Array.prototype.length — empty array has length 0',
    description: `## Array.prototype.length — empty array

An empty array literal \`[]\` has a \`length\` of \`0\`. This is a fundamental baseline behaviour worth knowing explicitly.

**Challenge:** Implement \`emptyLength()\` that returns \`[].length\`.

\`\`\`ts
emptyLength() // → 0
\`\`\``,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.length',
    initialCode: `function emptyLength(): number {
  // Return the length of an empty array literal
}`,
    solution: `function emptyLength(): number {
  return [].length
}`,
    tests: [
      { description: 'returns 0', assertion: 'expect(emptyLength()).toBe(0)' },
      { description: 'returns a number', assertion: "expect(typeof emptyLength()).toBe('number')" },
      { description: 'is falsy', assertion: 'expect(emptyLength()).toBeFalsy()' },
      { description: 'equals 0 strictly', assertion: 'expect(emptyLength() === 0).toBe(true)' },
      { description: 'is not -1', assertion: 'expect(emptyLength()).not.toBe(-1)' },
    ],
    hints: [
      '`[].length` evaluates to `0` — there are no elements.',
      '`0` is falsy in JavaScript.',
    ],
    tags: ['Array', 'Array.prototype.length', 'empty', 'beginner'],
  },
  {
    slug: 'array-length-truncate',
    title: 'Array.prototype.length — truncate by setting length',
    description: `## Array.prototype.length — truncation

You can **shorten** an array by assigning a smaller value to its \`length\` property. Elements beyond the new length are removed and the array is mutated in place.

**Challenge:** Implement \`truncate(arr, n)\` that sets \`arr.length = n\` and returns the (now shorter) array.

\`\`\`ts
truncate([1, 2, 3, 4, 5], 3) // → [1, 2, 3]
truncate([1, 2, 3], 0)       // → []
\`\`\``,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.length',
    initialCode: `function truncate(arr: number[], n: number): number[] {
  // Set arr.length = n, then return arr
}`,
    solution: `function truncate(arr: number[], n: number): number[] {
  arr.length = n
  return arr
}`,
    tests: [
      { description: 'truncates to first 3 elements', assertion: 'expect(truncate([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3])' },
      { description: 'truncates to empty array', assertion: 'expect(truncate([1, 2, 3], 0)).toEqual([])' },
      { description: 'no-op when n equals length', assertion: 'expect(truncate([1, 2], 2)).toEqual([1, 2])' },
      { description: 'mutates the original array', assertion: 'const a = [1, 2, 3, 4]; truncate(a, 2); expect(a).toHaveLength(2)' },
      { description: 'result has correct length', assertion: 'expect(truncate([10, 20, 30, 40], 2)).toHaveLength(2)' },
    ],
    hints: [
      'Assigning to `arr.length` mutates the array in place.',
      'Setting `arr.length = 0` is a common way to empty an array while keeping the same reference.',
    ],
    tags: ['Array', 'Array.prototype.length', 'truncate', 'mutation', 'intermediate'],
  },
  {
    slug: 'array-length-extend',
    title: 'Array.prototype.length — extend with sparse holes',
    description: `## Array.prototype.length — extending

Setting \`arr.length\` to a value **larger** than the current length extends the array. The new slots are empty (holes) — they exist as indices but have no assigned value.

**Challenge:** Implement \`extend(arr, n)\` that sets \`arr.length = n\` and returns the new length.

\`\`\`ts
extend([1, 2], 5) // → 5  (arr is now [1, 2, <3 empty items>])
extend([], 3)     // → 3
\`\`\``,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.length',
    initialCode: `function extend(arr: number[], n: number): number {
  // Set arr.length = n and return arr.length
}`,
    solution: `function extend(arr: number[], n: number): number {
  arr.length = n
  return arr.length
}`,
    tests: [
      { description: 'returns the new length', assertion: 'expect(extend([1, 2], 5)).toBe(5)' },
      { description: 'extends empty array', assertion: 'expect(extend([], 3)).toBe(3)' },
      { description: 'original array length changes', assertion: 'const a = [1]; extend(a, 4); expect(a.length).toBe(4)' },
      { description: 'no-op when n equals current length', assertion: 'expect(extend([1, 2, 3], 3)).toBe(3)' },
      { description: 'returns a number', assertion: "expect(typeof extend([1], 10)).toBe('number')" },
    ],
    hints: [
      'Setting `arr.length` to a larger value creates sparse "holes".',
      'The new slots are `undefined` when accessed but are technically empty.',
      'Return `arr.length` after the assignment to get the updated value.',
    ],
    tags: ['Array', 'Array.prototype.length', 'extend', 'sparse', 'intermediate'],
  },
  {
    slug: 'array-length-after-push',
    title: 'Array.prototype.length — length after pushing elements',
    description: `## Array.prototype.length — after push

Every time you push an element onto an array, \`length\` increases by the number of elements pushed. Knowing the resulting \`length\` without having to recount is useful in tight loops.

**Challenge:** Implement \`lengthAfterPush(arr, ...vals)\` that pushes all \`vals\` into \`arr\` and returns the new \`arr.length\`.

\`\`\`ts
lengthAfterPush([1, 2], 3, 4) // → 4
lengthAfterPush([], 10)        // → 1
\`\`\``,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.length',
    initialCode: `function lengthAfterPush(arr: number[], ...vals: number[]): number {
  // Push vals into arr and return arr.length
}`,
    solution: `function lengthAfterPush(arr: number[], ...vals: number[]): number {
  arr.push(...vals)
  return arr.length
}`,
    tests: [
      { description: 'returns 4 after pushing 2 elements onto 2-element array', assertion: 'expect(lengthAfterPush([1, 2], 3, 4)).toBe(4)' },
      { description: 'returns 1 after pushing one element onto empty array', assertion: 'expect(lengthAfterPush([], 10)).toBe(1)' },
      { description: 'pushing nothing leaves length unchanged', assertion: 'expect(lengthAfterPush([1, 2, 3])).toBe(3)' },
      { description: 'mutates the original array', assertion: 'const a = [1]; lengthAfterPush(a, 2, 3); expect(a).toHaveLength(3)' },
      { description: 'pushing 3 elements onto empty array returns 3', assertion: 'expect(lengthAfterPush([], 1, 2, 3)).toBe(3)' },
    ],
    hints: [
      '`arr.push(...vals)` spreads all rest arguments into the push call.',
      '`push` itself returns the new length — you could also return that directly.',
    ],
    tags: ['Array', 'Array.prototype.length', 'push', 'intermediate'],
  },
]
