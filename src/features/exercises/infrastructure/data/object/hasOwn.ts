import type { Exercise } from '@/shared/types/exercises'

export const hasOwnExercises: Exercise[] = [
  {
    slug: 'object-has-own-basic',
    title: 'Object.hasOwn() — own property returns true',
    description: `## Object.hasOwn() (ES2022)

\`Object.hasOwn(obj, key)\` returns \`true\` if \`obj\` has an own property named \`key\`. It is a safer replacement for \`Object.prototype.hasOwnProperty.call\`.

**Challenge:** Implement \`checkOwn(obj, key)\` that uses \`Object.hasOwn\` to check for an own property.

\`\`\`ts
checkOwn({ a: 1 }, 'a') // → true
checkOwn({ a: 1 }, 'b') // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.hasOwn',
    initialCode: `function checkOwn(obj: object, key: string): boolean {
  // Use Object.hasOwn to check for the own property
}`,
    solution: `function checkOwn(obj: object, key: string): boolean {
  return Object.hasOwn(obj, key)
}`,
    tests: [
      { description: 'existing own property returns true', assertion:"expect(checkOwn({ a: 1 }, 'a')).toBe(true)" },
      { description: 'missing property returns false', assertion:"expect(checkOwn({ a: 1 }, 'b')).toBe(false)" },
      { description: 'empty object returns false', assertion:"expect(checkOwn({}, 'x')).toBe(false)" },
      { description: 'multiple own keys', assertion:"expect(checkOwn({ x: 1, y: 2 }, 'y')).toBe(true)" },
      { description: 'value does not matter', assertion:"expect(checkOwn({ n: undefined }, 'n')).toBe(true)" },
    ],
    hints: [
      '`Object.hasOwn(obj, key)` is equivalent to `Object.prototype.hasOwnProperty.call(obj, key)` but cleaner.',
    ],
    tags: ['Object', 'Object.hasOwn', 'ES2022', 'beginner'],
    usageExample: {
      code: `// Check if a property is directly on the object
const obj = { name: 'Alice' }
Object.hasOwn(obj, 'name')      // → true
Object.hasOwn(obj, 'toString')  // → false`,
      explanation: {
        en: 'Use Object.hasOwn() to reliably check if a property is an own property, without being fooled by inherited properties.',
        es: 'Usa Object.hasOwn() para verificar de forma fiable si una propiedad es propia, sin confundirla con propiedades heredadas.',
      },
    },
  },
  {
    slug: 'object-has-own-missing',
    title: 'Object.hasOwn() — missing property returns false',
    description: `## Object.hasOwn() — missing property

\`Object.hasOwn\` returns \`false\` for properties that do not exist on the object at all.

**Challenge:** Implement \`isMissing(obj, key)\` that returns \`true\` when the property does NOT exist as an own property.

\`\`\`ts
isMissing({ a: 1 }, 'b') // → true
isMissing({ a: 1 }, 'a') // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.hasOwn',
    initialCode: `function isMissing(obj: object, key: string): boolean {
  // Return true if the key is NOT an own property
}`,
    solution: `function isMissing(obj: object, key: string): boolean {
  return !Object.hasOwn(obj, key)
}`,
    tests: [
      { description: 'non-existent key returns true', assertion:"expect(isMissing({ a: 1 }, 'b')).toBe(true)" },
      { description: 'existing key returns false', assertion:"expect(isMissing({ a: 1 }, 'a')).toBe(false)" },
      { description: 'empty object always missing', assertion:"expect(isMissing({}, 'anything')).toBe(true)" },
      { description: 'inherited key treated as missing by hasOwn', assertion:"const p = { x: 1 }; const o = Object.create(p); expect(isMissing(o, 'x')).toBe(true)" },
      { description: 'own property with undefined value is not missing', assertion:"expect(isMissing({ k: undefined }, 'k')).toBe(false)" },
    ],
    hints: [
      'Negate `Object.hasOwn` to check for absence.',
    ],
    tags: ['Object', 'Object.hasOwn', 'ES2022', 'beginner'],
    usageExample: {
      code: `// Check if a property is directly on the object
const obj = { name: 'Alice' }
Object.hasOwn(obj, 'name')      // → true
Object.hasOwn(obj, 'toString')  // → false`,
      explanation: {
        en: 'Use Object.hasOwn() to reliably check if a property is an own property, without being fooled by inherited properties.',
        es: 'Usa Object.hasOwn() para verificar de forma fiable si una propiedad es propia, sin confundirla con propiedades heredadas.',
      },
    },
  },
  {
    slug: 'object-has-own-inherited-false',
    title: 'Object.hasOwn() — inherited property returns false',
    description: `## Object.hasOwn() — own vs inherited

The \`in\` operator finds inherited properties, but \`Object.hasOwn\` does not — it is strictly limited to **own** properties.

**Challenge:** Implement \`ownVsInherited(proto, obj, key)\` that returns an object with \`ownResult\` (from \`Object.hasOwn\`) and \`inResult\` (from \`key in obj\`).

\`\`\`ts
const proto = { x: 1 }
const obj = Object.create(proto)
ownVsInherited(proto, obj, 'x')
// → { ownResult: false, inResult: true }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.hasOwn',
    initialCode: `function ownVsInherited(proto: object, obj: object, key: string): { ownResult: boolean; inResult: boolean } {
  // Return both Object.hasOwn and in-operator results
}`,
    solution: `function ownVsInherited(proto: object, obj: object, key: string): { ownResult: boolean; inResult: boolean } {
  return { ownResult: Object.hasOwn(obj, key), inResult: key in obj }
}`,
    tests: [
      { description: 'inherited key: hasOwn false, in true', assertion:"const p = { x: 1 }; const o = Object.create(p); expect(ownVsInherited(p, o, 'x')).toEqual({ ownResult: false, inResult: true })" },
      { description: 'own key: hasOwn true, in true', assertion:"const p = {}; const o = Object.create(p); o.y = 2; expect(ownVsInherited(p, o, 'y')).toEqual({ ownResult: true, inResult: true })" },
      { description: 'missing key: both false', assertion:"expect(ownVsInherited({}, {}, 'z')).toEqual({ ownResult: false, inResult: false })" },
      { description: 'toString is inherited by plain object', assertion:"expect(Object.hasOwn({}, 'toString')).toBe(false)" },
      { description: 'toString accessible via in', assertion:"expect('toString' in {}).toBe(true)" },
    ],
    hints: [
      '`in` traverses the prototype chain; `Object.hasOwn` does not.',
    ],
    tags: ['Object', 'Object.hasOwn', 'in operator', 'prototype', 'intermediate'],
    usageExample: {
      code: `// Check if a property is directly on the object
const obj = { name: 'Alice' }
Object.hasOwn(obj, 'name')      // → true
Object.hasOwn(obj, 'toString')  // → false`,
      explanation: {
        en: 'Use Object.hasOwn() to reliably check if a property is an own property, without being fooled by inherited properties.',
        es: 'Usa Object.hasOwn() para verificar de forma fiable si una propiedad es propia, sin confundirla con propiedades heredadas.',
      },
    },
  },
  {
    slug: 'object-has-own-vs-has-own-property',
    title: 'Object.hasOwn() — vs hasOwnProperty',
    description: `## Object.hasOwn() — safer than hasOwnProperty

\`Object.prototype.hasOwnProperty\` can fail if the object has a property named \`hasOwnProperty\` or has no prototype. \`Object.hasOwn\` is always safe.

**Challenge:** Implement \`safeCheck(obj, key)\` that uses \`Object.hasOwn\` (not \`hasOwnProperty\`) to check ownership.

\`\`\`ts
safeCheck({ a: 1 }, 'a') // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.hasOwn',
    initialCode: `function safeCheck(obj: object, key: string): boolean {
  // Use Object.hasOwn — never obj.hasOwnProperty
}`,
    solution: `function safeCheck(obj: object, key: string): boolean {
  return Object.hasOwn(obj, key)
}`,
    tests: [
      { description: 'own property returns true', assertion:"expect(safeCheck({ a: 1 }, 'a')).toBe(true)" },
      { description: 'missing property returns false', assertion:"expect(safeCheck({ a: 1 }, 'z')).toBe(false)" },
      { description: 'works on null-prototype object', assertion:"const o = Object.create(null); o.key = 'val'; expect(safeCheck(o, 'key')).toBe(true)" },
      { description: 'works when hasOwnProperty is overridden', assertion:"const o: any = { hasOwnProperty: () => false, a: 1 }; expect(safeCheck(o, 'a')).toBe(true)" },
      { description: 'inherited key is false', assertion:"const p = { x: 1 }; const o = Object.create(p); expect(safeCheck(o, 'x')).toBe(false)" },
    ],
    hints: [
      '`Object.hasOwn` works even on objects with no prototype (`Object.create(null)`) or with a shadowed `hasOwnProperty`.',
    ],
    tags: ['Object', 'Object.hasOwn', 'hasOwnProperty', 'ES2022', 'intermediate'],
    usageExample: {
      code: `// Check if a property is directly on the object
const obj = { name: 'Alice' }
Object.hasOwn(obj, 'name')      // → true
Object.hasOwn(obj, 'toString')  // → false`,
      explanation: {
        en: 'Use Object.hasOwn() to reliably check if a property is an own property, without being fooled by inherited properties.',
        es: 'Usa Object.hasOwn() para verificar de forma fiable si una propiedad es propia, sin confundirla con propiedades heredadas.',
      },
    },
  },
  {
    slug: 'object-has-own-null-prototype',
    title: 'Object.hasOwn() — works on null-prototype objects',
    description: `## Object.hasOwn() — null prototype objects

\`obj.hasOwnProperty\` throws on null-prototype objects because they don't inherit it. \`Object.hasOwn\` works safely on them.

**Challenge:** Implement \`checkNullProto(key, val)\` that creates a null-prototype object with the given \`key/val\`, then uses \`Object.hasOwn\` to check for that key.

\`\`\`ts
checkNullProto('id', 42) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.hasOwn',
    initialCode: `function checkNullProto(key: string, val: unknown): boolean {
  // Create Object.create(null), assign key, then use Object.hasOwn
}`,
    solution: `function checkNullProto(key: string, val: unknown): boolean {
  const obj = Object.create(null) as Record<string, unknown>
  obj[key] = val
  return Object.hasOwn(obj, key)
}`,
    tests: [
      { description: 'own key on null-proto returns true', assertion:"expect(checkNullProto('id', 42)).toBe(true)" },
      { description: 'missing key returns false', assertion:"const o = Object.create(null); expect(Object.hasOwn(o, 'missing')).toBe(false)" },
      { description: 'null-proto has no hasOwnProperty method', assertion:"const o = Object.create(null); expect(o.hasOwnProperty).toBeUndefined()" },
      { description: 'Object.hasOwn still works', assertion:"const o = Object.create(null); o.x = 1; expect(Object.hasOwn(o, 'x')).toBe(true)" },
      { description: 'different key returns false', assertion:"expect(checkNullProto('a', 1) && !Object.hasOwn(Object.create(null), 'b')).toBe(true)" },
    ],
    hints: [
      '`Object.hasOwn` is a static method and never relies on the object\'s own `hasOwnProperty`.',
    ],
    tags: ['Object', 'Object.hasOwn', 'null prototype', 'ES2022', 'intermediate'],
    usageExample: {
      code: `// Check if a property is directly on the object
const obj = { name: 'Alice' }
Object.hasOwn(obj, 'name')      // → true
Object.hasOwn(obj, 'toString')  // → false`,
      explanation: {
        en: 'Use Object.hasOwn() to reliably check if a property is an own property, without being fooled by inherited properties.',
        es: 'Usa Object.hasOwn() para verificar de forma fiable si una propiedad es propia, sin confundirla con propiedades heredadas.',
      },
    },
  },
]
