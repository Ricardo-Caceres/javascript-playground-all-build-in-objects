import type { Exercise } from '@/shared/types/exercises'

export const definePropertiesExercises: Exercise[] = [
  {
    slug: 'object-define-properties-basic',
    title: 'Object.defineProperties() — define multiple at once',
    description: `## Object.defineProperties()

\`Object.defineProperties(obj, props)\` lets you define multiple properties in a single call, each with its own descriptor.

**Challenge:** Implement \`addMultiple(obj)\` that defines \`x\` (value: 1) and \`y\` (value: 2) on \`obj\` using \`Object.defineProperties\`.

\`\`\`ts
const o = {}
addMultiple(o)
o.x // → 1
o.y // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.defineProperties',
    initialCode: `function addMultiple(obj: Record<string, unknown>): void {
  // Use Object.defineProperties to add x and y at once
}`,
    solution: `function addMultiple(obj: Record<string, unknown>): void {
  Object.defineProperties(obj, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 2, writable: true, enumerable: true, configurable: true },
  })
}`,
    tests: [
      { description: 'x is set to 1', assertion: "const o: any = {}; addMultiple(o); expect(o.x).toBe(1)" },
      { description: 'y is set to 2', assertion: "const o: any = {}; addMultiple(o); expect(o.y).toBe(2)" },
      { description: 'both keys appear in Object.keys', assertion: "const o: any = {}; addMultiple(o); expect(Object.keys(o)).toHaveLength(2)" },
      { description: 'x is writable', assertion: "const o: any = {}; addMultiple(o); o.x = 99; expect(o.x).toBe(99)" },
      { description: 'returns undefined', assertion: "const o: any = {}; expect(addMultiple(o)).toBeUndefined()" },
    ],
    hints: [
      '`Object.defineProperties` takes a map where each value is a property descriptor.',
      'Include `writable:true, enumerable:true, configurable:true` to behave like normal properties.',
    ],
    tags: ['Object', 'Object.defineProperties', 'descriptor', 'beginner'],
  },
  {
    slug: 'object-define-properties-non-writable',
    title: 'Object.defineProperties() — non-writable property',
    description: `## Object.defineProperties() — immutable properties

You can mix writable and non-writable properties in a single \`Object.defineProperties\` call.

**Challenge:** Implement \`addMixed(obj)\` that adds \`editable\` (writable, value: 10) and \`fixed\` (non-writable, value: 99) to \`obj\`.

\`\`\`ts
const o = {}
addMixed(o)
o.editable = 50   // works
o.fixed = 0       // silently fails
o.editable        // → 50
o.fixed           // → 99
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.defineProperties',
    initialCode: `function addMixed(obj: Record<string, unknown>): void {
  // Define 'editable' (writable:true) and 'fixed' (writable:false)
}`,
    solution: `function addMixed(obj: Record<string, unknown>): void {
  Object.defineProperties(obj, {
    editable: { value: 10, writable: true, enumerable: true, configurable: true },
    fixed: { value: 99, writable: false, enumerable: true, configurable: true },
  })
}`,
    tests: [
      { description: 'editable starts at 10', assertion: "const o: any = {}; addMixed(o); expect(o.editable).toBe(10)" },
      { description: 'fixed starts at 99', assertion: "const o: any = {}; addMixed(o); expect(o.fixed).toBe(99)" },
      { description: 'editable can be reassigned', assertion: "const o: any = {}; addMixed(o); o.editable = 50; expect(o.editable).toBe(50)" },
      { description: 'fixed cannot be reassigned', assertion: "const o: any = {}; addMixed(o); o.fixed = 0; expect(o.fixed).toBe(99)" },
      { description: 'both keys are enumerable', assertion: "const o: any = {}; addMixed(o); expect(Object.keys(o)).toHaveLength(2)" },
    ],
    hints: [
      'Set `writable: false` on the `fixed` property descriptor.',
      'In sloppy mode, assignment to a non-writable property silently fails.',
    ],
    tags: ['Object', 'Object.defineProperties', 'writable', 'intermediate'],
  },
  {
    slug: 'object-define-properties-non-enumerable',
    title: 'Object.defineProperties() — non-enumerable property',
    description: `## Object.defineProperties() — hiding properties

