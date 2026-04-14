import type { Exercise } from '@/shared/types/exercises'

export const concatExercises: Exercise[] = [
  {
    slug: 'array-concat-two-arrays',
    title: 'Array.prototype.concat() — join two arrays',
    description: `## Array.prototype.concat()

\`Array.prototype.concat()\` returns a **new** array that contains the elements of the original array followed by the elements of the provided arrays or values. The original arrays are not modified.

**Challenge:** Implement \`joinArrays(a, b)\` that returns a new array with all elements of \`a\` followed by all elements of \`b\` using \`.concat()\`.

\`\`\`ts
joinArrays([1, 2], [3, 4]) // → [1, 2, 3, 4]
joinArrays([], [1])        // → [1]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.concat',
    initialCode: `function joinArrays(a: number[], b: number[]): number[] {
  // Use a.concat(b) to combine both arrays
}`,
    solution: `function joinArrays(a: number[], b: number[]): number[] {
  return a.concat(b)
}`,
    tests: [
      { description: 'joins [1,2] and [3,4] into [1,2,3,4]', assertion: "expect(joinArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])" },
      { description: 'empty first array', assertion: "expect(joinArrays([], [1, 2])).toEqual([1, 2])" },
      { description: 'empty second array', assertion: "expect(joinArrays([1, 2], [])).toEqual([1, 2])" },
      { description: 'both empty returns []', assertion: "expect(joinArrays([], [])).toEqual([])" },
      { description: 'single elements', assertion: "expect(joinArrays([1], [2])).toEqual([1, 2])" },
    ],
    hints: [
      '`a.concat(b)` creates a new array — it never modifies `a` or `b`.',
      'You can also pass multiple arguments: `a.concat(b, c)` to concat more than two arrays.',
    ],
    tags: ['Array', 'Array.prototype.concat', 'beginner'],
  },
  {
    slug: 'array-concat-multiple',
    title: 'Array.prototype.concat() — join multiple arrays',
    description: `## Array.prototype.concat() — multiple arguments

\`concat()\` can accept multiple arrays as arguments, joining them all in one call.

**Challenge:** Implement \`joinAll(arrays)\` that concatenates an array of number arrays into a single flat array.

\`\`\`ts
joinAll([[1, 2], [3, 4], [5]]) // → [1, 2, 3, 4, 5]
joinAll([[1], [], [2]])        // → [1, 2]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.concat',
    initialCode: `function joinAll(arrays: number[][]): number[] {
  // Use [].concat(...arrays) or reduce with concat to join all arrays
}`,
    solution: `function joinAll(arrays: number[][]): number[] {
  return ([] as number[]).concat(...arrays)
}`,
    tests: [
      { description: 'joins three arrays', assertion: "expect(joinAll([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5])" },
      { description: 'handles empty sub-arrays', assertion: "expect(joinAll([[1], [], [2]])).toEqual([1, 2])" },
      { description: 'all empty arrays returns []', assertion: "expect(joinAll([[], []])).toEqual([])" },
      { description: 'single array returns its contents', assertion: "expect(joinAll([[1, 2, 3]])).toEqual([1, 2, 3])" },
      { description: 'empty input returns []', assertion: "expect(joinAll([])).toEqual([])" },
    ],
    hints: [
      'Use spread syntax: `[].concat(...arrays)` to spread the array of arrays as individual arguments.',
      'Alternatively, `arrays.reduce((acc, arr) => acc.concat(arr), [])` works too.',
    ],
    tags: ['Array', 'Array.prototype.concat', 'spread', 'beginner'],
  },
  {
    slug: 'array-concat-value',
    title: 'Array.prototype.concat() — append a value',
    description: `## Array.prototype.concat() — with a scalar value

\`concat()\` also accepts non-array values and simply appends them as elements.

**Challenge:** Implement \`appendValue(arr, val)\` that returns a new array with \`val\` appended, using \`.concat(val)\`.

\`\`\`ts
appendValue([1, 2, 3], 4) // → [1, 2, 3, 4]
appendValue([], 'hello')  // → ['hello']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.concat',
    initialCode: `function appendValue<T>(arr: T[], val: T): T[] {
  // Use arr.concat(val) to append val to the array
}`,
    solution: `function appendValue<T>(arr: T[], val: T): T[] {
  return arr.concat(val as T[])
}`,
    tests: [
      { description: 'appends 4 to [1,2,3]', assertion: "expect(appendValue([1, 2, 3], 4)).toEqual([1, 2, 3, 4])" },
      { description: 'appends to empty array', assertion: "expect(appendValue([], 'hello')).toEqual(['hello'])" },
      { description: 'appends string', assertion: "expect(appendValue(['a', 'b'], 'c')).toEqual(['a', 'b', 'c'])" },
      { description: 'original array is unchanged', assertion: "const a = [1, 2]; appendValue(a, 3); expect(a).toEqual([1, 2])" },
      { description: 'result has length + 1', assertion: "expect(appendValue([1, 2, 3], 4)).toHaveLength(4)" },
    ],
    hints: [
      '`arr.concat(val)` works when `val` is not an array — it gets appended as an element.',
      'When `val` is an array, concat spreads it. Use `arr.concat([val])` to force it to be treated as a single item.',
    ],
    tags: ['Array', 'Array.prototype.concat', 'append', 'beginner'],
  },
  {
    slug: 'array-concat-immutable',
    title: 'Array.prototype.concat() — immutability',
    description: `## Array.prototype.concat() — does not mutate

\`concat()\` always returns a **new** array. The original array is never modified. This makes it useful in functional programming and state management patterns.

**Challenge:** Implement \`safeConcat(arr, extra)\` that returns a new array combining \`arr\` and \`extra\`, without changing \`arr\`.

\`\`\`ts
const original = [1, 2, 3]
safeConcat(original, [4, 5]) // → [1, 2, 3, 4, 5]
// original is still [1, 2, 3]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.concat',
    initialCode: `function safeConcat(arr: number[], extra: number[]): number[] {
  // Use arr.concat(extra) — the original arr must remain unchanged
}`,
    solution: `function safeConcat(arr: number[], extra: number[]): number[] {
  return arr.concat(extra)
}`,
    tests: [
      { description: 'returns combined array', assertion: "expect(safeConcat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])" },
      { description: 'original array is not mutated', assertion: "const a = [1, 2, 3]; safeConcat(a, [4]); expect(a).toEqual([1, 2, 3])" },
      { description: 'result is a new array reference', assertion: "const a = [1, 2]; const result = safeConcat(a, [3]); expect(result === a).toBe(false)" },
      { description: 'works with empty extra', assertion: "expect(safeConcat([1, 2, 3], [])).toEqual([1, 2, 3])" },
      { description: 'works with empty original', assertion: "expect(safeConcat([], [1, 2])).toEqual([1, 2])" },
    ],
    hints: [
      '`concat()` always returns a brand new array, leaving the original intact.',
      'This is one reason `concat` is preferred over `push` in immutable patterns like Redux reducers.',
    ],
    tags: ['Array', 'Array.prototype.concat', 'immutability', 'intermediate'],
  },
  {
    slug: 'array-concat-nested',
    title: 'Array.prototype.concat() — merge three arrays',
    description: `## Array.prototype.concat() — chaining multiple arrays

You can pass multiple arrays to a single \`concat()\` call. This merges them all without intermediate arrays.

**Challenge:** Implement \`mergeThree(a, b, c)\` that returns a single array containing all elements from \`a\`, \`b\`, and \`c\` using \`a.concat(b, c)\`.

\`\`\`ts
mergeThree([1], [2, 3], [4]) // → [1, 2, 3, 4]
mergeThree([], ['x'], ['y']) // → ['x', 'y']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.concat',
    initialCode: `function mergeThree<T>(a: T[], b: T[], c: T[]): T[] {
  // Use a.concat(b, c) to combine three arrays in one call
}`,
    solution: `function mergeThree<T>(a: T[], b: T[], c: T[]): T[] {
  return a.concat(b, c)
}`,
    tests: [
      { description: 'merges three number arrays', assertion: "expect(mergeThree([1], [2, 3], [4])).toEqual([1, 2, 3, 4])" },
      { description: 'merges with empty arrays', assertion: "expect(mergeThree([], ['x'], ['y'])).toEqual(['x', 'y'])" },
      { description: 'all empty returns []', assertion: "expect(mergeThree([], [], [])).toEqual([])" },
      { description: 'preserves order a then b then c', assertion: "expect(mergeThree([3], [1], [2])).toEqual([3, 1, 2])" },
      { description: 'result has correct length', assertion: "expect(mergeThree([1, 2], [3], [4, 5])).toHaveLength(5)" },
    ],
    hints: [
      '`a.concat(b, c)` is equivalent to `a.concat(b).concat(c)` but more efficient.',
      'All arguments to `concat` are merged in order from left to right.',
    ],
    tags: ['Array', 'Array.prototype.concat', 'merge', 'intermediate'],
  },
]
