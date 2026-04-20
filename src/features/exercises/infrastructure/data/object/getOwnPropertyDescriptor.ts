import type { Exercise } from '@/shared/types/exercises'

export const getOwnPropertyDescriptorExercises: Exercise[] = [
  {
    slug: 'object-get-own-prop-descriptor-basic',
    title: 'Object.getOwnPropertyDescriptor() — basic descriptor',
    description: `## Object.getOwnPropertyDescriptor()

\`Object.getOwnPropertyDescriptor(obj, key)\` returns the full descriptor object for an own property: \`{ value, writable, enumerable, configurable }\`.

**Challenge:** Implement \`getDescriptor(obj, key)\` that returns the descriptor for the given key.

\`\`\`ts
getDescriptor({ x: 1 }, 'x')
// → { value: 1, writable: true, enumerable: true, configurable: true }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptor',
    initialCode: `function getDescriptor(obj: object, key: string): PropertyDescriptor | undefined {
  // Return Object.getOwnPropertyDescriptor(obj, key)
}`,
    solution: `function getDescriptor(obj: object, key: string): PropertyDescriptor | undefined {
  return Object.getOwnPropertyDescriptor(obj, key)
}`,
    tests: [
      { description: 'returns descriptor with value', assertion:"expect(getDescriptor({ x: 1 }, 'x')?.value).toBe(1)" },
      { description: 'normal property has writable:true', assertion:"expect(getDescriptor({ x: 1 }, 'x')?.writable).toBe(true)" },
      { description: 'normal property has enumerable:true', assertion:"expect(getDescriptor({ x: 1 }, 'x')?.enumerable).toBe(true)" },
      { description: 'normal property has configurable:true', assertion:"expect(getDescriptor({ x: 1 }, 'x')?.configurable).toBe(true)" },
      { description: 'returns undefined for missing key', assertion:"expect(getDescriptor({ x: 1 }, 'missing')).toBeUndefined()" },
    ],
    hints: [
      'A plain property defined with `= ` has `writable:true, enumerable:true, configurable:true`.',
      'Returns `undefined` if the key does not exist as an own property.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptor', 'descriptor', 'beginner'],
  },
  {
    slug: 'object-get-own-prop-descriptor-missing',
    title: 'Object.getOwnPropertyDescriptor() — undefined for missing',
    description: `## Object.getOwnPropertyDescriptor() — missing property

If the key does not exist on the object (or is inherited), \`Object.getOwnPropertyDescriptor\` returns \`undefined\`.

**Challenge:** Implement \`hasDescriptor(obj, key)\` that returns \`true\` if the descriptor exists, \`false\` otherwise.

\`\`\`ts
hasDescriptor({ a: 1 }, 'a')    // → true
hasDescriptor({ a: 1 }, 'b')    // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptor',
    initialCode: `function hasDescriptor(obj: object, key: string): boolean {
  // Return true if getOwnPropertyDescriptor returns a defined value
}`,
    solution: `function hasDescriptor(obj: object, key: string): boolean {
  return Object.getOwnPropertyDescriptor(obj, key) !== undefined
}`,
    tests: [
      { description: 'existing own key returns true', assertion:"expect(hasDescriptor({ a: 1 }, 'a')).toBe(true)" },
      { description: 'missing key returns false', assertion:"expect(hasDescriptor({ a: 1 }, 'b')).toBe(false)" },
      { description: 'inherited key returns false', assertion:"const p = { x: 1 }; const o = Object.create(p); expect(hasDescriptor(o, 'x')).toBe(false)" },
      { description: 'empty object returns false', assertion:"expect(hasDescriptor({}, 'any')).toBe(false)" },
      { description: 'non-enumerable own key returns true', assertion:"const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false }); expect(hasDescriptor(o, 'h')).toBe(true)" },
    ],
    hints: [
      '`getOwnPropertyDescriptor` returns `undefined` for missing **or inherited** properties.',
      'Check `!== undefined` or use optional chaining.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptor', 'beginner'],
  },
  {
    slug: 'object-get-own-prop-descriptor-getter',
    title: 'Object.getOwnPropertyDescriptor() — getter descriptor',
    description: `## Object.getOwnPropertyDescriptor() — accessor descriptor

For properties defined with a getter, the descriptor contains a \`get\` function instead of \`value\` and \`writable\`.

**Challenge:** Implement \`isGetter(obj, key)\` that returns \`true\` if the descriptor for \`key\` has a \`get\` function.

\`\`\`ts
const o = {}
Object.defineProperty(o, 'x', { get: () => 1 })
isGetter(o, 'x') // → true
isGetter(o, 'y') // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptor',
    initialCode: `function isGetter(obj: object, key: string): boolean {
  // Return true if the descriptor has a 'get' function
}`,
    solution: `function isGetter(obj: object, key: string): boolean {
  const desc = Object.getOwnPropertyDescriptor(obj, key)
  return typeof desc?.get === 'function'
}`,
    tests: [
      { description: 'returns true for getter property', assertion:"const o: any = {}; Object.defineProperty(o, 'x', { get: () => 1, configurable: true }); expect(isGetter(o, 'x')).toBe(true)" },
      { description: 'returns false for value property', assertion:"expect(isGetter({ a: 1 }, 'a')).toBe(false)" },
      { description: 'returns false for missing key', assertion:"expect(isGetter({}, 'missing')).toBe(false)" },
      { description: 'getter descriptor has no value', assertion:"const o: any = {}; Object.defineProperty(o, 'g', { get: () => 42, configurable: true }); expect(Object.getOwnPropertyDescriptor(o, 'g')?.value).toBeUndefined()" },
      { description: 'getter is callable', assertion:"const o: any = {}; Object.defineProperty(o, 'p', { get: () => 7, configurable: true }); expect(typeof Object.getOwnPropertyDescriptor(o, 'p')?.get).toBe('function')" },
    ],
    hints: [
      'Accessor descriptors have `get` and/or `set`. Data descriptors have `value` and `writable`.',
      'Use `typeof desc?.get === "function"` to check.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptor', 'getter', 'intermediate'],
  },
  {
    slug: 'object-get-own-prop-descriptor-inherited',
    title: 'Object.getOwnPropertyDescriptor() — inherited returns undefined',
    description: `## Object.getOwnPropertyDescriptor() — own only

The method only looks at **own** properties. Inherited properties return \`undefined\` even if accessible via the prototype chain.

**Challenge:** Implement \`inheritedIsUndefined()\` that creates an object with a prototype that has \`protoKey\`, checks that \`getOwnPropertyDescriptor\` returns \`undefined\` for it, and returns that result.

\`\`\`ts
inheritedIsUndefined() // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptor',
    initialCode: `function inheritedIsUndefined(): boolean {
  // Create proto with 'protoKey', create obj inheriting from proto
  // Return true if getOwnPropertyDescriptor(obj, 'protoKey') === undefined
}`,
    solution: `function inheritedIsUndefined(): boolean {
  const proto = { protoKey: 'inherited' }
  const obj = Object.create(proto)
  return Object.getOwnPropertyDescriptor(obj, 'protoKey') === undefined
}`,
    tests: [
      { description: 'returns true (inherited key has no own descriptor)', assertion:"expect(inheritedIsUndefined()).toBe(true)" },
      { description: 'inherited key is accessible via in operator', assertion:"const p = { k: 1 }; const o = Object.create(p); expect('k' in o).toBe(true)" },
      { description: 'own key does have a descriptor', assertion:"const o: any = { x: 1 }; expect(Object.getOwnPropertyDescriptor(o, 'x') !== undefined).toBe(true)" },
      { description: 'toString is inherited, not own', assertion:"expect(Object.getOwnPropertyDescriptor({}, 'toString')).toBeUndefined()" },
      { description: 'own property overrides inherited descriptor', assertion:"const p = { x: 1 }; const o = Object.create(p); o.x = 2; expect(Object.getOwnPropertyDescriptor(o, 'x')?.value).toBe(2)" },
    ],
    hints: [
      '`getOwnPropertyDescriptor` strictly checks own properties — the prototype chain is ignored.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptor', 'prototype', 'intermediate'],
  },
  {
    slug: 'object-get-own-prop-descriptor-flags',
    title: 'Object.getOwnPropertyDescriptor() — check specific flags',
    description: `## Object.getOwnPropertyDescriptor() — inspecting flags

You can use the returned descriptor to check individual flags like \`enumerable\` and \`configurable\`.

**Challenge:** Implement \`isEnumerable(obj, key)\` that returns whether the own property \`key\` is enumerable.

\`\`\`ts
isEnumerable({ a: 1 }, 'a')  // → true (normal property)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.getOwnPropertyDescriptor',
    initialCode: `function isEnumerable(obj: object, key: string): boolean {
  // Return the enumerable flag from the descriptor, or false if no descriptor
}`,
    solution: `function isEnumerable(obj: object, key: string): boolean {
  return Object.getOwnPropertyDescriptor(obj, key)?.enumerable === true
}`,
    tests: [
      { description: 'normal property is enumerable', assertion:"expect(isEnumerable({ a: 1 }, 'a')).toBe(true)" },
      { description: 'non-enumerable property returns false', assertion:"const o: any = {}; Object.defineProperty(o, 'h', { value: 1, enumerable: false, configurable: true }); expect(isEnumerable(o, 'h')).toBe(false)" },
      { description: 'missing key returns false', assertion:"expect(isEnumerable({}, 'x')).toBe(false)" },
      { description: 'defineProperty with enumerable true', assertion:"const o: any = {}; Object.defineProperty(o, 'v', { value: 1, enumerable: true, writable: true, configurable: true }); expect(isEnumerable(o, 'v')).toBe(true)" },
      { description: 'inherited property returns false', assertion:"const p = { x: 1 }; const o = Object.create(p); expect(isEnumerable(o, 'x')).toBe(false)" },
    ],
    hints: [
      'Use optional chaining: `descriptor?.enumerable === true`.',
      'If the property does not exist, `undefined === true` is `false`.',
    ],
    tags: ['Object', 'Object.getOwnPropertyDescriptor', 'enumerable', 'beginner'],
  },
]
