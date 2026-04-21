import type { Exercise } from '@/shared/types/exercises'

export const mapEntriesExercises: Exercise[] = [
  {
    slug: 'map-entries-1',
    title: 'Map entries() — spread to array',
    description: `## Map.prototype.entries()\n\n\`entries()\` returns an iterator of [key, value] pairs.\n\n**Challenge:** Verify that spreading entries() gives the correct array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'entries',
    initialCode: `// Spread entries() into an array\nconst m = new Map([['a',1],['b',2]])\n`,
    solution: `[...new Map([['a',1],['b',2]]).entries()]`,
    tests: [
      { description: "entries are [['a',1],['b',2]]", assertion: "expect(result).toEqual([['a',1],['b',2]])" },
      { description: 'result is an array', assertion: "expect(Array.isArray([...new Map([['a',1]]).entries()])).toBe(true)" },
      { description: 'length equals map size', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.entries()].length).toBe(m.size)" },
      { description: 'first entry is correct', assertion: "expect(result[0]).toEqual(['a',1])" },
      { description: 'entries is iterable', assertion: "expect(typeof new Map([['a',1]]).entries()[Symbol.iterator]).toBe('function')" },
    ],
    hints: ['Each entry is a [key, value] array pair'],
    tags: ['Map', 'entries', 'iterator'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val) // 'a' 1, then 'b' 2
}`,
      explanation: {
        en: 'Use Map.entries() to iterate over [key, value] pairs in insertion order.',
        es: 'Usa Map.entries() para iterar pares [clave, valor] en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-entries-2',
    title: 'Map entries() — each entry is [k,v]',
    description: `## Map.prototype.entries()\n\nEach entry is a two-element array [key, value].\n\n**Challenge:** Verify that each entry has the correct structure.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'entries',
    initialCode: `// Check entry structure\nconst m = new Map([['x', 42]])\n`,
    solution: `[...new Map([['x', 42]]).entries()][0]`,
    tests: [
      { description: "entry[0] is the key 'x'", assertion: "expect([...new Map([['x',42]]).entries()][0][0]).toBe('x')" },
      { description: 'entry[1] is the value 42', assertion: "expect([...new Map([['x',42]]).entries()][0][1]).toBe(42)" },
      { description: 'each entry is an array', assertion: "expect(Array.isArray([...new Map([['x',42]]).entries()][0])).toBe(true)" },
      { description: 'each entry has length 2', assertion: "expect([...new Map([['x',42]]).entries()][0].length).toBe(2)" },
      { description: 'can destructure entries', assertion: "const [[k,v]] = new Map([['a',1]]).entries(); expect(k).toBe('a')" },
    ],
    hints: ['entries() yields [key, value] pairs — 2-element arrays'],
    tags: ['Map', 'entries', 'structure'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val) // 'a' 1, then 'b' 2
}`,
      explanation: {
        en: 'Use Map.entries() to iterate over [key, value] pairs in insertion order.',
        es: 'Usa Map.entries() para iterar pares [clave, valor] en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-entries-3',
    title: 'Map entries() — insertion order',
    description: `## Map.prototype.entries()\n\nEntries are yielded in insertion order.\n\n**Challenge:** Verify that entries are in insertion order.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'entries',
    initialCode: `// Check entries order\nconst m = new Map([['b',2],['a',1]])\n`,
    solution: `[...new Map([['b',2],['a',1]]).entries()]`,
    tests: [
      { description: "entries in insertion order", assertion: "expect(result).toEqual([['b',2],['a',1]])" },
      { description: 'first entry is first inserted', assertion: "expect([...new Map([['z',9],['a',1]]).entries()][0][0]).toBe('z')" },
      { description: 'order preserved for 3 entries', assertion: "const m = new Map([['c',3],['a',1],['b',2]]); expect([...m.entries()][1][0]).toBe('a')" },
      { description: 'entries length matches size', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.entries()].length).toBe(2)" },
      { description: 'update does not change order', assertion: "const m = new Map([['a',1],['b',2]]); m.set('a',99); expect([...m.entries()][0][0]).toBe('a')" },
    ],
    hints: ['entries() respects insertion order, same as keys() and values()'],
    tags: ['Map', 'entries', 'order'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val) // 'a' 1, then 'b' 2
}`,
      explanation: {
        en: 'Use Map.entries() to iterate over [key, value] pairs in insertion order.',
        es: 'Usa Map.entries() para iterar pares [clave, valor] en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-entries-4',
    title: 'Map entries() — empty Map',
    description: `## Map.prototype.entries()\n\nentries() on an empty Map produces an empty iterator.\n\n**Challenge:** Verify that spreading entries() of an empty Map gives an empty array.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'entries',
    initialCode: `// Spread entries of empty Map\n`,
    solution: `[...new Map().entries()]`,
    tests: [
      { description: 'empty map entries is empty array', assertion: "expect(result).toEqual([])" },
      { description: 'length is 0', assertion: "expect(result.length).toBe(0)" },
      { description: 'iterator is immediately done', assertion: "expect(new Map().entries().next().done).toBe(true)" },
      { description: 'result is an array', assertion: "expect(Array.isArray(result)).toBe(true)" },
      { description: 'for-of loop body not entered', assertion: "let count = 0; for(const e of new Map().entries()) count++; expect(count).toBe(0)" },
    ],
    hints: ['An empty Map has no entries to iterate'],
    tags: ['Map', 'entries', 'empty'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val) // 'a' 1, then 'b' 2
}`,
      explanation: {
        en: 'Use Map.entries() to iterate over [key, value] pairs in insertion order.',
        es: 'Usa Map.entries() para iterar pares [clave, valor] en orden de inserción.',
      },
    },
  },
  {
    slug: 'map-entries-5',
    title: 'Map entries() — destructuring',
    description: `## Map.prototype.entries()\n\nYou can destructure each [key, value] pair with for-of.\n\n**Challenge:** Verify that destructuring entries works correctly.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Map',
    method: 'entries',
    initialCode: `// Destructure entries\nconst m = new Map([['a',1],['b',2]])\nconst result = []\nfor (const [k, v] of m.entries()) { result.push(k + ':' + v) }\n`,
    solution: `const m = new Map([['a',1],['b',2]]); const result = []; for(const [k,v] of m.entries()) result.push(k+':'+v); result`,
    tests: [
      { description: "destructured entries give 'a:1'", assertion: "const r = []; for(const [k,v] of new Map([['a',1],['b',2]]).entries()) r.push(k+':'+v); expect(r[0]).toBe('a:1')" },
      { description: "destructured entries give 'b:2'", assertion: "const r = []; for(const [k,v] of new Map([['a',1],['b',2]]).entries()) r.push(k+':'+v); expect(r[1]).toBe('b:2')" },
      { description: 'result length is 2', assertion: "const r = []; for(const [k,v] of new Map([['a',1],['b',2]]).entries()) r.push(k); expect(r.length).toBe(2)" },
      { description: 'map is default iterable (same as entries)', assertion: "expect([...new Map([['a',1]])]).toEqual([['a',1]])" },
      { description: 'entries() same as default iteration', assertion: "const m = new Map([['a',1],['b',2]]); expect([...m.entries()]).toEqual([...m])" },
    ],
    hints: ['Map is iterable by default and yields the same as entries()'],
    tags: ['Map', 'entries', 'destructuring'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
for (const [key, val] of m.entries()) {
  console.log(key, val) // 'a' 1, then 'b' 2
}`,
      explanation: {
        en: 'Use Map.entries() to iterate over [key, value] pairs in insertion order.',
        es: 'Usa Map.entries() para iterar pares [clave, valor] en orden de inserción.',
      },
    },
  },
]
