import type { Exercise } from '@/shared/types/exercises'

export const reflectSetExercises: Exercise[] = [
  {
    slug: 'reflect-set-basic',
    title: 'Reflect.set() — basic property write',
    description: `## Reflect.set(target, key, value)

\`Reflect.set()\` sets a property on an object and returns \`true\` on success.

**Challenge:** Verify that after \`Reflect.set(obj, 'x', 42)\`, \`obj.x === 42\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'set',
    initialCode: `function reflectSetX(): number {
  const obj: { x?: number } = {}
  Reflect.set(obj, 'x', 42)
  return obj.x!
}`,
    solution: `function reflectSetX(): number {
  const obj: { x?: number } = {}
  Reflect.set(obj, 'x', 42)
  return obj.x!
}`,
    tests: [
      { description: 'obj.x is 42', assertion:"const obj = {}; Reflect.set(obj, 'x', 42); expect(obj.x).toBe(42)" },
      { description: 'result equals 42', assertion:"const obj = {}; Reflect.set(obj, 'x', 42); expect(obj.x === 42).toBe(true)" },
      { description: 'result is number', assertion:"const obj = {}; Reflect.set(obj, 'x', 42); expect(typeof obj.x).toBe('number')" },
      { description: 'result is truthy', assertion:"const obj = {}; Reflect.set(obj, 'x', 42); expect(obj.x).toBeTruthy()" },
      { description: 'set different value', assertion:"const obj = {}; Reflect.set(obj, 'x', 7); expect(obj.x).toBe(7)" },
    ],
    hints: [
      '`Reflect.set(target, key, value)` is a functional form of `target[key] = value`.',
    ],
    tags: ['Reflect', 'set', 'beginner'],
    usageExample: {
      code: `const obj = {}
Reflect.set(obj, 'name', 'Alice')
console.log(obj.name) // → 'Alice'
// Equivalent to: obj['name'] = 'Alice'`,
      explanation: {
        en: 'Reflect.set() assigns a value to a property on an object, returning true on success.',
        es: 'Reflect.set() asigna un valor a una propiedad de un objeto, devolviendo true en caso de éxito.',
      },
    },
  },
  {
    slug: 'reflect-set-returns-true',
    title: 'Reflect.set() — returns true on success',
    description: `## Reflect.set() return value

\`Reflect.set()\` returns \`true\` when the assignment succeeds.

**Challenge:** Verify that \`Reflect.set({}, 'x', 1)\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'set',
    initialCode: `function reflectSetReturnsTrue(): boolean {
  return Reflect.set({}, 'x', 1)
}`,
    solution: `function reflectSetReturnsTrue(): boolean {
  return Reflect.set({}, 'x', 1)
}`,
    tests: [
      { description: 'Reflect.set returns true', assertion:"expect(Reflect.set({}, 'x', 1)).toBe(true)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.set({}, 'x', 1)).toBe('boolean')" },
      { description: 'result is truthy', assertion:"expect(Reflect.set({}, 'x', 1)).toBeTruthy()" },
      { description: 'equals true', assertion:"expect(Reflect.set({}, 'x', 1) === true).toBe(true)" },
      { description: 'set string also returns true', assertion:"expect(Reflect.set({}, 'y', 'hello')).toBe(true)" },
    ],
    hints: [
      '`Reflect.set` returns a boolean indicating success.',
    ],
    tags: ['Reflect', 'set', 'beginner'],
    usageExample: {
      code: `const obj = {}
Reflect.set(obj, 'name', 'Alice')
console.log(obj.name) // → 'Alice'
// Equivalent to: obj['name'] = 'Alice'`,
      explanation: {
        en: 'Reflect.set() assigns a value to a property on an object, returning true on success.',
        es: 'Reflect.set() asigna un valor a una propiedad de un objeto, devolviendo true en caso de éxito.',
      },
    },
  },
  {
    slug: 'reflect-set-array',
    title: 'Reflect.set() — set array element',
    description: `## Reflect.set() on arrays

\`Reflect.set()\` can set elements on arrays using a numeric index.

**Challenge:** Verify that after \`Reflect.set(arr, 0, 'first')\`, \`arr[0] === 'first'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'set',
    initialCode: `function reflectSetArrayElement(): string {
  const arr: string[] = []
  Reflect.set(arr, 0, 'first')
  return arr[0]
}`,
    solution: `function reflectSetArrayElement(): string {
  const arr: string[] = []
  Reflect.set(arr, 0, 'first')
  return arr[0]
}`,
    tests: [
      { description: 'arr[0] is first', assertion:"const arr = []; Reflect.set(arr, 0, 'first'); expect(arr[0]).toBe('first')" },
      { description: 'result equals first', assertion:"const arr = []; Reflect.set(arr, 0, 'first'); expect(arr[0] === 'first').toBe(true)" },
      { description: 'result is string', assertion:"const arr = []; Reflect.set(arr, 0, 'first'); expect(typeof arr[0]).toBe('string')" },
      { description: 'arr has length 1', assertion:"const arr = []; Reflect.set(arr, 0, 'first'); expect(arr).toHaveLength(1)" },
      { description: 'arr contains first', assertion:"const arr = []; Reflect.set(arr, 0, 'first'); expect(arr).toContain('first')" },
    ],
    hints: [
      'Use a numeric index to set array elements with `Reflect.set`.',
    ],
    tags: ['Reflect', 'set', 'array', 'beginner'],
    usageExample: {
      code: `const obj = {}
Reflect.set(obj, 'name', 'Alice')
console.log(obj.name) // → 'Alice'
// Equivalent to: obj['name'] = 'Alice'`,
      explanation: {
        en: 'Reflect.set() assigns a value to a property on an object, returning true on success.',
        es: 'Reflect.set() asigna un valor a una propiedad de un objeto, devolviendo true en caso de éxito.',
      },
    },
  },
  {
    slug: 'reflect-set-typeof',
    title: 'Reflect.set — typeof',
    description: `## typeof Reflect.set

\`Reflect.set\` is a static method on \`Reflect\`, so \`typeof Reflect.set\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Reflect.set\` returns \`'function'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'set',
    initialCode: `function checkReflectSetType(): string {
  return typeof Reflect.set
}`,
    solution: `function checkReflectSetType(): string {
  return typeof Reflect.set
}`,
    tests: [
      { description: 'typeof Reflect.set is function', assertion:"expect(typeof Reflect.set).toBe('function')" },
      { description: 'Reflect.set is truthy', assertion:'expect(Reflect.set).toBeTruthy()' },
      { description: 'Reflect.set not null', assertion:'expect(Reflect.set !== null).toBe(true)' },
      { description: 'Reflect.set not undefined', assertion:'expect(Reflect.set !== undefined).toBe(true)' },
      { description: 'equals function string', assertion:"expect(typeof Reflect.set === 'function').toBe(true)" },
    ],
    hints: [
      '`Reflect` methods are all plain functions.',
    ],
    tags: ['Reflect', 'set', 'typeof', 'beginner'],
    usageExample: {
      code: `const obj = {}
Reflect.set(obj, 'name', 'Alice')
console.log(obj.name) // → 'Alice'
// Equivalent to: obj['name'] = 'Alice'`,
      explanation: {
        en: 'Reflect.set() assigns a value to a property on an object, returning true on success.',
        es: 'Reflect.set() asigna un valor a una propiedad de un objeto, devolviendo true en caso de éxito.',
      },
    },
  },
  {
    slug: 'reflect-set-update-existing',
    title: 'Reflect.set() — update existing property',
    description: `## Reflect.set() — overwrite

\`Reflect.set()\` can overwrite existing properties just like \`obj[key] = value\`.

**Challenge:** Verify that after \`Reflect.set(obj, 'x', 99)\`, \`obj.x === 99\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'set',
    initialCode: `function reflectSetUpdate(): number {
  const obj = { x: 1 }
  Reflect.set(obj, 'x', 99)
  return obj.x
}`,
    solution: `function reflectSetUpdate(): number {
  const obj = { x: 1 }
  Reflect.set(obj, 'x', 99)
  return obj.x
}`,
    tests: [
      { description: 'obj.x is 99', assertion:"const obj = {x: 1}; Reflect.set(obj, 'x', 99); expect(obj.x).toBe(99)" },
      { description: 'result equals 99', assertion:"const obj = {x: 1}; Reflect.set(obj, 'x', 99); expect(obj.x === 99).toBe(true)" },
      { description: 'result is number', assertion:"const obj = {x: 1}; Reflect.set(obj, 'x', 99); expect(typeof obj.x).toBe('number')" },
      { description: 'result is truthy', assertion:"const obj = {x: 1}; Reflect.set(obj, 'x', 99); expect(obj.x).toBeTruthy()" },
      { description: 'old value is gone', assertion:"const obj = {x: 1}; Reflect.set(obj, 'x', 99); expect(obj.x !== 1).toBe(true)" },
    ],
    hints: [
      '`Reflect.set` overwrites existing property values just like regular assignment.',
    ],
    tags: ['Reflect', 'set', 'beginner'],
    usageExample: {
      code: `const obj = {}
Reflect.set(obj, 'name', 'Alice')
console.log(obj.name) // → 'Alice'
// Equivalent to: obj['name'] = 'Alice'`,
      explanation: {
        en: 'Reflect.set() assigns a value to a property on an object, returning true on success.',
        es: 'Reflect.set() asigna un valor a una propiedad de un objeto, devolviendo true en caso de éxito.',
      },
    },
  },
]
