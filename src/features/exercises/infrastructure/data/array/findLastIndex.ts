import type { Exercise } from '@/shared/types/exercises'

export const findLastIndexExercises: Exercise[] = [
  {
    slug: 'array-find-last-index-basic',
    title: 'Array.prototype.findLastIndex() — index of last even',
    description: `## Array.prototype.findLastIndex()

\`Array.prototype.findLastIndex(callback)\` is the reverse of \`findIndex()\`. It iterates from the **end** and returns the index of the last element for which the callback is truthy, or \`-1\` if not found.

**Challenge:** Implement \`lastEvenIndex(nums)\` that returns the index of the last even number.

\`\`\`ts
lastEvenIndex([1, 2, 3, 4, 5]) // → 3
lastEvenIndex([1, 3, 5])       // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findLastIndex',
    initialCode: `function lastEvenIndex(nums: number[]): number {
  // Use nums.findLastIndex(n => n % 2 === 0)
}`,
    solution: `function lastEvenIndex(nums: number[]): number {
  return nums.findLastIndex(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns index of last even in [1,2,3,4,5]', assertion: "expect(lastEvenIndex([1, 2, 3, 4, 5])).toBe(3)" },
      { description: 'returns -1 for all odd', assertion: "expect(lastEvenIndex([1, 3, 5])).toBe(-1)" },
      { description: 'returns last index in all-even array', assertion: "expect(lastEvenIndex([2, 4, 6])).toBe(2)" },
      { description: 'empty array returns -1', assertion: "expect(lastEvenIndex([])).toBe(-1)" },
      { description: 'returns index not the value', assertion: "expect(lastEvenIndex([1, 1, 2])).toBe(2)" },
    ],
    hints: [
      '`findLastIndex()` returns the index of the last matching element, not the element itself.',
      'Returns `-1` when no element satisfies the predicate.',
    ],
    tags: ['Array', 'Array.prototype.findLastIndex', 'index', 'beginner'],
    usageExample: {
      code: `const nums = [1, 3, 7, 2, 5]
nums.findLastIndex(n => n % 2 !== 0)  // → 4  (index of last odd)`,
      explanation: {
        en: 'Use findLastIndex() to get the index of the last element satisfying a condition.',
        es: 'Usa findLastIndex() para obtener el índice del último elemento que satisfaga una condición.',
      },
    },
  },
  {
    slug: 'array-find-last-index-object',
    title: 'Array.prototype.findLastIndex() — last active user index',
    description: `## Array.prototype.findLastIndex() — objects

\`findLastIndex()\` with object arrays lets you locate the index of the last object satisfying a property condition.

**Challenge:** Implement \`lastActiveIndex(users)\` that returns the index of the last user with \`active: true\`.

\`\`\`ts
lastActiveIndex([{active:false},{active:true},{active:false},{active:true}]) // → 3
lastActiveIndex([{active:false}])                                           // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findLastIndex',
    initialCode: `function lastActiveIndex(users: {active: boolean}[]): number {
  // Use users.findLastIndex(u => u.active)
}`,
    solution: `function lastActiveIndex(users: {active: boolean}[]): number {
  return users.findLastIndex(u => u.active)
}`,
    tests: [
      { description: 'returns index of last active user', assertion: "expect(lastActiveIndex([{active:false},{active:true},{active:false},{active:true}])).toBe(3)" },
      { description: 'returns -1 when no active users', assertion: "expect(lastActiveIndex([{active:false}])).toBe(-1)" },
      { description: 'returns 0 when only first is active', assertion: "expect(lastActiveIndex([{active:true},{active:false}])).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(lastActiveIndex([])).toBe(-1)" },
      { description: 'all active returns last index', assertion: "expect(lastActiveIndex([{active:true},{active:true},{active:true}])).toBe(2)" },
    ],
    hints: [
      '`findLastIndex` scans from the end, so it naturally finds the last qualifying index.',
      'The returned index can be used with `splice` or `slice` to operate on that element.',
    ],
    tags: ['Array', 'Array.prototype.findLastIndex', 'objects', 'intermediate'],
    usageExample: {
      code: `const items = [{ok:true},{ok:false},{ok:true}]
items.findLastIndex(i => i.ok)  // → 2`,
      explanation: {
        en: 'Use findLastIndex() to find the position of the last object matching a property check.',
        es: 'Usa findLastIndex() para encontrar la posición del último objeto que coincida con una propiedad.',
      },
    },
  },
  {
    slug: 'array-find-last-index-not-found',
    title: 'Array.prototype.findLastIndex() — returns -1 when not found',
    description: `## Array.prototype.findLastIndex() — no match

Like all index-returning methods, \`findLastIndex()\` returns \`-1\` when no element satisfies the predicate.

**Challenge:** Implement \`lastNegativeIndex(nums)\` that returns the index of the last negative number, or \`-1\` if none.

\`\`\`ts
lastNegativeIndex([1, -2, 3, -4]) // → 3
lastNegativeIndex([1, 2, 3])      // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findLastIndex',
    initialCode: `function lastNegativeIndex(nums: number[]): number {
  // Use nums.findLastIndex(n => n < 0)
}`,
    solution: `function lastNegativeIndex(nums: number[]): number {
  return nums.findLastIndex(n => n < 0)
}`,
    tests: [
      { description: 'returns index of last negative', assertion: "expect(lastNegativeIndex([1, -2, 3, -4])).toBe(3)" },
      { description: 'returns -1 for all positive', assertion: "expect(lastNegativeIndex([1, 2, 3])).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(lastNegativeIndex([])).toBe(-1)" },
      { description: 'returns last not first negative index', assertion: "expect(lastNegativeIndex([-1, -2, -3])).toBe(2)" },
      { description: 'zero does not qualify', assertion: "expect(lastNegativeIndex([0])).toBe(-1)" },
    ],
    hints: [
      'Check the result against `-1` to determine if a match was found.',
      '`n < 0` is false for zero — use `n <= 0` to include zero.',
    ],
    tags: ['Array', 'Array.prototype.findLastIndex', 'not-found', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.findLastIndex(n => n > 10)  // → -1  (not found)`,
      explanation: {
        en: 'findLastIndex() returns -1 when no element satisfies the predicate.',
        es: 'findLastIndex() devuelve -1 cuando ningún elemento satisface el predicado.',
      },
    },
  },
  {
    slug: 'array-find-last-index-string',
    title: 'Array.prototype.findLastIndex() — last long string index',
    description: `## Array.prototype.findLastIndex() — strings

\`findLastIndex()\` works just as well with strings and any other element type.

**Challenge:** Implement \`lastLongIndex(strs, minLen)\` that returns the index of the last string with length \`>= minLen\`.

\`\`\`ts
lastLongIndex(['hi', 'hello', 'world', 'ok'], 5) // → 2
lastLongIndex(['a', 'b', 'c'], 3)                 // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findLastIndex',
    initialCode: `function lastLongIndex(strs: string[], minLen: number): number {
  // Use strs.findLastIndex(s => s.length >= minLen)
}`,
    solution: `function lastLongIndex(strs: string[], minLen: number): number {
  return strs.findLastIndex(s => s.length >= minLen)
}`,
    tests: [
      { description: 'returns index of last long string', assertion: "expect(lastLongIndex(['hi', 'hello', 'world', 'ok'], 5)).toBe(2)" },
      { description: 'returns -1 when none long enough', assertion: "expect(lastLongIndex(['a', 'b', 'c'], 3)).toBe(-1)" },
      { description: 'returns last index in all-qualifying', assertion: "expect(lastLongIndex(['hello', 'world'], 5)).toBe(1)" },
      { description: 'empty array returns -1', assertion: "expect(lastLongIndex([], 3)).toBe(-1)" },
      { description: 'exact minLen qualifies', assertion: "expect(lastLongIndex(['hi', 'hey'], 3)).toBe(1)" },
    ],
    hints: [
      '`>= minLen` is inclusive — strings of exactly `minLen` qualify.',
      '`findLastIndex` scans from the end and returns the last qualifying index.',
    ],
    tags: ['Array', 'Array.prototype.findLastIndex', 'string', 'intermediate'],
    usageExample: {
      code: `const words = ['hi', 'hello', 'hey']
words.findLastIndex(w => w.startsWith('h'))  // → 2`,
      explanation: {
        en: 'Use findLastIndex() to find the last position of a string matching a pattern.',
        es: 'Usa findLastIndex() para encontrar la última posición de una cadena que coincida con un patrón.',
      },
    },
  },
  {
    slug: 'array-find-last-index-use-case',
    title: 'Array.prototype.findLastIndex() — last duplicate index',
    description: `## Array.prototype.findLastIndex() — practical use case

\`findLastIndex()\` can be used to find the last element that meets a condition requiring knowledge of the whole array — like being a duplicate.

**Challenge:** Implement \`lastDuplicateIndex(arr)\` that returns the index of the last element that appears more than once.

\`\`\`ts
lastDuplicateIndex([1, 2, 3, 2, 1]) // → 4 (1 appears at 0 and 4)
lastDuplicateIndex([1, 2, 3])       // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.findLastIndex',
    initialCode: `function lastDuplicateIndex(arr: number[]): number {
  // Use findLastIndex to find the last element that has a duplicate elsewhere
}`,
    solution: `function lastDuplicateIndex(arr: number[]): number {
  return arr.findLastIndex((val, idx) =>
    arr.some((other, otherIdx) => other === val && otherIdx !== idx)
  )
}`,
    tests: [
      { description: 'returns last index of a duplicate value', assertion: "expect(lastDuplicateIndex([1, 2, 3, 2, 1])).toBe(4)" },
      { description: 'returns -1 when no duplicates', assertion: "expect(lastDuplicateIndex([1, 2, 3])).toBe(-1)" },
      { description: 'empty array returns -1', assertion: "expect(lastDuplicateIndex([])).toBe(-1)" },
      { description: 'all same returns last index', assertion: "expect(lastDuplicateIndex([5, 5, 5])).toBe(2)" },
      { description: 'returns index not value', assertion: "expect(lastDuplicateIndex([1, 2, 1, 3, 2])).toBe(4)" },
    ],
    hints: [
      'Inside `findLastIndex`, use `arr.some(...)` to check if the same value appears at a different index.',
      '`findLastIndex` scans from the end, so the first match it finds is the last duplicate in the array.',
    ],
    tags: ['Array', 'Array.prototype.findLastIndex', 'duplicates', 'advanced'],
    usageExample: {
      code: `const logs = ['ok', 'error', 'ok', 'error']
logs.findLastIndex(l => l === 'error')  // → 3`,
      explanation: {
        en: 'Use findLastIndex() when you need the index of the most recent occurrence of a condition.',
        es: 'Usa findLastIndex() cuando necesites el índice de la ocurrencia más reciente de una condición.',
      },
    },
  },
]
