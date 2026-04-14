import type { Exercise } from '@/shared/types/exercises'

export const groupByExercises: Exercise[] = [
  {
    slug: 'object-group-by-property',
    title: 'Object.groupBy() — group by property value',
    description: `## Object.groupBy() (ES2024)

\`Object.groupBy(array, keyFn)\` groups the elements of \`array\` into an object where the keys are the return values of \`keyFn\`.

**Challenge:** Implement \`groupByType(items)\` that groups objects in \`items\` by their \`type\` property.

\`\`\`ts
groupByType([{type:'a',v:1},{type:'b',v:2},{type:'a',v:3}])
// → { a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}] }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.groupBy',
    initialCode: `function groupByType(items: { type: string; v: number }[]): Record<string, { type: string; v: number }[]> {
  // Use (Object as any).groupBy to group items by their type property
}`,
    solution: `function groupByType(items: { type: string; v: number }[]): Record<string, { type: string; v: number }[]> {
  return (Object as any).groupBy(items, (item: { type: string }) => item.type)
}`,
    tests: [
      { description: 'groups by type correctly', assertion: "expect(groupByType([{type:'a',v:1},{type:'b',v:2},{type:'a',v:3}])).toEqual({ a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}] })" },
      { description: 'single type group', assertion: "expect(groupByType([{type:'x',v:1}])).toEqual({ x: [{type:'x',v:1}] })" },
      { description: 'empty array returns empty object', assertion: "expect(groupByType([])).toEqual({})" },
      { description: 'three items same type', assertion: "expect(groupByType([{type:'a',v:1},{type:'a',v:2},{type:'a',v:3}]).a).toHaveLength(3)" },
      { description: 'result has two keys for two types', assertion: "expect(Object.keys(groupByType([{type:'a',v:1},{type:'b',v:2}]))).toHaveLength(2)" },
    ],
    hints: [
      '`Object.groupBy(array, item => item.type)` groups by the `type` property.',
      'Cast as `(Object as any).groupBy(...)` if TypeScript does not recognise it.',
    ],
    tags: ['Object', 'Object.groupBy', 'ES2024', 'intermediate'],
  },
  {
    slug: 'object-group-by-even-odd',
    title: 'Object.groupBy() — group numbers by even/odd',
    description: `## Object.groupBy() — custom key function

The key function can return any string. A classic example is grouping numbers as \`'even'\` or \`'odd'\`.

**Challenge:** Implement \`groupEvenOdd(nums)\` that groups numbers into \`even\` and \`odd\`.

\`\`\`ts
groupEvenOdd([1, 2, 3, 4]) // → { odd: [1, 3], even: [2, 4] }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.groupBy',
    initialCode: `function groupEvenOdd(nums: number[]): Record<string, number[]> {
  // Group numbers as 'even' or 'odd' using (Object as any).groupBy
}`,
    solution: `function groupEvenOdd(nums: number[]): Record<string, number[]> {
  return (Object as any).groupBy(nums, (n: number) => n % 2 === 0 ? 'even' : 'odd')
}`,
    tests: [
      { description: 'groups correctly', assertion: "expect(groupEvenOdd([1, 2, 3, 4])).toEqual({ odd: [1, 3], even: [2, 4] })" },
      { description: 'all even', assertion: "expect(groupEvenOdd([2, 4, 6]).even).toHaveLength(3)" },
      { description: 'all odd', assertion: "expect(groupEvenOdd([1, 3, 5]).odd).toHaveLength(3)" },
      { description: 'empty array returns empty object', assertion: "expect(groupEvenOdd([])).toEqual({})" },
      { description: 'single even number', assertion: "expect(groupEvenOdd([4])).toEqual({ even: [4] })" },
    ],
    hints: [
      'Return `"even"` or `"odd"` from the key function based on `n % 2`.',
    ],
    tags: ['Object', 'Object.groupBy', 'ES2024', 'intermediate'],
  },
  {
    slug: 'object-group-by-string-length',
    title: 'Object.groupBy() — group strings by length',
    description: `## Object.groupBy() — numeric group keys

The key function can return a number too (it gets coerced to a string key). Grouping strings by length is a common example.

**Challenge:** Implement \`groupByLength(words)\` that groups strings by their \`.length\`.

\`\`\`ts
groupByLength(['a', 'bb', 'cc', 'ddd'])
// → { '1': ['a'], '2': ['bb', 'cc'], '3': ['ddd'] }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.groupBy',
    initialCode: `function groupByLength(words: string[]): Record<string, string[]> {
  // Group words by their length using (Object as any).groupBy
}`,
    solution: `function groupByLength(words: string[]): Record<string, string[]> {
  return (Object as any).groupBy(words, (w: string) => w.length)
}`,
    tests: [
      { description: 'groups by length correctly', assertion: "expect(groupByLength(['a', 'bb', 'cc', 'ddd'])).toEqual({ '1': ['a'], '2': ['bb', 'cc'], '3': ['ddd'] })" },
      { description: 'empty array returns empty object', assertion: "expect(groupByLength([])).toEqual({})" },
      { description: 'single word group', assertion: "expect(groupByLength(['hi'])).toEqual({ '2': ['hi'] })" },
      { description: 'all same length', assertion: "expect(Object.keys(groupByLength(['ab', 'cd', 'ef']))).toHaveLength(1)" },
      { description: 'group length 3 has two items', assertion: "expect(groupByLength(['abc', 'def', 'x'])['3']).toHaveLength(2)" },
    ],
    hints: [
      'Return `w.length` from the key function — numbers are coerced to string keys.',
    ],
    tags: ['Object', 'Object.groupBy', 'ES2024', 'intermediate'],
  },
  {
    slug: 'object-group-by-empty',
    title: 'Object.groupBy() — empty array',
    description: `## Object.groupBy() — empty input

Calling \`Object.groupBy\` with an empty array returns an empty object \`{}\`.

**Challenge:** Implement \`groupEmpty()\` that calls \`Object.groupBy([], () => 'x')\` and returns the result.

\`\`\`ts
groupEmpty() // → {}
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.groupBy',
    initialCode: `function groupEmpty(): Record<string, unknown[]> {
  // Call (Object as any).groupBy with an empty array
}`,
    solution: `function groupEmpty(): Record<string, unknown[]> {
  return (Object as any).groupBy([], () => 'x')
}`,
    tests: [
      { description: 'returns empty object', assertion: "expect(groupEmpty()).toEqual({})" },
      { description: 'has no keys', assertion: "expect(Object.keys(groupEmpty())).toHaveLength(0)" },
      { description: 'is typeof object', assertion: "expect(typeof groupEmpty()).toBe('object')" },
      { description: 'is not null', assertion: "expect(groupEmpty()).not.toBeNull()" },
      { description: 'empty iterable always gives empty result', assertion: "expect((Object as any).groupBy([], (x: unknown) => x)).toEqual({})" },
    ],
    hints: [
      'An empty iterable always results in no groups.',
    ],
    tags: ['Object', 'Object.groupBy', 'ES2024', 'beginner'],
  },
  {
    slug: 'object-group-by-first-letter',
    title: 'Object.groupBy() — group by first letter',
    description: `## Object.groupBy() — string key derived from item

You can derive the group key from any property of the item. Grouping words by their first letter is a natural example.

**Challenge:** Implement \`groupByFirstLetter(words)\` that groups words by their first character.

\`\`\`ts
groupByFirstLetter(['apple', 'ant', 'banana'])
// → { a: ['apple', 'ant'], b: ['banana'] }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.groupBy',
    initialCode: `function groupByFirstLetter(words: string[]): Record<string, string[]> {
  // Group words by their first character using (Object as any).groupBy
}`,
    solution: `function groupByFirstLetter(words: string[]): Record<string, string[]> {
  return (Object as any).groupBy(words, (w: string) => w[0])
}`,
    tests: [
      { description: 'groups by first letter', assertion: "expect(groupByFirstLetter(['apple', 'ant', 'banana'])).toEqual({ a: ['apple', 'ant'], b: ['banana'] })" },
      { description: 'empty array returns empty object', assertion: "expect(groupByFirstLetter([])).toEqual({})" },
      { description: 'single word', assertion: "expect(groupByFirstLetter(['cat'])).toEqual({ c: ['cat'] })" },
      { description: 'three distinct first letters', assertion: "expect(Object.keys(groupByFirstLetter(['a', 'b', 'c']))).toHaveLength(3)" },
      { description: 'one letter two words', assertion: "expect(groupByFirstLetter(['dog', 'duck']).d).toHaveLength(2)" },
    ],
    hints: [
      'Return `w[0]` (or `w.charAt(0)`) from the key function.',
    ],
    tags: ['Object', 'Object.groupBy', 'ES2024', 'intermediate'],
  },
]
