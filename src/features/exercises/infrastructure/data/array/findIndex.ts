import type { Exercise } from '@/shared/types/exercises'

export const findIndexExercises: Exercise[] = [
  {
    slug: 'array-find-index-basic',
    title: 'Array.prototype.findIndex() — index of first match',
    description: `## Array.prototype.findIndex()

\`Array.prototype.findIndex(callback)\` returns the **index** of the first element for which the callback returns truthy, or \`-1\` if no match is found. It is the index-returning counterpart of \`find()\`.

**Challenge:** Implement \`firstEvenIndex(nums)\` that returns the index of the first even number.

\`\`\`ts
firstEvenIndex([1, 3, 4, 6]) // → 2
firstEvenIndex([1, 3, 5])    // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findIndex',
    initialCode: `function firstEvenIndex(nums: number[]): number {
  // Use nums.findIndex(n => n % 2 === 0)
}`,
    solution: `function firstEvenIndex(nums: number[]): number {
  return nums.findIndex(n => n % 2 === 0)
}`,
    tests: [
      { description: 'returns index of first even', assertion: "expect(firstEvenIndex([1, 3, 4, 6])).toBe(2)" },
      { description: 'returns -1 when none even', assertion: "expect(firstEvenIndex([1, 3, 5])).toBe(-1)" },
      { description: 'returns 0 when first is even', assertion: "expect(firstEvenIndex([2, 3, 4])).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(firstEvenIndex([])).toBe(-1)" },
      { description: 'returns first not any match', assertion: "expect(firstEvenIndex([1, 2, 4])).toBe(1)" },
    ],
    hints: [
      '`findIndex()` returns the index, while `find()` returns the element.',
      'Returns `-1` when no element satisfies the predicate.',
    ],
    tags: ['Array', 'Array.prototype.findIndex', 'index', 'beginner'],
    usageExample: {
      code: `const nums = [5, 12, 8, 130]
nums.findIndex(n => n > 10)  // → 1  (index of 12)`,
      explanation: {
        en: 'Use findIndex() to get the index of the first element that satisfies a condition.',
        es: 'Usa findIndex() para obtener el índice del primer elemento que satisfaga una condición.',
      },
    },
  },
  {
    slug: 'array-find-index-object',
    title: 'Array.prototype.findIndex() — find object index by id',
    description: `## Array.prototype.findIndex() — object arrays

\`findIndex()\` is often used with object arrays to get the index of an object with a specific property value.

**Challenge:** Implement \`indexOfId(items, id)\` that returns the index of the item with matching \`id\`.

\`\`\`ts
indexOfId([{id:1},{id:2},{id:3}], 2) // → 1
indexOfId([{id:1},{id:2}], 99)       // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findIndex',
    initialCode: `function indexOfId(items: {id: number}[], id: number): number {
  // Use items.findIndex(item => item.id === id)
}`,
    solution: `function indexOfId(items: {id: number}[], id: number): number {
  return items.findIndex(item => item.id === id)
}`,
    tests: [
      { description: 'returns correct index', assertion: "expect(indexOfId([{id:1},{id:2},{id:3}], 2)).toBe(1)" },
      { description: 'returns -1 when not found', assertion: "expect(indexOfId([{id:1},{id:2}], 99)).toBe(-1)" },
      { description: 'returns 0 for first item', assertion: "expect(indexOfId([{id:5},{id:6}], 5)).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(indexOfId([], 1)).toBe(-1)" },
      { description: 'returns first match when duplicates', assertion: "expect(indexOfId([{id:1},{id:1},{id:2}], 1)).toBe(0)" },
    ],
    hints: [
      '`findIndex` lets you search by any property, unlike `indexOf` which uses reference equality.',
      'The returned index can be used to splice, update, or access the element.',
    ],
    tags: ['Array', 'Array.prototype.findIndex', 'objects', 'id-lookup', 'intermediate'],
    usageExample: {
      code: `const users = [{id:1}, {id:2}, {id:3}]
users.findIndex(u => u.id === 2)  // → 1`,
      explanation: {
        en: 'Use findIndex() on an object array to find the position of a specific record.',
        es: 'Usa findIndex() en un array de objetos para encontrar la posición de un registro específico.',
      },
    },
  },
  {
    slug: 'array-find-index-not-found',
    title: 'Array.prototype.findIndex() — returns -1 when not found',
    description: `## Array.prototype.findIndex() — no match

When no element satisfies the predicate, \`findIndex()\` returns \`-1\`. This is consistent with \`indexOf()\` and \`lastIndexOf()\`.

**Challenge:** Implement \`findGtHundred(nums)\` that returns the index of the first number greater than 100, or \`-1\` if none.

\`\`\`ts
findGtHundred([10, 200, 50]) // → 1
findGtHundred([1, 2, 3])     // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Array',
    method: 'Array.prototype.findIndex',
    initialCode: `function findGtHundred(nums: number[]): number {
  // Use nums.findIndex(n => n > 100)
}`,
    solution: `function findGtHundred(nums: number[]): number {
  return nums.findIndex(n => n > 100)
}`,
    tests: [
      { description: 'returns index of first > 100', assertion: "expect(findGtHundred([10, 200, 50])).toBe(1)" },
      { description: 'returns -1 when none > 100', assertion: "expect(findGtHundred([1, 2, 3])).toBe(-1)" },
      { description: 'returns 0 when first qualifies', assertion: "expect(findGtHundred([101, 5, 200])).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(findGtHundred([])).toBe(-1)" },
      { description: 'exactly 100 does not qualify', assertion: "expect(findGtHundred([100])).toBe(-1)" },
    ],
    hints: [
      'Checking the result with `=== -1` tells you whether a match was found.',
      '`> 100` excludes exactly 100; use `>= 100` to include it.',
    ],
    tags: ['Array', 'Array.prototype.findIndex', 'not-found', 'beginner'],
    usageExample: {
      code: `const arr = [1, 2, 3]
arr.findIndex(n => n > 100)  // → -1  (not found)`,
      explanation: {
        en: 'findIndex() returns -1 when no element satisfies the predicate — always check for this.',
        es: 'findIndex() devuelve -1 cuando ningún elemento satisface el predicado; siempre verifica este caso.',
      },
    },
  },
  {
    slug: 'array-find-index-string',
    title: 'Array.prototype.findIndex() — find string index by length',
    description: `## Array.prototype.findIndex() — strings

You can use \`findIndex()\` with strings just as easily as with numbers or objects.

**Challenge:** Implement \`indexOfLong(strs, len)\` that returns the index of the first string with length \`> len\`.

\`\`\`ts
indexOfLong(['hi', 'hello', 'world'], 4) // → 1
indexOfLong(['a', 'bb'], 5)              // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Array',
    method: 'Array.prototype.findIndex',
    initialCode: `function indexOfLong(strs: string[], len: number): number {
  // Use strs.findIndex(s => s.length > len)
}`,
    solution: `function indexOfLong(strs: string[], len: number): number {
  return strs.findIndex(s => s.length > len)
}`,
    tests: [
      { description: 'returns index of first long string', assertion: "expect(indexOfLong(['hi', 'hello', 'world'], 4)).toBe(1)" },
      { description: 'returns -1 when none long enough', assertion: "expect(indexOfLong(['a', 'bb'], 5)).toBe(-1)" },
      { description: 'returns 0 when first qualifies', assertion: "expect(indexOfLong(['longest', 'short'], 4)).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(indexOfLong([], 3)).toBe(-1)" },
      { description: 'exactly len does not qualify', assertion: "expect(indexOfLong(['hello'], 5)).toBe(-1)" },
    ],
    hints: [
      '`s.length > len` is strictly greater than — not `>=`.',
      'The first qualifying index is returned, even if later strings are longer.',
    ],
    tags: ['Array', 'Array.prototype.findIndex', 'string', 'length', 'intermediate'],
    usageExample: {
      code: `const words = ['apple', 'banana', 'cherry']
words.findIndex(w => w.startsWith('b'))  // → 1`,
      explanation: {
        en: 'Use findIndex() to locate the position of a string that matches a pattern.',
        es: 'Usa findIndex() para localizar la posición de una cadena que coincida con un patrón.',
      },
    },
  },
  {
    slug: 'array-find-index-vs-indexof',
    title: 'Array.prototype.findIndex() — find by property vs reference',
    description: `## Array.prototype.findIndex() — property-based search

\`indexOf\` uses strict reference equality for objects. \`findIndex\` lets you search by a **property value** instead, which is more useful when working with object arrays.

**Challenge:** Implement \`indexOfObject(arr, target)\` that uses \`findIndex\` to find the first object whose \`id\` property matches \`target.id\`.

\`\`\`ts
indexOfObject([{id:1,name:'A'},{id:2,name:'B'}], {id:2,name:'X'}) // → 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Array',
    method: 'Array.prototype.findIndex',
    initialCode: `function indexOfObject(arr: {id: number, name: string}[], target: {id: number}): number {
  // Use arr.findIndex(o => o.id === target.id) to search by property
}`,
    solution: `function indexOfObject(arr: {id: number, name: string}[], target: {id: number}): number {
  return arr.findIndex(o => o.id === target.id)
}`,
    tests: [
      { description: 'finds object by id property', assertion: "expect(indexOfObject([{id:1,name:'A'},{id:2,name:'B'}], {id:2})).toBe(1)" },
      { description: 'returns -1 when id not found', assertion: "expect(indexOfObject([{id:1,name:'A'}], {id:99})).toBe(-1)" },
      { description: 'returns 0 for first object', assertion: "expect(indexOfObject([{id:5,name:'X'}], {id:5})).toBe(0)" },
      { description: 'empty array returns -1', assertion: "expect(indexOfObject([], {id:1})).toBe(-1)" },
      { description: 'target name does not affect match', assertion: "expect(indexOfObject([{id:1,name:'A'}], {id:1})).toBe(0)" },
    ],
    hints: [
      '`indexOf(target)` would never match because it checks reference equality — the target is a different object.',
      '`findIndex(o => o.id === target.id)` compares a primitive value instead.',
    ],
    tags: ['Array', 'Array.prototype.findIndex', 'objects', 'property', 'advanced'],
    usageExample: {
      code: `const arr = [1, 2, 3, 2]
arr.indexOf(2)               // → 1  (exact match)
arr.findIndex(n => n >= 2)   // → 1  (predicate match)`,
      explanation: {
        en: 'Use findIndex() over indexOf() when you need a condition, not just an equality check.',
        es: 'Usa findIndex() en lugar de indexOf() cuando necesites una condición, no solo una igualdad.',
      },
    },
  },
]
