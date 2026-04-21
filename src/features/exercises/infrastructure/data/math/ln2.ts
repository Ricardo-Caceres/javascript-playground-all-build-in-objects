import type { Exercise } from '@/shared/types/exercises'

export const mathLn2Exercises: Exercise[] = [
  {
    slug: 'math-ln2-1',
    title: 'Math.LN2 — the value',
    description: `## Math.LN2\n\nThe natural logarithm of 2, approximately **0.6931471805599453**.\n\n**Challenge:** Explore the value of \`Math.LN2\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'LN2',
    initialCode: `// What is Math.LN2?\nconst val = Math.LN2`,
    solution: `const val = Math.LN2`,
    tests: [
      { description: 'Math.LN2 is a number', assertion: "expect(typeof Math.LN2).toBe('number')" },
      { description: 'Math.LN2 is positive', assertion: "expect(Math.LN2 > 0).toBeTruthy()" },
      { description: 'Math.LN2 is approximately 0.693', assertion: "expect(Math.abs(Math.LN2 - 0.693) < 0.001).toBeTruthy()" },
      { description: 'Math.LN2 is less than 1', assertion: "expect(Math.LN2 < 1).toBeTruthy()" },
      { description: 'Math.LN2 is finite', assertion: "expect(Number.isFinite(Math.LN2)).toBeTruthy()" },
    ],
    hints: [
      'Math.LN2 is the natural log of 2.',
      'Its value is approximately 0.6931471805599453.',
    ],
    tags: ['Math', 'LN2', 'static-property', 'beginner'],
    usageExample: {
      code: `// Natural logarithm of 2
Math.LN2          // → 0.6931471805...
Math.log(2) === Math.LN2   // → true`,
      explanation: {
        en: 'Use Math.LN2 as a precomputed constant when converting between natural and base-2 logarithms.',
        es: 'Usa Math.LN2 como constante precalculada al convertir entre logaritmos naturales y en base 2.',
      },
    },
  },
  {
    slug: 'math-ln2-2',
    title: 'Math.LN2 — equals Math.log(2)',
    description: `## Math.LN2\n\n\`Math.LN2\` is identical to calling \`Math.log(2)\`, the natural log of 2.\n\n**Challenge:** Verify that \`Math.log(2) === Math.LN2\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'LN2',
    initialCode: `// Does Math.log(2) equal Math.LN2?\nconst logOf2 = Math.log(2)`,
    solution: `const logOf2 = Math.log(2)`,
    tests: [
      { description: 'Math.log(2) equals Math.LN2', assertion: "expect(Math.log(2)).toBe(Math.LN2)" },
      { description: 'Math.log(2) and Math.LN2 differ by less than 1e-15', assertion: "expect(Math.abs(Math.log(2) - Math.LN2) < 1e-15).toBeTruthy()" },
      { description: 'Math.LN2 is positive', assertion: "expect(Math.LN2 > 0).toBeTruthy()" },
      { description: 'Math.log(2) is a number', assertion: "expect(typeof Math.log(2)).toBe('number')" },
      { description: 'Math.log(2) is greater than 0.69', assertion: "expect(Math.log(2) > 0.69).toBeTruthy()" },
    ],
    hints: [
      'Math.log computes the natural log.',
      'Math.LN2 is a cached constant equal to Math.log(2).',
    ],
    tags: ['Math', 'LN2', 'log', 'static-property', 'beginner'],
    usageExample: {
      code: `// Natural logarithm of 2
Math.LN2          // → 0.6931471805...
Math.log(2) === Math.LN2   // → true`,
      explanation: {
        en: 'Use Math.LN2 as a precomputed constant when converting between natural and base-2 logarithms.',
        es: 'Usa Math.LN2 como constante precalculada al convertir entre logaritmos naturales y en base 2.',
      },
    },
  },
  {
    slug: 'math-ln2-3',
    title: 'Math.LN2 — relationship to LOG2E',
    description: `## Math.LN2\n\n\`Math.LN2\` and \`Math.LOG2E\` are reciprocals: their product is 1.\n\n**Challenge:** Verify the reciprocal relationship between LN2 and LOG2E.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LN2',
    initialCode: `// LN2 * LOG2E should equal 1\nconst product = Math.LN2 * Math.LOG2E`,
    solution: `const product = Math.LN2 * Math.LOG2E`,
    tests: [
      { description: 'Math.LN2 * Math.LOG2E is approximately 1', assertion: "expect(Math.abs(Math.LN2 * Math.LOG2E - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.LOG2E is greater than 1', assertion: "expect(Math.LOG2E > 1).toBeTruthy()" },
      { description: 'Math.LN2 is less than 1', assertion: "expect(Math.LN2 < 1).toBeTruthy()" },
      { description: 'Math.LOG2E is a number', assertion: "expect(typeof Math.LOG2E).toBe('number')" },
      { description: 'Math.LN2 * Math.LOG2E is greater than 0.999', assertion: "expect(Math.LN2 * Math.LOG2E > 0.999).toBeTruthy()" },
    ],
    hints: [
      'LN2 = 1 / LOG2E by definition.',
      'Their product should be exactly 1.',
    ],
    tags: ['Math', 'LN2', 'LOG2E', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Natural logarithm of 2
Math.LN2          // → 0.6931471805...
Math.log(2) === Math.LN2   // → true`,
      explanation: {
        en: 'Use Math.LN2 as a precomputed constant when converting between natural and base-2 logarithms.',
        es: 'Usa Math.LN2 como constante precalculada al convertir entre logaritmos naturales y en base 2.',
      },
    },
  },
  {
    slug: 'math-ln2-4',
    title: 'Math.LN2 — use in log base 2 calculation',
    description: `## Math.LN2\n\nDivide \`Math.log(n)\` by \`Math.LN2\` to compute log₂(n).\n\n**Challenge:** Use \`Math.LN2\` to compute base-2 logarithms.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LN2',
    initialCode: `// Compute log base 2 using Math.LN2\nconst log2of8 = Math.log(8) / Math.LN2`,
    solution: `const log2of8 = Math.log(8) / Math.LN2`,
    tests: [
      { description: 'log₂(8) equals 3', assertion: "expect(Math.abs(Math.log(8) / Math.LN2 - 3) < 1e-10).toBeTruthy()" },
      { description: 'log₂(4) equals 2', assertion: "expect(Math.abs(Math.log(4) / Math.LN2 - 2) < 1e-10).toBeTruthy()" },
      { description: 'log₂(1) equals 0', assertion: "expect(Math.abs(Math.log(1) / Math.LN2) < 1e-10).toBeTruthy()" },
      { description: 'log₂(2) equals 1', assertion: "expect(Math.abs(Math.log(2) / Math.LN2 - 1) < 1e-10).toBeTruthy()" },
      { description: 'log₂(8) result is a number', assertion: "expect(typeof (Math.log(8) / Math.LN2)).toBe('number')" },
    ],
    hints: [
      'log₂(n) = Math.log(n) / Math.LN2',
      'This works for any positive n.',
    ],
    tags: ['Math', 'LN2', 'log', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Natural logarithm of 2
Math.LN2          // → 0.6931471805...
Math.log(2) === Math.LN2   // → true`,
      explanation: {
        en: 'Use Math.LN2 as a precomputed constant when converting between natural and base-2 logarithms.',
        es: 'Usa Math.LN2 como constante precalculada al convertir entre logaritmos naturales y en base 2.',
      },
    },
  },
  {
    slug: 'math-ln2-5',
    title: 'Math.LN2 — exact IEEE 754 value',
    description: `## Math.LN2\n\nThe exact IEEE 754 double-precision value of \`Math.LN2\` is **0.6931471805599453**.\n\n**Challenge:** Verify the exact stored value and its bounds.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'LN2',
    initialCode: `// Verify the exact IEEE 754 value of Math.LN2\nconst val = Math.LN2`,
    solution: `const val = Math.LN2`,
    tests: [
      { description: 'Math.LN2 equals 0.6931471805599453 exactly', assertion: "expect(Math.LN2).toBe(0.6931471805599453)" },
      { description: 'Math.LN2 is greater than 0.693', assertion: "expect(Math.LN2 > 0.693).toBeTruthy()" },
      { description: 'Math.LN2 is less than 0.694', assertion: "expect(Math.LN2 < 0.694).toBeTruthy()" },
      { description: 'Math.LN2 is finite', assertion: "expect(Number.isFinite(Math.LN2)).toBeTruthy()" },
      { description: 'Math.LN2 is not zero', assertion: "expect(Math.LN2 !== 0).toBeTruthy()" },
    ],
    hints: [
      'The exact IEEE 754 representation is 0.6931471805599453.',
      'This is the closest double-precision float to ln(2).',
    ],
    tags: ['Math', 'LN2', 'static-property', 'advanced'],
    usageExample: {
      code: `// Natural logarithm of 2
Math.LN2          // → 0.6931471805...
Math.log(2) === Math.LN2   // → true`,
      explanation: {
        en: 'Use Math.LN2 as a precomputed constant when converting between natural and base-2 logarithms.',
        es: 'Usa Math.LN2 como constante precalculada al convertir entre logaritmos naturales y en base 2.',
      },
    },
  },
]
