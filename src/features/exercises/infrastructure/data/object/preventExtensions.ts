import type { Exercise } from '@/shared/types/exercises'

export const preventExtensionsExercises: Exercise[] = [
  {
    slug: 'object-preventExtensions-1',
    title: 'Object.preventExtensions() — basics',
    description: `## Object.preventExtensions()

\`Object.preventExtensions(obj)\` prevents new properties from being added to an object. Existing properties can still be modified or deleted.

**Challenge:** Implement \`lockShape(obj)\` that prevents new properties from being added to the object.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.preventExtensions',
    initialCode: `function lockShape(obj) {
  // Prevent new properties from being added and return the object
}`,
    solution: `function lockShape(obj) {
  return Object.preventExtensions(obj);
}`,
    tests: [
      {
        description: 'Returns the same object',
        assertion: "expect((() => { const obj = { a: 1 }; const result = Object.preventExtensions(obj); return result === obj; })()).toBe(true)"
      },
      {
        description: 'Adding a new property silently fails in sloppy mode',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); obj.b = 2; return obj.b === undefined; })()).toBe(true)"
      },
      {
        description: 'Object becomes non-extensible',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); return !Object.isExtensible(obj); })()).toBe(true)"
      },
      {
        description: 'Existing properties can still be modified',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); obj.a = 99; return obj.a === 99; })()).toBe(true)"
      },
      {
        description: 'Existing properties can still be deleted',
        assertion: "expect((() => { const obj = { a: 1, b: 2 }; Object.preventExtensions(obj); delete obj.a; return !('a' in obj); })()).toBe(true)"
      },
    ],
    hints: ['preventExtensions only blocks adding new properties, not modifying or deleting existing ones'],
    tags: ['Object', 'preventExtensions', 'static-method', 'extensible'],
    usageExample: {
      code: `// Prevent new properties from being added
const obj = { a: 1 }
Object.preventExtensions(obj)
obj.b = 2    // silently ignored
Object.keys(obj)   // → ['a']`,
      explanation: {
        en: 'Use Object.preventExtensions() to lock an object so no new properties can be added, while still allowing modifications to existing ones.',
        es: 'Usa Object.preventExtensions() para bloquear un objeto y que no se puedan añadir nuevas propiedades, aunque las existentes sí puedan modificarse.',
      },
    },
  },
  {
    slug: 'object-preventExtensions-2',
    title: 'Object.preventExtensions() — verify with isExtensible',
    description: `## Object.preventExtensions() — checking with isExtensible

After calling \`Object.preventExtensions()\`, you can verify the result with \`Object.isExtensible()\`.

**Challenge:** Implement \`makeAndCheckNonExtensible(obj)\` that locks the object and returns whether it is now non-extensible.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.preventExtensions',
    initialCode: `function makeAndCheckNonExtensible(obj) {
  // Prevent extensions and return whether the object is non-extensible
}`,
    solution: `function makeAndCheckNonExtensible(obj) {
  Object.preventExtensions(obj);
  return !Object.isExtensible(obj);
}`,
    tests: [
      {
        description: 'isExtensible returns false after preventExtensions',
        assertion: "expect((() => { const obj = {}; Object.preventExtensions(obj); return Object.isExtensible(obj) === false; })()).toBe(true)"
      },
      {
        description: 'isExtensible returns true before preventExtensions',
        assertion: "expect(Object.isExtensible({})).toBe(true)"
      },
      {
        description: 'preventExtensions does not seal the object',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isSealed(obj) === false; })()).toBe(true)"
      },
      {
        description: 'preventExtensions does not freeze the object',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isFrozen(obj) === false; })()).toBe(true)"
      },
      {
        description: 'After preventExtensions, writing existing prop still works',
        assertion: "expect((() => { const obj = { x: 5 }; Object.preventExtensions(obj); obj.x = 10; return obj.x === 10; })()).toBe(true)"
      },
    ],
    hints: ['preventExtensions is the weakest of the three object locking methods'],
    tags: ['Object', 'preventExtensions', 'isExtensible', 'static-method'],
    usageExample: {
      code: `// Prevent new properties from being added
const obj = { a: 1 }
Object.preventExtensions(obj)
obj.b = 2    // silently ignored
Object.keys(obj)   // → ['a']`,
      explanation: {
        en: 'Use Object.preventExtensions() to lock an object so no new properties can be added, while still allowing modifications to existing ones.',
        es: 'Usa Object.preventExtensions() para bloquear un objeto y que no se puedan añadir nuevas propiedades, aunque las existentes sí puedan modificarse.',
      },
    },
  },
  {
    slug: 'object-preventExtensions-3',
    title: 'Object.preventExtensions() — existing props modifiable',
    description: `## Object.preventExtensions() — mutability preserved

\`Object.preventExtensions()\` only blocks new property additions. Existing properties remain fully mutable.

**Challenge:** Show that existing properties are still modifiable after calling \`Object.preventExtensions()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.preventExtensions',
    initialCode: `function modifyAfterPrevent(obj, key, newValue) {
  // Prevent extensions then try to modify an existing property
  // Return the new value of obj[key]
}`,
    solution: `function modifyAfterPrevent(obj, key, newValue) {
  Object.preventExtensions(obj);
  obj[key] = newValue;
  return obj[key];
}`,
    tests: [
      {
        description: 'Existing string property can be updated',
        assertion: "expect((() => { const obj = { name: 'Alice' }; Object.preventExtensions(obj); obj.name = 'Bob'; return obj.name === 'Bob'; })()).toBe(true)"
      },
      {
        description: 'Existing number property can be updated',
        assertion: "expect((() => { const obj = { count: 0 }; Object.preventExtensions(obj); obj.count++; return obj.count === 1; })()).toBe(true)"
      },
      {
        description: 'Existing property can be deleted',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); delete obj.a; return !('a' in obj); })()).toBe(true)"
      },
      {
        description: 'New property cannot be added',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); obj.newProp = 'x'; return !('newProp' in obj); })()).toBe(true)"
      },
      {
        description: 'preventExtensions returns same object reference',
        assertion: "expect((() => { const obj = {}; return Object.preventExtensions(obj) === obj; })()).toBe(true)"
      },
    ],
    hints: ['Use isExtensible to confirm the object is non-extensible'],
    tags: ['Object', 'preventExtensions', 'static-method'],
    usageExample: {
      code: `// Prevent new properties from being added
const obj = { a: 1 }
Object.preventExtensions(obj)
obj.b = 2    // silently ignored
Object.keys(obj)   // → ['a']`,
      explanation: {
        en: 'Use Object.preventExtensions() to lock an object so no new properties can be added, while still allowing modifications to existing ones.',
        es: 'Usa Object.preventExtensions() para bloquear un objeto y que no se puedan añadir nuevas propiedades, aunque las existentes sí puedan modificarse.',
      },
    },
  },
  {
    slug: 'object-preventExtensions-4',
    title: 'Object.preventExtensions() — prototype not affected',
    description: `## Object.preventExtensions() — only affects own properties

\`Object.preventExtensions()\` only prevents additions to the target object itself. The prototype can still be modified.

**Challenge:** Understand that preventExtensions does not restrict prototype modifications.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.preventExtensions',
    initialCode: `function protoStillMutable(obj) {
  // Prevent extensions on obj, then add to its prototype
  // Return whether the prototype property is accessible on obj
}`,
    solution: `function protoStillMutable(obj) {
  const proto = Object.getPrototypeOf(obj);
  Object.preventExtensions(obj);
  if (proto && Object.isExtensible(proto)) {
    proto.fromProto = true;
  }
  return obj.fromProto === true;
}`,
    tests: [
      {
        description: 'preventExtensions only affects the object itself',
        assertion: "expect((() => { const proto = {}; const obj = Object.create(proto); Object.preventExtensions(obj); proto.x = 42; return obj.x === 42; })()).toBe(true)"
      },
      {
        description: 'Object itself cannot have new own properties',
        assertion: "expect((() => { const obj = {}; Object.preventExtensions(obj); obj.own = 1; return !('own' in Object.getOwnPropertyDescriptors(obj)); })()).toBe(true)"
      },
      {
        description: 'Prototype remains extensible',
        assertion: "expect((() => { const obj = Object.create({}); Object.preventExtensions(obj); return Object.isExtensible(Object.getPrototypeOf(obj)); })()).toBe(true)"
      },
      {
        description: 'Object is non-extensible',
        assertion: "expect((() => { const obj = {}; Object.preventExtensions(obj); return !Object.isExtensible(obj); })()).toBe(true)"
      },
      {
        description: 'preventExtensions is one-way — cannot be undone',
        assertion: "expect((() => { const obj = {}; Object.preventExtensions(obj); return !Object.isExtensible(obj); })()).toBe(true)"
      },
    ],
    hints: ['preventExtensions is applied only to the direct object, not its prototype chain'],
    tags: ['Object', 'preventExtensions', 'prototype', 'static-method'],
    usageExample: {
      code: `// Prevent new properties from being added
const obj = { a: 1 }
Object.preventExtensions(obj)
obj.b = 2    // silently ignored
Object.keys(obj)   // → ['a']`,
      explanation: {
        en: 'Use Object.preventExtensions() to lock an object so no new properties can be added, while still allowing modifications to existing ones.',
        es: 'Usa Object.preventExtensions() para bloquear un objeto y que no se puedan añadir nuevas propiedades, aunque las existentes sí puedan modificarse.',
      },
    },
  },
  {
    slug: 'object-preventExtensions-5',
    title: 'Object.preventExtensions() — in strict mode throws',
    description: `## Object.preventExtensions() — strict mode behavior

In strict mode, attempting to add a property to a non-extensible object throws a \`TypeError\`. In sloppy mode, it silently fails.

**Challenge:** Verify that adding a property to a non-extensible object silently fails in sloppy mode (does not add the property).`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.preventExtensions',
    initialCode: `function sloppyModePrevent(obj, key, value) {
  // Prevent extensions in sloppy mode and attempt to add a property
  // Return whether the key was added
}`,
    solution: `function sloppyModePrevent(obj, key, value) {
  Object.preventExtensions(obj);
  obj[key] = value; // silently fails
  return key in obj;
}`,
    tests: [
      {
        description: 'Property not added in sloppy mode after preventExtensions',
        assertion: "expect((() => { const obj = {}; Object.preventExtensions(obj); obj.x = 1; return !('x' in obj); })()).toBe(true)"
      },
      {
        description: 'Adding to extensible object works',
        assertion: "expect((() => { const obj = {}; obj.x = 1; return obj.x === 1; })()).toBe(true)"
      },
      {
        description: 'Strict mode throws TypeError for new property',
        assertion: "expect((() => { try { 'use strict'; const obj = {}; Object.preventExtensions(obj); obj.x = 1; return false; } catch(e) { return e instanceof TypeError; } })()).toBe(true)"
      },
      {
        description: 'isExtensible is false',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); return !Object.isExtensible(obj); })()).toBe(true)"
      },
      {
        description: 'Existing prop survives in sloppy mode',
        assertion: "expect((() => { const obj = { a: 1 }; Object.preventExtensions(obj); obj.b = 2; return obj.a === 1 && obj.b === undefined; })()).toBe(true)"
      },
    ],
    hints: ['Use try/catch to test strict mode behavior'],
    tags: ['Object', 'preventExtensions', 'static-method', 'strict-mode'],
    usageExample: {
      code: `// Prevent new properties from being added
const obj = { a: 1 }
Object.preventExtensions(obj)
obj.b = 2    // silently ignored
Object.keys(obj)   // → ['a']`,
      explanation: {
        en: 'Use Object.preventExtensions() to lock an object so no new properties can be added, while still allowing modifications to existing ones.',
        es: 'Usa Object.preventExtensions() para bloquear un objeto y que no se puedan añadir nuevas propiedades, aunque las existentes sí puedan modificarse.',
      },
    },
  },
]
