import type { Exercise } from '@/shared/types/exercises'

export const findExercises: Exercise[] = [
  {
    slug: 'array-find-number',
    title: 'Array.prototype.find() — find first match',
    description: `## Array.prototype.find()

\`Array.prototype.find(callback)\` returns the **first** element for which the callback returns a truthy value, or \`undefined\` if no element matches. It short-circuits on the first match.

**Challenge:** Implement \`findFirst(nums, min)\` that returns the first number >= \`min\`.

\`\`\`ts
findFirst([1, 5, 3, 10], 5) // → 5
findFirst([1, 2, 3], 10)    // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.find',
    initialCode: `function findFirst(nums: number[], min: number): number | undefined {
  // Use nums.find(n => n >= min)
}`,
    solution: `function findFirst(nums: number[], min: number): number | undefined {
  return nums.find(n => n >= min)
}`,
    tests: [
      { description: 'returns first element >= min', assertion: "expect(findFirst([1, 5, 3, 10], 5)).toBe(5)" },
      { description: 'returns undefined when none qualify', assertion: "expect(findFirst([1, 2, 3], 10)).toBeUndefined()" },
      { description: 'returns first qualifying from start', assertion: "expect(findFirst([10, 1, 20], 5)).toBe(10)" },
      { description: 'empty array returns undefined', assertion: "expect(findFirst([], 5)).toBeUndefined()" },
      { description: 'exact match qualifies', assertion: "expect(findFirst([3, 4, 5], 3)).toBe(3)" },
    ],
    hints: [
      '`find()` returns the element itself, not its index.',
      '`find()` stops at the first match — it does not scan the entire array unnecessarily.',
    ],
    tags: ['Array', 'Array.prototype.find', 'search', 'beginner'],
  },
  {
    slug: 'array-find-object',
    title: 'Array.prototype.find() — find object by id',
    description: `## Array.prototype.find() — objects

\`find()\` is commonly used to look up an object in an array by a unique property such as an \`id\`.

**Challenge:** Implement \`findById(items, id)\` that returns the first item whose \`id\` matches.

\`\`\`ts
findById([{id:1,name:'A'},{id:2,name:'B'}], 2) // → {id:2, name:'B'}
findById([{id:1,name:'A'}], 99)                // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.find',
    initialCode: `function findById(items: {id: number, name: string}[], id: number): {id: number, name: string} | undefined {
  // Use items.find(item => item.id === id)
}`,
    solution: `function findById(items: {id: number, name: string}[], id: number): {id: number, name: string} | undefined {
  return items.find(item => item.id === id)
}`,
    tests: [
      { description: 'finds item by id', assertion: "expect(findById([{id:1,name:'A'},{id:2,name:'B'}], 2)).toEqual({id:2,name:'B'})" },
      { description: 'returns undefined when id not found', assertion: "expect(findById([{id:1,name:'A'}], 99)).toBeUndefined()" },
      { description: 'returns first match', assertion: "expect(findById([{id:1,name:'A'},{id:1,name:'B'}], 1)).toEqual({id:1,name:'A'})" },
      { description: 'empty array returns undefined', assertion: "expect(findById([], 1)).toBeUndefined()" },
      { description: 'finds with single item', assertion: "expect(findById([{id:5,name:'X'}], 5)).toEqual({id:5,name:'X'})" },
    ],
    hints: [
      'Use strict equality `===` when comparing ids to avoid type coercion.',
      '`find()` returns the actual object reference, not a copy.',
    ],
    tags: ['Array', 'Array.prototype.find', 'objects', 'id-lookup', 'intermediate'],
  },
  {
    slug: 'array-find-undefined',
    title: 'Array.prototype.find() — returns undefined when not found',
    description: `## Array.prototype.find() — no match

When no element satisfies the predicate, \`find()\` returns \`undefined\` (not \`-1\` like \`indexOf\`).

**Challenge:** Implement \`findEven(nums)\` that returns the first even number, or \`undefined\` if none exists.

\`\`\`ts
findEven([1, 3, 4, 5]) // → 4
findEven([1, 3, 5])    // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.find',
    initialCode: `function findEven(nums: number[]): number | undefined {
  // Use nums.find(n => n % 2 === 0)
}`,
    solution: `function findEven(nums: number[]): number | undefined {
  return nums.find(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns first even number', assertion: "expect(findEven([1, 3, 4, 5])).toBe(4)" },
      { description: 'returns undefined for all odd', assertion: "expect(findEven([1, 3, 5])).toBeUndefined()" },
      { description: 'empty array returns undefined', assertion: "expect(findEven([])).toBeUndefined()" },
      { description: 'returns first even not last', assertion: "expect(findEven([2, 4, 6])).toBe(2)" },
      { description: 'works with negative evens', assertion: "expect(findEven([-1, -2, 3])).toBe(-2)" },
    ],
    hints: [
      '`find()` returns `undefined`, not `-1` — check carefully in conditionals.',
      'To test the return value, use `=== undefined` or the optional chaining operator.',
    ],
    tags: ['Array', 'Array.prototype.find', 'undefined', 'beginner'],
  },
  {
    slug: 'array-find-string',
    title: 'Array.prototype.find() — find string by length',
    description: `## Array.prototype.find() — strings

\`find()\` works with any element type. You can use it to find strings satisfying a length or content condition.

**Challenge:** Implement \`findLongest(strs)\` that returns the first string with more than 5 characters.

\`\`\`ts
findLongest(['hi', 'hello', 'greetings']) // → 'greetings'
findLongest(['a', 'bb', 'ccc'])           // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.find',
    initialCode: `function findLongest(strs: string[]): string | undefined {
  // Use strs.find(s => s.length > 5)
}`,
    solution: `function findLongest(strs: string[]): string | undefined {
  return strs.find(s => s.length > 5)
}`,
    tests: [
      { description: "finds first string longer than 5", assertion: "expect(findLongest(['hi', 'hello', 'greetings'])).toBe('greetings')" },
      { description: 'returns undefined when none long enough', assertion: "expect(findLongest(['a', 'bb', 'ccc'])).toBeUndefined()" },
      { description: 'returns first qualifying string', assertion: "expect(findLongest(['longer', 'also longer'])).toBe('longer')" },
      { description: 'empty array returns undefined', assertion: "expect(findLongest([])).toBeUndefined()" },
      { description: 'exactly 5 chars does not qualify', assertion: "expect(findLongest(['hello'])).toBeUndefined()" },
    ],
    hints: [
      'Use `s.length > 5` — this excludes strings of exactly 5 characters.',
      '`find()` returns the first match in order, not the longest match.',
    ],
    tags: ['Array', 'Array.prototype.find', 'string', 'length', 'intermediate'],
  },
  {
    slug: 'array-find-complex',
    title: 'Array.prototype.find() — find in range',
    description: `## Array.prototype.find() — compound conditions

\`find()\` predicates can be as complex as needed. Multiple conditions can be combined with \`&&\` to narrow the search.

**Challenge:** Implement \`findInRange(nums, lo, hi)\` that returns the first number between \`lo\` and \`hi\` (inclusive).

\`\`\`ts
findInRange([1, 5, 3, 8, 6], 4, 7) // → 5
findInRange([1, 2, 3], 10, 20)     // → undefined
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.find',
    initialCode: `function findInRange(nums: number[], lo: number, hi: number): number | undefined {
  // Use nums.find(n => n >= lo && n <= hi)
}`,
    solution: `function findInRange(nums: number[], lo: number, hi: number): number | undefined {
  return nums.find(n => n >= lo && n <= hi)
}`,
    tests: [
      { description: 'returns first element in range [4,7]', assertion: "expect(findInRange([1, 5, 3, 8, 6], 4, 7)).toBe(5)" },
      { description: 'returns undefined when none in range', assertion: "expect(findInRange([1, 2, 3], 10, 20)).toBeUndefined()" },
      { description: 'inclusive of lo and hi', assertion: "expect(findInRange([5, 10, 15], 10, 10)).toBe(10)" },
      { description: 'empty array returns undefined', assertion: "expect(findInRange([], 1, 10)).toBeUndefined()" },
      { description: 'returns first not best match', assertion: "expect(findInRange([3, 5, 7], 4, 8)).toBe(5)" },
    ],
    hints: [
      'Combine conditions with `&&`: `n >= lo && n <= hi`.',
      'Remember: `find` returns the first element that satisfies the condition in array order.',
    ],
    tags: ['Array', 'Array.prototype.find', 'range', 'intermediate'],
  },
]
