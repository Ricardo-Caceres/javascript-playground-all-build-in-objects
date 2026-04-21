import type { Exercise } from '@/shared/types/exercises'

export const mathAsinhExercises: Exercise[] = [
  {
    slug: 'math-asinh-1',
    title: 'Math.asinh(0) Equals Zero',
    description: `## Math.asinh(x)\n\nReturns the hyperbolic arcsine of a number. \`Math.asinh(0)\` returns \`0\`.\n\n**Challenge:** Use \`Math.asinh()\` and verify its result for input \`0\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'asinh',
    initialCode: `// Use Math.asinh() with input 0\nconst result = Math.asinh(0)\n`,
    solution: `const result = Math.asinh(0) // 0\n`,
    tests: [
      { description: 'Math.asinh(0) returns 0', assertion: 'expect(Math.asinh(0)).toBe(0)' },
      { description: 'typeof Math.asinh(0) is number', assertion: "expect(typeof Math.asinh(0)).toBe('number')" },
      { description: 'Math.asinh(0) equals 0', assertion: 'expect(Math.asinh(0) === 0).toBeTruthy()' },
      { description: 'Math.asinh(0) is finite', assertion: 'expect(Number.isFinite(Math.asinh(0))).toBeTruthy()' },
      { description: 'Math.abs(Math.asinh(0)) is less than 0.001', assertion: 'expect(Math.abs(Math.asinh(0)) < 0.001).toBeTruthy()' },
    ],
    hints: ['sinh(0) = 0, so asinh(0) = 0', 'asinh is defined for all real numbers'],
    tags: ['Math', 'asinh', 'static-method', 'hyperbolic'],
    usageExample: {
      code: `// Inverse hyperbolic sine (works for all reals)
Math.asinh(0)   // → 0
Math.asinh(1)   // → 0.8813...`,
      explanation: {
        en: 'Use Math.asinh() to compute the inverse hyperbolic sine of any real number.',
        es: 'Usa Math.asinh() para calcular el seno hiperbólico inverso de cualquier número real.',
      },
    },
  },
  {
    slug: 'math-asinh-2',
    title: 'Math.asinh(1) ≈ 0.881',
    description: `## Math.asinh(x)\n\n\`Math.asinh(1)\` returns approximately \`0.8814\`.\n\n**Challenge:** Compute and verify \`Math.asinh(1)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'asinh',
    initialCode: `// Use Math.asinh() with input 1\nconst result = Math.asinh(1)\n`,
    solution: `const result = Math.asinh(1) // ~0.8814\n`,
    tests: [
      { description: 'Math.asinh(1) is approximately 0.8814', assertion: 'expect(Math.abs(Math.asinh(1) - 0.881373587019543) < 1e-10).toBeTruthy()' },
      { description: 'Math.asinh(1) is greater than 0.88', assertion: 'expect(Math.asinh(1) > 0.88).toBeTruthy()' },
      { description: 'Math.asinh(1) is less than 0.89', assertion: 'expect(Math.asinh(1) < 0.89).toBeTruthy()' },
      { description: 'typeof Math.asinh(1) is number', assertion: "expect(typeof Math.asinh(1)).toBe('number')" },
      { description: 'Math.asinh(1) is finite', assertion: 'expect(Number.isFinite(Math.asinh(1))).toBeTruthy()' },
    ],
    hints: ['asinh(x) = ln(x + √(x²+1))', 'Unlike asin, asinh has no domain restriction'],
    tags: ['Math', 'asinh', 'static-method', 'hyperbolic'],
    usageExample: {
      code: `// Inverse hyperbolic sine (works for all reals)
Math.asinh(0)   // → 0
Math.asinh(1)   // → 0.8813...`,
      explanation: {
        en: 'Use Math.asinh() to compute the inverse hyperbolic sine of any real number.',
        es: 'Usa Math.asinh() para calcular el seno hiperbólico inverso de cualquier número real.',
      },
    },
  },
  {
    slug: 'math-asinh-3',
    title: 'Math.asinh(-1) ≈ -0.881 (Odd Function)',
    description: `## Math.asinh(x)\n\n\`Math.asinh()\` is an odd function: \`asinh(-x) = -asinh(x)\`.\n\n**Challenge:** Verify the odd-function property of \`Math.asinh()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'asinh',
    initialCode: `// Use Math.asinh() with negative input\nconst result = Math.asinh(-1)\n`,
    solution: `const result = Math.asinh(-1) // ~-0.8814\n`,
    tests: [
      { description: 'Math.asinh(-1) is approximately -0.8814', assertion: 'expect(Math.abs(Math.asinh(-1) - (-0.881373587019543)) < 1e-10).toBeTruthy()' },
      { description: 'Math.asinh(-1) is less than -0.88', assertion: 'expect(Math.asinh(-1) < -0.88).toBeTruthy()' },
      { description: 'Math.asinh(-1) is greater than -0.89', assertion: 'expect(Math.asinh(-1) > -0.89).toBeTruthy()' },
      { description: 'typeof Math.asinh(-1) is number', assertion: "expect(typeof Math.asinh(-1)).toBe('number')" },
      { description: 'Math.asinh(-1) equals -Math.asinh(1)', assertion: 'expect(Math.asinh(-1) === -Math.asinh(1)).toBeTruthy()' },
    ],
    hints: ['asinh is an odd function: asinh(-x) = -asinh(x)', 'This mirrors the behavior of sinh itself'],
    tags: ['Math', 'asinh', 'static-method', 'hyperbolic'],
    usageExample: {
      code: `// Inverse hyperbolic sine (works for all reals)
Math.asinh(0)   // → 0
Math.asinh(1)   // → 0.8813...`,
      explanation: {
        en: 'Use Math.asinh() to compute the inverse hyperbolic sine of any real number.',
        es: 'Usa Math.asinh() para calcular el seno hiperbólico inverso de cualquier número real.',
      },
    },
  },
  {
    slug: 'math-asinh-4',
    title: 'Math.asinh() Always Returns a Number',
    description: `## Math.asinh(x)\n\n\`Math.asinh()\` is defined for all real numbers and always returns a \`number\`.\n\n**Challenge:** Verify the return type of \`Math.asinh()\` for various inputs.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'asinh',
    initialCode: `// Check the return type of Math.asinh()\nconst result = typeof Math.asinh(0)\n`,
    solution: `const result = typeof Math.asinh(0) // 'number'\n`,
    tests: [
      { description: 'typeof Math.asinh(0) is number', assertion: "expect(typeof Math.asinh(0)).toBe('number')" },
      { description: 'typeof Math.asinh(1) is number', assertion: "expect(typeof Math.asinh(1)).toBe('number')" },
      { description: 'typeof Math.asinh(-1) is number', assertion: "expect(typeof Math.asinh(-1)).toBe('number')" },
      { description: 'typeof Math.asinh(100) is number', assertion: "expect(typeof Math.asinh(100)).toBe('number')" },
      { description: 'typeof Math.asinh(Infinity) is number', assertion: "expect(typeof Math.asinh(Infinity)).toBe('number')" },
    ],
    hints: ['All Math methods return a number primitive', 'asinh accepts any real number, including Infinity'],
    tags: ['Math', 'asinh', 'static-method', 'hyperbolic'],
    usageExample: {
      code: `// Inverse hyperbolic sine (works for all reals)
Math.asinh(0)   // → 0
Math.asinh(1)   // → 0.8813...`,
      explanation: {
        en: 'Use Math.asinh() to compute the inverse hyperbolic sine of any real number.',
        es: 'Usa Math.asinh() para calcular el seno hiperbólico inverso de cualquier número real.',
      },
    },
  },
  {
    slug: 'math-asinh-5',
    title: 'Math.asinh(Infinity) Equals Infinity',
    description: `## Math.asinh(x)\n\nAs x approaches infinity, \`Math.asinh(x)\` also approaches infinity.\n\n**Challenge:** Verify that \`Math.asinh(Infinity)\` returns \`Infinity\`.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'asinh',
    initialCode: `// Use Math.asinh() with Infinity\nconst result = Math.asinh(Infinity)\n`,
    solution: `const result = Math.asinh(Infinity) // Infinity\n`,
    tests: [
      { description: 'Math.asinh(Infinity) is Infinity', assertion: 'expect(Math.asinh(Infinity)).toBe(Infinity)' },
      { description: 'Math.asinh(Infinity) is not finite', assertion: 'expect(!isFinite(Math.asinh(Infinity))).toBeTruthy()' },
      { description: 'typeof Math.asinh(Infinity) is number', assertion: "expect(typeof Math.asinh(Infinity)).toBe('number')" },
      { description: 'Math.asinh(Infinity) is greater than 100', assertion: 'expect(Math.asinh(Infinity) > 100).toBeTruthy()' },
      { description: 'Math.asinh(-Infinity) is -Infinity', assertion: 'expect(Math.asinh(-Infinity)).toBe(-Infinity)' },
    ],
    hints: ['asinh(-∞) = -∞ due to the odd-function property', 'asinh grows logarithmically for large values'],
    tags: ['Math', 'asinh', 'static-method', 'hyperbolic', 'Infinity'],
    usageExample: {
      code: `// Inverse hyperbolic sine (works for all reals)
Math.asinh(0)   // → 0
Math.asinh(1)   // → 0.8813...`,
      explanation: {
        en: 'Use Math.asinh() to compute the inverse hyperbolic sine of any real number.',
        es: 'Usa Math.asinh() para calcular el seno hiperbólico inverso de cualquier número real.',
      },
    },
  },
]
