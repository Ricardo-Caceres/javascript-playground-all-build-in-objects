import type { Exercise } from '@/shared/types/exercises'

export const lastIndexOfExercises: Exercise[] = [
  {
    slug: 'array-last-indexof-basic',
    title: 'Array.prototype.lastIndexOf() — find last position',
    description: `## Array.prototype.lastIndexOf()

\`Array.prototype.lastIndexOf(searchElement, fromIndex?)\` searches the array **from right to left** and returns the index of the last occurrence of \`searchElement\`. If not found, it returns \`-1\`.

**Challenge:** Implement \`lastPos(arr, val)\` that returns the last index of \`val\` in \`arr\`.

\`\`\`ts
lastPos([1, 2, 3, 2, 1], 2) // → 3
lastPos([1, 2, 3], 3)       // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.lastIndexOf',
    initialCode: `function lastPos(arr: number[], val: number): number {
  // Use arr.lastIndexOf(val)
}`,
    solution: `function lastPos(arr: number[], val: number): number {
  return arr.lastIndexOf(val)
}`,
    tests: [
      { description: 'returns last index of duplicate value', assertion: 'expect(lastPos([1, 2, 3, 2, 1], 2)).toBe(3)' },
      { description: 'returns index of last element', assertion: 'expect(lastPos([1, 2, 3], 3)).toBe(2)' },
      { description: 'returns index 0 when only at start', assertion: 'expect(lastPos([5, 1, 2], 5)).toBe(0)' },
      { description: 'returns correct index for single match', assertion: 'expect(lastPos([10, 20, 30], 20)).toBe(1)' },
      { description: 'works when value appears at every position', assertion: 'expect(lastPos([7, 7, 7], 7)).toBe(2)' },
    ],
    hints: [
      '`lastIndexOf` scans from the end of the array to the beginning.',
      'When there are duplicates, it returns the index of the rightmost match.',
    ],
    tags: ['Array', 'Array.prototype.lastIndexOf', 'search', 'beginner'],
  },
  {
    slug: 'array-last-indexof-not-found',
    title: 'Array.prototype.lastIndexOf() — returns -1 when not found',
    description: `## Array.prototype.lastIndexOf() — not found

When the search value is not present in the array, \`lastIndexOf\` returns \`-1\`. This mirrors the behavior of \`indexOf\`.

**Challenge:** Implement \`notFound(arr, val)\` that returns the result of \`arr.lastIndexOf(val)\` (which will be \`-1\` when the value is absent).

\`\`\`ts
notFound([1, 2, 3], 99) // → -1
notFound([], 0)         // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.lastIndexOf',
    initialCode: `function notFound(arr: number[], val: number): number {
  // Use arr.lastIndexOf(val)
}`,
    solution: `function notFound(arr: number[], val: number): number {
  return arr.lastIndexOf(val)
}`,
    tests: [
      { description: 'returns -1 when value is absent', assertion: 'expect(notFound([1, 2, 3], 99)).toBe(-1)' },
      { description: 'returns -1 on empty array', assertion: 'expect(notFound([], 0)).toBe(-1)' },
      { description: 'returns -1 when value was removed', assertion: 'expect(notFound([5, 10, 15], 7)).toBe(-1)' },
      { description: 'returns actual index when value is present', assertion: 'expect(notFound([1, 2, 3], 2)).toBe(1)' },
      { description: 'returns -1 for negative value not in array', assertion: 'expect(notFound([1, 2, 3], -1)).toBe(-1)' },
    ],
    hints: [
      '`lastIndexOf` returns `-1` when no match is found — the same as `indexOf`.',
      'You can use `result !== -1` to check whether the value was found.',
    ],
    tags: ['Array', 'Array.prototype.lastIndexOf', 'not-found', 'beginner'],
  },
  {
    slug: 'array-last-indexof-from',
    title: 'Array.prototype.lastIndexOf() — search from a given index',
    description: `## Array.prototype.lastIndexOf() — fromIndex

The optional second argument \`fromIndex\` tells \`lastIndexOf\` where to **start** searching backwards. Only positions ≤ \`fromIndex\` are considered.

**Challenge:** Implement \`lastPosFrom(arr, val, from)\` that uses \`arr.lastIndexOf(val, from)\`.

\`\`\`ts
lastPosFrom([1, 2, 3, 2, 1], 2, 2) // → 1  (search up to index 2)
lastPosFrom([1, 2, 3, 2, 1], 2, 3) // → 3
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.lastIndexOf',
    initialCode: `function lastPosFrom(arr: number[], val: number, from: number): number {
  // Use arr.lastIndexOf(val, from)
}`,
    solution: `function lastPosFrom(arr: number[], val: number, from: number): number {
  return arr.lastIndexOf(val, from)
}`,
    tests: [
      { description: 'finds match before fromIndex', assertion: 'expect(lastPosFrom([1, 2, 3, 2, 1], 2, 2)).toBe(1)' },
      { description: 'finds match at fromIndex', assertion: 'expect(lastPosFrom([1, 2, 3, 2, 1], 2, 3)).toBe(3)' },
      { description: 'returns -1 when no match before fromIndex', assertion: 'expect(lastPosFrom([1, 2, 3, 2, 1], 2, 0)).toBe(-1)' },
      { description: 'fromIndex 0 only checks first element', assertion: 'expect(lastPosFrom([5, 1, 2], 5, 0)).toBe(0)' },
      { description: 'works with fromIndex at end of array', assertion: 'expect(lastPosFrom([3, 1, 3], 3, 2)).toBe(2)' },
    ],
    hints: [
      '`lastIndexOf(val, from)` starts the backward search at position `from`.',
      'Positions after `from` are completely ignored.',
      'If `from` is 0 and the value is not at index 0, the result is `-1`.',
    ],
    tags: ['Array', 'Array.prototype.lastIndexOf', 'fromIndex', 'intermediate'],
  },
  {
    slug: 'array-last-indexof-vs-indexof',
    title: 'Array.prototype.lastIndexOf() — detect duplicate values',
    description: `## lastIndexOf() vs indexOf()

If \`indexOf\` and \`lastIndexOf\` return different indices for the same value, the value appears **more than once** in the array. This is a neat way to check for duplicates without iterating manually.

**Challenge:** Implement \`hasMultiple(arr, val)\` that returns \`true\` when \`val\` appears more than once.

\`\`\`ts
hasMultiple([1, 2, 3, 2], 2) // → true
hasMultiple([1, 2, 3], 2)    // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.lastIndexOf',
    initialCode: `function hasMultiple(arr: number[], val: number): boolean {
  // Compare arr.indexOf(val) and arr.lastIndexOf(val)
}`,
    solution: `function hasMultiple(arr: number[], val: number): boolean {
  return arr.indexOf(val) !== arr.lastIndexOf(val)
}`,
    tests: [
      { description: 'returns true when value appears twice', assertion: 'expect(hasMultiple([1, 2, 3, 2], 2)).toBe(true)' },
      { description: 'returns false when value appears once', assertion: 'expect(hasMultiple([1, 2, 3], 2)).toBe(false)' },
      { description: 'returns false when value not present', assertion: 'expect(hasMultiple([1, 2, 3], 9)).toBe(false)' },
      { description: 'returns true when all elements are the same', assertion: 'expect(hasMultiple([5, 5, 5], 5)).toBe(true)' },
      { description: 'returns false for single-element array', assertion: 'expect(hasMultiple([42], 42)).toBe(false)' },
    ],
    hints: [
      '`indexOf` returns the **first** occurrence; `lastIndexOf` returns the **last**.',
      'If they differ, the element must appear at least twice.',
      'If the value is not present, both return `-1`, so they are equal → returns `false`.',
    ],
    tags: ['Array', 'Array.prototype.lastIndexOf', 'indexOf', 'duplicates', 'intermediate'],
  },
  {
    slug: 'array-last-indexof-find-all',
    title: 'Array.prototype.lastIndexOf() — collect all occurrences',
    description: `## Array.prototype.lastIndexOf() — find all indices

By repeatedly calling \`lastIndexOf\` with a decreasing \`fromIndex\`, you can collect every index where a value appears — all without using \`filter\` or \`reduce\`.

**Challenge:** Implement \`allIndices(arr, val)\` that returns an array of **all** indices where \`val\` appears, in ascending order.

\`\`\`ts
allIndices([1, 2, 1, 3, 1], 1) // → [0, 2, 4]
allIndices([1, 2, 3], 9)       // → []
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.lastIndexOf',
    initialCode: `function allIndices(arr: number[], val: number): number[] {
  const result: number[] = []
  // Repeatedly call arr.lastIndexOf(val, i - 1) to find all occurrences
  return result
}`,
    solution: `function allIndices(arr: number[], val: number): number[] {
  const result: number[] = []
  let i = arr.lastIndexOf(val)
  while (i !== -1) {
    result.unshift(i)
    i = arr.lastIndexOf(val, i - 1)
  }
  return result
}`,
    tests: [
      { description: 'finds all three occurrences', assertion: 'expect(allIndices([1, 2, 1, 3, 1], 1)).toEqual([0, 2, 4])' },
      { description: 'returns [] when value absent', assertion: 'expect(allIndices([1, 2, 3], 9)).toEqual([])' },
      { description: 'returns single index when value appears once', assertion: 'expect(allIndices([10, 20, 30], 20)).toEqual([1])' },
      { description: 'returns all indices for all-same array', assertion: 'expect(allIndices([5, 5, 5], 5)).toEqual([0, 1, 2])' },
      { description: 'result is in ascending order', assertion: 'const r = allIndices([3, 1, 3, 1, 3], 3); expect(r).toEqual([0, 2, 4])' },
    ],
    hints: [
      'Start by calling `arr.lastIndexOf(val)` to find the rightmost index.',
      'Next, call `arr.lastIndexOf(val, i - 1)` to search before that position.',
      'Use `result.unshift(i)` to prepend each found index, so the final array is in ascending order.',
      'Stop the loop when `lastIndexOf` returns `-1`.',
    ],
    tags: ['Array', 'Array.prototype.lastIndexOf', 'all-indices', 'advanced'],
  },
]
