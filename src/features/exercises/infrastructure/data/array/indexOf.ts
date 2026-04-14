import type { Exercise } from '@/shared/types/exercises'

export const indexOfExercises: Exercise[] = [
  {
    slug: 'array-indexof-basic',
    title: 'Array.prototype.indexOf() — find first index',
    description: `## Array.prototype.indexOf()

\`Array.prototype.indexOf(value, fromIndex?)\` returns the index of the **first** occurrence of \`value\` using strict equality (\`===\`), or \`-1\` if not found.

**Challenge:** Implement \`firstIndexOf(arr, val)\` that returns \`arr.indexOf(val)\`.

\`\`\`ts
firstIndexOf([1, 2, 3, 2], 2) // → 1
firstIndexOf([1, 2, 3], 9)    // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.indexOf',
    initialCode: `function firstIndexOf(arr: number[], val: number): number {
  // Use arr.indexOf(val)
}`,
    solution: `function firstIndexOf(arr: number[], val: number): number {
  return arr.indexOf(val)
}`,
    tests: [
      { description: 'returns first index of value', assertion: "expect(firstIndexOf([1, 2, 3, 2], 2)).toBe(1)" },
      { description: 'returns -1 when not found', assertion: "expect(firstIndexOf([1, 2, 3], 9)).toBe(-1)" },
      { description: 'returns 0 for first element', assertion: "expect(firstIndexOf([5, 6, 7], 5)).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(firstIndexOf([], 1)).toBe(-1)" },
      { description: 'returns first not last occurrence', assertion: "expect(firstIndexOf([1, 2, 1], 1)).toBe(0)" },
    ],
    hints: [
      '`indexOf` uses strict equality (`===`) — it cannot find `NaN`.',
      '`indexOf` returns the first occurrence; use `lastIndexOf` for the last one.',
    ],
    tags: ['Array', 'Array.prototype.indexOf', 'index', 'beginner'],
  },
  {
    slug: 'array-indexof-not-found',
    title: 'Array.prototype.indexOf() — returns -1 when not found',
    description: `## Array.prototype.indexOf() — -1 sentinel

By convention, \`-1\` means "not found" for all index-returning array methods. Always check the return value before using it as an index.

**Challenge:** Implement \`indexOf5(arr)\` that returns the index of \`5\` in the array, or \`-1\` if not present.

\`\`\`ts
indexOf5([1, 5, 3])  // → 1
indexOf5([1, 2, 3])  // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.indexOf',
    initialCode: `function indexOf5(arr: number[]): number {
  // Use arr.indexOf(5)
}`,
    solution: `function indexOf5(arr: number[]): number {
  return arr.indexOf(5)
}`,
    tests: [
      { description: 'finds 5 at correct index', assertion: "expect(indexOf5([1, 5, 3])).toBe(1)" },
      { description: 'returns -1 when 5 absent', assertion: "expect(indexOf5([1, 2, 3])).toBe(-1)" },
      { description: 'returns 0 when 5 is first', assertion: "expect(indexOf5([5, 1, 2])).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(indexOf5([])).toBe(-1)" },
      { description: 'returns first index when multiple 5s', assertion: "expect(indexOf5([5, 5, 5])).toBe(0)" },
    ],
    hints: [
      'Check `=== -1` to determine if the element was not found.',
      'Never use the returned index directly without checking for `-1` first.',
    ],
    tags: ['Array', 'Array.prototype.indexOf', 'not-found', 'beginner'],
  },
  {
    slug: 'array-indexof-string',
    title: 'Array.prototype.indexOf() — find word index',
    description: `## Array.prototype.indexOf() — strings

\`indexOf\` works with string arrays too, using case-sensitive strict equality.

**Challenge:** Implement \`findWord(words, word)\` that returns the index of \`word\` in the array.

\`\`\`ts
findWord(['foo', 'bar', 'baz'], 'bar') // → 1
findWord(['foo', 'bar'], 'qux')        // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.indexOf',
    initialCode: `function findWord(words: string[], word: string): number {
  // Use words.indexOf(word)
}`,
    solution: `function findWord(words: string[], word: string): number {
  return words.indexOf(word)
}`,
    tests: [
      { description: "finds 'bar' at index 1", assertion: "expect(findWord(['foo', 'bar', 'baz'], 'bar')).toBe(1)" },
      { description: 'returns -1 for absent word', assertion: "expect(findWord(['foo', 'bar'], 'qux')).toBe(-1)" },
      { description: 'case-sensitive', assertion: "expect(findWord(['hello'], 'Hello')).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(findWord([], 'a')).toBe(-1)" },
      { description: 'finds first occurrence', assertion: "expect(findWord(['x', 'y', 'x'], 'x')).toBe(0)" },
    ],
    hints: [
      '`indexOf` is case-sensitive — `"hello" !== "Hello"`.',
      'For case-insensitive search, you would need `findIndex` with a `.toLowerCase()` comparison.',
    ],
    tags: ['Array', 'Array.prototype.indexOf', 'string', 'beginner'],
  },
  {
    slug: 'array-indexof-from',
    title: 'Array.prototype.indexOf() — search from index',
    description: `## Array.prototype.indexOf() — fromIndex

The optional second argument \`fromIndex\` tells \`indexOf\` where to start searching. This lets you find subsequent occurrences after a known position.

**Challenge:** Implement \`indexOfFrom(arr, val, from)\` that uses \`arr.indexOf(val, from)\`.

\`\`\`ts
indexOfFrom([1, 2, 1, 2], 2, 2) // → 3
indexOfFrom([1, 2, 1, 2], 1, 1) // → 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.indexOf',
    initialCode: `function indexOfFrom(arr: number[], val: number, from: number): number {
  // Use arr.indexOf(val, from) to search starting from index from
}`,
    solution: `function indexOfFrom(arr: number[], val: number, from: number): number {
  return arr.indexOf(val, from)
}`,
    tests: [
      { description: 'finds value after fromIndex', assertion: "expect(indexOfFrom([1, 2, 1, 2], 2, 2)).toBe(3)" },
      { description: 'finds second occurrence', assertion: "expect(indexOfFrom([1, 2, 1, 2], 1, 1)).toBe(2)" },
      { description: 'fromIndex 0 searches all', assertion: "expect(indexOfFrom([1, 2, 3], 1, 0)).toBe(0)" },
      { description: 'returns -1 when not found after fromIndex', assertion: "expect(indexOfFrom([1, 2, 3], 1, 1)).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(indexOfFrom([], 1, 0)).toBe(-1)" },
    ],
    hints: [
      '`fromIndex` specifies where to start — elements before it are skipped.',
      'To find all occurrences, loop calling `indexOf(val, lastIndex + 1)` until `-1` is returned.',
    ],
    tags: ['Array', 'Array.prototype.indexOf', 'fromIndex', 'intermediate'],
  },
  {
    slug: 'array-indexof-first-duplicate',
    title: 'Array.prototype.indexOf() — find first duplicate value',
    description: `## Array.prototype.indexOf() — detecting duplicates

By comparing \`indexOf(val)\` with \`lastIndexOf(val)\`, you can tell whether a value appears more than once. The first value where they differ is the first duplicate.

**Challenge:** Implement \`firstDuplicate(arr)\` that returns the first value that appears more than once, or \`-1\` if all values are unique.

\`\`\`ts
firstDuplicate([1, 2, 3, 2, 1]) // → 2 (first value that repeats)
firstDuplicate([1, 2, 3])        // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.indexOf',
    initialCode: `function firstDuplicate(arr: number[]): number {
  // Find the first value where indexOf(val) !== lastIndexOf(val)
}`,
    solution: `function firstDuplicate(arr: number[]): number {
  for (const val of arr) {
    if (arr.indexOf(val) !== arr.lastIndexOf(val)) return val
  }
  return -1
}`,
    tests: [
      { description: 'returns first duplicate value', assertion: "expect(firstDuplicate([1, 2, 3, 2, 1])).toBe(2)" },
      { description: 'returns -1 when all unique', assertion: "expect(firstDuplicate([1, 2, 3])).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(firstDuplicate([])).toBe(-1)" },
      { description: 'single element no duplicate', assertion: "expect(firstDuplicate([5])).toBe(-1)" },
      { description: 'first element repeated', assertion: "expect(firstDuplicate([1, 2, 1])).toBe(1)" },
    ],
    hints: [
      'A value is a duplicate when `arr.indexOf(val) !== arr.lastIndexOf(val)`.',
      'Iterate and return on the first such value found.',
    ],
    tags: ['Array', 'Array.prototype.indexOf', 'duplicate', 'intermediate'],
  },
]
