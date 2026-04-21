import type { Exercise } from '@/shared/types/exercises'

export const mathExpm1Exercises: Exercise[] = [
  {
    slug: 'math-expm1-1',
    title: 'Math.expm1(0) Equals Zero',
    description: `## Math.expm1(x)\n\nReturns \`eˣ - 1\` with higher precision for small values of x. \`Math.expm1(0)\` returns \`0\`.\n\n**Challenge:** Use \`Math.expm1()\` and verify its result for input \`0\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'expm1',
    initialCode: `// Use Math.expm1() with input 0\nconst result = Math.expm1(0)\n`,
    solution: `const result = Math.expm1(0) // 0\n`,
    tests: [
      { description: 'Math.expm1(0) returns 0', assertion: 'expect(Math.expm1(0)).toBe(0)' },
      { description: 'typeof Math.expm1(0) is number', assertion: "expect(typeof Math.expm1(0)).toBe('number')" },
      { description: 'Math.expm1(0) equals 0', assertion: 'expect(Math.expm1(0) === 0).toBeTruthy()' },
      { description: 'Math.expm1(0) is finite', assertion: 'expect(Number.isFinite(Math.expm1(0))).toBeTruthy()' },
      { description: 'Math.abs(Math.expm1(0)) is less than 0.001', assertion: 'expect(Math.abs(Math.expm1(0)) < 0.001).toBeTruthy()' },
    ],
    hints: ['expm1(0) = e⁰ - 1 = 1 - 1 = 0', 'expm1 is more precise than exp(x) - 1 for small x'],
    tags: ['Math', 'expm1', 'static-method', 'exponential'],
    usageExample: {
      code: `// e^x minus 1, precise for very small x
Math.expm1(0)     // → 0
Math.expm1(0.001) // → 0.0010005...`,
      explanation: {
        en: 'Use Math.expm1(x) instead of Math.exp(x) - 1 for small x values to avoid floating-point precision loss.',
        es: 'Usa Math.expm1(x) en lugar de Math.exp(x) - 1 para valores pequeños de x y evitar pérdida de precisión flotante.',
      },
    },
  },
  {
    slug: 'math-expm1-2',
    title: 'Math.expm1(1) ≈ e - 1 ≈ 1.718',
    description: `## Math.expm1(x)\n\n\`Math.expm1(1)\` returns \`Math.E - 1\` (approximately 1.7183).\n\n**Challenge:** Verify that \`Math.expm1(1)\` equals \`Math.E - 1\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'expm1',
    initialCode: `// Use Math.expm1() with input 1\nconst result = Math.expm1(1)\n`,
    solution: `const result = Math.expm1(1) // Math.E - 1 ≈ 1.7183\n`,
    tests: [
      { description: 'Math.expm1(1) is approximately Math.E - 1', assertion: 'expect(Math.abs(Math.expm1(1) - (Math.E - 1)) < 1e-10).toBeTruthy()' },
      { description: 'Math.expm1(1) is greater than 1.71', assertion: 'expect(Math.expm1(1) > 1.71).toBeTruthy()' },
      { description: 'Math.expm1(1) is less than 1.72', assertion: 'expect(Math.expm1(1) < 1.72).toBeTruthy()' },
      { description: 'typeof Math.expm1(1) is number', assertion: "expect(typeof Math.expm1(1)).toBe('number')" },
      { description: 'Math.expm1(1) is finite', assertion: 'expect(Number.isFinite(Math.expm1(1))).toBeTruthy()' },
    ],
    hints: ['expm1(1) = e¹ - 1 = e - 1 ≈ 1.7183', 'Math.E ≈ 2.71828'],
    tags: ['Math', 'expm1', 'static-method', 'exponential'],
    usageExample: {
      code: `// e^x minus 1, precise for very small x
Math.expm1(0)     // → 0
Math.expm1(0.001) // → 0.0010005...`,
      explanation: {
        en: 'Use Math.expm1(x) instead of Math.exp(x) - 1 for small x values to avoid floating-point precision loss.',
        es: 'Usa Math.expm1(x) en lugar de Math.exp(x) - 1 para valores pequeños de x y evitar pérdida de precisión flotante.',
      },
    },
  },
  {
    slug: 'math-expm1-3',
    title: 'Math.expm1(-1) ≈ -0.632',
    description: `## Math.expm1(x)\n\n\`Math.expm1(-1)\` returns approximately \`-0.6321\` (= 1/e - 1).\n\n**Challenge:** Compute and verify \`Math.expm1(-1)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'expm1',
    initialCode: `// Use Math.expm1() with negative input\nconst result = Math.expm1(-1)\n`,
    solution: `const result = Math.expm1(-1) // ~-0.6321 (= 1/e - 1)\n`,
    tests: [
      { description: 'Math.expm1(-1) is approximately 1/e - 1', assertion: 'expect(Math.abs(Math.expm1(-1) - (1 / Math.E - 1)) < 1e-10).toBeTruthy()' },
      { description: 'Math.expm1(-1) is greater than -0.633', assertion: 'expect(Math.expm1(-1) > -0.633).toBeTruthy()' },
      { description: 'Math.expm1(-1) is less than -0.631', assertion: 'expect(Math.expm1(-1) < -0.631).toBeTruthy()' },
      { description: 'typeof Math.expm1(-1) is number', assertion: "expect(typeof Math.expm1(-1)).toBe('number')" },
      { description: 'Math.expm1(-1) is less than 0', assertion: 'expect(Math.expm1(-1) < 0).toBeTruthy()' },
    ],
    hints: ['expm1(-1) = e⁻¹ - 1 = 1/e - 1 ≈ -0.632', 'Negative inputs produce results in the range (-1, 0)'],
    tags: ['Math', 'expm1', 'static-method', 'exponential'],
    usageExample: {
      code: `// e^x minus 1, precise for very small x
Math.expm1(0)     // → 0
Math.expm1(0.001) // → 0.0010005...`,
      explanation: {
        en: 'Use Math.expm1(x) instead of Math.exp(x) - 1 for small x values to avoid floating-point precision loss.',
        es: 'Usa Math.expm1(x) en lugar de Math.exp(x) - 1 para valores pequeños de x y evitar pérdida de precisión flotante.',
      },
    },
  },
  {
    slug: 'math-expm1-4',
    title: 'Math.expm1(Infinity) Equals Infinity',
    description: `## Math.expm1(x)\n\nAs x → ∞, \`Math.expm1(x)\` also grows without bound.\n\n**Challenge:** Verify that \`Math.expm1(Infinity)\` returns \`Infinity\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'expm1',
    initialCode: `// Use Math.expm1() with Infinity\nconst result = Math.expm1(Infinity)\n`,
    solution: `const result = Math.expm1(Infinity) // Infinity\n`,
    tests: [
      { description: 'Math.expm1(Infinity) is Infinity', assertion: 'expect(Math.expm1(Infinity)).toBe(Infinity)' },
      { description: 'Math.expm1(Infinity) is not finite', assertion: 'expect(!isFinite(Math.expm1(Infinity))).toBeTruthy()' },
      { description: 'typeof Math.expm1(Infinity) is number', assertion: "expect(typeof Math.expm1(Infinity)).toBe('number')" },
      { description: 'Math.expm1(Infinity) is greater than 1000', assertion: 'expect(Math.expm1(Infinity) > 1000).toBeTruthy()' },
      { description: 'Math.expm1(100) is greater than 1e43', assertion: 'expect(Math.expm1(100) > 1e43).toBeTruthy()' },
    ],
    hints: ['expm1(∞) = e^∞ - 1 = ∞ - 1 = ∞', 'For large x, expm1(x) ≈ exp(x)'],
    tags: ['Math', 'expm1', 'static-method', 'exponential', 'Infinity'],
    usageExample: {
      code: `// e^x minus 1, precise for very small x
Math.expm1(0)     // → 0
Math.expm1(0.001) // → 0.0010005...`,
      explanation: {
        en: 'Use Math.expm1(x) instead of Math.exp(x) - 1 for small x values to avoid floating-point precision loss.',
        es: 'Usa Math.expm1(x) en lugar de Math.exp(x) - 1 para valores pequeños de x y evitar pérdida de precisión flotante.',
      },
    },
  },
  {
    slug: 'math-expm1-5',
    title: 'Math.expm1() Always Returns a Number',
    description: `## Math.expm1(x)\n\n\`Math.expm1()\` always returns a value of type \`number\` for any input.\n\n**Challenge:** Verify the return type of \`Math.expm1()\` for various inputs.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'expm1',
    initialCode: `// Check the return type of Math.expm1()\nconst result = typeof Math.expm1(0)\n`,
    solution: `const result = typeof Math.expm1(0) // 'number'\n`,
    tests: [
      { description: 'typeof Math.expm1(0) is number', assertion: "expect(typeof Math.expm1(0)).toBe('number')" },
      { description: 'typeof Math.expm1(1) is number', assertion: "expect(typeof Math.expm1(1)).toBe('number')" },
      { description: 'typeof Math.expm1(-1) is number', assertion: "expect(typeof Math.expm1(-1)).toBe('number')" },
      { description: 'typeof Math.expm1(Infinity) is number', assertion: "expect(typeof Math.expm1(Infinity)).toBe('number')" },
      { description: 'typeof Math.expm1(0.0001) is number', assertion: "expect(typeof Math.expm1(0.0001)).toBe('number')" },
    ],
    hints: ['All Math methods return a number primitive', 'expm1 is especially useful for tiny values of x near 0'],
    tags: ['Math', 'expm1', 'static-method', 'exponential'],
    usageExample: {
      code: `// e^x minus 1, precise for very small x
Math.expm1(0)     // → 0
Math.expm1(0.001) // → 0.0010005...`,
      explanation: {
        en: 'Use Math.expm1(x) instead of Math.exp(x) - 1 for small x values to avoid floating-point precision loss.',
        es: 'Usa Math.expm1(x) en lugar de Math.exp(x) - 1 para valores pequeños de x y evitar pérdida de precisión flotante.',
      },
    },
  },
]
