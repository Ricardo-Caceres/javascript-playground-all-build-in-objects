import type { Exercise } from '@/shared/types/exercises'

export const setEntriesExercises: Exercise[] = [
  {
    slug: 'set-entries-1',
    title: 'Set entries() — [value, value] pairs',
    description: `## Set.prototype.entries()\n\nFor Set, \`entries()\` yields \`[value, value]\` pairs (both elements are the same value).\n\n**Challenge:** Verify that each entry is [value, value].`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'entries',
    initialCode: `// Check Set entries structure\nconst s = new Set([1,2,3])\n`,
    solution: `[...new Set([1,2,3]).entries()]`,
    tests: [
      { description: "entries are [[1,1],[2,2],[3,3]]", assertion: "expect(result).toEqual([[1,1],[2,2],[3,3]])" },
      { description: 'each entry has length 2', assertion: 'expect([...new Set([1]).entries()][0].length).toBe(2)' },
      { description: 'result is an array', assertion: 'expect(Array.isArray([...new Set([1]).entries()])).toBe(true)' },
      { description: 'length equals size', assertion: 'const s = new Set([1,2,3]); expect([...s.entries()].length).toBe(s.size)' },
      { description: 'entries is iterable', assertion: "expect(typeof new Set([1]).entries()[Symbol.iterator]).toBe('function')" },
    ],
    hints: ['Set.entries() yields [value, value] pairs for each value'],
    tags: ['Set', 'entries', 'structure'],
    usageExample: {
      code: `const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val) // 'a' 'a', then 'b' 'b'
}`,
      explanation: {
        en: 'Use Set.entries() to iterate over [value, value] pairs; both elements are the same.',
        es: 'Usa Set.entries() para iterar pares [valor, valor]; ambos elementos son iguales.',
      },
    },
  },
  {
    slug: 'set-entries-2',
    title: 'Set entries() — both elements are same',
    description: `## Set.prototype.entries()\n\nBoth elements of each entry are identical — entry[0] === entry[1].\n\n**Challenge:** Verify that entry[0] equals entry[1].`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'entries',
    initialCode: `// Verify [value, value] structure\nconst s = new Set([42])\nconst [entry] = s.entries()\n`,
    solution: `const s = new Set([42]); const [entry] = s.entries(); entry[0] === entry[1]`,
    tests: [
      { description: 'entry[0] === entry[1]', assertion: 'const [e] = new Set([42]).entries(); expect(e[0] === e[1]).toBe(true)' },
      { description: 'entry[0] is the value', assertion: 'const [e] = new Set([42]).entries(); expect(e[0]).toBe(42)' },
      { description: 'entry[1] is also the value', assertion: 'const [e] = new Set([42]).entries(); expect(e[1]).toBe(42)' },
      { description: 'both entries equal for string value', assertion: "const [e] = new Set(['hi']).entries(); expect(e[0]).toBe(e[1])" },
      { description: 'entries.next().value[0] === entries.next().value[1]', assertion: 'const it = new Set([5]).entries(); const n = it.next().value; expect(n[0]).toBe(n[1])' },
    ],
    hints: ['Set entries are [v, v] pairs — unlike Map where they are [k, v]'],
    tags: ['Set', 'entries', 'sameValue'],
    usageExample: {
      code: `const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val) // 'a' 'a', then 'b' 'b'
}`,
      explanation: {
        en: 'Use Set.entries() to iterate over [value, value] pairs; both elements are the same.',
        es: 'Usa Set.entries() para iterar pares [valor, valor]; ambos elementos son iguales.',
      },
    },
  },
  {
    slug: 'set-entries-3',
    title: 'Set entries() — spread to array',
    description: `## Set.prototype.entries()\n\nSpread entries() to get all [value, value] pairs.\n\n**Challenge:** Verify that spreading entries gives the correct nested array.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'entries',
    initialCode: `// Spread entries\nconst s = new Set(['a','b'])\n`,
    solution: `[...new Set(['a','b']).entries()]`,
    tests: [
      { description: "entries are [['a','a'],['b','b']]", assertion: "expect(result).toEqual([['a','a'],['b','b']])" },
      { description: 'first entry key equals first value', assertion: "expect([...new Set(['x','y']).entries()][0][0]).toBe('x')" },
      { description: 'entries count equals set size', assertion: "expect([...new Set(['a','b','c']).entries()].length).toBe(3)" },
      { description: 'result is array of arrays', assertion: "expect(Array.isArray([...new Set(['a']).entries()][0])).toBe(true)" },
      { description: 'insertion order preserved', assertion: "expect([...new Set(['c','a','b']).entries()][0][0]).toBe('c')" },
    ],
    hints: ['Spread entries() to get the full list of [value, value] pairs'],
    tags: ['Set', 'entries', 'spread'],
    usageExample: {
      code: `const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val) // 'a' 'a', then 'b' 'b'
}`,
      explanation: {
        en: 'Use Set.entries() to iterate over [value, value] pairs; both elements are the same.',
        es: 'Usa Set.entries() para iterar pares [valor, valor]; ambos elementos son iguales.',
      },
    },
  },
  {
    slug: 'set-entries-4',
    title: 'Set entries() — empty Set',
    description: `## Set.prototype.entries()\n\nentries() on an empty Set produces an empty iterator.\n\n**Challenge:** Verify that spreading entries() of an empty Set gives an empty array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Set',
    method: 'entries',
    initialCode: `// Spread entries of empty Set\n`,
    solution: `[...new Set().entries()]`,
    tests: [
      { description: 'empty set entries is empty array', assertion: 'expect(result).toEqual([])' },
      { description: 'length is 0', assertion: 'expect(result.length).toBe(0)' },
      { description: 'iterator is immediately done', assertion: 'expect(new Set().entries().next().done).toBe(true)' },
      { description: 'result is array', assertion: 'expect(Array.isArray(result)).toBe(true)' },
      { description: 'for-of body not entered', assertion: 'let c = 0; for(const e of new Set().entries()) c++; expect(c).toBe(0)' },
    ],
    hints: ['An empty Set has no entries to iterate'],
    tags: ['Set', 'entries', 'empty'],
    usageExample: {
      code: `const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val) // 'a' 'a', then 'b' 'b'
}`,
      explanation: {
        en: 'Use Set.entries() to iterate over [value, value] pairs; both elements are the same.',
        es: 'Usa Set.entries() para iterar pares [valor, valor]; ambos elementos son iguales.',
      },
    },
  },
  {
    slug: 'set-entries-5',
    title: 'Set entries() — insertion order',
    description: `## Set.prototype.entries()\n\nEntries are yielded in insertion order.\n\n**Challenge:** Verify that entries() preserves insertion order.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Set',
    method: 'entries',
    initialCode: `// Check entries insertion order\nconst s = new Set([3,1,2])\n`,
    solution: `[...new Set([3,1,2]).entries()]`,
    tests: [
      { description: 'entries in insertion order', assertion: 'expect(result).toEqual([[3,3],[1,1],[2,2]])' },
      { description: 'first entry from first inserted', assertion: 'expect([...new Set([9,1,2]).entries()][0][0]).toBe(9)' },
      { description: 'dedup preserves order', assertion: 'expect([...new Set([3,1,3,2]).entries()][0][0]).toBe(3)' },
      { description: 'entries length is unique count', assertion: 'expect([...new Set([1,1,2]).entries()].length).toBe(2)' },
      { description: 'entries mirror values in order', assertion: 'const s = new Set([5,3,1]); expect([...s.entries()].map(e=>e[0])).toEqual([...s.values()])' },
    ],
    hints: ['entries() respects insertion order, same as values() and keys()'],
    tags: ['Set', 'entries', 'order'],
    usageExample: {
      code: `const s = new Set(['a', 'b'])
for (const [key, val] of s.entries()) {
  console.log(key, val) // 'a' 'a', then 'b' 'b'
}`,
      explanation: {
        en: 'Use Set.entries() to iterate over [value, value] pairs; both elements are the same.',
        es: 'Usa Set.entries() para iterar pares [valor, valor]; ambos elementos son iguales.',
      },
    },
  },
]
