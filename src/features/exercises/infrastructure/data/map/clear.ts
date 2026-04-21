import type { Exercise } from '@/shared/types/exercises'

export const mapClearExercises: Exercise[] = [
  {
    slug: 'map-clear-1',
    title: 'Map clear() — size is 0 after clear',
    description: `## Map.prototype.clear()\n\n\`clear()\` removes all key-value pairs from the Map.\n\n**Challenge:** Verify that size is 0 after clear().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'clear',
    initialCode: `// Clear a Map and check its size\nconst m = new Map([['a',1],['b',2]])\nm.clear()\n`,
    solution: `const m = new Map([['a',1],['b',2]]); m.clear(); m.size`,
    tests: [
      { description: 'size is 0 after clear', assertion:"const m = new Map([['a',1],['b',2]]); m.clear(); expect(m.size).toBe(0)" },
      { description: 'size is falsy after clear', assertion:"const m = new Map([['a',1]]); m.clear(); expect(m.size).toBeFalsy()" },
      { description: 'size was 2 before clear', assertion:"const m = new Map([['a',1],['b',2]]); expect(m.size).toBe(2)" },
      { description: 'clear removes all entries', assertion:"const m = new Map([['a',1],['b',2],['c',3]]); m.clear(); expect(m.size).toBe(0)" },
      { description: 'has() returns false after clear', assertion:"const m = new Map([['a',1]]); m.clear(); expect(m.has('a')).toBe(false)" },
    ],
    hints: ['clear() removes every entry, setting size to 0'],
    tags: ['Map', 'clear', 'method'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size) // → 0`,
      explanation: {
        en: 'Use Map.clear() to remove all key-value pairs from the map.',
        es: 'Usa Map.clear() para eliminar todos los pares clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-clear-2',
    title: 'Map clear() — returns undefined',
    description: `## Map.prototype.clear()\n\n\`clear()\` returns \`undefined\`.\n\n**Challenge:** Verify that the return value of clear() is undefined.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'clear',
    initialCode: `// Check the return value of clear()\nconst m = new Map([['a', 1]])\n`,
    solution: `new Map([['a', 1]]).clear()`,
    tests: [
      { description: 'clear() returns undefined', assertion:"expect(new Map([['a',1]]).clear()).toBeUndefined()" },
      { description: 'return value is falsy', assertion:"const m = new Map([['a',1]]); expect(m.clear()).toBeFalsy()" },
      { description: 'return is not null', assertion:"const m = new Map([['a',1]]); expect(m.clear() !== null).toBe(true)" },
      { description: "return value is exactly undefined", assertion:"const m = new Map([['a',1]]); expect(m.clear() === undefined).toBe(true)" },
      { description: 'clear is a function', assertion:"expect(typeof new Map().clear).toBe('function')" },
    ],
    hints: ['clear() returns undefined — it modifies the Map in place'],
    tags: ['Map', 'clear', 'undefined'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size) // → 0`,
      explanation: {
        en: 'Use Map.clear() to remove all key-value pairs from the map.',
        es: 'Usa Map.clear() para eliminar todos los pares clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-clear-3',
    title: 'Map clear() — has() false after clear',
    description: `## Map.prototype.clear()\n\nAfter clear(), has() returns false for all previously existing keys.\n\n**Challenge:** Verify that has() returns false after clear().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'clear',
    initialCode: `// Clear then check has()\nconst m = new Map([['a',1],['b',2]])\nm.clear()\n`,
    solution: `const m = new Map([['a',1],['b',2]]); m.clear(); m.has('a')`,
    tests: [
      { description: "has('a') is false after clear", assertion:"const m = new Map([['a',1]]); m.clear(); expect(m.has('a')).toBe(false)" },
      { description: "has('b') is false after clear", assertion:"const m = new Map([['a',1],['b',2]]); m.clear(); expect(m.has('b')).toBe(false)" },
      { description: "get('a') is undefined after clear", assertion:"const m = new Map([['a',1]]); m.clear(); expect(m.get('a')).toBeUndefined()" },
      { description: 'size is 0 after clear', assertion:"const m = new Map([['a',1]]); m.clear(); expect(m.size).toBe(0)" },
      { description: 'can add entries after clear', assertion:"const m = new Map([['a',1]]); m.clear(); m.set('z',99); expect(m.has('z')).toBe(true)" },
    ],
    hints: ['After clear(), the Map is completely empty'],
    tags: ['Map', 'clear', 'has'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size) // → 0`,
      explanation: {
        en: 'Use Map.clear() to remove all key-value pairs from the map.',
        es: 'Usa Map.clear() para eliminar todos los pares clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-clear-4',
    title: 'Map clear() — clear empty Map is fine',
    description: `## Map.prototype.clear()\n\nCalling clear() on an already empty Map is safe and does nothing.\n\n**Challenge:** Verify that clearing an empty Map doesn't throw.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'clear',
    initialCode: `// Clear an already empty Map\nconst m = new Map()\nm.clear()\n`,
    solution: `const m = new Map(); m.clear(); m.size`,
    tests: [
      { description: 'clearing empty Map does not throw', assertion:"expect((() => { try { (() => new Map().clear())(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'size remains 0 after clearing empty Map', assertion:"const m = new Map(); m.clear(); expect(m.size).toBe(0)" },
      { description: 'clear returns undefined on empty Map', assertion:"expect(new Map().clear()).toBeUndefined()" },
      { description: 'can call clear multiple times', assertion:"const m = new Map([['a',1]]); m.clear(); m.clear(); expect(m.size).toBe(0)" },
      { description: 'Map is still valid after multiple clears', assertion:"const m = new Map(); m.clear(); m.set('x',1); expect(m.size).toBe(1)" },
    ],
    hints: ['clear() is safe to call on an empty Map'],
    tags: ['Map', 'clear', 'empty'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size) // → 0`,
      explanation: {
        en: 'Use Map.clear() to remove all key-value pairs from the map.',
        es: 'Usa Map.clear() para eliminar todos los pares clave-valor del mapa.',
      },
    },
  },
  {
    slug: 'map-clear-5',
    title: 'Map clear() — size before vs after',
    description: `## Map.prototype.clear()\n\nsize goes from non-zero to zero after clear().\n\n**Challenge:** Verify that size changes from 3 to 0 after clear().`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Map',
    method: 'clear',
    initialCode: `// Compare size before and after clear\nconst m = new Map([['a',1],['b',2],['c',3]])\n`,
    solution: `const m = new Map([['a',1],['b',2],['c',3]]); const before = m.size; m.clear(); before`,
    tests: [
      { description: 'size before clear is 3', assertion:"const m = new Map([['a',1],['b',2],['c',3]]); expect(m.size).toBe(3)" },
      { description: 'size after clear is 0', assertion:"const m = new Map([['a',1],['b',2],['c',3]]); m.clear(); expect(m.size).toBe(0)" },
      { description: 'clear resets size regardless of initial count', assertion:"const m = new Map([['a',1],['b',2]]); m.clear(); expect(m.size).toBe(0)" },
      { description: 'can re-add entries after clear', assertion:"const m = new Map([['a',1]]); m.clear(); m.set('b',2); expect(m.size).toBe(1)" },
      { description: 'clear does not affect other Maps', assertion:"const m1 = new Map([['a',1]]); const m2 = new Map([['b',2]]); m1.clear(); expect(m2.size).toBe(1)" },
    ],
    hints: ['clear() always resets the Map to an empty state'],
    tags: ['Map', 'clear', 'size'],
    usageExample: {
      code: `const m = new Map([['a', 1], ['b', 2]])
m.clear()
console.log(m.size) // → 0`,
      explanation: {
        en: 'Use Map.clear() to remove all key-value pairs from the map.',
        es: 'Usa Map.clear() para eliminar todos los pares clave-valor del mapa.',
      },
    },
  },
]
