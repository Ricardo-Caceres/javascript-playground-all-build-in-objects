import type { Exercise } from '@/shared/types/exercises'

export const mathSinhExercises: Exercise[] = [
  {
    slug: 'math-sinh-1',
    title: 'Math.sinh() — sinh(0) = 0',
    description: `## Math.sinh()\n\nReturns the hyperbolic sine of a number.\n\n**Challenge:** Verify that \`Math.sinh(0)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sinh',
    initialCode: `// Use Math.sinh()\n`,
    solution: `Math.sinh(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['sinh(0) = (e^0 - e^-0) / 2 = (1 - 1) / 2 = 0'],
    tags: ['Math', 'sinh', 'static-method'],
    usageExample: {
      code: `// Hyperbolic sine
Math.sinh(0)   // → 0
Math.sinh(1)   // → 1.1752...`,
      explanation: {
        en: 'Use Math.sinh() to compute the hyperbolic sine, commonly used in physics and engineering formulas.',
        es: 'Usa Math.sinh() para calcular el seno hiperbólico, comúnmente usado en fórmulas de física e ingeniería.',
      },
    },
  },
  {
    slug: 'math-sinh-2',
    title: 'Math.sinh() — sinh(1) ≈ 1.175',
    description: `## Math.sinh()\n\nReturns the hyperbolic sine of a number.\n\n**Challenge:** Verify that \`Math.sinh(1)\` is approximately 1.1752011936438014.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sinh',
    initialCode: `// Use Math.sinh()\n`,
    solution: `Math.sinh(1)`,
    tests: [
      { description: 'result ≈ 1.1752011936438014', assertion: "expect(Math.abs(result - 1.1752011936438014) < 1e-10).toBeTruthy()" },
      { description: 'result > 1.17', assertion: "expect(result > 1.17).toBeTruthy()" },
      { description: 'result < 1.18', assertion: "expect(result < 1.18).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
    ],
    hints: ['sinh(1) = (e - 1/e) / 2 ≈ 1.1752'],
    tags: ['Math', 'sinh', 'static-method'],
    usageExample: {
      code: `// Hyperbolic sine
Math.sinh(0)   // → 0
Math.sinh(1)   // → 1.1752...`,
      explanation: {
        en: 'Use Math.sinh() to compute the hyperbolic sine, commonly used in physics and engineering formulas.',
        es: 'Usa Math.sinh() para calcular el seno hiperbólico, comúnmente usado en fórmulas de física e ingeniería.',
      },
    },
  },
  {
    slug: 'math-sinh-3',
    title: 'Math.sinh() — sinh(-1) ≈ -1.175',
    description: `## Math.sinh()\n\nReturns the hyperbolic sine of a number.\n\n**Challenge:** Verify that \`Math.sinh(-1)\` is the negative of \`Math.sinh(1)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sinh',
    initialCode: `// Use Math.sinh()\n`,
    solution: `Math.sinh(-1)`,
    tests: [
      { description: 'result ≈ -1.1752011936438014', assertion: "expect(Math.abs(result - (-1.1752011936438014)) < 1e-10).toBeTruthy()" },
      { description: 'result < -1.17', assertion: "expect(result < -1.17).toBeTruthy()" },
      { description: 'result > -1.18', assertion: "expect(result > -1.18).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'sinh is an odd function', assertion: "expect(result === -result).toBeTruthy()" },
    ],
    hints: ['sinh is an odd function: sinh(-x) = -sinh(x)'],
    tags: ['Math', 'sinh', 'static-method'],
    usageExample: {
      code: `// Hyperbolic sine
Math.sinh(0)   // → 0
Math.sinh(1)   // → 1.1752...`,
      explanation: {
        en: 'Use Math.sinh() to compute the hyperbolic sine, commonly used in physics and engineering formulas.',
        es: 'Usa Math.sinh() para calcular el seno hiperbólico, comúnmente usado en fórmulas de física e ingeniería.',
      },
    },
  },
  {
    slug: 'math-sinh-4',
    title: 'Math.sinh() — sinh(Infinity) = Infinity',
    description: `## Math.sinh()\n\nReturns the hyperbolic sine of a number.\n\n**Challenge:** Observe that \`Math.sinh(Infinity)\` returns Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sinh',
    initialCode: `// Use Math.sinh()\n`,
    solution: `Math.sinh(Infinity)`,
    tests: [
      { description: 'result returns Infinity', assertion: "expect(result).toBe(Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result > 1000', assertion: "expect(result > 1000).toBeTruthy()" },
      { description: 'Math.sinh(100) is extremely large', assertion: "expect(Math.sinh(100) > 1e43).toBeTruthy()" },
    ],
    hints: ['sinh grows exponentially; sinh(Infinity) = Infinity'],
    tags: ['Math', 'sinh', 'static-method'],
    usageExample: {
      code: `// Hyperbolic sine
Math.sinh(0)   // → 0
Math.sinh(1)   // → 1.1752...`,
      explanation: {
        en: 'Use Math.sinh() to compute the hyperbolic sine, commonly used in physics and engineering formulas.',
        es: 'Usa Math.sinh() para calcular el seno hiperbólico, comúnmente usado en fórmulas de física e ingeniería.',
      },
    },
  },
  {
    slug: 'math-sinh-5',
    title: 'Math.sinh() — Return Type',
    description: `## Math.sinh()\n\nReturns the hyperbolic sine of a number.\n\n**Challenge:** Confirm that \`Math.sinh()\` always returns a JavaScript \`number\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sinh',
    initialCode: `// Use Math.sinh()\n`,
    solution: `typeof Math.sinh(0)`,
    tests: [
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof Math.sinh(100) is number', assertion: "expect(typeof Math.sinh(100)).toBe('number')" },
    ],
    hints: ['Math.sinh always returns a number primitive'],
    tags: ['Math', 'sinh', 'static-method'],
    usageExample: {
      code: `// Hyperbolic sine
Math.sinh(0)   // → 0
Math.sinh(1)   // → 1.1752...`,
      explanation: {
        en: 'Use Math.sinh() to compute the hyperbolic sine, commonly used in physics and engineering formulas.',
        es: 'Usa Math.sinh() para calcular el seno hiperbólico, comúnmente usado en fórmulas de física e ingeniería.',
      },
    },
  },
]
