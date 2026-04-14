import type { Exercise } from '@/shared/types/exercises'

export const getOwnPropertyNamesExercises: Exercise[] = [
  {
    slug: 'object-get-own-prop-names-basic',
    title: 'Object.getOwnPropertyNames() — all own string keys',
    description: `## Object.getOwnPropertyNames()

\`Object.getOwnPropertyNames(obj)\` returns an array of **all** own string-keyed property names, including non-enumerable ones. Unlike \`Object.keys\`, it does not filter out non-enumerable properties.

**Challenge:** Implement \`getAllNames(obj)\` that returns all own property names.

\`\`\`ts
getAllNames({ a: 1, b: 2 }) // → ['a', 'b']
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyNames',
    initialCode: `function getAllNames(obj: object): string[] {
  // Use Object.getOwnPropertyNames to get all own string keys
}`,
    solution: `function getAllNames(obj: object): string[] {
  return Object.getOwnPropertyNames(obj)
}`,
    tests: [
      { description: 'returns all own names', assertion: "expect(getAllNames({ a: 1, b: 2 })).toEqual(['a', 'b'])" },
      { description: 'empty object returns []', assertion: "expect(getAllNames({})).toEqual([])" },
      { description: 'includes non-enumerable', assertion: "const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false }); expect(getAllNames(o)).toContain('h')" },
      { description: 'result is an array', assertion: "expect(Array.isArray(getAllNames({ x: 1 }))).toBe(true)" },
      { description: 'correct length', assertion: "expect(getAllNames({ a: 1, b: 2, c: 3 })).toHaveLength(3)" },
    ],
    hints: [
      '`Object.getOwnPropertyNames` is like `Object.keys` but also includes non-enumerable properties.',
    ],
    tags: ['Object', 'Object.getOwnPropertyNames', 'beginner'],
  },
  {
    slug: 'object-get-own-prop-names-vs-keys',
    title: 'Object.getOwnPropertyNames() — vs Object.keys',
    description: `## Object.getOwnPropertyNames() vs Object.keys

\`Object.keys\` returns only enumerable properties. \`Object.getOwnPropertyNames\` returns all own string-keyed properties regardless of enumerability.

**Challenge:** Implement \`extraNames(obj)\` that returns property names that are in \`getOwnPropertyNames\` but NOT in \`Object.keys\` (i.e. non-enumerable names).

\`\`\`ts
// obj has 'a' (enumerable) and '_h' (non-enumerable)
extraNames(obj) // → ['_h']
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyNames',
    initialCode: `function extraNames(obj: object): string[] {
  // Return names in getOwnPropertyNames but not in Object.keys
}`,
    solution: `function extraNames(obj: object): string[] {
  const keys = new Set(Object.keys(obj))
  return Object.getOwnPropertyNames(obj).filter(n => !keys.has(n))
}`,
    tests: [
      { description: 'returns non-enumerable names', assertion: "const o: any = { a: 1 }; Object.defineProperty(o, '_h', { value: 2, enumerable: false, configurable: true }); expect(extraNames(o)).toEqual(['_h'])" },
      { description: 'empty when all are enumerable', assertion: "expect(extraNames({ a: 1, b: 2 })).toEqual([])" },
      { description: 'empty object returns []', assertion: "expect(extraNames({})).toEqual([])" },
      { description: 'multiple non-enumerable', assertion: "const o: any = {}; Object.defineProperty(o, 'x', { value: 1, enumerable: false, configurable: true }); Object.defineProperty(o, 'y', { value: 2, enumerable: false, configurable: true }); expect(extraNames(o)).toHaveLength(2)" },
      { description: 'does not include inherited', assertion: "const p = { inherited: 1 }; const o = Object.create(p); expect(extraNames(o)).toHaveLength(0)" },
    ],
    hints: [
      'Filter `getOwnPropertyNames` result by removing items that also appear in `Object.keys`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyNames', 'Object.keys', 'intermediate'],
  },
  {
    slug: 'object-get-own-prop-names-empty',
    title: 'Object.getOwnPropertyNames() — empty object',
    description: `## Object.getOwnPropertyNames() on empty objects

Calling \`Object.getOwnPropertyNames\` on \`{}\` returns an empty array because there are no own properties.

**Challenge:** Implement \`isEmptyObject(obj)\` that returns \`true\` if \`Object.getOwnPropertyNames(obj)\` has length 0.

\`\`\`ts
isEmptyObject({})         // → true
isEmptyObject({ a: 1 })  // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyNames',
    initialCode: `function isEmptyObject(obj: object): boolean {
  // Return true if getOwnPropertyNames returns an empty array
}`,
    solution: `function isEmptyObject(obj: object): boolean {
  return Object.getOwnPropertyNames(obj).length === 0
}`,
    tests: [
      { description: 'empty object returns true', assertion: "expect(isEmptyObject({})).toBe(true)" },
      { description: 'non-empty object returns false', assertion: "expect(isEmptyObject({ a: 1 })).toBe(false)" },
      { description: 'non-enumerable property still makes it non-empty', assertion: "const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false }); expect(isEmptyObject(o)).toBe(false)" },
      { description: 'null-prototype empty object is empty', assertion: "expect(isEmptyObject(Object.create(null))).toBe(true)" },
      { description: 'object with only symbol keys returns true', assertion: "const s = Symbol('k'); const o: any = { [s]: 1 }; expect(isEmptyObject(o)).toBe(true)" },
    ],
    hints: [
      'Symbols are NOT returned by `getOwnPropertyNames` — use `getOwnPropertySymbols` for those.',
    ],
    tags: ['Object', 'Object.getOwnPropertyNames', 'beginner'],
  },
  {
    slug: 'object-get-own-prop-names-array-like',
    title: 'Object.getOwnPropertyNames() — array-like includes length',
    description: `## Object.getOwnPropertyNames() on arrays

Arrays have a non-enumerable \`length\` property. \`Object.getOwnPropertyNames\` includes it, while \`Object.keys\` does not.

**Challenge:** Implement \`namesIncludeLength(arr)\` that returns whether \`Object.getOwnPropertyNames\` of \`arr\` includes \`'length'\`.

\`\`\`ts
namesIncludeLength([1, 2, 3]) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyNames',
    initialCode: `function namesIncludeLength(arr: unknown[]): boolean {
  // Return true if 'length' is in Object.getOwnPropertyNames(arr)
}`,
    solution: `function namesIncludeLength(arr: unknown[]): boolean {
  return Object.getOwnPropertyNames(arr).includes('length')
}`,
    tests: [
      { description: 'array has length in names', assertion: "expect(namesIncludeLength([1, 2, 3])).toBe(true)" },
      { description: 'empty array also has length', assertion: "expect(namesIncludeLength([])).toBe(true)" },
      { description: 'Object.keys does not include length', assertion: "expect(Object.keys([1, 2])).not.toContain('length')" },
      { description: 'length descriptor is non-enumerable', assertion: "expect(Object.getOwnPropertyDescriptor([1, 2], 'length')?.enumerable).toBe(false)" },
      { description: 'array indices are also in names', assertion: "expect(Object.getOwnPropertyNames([10, 20])).toContain('0')" },
    ],
    hints: [
      "`Array.prototype.length` is a non-enumerable own property of every array.",
      'It appears in `getOwnPropertyNames` but not in `Object.keys`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyNames', 'array', 'intermediate'],
  },
  {
    slug: 'object-get-own-prop-names-no-inherited',
    title: 'Object.getOwnPropertyNames() — inherited not included',
    description: `## Object.getOwnPropertyNames() — own only

Inherited properties are NOT returned by \`Object.getOwnPropertyNames\`, even though they appear in \`for...in\` and with the \`in\` operator.

**Challenge:** Implement \`ownNamesOnly(obj)\` that returns the own property names and confirms they exclude inherited ones.

\`\`\`ts
const proto = { inherited: 1 }
const obj = Object.create(proto)
obj.own = 2
ownNamesOnly(obj) // → ['own']
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyNames',
    initialCode: `function ownNamesOnly(obj: object): string[] {
  // Return Object.getOwnPropertyNames(obj)
}`,
    solution: `function ownNamesOnly(obj: object): string[] {
  return Object.getOwnPropertyNames(obj)
}`,
    tests: [
      { description: 'excludes inherited property', assertion: "const p = { inherited: 1 }; const o = Object.create(p) as any; o.own = 2; expect(ownNamesOnly(o)).toEqual(['own'])" },
      { description: 'inherited key accessible via in', assertion: "const p = { x: 1 }; const o = Object.create(p); expect('x' in o).toBe(true)" },
      { description: 'inherited key not in getOwnPropertyNames', assertion: "const p = { x: 1 }; const o = Object.create(p); expect(ownNamesOnly(o)).toHaveLength(0)" },
      { description: 'own properties are included', assertion: "const o = { a: 1, b: 2 }; expect(ownNamesOnly(o)).toHaveLength(2)" },
      { description: 'toString not in getOwnPropertyNames for plain obj', assertion: "expect(ownNamesOnly({})).toHaveLength(0)" },
    ],
    hints: [
      '`Object.getOwnPropertyNames` does not traverse the prototype chain.',
    ],
    tags: ['Object', 'Object.getOwnPropertyNames', 'prototype', 'beginner'],
  },
]
