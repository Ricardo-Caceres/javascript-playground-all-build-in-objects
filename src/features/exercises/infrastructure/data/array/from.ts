import type { Exercise } from '@/shared/types/exercises'

export const fromExercises: Exercise[] = [
  {
    slug: 'array-from-index-array',
    title: 'Array.from() — create an index array',
    description: `## Array.from() — length-object + map

\`Array.from()\` accepts any array-like object — including plain objects with a \`length\` property. Combined with the optional mapping function (second argument), you can generate sequences without a loop.

This pattern mirrors how \`Array.from(nodeList)\` works in the browser to convert a DOM NodeList into a real array.

**Challenge:** Implement \`createIndexArray\` that returns \`[0, 1, 2, …, n-1]\` using \`Array.from({ length: n }, (_, i) => i)\`.

\`\`\`ts
createIndexArray(3) // → [0, 1, 2]
createIndexArray(0) // → []
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.from',
    initialCode: `function createIndexArray(n: number): number[] {
  // Use Array.from({ length: n }, (_, i) => i) to create [0, 1, ..., n-1]
}`,
    solution: `function createIndexArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i)
}`,
    tests: [
      { description: 'createIndexArray(3) returns [0,1,2]', assertion: 'expect(createIndexArray(3)).toEqual([0, 1, 2])' },
      { description: 'createIndexArray(0) returns []', assertion: 'expect(createIndexArray(0)).toEqual([])' },
      { description: 'first element is always 0', assertion: 'expect(createIndexArray(5)[0]).toBe(0)' },
      { description: 'last element is n-1', assertion: 'expect(createIndexArray(4)[3]).toBe(3)' },
      { description: 'has correct length', assertion: 'expect(createIndexArray(7)).toHaveLength(7)' },
    ],
    hints: [
      '`{ length: n }` is an array-like object — `Array.from` treats it like a sparse array.',
      'The mapping function receives `(value, index)` — use the index to produce the sequence.',
    ],
    tags: ['Array', 'Array.from', 'array-like', 'beginner'],
  },
  {
    slug: 'array-from-set',
    title: 'Array.from() — deduplicate with a Set',
    description: `## Array.from() — converting a Set

A \`Set\` only holds unique values. By converting an array to a \`Set\` and back with \`Array.from()\`, you can remove duplicates in one expression. \`Set\` is iterable, so \`Array.from()\` works directly on it.

**Challenge:** Implement \`removeDuplicates\` that removes duplicate numbers from an array.

\`\`\`ts
removeDuplicates([1, 2, 2, 3, 3, 3]) // → [1, 2, 3]
removeDuplicates([])                  // → []
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.from',
    initialCode: `function removeDuplicates(arr: number[]): number[] {
  // Convert to Set to remove duplicates, then back to array with Array.from
}`,
    solution: `function removeDuplicates(arr: number[]): number[] {
  return Array.from(new Set(arr))
}`,
    tests: [
      { description: 'removes duplicates from [1,2,2,3]', assertion: 'expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3])' },
      { description: 'empty array returns empty array', assertion: 'expect(removeDuplicates([])).toEqual([])' },
      { description: 'array with all duplicates returns one element', assertion: 'expect(removeDuplicates([5, 5, 5])).toEqual([5])' },
      { description: 'already unique array is unchanged', assertion: 'expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3])' },
      { description: 'result is a real array', assertion: 'expect(Array.isArray(removeDuplicates([1, 1]))).toBe(true)' },
    ],
    hints: [
      '`new Set(arr)` creates a Set from the array, automatically dropping duplicates.',
      '`Array.from(set)` converts the Set back into a plain array.',
    ],
    tags: ['Array', 'Array.from', 'Set', 'deduplication', 'intermediate'],
  },
  {
    slug: 'array-from-map-function',
    title: 'Array.from() — generate even numbers with a map function',
    description: `## Array.from() — with a mapping function

