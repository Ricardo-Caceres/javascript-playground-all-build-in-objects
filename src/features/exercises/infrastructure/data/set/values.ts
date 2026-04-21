import type { Exercise } from '@/shared/types/exercises'

export const setValuesExercises: Exercise[] = [
  {
    slug: 'set-values-1',
    title: 'Set values() — spread to array',
    description: `## Set.prototype.values()\n\n\`values()\` returns an iterator of the Set's values in insertion order.\n\n**Challenge:** Verify that spreading values() gives the correct array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'values',
    initialCode: `// Spread values() into an array\nconst s = new Set([1,2,3])\n`,
    solution: `[...new Set([1,2,3]).values()]`,
    tests: [
      { description: 'values are [1,2,3]', assertion: 'expect(result).toEqual([1,2,3])' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(result)).toBe(true)' },
      { description: 'length equals set size', assertion: 'const s = new Set([1,2,3]); expect([...s.values()].length).toBe(s.size)' },
      { description: 'first value is correct', assertion: 'expect([...new Set([5,6,7]).values()][0]).toBe(5)' },
      { description: 'values is iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
    ],
    hints: ['Spread the iterator with [...set.values()] to get an array'],
    tags: ['Set', 'values', 'iterator'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v) // 1, 2, 3
}`,
      explanation: {
        en: 'Use Set.values() to iterate over all values in insertion order.',
        es: 'Usa Set.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'set-values-2',
    title: 'Set values() — insertion order',
    description: `## Set.prototype.values()\n\nValues are yielded in insertion order.\n\n**Challenge:** Verify that values are in insertion order.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'values',
    initialCode: `// Check insertion order\nconst s = new Set([3,1,2])\n`,
    solution: `[...new Set([3,1,2]).values()]`,
    tests: [
      { description: 'values in insertion order [3,1,2]', assertion: 'expect(result).toEqual([3,1,2])' },
      { description: 'first value is first inserted', assertion: 'expect([...new Set([9,1,2]).values()][0]).toBe(9)' },
      { description: 'order preserved', assertion: 'const s = new Set([5,3,1]); expect([...s.values()]).toEqual([5,3,1])' },
      { description: 'dedup preserves first occurrence order', assertion: 'expect([...new Set([3,1,2,1,3]).values()]).toEqual([3,1,2])' },
      { description: 'values length matches size', assertion: 'const s = new Set([1,2,3]); expect([...s.values()].length).toBe(s.size)' },
    ],
    hints: ['values() yields values in insertion order'],
    tags: ['Set', 'values', 'order'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v) // 1, 2, 3
}`,
      explanation: {
        en: 'Use Set.values() to iterate over all values in insertion order.',
        es: 'Usa Set.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'set-values-3',
    title: 'Set values() — dedup visible',
    description: `## Set.prototype.values()\n\nDuplicate values are not iterated — only unique values appear.\n\n**Challenge:** Verify that values() only returns unique values.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'values',
    initialCode: `// Check deduplication in values()\nconst s = new Set([1,1,2,2,3])\n`,
    solution: `[...new Set([1,1,2,2,3]).values()]`,
    tests: [
      { description: 'duplicates not in values output', assertion: 'expect(result).toEqual([1,2,3])' },
      { description: 'length is 3 not 5', assertion: 'expect(result.length).toBe(3)' },
      { description: 'all-same array gives single value', assertion: 'expect([...new Set([7,7,7]).values()]).toEqual([7])' },
      { description: 'string dedup visible', assertion: "expect([...new Set(['a','a','b']).values()]).toEqual(['a','b'])" },
      { description: 'unique count correct', assertion: 'expect(new Set([1,1,2,2,3]).size).toBe(3)' },
    ],
    hints: ['values() iterates only the unique values stored in the Set'],
    tags: ['Set', 'values', 'deduplication'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v) // 1, 2, 3
}`,
      explanation: {
        en: 'Use Set.values() to iterate over all values in insertion order.',
        es: 'Usa Set.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'set-values-4',
    title: 'Set values() — empty Set',
    description: `## Set.prototype.values()\n\nvalues() on an empty Set produces an empty iterator.\n\n**Challenge:** Verify that spreading values() of an empty Set gives an empty array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'values',
    initialCode: `// Spread values of empty Set\n`,
    solution: `[...new Set().values()]`,
    tests: [
      { description: 'empty set values is empty array', assertion: 'expect(result).toEqual([])' },
      { description: 'length is 0', assertion: 'expect(result.length).toBe(0)' },
      { description: 'iterator is immediately done', assertion: 'expect(new Set().values().next().done).toBe(true)' },
      { description: 'result is an array', assertion: 'expect(Array.isArray(result)).toBe(true)' },
      { description: 'no values to iterate', assertion: 'const vals = []; for(const v of new Set().values()) vals.push(v); expect(vals.length).toBe(0)' },
    ],
    hints: ['An empty Set has no values to iterate'],
    tags: ['Set', 'values', 'empty'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v) // 1, 2, 3
}`,
      explanation: {
        en: 'Use Set.values() to iterate over all values in insertion order.',
        es: 'Usa Set.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
  {
    slug: 'set-values-5',
    title: 'Set values() — type of iterator',
    description: `## Set.prototype.values()\n\nvalues() returns a SetIterator.\n\n**Challenge:** Verify the type of the values() return value.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'values',
    initialCode: `// Check type of values()\n`,
    solution: `typeof new Set([1]).values()`,
    tests: [
      { description: "values() returns an object", assertion: "expect(result).toBe('object')" },
      { description: 'values() is iterable', assertion: "expect(result[Symbol.iterator]).toBe('function')" },
      { description: 'values() has next() method', assertion: "expect(result.next).toBe('function')" },
      { description: 'next() returns value', assertion: 'expect(new Set([42]).values().next().value).toBe(42)' },
      { description: 'values is a function on Set', assertion: "expect(typeof new Set().values).toBe('function')" },
    ],
    hints: ['values() returns a SetIterator — an iterable iterator'],
    tags: ['Set', 'values', 'type'],
    usageExample: {
      code: `const s = new Set([1, 2, 3])
for (const v of s.values()) {
  console.log(v) // 1, 2, 3
}`,
      explanation: {
        en: 'Use Set.values() to iterate over all values in insertion order.',
        es: 'Usa Set.values() para iterar sobre todos los valores en orden de inserción.',
      },
    },
  },
]
