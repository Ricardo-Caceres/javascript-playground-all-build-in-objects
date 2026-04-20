import type { Exercise } from '@/shared/types/exercises'

export const definePropertyExercises: Exercise[] = [
  {
    slug: 'object-define-property-basic',
    title: 'Object.defineProperty() — define a value property',
    description: `## Object.defineProperty()

\`Object.defineProperty(obj, key, descriptor)\` defines a new property or modifies an existing one with precise control over its behaviour.

A **data descriptor** has \`value\`, \`writable\`, \`enumerable\`, and \`configurable\`.

**Challenge:** Implement \`addProperty(obj, key, val)\` that uses \`Object.defineProperty\` to add a writable, enumerable, configurable property.

\`\`\`ts
const o = {}
addProperty(o, 'x', 42)
o.x // → 42
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.defineProperty',
    initialCode: `function addProperty(obj: Record<string, unknown>, key: string, val: unknown): void {
  // Use Object.defineProperty with writable:true, enumerable:true, configurable:true
}`,
    solution: `function addProperty(obj: Record<string, unknown>, key: string, val: unknown): void {
  Object.defineProperty(obj, key, { value: val, writable: true, enumerable: true, configurable: true })
}`,
    tests: [
      { description: 'property is set correctly', assertion:"const o: any = {}; addProperty(o, 'x', 42); expect(o.x).toBe(42)" },
      { description: 'property appears in Object.keys', assertion:"const o: any = {}; addProperty(o, 'name', 'test'); expect(Object.keys(o)).toContain('name')" },
      { description: 'writable property can be reassigned', assertion:"const o: any = {}; addProperty(o, 'n', 1); o.n = 99; expect(o.n).toBe(99)" },
      { description: 'works with string value', assertion:"const o: any = {}; addProperty(o, 'label', 'hi'); expect(o.label).toBe('hi')" },
      { description: 'works with boolean value', assertion:"const o: any = {}; addProperty(o, 'flag', true); expect(o.flag).toBe(true)" },
    ],
    hints: [
      'A data descriptor needs at least `value`. Add `writable:true, enumerable:true, configurable:true` to make it behave like a normal property.',
      'Without `writable:true`, the property will be read-only.',
    ],
    tags: ['Object', 'Object.defineProperty', 'descriptor', 'beginner'],
  },
  {
    slug: 'object-define-property-non-writable',
    title: 'Object.defineProperty() — non-writable property',
    description: `## Object.defineProperty() — writable: false

Setting \`writable: false\` makes a property read-only. In non-strict mode, assigning to it silently fails; in strict mode it throws a TypeError.

**Challenge:** Implement \`makeReadOnly(obj, key, val)\` that defines a non-writable property.

\`\`\`ts
const o = {}
makeReadOnly(o, 'x', 1)
o.x = 99  // silently fails in non-strict
o.x       // → 1
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.defineProperty',
    initialCode: `function makeReadOnly(obj: Record<string, unknown>, key: string, val: unknown): void {
  // Define the property with writable: false
}`,
    solution: `function makeReadOnly(obj: Record<string, unknown>, key: string, val: unknown): void {
  Object.defineProperty(obj, key, { value: val, writable: false, enumerable: true, configurable: true })
}`,
    tests: [
      { description: 'property is set to initial value', assertion:"const o: any = {}; makeReadOnly(o, 'x', 1); expect(o.x).toBe(1)" },
      { description: 'assignment silently fails', assertion:"const o: any = {}; makeReadOnly(o, 'x', 1); o.x = 99; expect(o.x).toBe(1)" },
      { description: 'property appears in Object.keys', assertion:"const o: any = {}; makeReadOnly(o, 'y', 2); expect(Object.keys(o)).toContain('y')" },
      { description: 'descriptor shows writable false', assertion:"const o: any = {}; makeReadOnly(o, 'z', 5); expect(Object.getOwnPropertyDescriptor(o, 'z')?.writable).toBe(false)" },
      { description: 'works with string value', assertion:"const o: any = {}; makeReadOnly(o, 'name', 'Alice'); o.name = 'Bob'; expect(o.name).toBe('Alice')" },
    ],
    hints: [
      'Set `writable: false` in the property descriptor.',
      'In sloppy mode, assigning to a non-writable property is silently ignored.',
    ],
    tags: ['Object', 'Object.defineProperty', 'writable', 'intermediate'],
  },
  {
    slug: 'object-define-property-non-enumerable',
    title: 'Object.defineProperty() — non-enumerable property',
    description: `## Object.defineProperty() — enumerable: false

A non-enumerable property is hidden from \`Object.keys\`, \`for...in\`, and \`JSON.stringify\`, but can still be read directly.

**Challenge:** Implement \`addHidden(obj, key, val)\` that defines a non-enumerable property.

\`\`\`ts
const o = {}
addHidden(o, '_id', 42)
o._id             // → 42
Object.keys(o)    // → []  (not visible)
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.defineProperty',
    initialCode: `function addHidden(obj: Record<string, unknown>, key: string, val: unknown): void {
  // Define the property with enumerable: false
}`,
    solution: `function addHidden(obj: Record<string, unknown>, key: string, val: unknown): void {
  Object.defineProperty(obj, key, { value: val, writable: true, enumerable: false, configurable: true })
}`,
    tests: [
      { description: 'property value is accessible', assertion:"const o: any = {}; addHidden(o, '_id', 42); expect(o._id).toBe(42)" },
      { description: 'not in Object.keys', assertion:"const o: any = {}; addHidden(o, '_id', 42); expect(Object.keys(o)).toHaveLength(0)" },
      { description: 'not in for...in loop', assertion:"const o: any = {}; addHidden(o, '_id', 42); const keys[] = []; for (const k in o) keys.push(k); expect(keys).toHaveLength(0)" },
      { description: 'visible with getOwnPropertyNames', assertion:"const o: any = {}; addHidden(o, 'secret', 1); expect(Object.getOwnPropertyNames(o)).toContain('secret')" },
      { description: 'enumerable descriptor is false', assertion:"const o: any = {}; addHidden(o, 'h', 9); expect(Object.getOwnPropertyDescriptor(o, 'h')?.enumerable).toBe(false)" },
    ],
    hints: [
      '`enumerable: false` hides the property from iteration methods like `Object.keys`.',
      '`Object.getOwnPropertyNames` still lists non-enumerable properties.',
    ],
    tags: ['Object', 'Object.defineProperty', 'enumerable', 'intermediate'],
  },
  {
    slug: 'object-define-property-getter',
    title: 'Object.defineProperty() — getter descriptor',
    description: `## Object.defineProperty() — accessor descriptor

An **accessor descriptor** uses \`get\` (and optionally \`set\`) instead of \`value\`/\`writable\`. The getter runs every time the property is read.

**Challenge:** Implement \`addGetter(obj, key, fn)\` that defines a getter using \`Object.defineProperty\`.

\`\`\`ts
const o = { _n: 5 }
addGetter(o, 'double', function() { return this._n * 2 })
o.double // → 10
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'Object.defineProperty',
    initialCode: `function addGetter(obj: Record<string, unknown>, key: string, fn: () => unknown): void {
  // Define a getter using Object.defineProperty with a get function
}`,
    solution: `function addGetter(obj: Record<string, unknown>, key: string, fn: () => unknown): void {
  Object.defineProperty(obj, key, { get: fn, enumerable: true, configurable: true })
}`,
    tests: [
      { description: 'getter returns computed value', assertion:"const o: any = { _n: 5 }; addGetter(o, 'double', function(this) { return this._n * 2 }); expect(o.double).toBe(10)" },
      { description: 'getter is called on each access', assertion:"let count = 0; const o: any = {}; addGetter(o, 'c', () => ++count); o.c; o.c; expect(o.c).toBe(3)" },
      { description: 'descriptor has get function', assertion:"const o: any = {}; addGetter(o, 'g', () => 1); expect(typeof Object.getOwnPropertyDescriptor(o, 'g')?.get).toBe('function')" },
      { description: 'no value key in descriptor', assertion:"const o: any = {}; addGetter(o, 'g', () => 1); expect(Object.getOwnPropertyDescriptor(o, 'g')?.value).toBeUndefined()" },
      { description: 'getter returning constant', assertion:"const o: any = {}; addGetter(o, 'pi', () => 3.14); expect(o.pi).toBe(3.14)" },
    ],
    hints: [
      'Use `{ get: fn }` in the descriptor. Do NOT include `value` or `writable` — they conflict with `get`.',
      'The getter function receives `this` as the object the property is accessed on.',
    ],
    tags: ['Object', 'Object.defineProperty', 'getter', 'descriptor', 'advanced'],
  },
  {
    slug: 'object-define-property-configurable',
    title: 'Object.defineProperty() — configurable: false',
    description: `## Object.defineProperty() — configurable: false

When \`configurable: false\`, the property cannot be deleted and its descriptor cannot be changed (except loosening \`writable\` from true to false).

**Challenge:** Implement \`lockProperty(obj, key, val)\` that defines a non-configurable, non-writable property.

\`\`\`ts
const o = {}
lockProperty(o, 'id', 1)
delete o.id   // silently fails
o.id          // → 1
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'Object.defineProperty',
    initialCode: `function lockProperty(obj: Record<string, unknown>, key: string, val: unknown): void {
  // Define property with configurable: false and writable: false
}`,
    solution: `function lockProperty(obj: Record<string, unknown>, key: string, val: unknown): void {
  Object.defineProperty(obj, key, { value: val, writable: false, enumerable: true, configurable: false })
}`,
    tests: [
      { description: 'property value is accessible', assertion:"const o: any = {}; lockProperty(o, 'id', 1); expect(o.id).toBe(1)" },
      { description: 'assignment silently fails', assertion:"const o: any = {}; lockProperty(o, 'id', 1); o.id = 99; expect(o.id).toBe(1)" },
      { description: 'delete silently fails', assertion:"const o: any = {}; lockProperty(o, 'id', 1); delete o.id; expect(o.id).toBe(1)" },
      { description: 'configurable is false', assertion:"const o: any = {}; lockProperty(o, 'id', 1); expect(Object.getOwnPropertyDescriptor(o, 'id')?.configurable).toBe(false)" },
      { description: 'writable is false', assertion:"const o: any = {}; lockProperty(o, 'id', 1); expect(Object.getOwnPropertyDescriptor(o, 'id')?.writable).toBe(false)" },
    ],
    hints: [
      'Set both `writable: false` and `configurable: false` to fully lock a property.',
      'In sloppy mode, attempting to delete or reassign silently fails.',
    ],
    tags: ['Object', 'Object.defineProperty', 'configurable', 'advanced'],
  },
]
