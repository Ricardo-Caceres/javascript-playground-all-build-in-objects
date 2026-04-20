import type { Exercise } from '@/shared/types/exercises'

export const createExercises: Exercise[] = [
  {
    slug: 'object-create-basic',
    title: 'Object.create() — create with prototype',
    description: `## Object.create()

\`Object.create(proto)\` creates a new object whose prototype is set to \`proto\`. This is a way to set up prototype-based inheritance without using classes.

**Challenge:** Implement \`createWithProto(proto)\` that returns a new object with \`proto\` as its prototype.

\`\`\`ts
const animal = { speak() { return 'sound' } }
const dog = createWithProto(animal)
Object.getPrototypeOf(dog) === animal // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.create',
    initialCode: `function createWithProto(proto: object): object {
  // Use Object.create to set proto as the prototype of the new object
}`,
    solution: `function createWithProto(proto: object): object {
  return Object.create(proto)
}`,
    tests: [
      { description: 'prototype is set correctly', assertion:"const p = { x: 1 }; expect(Object.getPrototypeOf(createWithProto(p)) === p).toBe(true)" },
      { description: 'new object has no own keys', assertion:"const p = { x: 1 }; expect(Object.keys(createWithProto(p))).toHaveLength(0)" },
      { description: 'can access inherited property', assertion:"const p = { greet: () => 'hi' }; const o = createWithProto(p); expect(o.greet()).toBe('hi')" },
      { description: 'own property shadows inherited', assertion:"const p = { val: 1 }; const o = createWithProto(p); o.val = 99; expect(o.val).toBe(99)" },
      { description: 'returns an object', assertion:"expect(typeof createWithProto({})).toBe('object')" },
    ],
    hints: [
      '`Object.create(proto)` sets `proto` as the `[[Prototype]]` of the new object.',
      'You can verify the link with `Object.getPrototypeOf(obj) === proto`.',
    ],
    tags: ['Object', 'Object.create', 'prototype', 'beginner'],
  },
  {
    slug: 'object-create-inherited-method',
    title: 'Object.create() — access inherited methods',
    description: `## Object.create() — inherited methods

Objects created with \`Object.create(proto)\` can access methods defined on the prototype through the prototype chain.

**Challenge:** Implement \`makeGreeter(name)\` that creates an object with \`name\` as an own property, using \`{ greet() { return 'Hello, ' + this.name } }\` as its prototype.

\`\`\`ts
makeGreeter('Alice').greet() // → 'Hello, Alice'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.create',
    initialCode: `function makeGreeter(name: string): { greet(): string } {
  // Create an object with the greeter prototype and assign name as an own property
  const proto = { greet() { return 'Hello, ' + (this as any).name } }
}`,
    solution: `function makeGreeter(name: string): { greet(): string } {
  const proto = { greet() { return 'Hello, ' + (this as any).name } }
  const obj = Object.create(proto) as { greet(): string; name: string }
  obj.name = name
  return obj
}`,
    tests: [
      { description: "greet returns 'Hello, Alice'", assertion:"expect(makeGreeter('Alice').greet()).toBe('Hello, Alice')" },
      { description: "greet returns 'Hello, Bob'", assertion:"expect(makeGreeter('Bob').greet()).toBe('Hello, Bob')" },
      { description: 'greet is not an own property', assertion:"const o = makeGreeter('X'); expect(Object.prototype.hasOwnProperty.call(o, 'greet')).toBe(false)" },
      { description: 'name is an own property', assertion:"const o = makeGreeter('Y'); expect(Object.prototype.hasOwnProperty.call(o, 'name')).toBe(true)" },
      { description: 'result is an object', assertion:"expect(typeof makeGreeter('Z')).toBe('object')" },
    ],
    hints: [
      'Define the prototype object with the shared method, then use `Object.create(proto)` to create the instance.',
      'Set the own property (e.g. `name`) directly on the created object.',
    ],
    tags: ['Object', 'Object.create', 'prototype', 'inheritance', 'intermediate'],
  },
  {
    slug: 'object-create-null-proto',
    title: 'Object.create(null) — no prototype',
    description: `## Object.create(null)

\`Object.create(null)\` creates an object with **no prototype at all** — not even \`Object.prototype\`. This is useful for plain dictionaries that cannot be polluted by inherited properties.

**Challenge:** Implement \`createNullProto()\` that returns an object created with \`Object.create(null)\`.

\`\`\`ts
Object.getPrototypeOf(createNullProto()) // → null
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.create',
    initialCode: `function createNullProto(): object {
  // Use Object.create(null) to create an object with no prototype
}`,
    solution: `function createNullProto(): object {
  return Object.create(null)
}`,
    tests: [
      { description: 'prototype is null', assertion:"expect(Object.getPrototypeOf(createNullProto())).toBeNull()" },
      { description: 'has no own keys', assertion:"expect(Object.keys(createNullProto())).toHaveLength(0)" },
      { description: 'does not inherit toString', assertion:"const o = createNullProto(); expect(o.toString).toBeUndefined()" },
      { description: 'can assign own properties', assertion:"const o = createNullProto(); o.key = 'val'; expect(o.key).toBe('val')" },
      { description: 'is still typeof object', assertion:"expect(typeof createNullProto()).toBe('object')" },
    ],
    hints: [
      '`Object.create(null)` produces a truly empty object — no `toString`, no `hasOwnProperty`.',
      'Use `Object.getPrototypeOf(obj) === null` to confirm.',
    ],
    tags: ['Object', 'Object.create', 'null prototype', 'intermediate'],
  },
  {
    slug: 'object-create-inherited-property',
    title: 'Object.create() — inherited property access',
    description: `## Object.create() — reading inherited properties

Properties on the prototype are accessible via the created object even though they are not own properties. \`in\` finds them but \`Object.keys\` and \`hasOwnProperty\` do not.

**Challenge:** Implement \`canAccessInherited(proto, key)\` that creates an object with \`proto\` as its prototype and returns whether the key is accessible (using the \`in\` operator).

\`\`\`ts
canAccessInherited({ role: 'admin' }, 'role') // → true
canAccessInherited({ role: 'admin' }, 'age')  // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.create',
    initialCode: `function canAccessInherited(proto: Record<string, unknown>, key: string): boolean {
  // Create object with proto, then check if key is accessible via the "in" operator
}`,
    solution: `function canAccessInherited(proto: Record<string, unknown>, key: string): boolean {
  const obj = Object.create(proto)
  return key in obj
}`,
    tests: [
      { description: "inherited key 'role' is accessible", assertion:"expect(canAccessInherited({ role: 'admin' }, 'role')).toBe(true)" },
      { description: 'missing key returns false', assertion:"expect(canAccessInherited({ role: 'admin' }, 'age')).toBe(false)" },
      { description: 'own property also accessible', assertion:"const p = { x: 1 }; const o = Object.create(p); o.y = 2; expect('y' in o).toBe(true)" },
      { description: 'key not in Object.keys', assertion:"const p = { hidden: 1 }; const o = Object.create(p); expect(Object.keys(o)).toHaveLength(0)" },
      { description: 'empty proto has no keys', assertion:"expect(canAccessInherited({}, 'anything')).toBe(false)" },
    ],
    hints: [
      'The `in` operator checks the prototype chain, unlike `Object.keys` or `hasOwnProperty`.',
      '`key in obj` returns `true` for both own and inherited properties.',
    ],
    tags: ['Object', 'Object.create', 'prototype', 'in operator', 'intermediate'],
  },
  {
    slug: 'object-create-verify-prototype',
    title: 'Object.create() — verify with getPrototypeOf',
    description: `## Object.create() — confirming the prototype

\`Object.getPrototypeOf(obj)\` returns the prototype set by \`Object.create\`, allowing you to confirm the prototype chain.

**Challenge:** Implement \`protoMatches(proto, obj)\` that returns whether \`Object.getPrototypeOf(obj)\` is strictly equal to \`proto\`.

\`\`\`ts
const p = {}
const o = Object.create(p)
protoMatches(p, o) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.create',
    initialCode: `function protoMatches(proto: object, obj: object): boolean {
  // Return true if Object.getPrototypeOf(obj) === proto
}`,
    solution: `function protoMatches(proto: object, obj: object): boolean {
  return Object.getPrototypeOf(obj) === proto
}`,
    tests: [
      { description: 'returns true when prototype matches', assertion:"const p = {}; const o = Object.create(p); expect(protoMatches(p, o)).toBe(true)" },
      { description: 'returns false for different prototype', assertion:"const p1 = {}; const p2 = {}; const o = Object.create(p1); expect(protoMatches(p2, o)).toBe(false)" },
      { description: 'null proto created with Object.create(null)', assertion:"const o = Object.create(null); expect(Object.getPrototypeOf(o)).toBeNull()" },
      { description: 'plain object prototype is Object.prototype', assertion:"expect(Object.getPrototypeOf({}) === Object.prototype).toBe(true)" },
      { description: 'confirms prototype chain link', assertion:"const base = { a: 1 }; const child = Object.create(base); expect(protoMatches(base, child)).toBe(true)" },
    ],
    hints: [
      '`Object.getPrototypeOf(obj)` is the standard way to inspect the prototype.',
      'Use `===` for reference equality, not `==` or `toEqual`.',
    ],
    tags: ['Object', 'Object.create', 'Object.getPrototypeOf', 'prototype', 'intermediate'],
  },
]
