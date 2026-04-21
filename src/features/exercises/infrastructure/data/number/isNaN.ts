import type { Exercise } from '@/shared/types/exercises'

export const numberIsNaNExercises: Exercise[] = [
  {
    slug: 'number-is-nan-1',
    title: 'Number.isNaN() — NaN returns true',
    description: `## Number.isNaN()

\`Number.isNaN(value)\` returns \`true\` only if the value is \`NaN\`. It does **not** coerce non-number types.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isNaN',
    initialCode: `function checkNaN(v: unknown): boolean {
  // Use Number.isNaN(v)
}`,
    solution: `function checkNaN(v: unknown): boolean {
  return Number.isNaN(v as number)
}`,
    tests: [
      { description: 'NaN returns true', assertion: 'expect(Number.isNaN(NaN)).toBe(true)' },
      { description: '0/0 returns true', assertion: 'expect(Number.isNaN(0/0)).toBe(true)' },
      { description: 'Number.NaN returns true', assertion: 'expect(Number.isNaN(Number.NaN)).toBe(true)' },
      { description: 'Math.sqrt(-1) returns true', assertion: 'expect(Number.isNaN(Math.sqrt(-1))).toBe(true)' },
      { description: 'Infinity - Infinity returns true', assertion: 'expect(Number.isNaN(Infinity - Infinity)).toBe(true)' },
    ],
    hints: ['`Number.isNaN` is the reliable way to check for `NaN` without coercion.'],
    tags: ['Number', 'isNaN', 'static-method', 'beginner'],
    usageExample: {
      code: `// Check for NaN without coercion
Number.isNaN(NaN)    // → true
Number.isNaN('NaN')  // → false (no coercion)
Number.isNaN(42)     // → false`,
      explanation: {
        en: 'Use Number.isNaN() instead of the global isNaN() to check for NaN without coercing the argument first.',
        es: 'Usa Number.isNaN() en lugar del global isNaN() para comprobar NaN sin coercionar el argumento previamente.',
      },
    },
  },
  {
    slug: 'number-is-nan-2',
    title: 'Number.isNaN() — regular number returns false',
    description: `## Number.isNaN() — Regular Numbers

Any real number returns \`false\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isNaN',
    initialCode: `const result = Number.isNaN(1)`,
    solution: `const result = Number.isNaN(1)`,
    tests: [
      { description: '1 is not NaN', assertion: 'expect(Number.isNaN(1)).toBe(false)' },
      { description: '0 is not NaN', assertion: 'expect(Number.isNaN(0)).toBe(false)' },
      { description: '-5 is not NaN', assertion: 'expect(Number.isNaN(-5)).toBe(false)' },
      { description: 'Infinity is not NaN', assertion: 'expect(Number.isNaN(Infinity)).toBe(false)' },
      { description: '3.14 is not NaN', assertion: 'expect(Number.isNaN(3.14)).toBe(false)' },
    ],
    hints: ['Only the special `NaN` value returns `true` from `Number.isNaN`.'],
    tags: ['Number', 'isNaN', 'static-method', 'beginner'],
    usageExample: {
      code: `// Check for NaN without coercion
Number.isNaN(NaN)    // → true
Number.isNaN('NaN')  // → false (no coercion)
Number.isNaN(42)     // → false`,
      explanation: {
        en: 'Use Number.isNaN() instead of the global isNaN() to check for NaN without coercing the argument first.',
        es: 'Usa Number.isNaN() en lugar del global isNaN() para comprobar NaN sin coercionar el argumento previamente.',
      },
    },
  },
  {
    slug: 'number-is-nan-3',
    title: "Number.isNaN() — '1' (string) returns false, unlike global isNaN",
    description: `## Number.isNaN() vs global isNaN — Strings

\`isNaN('hello')\` returns \`true\` (coerces string to \`NaN\`).
\`Number.isNaN('hello')\` returns \`false\` (no coercion).`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'isNaN',
    initialCode: `const strict = Number.isNaN('1')
const global = isNaN('1')`,
    solution: `const strict = Number.isNaN('1')
const global = isNaN('1')`,
    tests: [
      { description: "Number.isNaN('1') is false", assertion: "expect(Number.isNaN('1')).toBe(false)" },
      { description: "global isNaN('1') is false", assertion: "expect(isNaN('1')).toBe(false)" },
      { description: "Number.isNaN('hello') is false", assertion: "expect(Number.isNaN('hello')).toBe(false)" },
      { description: "global isNaN('hello') is true", assertion: "expect(isNaN('hello')).toBe(true)" },
      { description: 'both agree on NaN', assertion: 'expect(Number.isNaN(NaN) && isNaN(NaN)).toBe(true)' },
    ],
    hints: ['`Number.isNaN` never coerces — it only returns `true` for the actual `NaN` value.'],
    tags: ['Number', 'isNaN', 'coercion', 'intermediate'],
    usageExample: {
      code: `// Check for NaN without coercion
Number.isNaN(NaN)    // → true
Number.isNaN('NaN')  // → false (no coercion)
Number.isNaN(42)     // → false`,
      explanation: {
        en: 'Use Number.isNaN() instead of the global isNaN() to check for NaN without coercing the argument first.',
        es: 'Usa Number.isNaN() en lugar del global isNaN() para comprobar NaN sin coercionar el argumento previamente.',
      },
    },
  },
  {
    slug: 'number-is-nan-4',
    title: 'Number.isNaN() — undefined returns false, unlike global isNaN',
    description: `## Number.isNaN() — undefined

\`isNaN(undefined)\` returns \`true\` (coerces to \`NaN\`). \`Number.isNaN(undefined)\` returns \`false\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'isNaN',
    initialCode: `const strict = Number.isNaN(undefined)
const global = isNaN(undefined)`,
    solution: `const strict = Number.isNaN(undefined)
const global = isNaN(undefined)`,
    tests: [
      { description: 'Number.isNaN(undefined) is false', assertion: 'expect(Number.isNaN(undefined)).toBe(false)' },
      { description: 'global isNaN(undefined) is true', assertion: 'expect(isNaN(undefined)).toBe(true)' },
      { description: 'Number.isNaN(null) is false', assertion: 'expect(Number.isNaN(null)).toBe(false)' },
      { description: 'global isNaN(null) is false', assertion: 'expect(isNaN(null)).toBe(false)' },
      { description: 'Number.isNaN({}) is false', assertion: 'expect(Number.isNaN({})).toBe(false)' },
    ],
    hints: ['`Number.isNaN` is strict — non-number types always return `false`.'],
    tags: ['Number', 'isNaN', 'undefined', 'intermediate'],
    usageExample: {
      code: `// Check for NaN without coercion
Number.isNaN(NaN)    // → true
Number.isNaN('NaN')  // → false (no coercion)
Number.isNaN(42)     // → false`,
      explanation: {
        en: 'Use Number.isNaN() instead of the global isNaN() to check for NaN without coercing the argument first.',
        es: 'Usa Number.isNaN() en lugar del global isNaN() para comprobar NaN sin coercionar el argumento previamente.',
      },
    },
  },
  {
    slug: 'number-is-nan-5',
    title: 'Number.isNaN() — NaN !== NaN, use Number.isNaN instead',
    description: `## Why Not Use === for NaN?

\`NaN === NaN\` is \`false\` — you cannot use strict equality to check for \`NaN\`. Use \`Number.isNaN()\` instead.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'isNaN',
    initialCode: `// Why NaN === NaN is false
const selfEqual = NaN === NaN
const detected = Number.isNaN(NaN)`,
    solution: `const selfEqual = NaN === NaN
const detected = Number.isNaN(NaN)`,
    tests: [
      { description: 'NaN !== NaN', assertion: 'expect(NaN === NaN).toBe(false)' },
      { description: 'Number.isNaN(NaN) is true', assertion: 'expect(Number.isNaN(NaN)).toBe(true)' },
      { description: 'NaN is not equal to itself', assertion: 'expect(NaN !== NaN).toBe(true)' },
      { description: 'use isNaN to detect', assertion: 'expect(Number.isNaN(0/0)).toBe(true)' },
      { description: 'Object.is(NaN, NaN) is true', assertion: 'expect(Object.is(NaN, NaN)).toBe(true)' },
    ],
    hints: ['`NaN` is the only value in JavaScript not equal to itself.'],
    tags: ['Number', 'isNaN', 'equality', 'intermediate'],
    usageExample: {
      code: `// Check for NaN without coercion
Number.isNaN(NaN)    // → true
Number.isNaN('NaN')  // → false (no coercion)
Number.isNaN(42)     // → false`,
      explanation: {
        en: 'Use Number.isNaN() instead of the global isNaN() to check for NaN without coercing the argument first.',
        es: 'Usa Number.isNaN() en lugar del global isNaN() para comprobar NaN sin coercionar el argumento previamente.',
      },
    },
  },
]
