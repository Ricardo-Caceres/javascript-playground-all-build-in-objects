import type { Exercise } from '@/shared/types/exercises'

export const mathMaxExercises: Exercise[] = [
  {
    slug: 'math-max-1',
    title: 'Math.max() — Basic Maximum',
    description: `## Math.max()\n\nReturns the largest of the given numbers.\n\n**Challenge:** Use \`Math.max(1, 2, 3)\` to find the largest value.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'max',
    initialCode: `// Use Math.max()\n`,
    solution: `Math.max(1, 2, 3)`,
    tests: [
      { description: 'result returns 3', assertion: "expect(result).toBe(3)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 3', assertion: "expect(result === 3).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is greater than 2', assertion: "expect(result > 2).toBeTruthy()" },
    ],
    hints: ['Math.max returns the largest of all provided arguments'],
    tags: ['Math', 'max', 'static-method'],
    usageExample: {
      code: `// Largest of the given numbers
Math.max(1, 5, 3)   // → 5
Math.max(-1, -5)    // → -1`,
      explanation: {
        en: 'Use Math.max() to find the largest value among a set of numbers, or to clamp a minimum bound.',
        es: 'Usa Math.max() para encontrar el valor más grande entre un conjunto de números o para limitar un valor mínimo.',
      },
    },
  },
  {
    slug: 'math-max-2',
    title: 'Math.max() — All Negatives',
    description: `## Math.max()\n\nReturns the largest of the given numbers.\n\n**Challenge:** Use \`Math.max(-1, -5, -2)\` to find the maximum among negative numbers.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'max',
    initialCode: `// Use Math.max()\n`,
    solution: `Math.max(-1, -5, -2)`,
    tests: [
      { description: 'result returns -1', assertion: "expect(result).toBe(-1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -1', assertion: "expect(result === -1).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is greater than -2', assertion: "expect(result > -2).toBeTruthy()" },
    ],
    hints: ['-1 is the largest (closest to zero) among -1, -5, -2'],
    tags: ['Math', 'max', 'static-method'],
    usageExample: {
      code: `// Largest of the given numbers
Math.max(1, 5, 3)   // → 5
Math.max(-1, -5)    // → -1`,
      explanation: {
        en: 'Use Math.max() to find the largest value among a set of numbers, or to clamp a minimum bound.',
        es: 'Usa Math.max() para encontrar el valor más grande entre un conjunto de números o para limitar un valor mínimo.',
      },
    },
  },
  {
    slug: 'math-max-3',
    title: 'Math.max() — No Arguments',
    description: `## Math.max()\n\nReturns the largest of the given numbers.\n\n**Challenge:** Observe that \`Math.max()\` with no arguments returns -Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'max',
    initialCode: `// Use Math.max()\n`,
    solution: `Math.max()`,
    tests: [
      { description: 'result returns -Infinity', assertion: "expect(result).toBe(-Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -Infinity', assertion: "expect(result === -Infinity).toBeTruthy()" },
      { description: 'result is less than 0', assertion: "expect(result < 0).toBeTruthy()" },
    ],
    hints: ['The identity element for max is -Infinity (every number is ≥ -Infinity)'],
    tags: ['Math', 'max', 'static-method'],
    usageExample: {
      code: `// Largest of the given numbers
Math.max(1, 5, 3)   // → 5
Math.max(-1, -5)    // → -1`,
      explanation: {
        en: 'Use Math.max() to find the largest value among a set of numbers, or to clamp a minimum bound.',
        es: 'Usa Math.max() para encontrar el valor más grande entre un conjunto de números o para limitar un valor mínimo.',
      },
    },
  },
  {
    slug: 'math-max-4',
    title: 'Math.max() — With Infinity',
    description: `## Math.max()\n\nReturns the largest of the given numbers.\n\n**Challenge:** Verify that \`Math.max(Infinity, 1)\` returns Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'max',
    initialCode: `// Use Math.max()\n`,
    solution: `Math.max(Infinity, 1)`,
    tests: [
      { description: 'result returns Infinity', assertion: "expect(result).toBe(Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === Infinity', assertion: "expect(result === Infinity).toBeTruthy()" },
      { description: 'result is greater than 1000', assertion: "expect(result > 1000).toBeTruthy()" },
    ],
    hints: ['Infinity is larger than any finite number'],
    tags: ['Math', 'max', 'static-method'],
    usageExample: {
      code: `// Largest of the given numbers
Math.max(1, 5, 3)   // → 5
Math.max(-1, -5)    // → -1`,
      explanation: {
        en: 'Use Math.max() to find the largest value among a set of numbers, or to clamp a minimum bound.',
        es: 'Usa Math.max() para encontrar el valor más grande entre un conjunto de números o para limitar un valor mínimo.',
      },
    },
  },
  {
    slug: 'math-max-5',
    title: 'Math.max() — With NaN',
    description: `## Math.max()\n\nReturns the largest of the given numbers.\n\n**Challenge:** Observe that \`Math.max(1, NaN)\` returns NaN.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'max',
    initialCode: `// Use Math.max()\n`,
    solution: `Math.max(1, NaN)`,
    tests: [
      { description: 'result is NaN', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: "expect(result !== result).toBeTruthy()" },
      { description: 'Math.max(NaN, NaN) is also NaN', assertion: "expect(isNaN(Math.max(NaN, NaN))).toBeTruthy()" },
      { description: 'Math.max(100, NaN) is also NaN', assertion: "expect(isNaN(Math.max(100, NaN))).toBeTruthy()" },
    ],
    hints: ['Any comparison involving NaN produces NaN'],
    tags: ['Math', 'max', 'static-method'],
    usageExample: {
      code: `// Largest of the given numbers
Math.max(1, 5, 3)   // → 5
Math.max(-1, -5)    // → -1`,
      explanation: {
        en: 'Use Math.max() to find the largest value among a set of numbers, or to clamp a minimum bound.',
        es: 'Usa Math.max() para encontrar el valor más grande entre un conjunto de números o para limitar un valor mínimo.',
      },
    },
  },
]
