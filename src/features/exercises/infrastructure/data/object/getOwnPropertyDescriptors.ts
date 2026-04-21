import type { Exercise } from '@/shared/types/exercises'

export const getOwnPropertyDescriptorsExercises: Exercise[] = [
  {
    slug: 'object-get-own-prop-descriptors-basic',
    title: 'Object.getOwnPropertyDescriptors() — get all descriptors',
    description: `## Object.getOwnPropertyDescriptors()

\`Object.getOwnPropertyDescriptors(obj)\` returns an object mapping every own property to its full descriptor. Unlike \`Object.getOwnPropertyDescriptor\`, it covers all properties at once.

**Challenge:** Implement \`getAllDescriptors(obj)\` that returns the full descriptors map.

\`\`\`ts
getAllDescriptors({ a: 1 })
// → { a: { value: 1, writable: true, enumerable: true, configurable: true } }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptors',
    initialCode: `function getAllDescriptors(obj: object): Record<string, PropertyDescriptor> {
  // Return Object.getOwnPropertyDescriptors(obj)
}`,
    solution: `function getAllDescriptors(obj: object): Record<string, PropertyDescriptor> {
  return Object.getOwnPropertyDescriptors(obj)
}`,
    tests: [
      { description: 'descriptor map has key a', assertion:"expect(getAllDescriptors({ a: 1 })).toEqual({ a: { value: 1, writable: true, enumerable: true, configurable: true } })" },
      { description: 'empty object returns empty map', assertion:"expect(getAllDescriptors({})).toEqual({})" },
      { description: 'descriptor map has all own keys', assertion:"expect(Object.keys(getAllDescriptors({ x: 1, y: 2 }))).toHaveLength(2)" },
      { description: 'each descriptor has value key', assertion:"expect('value' in getAllDescriptors({ n: 5 }).n).toBe(true)" },
      { description: 'each descriptor has enumerable key', assertion:"expect('enumerable' in getAllDescriptors({ m: 3 }).m).toBe(true)" },
    ],
    hints: [
      '`Object.getOwnPropertyDescriptors` returns a map of `propertyName → descriptor`.',
      'Each descriptor includes `value, writable, enumerable, configurable` for data properties.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptors', 'descriptor', 'beginner'],
    usageExample: {
      code: `// Inspect all property descriptors at once
const obj = { a: 1, b: 2 }
Object.getOwnPropertyDescriptors(obj)
// → { a: { value: 1, writable: true, ... }, b: { value: 2, ... } }`,
      explanation: {
        en: 'Use Object.getOwnPropertyDescriptors() to get all property descriptors of an object, useful when doing a complete clone.',
        es: 'Usa Object.getOwnPropertyDescriptors() para obtener todos los descriptores de un objeto, útil al hacer una copia completa.',
      },
    },
  },
  {
    slug: 'object-get-own-prop-descriptors-flags',
    title: 'Object.getOwnPropertyDescriptors() — inspect all flags',
    description: `## Object.getOwnPropertyDescriptors() — checking every descriptor

You can use the result to inspect flags for every property at once.

**Challenge:** Implement \`allEnumerable(obj)\` that returns \`true\` if every own property is enumerable.

\`\`\`ts
allEnumerable({ a: 1, b: 2 }) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptors',
    initialCode: `function allEnumerable(obj: object): boolean {
  // Use getOwnPropertyDescriptors and check every descriptor has enumerable:true
}`,
    solution: `function allEnumerable(obj: object): boolean {
  return Object.values(Object.getOwnPropertyDescriptors(obj)).every(d => d.enumerable === true)
}`,
    tests: [
      { description: 'plain object returns true', assertion:"expect(allEnumerable({ a: 1, b: 2 })).toBe(true)" },
      { description: 'non-enumerable property returns false', assertion:"const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false, configurable: true }); expect(allEnumerable(o)).toBe(false)" },
      { description: 'empty object returns true', assertion:"expect(allEnumerable({})).toBe(true)" },
      { description: 'mix of enumerable/non-enumerable returns false', assertion:"const o: any = { a: 1 }; Object.defineProperty(o, 'h', { value: 2, enumerable: false, configurable: true }); expect(allEnumerable(o)).toBe(false)" },
      { description: 'single non-enumerable returns false', assertion:"const o: any = {}; Object.defineProperty(o, 'x', { value: 0, enumerable: false, configurable: true }); expect(allEnumerable(o)).toBe(false)" },
    ],
    hints: [
      'Use `Object.values(descriptors).every(d => d.enumerable === true)`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptors', 'enumerable', 'intermediate'],
    usageExample: {
      code: `// Inspect all property descriptors at once
const obj = { a: 1, b: 2 }
Object.getOwnPropertyDescriptors(obj)
// → { a: { value: 1, writable: true, ... }, b: { value: 2, ... } }`,
      explanation: {
        en: 'Use Object.getOwnPropertyDescriptors() to get all property descriptors of an object, useful when doing a complete clone.',
        es: 'Usa Object.getOwnPropertyDescriptors() para obtener todos los descriptores de un objeto, útil al hacer una copia completa.',
      },
    },
  },
  {
    slug: 'object-get-own-prop-descriptors-clone',
    title: 'Object.getOwnPropertyDescriptors() — clone with Object.create',
    description: `## Object.getOwnPropertyDescriptors() for cloning

\`Object.create(proto, Object.getOwnPropertyDescriptors(source))\` creates a precise clone preserving all descriptors.

**Challenge:** Implement \`preciseClone(obj)\` that uses \`Object.create\` and \`Object.getOwnPropertyDescriptors\` to clone \`obj\`.

\`\`\`ts
preciseClone({ a: 1 }) // → { a: 1 }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptors',
    initialCode: `function preciseClone<T extends object>(obj: T): T {
  // Use Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
}`,
    solution: `function preciseClone<T extends object>(obj: T): T {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
}`,
    tests: [
      { description: 'clone equals original', assertion:"expect(preciseClone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })" },
      { description: 'clone is a different reference', assertion:"const o = { x: 1 }; expect(preciseClone(o) === o).toBe(false)" },
      { description: 'preserves non-writable', assertion:"const o: any = {}; Object.defineProperty(o, 'x', { value: 1, writable: false, enumerable: true, configurable: true }); const c = preciseClone(o); expect(Object.getOwnPropertyDescriptor(c, 'x')?.writable).toBe(false)" },
      { description: 'prototype chain preserved', assertion:"const p = { greet: () => 'hi' }; const o = Object.create(p); o.name = 'X'; const c = preciseClone(o); expect(c.greet()).toBe('hi')" },
      { description: 'empty object clones to empty', assertion:"expect(preciseClone({})).toEqual({})" },
    ],
    hints: [
      '`Object.create(proto, descriptors)` sets both the prototype and all property descriptors at once.',
      'This technique clones getters, non-writable, non-enumerable properties — unlike `Object.assign`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptors', 'clone', 'intermediate'],
    usageExample: {
      code: `// Inspect all property descriptors at once
const obj = { a: 1, b: 2 }
Object.getOwnPropertyDescriptors(obj)
// → { a: { value: 1, writable: true, ... }, b: { value: 2, ... } }`,
      explanation: {
        en: 'Use Object.getOwnPropertyDescriptors() to get all property descriptors of an object, useful when doing a complete clone.',
        es: 'Usa Object.getOwnPropertyDescriptors() para obtener todos los descriptores de un objeto, útil al hacer una copia completa.',
      },
    },
  },
  {
    slug: 'object-get-own-prop-descriptors-non-enumerable',
    title: 'Object.getOwnPropertyDescriptors() — includes non-enumerable',
    description: `## Object.getOwnPropertyDescriptors() — non-enumerable included

Unlike \`Object.keys\` or \`Object.entries\`, \`getOwnPropertyDescriptors\` includes **non-enumerable** properties.

**Challenge:** Implement \`countAllDescriptors(obj)\` that returns the total number of own properties (including non-enumerable).

\`\`\`ts
// obj has 1 enumerable + 1 non-enumerable
countAllDescriptors(obj) // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptors',
    initialCode: `function countAllDescriptors(obj: object): number {
  // Use getOwnPropertyDescriptors and return its key count
}`,
    solution: `function countAllDescriptors(obj: object): number {
  return Object.keys(Object.getOwnPropertyDescriptors(obj)).length
}`,
    tests: [
      { description: 'counts enumerable + non-enumerable', assertion:"const o: any = { a: 1 }; Object.defineProperty(o, 'h', { value: 2, enumerable: false, configurable: true }); expect(countAllDescriptors(o)).toBe(2)" },
      { description: 'plain object counts enumerable only', assertion:"expect(countAllDescriptors({ a: 1, b: 2 })).toBe(2)" },
      { description: 'empty object returns 0', assertion:"expect(countAllDescriptors({})).toBe(0)" },
      { description: 'vs Object.keys which excludes non-enumerable', assertion:"const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false, configurable: true }); expect(Object.keys(o)).toHaveLength(0)" },
      { description: 'single non-enumerable counted', assertion:"const o: any = {}; Object.defineProperty(o, 'x', { value: 9, enumerable: false, configurable: true }); expect(countAllDescriptors(o)).toBe(1)" },
    ],
    hints: [
      '`Object.keys(Object.getOwnPropertyDescriptors(obj))` gives all own property names including non-enumerable.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptors', 'non-enumerable', 'intermediate'],
    usageExample: {
      code: `// Inspect all property descriptors at once
const obj = { a: 1, b: 2 }
Object.getOwnPropertyDescriptors(obj)
// → { a: { value: 1, writable: true, ... }, b: { value: 2, ... } }`,
      explanation: {
        en: 'Use Object.getOwnPropertyDescriptors() to get all property descriptors of an object, useful when doing a complete clone.',
        es: 'Usa Object.getOwnPropertyDescriptors() para obtener todos los descriptores de un objeto, útil al hacer una copia completa.',
      },
    },
  },
  {
    slug: 'object-get-own-prop-descriptors-symbols-excluded',
    title: 'Object.getOwnPropertyDescriptors() — Symbol properties separate',
    description: `## Object.getOwnPropertyDescriptors() — no Symbols

\`Object.getOwnPropertyDescriptors\` returns only **string-keyed** own properties. Symbol-keyed properties are excluded (use \`Object.getOwnPropertySymbols\` for those).

**Challenge:** Implement \`hasNoSymbol(obj)\` that returns \`true\` if the descriptors map does not include Symbol keys.

\`\`\`ts
const s = Symbol('test')
hasNoSymbol({ [s]: 1 }) // → true (Symbol not in descriptors)
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptors',
    initialCode: `function hasNoSymbol(obj: object): boolean {
  // Return true if getOwnPropertyDescriptors has no Symbol keys
}`,
    solution: `function hasNoSymbol(obj: object): boolean {
  const descriptors = Object.getOwnPropertyDescriptors(obj)
  return Object.getOwnPropertySymbols(descriptors).length === 0
}`,
    tests: [
      { description: 'symbol-only object returns true', assertion:"const s = Symbol('x'); expect(hasNoSymbol({ [s]: 1 })).toBe(true)" },
      { description: 'plain object also returns true', assertion:"expect(hasNoSymbol({ a: 1 })).toBe(true)" },
      { description: 'symbol not in descriptor keys', assertion:"const s = Symbol('s'); const o = { [s]: 99 }; expect(Object.keys(Object.getOwnPropertyDescriptors(o))).toHaveLength(0)" },
      { description: 'string keys are in descriptors', assertion:"const o = { a: 1 }; expect(Object.keys(Object.getOwnPropertyDescriptors(o))).toContain('a')" },
      { description: 'use getOwnPropertySymbols for symbols', assertion:"const s = Symbol('t'); const o = { [s]: 1 }; expect(Object.getOwnPropertySymbols(o)).toHaveLength(1)" },
    ],
    hints: [
      '`Object.getOwnPropertyDescriptors` only returns string-keyed properties.',
      'To get Symbol-keyed property descriptors, use `Object.getOwnPropertySymbols` combined with `Object.getOwnPropertyDescriptor`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptors', 'symbol', 'intermediate'],
    usageExample: {
      code: `// Inspect all property descriptors at once
const obj = { a: 1, b: 2 }
Object.getOwnPropertyDescriptors(obj)
// → { a: { value: 1, writable: true, ... }, b: { value: 2, ... } }`,
      explanation: {
        en: 'Use Object.getOwnPropertyDescriptors() to get all property descriptors of an object, useful when doing a complete clone.',
        es: 'Usa Object.getOwnPropertyDescriptors() para obtener todos los descriptores de un objeto, útil al hacer una copia completa.',
      },
    },
  },
]
