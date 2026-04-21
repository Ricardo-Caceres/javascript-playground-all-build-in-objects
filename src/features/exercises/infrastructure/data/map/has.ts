import type { Exercise } from '@/shared/types/exercises'

export const mapHasExercises: Exercise[] = [
  {
    slug: 'map-has-1',
    title: 'Map has() — existing key',
    description: `## Map.prototype.has()\n\n\`has(key)\` returns true if the key exists in the Map.\n\n**Challenge:** Verify that has() returns true for an existing key.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'has',
    initialCode: `// Use has() to check for a key\nconst m = new Map([['a', 1]])\n`,
    solution: `new Map([['a', 1]]).has('a')`,
    tests: [
      { description: "has('a') returns true", assertion: "expect(new Map([['a',1]]).has('a')).toBe(true)" },
      { description: 'result is boolean', assertion: "expect(typeof new Map([['a',1]]).has('a')).toBe('boolean')" },
      { description: 'result is truthy', assertion: "expect(new Map([['a',1]]).has('a')).toBeTruthy()" },
      { description: "has works after set()", assertion: "const m = new Map(); m.set('x',1); expect(m.has('x')).toBe(true)" },
      { description: 'has does not modify size', assertion: "const m = new Map([['a',1]]); m.has('a'); expect(m.size).toBe(1)" },
    ],
    hints: ['has() returns true if the Map contains the key'],
    tags: ['Map', 'has', 'method'],
    usageExample: {
      code: `const m = new Map([['a', 1]])
m.has('a')   // → true
m.has('z')   // → false`,
      explanation: {
        en: 'Use Map.has() to check whether a key exists in the map.',
        es: 'Usa Map.has() para verificar si una clave existe en el mapa.',
      },
    },
  },
  {
    slug: 'map-has-2',
    title: 'Map has() — missing key',
    description: `## Map.prototype.has()\n\n\`has()\` returns false for a key not in the Map.\n\n**Challenge:** Verify that has() returns false for a missing key.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'has',
    initialCode: `// Check has() for a missing key\nconst m = new Map([['a', 1]])\n`,
    solution: `new Map([['a', 1]]).has('missing')`,
    tests: [
      { description: "has('missing') returns false", assertion: "expect(new Map([['a',1]]).has('missing')).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof new Map([['a',1]]).has('missing')).toBe('boolean')" },
      { description: 'result is falsy', assertion: "expect(new Map().has('any')).toBeFalsy()" },
      { description: 'empty map has no keys', assertion: "expect(new Map().has('a')).toBe(false)" },
      { description: "has returns false (not null or undefined)", assertion: "expect(new Map().has('x') === false).toBe(true)" },
    ],
    hints: ['has() returns false (not undefined) for missing keys'],
    tags: ['Map', 'has', 'missing'],
    usageExample: {
      code: `const m = new Map([['a', 1]])
m.has('a')   // → true
m.has('z')   // → false`,
      explanation: {
        en: 'Use Map.has() to check whether a key exists in the map.',
        es: 'Usa Map.has() para verificar si una clave existe en el mapa.',
      },
    },
  },
  {
    slug: 'map-has-3',
    title: 'Map has() — after delete',
    description: `## Map.prototype.has()\n\nAfter deleting a key, has() returns false.\n\n**Challenge:** Verify that has() returns false after delete().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'has',
    initialCode: `// Delete a key then check has()\nconst m = new Map([['a', 1]])\nm.delete('a')\n`,
    solution: `const m = new Map([['a', 1]]); m.delete('a'); m.has('a')`,
    tests: [
      { description: "has() is false after delete", assertion: "const m = new Map([['a',1]]); m.delete('a'); expect(m.has('a')).toBe(false)" },
      { description: 'size is 0 after delete', assertion: "const m = new Map([['a',1]]); m.delete('a'); expect(m.size).toBe(0)" },
      { description: 'other keys still present', assertion: "const m = new Map([['a',1],['b',2]]); m.delete('a'); expect(m.has('b')).toBe(true)" },
      { description: "has false is falsy", assertion: "const m = new Map([['a',1]]); m.delete('a'); expect(m.has('a')).toBeFalsy()" },
      { description: "has after clear is false", assertion: "const m = new Map([['a',1]]); m.clear(); expect(m.has('a')).toBe(false)" },
    ],
    hints: ['delete() removes the key; subsequent has() returns false'],
    tags: ['Map', 'has', 'delete'],
    usageExample: {
      code: `const m = new Map([['a', 1]])
m.has('a')   // → true
m.has('z')   // → false`,
      explanation: {
        en: 'Use Map.has() to check whether a key exists in the map.',
        es: 'Usa Map.has() para verificar si una clave existe en el mapa.',
      },
    },
  },
  {
    slug: 'map-has-4',
    title: 'Map has() — object key',
    description: `## Map.prototype.has()\n\nhas() checks object keys by reference.\n\n**Challenge:** Verify that has() returns true only for the same object reference.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Map',
    method: 'has',
    initialCode: `// Object key reference check\nconst key = {}\nconst m = new Map([[key, 'val']])\n`,
    solution: `const key = {}; const m = new Map([[key, 'val']]); m.has(key)`,
    tests: [
      { description: 'has(same ref) is true', assertion: "const k = {}; const m = new Map([[k,'v']]); expect(m.has(k)).toBe(true)" },
      { description: 'has(different ref) is false', assertion: "const m = new Map([[{},'v']]); expect(m.has({})).toBe(false)" },
      { description: 'null key works', assertion: "const m = new Map([[null,'x']]); expect(m.has(null)).toBe(true)" },
      { description: 'undefined key works', assertion: "const m = new Map([[undefined,'x']]); expect(m.has(undefined)).toBe(true)" },
      { description: 'NaN key works (SameValueZero)', assertion: "const m = new Map([[NaN,'x']]); expect(m.has(NaN)).toBe(true)" },
    ],
    hints: ['Map uses SameValueZero; NaN equals NaN, objects compared by reference'],
    tags: ['Map', 'has', 'objectKey'],
    usageExample: {
      code: `const m = new Map([['a', 1]])
m.has('a')   // → true
m.has('z')   // → false`,
      explanation: {
        en: 'Use Map.has() to check whether a key exists in the map.',
        es: 'Usa Map.has() para verificar si una clave existe en el mapa.',
      },
    },
  },
  {
    slug: 'map-has-5',
    title: 'Map has() — after set',
    description: `## Map.prototype.has()\n\nAfter calling set(), has() returns true for that key.\n\n**Challenge:** Verify that has() returns true immediately after set().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'has',
    initialCode: `// Set a key then check has()\nconst m = new Map()\nm.set('newKey', 'value')\n`,
    solution: `const m = new Map(); m.set('newKey', 'value'); m.has('newKey')`,
    tests: [
      { description: "has('newKey') is true after set", assertion: "const m = new Map(); m.set('newKey','v'); expect(m.has('newKey')).toBe(true)" },
      { description: 'has is true for all set keys', assertion: "const m = new Map(); m.set('a',1); m.set('b',2); expect(m.has('a') && m.has('b')).toBe(true)" },
      { description: 'has false before set', assertion: "const m = new Map(); expect(m.has('k')).toBe(false)" },
      { description: 'has true after set', assertion: "const m = new Map(); m.set('k',0); expect(m.has('k')).toBe(true)" },
      { description: 'has works with falsy value', assertion: "const m = new Map(); m.set('z',0); expect(m.has('z')).toBe(true)" },
    ],
    hints: ['has() checks for key existence, not value truthiness'],
    tags: ['Map', 'has', 'set'],
    usageExample: {
      code: `const m = new Map([['a', 1]])
m.has('a')   // → true
m.has('z')   // → false`,
      explanation: {
        en: 'Use Map.has() to check whether a key exists in the map.',
        es: 'Usa Map.has() para verificar si una clave existe en el mapa.',
      },
    },
  },
]
