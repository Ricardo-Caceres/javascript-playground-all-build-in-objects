import type { Exercise } from '@/shared/types/exercises'

export const copyWithinExercises: Exercise[] = [
  {
    slug: 'array-copywithin-basic',
    title: 'Array.prototype.copyWithin() — copy to index',
    description: `## Array.prototype.copyWithin()

\`Array.prototype.copyWithin(target, start, end)\` copies a portion of the array to another location **within the same array** and returns it. The array's length is unchanged, and the operation mutates the original array.

**Challenge:** Implement \`copyFirst(arr)\` that copies the element at index 0 to index 2 using \`arr.copyWithin(2, 0, 1)\`.

\`\`\`ts
copyFirst([1, 2, 3, 4, 5]) // → [1, 2, 1, 4, 5]
copyFirst([9, 8, 7])       // → [9, 8, 9]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.copyWithin',
    initialCode: `function copyFirst(arr: number[]): number[] {
  // Use arr.copyWithin(2, 0, 1) to copy the element at index 0 to index 2
}`,
    solution: `function copyFirst(arr: number[]): number[] {
  return arr.copyWithin(2, 0, 1)
}`,
    tests: [
      { description: 'copies index 0 to index 2', assertion: "expect(copyFirst([1, 2, 3, 4, 5])).toEqual([1, 2, 1, 4, 5])" },
      { description: 'works on 3-element array', assertion: "expect(copyFirst([9, 8, 7])).toEqual([9, 8, 9])" },
      { description: 'length is unchanged', assertion: "const a = [1, 2, 3, 4]; expect(copyFirst(a)).toHaveLength(4)" },
      { description: 'mutates the original array', assertion: "const a = [1, 2, 3]; copyFirst(a); expect(a[2]).toBe(1)" },
      { description: 'works with single digit', assertion: "expect(copyFirst([5, 0, 0])).toEqual([5, 0, 5])" },
    ],
    hints: [
      '`copyWithin(target, start, end)`: copies elements from [start, end) to position target.',
      'The end argument is exclusive, so `copyWithin(2, 0, 1)` copies only arr[0].',
    ],
    tags: ['Array', 'Array.prototype.copyWithin', 'mutation', 'intermediate'],
  },
  {
    slug: 'array-copywithin-to-start',
    title: 'Array.prototype.copyWithin() — shift elements left',
    description: `## Array.prototype.copyWithin() — shifting

Copying from index 1 to index 0 effectively shifts elements left by one position. The last element remains unchanged (since the source is one shorter than the target range).

**Challenge:** Implement \`shiftLeft(arr)\` that copies from index 1 to the beginning of the array using \`arr.copyWithin(0, 1)\`.

\`\`\`ts
shiftLeft([1, 2, 3, 4]) // → [2, 3, 4, 4]
shiftLeft([10, 20, 30]) // → [20, 30, 30]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.copyWithin',
    initialCode: `function shiftLeft(arr: number[]): number[] {
  // Use arr.copyWithin(0, 1) to copy from index 1 to index 0
}`,
    solution: `function shiftLeft(arr: number[]): number[] {
  return arr.copyWithin(0, 1)
}`,
    tests: [
      { description: 'shifts [1,2,3,4] to [2,3,4,4]', assertion: "expect(shiftLeft([1, 2, 3, 4])).toEqual([2, 3, 4, 4])" },
      { description: 'shifts [10,20,30] to [20,30,30]', assertion: "expect(shiftLeft([10, 20, 30])).toEqual([20, 30, 30])" },
      { description: 'length is unchanged', assertion: "expect(shiftLeft([1, 2, 3])).toHaveLength(3)" },
      { description: 'first element is now what was at index 1', assertion: "expect(shiftLeft([5, 6, 7])[0]).toBe(6)" },
      { description: 'mutates and returns same array', assertion: "const a = [1, 2, 3]; const r = shiftLeft(a); expect(r).toBe(a)" },
    ],
    hints: [
      '`copyWithin(0, 1)` copies arr[1], arr[2], arr[3]... to positions 0, 1, 2...',
      'The last element stays because there is no element to copy into its position from the right.',
    ],
    tags: ['Array', 'Array.prototype.copyWithin', 'shift', 'intermediate'],
  },
  {
    slug: 'array-copywithin-negative',
    title: 'Array.prototype.copyWithin() — negative target index',
    description: `## Array.prototype.copyWithin() — negative indices

Like other array methods, \`copyWithin\` supports negative indices. \`copyWithin(-1, 0, 1)\` copies the first element to the last position.

**Challenge:** Implement \`copyToEnd(arr)\` that copies the first element to the last position using \`arr.copyWithin(-1, 0, 1)\`.

\`\`\`ts
copyToEnd([1, 2, 3, 4]) // → [1, 2, 3, 1]
copyToEnd([9, 0, 0])    // → [9, 0, 9]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.copyWithin',
    initialCode: `function copyToEnd(arr: number[]): number[] {
  // Use arr.copyWithin(-1, 0, 1) to copy the first element to the last position
}`,
    solution: `function copyToEnd(arr: number[]): number[] {
  return arr.copyWithin(-1, 0, 1)
}`,
    tests: [
      { description: 'copies first to last in [1,2,3,4]', assertion: "expect(copyToEnd([1, 2, 3, 4])).toEqual([1, 2, 3, 1])" },
      { description: 'works on [9,0,0]', assertion: "expect(copyToEnd([9, 0, 0])).toEqual([9, 0, 9])" },
      { description: 'last element equals first element', assertion: "const r = copyToEnd([7, 8, 9]); expect(r[r.length - 1]).toBe(r[0])" },
      { description: 'length stays the same', assertion: "expect(copyToEnd([1, 2, 3, 4, 5])).toHaveLength(5)" },
      { description: 'middle elements unchanged', assertion: "expect(copyToEnd([1, 2, 3])[1]).toBe(2)" },
    ],
    hints: [
      'A negative target `-1` refers to the last position in the array.',
      '`copyWithin(-1, 0, 1)` copies just one element (arr[0]) to the last slot.',
    ],
    tags: ['Array', 'Array.prototype.copyWithin', 'negative-index', 'intermediate'],
  },
  {
    slug: 'array-copywithin-range',
    title: 'Array.prototype.copyWithin() — copy a range',
    description: `## Array.prototype.copyWithin() — full parameter usage

With all three parameters \`(target, start, end)\`, you can copy any slice of an array to any position within itself.

**Challenge:** Implement \`copyRange(arr, target, start, end)\` that wraps \`arr.copyWithin(target, start, end)\`.

\`\`\`ts
copyRange([1, 2, 3, 4, 5], 0, 3, 5) // → [4, 5, 3, 4, 5]
copyRange([1, 2, 3, 4, 5], 1, 3)    // → [1, 4, 5, 4, 5]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.copyWithin',
    initialCode: `function copyRange(arr: number[], target: number, start: number, end?: number): number[] {
  // Use arr.copyWithin(target, start, end) to copy a range within the array
}`,
    solution: `function copyRange(arr: number[], target: number, start: number, end?: number): number[] {
  return arr.copyWithin(target, start, end)
}`,
    tests: [
      { description: 'copies range [3,5) to position 0', assertion: "expect(copyRange([1, 2, 3, 4, 5], 0, 3, 5)).toEqual([4, 5, 3, 4, 5])" },
      { description: 'copies without end to end of array', assertion: "expect(copyRange([1, 2, 3, 4, 5], 1, 3)).toEqual([1, 4, 5, 4, 5])" },
      { description: 'length is unchanged', assertion: "expect(copyRange([1, 2, 3, 4, 5], 0, 3, 5)).toHaveLength(5)" },
      { description: 'copies single element', assertion: "expect(copyRange([1, 2, 3, 4], 0, 2, 3)).toEqual([3, 2, 3, 4])" },
      { description: 'mutates original array', assertion: "const a = [1, 2, 3, 4]; copyRange(a, 0, 2, 3); expect(a[0]).toBe(3)" },
    ],
    hints: [
      '`copyWithin(target, start, end)` — elements from [start, end) are written starting at target.',
      'The `end` parameter is optional; if omitted it defaults to `arr.length`.',
    ],
    tags: ['Array', 'Array.prototype.copyWithin', 'range', 'advanced'],
  },
  {
    slug: 'array-copywithin-returns-same',
    title: 'Array.prototype.copyWithin() — returns the same array',
    description: `## Array.prototype.copyWithin() — mutation and return value

\`copyWithin()\` **mutates** the original array and returns a reference to that **same** array (not a copy). This means the returned value and the original variable both point to the same array.

**Challenge:** Implement \`isSameArray(arr)\` that returns \`true\` when the result of calling \`arr.copyWithin(0, 1)\` is the exact same reference as \`arr\`.

\`\`\`ts
isSameArray([1, 2, 3]) // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.copyWithin',
    initialCode: `function isSameArray(arr: number[]): boolean {
  // copyWithin mutates and returns the same array — compare the reference
}`,
    solution: `function isSameArray(arr: number[]): boolean {
  const result = arr.copyWithin(0, 1)
  return result === arr
}`,
    tests: [
      { description: 'returns true for any array', assertion: "expect(isSameArray([1, 2, 3])).toBe(true)" },
      { description: 'returns true for single element', assertion: "expect(isSameArray([42])).toBe(true)" },
      { description: 'returns true for empty array', assertion: "expect(isSameArray([])).toBe(true)" },
      { description: 'arr is mutated after calling', assertion: "const a = [1, 2, 3]; isSameArray(a); expect(a[0]).toBe(2)" },
      { description: 'works for larger arrays', assertion: "expect(isSameArray([5, 4, 3, 2, 1])).toBe(true)" },
    ],
    hints: [
      '`===` checks reference equality — it returns `true` only if both sides are the same object in memory.',
      'Unlike `map` or `filter`, `copyWithin` returns the original array, not a new one.',
    ],
    tags: ['Array', 'Array.prototype.copyWithin', 'mutation', 'reference', 'intermediate'],
  },
]
