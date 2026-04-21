import type { Exercise } from '@/shared/types/exercises'

export const mathSqrt2Exercises: Exercise[] = [
  {
    slug: 'math-sqrt2-1',
    title: 'Math.SQRT2 — the value',
    description: `## Math.SQRT2\n\nThe square root of 2, approximately **1.4142135623730951**.\n\n**Challenge:** Explore the value of \`Math.SQRT2\` and verify its type and range.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'SQRT2',
    initialCode: `// What is Math.SQRT2?\nconst val = Math.SQRT2`,
    solution: `const val = Math.SQRT2`,
    tests: [
      { description: 'Math.SQRT2 is a number', assertion: "expect(typeof Math.SQRT2).toBe('number')" },
      { description: 'Math.SQRT2 is greater than 1', assertion: "expect(Math.SQRT2 > 1).toBeTruthy()" },
      { description: 'Math.SQRT2 is less than 2', assertion: "expect(Math.SQRT2 < 2).toBeTruthy()" },
      { description: 'Math.SQRT2 is approximately 1.414', assertion: "expect(Math.abs(Math.SQRT2 - 1.414) < 0.001).toBeTruthy()" },
      { description: 'Math.SQRT2 is finite', assertion: "expect(Number.isFinite(Math.SQRT2)).toBeTruthy()" },
    ],
    hints: [
      'Math.SQRT2 = √2 ≈ 1.4142135623730951.',
      'It is the length of the diagonal of a unit square.',
    ],
    tags: ['Math', 'SQRT2', 'static-property', 'beginner'],
    usageExample: {
      code: `// Square root of 2
Math.SQRT2              // → 1.4142135623...
Math.SQRT2 === Math.sqrt(2)   // → true`,
      explanation: {
        en: 'Use Math.SQRT2 as a precomputed constant equal to √2, useful in geometry and diagonal calculations.',
        es: 'Usa Math.SQRT2 como constante precalculada igual a √2, útil en geometría y cálculos de diagonales.',
      },
    },
  },
  {
    slug: 'math-sqrt2-2',
    title: 'Math.SQRT2 — equals Math.sqrt(2)',
    description: `## Math.SQRT2\n\n\`Math.SQRT2\` is identical to calling \`Math.sqrt(2)\`.\n\n**Challenge:** Verify that \`Math.sqrt(2) === Math.SQRT2\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'SQRT2',
    initialCode: `// Does Math.sqrt(2) equal Math.SQRT2?\nconst sqrtOf2 = Math.sqrt(2)`,
    solution: `const sqrtOf2 = Math.sqrt(2)`,
    tests: [
      { description: 'Math.sqrt(2) equals Math.SQRT2', assertion: "expect(Math.sqrt(2)).toBe(Math.SQRT2)" },
      { description: 'Math.sqrt(2) and Math.SQRT2 differ by less than 1e-10', assertion: "expect(Math.abs(Math.sqrt(2) - Math.SQRT2) < 1e-10).toBeTruthy()" },
      { description: 'Math.SQRT2 is greater than 1.414', assertion: "expect(Math.SQRT2 > 1.414).toBeTruthy()" },
      { description: 'Math.SQRT2 is less than 1.415', assertion: "expect(Math.SQRT2 < 1.415).toBeTruthy()" },
      { description: 'Math.sqrt(2) is a number', assertion: "expect(typeof Math.sqrt(2)).toBe('number')" },
    ],
    hints: [
      'Math.SQRT2 is a pre-computed constant equal to Math.sqrt(2).',
      'Using the constant avoids recomputing the square root each time.',
    ],
    tags: ['Math', 'SQRT2', 'sqrt', 'static-property', 'beginner'],
    usageExample: {
      code: `// Square root of 2
Math.SQRT2              // → 1.4142135623...
Math.SQRT2 === Math.sqrt(2)   // → true`,
      explanation: {
        en: 'Use Math.SQRT2 as a precomputed constant equal to √2, useful in geometry and diagonal calculations.',
        es: 'Usa Math.SQRT2 como constante precalculada igual a √2, útil en geometría y cálculos de diagonales.',
      },
    },
  },
  {
    slug: 'math-sqrt2-3',
    title: 'Math.SQRT2 — squared equals 2',
    description: `## Math.SQRT2\n\nBy definition, (√2)² = 2. So \`Math.SQRT2 * Math.SQRT2\` should be approximately 2.\n\n**Challenge:** Verify that squaring \`Math.SQRT2\` gives 2.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'SQRT2',
    initialCode: `// Math.SQRT2 squared should equal 2\nconst squared = Math.SQRT2 * Math.SQRT2`,
    solution: `const squared = Math.SQRT2 * Math.SQRT2`,
    tests: [
      { description: 'Math.SQRT2 * Math.SQRT2 is approximately 2', assertion: "expect(Math.abs(Math.SQRT2 * Math.SQRT2 - 2) < 1e-10).toBeTruthy()" },
      { description: 'Math.SQRT2 * Math.SQRT2 is greater than 1.999', assertion: "expect(Math.SQRT2 * Math.SQRT2 > 1.999).toBeTruthy()" },
      { description: 'Math.SQRT2 * Math.SQRT2 is less than 2.001', assertion: "expect(Math.SQRT2 * Math.SQRT2 < 2.001).toBeTruthy()" },
      { description: 'Math.SQRT2 * Math.SQRT2 is a number', assertion: "expect(typeof (Math.SQRT2 * Math.SQRT2)).toBe('number')" },
      { description: 'Math.SQRT2 is positive', assertion: "expect(Math.SQRT2 > 0).toBeTruthy()" },
    ],
    hints: [
      '(√2)² = 2 by definition.',
      'Floating-point arithmetic may introduce a tiny error.',
    ],
    tags: ['Math', 'SQRT2', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Square root of 2
Math.SQRT2              // → 1.4142135623...
Math.SQRT2 === Math.sqrt(2)   // → true`,
      explanation: {
        en: 'Use Math.SQRT2 as a precomputed constant equal to √2, useful in geometry and diagonal calculations.',
        es: 'Usa Math.SQRT2 como constante precalculada igual a √2, útil en geometría y cálculos de diagonales.',
      },
    },
  },
  {
    slug: 'math-sqrt2-4',
    title: 'Math.SQRT2 — use in diagonal calculation',
    description: `## Math.SQRT2\n\nThe diagonal of a square with side length **s** is **s√2**. For a unit square, diagonal = √2.\n\n**Challenge:** Use \`Math.SQRT2\` to compute diagonals of squares.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'SQRT2',
    initialCode: `// Diagonal of a square with side s = s * Math.SQRT2\nconst diagonal1 = 1 * Math.SQRT2\nconst diagonal3 = 3 * Math.SQRT2`,
    solution: `const diagonal1 = 1 * Math.SQRT2\nconst diagonal3 = 3 * Math.SQRT2`,
    tests: [
      { description: 'Diagonal of unit square equals Math.sqrt(2)', assertion: "expect(Math.abs(1 * Math.SQRT2 - Math.sqrt(2)) < 1e-10).toBeTruthy()" },
      { description: 'Diagonal of square with side 3 equals Math.sqrt(18)', assertion: "expect(Math.abs(3 * Math.SQRT2 - Math.sqrt(18)) < 1e-10).toBeTruthy()" },
      { description: 'Math.SQRT2 is greater than 1', assertion: "expect(Math.SQRT2 > 1).toBeTruthy()" },
      { description: '3 * Math.SQRT2 is a number', assertion: "expect(typeof (3 * Math.SQRT2)).toBe('number')" },
      { description: 'Math.SQRT2 * 0 equals 0', assertion: "expect(Math.SQRT2 * 0).toBe(0)" },
    ],
    hints: [
      'Diagonal of a square = side * √2',
      'Math.sqrt(18) = 3√2 because √18 = √(9×2) = 3√2.',
    ],
    tags: ['Math', 'SQRT2', 'geometry', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Square root of 2
Math.SQRT2              // → 1.4142135623...
Math.SQRT2 === Math.sqrt(2)   // → true`,
      explanation: {
        en: 'Use Math.SQRT2 as a precomputed constant equal to √2, useful in geometry and diagonal calculations.',
        es: 'Usa Math.SQRT2 como constante precalculada igual a √2, útil en geometría y cálculos de diagonales.',
      },
    },
  },
  {
    slug: 'math-sqrt2-5',
    title: 'Math.SQRT2 — exact IEEE 754 value',
    description: `## Math.SQRT2\n\nThe exact IEEE 754 double-precision value of \`Math.SQRT2\` is **1.4142135623730951**.\n\n**Challenge:** Verify the exact stored value and its bounds.`,
    category: 'static-property',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'SQRT2',
    initialCode: `// Verify the exact IEEE 754 value of Math.SQRT2\nconst val = Math.SQRT2`,
    solution: `const val = Math.SQRT2`,
    tests: [
      { description: 'Math.SQRT2 equals 1.4142135623730951 exactly', assertion: "expect(Math.SQRT2).toBe(1.4142135623730951)" },
      { description: 'Math.SQRT2 is finite', assertion: "expect(Number.isFinite(Math.SQRT2)).toBeTruthy()" },
      { description: 'Math.SQRT2 is positive', assertion: "expect(Math.SQRT2 > 0).toBeTruthy()" },
      { description: 'Math.SQRT2 is a number', assertion: "expect(typeof Math.SQRT2).toBe('number')" },
      { description: 'Math.SQRT2 is not zero', assertion: "expect(Math.SQRT2 !== 0).toBeTruthy()" },
    ],
    hints: [
      'The exact IEEE 754 representation is 1.4142135623730951.',
      'This is the closest double-precision float to √2.',
    ],
    tags: ['Math', 'SQRT2', 'static-property', 'advanced'],
    usageExample: {
      code: `// Square root of 2
Math.SQRT2              // → 1.4142135623...
Math.SQRT2 === Math.sqrt(2)   // → true`,
      explanation: {
        en: 'Use Math.SQRT2 as a precomputed constant equal to √2, useful in geometry and diagonal calculations.',
        es: 'Usa Math.SQRT2 como constante precalculada igual a √2, útil en geometría y cálculos de diagonales.',
      },
    },
  },
]
