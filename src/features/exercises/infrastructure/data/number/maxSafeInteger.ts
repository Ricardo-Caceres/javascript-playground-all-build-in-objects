import type { Exercise } from '@/shared/types/exercises'

export const maxSafeIntegerExercises: Exercise[] = [
  {
    slug: 'number-max-safe-integer-1',
    title: 'Number.MAX_SAFE_INTEGER — the value',
    description: `## Number.MAX_SAFE_INTEGER

\`Number.MAX_SAFE_INTEGER\` equals \`2^53 - 1 = 9007199254740991\` — the largest integer that can be represented exactly.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_SAFE_INTEGER',
    initialCode: `// What is Number.MAX_SAFE_INTEGER?
const max = Number.MAX_SAFE_INTEGER`,
    solution: `const max = Number.MAX_SAFE_INTEGER`,
    tests: [
      { description: 'equals 9007199254740991', assertion: 'expect(Number.MAX_SAFE_INTEGER).toBe(9007199254740991)' },
      { description: 'equals 2^53 - 1', assertion: 'expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2, 53) - 1)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.MAX_SAFE_INTEGER).toBe('number')" },
      { description: 'is positive', assertion: 'expect(Number.MAX_SAFE_INTEGER > 0).toBe(true)' },
      { description: 'isSafeInteger returns true', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
    ],
    hints: ['`MAX_SAFE_INTEGER` is 2^53 - 1, the largest integer without precision loss.'],
    tags: ['Number', 'MAX_SAFE_INTEGER', 'static-property', 'beginner'],
    usageExample: {
      code: `// Largest safely representable integer
Number.MAX_SAFE_INTEGER   // → 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MAX_SAFE_INTEGER as the upper bound when working with integers to avoid silent precision loss.',
        es: 'Usa Number.MAX_SAFE_INTEGER como límite superior al trabajar con enteros para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-max-safe-integer-2',
    title: 'Number.MAX_SAFE_INTEGER — adding 1 loses precision',
    description: `## Precision Loss Beyond MAX_SAFE_INTEGER

Adding 1 to \`Number.MAX_SAFE_INTEGER\` produces an incorrect result due to precision loss.

\`\`\`ts
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2  // → true!
\`\`\``,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MAX_SAFE_INTEGER',
    initialCode: `// Demonstrate precision loss beyond MAX_SAFE_INTEGER
const max = Number.MAX_SAFE_INTEGER`,
    solution: `const max = Number.MAX_SAFE_INTEGER`,
    tests: [
      { description: 'MAX + 1 equals MAX + 2', assertion: 'expect(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2).toBe(true)' },
      { description: 'MAX + 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)' },
      { description: 'MAX itself is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
      { description: 'MAX - 1 is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1)).toBe(true)' },
      { description: 'large number loses precision', assertion: 'expect(9007199254740992 === 9007199254740993).toBe(true)' },
    ],
    hints: ['Beyond `MAX_SAFE_INTEGER`, integers can no longer be represented exactly.'],
    tags: ['Number', 'MAX_SAFE_INTEGER', 'precision', 'intermediate'],
    usageExample: {
      code: `// Largest safely representable integer
Number.MAX_SAFE_INTEGER   // → 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MAX_SAFE_INTEGER as the upper bound when working with integers to avoid silent precision loss.',
        es: 'Usa Number.MAX_SAFE_INTEGER como límite superior al trabajar con enteros para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-max-safe-integer-3',
    title: 'Number.MAX_SAFE_INTEGER — isSafeInteger at boundary',
    description: `## isSafeInteger at the Boundary

Test \`Number.isSafeInteger\` exactly at and around \`MAX_SAFE_INTEGER\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_SAFE_INTEGER',
    initialCode: `// Test isSafeInteger near MAX_SAFE_INTEGER
const atBoundary = Number.isSafeInteger(Number.MAX_SAFE_INTEGER)`,
    solution: `const atBoundary = Number.isSafeInteger(Number.MAX_SAFE_INTEGER)`,
    tests: [
      { description: 'MAX is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
      { description: 'MAX + 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)' },
      { description: 'MAX - 1 is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1)).toBe(true)' },
      { description: '0 is safe', assertion: 'expect(Number.isSafeInteger(0)).toBe(true)' },
      { description: 'Infinity is not safe', assertion: 'expect(Number.isSafeInteger(Infinity)).toBe(false)' },
    ],
    hints: ['`isSafeInteger` returns `true` only for integers within the safe range.'],
    tags: ['Number', 'MAX_SAFE_INTEGER', 'isSafeInteger', 'beginner'],
    usageExample: {
      code: `// Largest safely representable integer
Number.MAX_SAFE_INTEGER   // → 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MAX_SAFE_INTEGER as the upper bound when working with integers to avoid silent precision loss.',
        es: 'Usa Number.MAX_SAFE_INTEGER como límite superior al trabajar con enteros para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-max-safe-integer-4',
    title: 'Number.MAX_SAFE_INTEGER — type',
    description: `## Type of MAX_SAFE_INTEGER

Verify the type of \`Number.MAX_SAFE_INTEGER\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_SAFE_INTEGER',
    initialCode: `const t = typeof Number.MAX_SAFE_INTEGER`,
    solution: `const t = typeof Number.MAX_SAFE_INTEGER`,
    tests: [
      { description: 'typeof is number', assertion: "expect(typeof Number.MAX_SAFE_INTEGER).toBe('number')" },
      { description: 'isInteger returns true', assertion: 'expect(Number.isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
      { description: 'isFinite returns true', assertion: 'expect(Number.isFinite(Number.MAX_SAFE_INTEGER)).toBe(true)' },
      { description: 'isNaN returns false', assertion: 'expect(Number.isNaN(Number.MAX_SAFE_INTEGER)).toBe(false)' },
      { description: 'greater than 0', assertion: 'expect(Number.MAX_SAFE_INTEGER > 0).toBe(true)' },
    ],
    hints: ['`MAX_SAFE_INTEGER` is a regular `number` constant.'],
    tags: ['Number', 'MAX_SAFE_INTEGER', 'type', 'beginner'],
    usageExample: {
      code: `// Largest safely representable integer
Number.MAX_SAFE_INTEGER   // → 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MAX_SAFE_INTEGER as the upper bound when working with integers to avoid silent precision loss.',
        es: 'Usa Number.MAX_SAFE_INTEGER como límite superior al trabajar con enteros para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-max-safe-integer-5',
    title: 'Number.MAX_SAFE_INTEGER — usage in loop bounds',
    description: `## Using MAX_SAFE_INTEGER as a Loop Bound

You can use \`Number.MAX_SAFE_INTEGER\` to ensure loop counters stay in the safe integer range.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MAX_SAFE_INTEGER',
    initialCode: `function isBelowMax(n: number): boolean {
  // Return true if n <= Number.MAX_SAFE_INTEGER
}`,
    solution: `function isBelowMax(n: number): boolean {
  return n <= Number.MAX_SAFE_INTEGER
}`,
    tests: [
      { description: '100 is below max', assertion: 'expect(100 <= Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'MAX is at limit', assertion: 'expect(Number.MAX_SAFE_INTEGER <= Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'MAX + 1 exceeds limit', assertion: 'expect(Number.MAX_SAFE_INTEGER + 1 <= Number.MAX_SAFE_INTEGER).toBe(false)' },
      { description: 'negative numbers are below', assertion: 'expect(-1 <= Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'Infinity exceeds MAX', assertion: 'expect(Infinity <= Number.MAX_SAFE_INTEGER).toBe(false)' },
    ],
    hints: ['Comparing against `MAX_SAFE_INTEGER` ensures your integer arithmetic is safe.'],
    tags: ['Number', 'MAX_SAFE_INTEGER', 'bounds', 'intermediate'],
    usageExample: {
      code: `// Largest safely representable integer
Number.MAX_SAFE_INTEGER   // → 9007199254740991
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MAX_SAFE_INTEGER as the upper bound when working with integers to avoid silent precision loss.',
        es: 'Usa Number.MAX_SAFE_INTEGER como límite superior al trabajar con enteros para evitar pérdida silenciosa de precisión.',
      },
    },
  },
]
