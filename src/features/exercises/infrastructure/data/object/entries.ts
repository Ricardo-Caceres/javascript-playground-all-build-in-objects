import type { Exercise } from '@/shared/types/exercises'

export const objectEntriesExercises: Exercise[] = [
  {
    slug: 'object-entries-basic',
    title: 'Object.entries() — basic key-value pairs',
    description: `## Object.entries()

\`Object.entries(obj)\` returns an array of \`[key, value]\` pairs for all own enumerable string-keyed properties.

**Challenge:** Implement \`getEntries(obj)\` that returns the entries of an object.

\`\`\`ts
getEntries({ a: 1, b: 2 }) // → [['a', 1], ['b', 2]]
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.entries',
    initialCode: `function getEntries(obj: Record<string, unknown>): [string, unknown][] {
  // Use Object.entries to return all key-value pairs
}`,
    solution: `function getEntries(obj: Record<string, unknown>): [string, unknown][] {
  return Object.entries(obj)
}`,
    tests: [
      { description: 'returns correct pairs', assertion: "expect(getEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]])" },
      { description: 'empty object returns []', assertion: "expect(getEntries({})).toEqual([])" },
      { description: 'single entry', assertion: "expect(getEntries({ x: 42 })).toEqual([['x', 42]])" },
      { description: 'string values included', assertion: "expect(getEntries({ name: 'Alice' })).toEqual([['name', 'Alice']])" },
      { description: 'result length matches key count', assertion: "expect(getEntries({ a: 1, b: 2, c: 3 })).toHaveLength(3)" },
    ],
    hints: [
      '`Object.entries(obj)` returns an array of `[key, value]` tuples.',
      'The order of entries matches the insertion order for string keys.',
    ],
    tags: ['Object', 'Object.entries', 'beginner'],
    usageExample: {
      code: `// Get [key, value] pairs of an object
const obj = { a: 1, b: 2 }
Object.entries(obj)   // → [['a', 1], ['b', 2]]`,
      explanation: {
        en: "Use Object.entries() to get an array of [key, value] pairs for iterating over an object's own enumerable properties.",
        es: 'Usa Object.entries() para obtener pares [clave, valor] e iterar sobre las propiedades enumerables propias de un objeto.',
      },
    },
  },
  {
    slug: 'object-entries-own-enumerable',
    title: 'Object.entries() — only own enumerable properties',
    description: `## Object.entries() — own properties only

\`Object.entries\` only returns **own** and **enumerable** properties — inherited or non-enumerable ones are excluded.

**Challenge:** Implement \`countEntries(obj)\` that returns the number of own enumerable entries.

\`\`\`ts
countEntries({ a: 1, b: 2 }) // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.entries',
    initialCode: `function countEntries(obj: Record<string, unknown>): number {
  // Use Object.entries and return the length
}`,
    solution: `function countEntries(obj: Record<string, unknown>): number {
  return Object.entries(obj).length
}`,
    tests: [
      { description: 'counts own enumerable entries', assertion: "expect(countEntries({ a: 1, b: 2 })).toBe(2)" },
      { description: 'empty object is 0', assertion: "expect(countEntries({})).toBe(0)" },
      { description: 'inherited property not counted', assertion: "const p = { inherited: 1 }; const o = Object.create(p); o.own = 2; expect(countEntries(o)).toBe(1)" },
      { description: 'non-enumerable not counted', assertion: "const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false }); expect(countEntries(o)).toBe(0)" },
      { description: 'single key is 1', assertion: "expect(countEntries({ only: true })).toBe(1)" },
    ],
    hints: [
      '`Object.entries` skips inherited and non-enumerable properties.',
      'Use `.length` on the result to count.',
    ],
    tags: ['Object', 'Object.entries', 'enumerable', 'beginner'],
    usageExample: {
      code: `// Get [key, value] pairs of an object
const obj = { a: 1, b: 2 }
Object.entries(obj)   // → [['a', 1], ['b', 2]]`,
      explanation: {
        en: "Use Object.entries() to get an array of [key, value] pairs for iterating over an object's own enumerable properties.",
        es: 'Usa Object.entries() para obtener pares [clave, valor] e iterar sobre las propiedades enumerables propias de un objeto.',
      },
    },
  },
  {
    slug: 'object-entries-string-values',
    title: 'Object.entries() — string values',
    description: `## Object.entries() — iterating for transformation

\`Object.entries\` is often used to iterate over an object's properties to transform or filter them.

**Challenge:** Implement \`upperValues(obj)\` that returns a new object with all string values uppercased, using \`Object.entries\`.

\`\`\`ts
upperValues({ a: 'hello', b: 'world' }) // → { a: 'HELLO', b: 'WORLD' }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.entries',
    initialCode: `function upperValues(obj: Record<string, string>): Record<string, string> {
  // Use Object.entries to iterate and uppercase each value
}`,
    solution: `function upperValues(obj: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.toUpperCase()]))
}`,
    tests: [
      { description: 'uppercases all values', assertion: "expect(upperValues({ a: 'hello', b: 'world' })).toEqual({ a: 'HELLO', b: 'WORLD' })" },
      { description: 'empty object returns empty', assertion: "expect(upperValues({})).toEqual({})" },
      { description: 'single value', assertion: "expect(upperValues({ x: 'test' })).toEqual({ x: 'TEST' })" },
      { description: 'already uppercase stays same', assertion: "expect(upperValues({ k: 'ABC' })).toEqual({ k: 'ABC' })" },
      { description: 'preserves all keys', assertion: "expect(Object.keys(upperValues({ a: 'x', b: 'y', c: 'z' }))).toHaveLength(3)" },
    ],
    hints: [
      'Use `Object.entries(obj).map(([k, v]) => [k, v.toUpperCase()])` then wrap with `Object.fromEntries`.',
    ],
    tags: ['Object', 'Object.entries', 'transform', 'intermediate'],
    usageExample: {
      code: `// Get [key, value] pairs of an object
