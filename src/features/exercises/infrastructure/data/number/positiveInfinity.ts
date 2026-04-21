import type { Exercise } from '@/shared/types/exercises'

export const positiveInfinityExercises: Exercise[] = [
  {
    slug: 'number-positive-infinity-1',
    title: 'Number.POSITIVE_INFINITY — equals Infinity',
    description: `## Number.POSITIVE_INFINITY

\`Number.POSITIVE_INFINITY\` equals the global \`Infinity\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'POSITIVE_INFINITY',
    initialCode: `const posInf = Number.POSITIVE_INFINITY`,
    solution: `const posInf = Number.POSITIVE_INFINITY`,
    tests: [
      { description: 'equals Infinity', assertion: 'expect(Number.POSITIVE_INFINITY).toBe(Infinity)' },
      { description: 'is positive', assertion: 'expect(Number.POSITIVE_INFINITY > 0).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.POSITIVE_INFINITY).toBe('number')" },
      { description: 'greater than any finite number', assertion: 'expect(Number.POSITIVE_INFINITY > 1e308).toBe(true)' },
      { description: 'greater than MAX_VALUE', assertion: 'expect(Number.POSITIVE_INFINITY > Number.MAX_VALUE).toBe(true)' },
    ],
    hints: ['`POSITIVE_INFINITY` is equivalent to the global `Infinity`.'],
    tags: ['Number', 'POSITIVE_INFINITY', 'static-property', 'beginner'],
    usageExample: {
      code: `// Represents positive infinity
Number.POSITIVE_INFINITY          // → Infinity
1 / 0 === Number.POSITIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.POSITIVE_INFINITY to represent or compare against positive infinity, such as when a computation overflows.',
        es: 'Usa Number.POSITIVE_INFINITY para representar o comparar con el infinito positivo, por ejemplo cuando un cálculo se desborda hacia arriba.',
      },
    },
  },
  {
    slug: 'number-positive-infinity-2',
    title: 'Number.POSITIVE_INFINITY — comparison with MAX_VALUE',
    description: `## POSITIVE_INFINITY vs MAX_VALUE

\`Number.POSITIVE_INFINITY\` is greater than \`Number.MAX_VALUE\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'POSITIVE_INFINITY',
    initialCode: `const greaterThanMax = Number.POSITIVE_INFINITY > Number.MAX_VALUE`,
    solution: `const greaterThanMax = Number.POSITIVE_INFINITY > Number.MAX_VALUE`,
    tests: [
      { description: 'POSITIVE_INFINITY > MAX_VALUE', assertion: 'expect(Number.POSITIVE_INFINITY > Number.MAX_VALUE).toBe(true)' },
      { description: 'MAX_VALUE is finite', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
      { description: 'POSITIVE_INFINITY is not finite', assertion: 'expect(Number.isFinite(Number.POSITIVE_INFINITY)).toBe(false)' },
      { description: 'POSITIVE_INFINITY > NEGATIVE_INFINITY', assertion: 'expect(Number.POSITIVE_INFINITY > Number.NEGATIVE_INFINITY).toBe(true)' },
      { description: 'MAX_VALUE * 2 equals POSITIVE_INFINITY', assertion: 'expect(Number.MAX_VALUE * 2).toBe(Number.POSITIVE_INFINITY)' },
    ],
    hints: ['`Infinity` is beyond the representable float range — it is not a finite number.'],
    tags: ['Number', 'POSITIVE_INFINITY', 'MAX_VALUE', 'beginner'],
    usageExample: {
      code: `// Represents positive infinity
Number.POSITIVE_INFINITY          // → Infinity
1 / 0 === Number.POSITIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.POSITIVE_INFINITY to represent or compare against positive infinity, such as when a computation overflows.',
        es: 'Usa Number.POSITIVE_INFINITY para representar o comparar con el infinito positivo, por ejemplo cuando un cálculo se desborda hacia arriba.',
      },
    },
  },
  {
    slug: 'number-positive-infinity-3',
    title: 'Number.POSITIVE_INFINITY — 1/0',
    description: `## Producing POSITIVE_INFINITY

Dividing any positive number by \`0\` produces \`Infinity\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'POSITIVE_INFINITY',
    initialCode: `const result = 1 / 0`,
    solution: `const result = 1 / 0`,
    tests: [
      { description: '1/0 equals POSITIVE_INFINITY', assertion: 'expect(1 / 0).toBe(Number.POSITIVE_INFINITY)' },
      { description: '1/0 equals Infinity', assertion: 'expect(1 / 0).toBe(Infinity)' },
      { description: '-1/0 equals NEGATIVE_INFINITY', assertion: 'expect(-1 / 0).toBe(Number.NEGATIVE_INFINITY)' },
      { description: 'MAX_VALUE * 2 gives Infinity', assertion: 'expect(Number.MAX_VALUE * 2).toBe(Infinity)' },
      { description: 'typeof 1/0 is number', assertion: "expect(typeof (1 / 0)).toBe('number')" },
    ],
    hints: ['In JavaScript, dividing a positive number by 0 gives `Infinity`.'],
    tags: ['Number', 'POSITIVE_INFINITY', 'division', 'beginner'],
    usageExample: {
      code: `// Represents positive infinity
Number.POSITIVE_INFINITY          // → Infinity
1 / 0 === Number.POSITIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.POSITIVE_INFINITY to represent or compare against positive infinity, such as when a computation overflows.',
        es: 'Usa Number.POSITIVE_INFINITY para representar o comparar con el infinito positivo, por ejemplo cuando un cálculo se desborda hacia arriba.',
      },
    },
  },
  {
    slug: 'number-positive-infinity-4',
    title: 'Number.POSITIVE_INFINITY — isFinite returns false',
    description: `## POSITIVE_INFINITY is Not Finite`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'POSITIVE_INFINITY',
    initialCode: `const finite = Number.isFinite(Number.POSITIVE_INFINITY)`,
    solution: `const finite = Number.isFinite(Number.POSITIVE_INFINITY)`,
    tests: [
      { description: 'isFinite returns false', assertion: 'expect(Number.isFinite(Number.POSITIVE_INFINITY)).toBe(false)' },
      { description: 'isFinite(0) is true', assertion: 'expect(Number.isFinite(0)).toBe(true)' },
      { description: 'isFinite(1e308) is true', assertion: 'expect(Number.isFinite(1e308)).toBe(true)' },
      { description: 'isFinite(-Infinity) is false', assertion: 'expect(Number.isFinite(-Infinity)).toBe(false)' },
      { description: 'isFinite(NaN) is false', assertion: 'expect(Number.isFinite(NaN)).toBe(false)' },
    ],
    hints: ['`Infinity` is not finite — only real numbers pass `isFinite`.'],
    tags: ['Number', 'POSITIVE_INFINITY', 'isFinite', 'beginner'],
    usageExample: {
      code: `// Represents positive infinity
Number.POSITIVE_INFINITY          // → Infinity
1 / 0 === Number.POSITIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.POSITIVE_INFINITY to represent or compare against positive infinity, such as when a computation overflows.',
        es: 'Usa Number.POSITIVE_INFINITY para representar o comparar con el infinito positivo, por ejemplo cuando un cálculo se desborda hacia arriba.',
      },
    },
  },
  {
    slug: 'number-positive-infinity-5',
    title: 'Number.POSITIVE_INFINITY — typeof',
    description: `## typeof POSITIVE_INFINITY`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'POSITIVE_INFINITY',
    initialCode: `const t = typeof Number.POSITIVE_INFINITY`,
    solution: `const t = typeof Number.POSITIVE_INFINITY`,
    tests: [
      { description: "typeof is 'number'", assertion: "expect(typeof Number.POSITIVE_INFINITY).toBe('number')" },
      { description: 'isNaN is false', assertion: 'expect(Number.isNaN(Number.POSITIVE_INFINITY)).toBe(false)' },
      { description: 'equals Infinity', assertion: 'expect(Number.POSITIVE_INFINITY === Infinity).toBe(true)' },
      { description: 'is greater than 0', assertion: 'expect(Number.POSITIVE_INFINITY > 0).toBe(true)' },
      { description: 'negation is NEGATIVE_INFINITY', assertion: 'expect(-Number.POSITIVE_INFINITY).toBe(-Infinity)' },
    ],
    hints: ['Infinities have `typeof === "number"`.'],
    tags: ['Number', 'POSITIVE_INFINITY', 'typeof', 'beginner'],
    usageExample: {
      code: `// Represents positive infinity
Number.POSITIVE_INFINITY          // → Infinity
1 / 0 === Number.POSITIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.POSITIVE_INFINITY to represent or compare against positive infinity, such as when a computation overflows.',
        es: 'Usa Number.POSITIVE_INFINITY para representar o comparar con el infinito positivo, por ejemplo cuando un cálculo se desborda hacia arriba.',
      },
    },
  },
]
