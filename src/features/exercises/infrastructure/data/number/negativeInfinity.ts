import type { Exercise } from '@/shared/types/exercises'

export const negativeInfinityExercises: Exercise[] = [
  {
    slug: 'number-negative-infinity-1',
    title: 'Number.NEGATIVE_INFINITY — equals -Infinity',
    description: `## Number.NEGATIVE_INFINITY

\`Number.NEGATIVE_INFINITY\` equals the global \`-Infinity\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NEGATIVE_INFINITY',
    initialCode: `const negInf = Number.NEGATIVE_INFINITY`,
    solution: `const negInf = Number.NEGATIVE_INFINITY`,
    tests: [
      { description: 'equals -Infinity', assertion: 'expect(Number.NEGATIVE_INFINITY).toBe(-Infinity)' },
      { description: 'is negative', assertion: 'expect(Number.NEGATIVE_INFINITY < 0).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.NEGATIVE_INFINITY).toBe('number')" },
      { description: 'less than any finite number', assertion: 'expect(Number.NEGATIVE_INFINITY < -1e308).toBe(true)' },
      { description: 'less than MIN_VALUE', assertion: 'expect(Number.NEGATIVE_INFINITY < Number.MIN_VALUE).toBe(true)' },
    ],
    hints: ['`NEGATIVE_INFINITY` is equivalent to the global `-Infinity`.'],
    tags: ['Number', 'NEGATIVE_INFINITY', 'static-property', 'beginner'],
    usageExample: {
      code: `// Represents negative infinity
Number.NEGATIVE_INFINITY          // → -Infinity
-1 / 0 === Number.NEGATIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.NEGATIVE_INFINITY to represent or compare against negative infinity, such as when a computation underflows.',
        es: 'Usa Number.NEGATIVE_INFINITY para representar o comparar con el infinito negativo, por ejemplo cuando un cálculo desborda hacia abajo.',
      },
    },
  },
  {
    slug: 'number-negative-infinity-2',
    title: 'Number.NEGATIVE_INFINITY — comparison with MIN_VALUE',
    description: `## NEGATIVE_INFINITY vs MIN_VALUE

\`Number.NEGATIVE_INFINITY\` is less than \`Number.MIN_VALUE\` (the smallest positive number).`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NEGATIVE_INFINITY',
    initialCode: `const lessThanMin = Number.NEGATIVE_INFINITY < Number.MIN_VALUE`,
    solution: `const lessThanMin = Number.NEGATIVE_INFINITY < Number.MIN_VALUE`,
    tests: [
      { description: 'NEGATIVE_INFINITY < MIN_VALUE', assertion: 'expect(Number.NEGATIVE_INFINITY < Number.MIN_VALUE).toBe(true)' },
      { description: 'NEGATIVE_INFINITY < 0', assertion: 'expect(Number.NEGATIVE_INFINITY < 0).toBe(true)' },
      { description: 'MIN_VALUE > 0', assertion: 'expect(Number.MIN_VALUE > 0).toBe(true)' },
      { description: 'NEGATIVE_INFINITY < MIN_SAFE_INTEGER', assertion: 'expect(Number.NEGATIVE_INFINITY < Number.MIN_SAFE_INTEGER).toBe(true)' },
      { description: 'POSITIVE_INFINITY > NEGATIVE_INFINITY', assertion: 'expect(Number.POSITIVE_INFINITY > Number.NEGATIVE_INFINITY).toBe(true)' },
    ],
    hints: ['`NEGATIVE_INFINITY` is less than every finite number, including the tiny positive `MIN_VALUE`.'],
    tags: ['Number', 'NEGATIVE_INFINITY', 'MIN_VALUE', 'beginner'],
    usageExample: {
      code: `// Represents negative infinity
Number.NEGATIVE_INFINITY          // → -Infinity
-1 / 0 === Number.NEGATIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.NEGATIVE_INFINITY to represent or compare against negative infinity, such as when a computation underflows.',
        es: 'Usa Number.NEGATIVE_INFINITY para representar o comparar con el infinito negativo, por ejemplo cuando un cálculo desborda hacia abajo.',
      },
    },
  },
  {
    slug: 'number-negative-infinity-3',
    title: 'Number.NEGATIVE_INFINITY — -1/0',
    description: `## Producing NEGATIVE_INFINITY

Dividing \`-1\` by \`0\` produces \`-Infinity\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NEGATIVE_INFINITY',
    initialCode: `const result = -1 / 0`,
    solution: `const result = -1 / 0`,
    tests: [
      { description: '-1/0 equals NEGATIVE_INFINITY', assertion: 'expect(-1 / 0).toBe(Number.NEGATIVE_INFINITY)' },
      { description: '-1/0 equals -Infinity', assertion: 'expect(-1 / 0).toBe(-Infinity)' },
      { description: '1/0 equals POSITIVE_INFINITY', assertion: 'expect(1 / 0).toBe(Number.POSITIVE_INFINITY)' },
      { description: 'large negative * large negative gives Infinity', assertion: 'expect(-Number.MAX_VALUE * 2).toBe(-Infinity)' },
      { description: 'typeof -1/0 is number', assertion: "expect(typeof (-1 / 0)).toBe('number')" },
    ],
    hints: ['In JavaScript, dividing a negative number by 0 gives `-Infinity`.'],
    tags: ['Number', 'NEGATIVE_INFINITY', 'division', 'beginner'],
    usageExample: {
      code: `// Represents negative infinity
Number.NEGATIVE_INFINITY          // → -Infinity
-1 / 0 === Number.NEGATIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.NEGATIVE_INFINITY to represent or compare against negative infinity, such as when a computation underflows.',
        es: 'Usa Number.NEGATIVE_INFINITY para representar o comparar con el infinito negativo, por ejemplo cuando un cálculo desborda hacia abajo.',
      },
    },
  },
  {
    slug: 'number-negative-infinity-4',
    title: 'Number.NEGATIVE_INFINITY — isFinite returns false',
    description: `## NEGATIVE_INFINITY is Not Finite

\`Number.isFinite(Number.NEGATIVE_INFINITY)\` returns \`false\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NEGATIVE_INFINITY',
    initialCode: `const finite = Number.isFinite(Number.NEGATIVE_INFINITY)`,
    solution: `const finite = Number.isFinite(Number.NEGATIVE_INFINITY)`,
    tests: [
      { description: 'isFinite returns false', assertion: 'expect(Number.isFinite(Number.NEGATIVE_INFINITY)).toBe(false)' },
      { description: 'isFinite(0) is true', assertion: 'expect(Number.isFinite(0)).toBe(true)' },
      { description: 'isFinite(-1e308) is true', assertion: 'expect(Number.isFinite(-1e308)).toBe(true)' },
      { description: 'isFinite(Infinity) is false', assertion: 'expect(Number.isFinite(Infinity)).toBe(false)' },
      { description: 'isFinite(NaN) is false', assertion: 'expect(Number.isFinite(NaN)).toBe(false)' },
    ],
    hints: ['Only `Infinity`, `-Infinity`, and `NaN` fail `Number.isFinite`.'],
    tags: ['Number', 'NEGATIVE_INFINITY', 'isFinite', 'beginner'],
    usageExample: {
      code: `// Represents negative infinity
Number.NEGATIVE_INFINITY          // → -Infinity
-1 / 0 === Number.NEGATIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.NEGATIVE_INFINITY to represent or compare against negative infinity, such as when a computation underflows.',
        es: 'Usa Number.NEGATIVE_INFINITY para representar o comparar con el infinito negativo, por ejemplo cuando un cálculo desborda hacia abajo.',
      },
    },
  },
  {
    slug: 'number-negative-infinity-5',
    title: 'Number.NEGATIVE_INFINITY — typeof',
    description: `## typeof NEGATIVE_INFINITY`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'NEGATIVE_INFINITY',
    initialCode: `const t = typeof Number.NEGATIVE_INFINITY`,
    solution: `const t = typeof Number.NEGATIVE_INFINITY`,
    tests: [
      { description: "typeof is 'number'", assertion: "expect(typeof Number.NEGATIVE_INFINITY).toBe('number')" },
      { description: 'isNaN is false', assertion: 'expect(Number.isNaN(Number.NEGATIVE_INFINITY)).toBe(false)' },
      { description: 'equals -Infinity', assertion: 'expect(Number.NEGATIVE_INFINITY === -Infinity).toBe(true)' },
      { description: 'is less than 0', assertion: 'expect(Number.NEGATIVE_INFINITY < 0).toBe(true)' },
      { description: 'negation is POSITIVE_INFINITY', assertion: 'expect(-Number.NEGATIVE_INFINITY).toBe(Infinity)' },
    ],
    hints: ['Infinities are `number` type, just like finite numbers.'],
    tags: ['Number', 'NEGATIVE_INFINITY', 'typeof', 'beginner'],
    usageExample: {
      code: `// Represents negative infinity
Number.NEGATIVE_INFINITY          // → -Infinity
-1 / 0 === Number.NEGATIVE_INFINITY   // → true`,
      explanation: {
        en: 'Use Number.NEGATIVE_INFINITY to represent or compare against negative infinity, such as when a computation underflows.',
        es: 'Usa Number.NEGATIVE_INFINITY para representar o comparar con el infinito negativo, por ejemplo cuando un cálculo desborda hacia abajo.',
      },
    },
  },
]
