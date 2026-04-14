import type { Exercise } from '@/shared/types/exercises'

export const isExtensibleExercises: Exercise[] = [
  {
    slug: 'object-isExtensible-1',
    title: 'Object.isExtensible() — plain object',
    description: `## Object.isExtensible()

\`Object.isExtensible(obj)\` returns \`true\` if new properties can be added to the object.

By default, all plain objects are extensible.

**Challenge:** Implement \`checkExtensible(obj)\` that returns whether the object is extensible.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isExtensible',
    initialCode: `function checkExtensible(obj) {
  // Return true if the object is extensible
}`,
    solution: `function checkExtensible(obj) {
  return Object.isExtensible(obj);
}`,
    tests: [
      {
        description: 'Plain object is extensible by default',
        assertion: "expect(Object.isExtensible({ a: 1 })).toBe(true)"
      },
      {
        description: 'Empty object is extensible by default',
        assertion: "expect(Object.isExtensible({})).toBe(true)"
      },
      {
        description: 'Object with multiple properties is extensible',
        assertion: "expect(Object.isExtensible({ x: 1, y: 2, z: 3 })).toBe(true)"
      },
      {
        description: 'Object after preventExtensions is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isExtensible(obj); })()"
      },
      {
        description: 'Frozen object is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return !Object.isExtensible(obj); })()"
      },
    ],
    hints: ['Object.isExtensible() returns true for all plain objects by default'],
    tags: ['Object', 'isExtensible', 'static-method', 'extensible'],
  },
  {
    slug: 'object-isExtensible-2',
    title: 'Object.isExtensible() — after preventExtensions',
    description: `## Object.isExtensible() after preventExtensions

Once \`Object.preventExtensions(obj)\` is called, the object cannot have new properties added.

**Challenge:** Write a function that calls \`Object.preventExtensions\` and returns whether the result is extensible.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isExtensible',
    initialCode: `function makeNonExtensible(obj) {
  // Prevent extensions and return whether the object is still extensible
}`,
    solution: `function makeNonExtensible(obj) {
  Object.preventExtensions(obj);
  return Object.isExtensible(obj);
}`,
    tests: [
      {
        description: 'Returns false after preventExtensions',
        assertion: "(() => { const obj = {}; Object.preventExtensions(obj); return Object.isExtensible(obj) === false; })()"
      },
      {
        description: 'preventExtensions returns the same object',
        assertion: "(() => { const obj = { a: 1 }; const result = Object.preventExtensions(obj); return result === obj; })()"
      },
      {
        description: 'After preventExtensions, existing props still work',
        assertion: "(() => { const obj = { a: 1 }; Object.preventExtensions(obj); obj.a = 99; return obj.a === 99; })()"
      },
      {
        description: 'Sealed object is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isExtensible(obj) === false; })()"
      },
      {
        description: 'Frozen object is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isExtensible(obj) === false; })()"
      },
    ],
    hints: ['All of freeze, seal, and preventExtensions make an object non-extensible'],
    tags: ['Object', 'isExtensible', 'static-method', 'preventExtensions'],
  },
  {
    slug: 'object-isExtensible-3',
    title: 'Object.isExtensible() — after freeze',
    description: `## Object.isExtensible() after freeze

\`Object.freeze(obj)\` makes an object non-extensible, non-configurable, and non-writable.

**Challenge:** Implement \`isFrozenAndNonExtensible(obj)\` that returns \`true\` when the object is both frozen and not extensible.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isExtensible',
    initialCode: `function isFrozenAndNonExtensible(obj) {
  // Return true if the object is frozen AND not extensible
}`,
    solution: `function isFrozenAndNonExtensible(obj) {
  return Object.isFrozen(obj) && !Object.isExtensible(obj);
}`,
    tests: [
      {
        description: 'Frozen object is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return !Object.isExtensible(obj); })()"
      },
      {
        description: 'Can confirm with both isFrozen and isExtensible',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isFrozen(obj) && !Object.isExtensible(obj); })()"
      },
      {
        description: 'Unfrozen object is extensible',
        assertion: "expect(Object.isExtensible({ x: 10 })).toBe(true)"
      },
      {
        description: 'After freeze, adding a new property silently fails in sloppy mode',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); obj.b = 2; return obj.b === undefined; })()"
      },
      {
        description: 'After freeze, existing property value is unchanged on write attempt',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); obj.a = 99; return obj.a === 1; })()"
      },
    ],
    hints: ['freeze implies non-extensible'],
    tags: ['Object', 'isExtensible', 'freeze', 'static-method'],
  },
  {
    slug: 'object-isExtensible-4',
    title: 'Object.isExtensible() — after seal',
    description: `## Object.isExtensible() after seal

\`Object.seal(obj)\` prevents adding or removing properties, making the object non-extensible.

**Challenge:** Show that a sealed object is not extensible.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isExtensible',
    initialCode: `function sealAndCheck(obj) {
  // Seal the object and return whether it is extensible
}`,
    solution: `function sealAndCheck(obj) {
  Object.seal(obj);
  return Object.isExtensible(obj);
}`,
    tests: [
      {
        description: 'Sealed object is not extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isExtensible(obj) === false; })()"
      },
      {
        description: 'Sealed object can still modify existing writable properties',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.a = 42; return obj.a === 42; })()"
      },
      {
        description: 'Sealed object prevents adding new properties (sloppy fail)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.b = 2; return obj.b === undefined; })()"
      },
      {
        description: 'Object.seal returns the same object',
        assertion: "(() => { const obj = { a: 1 }; const result = Object.seal(obj); return result === obj; })()"
      },
      {
        description: 'Plain object before seal is extensible',
        assertion: "expect(Object.isExtensible({ a: 1, b: 2 })).toBe(true)"
      },
    ],
    hints: ['seal makes an object non-extensible AND all properties non-configurable'],
    tags: ['Object', 'isExtensible', 'seal', 'static-method'],
  },
  {
    slug: 'object-isExtensible-5',
    title: 'Object.isExtensible() — combining checks',
    description: `## Object.isExtensible() — combining checks

Use \`Object.isExtensible()\` to guard against inadvertently modifying locked objects.

**Challenge:** Implement \`safeAddProperty(obj, key, value)\` that only adds the property if the object is extensible, and returns whether the property was added.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isExtensible',
    initialCode: `function safeAddProperty(obj, key, value) {
  // Only add the property if obj is extensible
  // Return true if added, false otherwise
}`,
    solution: `function safeAddProperty(obj, key, value) {
  if (!Object.isExtensible(obj)) return false;
  obj[key] = value;
  return true;
}`,
    tests: [
      {
        description: 'Adds property when object is extensible',
        assertion: "(() => { const obj = {}; const added = (() => { if (!Object.isExtensible(obj)) return false; obj.x = 1; return true; })(); return added === true && obj.x === 1; })()"
      },
      {
        description: 'Does not add property when object is frozen',
        assertion: "(() => { const obj = {}; Object.freeze(obj); const added = (() => { if (!Object.isExtensible(obj)) return false; obj.x = 1; return true; })(); return added === false; })()"
      },
      {
        description: 'Does not add property when object is sealed',
        assertion: "(() => { const obj = {}; Object.seal(obj); const added = (() => { if (!Object.isExtensible(obj)) return false; obj.x = 1; return true; })(); return added === false; })()"
      },
      {
        description: 'Does not add when preventExtensions used',
        assertion: "(() => { const obj = {}; Object.preventExtensions(obj); return !Object.isExtensible(obj); })()"
      },
      {
        description: 'Plain new object is extensible',
        assertion: "expect(Object.isExtensible(Object.create(null))).toBe(true)"
      },
    ],
    hints: ['Check isExtensible before adding properties to avoid silent failures'],
    tags: ['Object', 'isExtensible', 'static-method', 'guard'],
  },
]
