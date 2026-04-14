import type { Exercise } from '@/shared/types/exercises'

export const isSealedExercises: Exercise[] = [
  {
    slug: 'object-isSealed-1',
    title: 'Object.isSealed() — plain object',
    description: `## Object.isSealed()

\`Object.isSealed(obj)\` returns \`true\` if the object is non-extensible AND all properties are non-configurable.

A plain object is **not** sealed by default.

**Challenge:** Implement \`checkSealed(obj)\` that returns whether the object is sealed.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isSealed',
    initialCode: `function checkSealed(obj) {
  // Return true if the object is sealed
}`,
    solution: `function checkSealed(obj) {
  return Object.isSealed(obj);
}`,
    tests: [
      {
        description: 'Plain object is not sealed',
        assertion: "expect(Object.isSealed({ a: 1 })).toBe(false)"
      },
      {
        description: 'Empty plain object is not sealed',
        assertion: "expect(Object.isSealed({})).toBe(false)"
      },
      {
        description: 'Object after Object.seal is sealed',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Frozen object is also sealed',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Object.seal returns the same object',
        assertion: "(() => { const obj = { a: 1 }; const result = Object.seal(obj); return result === obj; })()"
      },
    ],
    hints: ['Every frozen object is sealed, but not every sealed object is frozen'],
    tags: ['Object', 'isSealed', 'static-method', 'seal'],
  },
  {
    slug: 'object-isSealed-2',
    title: 'Object.isSealed() — after Object.seal',
    description: `## Object.isSealed() after seal

\`Object.seal()\` prevents adding new properties and makes all existing properties non-configurable. Writable properties can still be written to.

**Challenge:** Seal an object and verify it is sealed, but check that existing properties can still be modified.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.isSealed',
    initialCode: `function sealAndVerify(obj) {
  // Seal the object; return an object with { isSealed, canModify }
}`,
    solution: `function sealAndVerify(obj) {
  Object.seal(obj);
  obj.a = 99;
  return { isSealed: Object.isSealed(obj), canModify: obj.a === 99 };
}`,
    tests: [
      {
        description: 'Object is sealed after Object.seal',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj) === true; })()"
      },
      {
        description: 'Sealed object can modify existing writable props',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.a = 42; return obj.a === 42; })()"
      },
      {
        description: 'Sealed object cannot add new properties (sloppy fail)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.b = 2; return obj.b === undefined; })()"
      },
      {
        description: 'Sealed object cannot delete properties (sloppy fail)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); delete obj.a; return obj.a === 1; })()"
      },
      {
        description: 'Sealed object still responds to property reads',
        assertion: "(() => { const obj = { x: 10, y: 20 }; Object.seal(obj); return obj.x + obj.y === 30; })()"
      },
    ],
    hints: ['Sealing prevents structural changes but not value changes for writable properties'],
    tags: ['Object', 'isSealed', 'seal', 'static-method'],
  },
  {
    slug: 'object-isSealed-3',
    title: 'Object.isSealed() — after Object.freeze',
    description: `## Object.isSealed() — frozen implies sealed

Since \`Object.freeze()\` makes an object non-extensible and all properties non-configurable (and non-writable), a frozen object is always also sealed.

**Challenge:** Demonstrate that a frozen object is also sealed.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isSealed',
    initialCode: `function frozenIsSealed(obj) {
  // Freeze the object and return whether it is sealed
}`,
    solution: `function frozenIsSealed(obj) {
  Object.freeze(obj);
  return Object.isSealed(obj);
}`,
    tests: [
      {
        description: 'Frozen object is also sealed',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isSealed(obj) === true; })()"
      },
      {
        description: 'isFrozen implies isSealed',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); return Object.isFrozen(obj) && Object.isSealed(obj); })()"
      },
      {
        description: 'Sealed does not imply frozen',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return !Object.isFrozen(obj); })()"
      },
      {
        description: 'Frozen object write silently fails',
        assertion: "(() => { const obj = { a: 1 }; Object.freeze(obj); obj.a = 99; return obj.a === 1; })()"
      },
      {
        description: 'Sealed object write succeeds for writable props',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); obj.a = 99; return obj.a === 99; })()"
      },
    ],
    hints: ['freeze is a superset of seal'],
    tags: ['Object', 'isSealed', 'freeze', 'static-method'],
  },
  {
    slug: 'object-isSealed-4',
    title: 'Object.isSealed() — empty non-extensible object',
    description: `## Object.isSealed() — empty + preventExtensions = sealed

An empty object that has been made non-extensible (via \`Object.preventExtensions\`) is considered sealed, because there are no configurable properties to violate the sealed constraint.

**Challenge:** Verify this edge case with \`Object.isSealed()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isSealed',
    initialCode: `function emptyPreventExtensionsSealed() {
  // Create an empty object, prevent extensions, and return isSealed result
}`,
    solution: `function emptyPreventExtensionsSealed() {
  const obj = {};
  Object.preventExtensions(obj);
  return Object.isSealed(obj);
}`,
    tests: [
      {
        description: 'Empty + preventExtensions = sealed',
        assertion: "(() => { const obj = {}; Object.preventExtensions(obj); return Object.isSealed(obj) === true; })()"
      },
      {
        description: 'Non-empty + preventExtensions is NOT sealed (configurable props remain)',
        assertion: "(() => { const obj = { a: 1 }; Object.preventExtensions(obj); return Object.isSealed(obj) === false; })()"
      },
      {
        description: 'Empty plain object is not sealed',
        assertion: "expect(Object.isSealed({})).toBe(false)"
      },
      {
        description: 'Empty frozen object is sealed',
        assertion: "(() => { const obj = {}; Object.freeze(obj); return Object.isSealed(obj); })()"
      },
      {
        description: 'Empty sealed object is also frozen',
        assertion: "(() => { const obj = {}; Object.seal(obj); return Object.isFrozen(obj); })()"
      },
    ],
    hints: ['For empty objects, preventExtensions, seal, and freeze all have the same observable effect'],
    tags: ['Object', 'isSealed', 'preventExtensions', 'static-method'],
  },
  {
    slug: 'object-isSealed-5',
    title: 'Object.isSealed() — using in practice',
    description: `## Object.isSealed() — practical guard

Use \`Object.isSealed()\` to check object integrity before attempting structural changes.

**Challenge:** Implement \`tryDeleteProperty(obj, key)\` that deletes the property only if the object is not sealed, returning whether it was deleted.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.isSealed',
    initialCode: `function tryDeleteProperty(obj, key) {
  // Delete the property only if obj is not sealed
  // Return true if deleted, false otherwise
}`,
    solution: `function tryDeleteProperty(obj, key) {
  if (Object.isSealed(obj)) return false;
  delete obj[key];
  return !(key in obj);
}`,
    tests: [
      {
        description: 'Deletes property on unsealed object',
        assertion: "(() => { const obj = { a: 1, b: 2 }; delete obj.a; return !('a' in obj); })()"
      },
      {
        description: 'Cannot delete from sealed object (returns false)',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); return Object.isSealed(obj) === true; })()"
      },
      {
        description: 'Sealed delete silently fails in sloppy mode',
        assertion: "(() => { const obj = { a: 1 }; Object.seal(obj); delete obj.a; return obj.a === 1; })()"
      },
      {
        description: 'isSealed is false for fresh object',
        assertion: "expect(Object.isSealed({ x: 1 })).toBe(false)"
      },
      {
        description: 'isSealed is true after seal',
        assertion: "(() => { const obj = { x: 1 }; Object.seal(obj); return Object.isSealed(obj); })()"
      },
    ],
    hints: ['isSealed is useful for defensive programming'],
    tags: ['Object', 'isSealed', 'static-method', 'guard'],
  },
]
