import type { Exercise } from '@/shared/types/exercises'

export const reflectHasExercises: Exercise[] = [
  {
    slug: 'reflect-has-existing-key',
    title: 'Reflect.has() — existing key returns true',
    description: `## Reflect.has(target, key)

\`Reflect.has()\` is the functional equivalent of the \`in\` operator.

**Challenge:** Verify that \`Reflect.has({x: 1}, 'x')\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'has',
    initialCode: `function reflectHasX(): boolean {
  return Reflect.has({ x: 1 }, 'x')
}`,
    solution: `function reflectHasX(): boolean {
  return Reflect.has({ x: 1 }, 'x')
}`,
    tests: [
      { description: 'Reflect.has({x:1}, x) is true', assertion:"expect(Reflect.has({x: 1}, 'x')).toBe(true)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.has({x: 1}, 'x')).toBe('boolean')" },
      { description: 'result is truthy', assertion:"expect(Reflect.has({x: 1}, 'x')).toBeTruthy()" },
      { description: 'equals true', assertion:"expect(Reflect.has({x: 1}, 'x') === true).toBe(true)" },
      { description: 'different key also true', assertion:"expect(Reflect.has({a: 1}, 'a')).toBe(true)" },
    ],
    hints: [
      '`Reflect.has(target, key)` is equivalent to `key in target`.',
    ],
    tags: ['Reflect', 'has', 'beginner'],
  },
  {
    slug: 'reflect-has-missing-key',
    title: 'Reflect.has() — missing key returns false',
    description: `## Reflect.has() — missing key

When the key does not exist in the object or its prototype chain, \`Reflect.has()\` returns \`false\`.

**Challenge:** Verify that \`Reflect.has({}, 'missing')\` returns \`false\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'has',
    initialCode: `function reflectHasMissing(): boolean {
  return Reflect.has({}, 'missing')
}`,
    solution: `function reflectHasMissing(): boolean {
  return Reflect.has({}, 'missing')
}`,
    tests: [
      { description: 'missing key returns false', assertion:"expect(Reflect.has({}, 'missing')).toBe(false)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.has({}, 'missing')).toBe('boolean')" },
      { description: 'result is falsy', assertion:"expect(Reflect.has({}, 'missing')).toBeFalsy()" },
      { description: 'equals false', assertion:"expect(Reflect.has({}, 'missing') === false).toBe(true)" },
      { description: 'not true', assertion:"expect(Reflect.has({}, 'missing') !== true).toBe(true)" },
    ],
    hints: [
      '`Reflect.has` returns `false` for keys that do not exist on the target or its prototype chain.',
    ],
    tags: ['Reflect', 'has', 'beginner'],
  },
  {
    slug: 'reflect-has-array-index',
    title: 'Reflect.has() — array index as key',
    description: `## Reflect.has() with array indices

Array indices are property keys. \`Reflect.has([1,2,3], 0)\` checks if index \`0\` exists.

**Challenge:** Verify that \`Reflect.has([1,2,3], 0)\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'has',
    initialCode: `function reflectHasArrayIndex(): boolean {
  return Reflect.has([1, 2, 3], 0)
}`,
    solution: `function reflectHasArrayIndex(): boolean {
  return Reflect.has([1, 2, 3], 0)
}`,
    tests: [
      { description: 'index 0 exists', assertion:'expect(Reflect.has([1,2,3], 0)).toBe(true)' },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.has([1,2,3], 0)).toBe('boolean')" },
      { description: 'result is truthy', assertion:'expect(Reflect.has([1,2,3], 0)).toBeTruthy()' },
      { description: 'out-of-bounds index is false', assertion:'expect(Reflect.has([1,2,3], 10)).toBe(false)' },
      { description: 'length key exists', assertion:"expect(Reflect.has([1,2,3], 'length')).toBe(true)" },
    ],
    hints: [
      'Array indices are numeric string keys on the array object.',
    ],
    tags: ['Reflect', 'has', 'array', 'beginner'],
  },
  {
    slug: 'reflect-has-typeof',
    title: 'Reflect.has — typeof',
    description: `## typeof Reflect.has

\`Reflect.has\` is a static method, so \`typeof Reflect.has\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Reflect.has\` returns \`'function'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'has',
    initialCode: `function checkReflectHasType(): string {
  return typeof Reflect.has
}`,
    solution: `function checkReflectHasType(): string {
  return typeof Reflect.has
}`,
    tests: [
      { description: 'typeof Reflect.has is function', assertion:"expect(typeof Reflect.has).toBe('function')" },
      { description: 'Reflect.has is truthy', assertion:'expect(Reflect.has).toBeTruthy()' },
      { description: 'Reflect.has not null', assertion:'expect(Reflect.has !== null).toBe(true)' },
      { description: 'Reflect.has not undefined', assertion:'expect(Reflect.has !== undefined).toBe(true)' },
      { description: 'equals function string', assertion:"expect(typeof Reflect.has === 'function').toBe(true)" },
    ],
    hints: [
      'All `Reflect` methods are functions.',
    ],
    tags: ['Reflect', 'has', 'typeof', 'beginner'],
  },
  {
    slug: 'reflect-has-second-key',
    title: 'Reflect.has() — check second key',
    description: `## Reflect.has() — multiple keys

\`Reflect.has()\` can check for any key in an object.

**Challenge:** Verify that \`Reflect.has({a: 1, b: 2}, 'b')\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'has',
    initialCode: `function reflectHasB(): boolean {
  return Reflect.has({ a: 1, b: 2 }, 'b')
}`,
    solution: `function reflectHasB(): boolean {
  return Reflect.has({ a: 1, b: 2 }, 'b')
}`,
    tests: [
      { description: 'b exists', assertion:"expect(Reflect.has({a:1, b:2}, 'b')).toBe(true)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.has({a:1, b:2}, 'b')).toBe('boolean')" },
      { description: 'result is truthy', assertion:"expect(Reflect.has({a:1, b:2}, 'b')).toBeTruthy()" },
      { description: 'a also exists', assertion:"expect(Reflect.has({a:1, b:2}, 'a')).toBe(true)" },
      { description: 'c does not exist', assertion:"expect(Reflect.has({a:1, b:2}, 'c')).toBe(false)" },
    ],
    hints: [
      '`Reflect.has` checks the full prototype chain just like the `in` operator.',
    ],
    tags: ['Reflect', 'has', 'beginner'],
  },
]
