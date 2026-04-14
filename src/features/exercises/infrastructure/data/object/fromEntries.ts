import type { Exercise } from '@/shared/types/exercises'

export const fromEntriesExercises: Exercise[] = [
  {
    slug: 'object-from-entries-basic',
    title: 'Object.fromEntries() — array of pairs to object',
    description: `## Object.fromEntries()

\`Object.fromEntries(iterable)\` transforms an iterable of \`[key, value]\` pairs into a plain object. It is the inverse of \`Object.entries\`.

**Challenge:** Implement \`pairsToObject(pairs)\` that converts an array of \`[key, value]\` pairs into an object.

\`\`\`ts
pairsToObject([['a', 1], ['b', 2]]) // → { a: 1, b: 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.fromEntries',
    initialCode: `function pairsToObject(pairs: [string, unknown][]): Record<string, unknown> {
  // Use Object.fromEntries to convert the pairs array to an object
}`,
    solution: `function pairsToObject(pairs: [string, unknown][]): Record<string, unknown> {
  return Object.fromEntries(pairs)
}`,
    tests: [
      { description: 'converts pairs to object', assertion: "expect(pairsToObject([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })" },
      { description: 'empty array returns empty object', assertion: "expect(pairsToObject([])).toEqual({})" },
      { description: 'single pair', assertion: "expect(pairsToObject([['x', 99]])).toEqual({ x: 99 })" },
      { description: 'string values', assertion: "expect(pairsToObject([['name', 'Alice']])).toEqual({ name: 'Alice' })" },
      { description: 'duplicate key uses last value', assertion: "expect(pairsToObject([['a', 1], ['a', 2]])).toEqual({ a: 2 })" },
    ],
    hints: [
      '`Object.fromEntries` is the reverse of `Object.entries`.',
      'Duplicate keys are allowed — the last one wins.',
    ],
    tags: ['Object', 'Object.fromEntries', 'beginner'],
  },
  {
    slug: 'object-from-entries-map',
    title: 'Object.fromEntries() — Map to object',
    description: `## Object.fromEntries() with a Map

Since \`Map\` is iterable and yields \`[key, value]\` pairs, you can pass a Map directly to \`Object.fromEntries\`.

**Challenge:** Implement \`mapToObject(map)\` that converts a \`Map<string, unknown>\` to a plain object.

\`\`\`ts
mapToObject(new Map([['a', 1], ['b', 2]])) // → { a: 1, b: 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.fromEntries',
    initialCode: `function mapToObject(map: Map<string, unknown>): Record<string, unknown> {
  // Pass the Map directly to Object.fromEntries
}`,
    solution: `function mapToObject(map: Map<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(map)
}`,
    tests: [
      { description: 'converts Map to object', assertion: "expect(mapToObject(new Map([['a', 1], ['b', 2]]))).toEqual({ a: 1, b: 2 })" },
      { description: 'empty Map returns empty object', assertion: "expect(mapToObject(new Map())).toEqual({})" },
      { description: 'single entry Map', assertion: "expect(mapToObject(new Map([['x', 5]]))).toEqual({ x: 5 })" },
      { description: 'string value preserved', assertion: "expect(mapToObject(new Map([['k', 'v']]))).toEqual({ k: 'v' })" },
      { description: 'result has correct key count', assertion: "expect(Object.keys(mapToObject(new Map([['a', 1], ['b', 2], ['c', 3]]))).length).toBe(3)" },
    ],
    hints: [
      '`Map` is iterable and yields `[key, value]` pairs — exactly what `Object.fromEntries` expects.',
    ],
    tags: ['Object', 'Object.fromEntries', 'Map', 'beginner'],
  },
  {
    slug: 'object-from-entries-reverse-entries',
    title: 'Object.fromEntries() — reverse of Object.entries',
    description: `## Object.fromEntries() — round-trip with Object.entries

\`Object.fromEntries(Object.entries(obj))\` creates a shallow clone of \`obj\`. This demonstrates the inverse relationship.

**Challenge:** Implement \`roundTrip(obj)\` that does \`Object.fromEntries(Object.entries(obj))\`.

\`\`\`ts
roundTrip({ a: 1, b: 2 }) // → { a: 1, b: 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.fromEntries',
    initialCode: `function roundTrip(obj: Record<string, unknown>): Record<string, unknown> {
  // Apply Object.fromEntries(Object.entries(obj))
}`,
    solution: `function roundTrip(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(obj))
}`,
    tests: [
      { description: 'round-trip preserves object', assertion: "expect(roundTrip({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })" },
      { description: 'result is a different reference', assertion: "const o = { a: 1 }; expect(roundTrip(o) === o).toBe(false)" },
      { description: 'empty object stays empty', assertion: "expect(roundTrip({})).toEqual({})" },
      { description: 'string values preserved', assertion: "expect(roundTrip({ name: 'Bob' })).toEqual({ name: 'Bob' })" },
      { description: 'key count preserved', assertion: "expect(Object.keys(roundTrip({ x: 1, y: 2, z: 3 }))).toHaveLength(3)" },
    ],
    hints: [
      '`Object.fromEntries(Object.entries(obj))` is a common shallow-clone pattern.',
    ],
    tags: ['Object', 'Object.fromEntries', 'Object.entries', 'beginner'],
  },
  {
    slug: 'object-from-entries-transform',
    title: 'Object.fromEntries() — transform values',
    description: `## Object.fromEntries() with map

Combining \`Object.entries\`, \`.map\`, and \`Object.fromEntries\` is a powerful pattern to transform object values.

**Challenge:** Implement \`doubleValues(obj)\` that returns a new object with all numeric values doubled.

\`\`\`ts
doubleValues({ a: 1, b: 3 }) // → { a: 2, b: 6 }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.fromEntries',
    initialCode: `function doubleValues(obj: Record<string, number>): Record<string, number> {
  // Use Object.entries → map → Object.fromEntries to double each value
}`,
    solution: `function doubleValues(obj: Record<string, number>): Record<string, number> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]))
}`,
    tests: [
      { description: 'doubles all values', assertion: "expect(doubleValues({ a: 1, b: 3 })).toEqual({ a: 2, b: 6 })" },
      { description: 'empty object returns empty', assertion: "expect(doubleValues({})).toEqual({})" },
      { description: 'single value doubled', assertion: "expect(doubleValues({ x: 5 })).toEqual({ x: 10 })" },
      { description: 'zero doubled is zero', assertion: "expect(doubleValues({ n: 0 })).toEqual({ n: 0 })" },
      { description: 'does not mutate original', assertion: "const o = { a: 1 }; doubleValues(o); expect(o).toEqual({ a: 1 })" },
    ],
    hints: [
      'Chain: `Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]))`.',
    ],
    tags: ['Object', 'Object.fromEntries', 'transform', 'intermediate'],
  },
  {
    slug: 'object-from-entries-empty',
    title: 'Object.fromEntries() — empty iterable',
    description: `## Object.fromEntries() with empty input

Passing an empty array (or empty iterable) to \`Object.fromEntries\` returns an empty object \`{}\`.

**Challenge:** Implement \`emptyFromEntries()\` that calls \`Object.fromEntries([])\` and returns the result.

\`\`\`ts
emptyFromEntries() // → {}
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.fromEntries',
    initialCode: `function emptyFromEntries(): Record<string, unknown> {
  // Call Object.fromEntries with an empty array
}`,
    solution: `function emptyFromEntries(): Record<string, unknown> {
  return Object.fromEntries([])
}`,
    tests: [
      { description: 'returns empty object', assertion: "expect(emptyFromEntries()).toEqual({})" },
      { description: 'has no keys', assertion: "expect(Object.keys(emptyFromEntries())).toHaveLength(0)" },
      { description: 'is typeof object', assertion: "expect(typeof emptyFromEntries()).toBe('object')" },
      { description: 'is not null', assertion: "expect(emptyFromEntries()).not.toBeNull()" },
      { description: 'empty Map also works', assertion: "expect(Object.fromEntries(new Map())).toEqual({})" },
    ],
    hints: [
      '`Object.fromEntries([])` is valid and returns `{}`.',
    ],
    tags: ['Object', 'Object.fromEntries', 'beginner'],
  },
]
