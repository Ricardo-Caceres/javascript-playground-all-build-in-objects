import type { Exercise } from '@/shared/types/exercises'

export const mathLog2EExercises: Exercise[] = [
  {
    slug: 'math-log2e-1',
    title: 'Math.LOG2E — the value',
    description: `## Math.LOG2E\n\nThe base-2 logarithm of e, approximately **1.4426950408889634**.\n\n**Challenge:** Explore the value of \`Math.LOG2E\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'LOG2E',
    initialCode: `// What is Math.LOG2E?\nconst val = Math.LOG2E`,
    solution: `const val = Math.LOG2E`,
    tests: [
      { description: 'Math.LOG2E is a number', assertion: "expect(typeof Math.LOG2E).toBe('number')" },
      { description: 'Math.LOG2E is greater than 1', assertion: "expect(Math.LOG2E > 1).toBeTruthy()" },
      { description: 'Math.LOG2E is less than 2', assertion: "expect(Math.LOG2E < 2).toBeTruthy()" },
      { description: 'Math.LOG2E is approximately 1.4426', assertion: "expect(Math.abs(Math.LOG2E - 1.4426) < 0.001).toBeTruthy()" },
      { description: 'Math.LOG2E is finite', assertion: "expect(Number.isFinite(Math.LOG2E)).toBeTruthy()" },
    ],
    hints: [
      'Math.LOG2E is log₂(e), the base-2 log of Euler\'s number.',
      'Its value is approximately 1.4426950408889634.',
    ],
    tags: ['Math', 'LOG2E', 'static-property', 'beginner'],
    usageExample: {
      code: `// Base-2 logarithm of e
Math.LOG2E   // → 1.4426950408...
// Equivalent to: 1 / Math.LN2`,
      explanation: {
        en: 'Use Math.LOG2E as a precomputed constant for converting natural log values to base-2 logarithms.',
        es: 'Usa Math.LOG2E como constante precalculada para convertir valores de logaritmo natural a base 2.',
      },
    },
  },
  {
    slug: 'math-log2e-2',
    title: 'Math.LOG2E — equals 1/Math.LN2',
    description: `## Math.LOG2E\n\n\`Math.LOG2E\` is the reciprocal of \`Math.LN2\`: LOG2E = 1 / LN2.\n\n**Challenge:** Verify that \`1/Math.LN2 ≈ Math.LOG2E\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LOG2E',
    initialCode: `// Does 1/Math.LN2 equal Math.LOG2E?\nconst reciprocal = 1 / Math.LN2`,
    solution: `const reciprocal = 1 / Math.LN2`,
    tests: [
      { description: '1/Math.LN2 equals Math.LOG2E within tolerance', assertion: "expect(Math.abs(1 / Math.LN2 - Math.LOG2E) < 1e-10).toBeTruthy()" },
      { description: 'Math.LOG2E is greater than 1.442', assertion: "expect(Math.LOG2E > 1.442).toBeTruthy()" },
      { description: 'Math.LOG2E is less than 1.443', assertion: "expect(Math.LOG2E < 1.443).toBeTruthy()" },
      { description: '1/Math.LN2 is a number', assertion: "expect(typeof (1 / Math.LN2)).toBe('number')" },
      { description: '1/Math.LN2 is greater than 1', assertion: "expect(1 / Math.LN2 > 1).toBeTruthy()" },
    ],
    hints: [
      'LOG2E = 1 / LN2 by the change of base formula.',
      'Both sides represent log₂(e).',
    ],
    tags: ['Math', 'LOG2E', 'LN2', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Base-2 logarithm of e
Math.LOG2E   // → 1.4426950408...
// Equivalent to: 1 / Math.LN2`,
      explanation: {
        en: 'Use Math.LOG2E as a precomputed constant for converting natural log values to base-2 logarithms.',
        es: 'Usa Math.LOG2E como constante precalculada para convertir valores de logaritmo natural a base 2.',
      },
    },
  },
  {
    slug: 'math-log2e-3',
    title: 'Math.LOG2E — use converting natural log to log2',
    description: `## Math.LOG2E\n\nMultiply \`Math.log(n)\` by \`Math.LOG2E\` to convert from natural log to log₂.\n\n**Challenge:** Use \`Math.LOG2E\` to compute base-2 logarithms.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LOG2E',
    initialCode: `// Convert natural log to log base 2 using Math.LOG2E\nconst log2of8 = Math.log(8) * Math.LOG2E`,
    solution: `const log2of8 = Math.log(8) * Math.LOG2E`,
    tests: [
      { description: 'Math.log(8) * Math.LOG2E equals 3', assertion: "expect(Math.abs(Math.log(8) * Math.LOG2E - 3) < 1e-10).toBeTruthy()" },
      { description: 'Math.log(4) * Math.LOG2E equals 2', assertion: "expect(Math.abs(Math.log(4) * Math.LOG2E - 2) < 1e-10).toBeTruthy()" },
      { description: 'Math.log(2) * Math.LOG2E equals 1', assertion: "expect(Math.abs(Math.log(2) * Math.LOG2E - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.log(8) * Math.LOG2E result is a number', assertion: "expect(typeof (Math.log(8) * Math.LOG2E)).toBe('number')" },
      { description: 'Math.log(1) * Math.LOG2E is approximately 0', assertion: "expect(Math.abs(Math.log(1) * Math.LOG2E) < 1e-10).toBeTruthy()" },
    ],
    hints: [
      'log₂(n) = Math.log(n) * Math.LOG2E',
      'This is equivalent to Math.log(n) / Math.LN2.',
    ],
    tags: ['Math', 'LOG2E', 'log', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Base-2 logarithm of e
Math.LOG2E   // → 1.4426950408...
// Equivalent to: 1 / Math.LN2`,
      explanation: {
        en: 'Use Math.LOG2E as a precomputed constant for converting natural log values to base-2 logarithms.',
        es: 'Usa Math.LOG2E como constante precalculada para convertir valores de logaritmo natural a base 2.',
      },
    },
  },
  {
    slug: 'math-log2e-4',
    title: 'Math.LOG2E — Math.log2(Math.E)',
    description: `## Math.LOG2E\n\n\`Math.log2(Math.E)\` directly computes log₂(e) and should equal \`Math.LOG2E\`.\n\n**Challenge:** Verify the relationship between \`Math.log2\` and \`Math.LOG2E\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LOG2E',
    initialCode: `// Does Math.log2(Math.E) equal Math.LOG2E?\nconst log2OfE = Math.log2(Math.E)`,
    solution: `const log2OfE = Math.log2(Math.E)`,
    tests: [
      { description: 'Math.log2(Math.E) equals Math.LOG2E within tolerance', assertion: "expect(Math.abs(Math.log2(Math.E) - Math.LOG2E) < 1e-10).toBeTruthy()" },
      { description: 'Math.log2(Math.E) is greater than 1', assertion: "expect(Math.log2(Math.E) > 1).toBeTruthy()" },
      { description: 'Math.log2(Math.E) is less than 2', assertion: "expect(Math.log2(Math.E) < 2).toBeTruthy()" },
      { description: 'Math.log2(Math.E) is a number', assertion: "expect(typeof Math.log2(Math.E)).toBe('number')" },
      { description: 'Math.LOG2E is positive', assertion: "expect(Math.LOG2E > 0).toBeTruthy()" },
    ],
    hints: [
      'Math.log2(x) computes log₂(x) directly.',
      'Math.LOG2E is a cached constant for this value.',
    ],
    tags: ['Math', 'LOG2E', 'log2', 'E', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Base-2 logarithm of e
Math.LOG2E   // → 1.4426950408...
// Equivalent to: 1 / Math.LN2`,
      explanation: {
        en: 'Use Math.LOG2E as a precomputed constant for converting natural log values to base-2 logarithms.',
        es: 'Usa Math.LOG2E como constante precalculada para convertir valores de logaritmo natural a base 2.',
      },
    },
  },
  {
    slug: 'math-log2e-5',
    title: 'Math.LOG2E — exact IEEE 754 value',
    description: `## Math.LOG2E\n\nThe exact IEEE 754 double-precision value of \`Math.LOG2E\` is **1.4426950408889634**.\n\n**Challenge:** Verify the exact stored value and its relationship with LN2.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'LOG2E',
    initialCode: `// Verify the exact IEEE 754 value of Math.LOG2E\nconst val = Math.LOG2E`,
    solution: `const val = Math.LOG2E`,
    tests: [
      { description: 'Math.LOG2E equals 1.4426950408889634 exactly', assertion: "expect(Math.LOG2E).toBe(1.4426950408889634)" },
      { description: 'Math.LN2 * Math.LOG2E is approximately 1', assertion: "expect(Math.abs(Math.LN2 * Math.LOG2E - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.LOG2E is finite', assertion: "expect(Number.isFinite(Math.LOG2E)).toBeTruthy()" },
      { description: 'Math.LOG2E is positive', assertion: "expect(Math.LOG2E > 0).toBeTruthy()" },
      { description: 'Math.LOG2E is a number', assertion: "expect(typeof Math.LOG2E).toBe('number')" },
    ],
    hints: [
      'The exact IEEE 754 representation is 1.4426950408889634.',
      'LN2 * LOG2E should equal 1 (they are reciprocals).',
    ],
    tags: ['Math', 'LOG2E', 'static-property', 'advanced'],
    usageExample: {
      code: `// Base-2 logarithm of e
Math.LOG2E   // → 1.4426950408...
// Equivalent to: 1 / Math.LN2`,
      explanation: {
        en: 'Use Math.LOG2E as a precomputed constant for converting natural log values to base-2 logarithms.',
        es: 'Usa Math.LOG2E como constante precalculada para convertir valores de logaritmo natural a base 2.',
      },
    },
  },
]
