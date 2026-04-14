import type { Exercise } from '@/shared/types/exercises'

export const spliceExercises: Exercise[] = [
  {
    slug: 'array-splice-remove',
    title: 'Array.prototype.splice() — remove an element',
    description: `## Array.prototype.splice()

\`Array.prototype.splice(start, deleteCount, ...items)\` **mutates** the array by removing and/or inserting elements. It returns an array of the removed elements.

**Challenge:** Implement \`removeAt(arr, index)\` that removes 1 element at \`index\` and returns the mutated array.

\`\`\`ts
removeAt([1, 2, 3, 4], 1) // → [1, 3, 4]
removeAt([10, 20, 30], 0) // → [20, 30]
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.splice',
    initialCode: `function removeAt(arr: number[], index: number): number[] {
  // Use arr.splice(index, 1) then return arr
}`,
    solution: `function removeAt(arr: number[], index: number): number[] {
  arr.splice(index, 1)
  return arr
}`,
    tests: [
      { description: 'removes element at index 1', assertion: 'expect(removeAt([1, 2, 3, 4], 1)).toEqual([1, 3, 4])' },
      { description: 'removes element at index 0', assertion: 'expect(removeAt([10, 20, 30], 0)).toEqual([20, 30])' },
      { description: 'removes last element', assertion: 'expect(removeAt([1, 2, 3], 2)).toEqual([1, 2])' },
      { description: 'array length decreases by 1', assertion: 'const a = [1,2,3]; expect(removeAt(a, 0)).toHaveLength(2)' },
      { description: 'mutates the original array', assertion: 'const a = [1,2,3]; removeAt(a, 1); expect(a).toEqual([1,3])' },
    ],
    hints: [
      '`splice(index, 1)` removes exactly one element at the given index.',
      '`splice` mutates the array in place — no need to reassign.',
    ],
    tags: ['Array', 'Array.prototype.splice', 'mutation', 'beginner'],
  },
  {
    slug: 'array-splice-insert',
    title: 'Array.prototype.splice() — insert an element',
    description: `## Array.prototype.splice() — inserting

Passing \`0\` as the \`deleteCount\` tells \`splice\` to delete nothing and only insert elements at the given position.

**Challenge:** Implement \`insertAt(arr, index, val)\` that inserts \`val\` at \`index\` (shifting existing elements right) and returns the mutated array.

\`\`\`ts
insertAt([1, 2, 3], 1, 99) // → [1, 99, 2, 3]
insertAt([10, 20], 0, 5)   // → [5, 10, 20]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.splice',
    initialCode: `function insertAt(arr: number[], index: number, val: number): number[] {
  // Use arr.splice(index, 0, val) then return arr
}`,
    solution: `function insertAt(arr: number[], index: number, val: number): number[] {
  arr.splice(index, 0, val)
  return arr
}`,
    tests: [
      { description: 'inserts at index 1', assertion: 'expect(insertAt([1, 2, 3], 1, 99)).toEqual([1, 99, 2, 3])' },
      { description: 'inserts at index 0', assertion: 'expect(insertAt([10, 20], 0, 5)).toEqual([5, 10, 20])' },
      { description: 'inserts at end', assertion: 'expect(insertAt([1, 2], 2, 3)).toEqual([1, 2, 3])' },
      { description: 'array length increases by 1', assertion: 'expect(insertAt([1, 2, 3], 1, 0)).toHaveLength(4)' },
      { description: 'mutates original', assertion: 'const a = [1, 2, 3]; insertAt(a, 0, 0); expect(a[0]).toBe(0)' },
    ],
    hints: [
      '`splice(index, 0, val)` — deleting 0 elements means only insertion happens.',
      'Elements at `index` and beyond are shifted one position to the right.',
    ],
    tags: ['Array', 'Array.prototype.splice', 'insert', 'intermediate'],
  },
  {
    slug: 'array-splice-replace',
    title: 'Array.prototype.splice() — replace an element',
    description: `## Array.prototype.splice() — replacing

By passing \`1\` as \`deleteCount\` and a new value as the third argument, you can replace an element at any position in a single operation.

**Challenge:** Implement \`replaceAt(arr, index, val)\` that replaces the element at \`index\` with \`val\` and returns the mutated array.

\`\`\`ts
replaceAt([1, 2, 3], 1, 99)  // → [1, 99, 3]
replaceAt([10, 20, 30], 0, 5) // → [5, 20, 30]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.splice',
    initialCode: `function replaceAt(arr: number[], index: number, val: number): number[] {
  // Use arr.splice(index, 1, val) then return arr
}`,
    solution: `function replaceAt(arr: number[], index: number, val: number): number[] {
  arr.splice(index, 1, val)
  return arr
}`,
    tests: [
      { description: 'replaces element at index 1', assertion: 'expect(replaceAt([1, 2, 3], 1, 99)).toEqual([1, 99, 3])' },
      { description: 'replaces element at index 0', assertion: 'expect(replaceAt([10, 20, 30], 0, 5)).toEqual([5, 20, 30])' },
      { description: 'replaces last element', assertion: 'expect(replaceAt([1, 2, 3], 2, 0)).toEqual([1, 2, 0])' },
      { description: 'array length stays the same', assertion: 'expect(replaceAt([1, 2, 3], 1, 9)).toHaveLength(3)' },
      { description: 'mutates the original', assertion: 'const a = [1,2,3]; replaceAt(a, 0, 7); expect(a[0]).toBe(7)' },
    ],
    hints: [
      '`splice(index, 1, val)` removes 1 element and inserts `val` at the same position.',
      'The array length does not change because you remove and insert exactly one element.',
    ],
    tags: ['Array', 'Array.prototype.splice', 'replace', 'intermediate'],
  },
  {
    slug: 'array-splice-returns-removed',
    title: 'Array.prototype.splice() — capture removed elements',
    description: `## Array.prototype.splice() — return value

\`splice\` **returns** an array of the removed elements. This is useful when you need to both remove and capture a range of values.

**Challenge:** Implement \`getRemovedElements(arr, start, count)\` that returns the array of removed elements (the return value of \`splice\`).

\`\`\`ts
getRemovedElements([1, 2, 3, 4, 5], 1, 2) // → [2, 3]
getRemovedElements([10, 20, 30], 0, 1)     // → [10]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.splice',
    initialCode: `function getRemovedElements(arr: number[], start: number, count: number): number[] {
  // Return the result of arr.splice(start, count)
}`,
    solution: `function getRemovedElements(arr: number[], start: number, count: number): number[] {
  return arr.splice(start, count)
}`,
    tests: [
      { description: 'returns removed elements', assertion: 'expect(getRemovedElements([1, 2, 3, 4, 5], 1, 2)).toEqual([2, 3])' },
      { description: 'removes from index 0', assertion: 'expect(getRemovedElements([10, 20, 30], 0, 1)).toEqual([10])' },
      { description: 'count 0 returns empty array', assertion: 'expect(getRemovedElements([1, 2, 3], 0, 0)).toEqual([])' },
      { description: 'original array is mutated', assertion: 'const a = [1, 2, 3, 4]; getRemovedElements(a, 1, 2); expect(a).toEqual([1, 4])' },
      { description: 'returns all when count matches length', assertion: 'expect(getRemovedElements([5, 6, 7], 0, 3)).toEqual([5, 6, 7])' },
    ],
    hints: [
      '`splice` returns an array even if only one element is removed.',
      'The original array is modified — elements are actually taken out.',
    ],
    tags: ['Array', 'Array.prototype.splice', 'return-value', 'intermediate'],
  },
  {
    slug: 'array-splice-multiple',
    title: 'Array.prototype.splice() — replace a range',
    description: `## Array.prototype.splice() — remove and insert multiple

You can remove multiple elements and insert multiple replacements in one \`splice\` call. The number of removed and inserted items do not need to match.

**Challenge:** Implement \`replaceRange(arr, start, count, ...items)\` that removes \`count\` elements from \`start\` and inserts \`items\`, then returns the mutated array.

\`\`\`ts
replaceRange([1, 2, 3, 4, 5], 1, 2, 10, 20, 30)
// → [1, 10, 20, 30, 4, 5]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.splice',
    initialCode: `function replaceRange(arr: number[], start: number, count: number, ...items: number[]): number[] {
  // Use arr.splice(start, count, ...items) then return arr
}`,
    solution: `function replaceRange(arr: number[], start: number, count: number, ...items: number[]): number[] {
  arr.splice(start, count, ...items)
  return arr
}`,
    tests: [
      { description: 'replaces 2 elements with 3', assertion: 'expect(replaceRange([1, 2, 3, 4, 5], 1, 2, 10, 20, 30)).toEqual([1, 10, 20, 30, 4, 5])' },
      { description: 'replaces with fewer items', assertion: 'expect(replaceRange([1, 2, 3, 4], 1, 2, 99)).toEqual([1, 99, 4])' },
      { description: 'count 0 inserts without removing', assertion: 'expect(replaceRange([1, 2, 3], 1, 0, 10, 11)).toEqual([1, 10, 11, 2, 3])' },
      { description: 'items 0 only removes', assertion: 'expect(replaceRange([1, 2, 3, 4], 1, 2)).toEqual([1, 4])' },
      { description: 'mutates the original array', assertion: 'const a = [1,2,3]; replaceRange(a, 0, 1, 7, 8); expect(a[0]).toBe(7)' },
    ],
    hints: [
      'Spread `items` into `splice`: `arr.splice(start, count, ...items)`.',
      'Rest parameters (`...items`) capture any number of trailing arguments as an array.',
    ],
    tags: ['Array', 'Array.prototype.splice', 'rest-params', 'advanced'],
  },
]
