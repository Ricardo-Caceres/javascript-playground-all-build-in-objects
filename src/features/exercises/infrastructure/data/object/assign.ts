import type { Exercise } from '@/shared/types/exercises'

export const assignExercises: Exercise[] = [
  {
    slug: 'object-assign-basic',
    title: 'Object.assign() — merge two objects',
    description: `## Object.assign()

\`Object.assign(target, ...sources)\` copies enumerable own properties from source objects into the target and returns the modified target.

**Challenge:** Implement \`mergeObjects(target, source)\` that merges \`source\` into \`target\` using \`Object.assign\`.

\`\`\`ts
mergeObjects({ a: 1 }, { b: 2 }) // → { a: 1, b: 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.assign',
    initialCode: `function mergeObjects(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  // Use Object.assign to merge source into target
}`,
    solution: `function mergeObjects(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  return Object.assign(target, source)
}`,
    tests: [
      { description: 'merges two objects', assertion: "expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })" },
      { description: 'overwrites existing key', assertion: "expect(mergeObjects({ a: 1 }, { a: 2 })).toEqual({ a: 2 })" },
      { description: 'empty source returns target unchanged', assertion: "expect(mergeObjects({ a: 1 }, {})).toEqual({ a: 1 })" },
      { description: 'empty target gets source keys', assertion: "expect(mergeObjects({}, { x: 10 })).toEqual({ x: 10 })" },
      { description: 'mutates target in place', assertion: "const t = { a: 1 }; mergeObjects(t, { b: 2 }); expect(t).toEqual({ a: 1, b: 2 })" },
    ],
    hints: [
      '`Object.assign` mutates the target object.',
      'Later sources overwrite earlier ones for the same key.',
    ],
    tags: ['Object', 'Object.assign', 'merge', 'beginner'],
  },
  {
    slug: 'object-assign-multiple-sources',
    title: 'Object.assign() — multiple sources',
    description: `## Object.assign() with multiple sources

\`Object.assign\` accepts any number of source objects. Properties are applied left-to-right, so later sources overwrite earlier ones.

**Challenge:** Implement \`mergeAll(target, ...sources)\` that merges all sources into \`target\`.

\`\`\`ts
mergeAll({}, { a: 1 }, { b: 2 }, { c: 3 }) // → { a: 1, b: 2, c: 3 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.assign',
    initialCode: `function mergeAll(target: Record<string, unknown>, ...sources: Record<string, unknown>[]): Record<string, unknown> {
  // Use Object.assign with spread to handle multiple sources
}`,
    solution: `function mergeAll(target: Record<string, unknown>, ...sources: Record<string, unknown>[]): Record<string, unknown> {
  return Object.assign(target, ...sources)
}`,
    tests: [
      { description: 'merges three sources', assertion: "expect(mergeAll({}, { a: 1 }, { b: 2 }, { c: 3 })).toEqual({ a: 1, b: 2, c: 3 })" },
      { description: 'later source overwrites earlier', assertion: "expect(mergeAll({}, { a: 1 }, { a: 99 })).toEqual({ a: 99 })" },
      { description: 'single source works', assertion: "expect(mergeAll({}, { x: 5 })).toEqual({ x: 5 })" },
      { description: 'no sources returns target unchanged', assertion: "expect(mergeAll({ z: 0 })).toEqual({ z: 0 })" },
      { description: 'result has all unique keys', assertion: "expect(Object.keys(mergeAll({}, { a: 1 }, { b: 2 }, { c: 3 }))).toHaveLength(3)" },
    ],
    hints: [
      'Use the rest parameter `...sources` and spread into `Object.assign`.',
      'Order matters: the last source wins when keys collide.',
    ],
    tags: ['Object', 'Object.assign', 'merge', 'rest', 'beginner'],
  },
  {
    slug: 'object-assign-shallow-clone',
    title: 'Object.assign() — shallow clone',
    description: `## Object.assign() for shallow cloning

Passing an empty object \`{}\` as the target with one source is a common way to create a **shallow clone** of an object.

**Challenge:** Implement \`shallowClone(obj)\` that returns a shallow copy of \`obj\` using \`Object.assign\`.

\`\`\`ts
const orig = { a: 1, b: 2 }
const copy = shallowClone(orig)
copy === orig // → false
copy          // → { a: 1, b: 2 }
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.assign',
    initialCode: `function shallowClone<T extends Record<string, unknown>>(obj: T): T {
  // Use Object.assign with an empty target to create a shallow copy
}`,
    solution: `function shallowClone<T extends Record<string, unknown>>(obj: T): T {
  return Object.assign({} as T, obj)
}`,
    tests: [
      { description: 'clone equals original', assertion: "expect(shallowClone({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })" },
      { description: 'clone is a different reference', assertion: "const o = { a: 1 }; expect(shallowClone(o) === o).toBe(false)" },
      { description: 'empty object clones to empty', assertion: "expect(shallowClone({})).toEqual({})" },
      { description: 'mutating clone does not affect original', assertion: "const o = { x: 1 } as any; const c = shallowClone(o); c.x = 99; expect(o.x).toBe(1)" },
      { description: 'all keys are copied', assertion: "expect(Object.keys(shallowClone({ a: 1, b: 2, c: 3 }))).toHaveLength(3)" },
    ],
    hints: [
      'Use `Object.assign({}, obj)` to copy into a fresh empty object.',
      '"Shallow" means nested objects are still shared by reference.',
    ],
    tags: ['Object', 'Object.assign', 'clone', 'beginner'],
  },
  {
    slug: 'object-assign-defaults',
    title: 'Object.assign() — apply defaults',
    description: `## Object.assign() for default values

A common pattern is to merge user-supplied options over a defaults object, so any missing keys fall back to their default values.

**Challenge:** Implement \`applyDefaults(defaults, overrides)\` that returns a new object with defaults applied, then overridden by \`overrides\`.

\`\`\`ts
applyDefaults({ color: 'red', size: 'M' }, { color: 'blue' })
// → { color: 'blue', size: 'M' }
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Object',
    method: 'Object.assign',
    initialCode: `function applyDefaults(
  defaults: Record<string, unknown>,
  overrides: Record<string, unknown>
): Record<string, unknown> {
  // Merge defaults then overrides into a fresh object
}`,
    solution: `function applyDefaults(
  defaults: Record<string, unknown>,
  overrides: Record<string, unknown>
): Record<string, unknown> {
  return Object.assign({}, defaults, overrides)
}`,
    tests: [
      { description: 'override replaces default', assertion: "expect(applyDefaults({ color: 'red' }, { color: 'blue' })).toEqual({ color: 'blue' })" },
      { description: 'missing override key uses default', assertion: "expect(applyDefaults({ size: 'M', color: 'red' }, { color: 'blue' })).toEqual({ size: 'M', color: 'blue' })" },
      { description: 'empty overrides returns defaults', assertion: "expect(applyDefaults({ a: 1 }, {})).toEqual({ a: 1 })" },
      { description: 'empty defaults uses overrides', assertion: "expect(applyDefaults({}, { x: 99 })).toEqual({ x: 99 })" },
      { description: 'does not mutate defaults', assertion: "const d = { a: 1 }; applyDefaults(d, { a: 2 }); expect(d).toEqual({ a: 1 })" },
    ],
    hints: [
      'Pass a fresh `{}` as the first target so neither `defaults` nor `overrides` is mutated.',
      'Order matters: `Object.assign({}, defaults, overrides)` lets overrides win.',
    ],
    tags: ['Object', 'Object.assign', 'defaults', 'intermediate'],
  },
  {
    slug: 'object-assign-returns-target',
    title: 'Object.assign() — return value is the target',
    description: `## Object.assign() return value

\`Object.assign\` returns the **target** object, which is the same reference that was passed as the first argument.

**Challenge:** Implement \`checkReturnIsTarget(target, source)\` that calls \`Object.assign(target, source)\` and returns whether the result is strictly equal (\`===\`) to \`target\`.

\`\`\`ts
checkReturnIsTarget({ a: 1 }, { b: 2 }) // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.assign',
    initialCode: `function checkReturnIsTarget(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): boolean {
  // Call Object.assign and check if the return value === target
}`,
    solution: `function checkReturnIsTarget(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): boolean {
  const result = Object.assign(target, source)
  return result === target
}`,
    tests: [
      { description: 'returns true when result === target', assertion: "expect(checkReturnIsTarget({ a: 1 }, { b: 2 })).toBe(true)" },
      { description: 'true for empty objects', assertion: "expect(checkReturnIsTarget({}, {})).toBe(true)" },
      { description: 'target is mutated with source key', assertion: "const t = { a: 1 }; Object.assign(t, { b: 2 }); expect(t).toEqual({ a: 1, b: 2 })" },
      { description: 'returned reference equals target', assertion: "const t = {}; const r = Object.assign(t, { x: 1 }); expect(r === t).toBe(true)" },
      { description: 'true when source is empty', assertion: "expect(checkReturnIsTarget({ z: 9 }, {})).toBe(true)" },
    ],
    hints: [
      '`Object.assign` always returns its first argument (the target) — it never creates a new object.',
      'Compare with `===` to check reference identity.',
    ],
    tags: ['Object', 'Object.assign', 'reference', 'beginner'],
  },
]
