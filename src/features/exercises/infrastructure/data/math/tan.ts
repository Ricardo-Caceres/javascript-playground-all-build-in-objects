import type { Exercise } from '@/shared/types/exercises'

export const mathTanExercises: Exercise[] = [
  {
    slug: 'math-tan-1',
    title: 'Math.tan() — tan(0) = 0',
    description: `## Math.tan()\n\nReturns the tangent of a number (in radians).\n\n**Challenge:** Verify that \`Math.tan(0)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'tan',
    initialCode: `// Use Math.tan()\n`,
    solution: `Math.tan(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['tan(0) = sin(0)/cos(0) = 0/1 = 0'],
    tags: ['Math', 'tan', 'static-method'],
    usageExample: {
      code: `// Tangent of an angle in radians
Math.tan(0)            // → 0
Math.tan(Math.PI / 4)  // → 1`,
      explanation: {
        en: 'Use Math.tan() to compute the tangent of an angle in radians for trigonometry and slope calculations.',
        es: 'Usa Math.tan() para calcular la tangente de un ángulo en radianes, útil en trigonometría y cálculos de pendiente.',
      },
    },
  },
  {
    slug: 'math-tan-2',
    title: 'Math.tan() — tan(π/4) ≈ 1',
    description: `## Math.tan()\n\nReturns the tangent of a number (in radians).\n\n**Challenge:** Verify that \`Math.tan(Math.PI/4)\` returns approximately 1.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'tan',
    initialCode: `// Use Math.tan()\n`,
    solution: `Math.tan(Math.PI / 4)`,
    tests: [
      { description: 'Math.tan(Math.PI/4) ≈ 1', assertion: "expect(Math.abs(Math.tan(Math.PI/4) - 1) < 1e-10).toBeTruthy()" },
      { description: 'Math.tan(Math.PI/4) > 0.999', assertion: "expect(Math.tan(Math.PI/4) > 0.999).toBeTruthy()" },
      { description: 'Math.tan(Math.PI/4) < 1.001', assertion: "expect(Math.tan(Math.PI/4) < 1.001).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof Math.tan(Math.PI/4)).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(Math.tan(Math.PI/4))).toBeTruthy()" },
    ],
    hints: ['tan(π/4) = 1 — at 45 degrees, the slope of the unit circle tangent line is 1'],
    tags: ['Math', 'tan', 'static-method'],
    usageExample: {
      code: `// Tangent of an angle in radians
Math.tan(0)            // → 0
Math.tan(Math.PI / 4)  // → 1`,
      explanation: {
        en: 'Use Math.tan() to compute the tangent of an angle in radians for trigonometry and slope calculations.',
        es: 'Usa Math.tan() para calcular la tangente de un ángulo en radianes, útil en trigonometría y cálculos de pendiente.',
      },
    },
  },
  {
    slug: 'math-tan-3',
    title: 'Math.tan() — tan(-π/4) ≈ -1',
    description: `## Math.tan()\n\nReturns the tangent of a number (in radians).\n\n**Challenge:** Verify that \`Math.tan(-Math.PI/4)\` returns approximately -1.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'tan',
    initialCode: `// Use Math.tan()\n`,
    solution: `Math.tan(-Math.PI / 4)`,
    tests: [
      { description: 'Math.tan(-Math.PI/4) ≈ -1', assertion: "expect(Math.abs(Math.tan(-Math.PI/4) - (-1)) < 1e-10).toBeTruthy()" },
      { description: 'Math.tan(-Math.PI/4) < -0.999', assertion: "expect(Math.tan(-Math.PI/4) < -0.999).toBeTruthy()" },
      { description: 'Math.tan(-Math.PI/4) > -1.001', assertion: "expect(Math.tan(-Math.PI/4) > -1.001).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof Math.tan(-Math.PI/4)).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(Math.tan(-Math.PI/4))).toBeTruthy()" },
    ],
    hints: ['tan is an odd function: tan(-x) = -tan(x), so tan(-π/4) = -1'],
    tags: ['Math', 'tan', 'static-method'],
    usageExample: {
      code: `// Tangent of an angle in radians
Math.tan(0)            // → 0
Math.tan(Math.PI / 4)  // → 1`,
      explanation: {
        en: 'Use Math.tan() to compute the tangent of an angle in radians for trigonometry and slope calculations.',
        es: 'Usa Math.tan() para calcular la tangente de un ángulo en radianes, útil en trigonometría y cálculos de pendiente.',
      },
    },
  },
  {
    slug: 'math-tan-4',
    title: 'Math.tan() — Return Type',
    description: `## Math.tan()\n\nReturns the tangent of a number (in radians).\n\n**Challenge:** Confirm that \`Math.tan()\` always returns a JavaScript \`number\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'tan',
    initialCode: `// Use Math.tan()\n`,
    solution: `typeof Math.tan(0)`,
    tests: [
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof Math.tan(1) is number', assertion: "expect(typeof Math.tan(1)).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof Math.tan(-1) is number', assertion: "expect(typeof Math.tan(-1)).toBe('number')" },
      { description: 'typeof Math.tan(Math.PI/4) is number', assertion: "expect(typeof Math.tan(Math.PI/4)).toBe('number')" },
    ],
    hints: ['Math.tan always returns a number primitive'],
    tags: ['Math', 'tan', 'static-method'],
    usageExample: {
      code: `// Tangent of an angle in radians
Math.tan(0)            // → 0
Math.tan(Math.PI / 4)  // → 1`,
      explanation: {
        en: 'Use Math.tan() to compute the tangent of an angle in radians for trigonometry and slope calculations.',
        es: 'Usa Math.tan() para calcular la tangente de un ángulo en radianes, útil en trigonometría y cálculos de pendiente.',
      },
    },
  },
  {
    slug: 'math-tan-5',
    title: 'Math.tan() — tan(π) ≈ 0',
    description: `## Math.tan()\n\nReturns the tangent of a number (in radians).\n\n**Challenge:** Observe that \`Math.tan(Math.PI)\` returns a value very close to 0 (floating-point approximation).`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'tan',
    initialCode: `// Use Math.tan()\n`,
    solution: `Math.tan(Math.PI)`,
    tests: [
      { description: 'result ≈ 0', assertion: "expect(Math.abs(result) < 1e-10).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result > -0.001', assertion: "expect(result > -0.001).toBeTruthy()" },
      { description: 'result < 0.001', assertion: "expect(result < 0.001).toBeTruthy()" },
    ],
    hints: ['tan(π) = 0 mathematically; floating-point gives a tiny near-zero value due to π approximation'],
    tags: ['Math', 'tan', 'static-method'],
    usageExample: {
      code: `// Tangent of an angle in radians
Math.tan(0)            // → 0
Math.tan(Math.PI / 4)  // → 1`,
      explanation: {
        en: 'Use Math.tan() to compute the tangent of an angle in radians for trigonometry and slope calculations.',
        es: 'Usa Math.tan() para calcular la tangente de un ángulo en radianes, útil en trigonometría y cálculos de pendiente.',
      },
    },
  },
]