const obj = { a: 1, b: 2 }
Object.entries(obj)   // → [['a', 1], ['b', 2]]`,
      explanation: {
        en: "Use Object.entries() to get an array of [key, value] pairs for iterating over an object's own enumerable properties.",
        es: 'Usa Object.entries() para obtener pares [clave, valor] e iterar sobre las propiedades enumerables propias de un objeto.',
      },
    },
  },
  {
    slug: 'object-entries-order-matches-keys',
    title: 'Object.entries() — order matches Object.keys',
    description: `## Object.entries() — consistent ordering

The order of entries from \`Object.entries\` matches the order of keys from \`Object.keys\`. Both follow insertion order for string keys.

**Challenge:** Implement \`entryKeys(obj)\` that returns just the keys from \`Object.entries\` (the first element of each pair).

\`\`\`ts
entryKeys({ b: 2, a: 1 }) // → ['b', 'a']
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.entries',
    initialCode: `function entryKeys(obj: Record<string, unknown>): string[] {
  // Use Object.entries and map to extract only the keys
}`,
    solution: `function entryKeys(obj: Record<string, unknown>): string[] {
  return Object.entries(obj).map(([k]) => k)
}`,
    tests: [
      { description: 'returns keys in insertion order', assertion: "expect(entryKeys({ b: 2, a: 1 })).toEqual(['b', 'a'])" },
      { description: 'matches Object.keys order', assertion: "const o = { x: 1, y: 2 }; expect(entryKeys(o)).toEqual(Object.keys(o))" },
      { description: 'empty object returns []', assertion: "expect(entryKeys({})).toEqual([])" },
      { description: 'single key', assertion: "expect(entryKeys({ only: 9 })).toEqual(['only'])" },
      { description: 'three keys in order', assertion: "expect(entryKeys({ c: 3, b: 2, a: 1 })).toEqual(['c', 'b', 'a'])" },
    ],
    hints: [
      'Destructure each entry as `([k])` to grab just the key.',
    ],
    tags: ['Object', 'Object.entries', 'order', 'beginner'],
    usageExample: {
      code: `// Get [key, value] pairs of an object
const obj = { a: 1, b: 2 }
Object.entries(obj)   // → [['a', 1], ['b', 2]]`,
      explanation: {
        en: "Use Object.entries() to get an array of [key, value] pairs for iterating over an object's own enumerable properties.",
        es: 'Usa Object.entries() para obtener pares [clave, valor] e iterar sobre las propiedades enumerables propias de un objeto.',
      },
    },
  },
  {
    slug: 'object-entries-to-map',
    title: 'Object.entries() — convert object to Map',
    description: `## Object.entries() — interop with Map

Since \`Object.entries\` returns \`[key, value]\` pairs, you can pass the result directly to the \`Map\` constructor.

**Challenge:** Implement \`toMap(obj)\` that converts a plain object to a \`Map\` using \`Object.entries\`.

\`\`\`ts
toMap({ a: 1, b: 2 }) // → Map { 'a' => 1, 'b' => 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.entries',
    initialCode: `function toMap(obj: Record<string, unknown>): Map<string, unknown> {
  // Pass Object.entries result to new Map()
}`,
    solution: `function toMap(obj: Record<string, unknown>): Map<string, unknown> {
  return new Map(Object.entries(obj))
}`,
    tests: [
      { description: 'map has correct size', assertion: "expect(toMap({ a: 1, b: 2 })).toHaveLength(2)" },
      { description: 'map has correct value', assertion: "expect(toMap({ x: 99 }).get('x')).toBe(99)" },
      { description: 'empty object gives empty map', assertion: "expect(toMap({})).toHaveLength(0)" },
      { description: 'result is a Map instance', assertion: "expect(toMap({ a: 1 }) instanceof Map).toBe(true)" },
      { description: 'all keys are accessible', assertion: "const m = toMap({ a: 1, b: 2 }); expect(m.has('a') && m.has('b')).toBe(true)" },
    ],
    hints: [
      '`new Map(iterable)` accepts an iterable of `[key, value]` pairs — exactly what `Object.entries` returns.',
    ],
    tags: ['Object', 'Object.entries', 'Map', 'intermediate'],
    usageExample: {
      code: `// Get [key, value] pairs of an object
const obj = { a: 1, b: 2 }
Object.entries(obj)   // → [['a', 1], ['b', 2]]`,
      explanation: {
        en: "Use Object.entries() to get an array of [key, value] pairs for iterating over an object's own enumerable properties.",
        es: 'Usa Object.entries() para obtener pares [clave, valor] e iterar sobre las propiedades enumerables propias de un objeto.',
      },
    },
  },
]