Properties defined with \`enumerable: false\` are invisible to \`Object.keys\` and \`for...in\`.

**Challenge:** Implement \`addWithHidden(obj)\` that adds a visible \`name\` property and a hidden \`_internal\` property.

\`\`\`ts
const o = {}
addWithHidden(o)
Object.keys(o)           // → ['name']
o._internal              // → 'secret'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.defineProperties',
    initialCode: `function addWithHidden(obj: Record<string, unknown>): void {
  // Define 'name' (enumerable:true) and '_internal' (enumerable:false)
}`,
    solution: `function addWithHidden(obj: Record<string, unknown>): void {
  Object.defineProperties(obj, {
    name: { value: 'public', writable: true, enumerable: true, configurable: true },
    _internal: { value: 'secret', writable: true, enumerable: false, configurable: true },
  })
}`,
    tests: [
      { description: 'name is in Object.keys', assertion: "const o: any = {}; addWithHidden(o); expect(Object.keys(o)).toContain('name')" },
      { description: '_internal is not in Object.keys', assertion: "const o: any = {}; addWithHidden(o); expect(Object.keys(o)).toHaveLength(1)" },
      { description: '_internal is still readable', assertion: "const o: any = {}; addWithHidden(o); expect(o._internal).toBe('secret')" },
      { description: '_internal in getOwnPropertyNames', assertion: "const o: any = {}; addWithHidden(o); expect(Object.getOwnPropertyNames(o)).toContain('_internal')" },
      { description: '_internal enumerable is false', assertion: "const o: any = {}; addWithHidden(o); expect(Object.getOwnPropertyDescriptor(o, '_internal')?.enumerable).toBe(false)" },
    ],
    hints: [
      'Set `enumerable: false` on `_internal` to hide it from standard iteration.',
      '`Object.getOwnPropertyNames` reveals all own properties regardless of enumerability.',
    ],
    tags: ['Object', 'Object.defineProperties', 'enumerable', 'intermediate'],
  },
  {
    slug: 'object-define-properties-configurable-false',
    title: 'Object.defineProperties() — configurable: false prevents deletion',
    description: `## Object.defineProperties() — locking properties

When \`configurable: false\`, you cannot delete the property or redefine its descriptor.

**Challenge:** Implement \`addLocked(obj)\` that defines a \`locked\` property with \`configurable: false\`.

\`\`\`ts
const o = {}
addLocked(o)
delete o.locked  // silently fails
o.locked         // → 42
\`\`\``,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Object',
    method: 'Object.defineProperties',
    initialCode: `function addLocked(obj: Record<string, unknown>): void {
  // Define 'locked' with configurable: false, value: 42
}`,
    solution: `function addLocked(obj: Record<string, unknown>): void {
  Object.defineProperties(obj, {
    locked: { value: 42, writable: false, enumerable: true, configurable: false },
  })
}`,
    tests: [
      { description: 'locked value is 42', assertion: "const o: any = {}; addLocked(o); expect(o.locked).toBe(42)" },
      { description: 'delete silently fails', assertion: "const o: any = {}; addLocked(o); delete o.locked; expect(o.locked).toBe(42)" },
      { description: 'configurable is false', assertion: "const o: any = {}; addLocked(o); expect(Object.getOwnPropertyDescriptor(o, 'locked')?.configurable).toBe(false)" },
      { description: 'assignment silently fails', assertion: "const o: any = {}; addLocked(o); o.locked = 0; expect(o.locked).toBe(42)" },
      { description: 'property appears in Object.keys', assertion: "const o: any = {}; addLocked(o); expect(Object.keys(o)).toContain('locked')" },
    ],
    hints: [
      'Set `configurable: false` to prevent deletion and redefinition.',
      'Combine with `writable: false` for full immutability.',
    ],
    tags: ['Object', 'Object.defineProperties', 'configurable', 'advanced'],
  },
  {
    slug: 'object-define-properties-value-and-writable',
    title: 'Object.defineProperties() — value and writable together',
    description: `## Object.defineProperties() — data descriptors

A data descriptor defines both \`value\` and \`writable\`. This exercises combining multiple property options in one call.

**Challenge:** Implement \`setupCounter(obj)\` that uses \`Object.defineProperties\` to add a \`count\` property (value: 0, writable: true) and a \`step\` property (value: 1, writable: false).

\`\`\`ts
const o = {}
setupCounter(o)
o.count += o.step  // → 1
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.defineProperties',
    initialCode: `function setupCounter(obj: Record<string, unknown>): void {
  // Define 'count' (value:0, writable:true) and 'step' (value:1, writable:false)
}`,
    solution: `function setupCounter(obj: Record<string, unknown>): void {
  Object.defineProperties(obj, {
    count: { value: 0, writable: true, enumerable: true, configurable: true },
    step: { value: 1, writable: false, enumerable: true, configurable: true },
  })
}`,
    tests: [
      { description: 'count starts at 0', assertion: "const o: any = {}; setupCounter(o); expect(o.count).toBe(0)" },
      { description: 'step is 1', assertion: "const o: any = {}; setupCounter(o); expect(o.step).toBe(1)" },
      { description: 'count can be incremented', assertion: "const o: any = {}; setupCounter(o); o.count += o.step; expect(o.count).toBe(1)" },
      { description: 'step cannot be changed', assertion: "const o: any = {}; setupCounter(o); o.step = 99; expect(o.step).toBe(1)" },
      { description: 'both keys in Object.keys', assertion: "const o: any = {}; setupCounter(o); expect(Object.keys(o)).toHaveLength(2)" },
    ],
    hints: [
      '`count` needs `writable: true` so you can increment it.',
      '`step` with `writable: false` acts as a constant.',
    ],
    tags: ['Object', 'Object.defineProperties', 'data descriptor', 'intermediate'],
  },
]
