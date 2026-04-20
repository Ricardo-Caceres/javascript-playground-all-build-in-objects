import type { Exercise } from '@/shared/types/exercises'

export const setPrototypeOfExercises: Exercise[] = [
  {
    slug: 'object-setPrototypeOf-1',
    title: 'Object.setPrototypeOf() — basics',
    description: `## Object.setPrototypeOf()

\`Object.setPrototypeOf(obj, proto)\` sets the prototype (i.e., the internal \`[[Prototype]]\` property) of a specified object to another object or \`null\`.

**Challenge:** Implement \`setProto(obj, proto)\` that sets the prototype of \`obj\` to \`proto\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.setPrototypeOf',
    initialCode: `function setProto(obj, proto) {
  // Set the prototype of obj to proto and return obj
}`,
    solution: `function setProto(obj, proto) {
  return Object.setPrototypeOf(obj, proto);
}`,
    tests: [
      {
        description: 'Returns the same object',
        assertion: "expect((() => { const obj = {}; const result = Object.setPrototypeOf(obj, null); return result === obj; })()).toBe(true)"
      },
      {
        description: 'Object inherits method from new prototype',
        assertion: "expect((() => { const proto = { greet() { return 'hello'; } }; const obj = {}; Object.setPrototypeOf(obj, proto); return obj.greet() === 'hello'; })()).toBe(true)"
      },
      {
        description: 'getPrototypeOf reflects new prototype',
        assertion: "expect((() => { const proto = { x: 1 }; const obj = {}; Object.setPrototypeOf(obj, proto); return Object.getPrototypeOf(obj) === proto; })()).toBe(true)"
      },
      {
        description: 'Can set prototype to null',
        assertion: "expect((() => { const obj = {}; Object.setPrototypeOf(obj, null); return Object.getPrototypeOf(obj) === null; })()).toBe(true)"
      },
      {
        description: 'Can override default Object.prototype',
        assertion: "expect((() => { const obj = {}; const proto = { toString() { return 'custom'; } }; Object.setPrototypeOf(obj, proto); return obj.toString() === 'custom'; })()).toBe(true)"
      },
    ],
    hints: ['setPrototypeOf modifies the prototype chain at runtime'],
    tags: ['Object', 'setPrototypeOf', 'prototype', 'static-method'],
  },
  {
    slug: 'object-setPrototypeOf-2',
    title: 'Object.setPrototypeOf() — set to null',
    description: `## Object.setPrototypeOf() — null prototype

Setting the prototype to \`null\` creates an object with no prototype chain — similar to \`Object.create(null)\`. Such objects have no inherited methods.

**Challenge:** Set an object's prototype to \`null\` and verify it loses inherited methods.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.setPrototypeOf',
    initialCode: `function removePrototype(obj) {
  // Set the prototype to null and return whether obj.toString is undefined
}`,
    solution: `function removePrototype(obj) {
  Object.setPrototypeOf(obj, null);
  return typeof obj.toString === 'undefined';
}`,
    tests: [
      {
        description: 'After null prototype, getPrototypeOf returns null',
        assertion: "expect((() => { const obj = {}; Object.setPrototypeOf(obj, null); return Object.getPrototypeOf(obj) === null; })()).toBe(true)"
      },
      {
        description: 'After null prototype, toString is undefined',
        assertion: "expect((() => { const obj = {}; Object.setPrototypeOf(obj, null); return typeof obj.toString === 'undefined'; })()).toBe(true)"
      },
      {
        description: 'Own properties are unaffected',
        assertion: "expect((() => { const obj = { a: 1 }; Object.setPrototypeOf(obj, null); return obj.a === 1; })()).toBe(true)"
      },
      {
        description: 'Before setPrototypeOf null, toString exists',
        assertion: "expect(typeof ({}).toString).toBe('function')"
      },
      {
        description: 'Object.create(null) is equivalent to setPrototypeOf null',
        assertion: "expect((() => { const obj = Object.create(null); return Object.getPrototypeOf(obj) === null; })()).toBe(true)"
      },
    ],
    hints: ['null prototype objects are useful as pure hash maps with no inherited methods'],
    tags: ['Object', 'setPrototypeOf', 'prototype', 'null', 'static-method'],
  },
  {
    slug: 'object-setPrototypeOf-3',
    title: 'Object.setPrototypeOf() — verify with getPrototypeOf',
    description: `## Object.setPrototypeOf() — verification

After calling \`Object.setPrototypeOf()\`, use \`Object.getPrototypeOf()\` to confirm the prototype was correctly set.

**Challenge:** Set the prototype and verify it with \`Object.getPrototypeOf()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.setPrototypeOf',
    initialCode: `function setAndVerify(obj, proto) {
  // Set the prototype and return whether getPrototypeOf matches proto
}`,
    solution: `function setAndVerify(obj, proto) {
  Object.setPrototypeOf(obj, proto);
  return Object.getPrototypeOf(obj) === proto;
}`,
    tests: [
      {
        description: 'getPrototypeOf returns the newly set prototype',
        assertion: "expect((() => { const proto = { x: 1 }; const obj = {}; Object.setPrototypeOf(obj, proto); return Object.getPrototypeOf(obj) === proto; })()).toBe(true)"
      },
      {
        description: 'Can change prototype multiple times',
        assertion: "expect((() => { const p1 = { a: 1 }; const p2 = { b: 2 }; const obj = {}; Object.setPrototypeOf(obj, p1); Object.setPrototypeOf(obj, p2); return Object.getPrototypeOf(obj) === p2; })()).toBe(true)"
      },
      {
        description: 'Object inherits from new prototype',
        assertion: "expect((() => { const proto = { double(x) { return x * 2; } }; const obj = {}; Object.setPrototypeOf(obj, proto); return obj.double(5) === 10; })()).toBe(true)"
      },
      {
        description: 'Default prototype is Object.prototype',
        assertion: "expect(Object.getPrototypeOf({})).toBe(Object.prototype)"
      },
      {
        description: 'After setPrototypeOf, instanceof works correctly',
        assertion: "expect((() => { function Animal() {} const obj = {}; Object.setPrototypeOf(obj, Animal.prototype); return obj instanceof Animal; })()).toBe(true)"
      },
    ],
    hints: ['Use getPrototypeOf to verify the prototype was set correctly'],
    tags: ['Object', 'setPrototypeOf', 'getPrototypeOf', 'prototype', 'static-method'],
  },
  {
    slug: 'object-setPrototypeOf-4',
    title: 'Object.setPrototypeOf() — inheritance chain',
    description: `## Object.setPrototypeOf() — building inheritance

\`Object.setPrototypeOf()\` can be used to set up an inheritance chain dynamically.

**Challenge:** Use \`Object.setPrototypeOf()\` to create a two-level inheritance chain.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'Object.setPrototypeOf',
    initialCode: `function buildChain(obj, parent, grandparent) {
  // Set up: obj -> parent -> grandparent
  // Return obj.grandValue (defined on grandparent)
}`,
    solution: `function buildChain(obj, parent, grandparent) {
  Object.setPrototypeOf(obj, parent);
  Object.setPrototypeOf(parent, grandparent);
  return obj.grandValue;
}`,
    tests: [
      {
        description: 'Object inherits from intermediate prototype',
        assertion: "expect((() => { const a = { x: 1 }; const b = {}; const c = {}; Object.setPrototypeOf(c, b); Object.setPrototypeOf(b, a); return c.x === 1; })()).toBe(true)"
      },
      {
        description: 'instanceof works across the chain',
        assertion: "expect((() => { function A() {} function B() {} Object.setPrototypeOf(B.prototype, A.prototype); const b = new B(); return b instanceof A; })()).toBe(true)"
      },
      {
        description: 'isPrototypeOf works in chain',
        assertion: "expect((() => { const a = {}; const b = Object.create(a); const c = Object.create(b); return a.isPrototypeOf(c); })()).toBe(true)"
      },
      {
        description: 'Property lookup traverses chain',
        assertion: "expect((() => { const grandParent = { name: 'GP' }; const parent = {}; const child = {}; Object.setPrototypeOf(child, parent); Object.setPrototypeOf(parent, grandParent); return child.name === 'GP'; })()).toBe(true)"
      },
      {
        description: 'Own properties shadow prototype',
        assertion: "expect((() => { const proto = { x: 1 }; const obj = { x: 99 }; Object.setPrototypeOf(obj, proto); return obj.x === 99; })()).toBe(true)"
      },
    ],
    hints: ['setPrototypeOf enables dynamic prototype chain manipulation'],
    tags: ['Object', 'setPrototypeOf', 'prototype', 'inheritance', 'static-method'],
  },
  {
    slug: 'object-setPrototypeOf-5',
    title: 'Object.setPrototypeOf() — returns the object',
    description: `## Object.setPrototypeOf() — return value

\`Object.setPrototypeOf(obj, proto)\` returns the modified object itself, enabling chaining.

**Challenge:** Verify that \`Object.setPrototypeOf()\` returns the same object reference.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.setPrototypeOf',
    initialCode: `function setProtoChain(obj, proto) {
  // Set prototype and verify the return value is the same object
}`,
    solution: `function setProtoChain(obj, proto) {
  const result = Object.setPrototypeOf(obj, proto);
  return result === obj;
}`,
    tests: [
      {
        description: 'Returns the same object reference',
        assertion: "expect((() => { const obj = {}; const proto = {}; return Object.setPrototypeOf(obj, proto) === obj; })()).toBe(true)"
      },
      {
        description: 'Can chain method calls on result',
        assertion: "expect((() => { const proto = { greet() { return 'hi'; } }; const obj = Object.setPrototypeOf({}, proto); return obj.greet() === 'hi'; })()).toBe(true)"
      },
      {
        description: 'Modifies the original object in place',
        assertion: "expect((() => { const obj = { a: 1 }; const proto = { b: 2 }; Object.setPrototypeOf(obj, proto); return obj.a === 1 && obj.b === 2; })()).toBe(true)"
      },
      {
        description: 'Works with class prototype',
        assertion: "expect((() => { class Animal { speak() { return 'roar'; } } const obj = {}; Object.setPrototypeOf(obj, Animal.prototype); return obj.speak() === 'roar'; })()).toBe(true)"
      },
      {
        description: 'setPrototypeOf null removes inherited methods',
        assertion: "expect((() => { const obj = {}; Object.setPrototypeOf(obj, null); return typeof obj.hasOwnProperty === 'undefined'; })()).toBe(true)"
      },
    ],
    hints: ['setPrototypeOf returns the object for convenient chaining'],
    tags: ['Object', 'setPrototypeOf', 'prototype', 'static-method'],
  },
]
