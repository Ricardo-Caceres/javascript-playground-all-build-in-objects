import type { Exercise } from '@/shared/types/exercises'

export const minSafeIntegerExercises: Exercise[] = [
  {
    slug: 'number-min-safe-integer-1',
    title: 'Number.MIN_SAFE_INTEGER — the value',
    description: `## Number.MIN_SAFE_INTEGER

\`Number.MIN_SAFE_INTEGER\` equals \`-(2^53 - 1) = -9007199254740991\` — the most negative integer that can be represented exactly.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_SAFE_INTEGER',
    initialCode: `const min = Number.MIN_SAFE_INTEGER`,
    solution: `const min = Number.MIN_SAFE_INTEGER`,
    tests: [
      { description: 'equals -9007199254740991', assertion: 'expect(Number.MIN_SAFE_INTEGER).toBe(-9007199254740991)' },
      { description: 'equals -(2^53 - 1)', assertion: 'expect(Number.MIN_SAFE_INTEGER).toBe(-(Math.pow(2, 53) - 1))' },
      { description: 'is negative', assertion: 'expect(Number.MIN_SAFE_INTEGER < 0).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.MIN_SAFE_INTEGER).toBe('number')" },
      { description: 'isSafeInteger returns true', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)' },
    ],
    hints: ['`MIN_SAFE_INTEGER` is the negative counterpart of `MAX_SAFE_INTEGER`.'],
    tags: ['Number', 'MIN_SAFE_INTEGER', 'static-property', 'beginner'],
    usageExample: {
      code: `// Most negative safely representable integer
Number.MIN_SAFE_INTEGER   // → -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MIN_SAFE_INTEGER as the lower bound when working with negative integers to avoid silent precision loss.',
        es: 'Usa Number.MIN_SAFE_INTEGER como límite inferior al trabajar con enteros negativos para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-min-safe-integer-2',
    title: 'Number.MIN_SAFE_INTEGER — relationship to MAX_SAFE_INTEGER',
    description: `## MIN and MAX Safe Integer Relationship

\`Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER\``,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_SAFE_INTEGER',
    initialCode: `const isNegMax = Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER`,
    solution: `const isNegMax = Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER`,
    tests: [
      { description: 'MIN equals -MAX', assertion: 'expect(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'MIN + MAX equals 0', assertion: 'expect(Number.MIN_SAFE_INTEGER + Number.MAX_SAFE_INTEGER).toBe(0)' },
      { description: 'abs(MIN) equals MAX', assertion: 'expect(Math.abs(Number.MIN_SAFE_INTEGER) === Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'MIN is less than MAX', assertion: 'expect(Number.MIN_SAFE_INTEGER < Number.MAX_SAFE_INTEGER).toBe(true)' },
      { description: 'both are safe integers', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER) && Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
    ],
    hints: ['The safe integer range is symmetric around zero.'],
    tags: ['Number', 'MIN_SAFE_INTEGER', 'MAX_SAFE_INTEGER', 'beginner'],
    usageExample: {
      code: `// Most negative safely representable integer
Number.MIN_SAFE_INTEGER   // → -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MIN_SAFE_INTEGER as the lower bound when working with negative integers to avoid silent precision loss.',
        es: 'Usa Number.MIN_SAFE_INTEGER como límite inferior al trabajar con enteros negativos para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-min-safe-integer-3',
    title: 'Number.MIN_SAFE_INTEGER — isSafeInteger at boundary',
    description: `## isSafeInteger at MIN_SAFE_INTEGER Boundary

Test \`Number.isSafeInteger\` at and around \`MIN_SAFE_INTEGER\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MIN_SAFE_INTEGER',
    initialCode: `const atBoundary = Number.isSafeInteger(Number.MIN_SAFE_INTEGER)`,
    solution: `const atBoundary = Number.isSafeInteger(Number.MIN_SAFE_INTEGER)`,
    tests: [
      { description: 'MIN is safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)' },
      { description: 'MIN - 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false)' },
      { description: 'MIN + 1 is safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1)).toBe(true)' },
      { description: '-42 is safe', assertion: 'expect(Number.isSafeInteger(-42)).toBe(true)' },
      { description: '-Infinity is not safe', assertion: 'expect(Number.isSafeInteger(-Infinity)).toBe(false)' },
    ],
    hints: ['Safe integers span from `MIN_SAFE_INTEGER` to `MAX_SAFE_INTEGER` inclusive.'],
    tags: ['Number', 'MIN_SAFE_INTEGER', 'isSafeInteger', 'intermediate'],
    usageExample: {
      code: `// Most negative safely representable integer
Number.MIN_SAFE_INTEGER   // → -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MIN_SAFE_INTEGER as the lower bound when working with negative integers to avoid silent precision loss.',
        es: 'Usa Number.MIN_SAFE_INTEGER como límite inferior al trabajar con enteros negativos para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-min-safe-integer-4',
    title: 'Number.MIN_SAFE_INTEGER — type',
    description: `## Type of MIN_SAFE_INTEGER`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MIN_SAFE_INTEGER',
    initialCode: `const t = typeof Number.MIN_SAFE_INTEGER`,
    solution: `const t = typeof Number.MIN_SAFE_INTEGER`,
    tests: [
      { description: 'typeof is number', assertion: "expect(typeof Number.MIN_SAFE_INTEGER).toBe('number')" },
      { description: 'isInteger returns true', assertion: 'expect(Number.isInteger(Number.MIN_SAFE_INTEGER)).toBe(true)' },
      { description: 'isFinite returns true', assertion: 'expect(Number.isFinite(Number.MIN_SAFE_INTEGER)).toBe(true)' },
      { description: 'isNaN returns false', assertion: 'expect(Number.isNaN(Number.MIN_SAFE_INTEGER)).toBe(false)' },
      { description: 'is less than 0', assertion: 'expect(Number.MIN_SAFE_INTEGER < 0).toBe(true)' },
    ],
    hints: ['`MIN_SAFE_INTEGER` is a plain negative `number` constant.'],
    tags: ['Number', 'MIN_SAFE_INTEGER', 'type', 'beginner'],
    usageExample: {
      code: `// Most negative safely representable integer
Number.MIN_SAFE_INTEGER   // → -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MIN_SAFE_INTEGER as the lower bound when working with negative integers to avoid silent precision loss.',
        es: 'Usa Number.MIN_SAFE_INTEGER como límite inferior al trabajar con enteros negativos para evitar pérdida silenciosa de precisión.',
      },
    },
  },
  {
    slug: 'number-min-safe-integer-5',
    title: 'Number.MIN_SAFE_INTEGER — negative precision loss',
    description: `## Precision Loss Below MIN_SAFE_INTEGER

Just like positive integers beyond \`MAX_SAFE_INTEGER\`, integers below \`MIN_SAFE_INTEGER\` lose precision.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MIN_SAFE_INTEGER',
    initialCode: `// Demonstrate precision loss below MIN_SAFE_INTEGER
const belowMin = Number.MIN_SAFE_INTEGER - 1`,
    solution: `const belowMin = Number.MIN_SAFE_INTEGER - 1`,
    tests: [
      { description: 'MIN - 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false)' },
      { description: 'MIN - 1 equals MIN - 2 (precision loss)', assertion: 'expect(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2).toBe(true)' },
      { description: 'MIN is safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)' },
      { description: 'below MIN is still finite', assertion: 'expect(Number.isFinite(Number.MIN_SAFE_INTEGER - 1)).toBe(true)' },
      { description: 'precision loss is symmetric with MAX', assertion: 'expect(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2).toBe(true)' },
    ],
    hints: ['Precision loss is symmetric: it happens below `MIN_SAFE_INTEGER` just as it does above `MAX_SAFE_INTEGER`.'],
    tags: ['Number', 'MIN_SAFE_INTEGER', 'precision', 'intermediate'],
    usageExample: {
      code: `// Most negative safely representable integer
Number.MIN_SAFE_INTEGER   // → -9007199254740991
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2   // → true (unsafe!)`,
      explanation: {
        en: 'Use Number.MIN_SAFE_INTEGER as the lower bound when working with negative integers to avoid silent precision loss.',
        es: 'Usa Number.MIN_SAFE_INTEGER como límite inferior al trabajar con enteros negativos para evitar pérdida silenciosa de precisión.',
      },
    },
  },
]
