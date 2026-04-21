import type { Exercise } from '@/shared/types/exercises'

export const objectKeysExercises: Exercise[] = [
  {
    slug: 'object-keys-1',
    title: 'Object.keys() — basic usage',
    description: `## Object.keys()

\`Object.keys(obj)\` returns an array of the object's own enumerable string-keyed property names, in the same order as a \`for...in\` loop (excluding prototype properties).

**Challenge:** Implement \`getKeys(obj)\` that returns an array of the object's own enumerable keys.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.keys',
    initialCode: `function getKeys(obj) {
  // Return array of own enumerable string keys
}`,
    solution: `function getKeys(obj) {
  return Object.keys(obj);
}`,
    tests: [
      {
        description: 'Returns keys of a simple object',
        assertion: "expect(Object.keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])"
      },
      {
        description: 'Returns empty array for empty object',
        assertion: "expect(Object.keys({})).toEqual([])"
      },
      {
        description: 'Returns only own keys, not inherited',
        assertion: "expect((() => { function Foo() { this.a = 1; } Foo.prototype.b = 2; return Object.keys(new Foo()).length === 1; })()).toBe(true)"
      },
      {
        description: 'Keys are in insertion order',
        assertion: "expect(Object.keys({ z: 3, a: 1, m: 2 })).toEqual(['z', 'a', 'm'])"
      },
      {
        description: 'Non-enumerable properties are excluded',
        assertion: "expect((() => { const obj = {}; Object.defineProperty(obj, 'hidden', { value: 1, enumerable: false }); return Object.keys(obj).length === 0; })()).toBe(true)"
      },
    ],
    hints: ['Object.keys only returns own enumerable string-keyed properties'],
    tags: ['Object', 'keys', 'static-method', 'enumerable'],
    usageExample: {
      code: `// Get array of own enumerable property names
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj)   // → ['a', 'b', 'c']`,
      explanation: {
        en: "Use Object.keys() to get an array of an object's own enumerable property names for iteration or counting.",
        es: "Usa Object.keys() para obtener un array con los nombres de las propiedades enumerables propias de un objeto, para iterarlas o contarlas.",
      },
    },
  },
  {
    slug: 'object-keys-2',
    title: 'Object.keys() — inherited properties excluded',
    description: `## Object.keys() — own properties only

Unlike \`for...in\`, \`Object.keys()\` does not include inherited properties from the prototype chain.

**Challenge:** Use \`Object.keys()\` to get only the own keys of an object that inherits from another.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.keys',
    initialCode: `function getOwnKeys(obj) {
  // Return only the object's own enumerable keys
}`,
    solution: `function getOwnKeys(obj) {
  return Object.keys(obj);
}`,
    tests: [
      {
        description: 'Does not include inherited prototype keys',
        assertion: "expect((() => { const proto = { inherited: true }; const obj = Object.create(proto); obj.own = true; return !Object.keys(obj).includes('inherited'); })()).toBe(true)"
      },
      {
        description: 'Includes own keys',
        assertion: "expect((() => { const proto = { inherited: true }; const obj = Object.create(proto); obj.own = true; return Object.keys(obj).includes('own'); })()).toBe(true)"
      },
      {
        description: 'Object.create(null) keys still work',
        assertion: "expect((() => { const obj = Object.create(null); obj.x = 1; return Object.keys(obj).length === 1; })()).toBe(true)"
      },
      {
        description: 'For..in includes inherited, Object.keys does not',
        assertion: "expect((() => { const proto = { b: 2 }; const obj = Object.create(proto); obj.a = 1; return Object.keys(obj).length === 1 && Object.keys(obj)[0] === 'a'; })()).toBe(true)"
      },
      {
        description: 'Object with only inherited props returns empty array',
        assertion: "expect((() => { const obj = Object.create({ a: 1 }); return Object.keys(obj).length === 0; })()).toBe(true)"
      },
    ],
    hints: ['Object.keys ignores the prototype chain'],
    tags: ['Object', 'keys', 'static-method', 'prototype'],
    usageExample: {
      code: `// Get array of own enumerable property names
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj)   // → ['a', 'b', 'c']`,
      explanation: {
        en: "Use Object.keys() to get an array of an object's own enumerable property names for iteration or counting.",
        es: "Usa Object.keys() para obtener un array con los nombres de las propiedades enumerables propias de un objeto, para iterarlas o contarlas.",
      },
    },
  },
  {
    slug: 'object-keys-3',
    title: 'Object.keys() — non-enumerable properties',
    description: `## Object.keys() — enumerable only

Properties defined with \`Object.defineProperty\` and \`enumerable: false\` are excluded from \`Object.keys()\` results.

**Challenge:** Understand how enumerability affects \`Object.keys()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.keys',
    initialCode: `function countEnumerableKeys(obj) {
  // Return count of own enumerable keys
}`,
    solution: `function countEnumerableKeys(obj) {
  return Object.keys(obj).length;
}`,
    tests: [
      {
        description: 'Non-enumerable property excluded from Object.keys',
        assertion: "expect((() => { const obj = { a: 1 }; Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); return !Object.keys(obj).includes('b'); })()).toBe(true)"
      },
      {
        description: 'Enumerable property included in Object.keys',
        assertion: "expect((() => { const obj = {}; Object.defineProperty(obj, 'a', { value: 1, enumerable: true }); return Object.keys(obj).includes('a'); })()).toBe(true)"
      },
      {
        description: 'Mix of enumerable and non-enumerable',
        assertion: "expect((() => { const obj = { a: 1 }; Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); return Object.keys(obj).length === 1; })()).toBe(true)"
      },
      {
        description: 'Array index keys are enumerable',
        assertion: "expect(Object.keys(['x', 'y', 'z'])).toEqual(['0', '1', '2'])"
      },
      {
        description: 'length property of array is not enumerable',
        assertion: "expect(Object.keys([1, 2, 3]).includes('length')).toBe(false)"
      },
    ],
    hints: ['Object.keys only shows enumerable properties'],
    tags: ['Object', 'keys', 'static-method', 'enumerable', 'defineProperty'],
    usageExample: {
      code: `// Get array of own enumerable property names
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj)   // → ['a', 'b', 'c']`,
      explanation: {
        en: "Use Object.keys() to get an array of an object's own enumerable property names for iteration or counting.",
        es: "Usa Object.keys() para obtener un array con los nombres de las propiedades enumerables propias de un objeto, para iterarlas o contarlas.",
      },
    },
  },
  {
    slug: 'object-keys-4',
    title: 'Object.keys() — array-like objects',
    description: `## Object.keys() — arrays and array-like objects

\`Object.keys()\` also works on arrays, returning the index strings as keys.

**Challenge:** Use \`Object.keys()\` on an array to get its index keys.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.keys',
    initialCode: `function getArrayKeys(arr) {
  // Return the index keys of the array as an array of strings
}`,
    solution: `function getArrayKeys(arr) {
  return Object.keys(arr);
}`,
    tests: [
      {
        description: 'Returns index strings for an array',
        assertion: "expect(Object.keys(['a', 'b', 'c'])).toEqual(['0', '1', '2'])"
      },
      {
        description: 'Empty array returns empty array',
        assertion: "expect(Object.keys([])).toEqual([])"
      },
      {
        description: 'Array keys are strings, not numbers',
        assertion: "expect(typeof Object.keys([1, 2])[0]).toBe('string')"
      },
      {
        description: 'Sparse array only includes defined indices',
        assertion: "expect((() => { const arr = [1,,3]; return Object.keys(arr).length === 2; })()).toBe(true)"
      },
      {
        description: 'Array-like object with numeric keys',
        assertion: "expect(Object.keys({ 0: 'a', 1: 'b', length: 2 })).toEqual(['0', '1', 'length'])"
      },
    ],
    hints: ['Array indices are strings in JavaScript'],
    tags: ['Object', 'keys', 'static-method', 'array'],
    usageExample: {
      code: `// Get array of own enumerable property names
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj)   // → ['a', 'b', 'c']`,
      explanation: {
        en: "Use Object.keys() to get an array of an object's own enumerable property names for iteration or counting.",
        es: "Usa Object.keys() para obtener un array con los nombres de las propiedades enumerables propias de un objeto, para iterarlas o contarlas.",
      },
    },
  },
  {
    slug: 'object-keys-5',
    title: 'Object.keys() — counting and iterating',
    description: `## Object.keys() — practical use

\`Object.keys()\` is commonly used for iterating over an object's properties or counting them.

**Challenge:** Implement \`countProperties(obj)\` that returns the number of own enumerable properties.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.keys',
    initialCode: `function countProperties(obj) {
  // Return the number of own enumerable properties
}`,
    solution: `function countProperties(obj) {
  return Object.keys(obj).length;
}`,
    tests: [
      {
        description: 'Counts properties correctly',
        assertion: "expect(Object.keys({ a: 1, b: 2, c: 3 }).length).toBe(3)"
      },
      {
        description: 'Empty object has 0 properties',
        assertion: "expect(Object.keys({}).length).toBe(0)"
      },
      {
        description: 'Can iterate using Object.keys',
        assertion: "expect((() => { const obj = { a: 1, b: 2 }; let sum = 0; Object.keys(obj).forEach(k => sum += obj[k]); return sum === 3; })()).toBe(true)"
      },
      {
        description: 'Object.keys returns an array',
        assertion: "expect(Array.isArray(Object.keys({ a: 1 }))).toBe(true)"
      },
      {
        description: 'Can map over keys',
        assertion: "expect(Object.keys({ a: 1, b: 2 }).map(k => k.toUpperCase())).toEqual(['A', 'B'])"
      },
    ],
    hints: ['Object.keys().length is idiomatic for counting object properties'],
    tags: ['Object', 'keys', 'static-method', 'iteration'],
    usageExample: {
      code: `// Get array of own enumerable property names
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj)   // → ['a', 'b', 'c']`,
      explanation: {
        en: "Use Object.keys() to get an array of an object's own enumerable property names for iteration or counting.",
        es: "Usa Object.keys() para obtener un array con los nombres de las propiedades enumerables propias de un objeto, para iterarlas o contarlas.",
      },
    },
  },
]
