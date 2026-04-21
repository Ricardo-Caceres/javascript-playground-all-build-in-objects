import type { Exercise } from '@/shared/types/exercises'

export const mathSignExercises: Exercise[] = [
  {
    slug: 'math-sign-1',
    title: 'Math.sign() — Positive Number',
    description: `## Math.sign()\n\nReturns the sign of a number, indicating whether it is positive, negative, or zero.\n\n**Challenge:** Verify that \`Math.sign(5)\` returns 1.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sign',
    initialCode: `// Use Math.sign()\n`,
    solution: `Math.sign(5)`,
    tests: [
      { description: 'result returns 1', assertion: "expect(result).toBe(1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1', assertion: "expect(result === 1).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is positive', assertion: "expect(result > 0).toBeTruthy()" },
    ],
    hints: ['Math.sign returns 1 for any positive number'],
    tags: ['Math', 'sign', 'static-method'],
    usageExample: {
      code: `// Returns -1, 0, or 1 based on sign
Math.sign(-5)   // → -1
Math.sign(0)    // → 0
Math.sign(3)    // → 1`,
      explanation: {
        en: 'Use Math.sign() to determine whether a number is positive, negative, or zero.',
        es: 'Usa Math.sign() para determinar si un número es positivo, negativo o cero.',
      },
    },
  },
  {
    slug: 'math-sign-2',
    title: 'Math.sign() — Negative Number',
    description: `## Math.sign()\n\nReturns the sign of a number, indicating whether it is positive, negative, or zero.\n\n**Challenge:** Verify that \`Math.sign(-3)\` returns -1.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sign',
    initialCode: `// Use Math.sign()\n`,
    solution: `Math.sign(-3)`,
    tests: [
      { description: 'result returns -1', assertion: "expect(result).toBe(-1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -1', assertion: "expect(result === -1).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is negative', assertion: "expect(result < 0).toBeTruthy()" },
    ],
    hints: ['Math.sign returns -1 for any negative number'],
    tags: ['Math', 'sign', 'static-method'],
    usageExample: {
      code: `// Returns -1, 0, or 1 based on sign
Math.sign(-5)   // → -1
Math.sign(0)    // → 0
Math.sign(3)    // → 1`,
      explanation: {
        en: 'Use Math.sign() to determine whether a number is positive, negative, or zero.',
        es: 'Usa Math.sign() para determinar si un número es positivo, negativo o cero.',
      },
    },
  },
  {
    slug: 'math-sign-3',
    title: 'Math.sign() — Zero',
    description: `## Math.sign()\n\nReturns the sign of a number, indicating whether it is positive, negative, or zero.\n\n**Challenge:** Verify that \`Math.sign(0)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'sign',
    initialCode: `// Use Math.sign()\n`,
    solution: `Math.sign(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['Math.sign(0) returns +0, which equals 0 with ==='],
    tags: ['Math', 'sign', 'static-method'],
    usageExample: {
      code: `// Returns -1, 0, or 1 based on sign
Math.sign(-5)   // → -1
Math.sign(0)    // → 0
Math.sign(3)    // → 1`,
      explanation: {
        en: 'Use Math.sign() to determine whether a number is positive, negative, or zero.',
        es: 'Usa Math.sign() para determinar si un número es positivo, negativo o cero.',
      },
    },
  },
  {
    slug: 'math-sign-4',
    title: 'Math.sign() — Negative Zero',
    description: `## Math.sign()\n\nReturns the sign of a number, indicating whether it is positive, negative, or zero.\n\n**Challenge:** Explore \`Math.sign(-0)\` which returns -0, distinguishable via \`Object.is\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sign',
    initialCode: `// Use Math.sign()\n`,
    solution: `Math.sign(-0)`,
    tests: [
      { description: 'Object.is(result, -0) is true', assertion: "expect(Object.is(result, -0)).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0 (== treats -0 as 0)', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is <= 0', assertion: "expect(result <= 0).toBeTruthy()" },
    ],
    hints: ['JavaScript has -0 as a distinct value; use Object.is to differentiate it from +0'],
    tags: ['Math', 'sign', 'static-method'],
    usageExample: {
      code: `// Returns -1, 0, or 1 based on sign
Math.sign(-5)   // → -1
Math.sign(0)    // → 0
Math.sign(3)    // → 1`,
      explanation: {
        en: 'Use Math.sign() to determine whether a number is positive, negative, or zero.',
        es: 'Usa Math.sign() para determinar si un número es positivo, negativo o cero.',
      },
    },
  },
  {
    slug: 'math-sign-5',
    title: 'Math.sign() — NaN Input',
    description: `## Math.sign()\n\nReturns the sign of a number, indicating whether it is positive, negative, or zero.\n\n**Challenge:** Observe that \`Math.sign(NaN)\` returns NaN.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'sign',
    initialCode: `// Use Math.sign()\n`,
    solution: `Math.sign(NaN)`,
    tests: [
      { description: 'result is NaN', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: "expect(result !== result).toBeTruthy()" },
      { description: 'isNaN is true', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'typeof is number', assertion: "expect(typeof result).toBe('number')" },
    ],
    hints: ['NaN propagates through Math.sign — NaN has no defined sign'],
    tags: ['Math', 'sign', 'static-method'],
    usageExample: {
      code: `// Returns -1, 0, or 1 based on sign
Math.sign(-5)   // → -1
Math.sign(0)    // → 0
Math.sign(3)    // → 1`,
      explanation: {
        en: 'Use Math.sign() to determine whether a number is positive, negative, or zero.',
        es: 'Usa Math.sign() para determinar si un número es positivo, negativo o cero.',
      },
    },
  },
]
