import type { Exercise } from '@/shared/types/exercises'

export const mathSqrtExercises: Exercise[] = [
  {
    slug: 'math-sqrt-1',
    title: 'Math.sqrt() — sqrt(9) = 3',
    description: `## Math.sqrt()\n\nReturns the square root of a number.\n\n**Challenge:** Verify that \`Math.sqrt(9)\` returns 3.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sqrt',
    initialCode: `// Use Math.sqrt()\n`,
    solution: `Math.sqrt(9)`,
    tests: [
      { description: 'result returns 3', assertion: "expect(result).toBe(3)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 3', assertion: "expect(result === 3).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'difference from 3 is less than 0.001', assertion: "expect(Math.abs(result - 3) < 0.001).toBeTruthy()" },
    ],
    hints: ['sqrt(9) = 3 because 3^2 = 9'],
    tags: ['Math', 'sqrt', 'static-method'],
    usageExample: {
      code: `// Square root of a non-negative number
Math.sqrt(16)   // → 4
Math.sqrt(2)    // → 1.4142...`,
      explanation: {
        en: 'Use Math.sqrt() to compute the square root of a non-negative number.',
        es: 'Usa Math.sqrt() para calcular la raíz cuadrada de un número no negativo.',
      },
    },
  },
  {
    slug: 'math-sqrt-2',
    title: 'Math.sqrt() — sqrt(2) ≈ 1.414',
    description: `## Math.sqrt()\n\nReturns the square root of a number.\n\n**Challenge:** Verify that \`Math.sqrt(2)\` is approximately 1.4142135623730951.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sqrt',
    initialCode: `// Use Math.sqrt()\n`,
    solution: `Math.sqrt(2)`,
    tests: [
      { description: 'result ≈ 1.4142135623730951', assertion: "expect(Math.abs(result - 1.4142135623730951) < 1e-10).toBeTruthy()" },
      { description: 'result > 1.414', assertion: "expect(result > 1.414).toBeTruthy()" },
      { description: 'result < 1.415', assertion: "expect(result < 1.415).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
    ],
    hints: ['sqrt(2) is an irrational number ≈ 1.41421356; same as Math.SQRT2'],
    tags: ['Math', 'sqrt', 'static-method'],
    usageExample: {
      code: `// Square root of a non-negative number
Math.sqrt(16)   // → 4
Math.sqrt(2)    // → 1.4142...`,
      explanation: {
        en: 'Use Math.sqrt() to compute the square root of a non-negative number.',
        es: 'Usa Math.sqrt() para calcular la raíz cuadrada de un número no negativo.',
      },
    },
  },
  {
    slug: 'math-sqrt-3',
    title: 'Math.sqrt() — sqrt(0) = 0',
    description: `## Math.sqrt()\n\nReturns the square root of a number.\n\n**Challenge:** Verify that \`Math.sqrt(0)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sqrt',
    initialCode: `// Use Math.sqrt()\n`,
    solution: `Math.sqrt(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['sqrt(0) = 0 because 0^2 = 0'],
    tags: ['Math', 'sqrt', 'static-method'],
    usageExample: {
      code: `// Square root of a non-negative number
Math.sqrt(16)   // → 4
Math.sqrt(2)    // → 1.4142...`,
      explanation: {
        en: 'Use Math.sqrt() to compute the square root of a non-negative number.',
        es: 'Usa Math.sqrt() para calcular la raíz cuadrada de un número no negativo.',
      },
    },
  },
  {
    slug: 'math-sqrt-4',
    title: 'Math.sqrt() — sqrt(-1) = NaN',
    description: `## Math.sqrt()\n\nReturns the square root of a number.\n\n**Challenge:** Observe that \`Math.sqrt(-1)\` returns NaN since square roots of negative numbers are not real.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sqrt',
    initialCode: `// Use Math.sqrt()\n`,
    solution: `Math.sqrt(-1)`,
    tests: [
      { description: 'result is NaN', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: "expect(result !== result).toBeTruthy()" },
      { description: 'Math.sqrt(-100) is also NaN', assertion: "expect(isNaN(Math.sqrt(-100))).toBeTruthy()" },
      { description: 'typeof is still number', assertion: "expect(typeof result).toBe('number')" },
    ],
    hints: ['Square roots of negative numbers are imaginary — JavaScript returns NaN'],
    tags: ['Math', 'sqrt', 'static-method'],
    usageExample: {
      code: `// Square root of a non-negative number
Math.sqrt(16)   // → 4
Math.sqrt(2)    // → 1.4142...`,
      explanation: {
        en: 'Use Math.sqrt() to compute the square root of a non-negative number.',
        es: 'Usa Math.sqrt() para calcular la raíz cuadrada de un número no negativo.',
      },
    },
  },
  {
    slug: 'math-sqrt-5',
    title: 'Math.sqrt() — sqrt(Infinity) = Infinity',
    description: `## Math.sqrt()\n\nReturns the square root of a number.\n\n**Challenge:** Observe that \`Math.sqrt(Infinity)\` returns Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sqrt',
    initialCode: `// Use Math.sqrt()\n`,
    solution: `Math.sqrt(Infinity)`,
    tests: [
      { description: 'result returns Infinity', assertion: "expect(result).toBe(Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === Infinity', assertion: "expect(result === Infinity).toBeTruthy()" },
      { description: 'result is greater than 1000', assertion: "expect(result > 1000).toBeTruthy()" },
    ],
    hints: ['sqrt(∞) = ∞ since no finite number squared equals infinity'],
    tags: ['Math', 'sqrt', 'static-method'],
    usageExample: {
      code: `// Square root of a non-negative number
Math.sqrt(16)   // → 4
Math.sqrt(2)    // → 1.4142...`,
      explanation: {
        en: 'Use Math.sqrt() to compute the square root of a non-negative number.',
        es: 'Usa Math.sqrt() para calcular la raíz cuadrada de un número no negativo.',
      },
    },
  },
]
