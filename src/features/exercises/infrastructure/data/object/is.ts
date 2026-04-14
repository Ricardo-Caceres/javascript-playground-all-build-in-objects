import type { Exercise } from '@/shared/types/exercises'

export const objectIsExercises: Exercise[] = [
  {
    slug: 'object-is-nan',
    title: 'Object.is() — NaN equals NaN',
    description: `## Object.is()

\`Object.is(a, b)\` determines whether two values are the **same value**. Unlike \`===\`, it returns \`true\` for \`NaN === NaN\` and \`false\` for \`+0 === -0\`.

**Challenge:** Implement \`isNaNEqual()\` that returns \`Object.is(NaN, NaN)\`.

\`\`\`ts
isNaNEqual()     // → true  (unlike NaN === NaN which is false)
NaN === NaN      // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.is',
    initialCode: `function isNaNEqual(): boolean {
  // Return Object.is(NaN, NaN)
}`,
    solution: `function isNaNEqual(): boolean {
  return Object.is(NaN, NaN)
}`,
    tests: [
      { description: 'Object.is(NaN, NaN) is true', assertion: "expect(isNaNEqual()).toBe(true)" },
      { description: 'NaN === NaN is false', assertion: "expect(NaN === NaN).toBe(false)" },
      { description: 'Object.is(NaN, 0) is false', assertion: "expect(Object.is(NaN, 0)).toBe(false)" },
      { description: 'isNaN(NaN) is true', assertion: "expect(isNaN(NaN)).toBe(true)" },
      { description: 'Object.is with computed NaN', assertion: "expect(Object.is(0/0, NaN)).toBe(true)" },
    ],
    hints: [
      '`Object.is` uses the SameValue algorithm, which handles `NaN` consistently.',
      '`NaN` is the only value not equal to itself under `===`.',
    ],
    tags: ['Object', 'Object.is', 'NaN', 'beginner'],
  },
  {
    slug: 'object-is-zero',
    title: 'Object.is() — distinguishes +0 from -0',
    description: `## Object.is() — positive and negative zero

\`Object.is(+0, -0)\` returns \`false\`, unlike \`+0 === -0\` which is \`true\`. This is one of the key differences between \`Object.is\` and \`===\`.

**Challenge:** Implement \`zeroDiff()\` that returns \`Object.is(0, -0)\`.

\`\`\`ts
zeroDiff()   // → false  (unlike 0 === -0 which is true)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.is',
    initialCode: `function zeroDiff(): boolean {
  // Return Object.is(0, -0)
}`,
    solution: `function zeroDiff(): boolean {
  return Object.is(0, -0)
}`,
    tests: [
      { description: 'Object.is(0, -0) is false', assertion: "expect(zeroDiff()).toBe(false)" },
      { description: '0 === -0 is true', assertion: "expect(0 === -0).toBe(true)" },
      { description: 'Object.is(-0, -0) is true', assertion: "expect(Object.is(-0, -0)).toBe(true)" },
      { description: 'Object.is(0, 0) is true', assertion: "expect(Object.is(0, 0)).toBe(true)" },
      { description: 'Object.is(+0, +0) is true', assertion: "expect(Object.is(+0, +0)).toBe(true)" },
    ],
    hints: [
      '`Object.is` distinguishes `+0` and `-0` whereas `===` treats them as equal.',
    ],
    tags: ['Object', 'Object.is', 'zero', 'beginner'],
  },
  {
    slug: 'object-is-same-value',
    title: 'Object.is() — same value returns true',
    description: `## Object.is() — identical primitives

For most values, \`Object.is(a, b)\` behaves the same as \`===\`. Two identical primitives return \`true\`.

**Challenge:** Implement \`sameValue(a, b)\` that returns \`Object.is(a, b)\`.

\`\`\`ts
sameValue(1, 1)       // → true
sameValue('x', 'x')  // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.is',
    initialCode: `function sameValue(a: unknown, b: unknown): boolean {
  // Return Object.is(a, b)
}`,
    solution: `function sameValue(a: unknown, b: unknown): boolean {
  return Object.is(a, b)
}`,
    tests: [
      { description: 'same number returns true', assertion: "expect(sameValue(1, 1)).toBe(true)" },
      { description: 'same string returns true', assertion: "expect(sameValue('x', 'x')).toBe(true)" },
      { description: 'different numbers return false', assertion: "expect(sameValue(1, 2)).toBe(false)" },
      { description: 'null equals null', assertion: "expect(sameValue(null, null)).toBe(true)" },
      { description: 'undefined equals undefined', assertion: "expect(sameValue(undefined, undefined)).toBe(true)" },
    ],
    hints: [
      'For most values, `Object.is` and `===` agree. The exceptions are `NaN` and `±0`.',
    ],
    tags: ['Object', 'Object.is', 'beginner'],
  },
  {
    slug: 'object-is-different-values',
    title: 'Object.is() — different values return false',
    description: `## Object.is() — not the same value

When two values are different, \`Object.is\` returns \`false\` — just like \`===\`.

**Challenge:** Implement \`differentValues(a, b)\` that returns \`true\` when \`Object.is(a, b)\` is \`false\`.

\`\`\`ts
differentValues(1, 2) // → true
differentValues(1, 1) // → false
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.is',
    initialCode: `function differentValues(a: unknown, b: unknown): boolean {
  // Return true when Object.is returns false
}`,
    solution: `function differentValues(a: unknown, b: unknown): boolean {
  return !Object.is(a, b)
}`,
    tests: [
      { description: 'different numbers returns true', assertion: "expect(differentValues(1, 2)).toBe(true)" },
      { description: 'same number returns false', assertion: "expect(differentValues(5, 5)).toBe(false)" },
      { description: 'null vs undefined returns true', assertion: "expect(differentValues(null, undefined)).toBe(true)" },
      { description: 'different strings returns true', assertion: "expect(differentValues('a', 'b')).toBe(true)" },
      { description: 'same string returns false', assertion: "expect(differentValues('hello', 'hello')).toBe(false)" },
    ],
    hints: [
      'Negate `Object.is(a, b)` to test for inequality.',
    ],
    tags: ['Object', 'Object.is', 'beginner'],
  },
  {
    slug: 'object-is-null-null',
    title: 'Object.is() — null equals null',
    description: `## Object.is() — null and undefined

\`Object.is(null, null)\` returns \`true\`. \`Object.is(null, undefined)\` returns \`false\` — unlike loose equality \`null == undefined\`.

**Challenge:** Implement \`checkNull()\` that returns \`Object.is(null, null)\`.

\`\`\`ts
checkNull()            // → true
null == undefined      // → true  (loose equality)
Object.is(null, undefined) // → false (strict same-value)
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Object',
    method: 'Object.is',
    initialCode: `function checkNull(): boolean {
  // Return Object.is(null, null)
}`,
    solution: `function checkNull(): boolean {
  return Object.is(null, null)
}`,
    tests: [
      { description: 'Object.is(null, null) is true', assertion: "expect(checkNull()).toBe(true)" },
      { description: 'Object.is(null, undefined) is false', assertion: "expect(Object.is(null, undefined)).toBe(false)" },
      { description: 'null == undefined is true (loose)', assertion: "expect(null == undefined).toBe(true)" },
      { description: 'Object.is(undefined, undefined) is true', assertion: "expect(Object.is(undefined, undefined)).toBe(true)" },
      { description: 'Object.is(null, 0) is false', assertion: "expect(Object.is(null, 0)).toBe(false)" },
    ],
    hints: [
      '`Object.is` is stricter than `==` — it never coerces types.',
      '`null == undefined` is true (loose), but `Object.is(null, undefined)` is false.',
    ],
    tags: ['Object', 'Object.is', 'null', 'beginner'],
  },
]
