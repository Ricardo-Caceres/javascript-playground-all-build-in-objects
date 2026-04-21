import type { Exercise } from '@/shared/types/exercises'

export const objectConstructorExercises: Exercise[] = [
  {
    slug: 'object-constructor-empty',
    title: 'Object() — create empty object',
    description: `## Object() constructor

\`new Object()\` creates an empty plain object, equivalent to \`{}\`.

**Challenge:** Implement \`createEmpty()\` that returns a new empty object using \`new Object()\`.

\`\`\`ts
createEmpty() // → {}
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object',
    initialCode: `function createEmpty(): object {
  // Use new Object() to create an empty object
}`,
    solution: `function createEmpty(): object {
  return new Object()
}`,
    tests: [
      { description: 'returns an object', assertion:"expect(typeof createEmpty()).toBe('object')" },
      { description: 'returns an empty object', assertion:"expect(createEmpty()).toEqual({})" },
      { description: 'is not null', assertion:"expect(createEmpty() !== null).toBe(true)" },
      { description: 'has no own keys', assertion:"expect(Object.keys(createEmpty())).toHaveLength(0)" },
      { description: 'each call returns a distinct object', assertion:"expect(createEmpty() === createEmpty()).toBe(false)" },
    ],
    hints: [
      '`new Object()` is equivalent to writing `{}`.',
      'Each call creates a brand-new object instance.',
    ],
    tags: ['Object', 'Object constructor', 'beginner'],
    usageExample: {
      code: `// Wrap a value in an Object wrapper
const obj = new Object(42)
typeof obj   // → 'object'
obj.valueOf()  // → 42`,
      explanation: {
        en: 'Use the Object constructor to explicitly wrap a primitive value in an object.',
        es: 'Usa el constructor Object para envolver explícitamente un valor primitivo en un objeto.',
      },
    },
  },
  {
    slug: 'object-constructor-wrap-primitive',
    title: 'Object() — wrap a primitive value',
    description: `## Object() wrapping primitives

When called as \`Object(value)\` with a primitive, it returns the boxed wrapper object (e.g. a \`Number\` object for numbers).

**Challenge:** Implement \`wrapValue(val)\` that uses \`Object(val)\` to wrap a primitive and returns the result.

\`\`\`ts
typeof Object(42)     // → 'object'
typeof Object('hi')   // → 'object'
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object',
    initialCode: `function wrapValue(val: unknown): object {
  // Use Object(val) to wrap the primitive value
}`,
    solution: `function wrapValue(val: unknown): object {
  return Object(val)
}`,
    tests: [
      { description: 'wrapping a number returns an object', assertion:"expect(typeof wrapValue(42)).toBe('object')" },
      { description: 'wrapping a string returns an object', assertion:"expect(typeof wrapValue('hi')).toBe('object')" },
      { description: 'wrapping a boolean returns an object', assertion:"expect(typeof wrapValue(true)).toBe('object')" },
      { description: 'primitive value is preserved inside', assertion:"expect(wrapValue(99).valueOf()).toBe(99)" },
      { description: 'wrapped string valueOf returns original', assertion:"expect(wrapValue('abc').valueOf()).toBe('abc')" },
    ],
    hints: [
      '`Object(42)` creates a `Number` object — its `valueOf()` returns the original primitive.',
      'Boxed wrappers are rarely used directly, but this demonstrates the constructor behaviour.',
    ],
    tags: ['Object', 'Object constructor', 'wrapper', 'beginner'],
    usageExample: {
      code: `// Wrap a value in an Object wrapper
const obj = new Object(42)
typeof obj   // → 'object'
obj.valueOf()  // → 42`,
      explanation: {
        en: 'Use the Object constructor to explicitly wrap a primitive value in an object.',
        es: 'Usa el constructor Object para envolver explícitamente un valor primitivo en un objeto.',
      },
    },
  },
  {
    slug: 'object-constructor-null',
    title: 'Object(null) — returns empty object',
    description: `## Object(null) and Object(undefined)

Calling \`Object(null)\` or \`Object(undefined)\` does **not** throw — it returns a new empty plain object \`{}\`.

**Challenge:** Implement \`fromNull()\` that calls \`Object(null)\` and returns the result.

\`\`\`ts
fromNull() // → {}
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object',
    initialCode: `function fromNull(): object {
  // Call Object(null) and return the result
}`,
    solution: `function fromNull(): object {
  return Object(null)
}`,
    tests: [
      { description: 'returns an object', assertion:"expect(typeof fromNull()).toBe('object')" },
      { description: 'is not null', assertion:"expect(fromNull() !== null).toBe(true)" },
      { description: 'equals an empty object', assertion:"expect(fromNull()).toEqual({})" },
      { description: 'has no own keys', assertion:"expect(Object.keys(fromNull())).toHaveLength(0)" },
      { description: 'Object(undefined) also returns empty object', assertion:"expect(Object(undefined)).toEqual({})" },
    ],
    hints: [
      '`Object(null)` safely returns `{}` — it does not throw.',
      'Both `null` and `undefined` produce an empty plain object when passed to `Object()`.',
    ],
    tags: ['Object', 'Object constructor', 'null', 'beginner'],
    usageExample: {
      code: `// Wrap a value in an Object wrapper
const obj = new Object(42)
typeof obj   // → 'object'
obj.valueOf()  // → 42`,
      explanation: {
        en: 'Use the Object constructor to explicitly wrap a primitive value in an object.',
        es: 'Usa el constructor Object para envolver explícitamente un valor primitivo en un objeto.',
      },
    },
  },
  {
    slug: 'object-constructor-undefined',
    title: 'Object(undefined) — returns empty object',
    description: `## Object(undefined)

Like \`Object(null)\`, passing \`undefined\` to \`Object()\` returns a new empty object.

**Challenge:** Implement \`fromUndefined()\` that calls \`Object(undefined)\` and returns it.

\`\`\`ts
fromUndefined() // → {}
\`\`\``,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object',
    initialCode: `function fromUndefined(): object {
  // Call Object(undefined) and return the result
}`,
    solution: `function fromUndefined(): object {
  return Object(undefined)
}`,
    tests: [
      { description: 'returns an object', assertion:"expect(typeof fromUndefined()).toBe('object')" },
      { description: 'is not null', assertion:"expect(fromUndefined() !== null).toBe(true)" },
      { description: 'equals empty object', assertion:"expect(fromUndefined()).toEqual({})" },
      { description: 'has no own enumerable keys', assertion:"expect(Object.keys(fromUndefined())).toHaveLength(0)" },
      { description: 'each call returns a new object', assertion:"expect(fromUndefined() === fromUndefined()).toBe(false)" },
    ],
    hints: [
      '`Object(undefined)` behaves exactly like `new Object()` or `{}`.',
      'This is consistent with `Object(null)` — both nullish values produce `{}`.',
    ],
    tags: ['Object', 'Object constructor', 'undefined', 'beginner'],
    usageExample: {
      code: `// Wrap a value in an Object wrapper
const obj = new Object(42)
typeof obj   // → 'object'
obj.valueOf()  // → 42`,
      explanation: {
        en: 'Use the Object constructor to explicitly wrap a primitive value in an object.',
        es: 'Usa el constructor Object para envolver explícitamente un valor primitivo en un objeto.',
      },
    },
  },
  {
    slug: 'object-constructor-same-reference',
    title: 'Object(obj) — returns the same reference',
    description: `## Object() with an existing object

When you pass an existing object to \`Object(obj)\`, it returns **the same reference** — it does not create a copy.

**Challenge:** Implement \`identityWrap(obj)\` that passes \`obj\` through \`Object()\` and returns the result.

\`\`\`ts
const o = { a: 1 }
identityWrap(o) === o // → true
\`\`\``,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object',
    initialCode: `function identityWrap(obj: object): object {
  // Pass obj through Object() and return the result
}`,
    solution: `function identityWrap(obj: object): object {
  return Object(obj)
}`,
    tests: [
      { description: 'returns the same reference', assertion:"const o = { a: 1 }; expect(identityWrap(o) === o).toBe(true)" },
      { description: 'mutations on result affect original', assertion:"const o = { x: 1 }; identityWrap(o).x = 99; expect(o.x).toBe(99)" },
      { description: 'works with array', assertion:"const a = [1, 2]; expect(identityWrap(a) === a).toBe(true)" },
      { description: 'result has same keys', assertion:"const o = { k: 'v' }; expect(Object.keys(identityWrap(o))).toEqual(['k'])" },
      { description: 'result deep-equals original', assertion:"const o = { n: 42 }; expect(identityWrap(o)).toEqual({ n: 42 })" },
    ],
    hints: [
      'When the argument is already an object, `Object(obj)` returns the same reference unchanged.',
      'This is different from `Object.assign({}, obj)` which creates a shallow copy.',
    ],
    tags: ['Object', 'Object constructor', 'reference', 'intermediate'],
    usageExample: {
      code: `// Wrap a value in an Object wrapper
const obj = new Object(42)
typeof obj   // → 'object'
obj.valueOf()  // → 42`,
      explanation: {
        en: 'Use the Object constructor to explicitly wrap a primitive value in an object.',
        es: 'Usa el constructor Object para envolver explícitamente un valor primitivo en un objeto.',
      },
    },
  },
]
