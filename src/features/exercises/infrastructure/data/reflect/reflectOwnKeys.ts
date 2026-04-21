import type { Exercise } from '@/shared/types/exercises'

export const reflectOwnKeysExercises: Exercise[] = [
  {
    slug: 'reflect-own-keys-basic',
    title: 'Reflect.ownKeys() - list all own keys',
    description: 'Returns all own property keys of an object.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'ownKeys',
    initialCode: 'function reflectOwnKeysBasic() { return Reflect.ownKeys({ a: 1, b: 2 }) }',
    solution: 'function reflectOwnKeysBasic() { return Reflect.ownKeys({ a: 1, b: 2 }) }',
    tests: [
      { description: "returns ['a', 'b']", assertion:"expect(Reflect.ownKeys({a:1, b:2})).toEqual(['a', 'b'])" },
      { description: 'result is array', assertion:'expect(Array.isArray(Reflect.ownKeys({a:1, b:2}))).toBe(true)' },
      { description: 'has length 2', assertion:'expect(Reflect.ownKeys({a:1, b:2})).toHaveLength(2)' },
      { description: "contains a", assertion:"expect(Reflect.ownKeys({a:1, b:2})).toContain('a')" },
      { description: "contains b", assertion:"expect(Reflect.ownKeys({a:1, b:2})).toContain('b')" },
    ],
    hints: ['Reflect.ownKeys returns all own keys including non-enumerable ones.'],
    tags: ['Reflect', 'ownKeys', 'beginner'],
    usageExample: {
      code: `const obj = { a: 1, b: 2 }
const keys = Reflect.ownKeys(obj)
console.log(keys) // → ['a', 'b']
// Includes string keys, Symbol keys, and non-enumerable keys`,
      explanation: {
        en: 'Reflect.ownKeys() returns an array of all own property keys (strings and Symbols) of an object.',
        es: 'Reflect.ownKeys() devuelve un arreglo con todas las claves propias (strings y Symbols) de un objeto.',
      },
    },
  },
  {
    slug: 'reflect-own-keys-array',
    title: 'Reflect.ownKeys() - array with element',
    description: 'Arrays have numeric string indices as keys.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'ownKeys',
    initialCode: 'function reflectOwnKeysArray() { return Reflect.ownKeys([10]).includes("0") }',
    solution: 'function reflectOwnKeysArray() { return Reflect.ownKeys([10]).includes("0") }',
    tests: [
      { description: "contains index 0", assertion:"expect(Reflect.ownKeys([10])).toContain('0')" },
      { description: "contains length", assertion:"expect(Reflect.ownKeys([10])).toContain('length')" },
      { description: 'has 2 keys', assertion:'expect(Reflect.ownKeys([10])).toHaveLength(2)' },
      { description: 'result is array', assertion:'expect(Array.isArray(Reflect.ownKeys([10]))).toBe(true)' },
      { description: 'result is truthy', assertion:'expect(Reflect.ownKeys([10])).toBeTruthy()' },
    ],
    hints: ["Array elements have string keys like '0', '1', etc."],
    tags: ['Reflect', 'ownKeys', 'array', 'beginner'],
    usageExample: {
      code: `const obj = { a: 1, b: 2 }
const keys = Reflect.ownKeys(obj)
console.log(keys) // → ['a', 'b']
// Includes string keys, Symbol keys, and non-enumerable keys`,
      explanation: {
        en: 'Reflect.ownKeys() returns an array of all own property keys (strings and Symbols) of an object.',
        es: 'Reflect.ownKeys() devuelve un arreglo con todas las claves propias (strings y Symbols) de un objeto.',
      },
    },
  },
  {
    slug: 'reflect-own-keys-typeof',
    title: 'Reflect.ownKeys - typeof',
    description: 'typeof Reflect.ownKeys returns function.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'ownKeys',
    initialCode: 'function checkReflectOwnKeysType() { return typeof Reflect.ownKeys }',
    solution: 'function checkReflectOwnKeysType() { return typeof Reflect.ownKeys }',
    tests: [
      { description: 'typeof is function', assertion:"expect(typeof Reflect.ownKeys).toBe('function')" },
      { description: 'is truthy', assertion:'expect(Reflect.ownKeys).toBeTruthy()' },
      { description: 'not null', assertion:'expect(Reflect.ownKeys !== null).toBe(true)' },
      { description: 'not undefined', assertion:'expect(Reflect.ownKeys !== undefined).toBe(true)' },
      { description: 'equals function string', assertion:"expect(typeof Reflect.ownKeys === 'function').toBe(true)" },
    ],
    hints: ['All Reflect methods are functions.'],
    tags: ['Reflect', 'ownKeys', 'typeof', 'beginner'],
    usageExample: {
      code: `const obj = { a: 1, b: 2 }
const keys = Reflect.ownKeys(obj)
console.log(keys) // → ['a', 'b']
// Includes string keys, Symbol keys, and non-enumerable keys`,
      explanation: {
        en: 'Reflect.ownKeys() returns an array of all own property keys (strings and Symbols) of an object.',
        es: 'Reflect.ownKeys() devuelve un arreglo con todas las claves propias (strings y Symbols) de un objeto.',
      },
    },
  },
  {
    slug: 'reflect-own-keys-empty',
    title: 'Reflect.ownKeys() - empty object',
    description: 'Empty object has 0 own keys.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'ownKeys',
    initialCode: 'function reflectOwnKeysEmpty() { return Reflect.ownKeys({}).length }',
    solution: 'function reflectOwnKeysEmpty() { return Reflect.ownKeys({}).length }',
    tests: [
      { description: 'empty object has 0 keys', assertion:'expect(Reflect.ownKeys({}).length).toBe(0)' },
      { description: 'result equals 0', assertion:'expect(Reflect.ownKeys({}).length === 0).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof Reflect.ownKeys({}).length).toBe('number')" },
      { description: 'result is falsy', assertion:'expect(Reflect.ownKeys({}).length).toBeFalsy()' },
      { description: 'result equals empty array', assertion:'expect(Reflect.ownKeys({})).toEqual([])' },
    ],
    hints: ['Reflect.ownKeys returns only own keys, not prototype chain.'],
    tags: ['Reflect', 'ownKeys', 'beginner'],
    usageExample: {
      code: `const obj = { a: 1, b: 2 }
const keys = Reflect.ownKeys(obj)
console.log(keys) // → ['a', 'b']
// Includes string keys, Symbol keys, and non-enumerable keys`,
      explanation: {
        en: 'Reflect.ownKeys() returns an array of all own property keys (strings and Symbols) of an object.',
        es: 'Reflect.ownKeys() devuelve un arreglo con todas las claves propias (strings y Symbols) de un objeto.',
      },
    },
  },
  {
    slug: 'reflect-own-keys-three-keys',
    title: 'Reflect.ownKeys() - three keys',
    description: 'Count own keys on a three-property object.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'ownKeys',
    initialCode: 'function reflectOwnKeysThree() { return Reflect.ownKeys({ x: 1, y: 2, z: 3 }).length }',
    solution: 'function reflectOwnKeysThree() { return Reflect.ownKeys({ x: 1, y: 2, z: 3 }).length }',
    tests: [
      { description: 'three keys object has length 3', assertion:'expect(Reflect.ownKeys({x:1, y:2, z:3}).length).toBe(3)' },
      { description: 'result equals 3', assertion:'expect(Reflect.ownKeys({x:1, y:2, z:3}).length === 3).toBe(true)' },
      { description: 'result is number', assertion:"expect(typeof Reflect.ownKeys({x:1, y:2, z:3}).length).toBe('number')" },
      { description: 'result is truthy', assertion:'expect(Reflect.ownKeys({x:1, y:2, z:3}).length).toBeTruthy()' },
      { description: "contains x", assertion:"expect(Reflect.ownKeys({x:1, y:2, z:3})).toContain('x')" },
    ],
    hints: ['.length on the result gives the count of own keys.'],
    tags: ['Reflect', 'ownKeys', 'beginner'],
    usageExample: {
      code: `const obj = { a: 1, b: 2 }
const keys = Reflect.ownKeys(obj)
console.log(keys) // → ['a', 'b']
// Includes string keys, Symbol keys, and non-enumerable keys`,
      explanation: {
        en: 'Reflect.ownKeys() returns an array of all own property keys (strings and Symbols) of an object.',
        es: 'Reflect.ownKeys() devuelve un arreglo con todas las claves propias (strings y Symbols) de un objeto.',
      },
    },
  },
]
