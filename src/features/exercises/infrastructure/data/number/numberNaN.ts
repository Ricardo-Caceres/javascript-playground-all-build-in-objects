import type { Exercise } from '@/shared/types/exercises'

export const numberNaNExercises: Exercise[] = [
  {
    slug: 'number-nan-1',
    title: 'Number.NaN — NaN is not equal to itself',
    description: `## Number.NaN

\`Number.NaN\` is the same as the global \`NaN\`. One unique property: \`NaN !== NaN\`.

\`\`\`ts
Number.NaN === Number.NaN  // → false!
\`\`\``,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NaN',
    initialCode: `// NaN is not equal to itself
const selfEqual = Number.NaN === Number.NaN`,
    solution: `const selfEqual = Number.NaN === Number.NaN`,
    tests: [
      { description: 'NaN !== NaN', assertion: 'expect(Number.NaN === Number.NaN).toBe(false)' },
      { description: 'NaN != NaN (loose)', assertion: 'expect(Number.NaN == Number.NaN).toBe(false)' },
      { description: 'typeof NaN is number', assertion: "expect(typeof Number.NaN).toBe('number')" },
      { description: 'Number.NaN === global NaN', assertion: 'expect(Number.NaN).toBe(NaN)' },
      { description: 'NaN is falsy', assertion: 'expect(Number.NaN).toBeFalsy()' },
    ],
    hints: ['`NaN` is the only JavaScript value not equal to itself — use `Number.isNaN()` to check for it.'],
    tags: ['Number', 'NaN', 'static-property', 'beginner'],
    usageExample: {
      code: `// Represents Not-a-Number
Number.NaN        // → NaN
Number.isNaN(Number.NaN)  // → true
Number.NaN === Number.NaN // → false (NaN is never equal to itself)`,
      explanation: {
        en: 'Use Number.NaN as a named constant for Not-a-Number; always check for it with Number.isNaN() since NaN !== NaN.',
        es: 'Usa Number.NaN como constante con nombre para Not-a-Number; compruébalo siempre con Number.isNaN() ya que NaN !== NaN.',
      },
    },
  },
  {
    slug: 'number-nan-2',
    title: 'Number.NaN — isNaN check',
    description: `## Detecting NaN

Use \`Number.isNaN()\` (strict) or \`isNaN()\` (with coercion) to detect \`NaN\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NaN',
    initialCode: `const detected = Number.isNaN(Number.NaN)`,
    solution: `const detected = Number.isNaN(Number.NaN)`,
    tests: [
      { description: 'Number.isNaN(Number.NaN) is true', assertion: 'expect(Number.isNaN(Number.NaN)).toBe(true)' },
      { description: 'isNaN(Number.NaN) is true', assertion: 'expect(isNaN(Number.NaN)).toBe(true)' },
      { description: 'Number.isNaN(1) is false', assertion: 'expect(Number.isNaN(1)).toBe(false)' },
      { description: 'Number.isNaN(0/0) is true', assertion: 'expect(Number.isNaN(0/0)).toBe(true)' },
      { description: 'Number.isNaN(undefined) is false', assertion: 'expect(Number.isNaN(undefined)).toBe(false)' },
    ],
    hints: ['`Number.isNaN()` only returns `true` for actual `NaN` values.'],
    tags: ['Number', 'NaN', 'isNaN', 'beginner'],
    usageExample: {
      code: `// Represents Not-a-Number
Number.NaN        // → NaN
Number.isNaN(Number.NaN)  // → true
Number.NaN === Number.NaN // → false (NaN is never equal to itself)`,
      explanation: {
        en: 'Use Number.NaN as a named constant for Not-a-Number; always check for it with Number.isNaN() since NaN !== NaN.',
        es: 'Usa Number.NaN como constante con nombre para Not-a-Number; compruébalo siempre con Number.isNaN() ya que NaN !== NaN.',
      },
    },
  },
  {
    slug: 'number-nan-3',
    title: 'Number.NaN — typeof',
    description: `## typeof NaN

Despite its name, \`NaN\`'s type is \`'number'\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NaN',
    initialCode: `const t = typeof Number.NaN`,
    solution: `const t = typeof Number.NaN`,
    tests: [
      { description: "typeof Number.NaN is 'number'", assertion: "expect(typeof Number.NaN).toBe('number')" },
      { description: "typeof NaN is 'number'", assertion: "expect(typeof NaN).toBe('number')" },
      { description: 'NaN is not a finite number', assertion: 'expect(Number.isFinite(Number.NaN)).toBe(false)' },
      { description: 'NaN is not an integer', assertion: 'expect(Number.isInteger(Number.NaN)).toBe(false)' },
      { description: 'NaN is not a safe integer', assertion: 'expect(Number.isSafeInteger(Number.NaN)).toBe(false)' },
    ],
    hints: ['`NaN` stands for "Not a Number" yet its typeof is `"number"` — a famous JS quirk.'],
    tags: ['Number', 'NaN', 'typeof', 'beginner'],
    usageExample: {
      code: `// Represents Not-a-Number
Number.NaN        // → NaN
Number.isNaN(Number.NaN)  // → true
Number.NaN === Number.NaN // → false (NaN is never equal to itself)`,
      explanation: {
        en: 'Use Number.NaN as a named constant for Not-a-Number; always check for it with Number.isNaN() since NaN !== NaN.',
        es: 'Usa Number.NaN como constante con nombre para Not-a-Number; compruébalo siempre con Number.isNaN() ya que NaN !== NaN.',
      },
    },
  },
  {
    slug: 'number-nan-4',
    title: 'Number.NaN — Number.isNaN vs global isNaN',
    description: `## Number.isNaN vs global isNaN

\`Number.isNaN()\` does NOT coerce its argument, while global \`isNaN()\` does.

\`\`\`ts
isNaN('hello')        // → true  (coerces 'hello' → NaN first)
Number.isNaN('hello') // → false (no coercion)
\`\`\``,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'NaN',
    initialCode: `// Compare the two isNaN functions
const global = isNaN('hello')
const strict = Number.isNaN('hello')`,
    solution: `const global = isNaN('hello')
const strict = Number.isNaN('hello')`,
    tests: [
      { description: 'global isNaN("hello") is true', assertion: "expect(isNaN('hello')).toBe(true)" },
      { description: 'Number.isNaN("hello") is false', assertion: "expect(Number.isNaN('hello')).toBe(false)" },
      { description: 'global isNaN(undefined) is true', assertion: 'expect(isNaN(undefined)).toBe(true)' },
      { description: 'Number.isNaN(undefined) is false', assertion: 'expect(Number.isNaN(undefined)).toBe(false)' },
      { description: 'both agree on actual NaN', assertion: 'expect(isNaN(NaN) === Number.isNaN(NaN)).toBe(true)' },
    ],
    hints: ['Prefer `Number.isNaN()` in modern code to avoid unexpected coercion.'],
    tags: ['Number', 'NaN', 'isNaN', 'coercion', 'intermediate'],
    usageExample: {
      code: `// Represents Not-a-Number
Number.NaN        // → NaN
Number.isNaN(Number.NaN)  // → true
Number.NaN === Number.NaN // → false (NaN is never equal to itself)`,
      explanation: {
        en: 'Use Number.NaN as a named constant for Not-a-Number; always check for it with Number.isNaN() since NaN !== NaN.',
        es: 'Usa Number.NaN como constante con nombre para Not-a-Number; compruébalo siempre con Number.isNaN() ya que NaN !== NaN.',
      },
    },
  },
  {
    slug: 'number-nan-5',
    title: 'Number.NaN — producing NaN through operations',
    description: `## Operations That Produce NaN

Certain operations produce \`NaN\`: dividing 0 by 0, parsing non-numeric strings, etc.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NaN',
    initialCode: `// Operations that produce NaN
const a = 0 / 0
const b = Number('abc')`,
    solution: `const a = 0 / 0
const b = Number('abc')`,
    tests: [
      { description: '0/0 is NaN', assertion: 'expect(Number.isNaN(0/0)).toBe(true)' },
      { description: 'Number("abc") is NaN', assertion: "expect(Number.isNaN(Number('abc'))).toBe(true)" },
      { description: 'Math.sqrt(-1) is NaN', assertion: 'expect(Number.isNaN(Math.sqrt(-1))).toBe(true)' },
      { description: 'Infinity - Infinity is NaN', assertion: 'expect(Number.isNaN(Infinity - Infinity)).toBe(true)' },
      { description: 'NaN * 0 is NaN', assertion: 'expect(Number.isNaN(NaN * 0)).toBe(true)' },
    ],
    hints: ['`NaN` propagates — any arithmetic involving `NaN` produces `NaN`.'],
    tags: ['Number', 'NaN', 'operations', 'beginner'],
    usageExample: {
      code: `// Represents Not-a-Number
Number.NaN        // → NaN
Number.isNaN(Number.NaN)  // → true
Number.NaN === Number.NaN // → false (NaN is never equal to itself)`,
      explanation: {
        en: 'Use Number.NaN as a named constant for Not-a-Number; always check for it with Number.isNaN() since NaN !== NaN.',
        es: 'Usa Number.NaN como constante con nombre para Not-a-Number; compruébalo siempre con Number.isNaN() ya que NaN !== NaN.',
      },
    },
  },
]
