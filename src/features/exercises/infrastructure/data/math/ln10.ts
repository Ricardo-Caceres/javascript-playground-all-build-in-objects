import type { Exercise } from '@/shared/types/exercises'

export const mathLn10Exercises: Exercise[] = [
  {
    slug: 'math-ln10-1',
    title: 'Math.LN10 — the value',
    description: `## Math.LN10\n\nThe natural logarithm of 10, approximately **2.302585092994046**.\n\n**Challenge:** Explore the value of \`Math.LN10\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'LN10',
    initialCode: `// What is Math.LN10?\nconst val = Math.LN10`,
    solution: `const val = Math.LN10`,
    tests: [
      { description: 'Math.LN10 is a number', assertion: "expect(typeof Math.LN10).toBe('number')" },
      { description: 'Math.LN10 is greater than 2', assertion: "expect(Math.LN10 > 2).toBeTruthy()" },
      { description: 'Math.LN10 is less than 3', assertion: "expect(Math.LN10 < 3).toBeTruthy()" },
      { description: 'Math.LN10 is approximately 2.302', assertion: "expect(Math.abs(Math.LN10 - 2.302) < 0.001).toBeTruthy()" },
      { description: 'Math.LN10 is finite', assertion: "expect(Number.isFinite(Math.LN10)).toBeTruthy()" },
    ],
    hints: [
      'Math.LN10 is the natural log of 10.',
      'Its value is approximately 2.302585092994046.',
    ],
    tags: ['Math', 'LN10', 'static-property', 'beginner'],
    usageExample: {
      code: `// Natural logarithm of 10
Math.LN10          // → 2.302585092...
Math.log(10) === Math.LN10   // → true`,
      explanation: {
        en: 'Use Math.LN10 as a precomputed constant for natural log base-10 conversions to avoid recalculation.',
        es: 'Usa Math.LN10 como constante precalculada para conversiones de logaritmo natural en base 10.',
      },
    },
  },
  {
    slug: 'math-ln10-2',
    title: 'Math.LN10 — equals Math.log(10)',
    description: `## Math.LN10\n\n\`Math.LN10\` is identical to calling \`Math.log(10)\`, the natural log of 10.\n\n**Challenge:** Verify that \`Math.log(10) === Math.LN10\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'LN10',
    initialCode: `// Does Math.log(10) equal Math.LN10?\nconst logOf10 = Math.log(10)`,
    solution: `const logOf10 = Math.log(10)`,
    tests: [
      { description: 'Math.log(10) equals Math.LN10', assertion: "expect(Math.log(10)).toBe(Math.LN10)" },
      { description: 'Math.log(10) and Math.LN10 differ by less than 1e-15', assertion: "expect(Math.abs(Math.log(10) - Math.LN10) < 1e-15).toBeTruthy()" },
      { description: 'Math.LN10 is positive', assertion: "expect(Math.LN10 > 0).toBeTruthy()" },
      { description: 'Math.log(10) is a number', assertion: "expect(typeof Math.log(10)).toBe('number')" },
      { description: 'Math.log(10) is greater than 2.3', assertion: "expect(Math.log(10) > 2.3).toBeTruthy()" },
    ],
    hints: [
      'Math.log computes the natural log.',
      'Math.LN10 is a cached constant equal to Math.log(10).',
    ],
    tags: ['Math', 'LN10', 'log', 'static-property', 'beginner'],
    usageExample: {
      code: `// Natural logarithm of 10
Math.LN10          // → 2.302585092...
Math.log(10) === Math.LN10   // → true`,
      explanation: {
        en: 'Use Math.LN10 as a precomputed constant for natural log base-10 conversions to avoid recalculation.',
        es: 'Usa Math.LN10 como constante precalculada para conversiones de logaritmo natural en base 10.',
      },
    },
  },
  {
    slug: 'math-ln10-3',
    title: 'Math.LN10 — relationship to LOG10E',
    description: `## Math.LN10\n\n\`Math.LN10\` and \`Math.LOG10E\` are reciprocals: their product is 1.\n\n**Challenge:** Verify the reciprocal relationship between LN10 and LOG10E.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LN10',
    initialCode: `// LN10 * LOG10E should equal 1\nconst product = Math.LN10 * Math.LOG10E`,
    solution: `const product = Math.LN10 * Math.LOG10E`,
    tests: [
      { description: 'Math.LN10 * Math.LOG10E is approximately 1', assertion: "expect(Math.abs(Math.LN10 * Math.LOG10E - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.LOG10E is less than 1', assertion: "expect(Math.LOG10E < 1).toBeTruthy()" },
      { description: 'Math.LN10 is greater than 2', assertion: "expect(Math.LN10 > 2).toBeTruthy()" },
      { description: 'Math.LOG10E is a number', assertion: "expect(typeof Math.LOG10E).toBe('number')" },
      { description: 'Math.LN10 * Math.LOG10E is greater than 0.999', assertion: "expect(Math.LN10 * Math.LOG10E > 0.999).toBeTruthy()" },
    ],
    hints: [
      'LN10 = 1 / LOG10E by definition.',
      'Their product should be exactly 1.',
    ],
    tags: ['Math', 'LN10', 'LOG10E', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Natural logarithm of 10
Math.LN10          // → 2.302585092...
Math.log(10) === Math.LN10   // → true`,
      explanation: {
        en: 'Use Math.LN10 as a precomputed constant for natural log base-10 conversions to avoid recalculation.',
        es: 'Usa Math.LN10 como constante precalculada para conversiones de logaritmo natural en base 10.',
      },
    },
  },
  {
    slug: 'math-ln10-4',
    title: 'Math.LN10 — use in log base 10 calculation',
    description: `## Math.LN10\n\nDivide \`Math.log(n)\` by \`Math.LN10\` to compute log₁₀(n).\n\n**Challenge:** Use \`Math.LN10\` to compute base-10 logarithms.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'LN10',
    initialCode: `// Compute log base 10 using Math.LN10\nconst log10of100 = Math.log(100) / Math.LN10`,
    solution: `const log10of100 = Math.log(100) / Math.LN10`,
    tests: [
      { description: 'log₁₀(100) equals 2', assertion: "expect(Math.abs(Math.log(100) / Math.LN10 - 2) < 1e-10).toBeTruthy()" },
      { description: 'log₁₀(1000) equals 3', assertion: "expect(Math.abs(Math.log(1000) / Math.LN10 - 3) < 1e-10).toBeTruthy()" },
      { description: 'log₁₀(1) equals 0', assertion: "expect(Math.abs(Math.log(1) / Math.LN10) < 1e-10).toBeTruthy()" },
      { description: 'log₁₀(100) result is a number', assertion: "expect(typeof (Math.log(100) / Math.LN10)).toBe('number')" },
      { description: 'log₁₀(10) equals 1', assertion: "expect(Math.abs(Math.log(10) / Math.LN10 - 1) < 1e-10).toBeTruthy()" },
    ],
    hints: [
      'log₁₀(n) = Math.log(n) / Math.LN10',
      'This works for any positive n.',
    ],
    tags: ['Math', 'LN10', 'log', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Natural logarithm of 10
Math.LN10          // → 2.302585092...
Math.log(10) === Math.LN10   // → true`,
      explanation: {
        en: 'Use Math.LN10 as a precomputed constant for natural log base-10 conversions to avoid recalculation.',
        es: 'Usa Math.LN10 como constante precalculada para conversiones de logaritmo natural en base 10.',
      },
    },
  },
  {
    slug: 'math-ln10-5',
    title: 'Math.LN10 — exact IEEE 754 value',
    description: `## Math.LN10\n\nThe exact IEEE 754 double-precision value of \`Math.LN10\` is **2.302585092994046**.\n\n**Challenge:** Verify the exact stored value and its bounds.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'LN10',
    initialCode: `// Verify the exact IEEE 754 value of Math.LN10\nconst val = Math.LN10`,
    solution: `const val = Math.LN10`,
    tests: [
      { description: 'Math.LN10 equals 2.302585092994046 exactly', assertion: "expect(Math.LN10).toBe(2.302585092994046)" },
      { description: 'Math.LN10 is greater than 2.302', assertion: "expect(Math.LN10 > 2.302).toBeTruthy()" },
      { description: 'Math.LN10 is less than 2.303', assertion: "expect(Math.LN10 < 2.303).toBeTruthy()" },
      { description: 'Math.LN10 is finite', assertion: "expect(Number.isFinite(Math.LN10)).toBeTruthy()" },
      { description: 'Math.LN10 is not zero', assertion: "expect(Math.LN10 !== 0).toBeTruthy()" },
    ],
    hints: [
      'The exact IEEE 754 representation is 2.302585092994046.',
      'This is the closest double-precision float to ln(10).',
    ],
    tags: ['Math', 'LN10', 'static-property', 'advanced'],
    usageExample: {
      code: `// Natural logarithm of 10
Math.LN10          // → 2.302585092...
Math.log(10) === Math.LN10   // → true`,
      explanation: {
        en: 'Use Math.LN10 as a precomputed constant for natural log base-10 conversions to avoid recalculation.',
        es: 'Usa Math.LN10 como constante precalculada para conversiones de logaritmo natural en base 10.',
      },
    },
  },
]
