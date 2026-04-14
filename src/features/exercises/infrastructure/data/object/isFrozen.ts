import type { Exercise } from '@/shared/types/exercises'

export const isFrozenExercises: Exercise[] = [
  {
    slug: 'object-isFrozen-1',
    title: 'Object.isFrozen() — plain object',
    description: `## Object.isFrozen()

\`Object.isFrozen(obj)\` returns \`true\` if the object is non-extensible AND all its properties are non-configurable AND non-writable.

A plain object is **not** frozen by default.

**Challenge:** Implement \`checkFrozen(obj)\` that returns whether the object is frozen.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isFrozen',
    initialCode: `function checkFrozen(obj) {
  // Return true if the object is frozen
}`,
    solution: `function checkFrozen(obj) {
  return Object.isFrozen(obj);
}`,
    tests: [
      {
        description: 'Plain object is not frozen',
        assertion: "expect(Object.isFrozen({ a: 1 })).toBe(false)"
      },
      {
        description: 'Empty object is not frozen',
        assertion: "expect(Object.isFrozen({})).toBe(false)"
      },
      {
        description: 'Object with nested props is not frozen',
        assertion: "expect(Object.isFrozen({ x: 1, y: [1, 2] })).toBe(false)"
      },
      {
        description: 'Frozen object returns true',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isFrozen(obj); })()"
      },
      {
        description: 'Object.freeze returns the same object',
        assertion: "(() => { const obj = { a: 1 }; const result = Object.freeze(obj); return result === obj; })()"
      },
    ],
    hints: ['Object.freeze() is the standard way to make an object frozen'],
    tags: ['Object', 'isFrozen', 'static-method', 'freeze'],
  },
  {
    slug: 'object-isFrozen-2',
    title: 'Object.isFrozen() — after Object.freeze',
    description: `## Object.isFrozen() after freeze

After calling \`Object.freeze(obj)\`, the object becomes frozen: no new properties, no property removal, no value changes.

**Challenge:** Freeze an object and verify it is frozen using \`Object.isFrozen()\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isFrozen',
    initialCode: `function freezeAndCheck(obj) {
  // Freeze the object and return whether it is frozen
}`,
    solution: `function freezeAndCheck(obj) {
  Object.freeze(obj);
  return Object.isFrozen(obj);
}`,
    tests: [
      {
        description: 'Object is frozen after Object.freeze',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isFrozen(obj) === true; })()"
      },
      {
        description: 'Frozen object write silently fails in sloppy mode',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); obj.a = 99; return obj.a === 1; })()"
      },
      {
        description: 'Frozen object property delete silently fails in sloppy mode',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); delete obj.a; return obj.a === 1; })()"
      },
      {
        description: 'Adding a new property to frozen object silently fails',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); obj.b = 2; return obj.b === undefined; })()"
      },
      {
        description: 'Unfrozen object can be modified',
        assertion: "(() => { const obj = { a: 1 }; obj.a = 99; return obj.a === 99; })()"
      },
    ],
    hints: ['freeze makes an object immutable (shallowly)'],
    tags: ['Object', 'isFrozen', 'freeze', 'static-method'],
  },
  {
    slug: 'object-isFrozen-3',
    title: 'Object.isFrozen() — empty object after preventExtensions',
    description: `## Object.isFrozen() — empty + non-extensible = frozen

An empty object that has been made non-extensible is considered frozen, because there are no writable or configurable properties to violate the frozen constraint.

**Challenge:** Verify that an empty object after \`Object.preventExtensions\` is considered frozen.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isFrozen',
    initialCode: `function emptyNonExtensibleFrozen() {
  // Create an empty object, call preventExtensions, and return whether it is frozen
}`,
    solution: `function emptyNonExtensibleFrozen() {
  const obj = {};
  Object.preventExtensions(obj);
  return Object.isFrozen(obj);
}`,
    tests: [
      {
        description: 'Empty + preventExtensions = frozen',
        assertion: "(() => { const obj = {}; Object.preventExtensions(obj); return Object.isFrozen(obj) === true; })()"
      },
      {
        description: 'Non-empty + preventExtensions is NOT frozen (still writable)',
        assertion: "(() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isFrozen(obj) === false; })()"
      },
      {
        description: 'isFrozen implies isSealed',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'isFrozen implies not isExtensible',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return !Object.isExtensible(obj); })()"
      },
      {
        description: 'Plain empty object is not frozen',
        assertion: "expect(Object.isFrozen({})).toBe(false)"
      },
    ],
    hints: ['An empty non-extensible object trivially satisfies all frozen conditions'],
    tags: ['Object', 'isFrozen', 'preventExtensions', 'static-method'],
  },
  {
    slug: 'object-isFrozen-4',
    title: 'Object.isFrozen() — after seal (not frozen)',
    description: `## Object.isFrozen() — sealed is NOT frozen

\`Object.seal()\` prevents adding/removing properties but allows modifying existing writable ones. So a sealed object with writable properties is **not** frozen.

**Challenge:** Show the difference between sealed and frozen objects using \`Object.isFrozen()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isFrozen',
    initialCode: `function sealedIsFrozen(obj) {
  // Seal the object and return whether it is frozen
}`,
    solution: `function sealedIsFrozen(obj) {
  Object.seal(obj);
  return Object.isFrozen(obj);
}`,
    tests: [
      {
        description: 'Sealed non-empty object is NOT frozen',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isFrozen(obj) === false; })()"
      },
      {
        description: 'Sealed object can still modify existing props',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.a = 42; return obj.a === 42; })()"
      },
      {
        description: 'Sealed AND frozen means isFrozen returns true',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); Object.freeze(obj); return Object.isFrozen(obj); })()"
      },
      {
        description: 'Empty sealed object IS frozen',
        assertion: "(() => { const obj = {}; Object.seal(obj); return Object.isFrozen(obj) === true; })()"
      },
      {
        description: 'isFrozen is stronger than isSealed',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isFrozen(obj) && Object.isSealed(obj); })()"
      },
    ],
    hints: ['seal is weaker than freeze — sealed objects can still be written to'],
    tags: ['Object', 'isFrozen', 'seal', 'static-method'],
  },
  {
    slug: 'object-isFrozen-5',
    title: 'Object.isFrozen() — deeply nested objects',
    description: `## Object.isFrozen() — shallow freeze only

\`Object.freeze()\` is a shallow operation. Nested objects are not frozen automatically.

**Challenge:** Demonstrate that freezing an object does not freeze its nested objects.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'Object.isFrozen',
    initialCode: `function checkNestedFrozen(outer) {
  // Freeze the outer object and return whether the inner nested object is also frozen
}`,
    solution: `function checkNestedFrozen(outer) {
  Object.freeze(outer);
  return Object.isFrozen(outer.inner);
}`,
    tests: [
      {
        description: 'Outer object is frozen',
        assertion: "(() => { const obj = { inner: { a: 1 } }; Object.freeze(obj); return Object.isFrozen(obj); })()"
      },
      {
        description: 'Nested object is NOT frozen by shallow freeze',
        assertion: "(() => { const obj = { inner: { a: 1 } }; Object.freeze(obj); return Object.isFrozen(obj.inner) === false; })()"
      },
      {
        description: 'Can still modify nested object properties',
        assertion: "(() => { const obj = { inner: { a: 1 } }; Object.freeze(obj); obj.inner.a = 99; return obj.inner.a === 99; })()"
      },
      {
        description: 'Deep freeze requires recursive freeze',
        assertion: "(() => { const obj = { inner: { a: 1 } }; Object.freeze(obj); Object.freeze(obj.inner); return Object.isFrozen(obj.inner); })()"
      },
      {
        description: 'isFrozen on a primitive-like frozen object returns true',
        assertion: "(() => { const obj = { n: 42 }; Object.freeze(obj); return Object.isFrozen(obj); })()"
      },
    ],
    hints: ['Object.freeze is shallow — use recursive freeze for deep immutability'],
    tags: ['Object', 'isFrozen', 'deep-freeze', 'static-method'],
  },
]