The second argument to \`Array.from()\` is a mapping function applied to each element as the array is built. This lets you combine creation and transformation in a single step.

**Challenge:** Implement \`createEvenNumbers\` that returns the first \`count\` positive even numbers: \`[2, 4, 6, …, count*2]\`.

\`\`\`ts
createEvenNumbers(5) // → [2, 4, 6, 8, 10]
createEvenNumbers(1) // → [2]
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.from',
    initialCode: `function createEvenNumbers(count: number): number[] {
  // Use Array.from({ length: count }, (_, i) => (i + 1) * 2)
}`,
    solution: `function createEvenNumbers(count: number): number[] {
  return Array.from({ length: count }, (_, i) => (i + 1) * 2)
}`,
    tests: [
      { description: 'createEvenNumbers(5) returns [2,4,6,8,10]', assertion: 'expect(createEvenNumbers(5)).toEqual([2, 4, 6, 8, 10])' },
      { description: 'createEvenNumbers(1) returns [2]', assertion: 'expect(createEvenNumbers(1)).toEqual([2])' },
      { description: 'createEvenNumbers(0) returns []', assertion: 'expect(createEvenNumbers(0)).toEqual([])' },
      { description: 'all values are even', assertion: 'expect(createEvenNumbers(4).every(n => n % 2 === 0)).toBe(true)' },
      { description: 'has correct length', assertion: 'expect(createEvenNumbers(6)).toHaveLength(6)' },
    ],
    hints: [
      'Use index `i` inside the map function: `(i + 1) * 2` gives 2, 4, 6…',
      'The first argument `{ length: count }` controls how many elements are generated.',
    ],
    tags: ['Array', 'Array.from', 'map', 'intermediate'],
  },
  {
    slug: 'array-from-string-unicode',
    title: 'Array.from() — count Unicode code points',
    description: `## Array.from() — Unicode-safe string splitting

\`str.split('')\` splits a string by UTF-16 code units, which breaks emoji and other characters outside the Basic Multilingual Plane into two surrogates. \`Array.from(str)\` iterates by **code point**, keeping emoji intact.

**Challenge:** Implement \`countCodePoints\` that returns the number of Unicode code points in a string using \`Array.from(str).length\`.

\`\`\`ts
countCodePoints('hello')   // → 5
countCodePoints('hi 👋')   // → 4  (not 5 — emoji is one code point)
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.from',
    initialCode: `function countCodePoints(str: string): number {
  // Use Array.from(str).length for Unicode-aware character count
}`,
    solution: `function countCodePoints(str: string): number {
  return Array.from(str).length
}`,
    tests: [
      { description: "countCodePoints('hello') is 5", assertion: "expect(countCodePoints('hello')).toBe(5)" },
      { description: "empty string is 0", assertion: "expect(countCodePoints('')).toBe(0)" },
      { description: "emoji counts as 1 code point", assertion: "expect(countCodePoints('👋')).toBe(1)" },
      { description: "string with emoji: 'hi 👋' is 4", assertion: "expect(countCodePoints('hi 👋')).toBe(4)" },
      { description: "result is a number", assertion: "expect(typeof countCodePoints('abc')).toBe('number')" },
    ],
    hints: [
      '`Array.from(str)` uses the string\'s Symbol.iterator which yields code points.',
      'Compare `Array.from("👋").length` (1) vs `"👋".split("").length` (2) to see the difference.',
    ],
    tags: ['Array', 'Array.from', 'Unicode', 'string', 'intermediate'],
  },
  {
    slug: 'array-from-arguments',
    title: 'Array.from() — sum variadic arguments',
    description: `## Array.from() — converting arguments

The legacy \`arguments\` object inside a function is array-like (has \`length\` and integer keys) but is **not** a real array. \`Array.from(arguments)\` converts it into one so you can use array methods.

With modern TypeScript you'd use rest parameters (\`...args\`), but knowing how to convert \`arguments\` is useful when working with older code.

**Challenge:** Implement \`sumAll\` that accepts any number of numbers and returns their sum. Use \`Array.from\` inside the implementation.

\`\`\`ts
sumAll(1, 2, 3)     // → 6
sumAll(10, 20)      // → 30
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.from',
    initialCode: `function sumAll(...args: number[]): number {
  // Use Array.from(args) and .reduce() to sum all arguments
}`,
    solution: `function sumAll(...args: number[]): number {
  return Array.from(args).reduce((acc, n) => acc + n, 0)
}`,
    tests: [
      { description: 'sumAll(1,2,3) is 6', assertion: 'expect(sumAll(1, 2, 3)).toBe(6)' },
      { description: 'sumAll(10,20) is 30', assertion: 'expect(sumAll(10, 20)).toBe(30)' },
      { description: 'sumAll() with no args is 0', assertion: 'expect(sumAll()).toBe(0)' },
      { description: 'sumAll(5) is 5', assertion: 'expect(sumAll(5)).toBe(5)' },
      { description: 'sumAll(1,2,3,4,5) is 15', assertion: 'expect(sumAll(1, 2, 3, 4, 5)).toBe(15)' },
    ],
    hints: [
      'Rest parameters (`...args`) are already a real array — `Array.from(args)` produces a copy of it.',
      'Chain `.reduce((acc, n) => acc + n, 0)` on the result to sum all values.',
    ],
    tags: ['Array', 'Array.from', 'arguments', 'reduce', 'advanced'],
  },
]
