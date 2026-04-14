import type { Exercise } from '@/shared/types/exercises'

export const fillExercises: Exercise[] = [
  {
    slug: 'array-fill-basic',
    title: 'Array.prototype.fill() — fill entire array',
    description: `## Array.prototype.fill()

\`Array.prototype.fill(value, start?, end?)\` fills all elements from \`start\` to \`end\` (exclusive) with a static value. Without \`start\`/\`end\`, it fills the entire array. The method mutates and returns the original array.

**Challenge:** Implement \`fillAll(arr, val)\` that fills the entire array with \`val\` using \`.fill(val)\`.

\`\`\`ts
fillAll([1, 2, 3], 0)   // → [0, 0, 0]
fillAll([1, 2, 3], 'x') // → ['x', 'x', 'x']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.fill',
    initialCode: `function fillAll<T>(arr: T[], val: T): T[] {
  // Use arr.fill(val) to fill the entire array with val
}`,
    solution: `function fillAll<T>(arr: T[], val: T): T[] {
  return arr.fill(val)
}`,
    tests: [
      { description: 'fills [1,2,3] with 0', assertion: "expect(fillAll([1, 2, 3], 0)).toEqual([0, 0, 0])" },
      { description: 'fills with a string', assertion: "expect(fillAll(['a', 'b'], 'x')).toEqual(['x', 'x'])" },
      { description: 'returns the same array reference', assertion: "const a = [1, 2, 3]; expect(fillAll(a, 0)).toBe(a)" },
      { description: 'length is unchanged', assertion: "expect(fillAll([1, 2, 3, 4], 5)).toHaveLength(4)" },
      { description: 'empty array returns empty', assertion: "expect(fillAll([], 9)).toEqual([])" },
    ],
    hints: [
      '`fill()` mutates the original array and returns it — it does not create a copy.',
      'To avoid mutation, call `fill()` on `[...arr]` or `arr.slice()`.',
    ],
    tags: ['Array', 'Array.prototype.fill', 'mutation', 'beginner'],
  },
  {
    slug: 'array-fill-from-index',
    title: 'Array.prototype.fill() — fill from index',
    description: `## Array.prototype.fill() — with start index

The second argument to \`fill()\` specifies the start index. Elements before that index are left unchanged.

**Challenge:** Implement \`fillFrom(arr, val, start)\` that fills from \`start\` to the end of the array with \`val\`.

\`\`\`ts
fillFrom([1, 2, 3, 4, 5], 0, 2) // → [1, 2, 0, 0, 0]
fillFrom([1, 2, 3], 9, 1)       // → [1, 9, 9]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.fill',
    initialCode: `function fillFrom(arr: number[], val: number, start: number): number[] {
  // Use arr.fill(val, start) to fill from start index to the end
}`,
    solution: `function fillFrom(arr: number[], val: number, start: number): number[] {
  return arr.fill(val, start)
}`,
    tests: [
      { description: 'fills from index 2 to end', assertion: "expect(fillFrom([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2, 0, 0, 0])" },
      { description: 'fills from index 1 to end', assertion: "expect(fillFrom([1, 2, 3], 9, 1)).toEqual([1, 9, 9])" },
      { description: 'fills from index 0 fills everything', assertion: "expect(fillFrom([1, 2, 3], 7, 0)).toEqual([7, 7, 7])" },
      { description: 'elements before start are unchanged', assertion: "expect(fillFrom([5, 6, 7], 0, 2)[0]).toBe(5)" },
      { description: 'start beyond length has no effect', assertion: "expect(fillFrom([1, 2, 3], 0, 10)).toEqual([1, 2, 3])" },
    ],
    hints: [
      '`arr.fill(val, start)` fills from `start` up to (and including) the last element.',
      'Elements at indices 0 through `start - 1` are left untouched.',
    ],
    tags: ['Array', 'Array.prototype.fill', 'start-index', 'beginner'],
  },
  {
    slug: 'array-fill-range',
    title: 'Array.prototype.fill() — fill a range',
    description: `## Array.prototype.fill() — start and end

With all three arguments, \`fill(value, start, end)\` fills only the range \`[start, end)\` (end is exclusive). Elements outside this range are preserved.

**Challenge:** Implement \`fillRange(arr, val, start, end)\` that fills from \`start\` to \`end\` (exclusive) with \`val\`.

\`\`\`ts
fillRange([1, 2, 3, 4, 5], 0, 1, 3) // → [1, 0, 0, 4, 5]
fillRange([1, 2, 3, 4, 5], 9, 2, 4) // → [1, 2, 9, 9, 5]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.fill',
    initialCode: `function fillRange(arr: number[], val: number, start: number, end: number): number[] {
  // Use arr.fill(val, start, end) to fill only the range [start, end)
}`,
    solution: `function fillRange(arr: number[], val: number, start: number, end: number): number[] {
  return arr.fill(val, start, end)
}`,
    tests: [
      { description: 'fills range [1,3)', assertion: "expect(fillRange([1, 2, 3, 4, 5], 0, 1, 3)).toEqual([1, 0, 0, 4, 5])" },
      { description: 'fills range [2,4)', assertion: "expect(fillRange([1, 2, 3, 4, 5], 9, 2, 4)).toEqual([1, 2, 9, 9, 5])" },
      { description: 'elements outside range unchanged', assertion: "const r = fillRange([1,2,3,4,5],0,1,3); expect(r[0]).toBe(1); expect(r[3]).toBe(4)" },
      { description: 'same start and end fills nothing', assertion: "expect(fillRange([1, 2, 3], 0, 1, 1)).toEqual([1, 2, 3])" },
      { description: 'fills single element range', assertion: "expect(fillRange([1, 2, 3], 5, 1, 2)).toEqual([1, 5, 3])" },
    ],
    hints: [
      'The `end` index is exclusive — `fill(val, 1, 3)` fills indices 1 and 2, not 3.',
      'When `start === end`, no elements are filled.',
    ],
    tags: ['Array', 'Array.prototype.fill', 'range', 'intermediate'],
  },
  {
    slug: 'array-fill-zeros',
    title: 'Array.prototype.fill() — create zero-filled array',
    description: `## Array.prototype.fill() — initializing arrays

A common pattern is to create a fixed-length array initialized to a default value. \`new Array(n).fill(0)\` creates an \`n\`-element array of zeros without using a loop.

**Challenge:** Implement \`createMatrix(n)\` that returns an array of \`n\` zeros.

\`\`\`ts
createMatrix(5) // → [0, 0, 0, 0, 0]
createMatrix(0) // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.fill',
    initialCode: `function createMatrix(n: number): number[] {
  // Use new Array(n).fill(0) to create n zeros
}`,
    solution: `function createMatrix(n: number): number[] {
  return new Array(n).fill(0)
}`,
    tests: [
      { description: 'creates 5 zeros', assertion: "expect(createMatrix(5)).toEqual([0, 0, 0, 0, 0])" },
      { description: 'creates empty array for n=0', assertion: "expect(createMatrix(0)).toEqual([])" },
      { description: 'every element is 0', assertion: "expect(createMatrix(4).every(n => n === 0)).toBe(true)" },
      { description: 'has correct length', assertion: "expect(createMatrix(7)).toHaveLength(7)" },
      { description: 'creates single-element array', assertion: "expect(createMatrix(1)).toEqual([0])" },
    ],
    hints: [
      '`new Array(n)` creates a sparse array with `n` slots — without `.fill()` each slot is `empty`.',
      '`.fill(0)` replaces every sparse slot with an actual `0` value.',
    ],
    tags: ['Array', 'Array.prototype.fill', 'initialization', 'intermediate'],
  },
  {
    slug: 'array-fill-negative',
    title: 'Array.prototype.fill() — fill last elements with negative index',
    description: `## Array.prototype.fill() — negative start index

\`fill()\` supports negative indices for \`start\` and \`end\`. \`fill(val, -2)\` fills the **last two** elements of the array.

**Challenge:** Implement \`fillLastTwo(arr, val)\` that fills the last 2 elements of \`arr\` with \`val\` using \`arr.fill(val, -2)\`.

\`\`\`ts
fillLastTwo([1, 2, 3, 4, 5], 0) // → [1, 2, 3, 0, 0]
fillLastTwo([10, 20], 99)       // → [99, 99]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.fill',
    initialCode: `function fillLastTwo(arr: number[], val: number): number[] {
  // Use arr.fill(val, -2) to fill only the last 2 elements
}`,
    solution: `function fillLastTwo(arr: number[], val: number): number[] {
  return arr.fill(val, -2)
}`,
    tests: [
      { description: 'fills last 2 of [1,2,3,4,5] with 0', assertion: "expect(fillLastTwo([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 0, 0])" },
      { description: 'fills both elements of 2-element array', assertion: "expect(fillLastTwo([10, 20], 99)).toEqual([99, 99])" },
      { description: 'elements before last 2 unchanged', assertion: "expect(fillLastTwo([1, 2, 3, 4], 0)[0]).toBe(1)" },
      { description: 'last element is val', assertion: "const r = fillLastTwo([1,2,3,4,5], 7); expect(r[4]).toBe(7)" },
      { description: 'second-to-last element is val', assertion: "const r = fillLastTwo([1,2,3,4,5], 7); expect(r[3]).toBe(7)" },
    ],
    hints: [
      'Negative index `-2` means start from the 2nd element from the end.',
      'For an array of length 5, `-2` maps to index `3` (i.e. `5 - 2`).',
    ],
    tags: ['Array', 'Array.prototype.fill', 'negative-index', 'intermediate'],
  },
]
