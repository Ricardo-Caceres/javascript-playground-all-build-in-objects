import type { Exercise } from '@/shared/types/exercises'

export const freezeExercises: Exercise[] = [
  {
    slug: 'object-freeze-basic',
    title: 'Object.freeze() — prevent modification',
    description: `## Object.freeze()

\`Object.freeze(obj)\` makes an object immutable: you cannot add, remove, or change its properties. In non-strict mode, modifications silently fail.

**Challenge:** Implement \`freezeObj(obj)\` that freezes \`obj\` and returns it.

\`\`\`ts
const o = freezeObj({ a: 1 })
o.a = 99   // silently fails
o.a        // → 1
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.freeze',
    initialCode: `function freezeObj<T extends object>(obj: T): T {
  // Use Object.freeze to freeze and return obj
}`,
    solution: `function freezeObj<T extends object>(obj: T): T {
  return Object.freeze(obj)
}`,
    tests: [
      { description: 'assignment silently fails', assertion:"const o = freezeObj({ a: 1 }); o.a = 99; expect(o.a).toBe(1)" },
      { description: 'adding a property silently fails', assertion:"const o = freezeObj({}); o.newKey = 1; expect(o.newKey).toBeUndefined()" },
      { description: 'deleting a property silently fails', assertion:"const o = freezeObj({ x: 1 }); delete o.x; expect(o.x).toBe(1)" },
      { description: 'returns the same reference', assertion:"const o = { a: 1 }; expect(freezeObj(o) === o).toBe(true)" },
      { description: 'existing values are readable', assertion:"expect(freezeObj({ name: 'Alice' }).name).toBe('Alice')" },
    ],
    hints: [
      '`Object.freeze` returns the same object passed to it.',
      'In sloppy mode, attempts to modify a frozen object silently do nothing.',
    ],
    tags: ['Object', 'Object.freeze', 'immutable', 'beginner'],
    usageExample: {
      code: `// Make an object immutable
const obj = Object.freeze({ x: 1 })
obj.x = 99   // silently ignored
obj.x        // → 1`,
      explanation: {
        en: 'Use Object.freeze() to make an object immutable, preventing any additions, deletions, or value changes.',
        es: 'Usa Object.freeze() para hacer un objeto inmutable, evitando adiciones, eliminaciones o cambios de valor.',
      },
    },
  },
  {
    slug: 'object-freeze-is-frozen',
    title: 'Object.freeze() — Object.isFrozen returns true',
    description: `## Object.isFrozen()

After freezing, \`Object.isFrozen(obj)\` returns \`true\`. Unfrozen objects return \`false\`.

**Challenge:** Implement \`checkFrozen(obj)\` that freezes \`obj\` and returns whether it is frozen.

\`\`\`ts
checkFrozen({ a: 1 }) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.freeze',
    initialCode: `function checkFrozen(obj: object): boolean {
  // Freeze obj then return Object.isFrozen(obj)
}`,
    solution: `function checkFrozen(obj: object): boolean {
  Object.freeze(obj)
  return Object.isFrozen(obj)
}`,
    tests: [
      { description: 'returns true after freeze', assertion:"expect(checkFrozen({ a: 1 })).toBe(true)" },
      { description: 'non-frozen object is not frozen', assertion:"expect(Object.isFrozen({ a: 1 })).toBe(false)" },
      { description: 'empty object becomes frozen', assertion:"expect(checkFrozen({})).toBe(true)" },
      { description: 'Object.isFrozen true after manual freeze', assertion:"const o = {}; Object.freeze(o); expect(Object.isFrozen(o)).toBe(true)" },
      { description: 'frozen object keeps its values', assertion:"const o = { x: 5 }; Object.freeze(o); expect(o.x).toBe(5)" },
    ],
    hints: [
      '`Object.isFrozen` returns `true` if the object has been frozen.',
      'Note that `Object.isFrozen({})` on a pre-frozen empty object may already be `true` in some engines.',
    ],
    tags: ['Object', 'Object.freeze', 'Object.isFrozen', 'beginner'],
    usageExample: {
      code: `// Make an object immutable
const obj = Object.freeze({ x: 1 })
obj.x = 99   // silently ignored
obj.x        // → 1`,
      explanation: {
        en: 'Use Object.freeze() to make an object immutable, preventing any additions, deletions, or value changes.',
        es: 'Usa Object.freeze() para hacer un objeto inmutable, evitando adiciones, eliminaciones o cambios de valor.',
      },
    },
  },
  {
    slug: 'object-freeze-same-reference',
    title: 'Object.freeze() — returns same reference',
    description: `## Object.freeze() return value

\`Object.freeze\` returns the **same object** that was passed in — not a copy.

**Challenge:** Implement \`frozenRef(obj)\` that freezes \`obj\` and returns whether the frozen result \`===\` the original.

\`\`\`ts
frozenRef({ a: 1 }) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.freeze',
    initialCode: `function frozenRef(obj: object): boolean {
  // Freeze and check that the return value === obj
}`,
    solution: `function frozenRef(obj: object): boolean {
  return Object.freeze(obj) === obj
}`,
    tests: [
      { description: 'returns true (same reference)', assertion:"expect(frozenRef({ a: 1 })).toBe(true)" },
      { description: 'also true for empty object', assertion:"expect(frozenRef({})).toBe(true)" },
      { description: 'direct reference check', assertion:"const o = { x: 1 }; expect(Object.freeze(o) === o).toBe(true)" },
      { description: 'frozen object equals original', assertion:"const o = { a: 2 }; const f = Object.freeze(o); expect(f).toEqual(o)" },
      { description: 'object is still accessible after freeze', assertion:"const o = Object.freeze({ n: 7 }); expect(o.n).toBe(7)" },
    ],
    hints: [
      '`Object.freeze` mutates and returns the same reference, unlike `Object.assign` which can take a fresh target.',
    ],
    tags: ['Object', 'Object.freeze', 'reference', 'beginner'],
    usageExample: {
      code: `// Make an object immutable
const obj = Object.freeze({ x: 1 })
obj.x = 99   // silently ignored
obj.x        // → 1`,
      explanation: {
        en: 'Use Object.freeze() to make an object immutable, preventing any additions, deletions, or value changes.',
        es: 'Usa Object.freeze() para hacer un objeto inmutable, evitando adiciones, eliminaciones o cambios de valor.',
      },
    },
  },
  {
    slug: 'object-freeze-shallow',
    title: 'Object.freeze() — shallow (nested objects not frozen)',
    description: `## Object.freeze() is shallow

Freezing is **shallow**: the top-level properties of the object cannot be changed, but nested objects are NOT automatically frozen.

**Challenge:** Implement \`shallowFreezeTest(obj)\` that freezes \`obj\` and returns whether a nested object's property can still be changed.

\`\`\`ts
const o = { nested: { a: 1 } }
shallowFreezeTest(o)
o.nested.a = 99  // this WORKS — nested is not frozen
o.nested.a       // → 99
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.freeze',
    initialCode: `function shallowFreezeTest(obj: { nested: { a: number } }): boolean {
  // Freeze obj, mutate obj.nested.a, then return whether obj.nested.a changed
}`,
    solution: `function shallowFreezeTest(obj: { nested: { a: number } }): boolean {
  Object.freeze(obj)
  obj.nested.a = 99
  return obj.nested.a === 99
}`,
    tests: [
      { description: 'nested object can still be mutated', assertion:"expect(shallowFreezeTest({ nested: { a: 1 } })).toBe(true)" },
      { description: 'outer property cannot be changed', assertion:"const o = Object.freeze({ nested: { a: 1 } }); o.nested = {}; expect(o.nested).toEqual({ a: 1 })" },
      { description: 'nested object is not frozen', assertion:"const o = Object.freeze({ inner: { x: 1 } }); expect(Object.isFrozen(o.inner)).toBe(false)" },
      { description: 'outer object is frozen', assertion:"const o = Object.freeze({ inner: { x: 1 } }); expect(Object.isFrozen(o)).toBe(true)" },
      { description: 'can add key to nested', assertion:"const o = Object.freeze({ child: {} }); o.child.newKey = 1; expect(o.child.newKey).toBe(1)" },
    ],
    hints: [
      '`Object.freeze` only prevents changes to **own properties** of the frozen object.',
      'To deeply freeze an object you need to recursively freeze each nested object.',
    ],
    tags: ['Object', 'Object.freeze', 'shallow', 'intermediate'],
    usageExample: {
      code: `// Make an object immutable
const obj = Object.freeze({ x: 1 })
obj.x = 99   // silently ignored
obj.x        // → 1`,
      explanation: {
        en: 'Use Object.freeze() to make an object immutable, preventing any additions, deletions, or value changes.',
        es: 'Usa Object.freeze() para hacer un objeto inmutable, evitando adiciones, eliminaciones o cambios de valor.',
      },
    },
  },
  {
    slug: 'object-freeze-add-property-fails',
    title: 'Object.freeze() — adding a property fails silently',
    description: `## Object.freeze() — no new properties

After freezing, you cannot add new properties to an object. In non-strict mode this fails silently.

**Challenge:** Implement \`tryAddToFrozen()\` that creates a frozen object \`{ a: 1 }\`, tries to add \`b: 2\`, and returns the object's key count.

\`\`\`ts
tryAddToFrozen() // → 1 (only 'a', 'b' was not added)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.freeze',
    initialCode: `function tryAddToFrozen(): number {
  // Freeze { a: 1 }, try to add b: 2, return Object.keys length
}`,
    solution: `function tryAddToFrozen(): number {
  const o = Object.freeze({ a: 1 }) as any
  o.b = 2
  return Object.keys(o).length
}`,
    tests: [
      { description: 'returns 1 (new key not added)', assertion:"expect(tryAddToFrozen()).toBe(1)" },
      { description: 'frozen object only has original key', assertion:"const o = Object.freeze({ a: 1 }); o.b = 2; expect(Object.keys(o)).toEqual(['a'])" },
      { description: 'b is undefined on frozen object', assertion:"const o = Object.freeze({ a: 1 }); o.b = 2; expect(o.b).toBeUndefined()" },
      { description: 'original key still accessible', assertion:"const o = Object.freeze({ a: 1 }); o.b = 2; expect(o.a).toBe(1)" },
      { description: 'object is frozen', assertion:"const o = Object.freeze({}); expect(Object.isFrozen(o)).toBe(true)" },
    ],
    hints: [
      'Adding a property to a frozen object silently fails in sloppy mode.',
      'Check the key count with `Object.keys(o).length`.',
    ],
    tags: ['Object', 'Object.freeze', 'immutable', 'beginner'],
    usageExample: {
      code: `// Make an object immutable
const obj = Object.freeze({ x: 1 })
obj.x = 99   // silently ignored
obj.x        // → 1`,
      explanation: {
        en: 'Use Object.freeze() to make an object immutable, preventing any additions, deletions, or value changes.',
        es: 'Usa Object.freeze() para hacer un objeto inmutable, evitando adiciones, eliminaciones o cambios de valor.',
      },
    },
  },
]
