import type { Exercise } from '@/shared/types/exercises'

export const isPrototypeOfExercises: Exercise[] = [
  {
    slug: 'object-isPrototypeOf-1',
    title: 'isPrototypeOf() — basics',
    description: `## Object.prototype.isPrototypeOf()

\`proto.isPrototypeOf(obj)\` returns \`true\` if \`proto\` appears anywhere in the prototype chain of \`obj\`.

**Challenge:** Implement \`checkPrototype(proto, obj)\` that returns whether \`proto\` is in \`obj\`'s prototype chain.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'isPrototypeOf',
    initialCode: `function checkPrototype(proto, obj) {
  // Return true if proto is in the prototype chain of obj
}`,
    solution: `function checkPrototype(proto, obj) {
  return proto.isPrototypeOf(obj);
}`,
    tests: [
      {
        description: 'Direct prototype returns true',
        assertion: "(() => { const proto = {}; const obj = Object.create(proto); return proto.isPrototypeOf(obj); })()"
      },
      {
        description: 'Unrelated object returns false',
        assertion: "(() => { const proto = {}; const obj = {}; return proto.isPrototypeOf(obj) === false; })()"
      },
      {
        description: 'Object.prototype is in every plain object chain',
        assertion: "expect(Object.prototype.isPrototypeOf({})).toBe(true)"
      },
      {
        description: 'Array.prototype is in array chain',
        assertion: "expect(Array.prototype.isPrototypeOf([])).toBe(true)"
      },
      {
        description: 'Array.prototype is not in plain object chain',
        assertion: "expect(Array.prototype.isPrototypeOf({})).toBe(false)"
      },
    ],
    hints: ['isPrototypeOf traverses the entire prototype chain'],
    tags: ['Object', 'isPrototypeOf', 'instance-method', 'prototype'],
  },
  {
    slug: 'object-isPrototypeOf-2',
    title: 'isPrototypeOf() — deeper chain',
    description: `## isPrototypeOf() — multi-level chain

\`isPrototypeOf()\` checks the entire chain, not just the immediate prototype. So if A → B → C, \`A.isPrototypeOf(C)\` returns \`true\`.

**Challenge:** Verify that isPrototypeOf works across multiple levels.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'isPrototypeOf',
    initialCode: `function isAncestor(ancestor, descendant) {
  // Return true if ancestor is anywhere in descendant's prototype chain
}`,
    solution: `function isAncestor(ancestor, descendant) {
  return ancestor.isPrototypeOf(descendant);
}`,
    tests: [
      {
        description: 'Grandparent is prototype of grandchild',
        assertion: "(() => { const a = {}; const b = Object.create(a); const c = Object.create(b); return a.isPrototypeOf(c); })()"
      },
      {
        description: 'Object.prototype is in multi-level chain',
        assertion: "(() => { const a = {}; const b = Object.create(a); const c = Object.create(b); return Object.prototype.isPrototypeOf(c); })()"
      },
      {
        description: 'Direct parent is prototype',
        assertion: "(() => { const a = {}; const b = Object.create(a); return a.isPrototypeOf(b); })()"
      },
      {
        description: 'Child is NOT prototype of parent',
        assertion: "(() => { const a = {}; const b = Object.create(a); return b.isPrototypeOf(a) === false; })()"
      },
      {
        description: 'Object is not prototype of itself',
        assertion: "(() => { const obj = {}; return obj.isPrototypeOf(obj) === false; })()"
      },
    ],
    hints: ['isPrototypeOf checks the entire chain, not just the immediate parent'],
    tags: ['Object', 'isPrototypeOf', 'instance-method', 'chain'],
  },
  {
    slug: 'object-isPrototypeOf-3',
    title: 'isPrototypeOf() — unrelated objects',
    description: `## isPrototypeOf() — returns false for unrelated objects

If the object you're testing is not in the prototype chain at all, \`isPrototypeOf()\` returns \`false\`.

**Challenge:** Confirm that unrelated objects return \`false\` from \`isPrototypeOf()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'isPrototypeOf',
    initialCode: `function isUnrelated(a, b) {
  // Return true if neither a nor b is in the other's prototype chain
}`,
    solution: `function isUnrelated(a, b) {
  return !a.isPrototypeOf(b) && !b.isPrototypeOf(a);
}`,
    tests: [
      {
        description: 'Two plain objects are unrelated',
        assertion: "expect({}.isPrototypeOf({})).toBe(false)"
      },
      {
        description: 'Object is not prototype of array',
        assertion: "(() => { const obj = {}; return obj.isPrototypeOf([]) === false; })()"
      },
      {
        description: 'Sibling objects from same prototype',
        assertion: "(() => { const proto = {}; const a = Object.create(proto); const b = Object.create(proto); return a.isPrototypeOf(b) === false; })()"
      },
      {
        description: 'After severing prototype chain',
        assertion: "(() => { const proto = {}; const obj = Object.create(proto); Object.setPrototypeOf(obj, null); return proto.isPrototypeOf(obj) === false; })()"
      },
      {
        description: 'Function.prototype is not in plain object chain',
        assertion: "expect(Function.prototype.isPrototypeOf({})).toBe(false)"
      },
    ],
    hints: ['isPrototypeOf returns false if no relationship exists'],
    tags: ['Object', 'isPrototypeOf', 'instance-method', 'unrelated'],
  },
  {
    slug: 'object-isPrototypeOf-4',
    title: 'isPrototypeOf() — null prototype',
    description: `## isPrototypeOf() — null prototype objects

Objects created with \`Object.create(null)\` have no prototype. \`Object.prototype.isPrototypeOf()\` returns \`false\` for them.

**Challenge:** Verify that Object.prototype is not in the chain of a null-prototype object.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'isPrototypeOf',
    initialCode: `function hasObjectPrototype(obj) {
  // Return true if Object.prototype is in obj's chain
}`,
    solution: `function hasObjectPrototype(obj) {
  return Object.prototype.isPrototypeOf(obj);
}`,
    tests: [
      {
        description: 'Object.prototype NOT in null-prototype chain',
        assertion: "(() => { const obj = Object.create(null); return Object.prototype.isPrototypeOf(obj) === false; })()"
      },
      {
        description: 'Object.prototype IS in plain object chain',
        assertion: "expect(Object.prototype.isPrototypeOf({})).toBe(true)"
      },
      {
        description: 'Object.prototype IS in array chain',
        assertion: "expect(Object.prototype.isPrototypeOf([])).toBe(true)"
      },
      {
        description: 'getPrototypeOf null-prototype is null',
        assertion: "(() => { const obj = Object.create(null); return Object.getPrototypeOf(obj) === null; })()"
      },
      {
        description: 'Null-prototype object is not related to Object.prototype',
        assertion: "(() => { const obj = Object.create(null); return !Object.prototype.isPrototypeOf(obj); })()"
      },
    ],
    hints: ['Null-prototype objects have no inherited methods or prototype chain'],
    tags: ['Object', 'isPrototypeOf', 'instance-method', 'null-prototype'],
  },
  {
    slug: 'object-isPrototypeOf-5',
    title: 'isPrototypeOf() — vs instanceof',
    description: `## isPrototypeOf() — comparison with instanceof

\`instanceof\` checks if \`Constructor.prototype\` is in the chain. \`isPrototypeOf()\` is more flexible — you can check any object, not just constructor prototypes.

**Challenge:** Use \`isPrototypeOf()\` to replicate what \`instanceof\` checks.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'isPrototypeOf',
    initialCode: `function isInstanceLike(Constructor, obj) {
  // Return true if Constructor.prototype is in obj's chain (like instanceof)
}`,
    solution: `function isInstanceLike(Constructor, obj) {
  return Constructor.prototype.isPrototypeOf(obj);
}`,
    tests: [
      {
        description: 'Array.prototype.isPrototypeOf([]) is true',
        assertion: "expect(Array.prototype.isPrototypeOf([])).toBe(true)"
      },
      {
        description: 'isPrototypeOf matches instanceof for arrays',
        assertion: "expect(Array.prototype.isPrototypeOf([]) === ([] instanceof Array)).toBe(true)"
      },
      {
        description: 'isPrototypeOf matches instanceof for custom class',
        assertion: "(() => { class Dog {} const d = new Dog(); return Dog.prototype.isPrototypeOf(d) === (d instanceof Dog); })()"
      },
      {
        description: 'Works through inheritance chain',
        assertion: "(() => { class Animal {} class Dog extends Animal {} const d = new Dog(); return Animal.prototype.isPrototypeOf(d); })()"
      },
      {
        description: 'Object.prototype.isPrototypeOf matches instanceof Object',
        assertion: "expect(Object.prototype.isPrototypeOf({}) === ({} instanceof Object)).toBe(true)"
      },
    ],
    hints: ['isPrototypeOf is more general than instanceof — it can check any prototype, not just constructor.prototype'],
    tags: ['Object', 'isPrototypeOf', 'instanceof', 'instance-method', 'prototype'],
  },
]
