import type { Exercise } from '@/shared/types/exercises'

export const reflectDeletePropertyExercises: Exercise[] = [
  {
    slug: 'reflect-delete-property-basic',
    title: 'Reflect.deleteProperty() — delete a property',
    description: `## Reflect.deleteProperty(target, key)

\`Reflect.deleteProperty()\` removes a property from an object and returns \`true\` on success.

**Challenge:** Verify that after \`Reflect.deleteProperty(obj, 'x')\`, \`obj.x\` is \`undefined\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'deleteProperty',
    initialCode: `function reflectDeleteX(): undefined {
  const obj: { x?: number } = { x: 1 }
  Reflect.deleteProperty(obj, 'x')
  return obj.x
}`,
    solution: `function reflectDeleteX(): undefined {
  const obj: { x?: number } = { x: 1 }
  Reflect.deleteProperty(obj, 'x')
  return obj.x
}`,
    tests: [
      { description: 'obj.x is undefined after delete', assertion:"const obj = {x: 1}; Reflect.deleteProperty(obj, 'x'); expect(obj.x).toBeUndefined()" },
      { description: 'x not in obj', assertion:"const obj = {x: 1}; Reflect.deleteProperty(obj, 'x'); expect('x' in obj).toBe(false)" },
      { description: 'obj still exists', assertion:"const obj = {x: 1}; Reflect.deleteProperty(obj, 'x'); expect(obj).toBeTruthy()" },
      { description: 'result is undefined', assertion:"const obj = {x: 1}; Reflect.deleteProperty(obj, 'x'); expect(obj.x !== 1).toBe(true)" },
      { description: 'obj is an object', assertion:"const obj = {x: 1}; Reflect.deleteProperty(obj, 'x'); expect(typeof obj).toBe('object')" },
    ],
    hints: [
      '`Reflect.deleteProperty(target, key)` is equivalent to `delete target[key]`.',
    ],
    tags: ['Reflect', 'deleteProperty', 'beginner'],
  },
  {
    slug: 'reflect-delete-property-returns-true',
    title: 'Reflect.deleteProperty() — returns true',
    description: `## Reflect.deleteProperty() return value

\`Reflect.deleteProperty()\` returns \`true\` when the deletion succeeds (or when the key doesn't exist).

**Challenge:** Verify that \`Reflect.deleteProperty({x: 1}, 'x')\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'deleteProperty',
    initialCode: `function reflectDeleteReturnsTrue(): boolean {
  return Reflect.deleteProperty({ x: 1 }, 'x')
}`,
    solution: `function reflectDeleteReturnsTrue(): boolean {
  return Reflect.deleteProperty({ x: 1 }, 'x')
}`,
    tests: [
      { description: 'returns true', assertion:"expect(Reflect.deleteProperty({x: 1}, 'x')).toBe(true)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.deleteProperty({x: 1}, 'x')).toBe('boolean')" },
      { description: 'result is truthy', assertion:"expect(Reflect.deleteProperty({x: 1}, 'x')).toBeTruthy()" },
      { description: 'equals true', assertion:"expect(Reflect.deleteProperty({x: 1}, 'x') === true).toBe(true)" },
      { description: 'another key also returns true', assertion:"expect(Reflect.deleteProperty({a: 2}, 'a')).toBe(true)" },
    ],
    hints: [
      '`Reflect.deleteProperty` returns `true` for successful deletions.',
    ],
    tags: ['Reflect', 'deleteProperty', 'beginner'],
  },
  {
    slug: 'reflect-delete-property-nonexistent',
    title: 'Reflect.deleteProperty() — nonexistent key',
    description: `## Reflect.deleteProperty() — missing key

Deleting a nonexistent key is not an error — it just returns \`true\`.

**Challenge:** Verify that \`Reflect.deleteProperty({}, 'nonexistent')\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'deleteProperty',
    initialCode: `function reflectDeleteNonexistent(): boolean {
  return Reflect.deleteProperty({}, 'nonexistent')
}`,
    solution: `function reflectDeleteNonexistent(): boolean {
  return Reflect.deleteProperty({}, 'nonexistent')
}`,
    tests: [
      { description: 'nonexistent key returns true', assertion:"expect(Reflect.deleteProperty({}, 'nonexistent')).toBe(true)" },
      { description: 'result is boolean', assertion:"expect(typeof Reflect.deleteProperty({}, 'nonexistent')).toBe('boolean')" },
      { description: 'result is truthy', assertion:"expect(Reflect.deleteProperty({}, 'nonexistent')).toBeTruthy()" },
      { description: 'equals true', assertion:"expect(Reflect.deleteProperty({}, 'nonexistent') === true).toBe(true)" },
      { description: 'no error thrown', assertion:"expect((() => { try { (() => Reflect.deleteProperty({}, 'any'))(); return true; } catch(e) { return false; } })()).toBe(true)" },
    ],
    hints: [
      'Deleting a key that doesn\'t exist is a no-op that returns `true`.',
    ],
    tags: ['Reflect', 'deleteProperty', 'beginner'],
  },
  {
    slug: 'reflect-delete-property-typeof',
    title: 'Reflect.deleteProperty — typeof',
    description: `## typeof Reflect.deleteProperty

\`Reflect.deleteProperty\` is a static method, so \`typeof Reflect.deleteProperty\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Reflect.deleteProperty\` returns \`'function'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'deleteProperty',
    initialCode: `function checkReflectDeleteType(): string {
  return typeof Reflect.deleteProperty
}`,
    solution: `function checkReflectDeleteType(): string {
  return typeof Reflect.deleteProperty
}`,
    tests: [
      { description: 'typeof Reflect.deleteProperty is function', assertion:"expect(typeof Reflect.deleteProperty).toBe('function')" },
      { description: 'Reflect.deleteProperty is truthy', assertion:'expect(Reflect.deleteProperty).toBeTruthy()' },
      { description: 'Reflect.deleteProperty not null', assertion:'expect(Reflect.deleteProperty !== null).toBe(true)' },
      { description: 'Reflect.deleteProperty not undefined', assertion:'expect(Reflect.deleteProperty !== undefined).toBe(true)' },
      { description: 'equals function string', assertion:"expect(typeof Reflect.deleteProperty === 'function').toBe(true)" },
    ],
    hints: [
      'All `Reflect` methods are functions.',
    ],
    tags: ['Reflect', 'deleteProperty', 'typeof', 'beginner'],
  },
  {
    slug: 'reflect-delete-property-removes-key',
    title: 'Reflect.deleteProperty() — key no longer in object',
    description: `## Reflect.deleteProperty() — key removal

After deletion, the key is gone from the object — \`'a' in o\` returns \`false\`.

**Challenge:** Verify that after \`Reflect.deleteProperty(o, 'a')\`, \`'a' in o\` is \`false\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Reflect',
    method: 'deleteProperty',
    initialCode: `function reflectDeleteRemovesKey(): boolean {
  const o = { a: 1, b: 2 }
  Reflect.deleteProperty(o, 'a')
  return 'a' in o
}`,
    solution: `function reflectDeleteRemovesKey(): boolean {
  const o = { a: 1, b: 2 }
  Reflect.deleteProperty(o, 'a')
  return 'a' in o
}`,
    tests: [
      { description: 'a not in o', assertion:"const o = {a:1, b:2}; Reflect.deleteProperty(o, 'a'); expect('a' in o).toBe(false)" },
      { description: 'b still in o', assertion:"const o = {a:1, b:2}; Reflect.deleteProperty(o, 'a'); expect('b' in o).toBe(true)" },
      { description: 'result is boolean', assertion:"const o = {a:1, b:2}; Reflect.deleteProperty(o, 'a'); expect(typeof ('a' in o)).toBe('boolean')" },
      { description: 'result is falsy', assertion:"const o = {a:1, b:2}; Reflect.deleteProperty(o, 'a'); expect('a' in o).toBeFalsy()" },
      { description: 'o.a is undefined', assertion:"const o = {a:1, b:2}; Reflect.deleteProperty(o, 'a'); expect(o.a).toBeUndefined()" },
    ],
    hints: [
      'After `Reflect.deleteProperty`, the key is fully removed from the object.',
    ],
    tags: ['Reflect', 'deleteProperty', 'beginner'],
  },
]
