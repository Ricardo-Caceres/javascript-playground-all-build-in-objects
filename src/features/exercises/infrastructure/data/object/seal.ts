import type { Exercise } from '@/shared/types/exercises'

export const sealExercises: Exercise[] = [
  {
    slug: 'object-seal-1',
    title: 'Object.seal() — basics',
    description: `## Object.seal()

\`Object.seal(obj)\` prevents new properties from being added AND makes all existing properties non-configurable. Writable properties can still have their values changed.

**Challenge:** Implement \`sealObject(obj)\` that seals the object and returns it.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.seal',
    initialCode: `function sealObject(obj) {
  // Seal the object and return it
}`,
    solution: `function sealObject(obj) {
  return Object.seal(obj);
}`,
    tests: [
      {
        description: 'Returns the same object',
        assertion: "(() => { const obj = { a: 1 }; const result = Object.seal(obj); return result === obj; })()"
      },
      {
        description: 'Object is sealed after Object.seal',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Cannot add new property (sloppy fail)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.b = 2; return obj.b === undefined; })()"
      },
      {
        description: 'Can modify existing writable properties',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.a = 99; return obj.a === 99; })()"
      },
      {
        description: 'Cannot delete properties (sloppy fail)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); delete obj.a; return obj.a === 1; })()"
      },
    ],
    hints: ['seal prevents structural changes but allows value changes'],
    tags: ['Object', 'seal', 'static-method', 'sealed'],
  },
  {
    slug: 'object-seal-2',
    title: 'Object.seal() — cannot delete properties',
    description: `## Object.seal() — deletion blocked

After sealing, you cannot delete properties from the object (in sloppy mode, the delete silently fails; in strict mode, it throws).

**Challenge:** Demonstrate that property deletion silently fails on a sealed object.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.seal',
    initialCode: `function tryDelete(obj, key) {
  // Seal obj, then try to delete the key
  // Return whether the key still exists
}`,
    solution: `function tryDelete(obj, key) {
  Object.seal(obj);
  delete obj[key]; // silently fails in sloppy mode
  return key in obj;
}`,
    tests: [
      {
        description: 'Property still exists after delete on sealed object',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); delete obj.a; return 'a' in obj; })()"
      },
      {
        description: 'Strict mode delete throws TypeError',
        assertion: "(() => { try { 'use strict'; const obj = { a: 1 }; Object.seal(obj); delete obj.a; return false; } catch(e) { return e instanceof TypeError; } })()"
      },
      {
        description: 'Unsealed object property can be deleted',
        assertion: "(() => { const obj = { a: 1 }; delete obj.a; return !('a' in obj); })()"
      },
      {
        description: 'isSealed confirms sealed state',
        assertion: "(() => { const obj = { a: 1, b: 2 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Object value readable after failed delete',
        assertion: "(() => { const obj = { name: 'Alice' }; Object.seal(obj); delete obj.name; return obj.name === 'Alice'; })()"
      },
    ],
    hints: ['In sloppy mode, delete on sealed objects silently fails'],
    tags: ['Object', 'seal', 'static-method', 'delete'],
  },
  {
    slug: 'object-seal-3',
    title: 'Object.seal() — writable properties remain writable',
    description: `## Object.seal() — values can still change

Unlike \`Object.freeze()\`, sealing does NOT make properties non-writable. You can still change values of existing properties.

**Challenge:** Show that a sealed object's properties can still be updated.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.seal',
    initialCode: `function updateSealed(obj, key, value) {
  // Seal the object, then update the value of an existing key
  // Return the updated value
}`,
    solution: `function updateSealed(obj, key, value) {
  Object.seal(obj);
  obj[key] = value;
  return obj[key];
}`,
    tests: [
      {
        description: 'Can update existing property after seal',
        assertion: "(() => { const obj = { score: 0 }; Object.seal(obj); obj.score = 100; return obj.score === 100; })()"
      },
      {
        description: 'Multiple updates to existing property work',
        assertion: "(() => { const obj = { x: 1 }; Object.seal(obj); obj.x = 2; obj.x = 3; return obj.x === 3; })()"
      },
      {
        description: 'Cannot add new property after seal',
        assertion: "(() => { const obj = { x: 1 }; Object.seal(obj); obj.y = 2; return !('y' in obj); })()"
      },
      {
        description: 'Difference: seal allows write, freeze does not',
        assertion: "(() => { const sealed = { a: 1 }; Object.seal(sealed); sealed.a = 2; const frozen = { a: 1 }; Object.freeze(frozen); frozen.a = 2; return sealed.a === 2 && frozen.a === 1; })()"
      },
      {
        description: 'isSealed is true',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
    ],
    hints: ['seal = non-extensible + non-configurable, but writable values still change'],
    tags: ['Object', 'seal', 'static-method', 'writable'],
  },
  {
    slug: 'object-seal-4',
    title: 'Object.seal() — checking with isSealed',
    description: `## Object.seal() — verification

Use \`Object.isSealed(obj)\` to verify whether an object is sealed.

**Challenge:** Implement \`isObjectSealed(obj)\` that returns whether the object is sealed.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.seal',
    initialCode: `function isObjectSealed(obj) {
  // Return whether the object is sealed
}`,
    solution: `function isObjectSealed(obj) {
  return Object.isSealed(obj);
}`,
    tests: [
      {
        description: 'Returns false for plain object',
        assertion: "expect(Object.isSealed({ a: 1 })).toBe(false)"
      },
      {
        description: 'Returns true after Object.seal',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Returns true after Object.freeze',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Returns false after just preventExtensions (non-empty)',
        assertion: "(() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isSealed(obj) === false; })()"
      },
      {
        description: 'Sealed object is also non-extensible',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return !Object.isExtensible(obj); })()"
      },
    ],
    hints: ['isSealed = non-extensible + all properties non-configurable'],
    tags: ['Object', 'seal', 'isSealed', 'static-method'],
  },
  {
    slug: 'object-seal-5',
    title: 'Object.seal() — returns the same object',
    description: `## Object.seal() — in-place mutation

\`Object.seal()\` modifies and returns the **same object** — it does not create a copy.

**Challenge:** Verify that Object.seal() returns the same object reference.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.seal',
    initialCode: `function sealReturnsSame(obj) {
  // Seal the object and verify it returns the same reference
}`,
    solution: `function sealReturnsSame(obj) {
  const sealed = Object.seal(obj);
  return sealed === obj;
}`,
    tests: [
      {
        description: 'Object.seal returns the same reference',
        assertion: "(() => { const obj = { a: 1 }; return Object.seal(obj) === obj; })()"
      },
      {
        description: 'Sealing is in-place, not a copy',
        assertion: "(() => { const obj = { a: 1 }; const sealed = Object.seal(obj); sealed.a = 99; return obj.a === 99; })()"
      },
      {
        description: 'Can chain seal with other operations',
        assertion: "(() => { const obj = Object.seal({ x: 1 }); return Object.isSealed(obj); })()"
      },
      {
        description: 'seal and freeze both return same reference',
        assertion: "(() => { const obj1 = { a: 1 }; const obj2 = { b: 2 }; return Object.seal(obj1) === obj1 && Object.freeze(obj2) === obj2; })()"
      },
      {
        description: 'Multiple seals have no additional effect',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); Object.seal(obj); return Object.isSealed(obj); })()"
      },
    ],
    hints: ['Object.seal, freeze, and preventExtensions all return the modified object'],
    tags: ['Object', 'seal', 'static-method', 'reference'],
  },
]
