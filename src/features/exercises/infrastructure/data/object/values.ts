import type { Exercise } from '@/shared/types/exercises'

export const objectValuesExercises: Exercise[] = [
  {
    slug: 'object-values-1',
    title: 'Object.values() — basic usage',
    description: `## Object.values()

\`Object.values(obj)\` returns an array of the object's own enumerable string-keyed property values, in the same order as \`for...in\`.

**Challenge:** Implement \`getValues(obj)\` that returns an array of the object's own enumerable property values.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.values',
    initialCode: `function getValues(obj) {
  // Return array of own enumerable property values
}`,
    solution: `function getValues(obj) {
  return Object.values(obj);
}`,
    tests: [
      {
        description: 'Returns values of a simple object',
        assertion: "expect(Object.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])"
      },
      {
        description: 'Returns empty array for empty object',
        assertion: "expect(Object.values({})).toEqual([])"
      },
      {
        description: 'Returns values in insertion order',
        assertion: "expect(Object.values({ z: 'last', a: 'first', m: 'mid' })).toEqual(['last', 'first', 'mid'])"
      },
      {
        description: 'Object.values returns an array',
        assertion: "expect(Array.isArray(Object.values({ a: 1 }))).toBe(true)"
      },
      {
        description: 'Works with mixed value types',
        assertion: "expect(Object.values({ n: 1, s: 'two', b: true }).length).toBe(3)"
      },
    ],
    hints: ['Object.values is the counterpart to Object.keys'],
    tags: ['Object', 'values', 'static-method', 'enumerable'],
    usageExample: {
      code: `// Get array of own enumerable property values
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj)   // → [1, 2, 3]`,
      explanation: {
        en: "Use Object.values() to get an array of an object's own enumerable property values for easy iteration.",
        es: "Usa Object.values() para obtener un array con los valores de las propiedades enumerables propias de un objeto y iterarlos fácilmente.",
      },
    },
  },
  {
    slug: 'object-values-2',
    title: 'Object.values() — insertion order',
    description: `## Object.values() — property order

\`Object.values()\` preserves insertion order for string-keyed properties (with some exceptions for integer indices).

**Challenge:** Verify that Object.values() returns values in the correct order.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.values',
    initialCode: `function getOrderedValues(obj) {
  // Return the values in the order they were inserted
}`,
    solution: `function getOrderedValues(obj) {
  return Object.values(obj);
}`,
    tests: [
      {
        description: 'Values are in insertion order',
        assertion: "expect(Object.values({ first: 1, second: 2, third: 3 })).toEqual([1, 2, 3])"
      },
      {
        description: 'Can sum values using reduce',
        assertion: "expect(Object.values({ a: 10, b: 20, c: 30 }).reduce((s, v) => s + v, 0)).toBe(60)"
      },
      {
        description: 'Can find max value',
        assertion: "expect(Math.max(...Object.values({ x: 3, y: 7, z: 2 }))).toBe(7)"
      },
      {
        description: 'Values include nested objects',
        assertion: "expect((() => { const obj = { inner: { a: 1 } }; return Object.values(obj)[0] === obj.inner; })()).toBe(true)"
      },
      {
        description: 'Array values are returned as-is',
        assertion: "expect(Object.values({ arr: [1, 2, 3] })[0]).toEqual([1, 2, 3])"
      },
    ],
    hints: ['Object.values preserves the same order as Object.keys'],
    tags: ['Object', 'values', 'static-method', 'order'],
    usageExample: {
      code: `// Get array of own enumerable property values
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj)   // → [1, 2, 3]`,
      explanation: {
        en: "Use Object.values() to get an array of an object's own enumerable property values for easy iteration.",
        es: "Usa Object.values() para obtener un array con los valores de las propiedades enumerables propias de un objeto y iterarlos fácilmente.",
      },
    },
  },
  {
    slug: 'object-values-3',
    title: 'Object.values() — non-enumerable excluded',
    description: `## Object.values() — enumerable only

Like \`Object.keys()\`, \`Object.values()\` only returns values for own **enumerable** properties. Non-enumerable properties defined via \`Object.defineProperty\` are excluded.

**Challenge:** Demonstrate the difference between enumerable and non-enumerable property values.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.values',
    initialCode: `function getEnumerableValues(obj) {
  // Return only enumerable property values
}`,
    solution: `function getEnumerableValues(obj) {
  return Object.values(obj);
}`,
    tests: [
      {
        description: 'Non-enumerable property value excluded',
        assertion: "expect((() => { const obj = { a: 1 }; Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); return !Object.values(obj).includes(2); })()).toBe(true)"
      },
      {
        description: 'Enumerable property value included',
        assertion: "expect((() => { const obj = {}; Object.defineProperty(obj, 'a', { value: 1, enumerable: true }); return Object.values(obj).includes(1); })()).toBe(true)"
      },
      {
        description: 'Count of values matches enumerable keys',
        assertion: "expect((() => { const obj = { a: 1 }; Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); return Object.values(obj).length === 1; })()).toBe(true)"
      },
      {
        description: 'Standard properties are enumerable by default',
        assertion: "expect(Object.values({ x: 10, y: 20 }).length).toBe(2)"
      },
      {
        description: 'Object.keys and Object.values have same length',
        assertion: "expect((() => { const obj = { a: 1, b: 2, c: 3 }; return Object.keys(obj).length === Object.values(obj).length; })()).toBe(true)"
      },
    ],
    hints: ['Non-enumerable properties are invisible to Object.values'],
    tags: ['Object', 'values', 'static-method', 'enumerable'],
    usageExample: {
      code: `// Get array of own enumerable property values
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj)   // → [1, 2, 3]`,
      explanation: {
        en: "Use Object.values() to get an array of an object's own enumerable property values for easy iteration.",
        es: "Usa Object.values() para obtener un array con los valores de las propiedades enumerables propias de un objeto y iterarlos fácilmente.",
      },
    },
  },
  {
    slug: 'object-values-4',
    title: 'Object.values() — inherited not included',
    description: `## Object.values() — own properties only

\`Object.values()\` does not include values from inherited prototype properties.

**Challenge:** Show that inherited property values are excluded from \`Object.values()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.values',
    initialCode: `function ownValuesOnly(obj) {
  // Return only own enumerable values (not inherited)
}`,
    solution: `function ownValuesOnly(obj) {
  return Object.values(obj);
}`,
    tests: [
      {
        description: 'Inherited values are not included',
        assertion: "expect((() => { const proto = { inherited: 99 }; const obj = Object.create(proto); obj.own = 1; return !Object.values(obj).includes(99); })()).toBe(true)"
      },
      {
        description: 'Own value is included',
        assertion: "expect((() => { const proto = { inherited: 99 }; const obj = Object.create(proto); obj.own = 1; return Object.values(obj).includes(1); })()).toBe(true)"
      },
      {
        description: 'Object with only inherited props has empty values array',
        assertion: "expect((() => { const obj = Object.create({ a: 1 }); return Object.values(obj).length === 0; })()).toBe(true)"
      },
      {
        description: 'Works with class instances',
        assertion: "expect((() => { class Point { constructor(x, y) { this.x = x; this.y = y; } } const p = new Point(3, 4); return Object.values(p).length === 2; })()).toBe(true)"
      },
      {
        description: 'Class methods not in values (non-enumerable)',
        assertion: "expect((() => { class C { constructor() { this.n = 1; } method() {} } const c = new C(); return Object.values(c).length === 1; })()).toBe(true)"
      },
    ],
    hints: ['Own properties only — prototype chain is ignored'],
    tags: ['Object', 'values', 'static-method', 'prototype'],
    usageExample: {
      code: `// Get array of own enumerable property values
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj)   // → [1, 2, 3]`,
      explanation: {
        en: "Use Object.values() to get an array of an object's own enumerable property values for easy iteration.",
        es: "Usa Object.values() para obtener un array con los valores de las propiedades enumerables propias de un objeto y iterarlos fácilmente.",
      },
    },
  },
  {
    slug: 'object-values-5',
    title: 'Object.values() — empty object',
    description: `## Object.values() — empty object

\`Object.values({})\` returns an empty array \`[]\`.

**Challenge:** Use \`Object.values()\` to check if an object has any own enumerable properties.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.values',
    initialCode: `function isEmpty(obj) {
  // Return true if the object has no own enumerable properties
}`,
    solution: `function isEmpty(obj) {
  return Object.values(obj).length === 0;
}`,
    tests: [
      {
        description: 'Empty object returns empty array',
        assertion: "expect(Object.values({})).toEqual([])"
      },
      {
        description: 'Object with properties returns non-empty array',
        assertion: "expect(Object.values({ a: 1 }).length > 0).toBe(true)"
      },
      {
        description: 'Can check emptiness via values',
        assertion: "expect(Object.values({}).length === 0).toBe(true)"
      },
      {
        description: 'Can extract all number values',
        assertion: "expect(Object.values({ a: 1, b: 2 }).every(v => typeof v === 'number')).toBe(true)"
      },
      {
        description: 'Object.values and Object.keys have same length',
        assertion: "expect(Object.values({a:1,b:2}).length === Object.keys({a:1,b:2}).length).toBe(true)"
      },
    ],
    hints: ['Object.values([]).length is 0 means the object is empty'],
    tags: ['Object', 'values', 'static-method', 'empty'],
    usageExample: {
      code: `// Get array of own enumerable property values
const obj = { a: 1, b: 2, c: 3 }
Object.values(obj)   // → [1, 2, 3]`,
      explanation: {
        en: "Use Object.values() to get an array of an object's own enumerable property values for easy iteration.",
        es: "Usa Object.values() para obtener un array con los valores de las propiedades enumerables propias de un objeto y iterarlos fácilmente.",
      },
    },
  },
]
