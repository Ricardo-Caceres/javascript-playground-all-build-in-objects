import type { Exercise } from '@/shared/types/exercises'

export const minValueExercises: Exercise[] = [
  {
    slug: 'number-min-value-1',
    title: 'Number.MIN_VALUE — it is positive!',
    description: `## Number.MIN_VALUE

\`Number.MIN_VALUE\` is approximately \`5e-324\` — the **smallest positive** number representable in JavaScript. It is NOT the most negative number!`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_VALUE',
    initialCode: `// MIN_VALUE is the smallest POSITIVE number, not the most negative
const min = Number.MIN_VALUE`,
    solution: `const min = Number.MIN_VALUE`,
    tests: [
      { description: 'MIN_VALUE is positive', assertion: 'expect(Number.MIN_VALUE > 0).toBe(true)' },
      { description: 'MIN_VALUE is very small', assertion: 'expect(Number.MIN_VALUE < 1e-300).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.MIN_VALUE).toBe('number')" },
      { description: 'is not negative', assertion: 'expect(Number.MIN_VALUE < 0).toBe(false)' },
      { description: 'is finite', assertion: 'expect(Number.isFinite(Number.MIN_VALUE)).toBe(true)' },
    ],
    hints: ['`MIN_VALUE` is the closest positive value to zero — not the most negative number.'],
    tags: ['Number', 'MIN_VALUE', 'static-property', 'beginner'],
    usageExample: {
      code: `// Smallest positive nonzero number
Number.MIN_VALUE        // → 5e-324
Number.MIN_VALUE > 0    // → true`,
      explanation: {
        en: 'Use Number.MIN_VALUE to access the smallest positive number JavaScript can represent, not the most negative number.',
        es: 'Usa Number.MIN_VALUE para acceder al número positivo más pequeño que JavaScript puede representar, no el más negativo.',
      },
    },
  },
  {
    slug: 'number-min-value-2',
    title: 'Number.MIN_VALUE — comparison with 0',
    description: `## MIN_VALUE vs Zero

\`Number.MIN_VALUE\` is greater than 0 but smaller than any other positive number you can write as a literal.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_VALUE',
    initialCode: `const greaterThanZero = Number.MIN_VALUE > 0`,
    solution: `const greaterThanZero = Number.MIN_VALUE > 0`,
    tests: [
      { description: 'MIN_VALUE > 0', assertion: 'expect(Number.MIN_VALUE > 0).toBe(true)' },
      { description: 'MIN_VALUE !== 0', assertion: 'expect(Number.MIN_VALUE === 0).toBe(false)' },
      { description: 'MIN_VALUE < 5e-324 is false', assertion: 'expect(Number.MIN_VALUE < 5e-324).toBe(false)' },
      { description: 'half MIN_VALUE rounds to 0', assertion: 'expect(Number.MIN_VALUE / 2).toBe(0)' },
      { description: '0 is less than MIN_VALUE', assertion: 'expect(0 < Number.MIN_VALUE).toBe(true)' },
    ],
    hints: ['`MIN_VALUE / 2` rounds down to 0 because there is no smaller positive float.'],
    tags: ['Number', 'MIN_VALUE', 'zero', 'beginner'],
    usageExample: {
      code: `// Smallest positive nonzero number
Number.MIN_VALUE        // → 5e-324
Number.MIN_VALUE > 0    // → true`,
      explanation: {
        en: 'Use Number.MIN_VALUE to access the smallest positive number JavaScript can represent, not the most negative number.',
        es: 'Usa Number.MIN_VALUE para acceder al número positivo más pequeño que JavaScript puede representar, no el más negativo.',
      },
    },
  },
  {
    slug: 'number-min-value-3',
    title: 'Number.MIN_VALUE — type',
    description: `## Type of MIN_VALUE`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_VALUE',
    initialCode: `const t = typeof Number.MIN_VALUE`,
    solution: `const t = typeof Number.MIN_VALUE`,
    tests: [
      { description: 'typeof is number', assertion: "expect(typeof Number.MIN_VALUE).toBe('number')" },
      { description: 'isFinite returns true', assertion: 'expect(Number.isFinite(Number.MIN_VALUE)).toBe(true)' },
      { description: 'isNaN returns false', assertion: 'expect(Number.isNaN(Number.MIN_VALUE)).toBe(false)' },
      { description: 'isInteger returns false', assertion: 'expect(Number.isInteger(Number.MIN_VALUE)).toBe(false)' },
      { description: 'is positive', assertion: 'expect(Number.MIN_VALUE > 0).toBe(true)' },
    ],
    hints: ['`MIN_VALUE` is a plain `number` constant.'],
    tags: ['Number', 'MIN_VALUE', 'type', 'beginner'],
    usageExample: {
      code: `// Smallest positive nonzero number
Number.MIN_VALUE        // → 5e-324
Number.MIN_VALUE > 0    // → true`,
      explanation: {
        en: 'Use Number.MIN_VALUE to access the smallest positive number JavaScript can represent, not the most negative number.',
        es: 'Usa Number.MIN_VALUE para acceder al número positivo más pequeño que JavaScript puede representar, no el más negativo.',
      },
    },
  },
  {
    slug: 'number-min-value-4',
    title: 'Number.MIN_VALUE — smaller than any other positive float',
    description: `## Smallest Positive Float

No positive floating-point number smaller than \`Number.MIN_VALUE\` can be represented in JavaScript.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MIN_VALUE',
    initialCode: `// MIN_VALUE is smaller than any other positive float literal
const smaller = 5e-325`,
    solution: `const smaller = 5e-325`,
    tests: [
      { description: '5e-325 rounds to MIN_VALUE or 0', assertion: 'expect(5e-325 <= Number.MIN_VALUE).toBe(true)' },
      { description: 'MIN_VALUE compared to 1e-323', assertion: 'expect(Number.MIN_VALUE <= 1e-323).toBe(true)' },
      { description: 'MIN_VALUE is greater than 0', assertion: 'expect(Number.MIN_VALUE > 0).toBe(true)' },
      { description: 'MIN_VALUE * 2 is larger', assertion: 'expect(Number.MIN_VALUE * 2 > Number.MIN_VALUE).toBe(true)' },
      { description: 'MIN_VALUE is finite', assertion: 'expect(Number.isFinite(Number.MIN_VALUE)).toBe(true)' },
    ],
    hints: ['Attempting to represent a smaller positive float than `MIN_VALUE` results in `0`.'],
    tags: ['Number', 'MIN_VALUE', 'precision', 'intermediate'],
    usageExample: {
      code: `// Smallest positive nonzero number
Number.MIN_VALUE        // → 5e-324
Number.MIN_VALUE > 0    // → true`,
      explanation: {
        en: 'Use Number.MIN_VALUE to access the smallest positive number JavaScript can represent, not the most negative number.',
        es: 'Usa Number.MIN_VALUE para acceder al número positivo más pequeño que JavaScript puede representar, no el más negativo.',
      },
    },
  },
  {
    slug: 'number-min-value-5',
    title: 'Number.MIN_VALUE — division beyond MIN_VALUE returns 0',
    description: `## Underflow to Zero

Dividing \`Number.MIN_VALUE\` by 2 produces \`0\` (underflow).`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MIN_VALUE',
    initialCode: `const underflow = Number.MIN_VALUE / 2`,
    solution: `const underflow = Number.MIN_VALUE / 2`,
    tests: [
      { description: 'MIN_VALUE / 2 is 0', assertion: 'expect(Number.MIN_VALUE / 2).toBe(0)' },
      { description: 'MIN_VALUE itself is not 0', assertion: 'expect(Number.MIN_VALUE === 0).toBe(false)' },
      { description: 'underflow is falsy', assertion: 'expect(Number.MIN_VALUE / 2).toBeFalsy()' },
      { description: 'MIN_VALUE * 2 is fine', assertion: 'expect(Number.MIN_VALUE * 2 > 0).toBe(true)' },
      { description: 'MIN_VALUE / 10 is 0', assertion: 'expect(Number.MIN_VALUE / 10).toBe(0)' },
    ],
    hints: ['Going below `MIN_VALUE` underflows to `0` — the opposite of overflowing to `Infinity`.'],
    tags: ['Number', 'MIN_VALUE', 'underflow', 'intermediate'],
    usageExample: {
      code: `// Smallest positive nonzero number
Number.MIN_VALUE        // → 5e-324
Number.MIN_VALUE > 0    // → true`,
      explanation: {
        en: 'Use Number.MIN_VALUE to access the smallest positive number JavaScript can represent, not the most negative number.',
        es: 'Usa Number.MIN_VALUE para acceder al número positivo más pequeño que JavaScript puede representar, no el más negativo.',
      },
    },
  },
]
