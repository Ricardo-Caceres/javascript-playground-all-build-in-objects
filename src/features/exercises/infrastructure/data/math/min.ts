import type { Exercise } from '@/shared/types/exercises'

export const mathMinExercises: Exercise[] = [
  {
    slug: 'math-min-1',
    title: 'Math.min() — Basic Minimum',
    description: `## Math.min()\n\nReturns the smallest of the given numbers.\n\n**Challenge:** Use \`Math.min(1, 2, 3)\` to find the smallest value.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'min',
    initialCode: `// Use Math.min()\n`,
    solution: `Math.min(1, 2, 3)`,
    tests: [
      { description: 'result returns 1', assertion: "expect(result).toBe(1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1', assertion: "expect(result === 1).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is less than 2', assertion: "expect(result < 2).toBeTruthy()" },
    ],
    hints: ['Math.min returns the smallest of all provided arguments'],
    tags: ['Math', 'min', 'static-method'],
    usageExample: {
      code: `// Smallest of the given numbers
Math.min(1, 5, 3)   // → 1
Math.min(-1, -5)    // → -5`,
      explanation: {
        en: 'Use Math.min() to find the smallest value among a set of numbers, or to clamp a maximum bound.',
        es: 'Usa Math.min() para encontrar el valor más pequeño entre un conjunto de números o para limitar un valor máximo.',
      },
    },
  },
  {
    slug: 'math-min-2',
    title: 'Math.min() — All Negatives',
    description: `## Math.min()\n\nReturns the smallest of the given numbers.\n\n**Challenge:** Use \`Math.min(-1, -5, -2)\` to find the minimum among negative numbers.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'min',
    initialCode: `// Use Math.min()\n`,
    solution: `Math.min(-1, -5, -2)`,
    tests: [
      { description: 'result returns -5', assertion: "expect(result).toBe(-5)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -5', assertion: "expect(result === -5).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is less than -4', assertion: "expect(result < -4).toBeTruthy()" },
    ],
    hints: ['-5 is the smallest (furthest from zero) among -1, -5, -2'],
    tags: ['Math', 'min', 'static-method'],
    usageExample: {
      code: `// Smallest of the given numbers
Math.min(1, 5, 3)   // → 1
Math.min(-1, -5)    // → -5`,
      explanation: {
        en: 'Use Math.min() to find the smallest value among a set of numbers, or to clamp a maximum bound.',
        es: 'Usa Math.min() para encontrar el valor más pequeño entre un conjunto de números o para limitar un valor máximo.',
      },
    },
  },
  {
    slug: 'math-min-3',
    title: 'Math.min() — No Arguments',
    description: `## Math.min()\n\nReturns the smallest of the given numbers.\n\n**Challenge:** Observe that \`Math.min()\` with no arguments returns Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'min',
    initialCode: `// Use Math.min()\n`,
    solution: `Math.min()`,
    tests: [
      { description: 'result returns Infinity', assertion: "expect(result).toBe(Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === Infinity', assertion: "expect(result === Infinity).toBeTruthy()" },
      { description: 'result is greater than 1000', assertion: "expect(result > 1000).toBeTruthy()" },
    ],
    hints: ['The identity element for min is Infinity (every number is ≤ Infinity)'],
    tags: ['Math', 'min', 'static-method'],
    usageExample: {
      code: `// Smallest of the given numbers
Math.min(1, 5, 3)   // → 1
Math.min(-1, -5)    // → -5`,
      explanation: {
        en: 'Use Math.min() to find the smallest value among a set of numbers, or to clamp a maximum bound.',
        es: 'Usa Math.min() para encontrar el valor más pequeño entre un conjunto de números o para limitar un valor máximo.',
      },
    },
  },
  {
    slug: 'math-min-4',
    title: 'Math.min() — With -Infinity',
    description: `## Math.min()\n\nReturns the smallest of the given numbers.\n\n**Challenge:** Verify that \`Math.min(-Infinity, 1)\` returns -Infinity.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'min',
    initialCode: `// Use Math.min()\n`,
    solution: `Math.min(-Infinity, 1)`,
    tests: [
      { description: 'result returns -Infinity', assertion: "expect(result).toBe(-Infinity)" },
      { description: 'result is not finite', assertion: "expect(!isFinite(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -Infinity', assertion: "expect(result === -Infinity).toBeTruthy()" },
      { description: 'result is less than -1000', assertion: "expect(result < -1000).toBeTruthy()" },
    ],
    hints: ['-Infinity is smaller than any finite number'],
    tags: ['Math', 'min', 'static-method'],
    usageExample: {
      code: `// Smallest of the given numbers
Math.min(1, 5, 3)   // → 1
Math.min(-1, -5)    // → -5`,
      explanation: {
        en: 'Use Math.min() to find the smallest value among a set of numbers, or to clamp a maximum bound.',
        es: 'Usa Math.min() para encontrar el valor más pequeño entre un conjunto de números o para limitar un valor máximo.',
      },
    },
  },
  {
    slug: 'math-min-5',
    title: 'Math.min() — With NaN',
    description: `## Math.min()\n\nReturns the smallest of the given numbers.\n\n**Challenge:** Observe that \`Math.min(1, NaN)\` returns NaN.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'min',
    initialCode: `// Use Math.min()\n`,
    solution: `Math.min(1, NaN)`,
    tests: [
      { description: 'result is NaN', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: "expect(result !== result).toBeTruthy()" },
      { description: 'Math.min(NaN, NaN) is also NaN', assertion: "expect(isNaN(Math.min(NaN, NaN))).toBeTruthy()" },
      { description: 'Math.min(-100, NaN) is also NaN', assertion: "expect(isNaN(Math.min(-100, NaN))).toBeTruthy()" },
    ],
    hints: ['Any comparison involving NaN produces NaN'],
    tags: ['Math', 'min', 'static-method'],
    usageExample: {
      code: `// Smallest of the given numbers
Math.min(1, 5, 3)   // → 1
Math.min(-1, -5)    // → -5`,
      explanation: {
        en: 'Use Math.min() to find the smallest value among a set of numbers, or to clamp a maximum bound.',
        es: 'Usa Math.min() para encontrar el valor más pequeño entre un conjunto de números o para limitar un valor máximo.',
      },
    },
  },
]
