import type { Exercise } from '@/shared/types/exercises'

export const mathAtanExercises: Exercise[] = [
  {
    slug: 'math-atan-1',
    title: 'Math.atan(0) Equals Zero',
    description: `## Math.atan(x)\n\nReturns the arctangent (in radians) of a number. \`Math.atan(0)\` returns \`0\`.\n\n**Challenge:** Use \`Math.atan()\` and verify its result for input \`0\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'atan',
    initialCode: `// Use Math.atan() with input 0\nconst result = Math.atan(0)\n`,
    solution: `const result = Math.atan(0) // 0\n`,
    tests: [
      { description: 'Math.atan(0) returns 0', assertion: 'expect(Math.atan(0)).toBe(0)' },
      { description: 'typeof Math.atan(0) is number', assertion: "expect(typeof Math.atan(0)).toBe('number')" },
      { description: 'Math.atan(0) equals 0', assertion: 'expect(Math.atan(0) === 0).toBeTruthy()' },
      { description: 'Math.atan(0) is finite', assertion: 'expect(Number.isFinite(Math.atan(0))).toBeTruthy()' },
      { description: 'Math.abs(Math.atan(0)) is less than 0.001', assertion: 'expect(Math.abs(Math.atan(0)) < 0.001).toBeTruthy()' },
    ],
    hints: ['tan(0) = 0, so atan(0) = 0', 'The range of atan is (-π/2, π/2)'],
    tags: ['Math', 'atan', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse tangent — result in radians
Math.atan(1)   // → 0.7853... (π/4)
Math.atan(0)   // → 0`,
      explanation: {
        en: 'Use Math.atan() to find the angle (in radians) whose tangent equals a given value.',
        es: 'Usa Math.atan() para encontrar el ángulo (en radianes) cuya tangente es un valor dado.',
      },
    },
  },
  {
    slug: 'math-atan-2',
    title: 'Math.atan(1) Equals PI/4',
    description: `## Math.atan(x)\n\n\`Math.atan(1)\` returns \`Math.PI / 4\` (approximately 0.7854 radians or 45°).\n\n**Challenge:** Verify that \`Math.atan(1)\` equals π/4.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan',
    initialCode: `// Use Math.atan() with input 1\nconst result = Math.atan(1)\n`,
    solution: `const result = Math.atan(1) // Math.PI / 4\n`,
    tests: [
      { description: 'Math.atan(1) is approximately PI/4', assertion: 'expect(Math.abs(Math.atan(1) - Math.PI / 4) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan(1) is greater than 0.78', assertion: 'expect(Math.atan(1) > 0.78).toBeTruthy()' },
      { description: 'Math.atan(1) is less than 0.79', assertion: 'expect(Math.atan(1) < 0.79).toBeTruthy()' },
      { description: 'typeof Math.atan(1) is number', assertion: "expect(typeof Math.atan(1)).toBe('number')" },
      { description: 'Math.atan(1) is finite', assertion: 'expect(Number.isFinite(Math.atan(1))).toBeTruthy()' },
    ],
    hints: ['tan(45°) = 1, so atan(1) = π/4 ≈ 0.7854', 'Math.PI / 4 ≈ 0.7854'],
    tags: ['Math', 'atan', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse tangent — result in radians
Math.atan(1)   // → 0.7853... (π/4)
Math.atan(0)   // → 0`,
      explanation: {
        en: 'Use Math.atan() to find the angle (in radians) whose tangent equals a given value.',
        es: 'Usa Math.atan() para encontrar el ángulo (en radianes) cuya tangente es un valor dado.',
      },
    },
  },
  {
    slug: 'math-atan-3',
    title: 'Math.atan(-1) Equals -PI/4',
    description: `## Math.atan(x)\n\n\`Math.atan(-1)\` returns \`-Math.PI / 4\`. \`atan\` is an odd function.\n\n**Challenge:** Verify the odd-function property of \`Math.atan()\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan',
    initialCode: `// Use Math.atan() with input -1\nconst result = Math.atan(-1)\n`,
    solution: `const result = Math.atan(-1) // -Math.PI / 4\n`,
    tests: [
      { description: 'Math.atan(-1) is approximately -PI/4', assertion: 'expect(Math.abs(Math.atan(-1) - (-Math.PI / 4)) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan(-1) is less than -0.78', assertion: 'expect(Math.atan(-1) < -0.78).toBeTruthy()' },
      { description: 'Math.atan(-1) is greater than -0.79', assertion: 'expect(Math.atan(-1) > -0.79).toBeTruthy()' },
      { description: 'typeof Math.atan(-1) is number', assertion: "expect(typeof Math.atan(-1)).toBe('number')" },
      { description: 'Math.atan(-1) equals -Math.atan(1)', assertion: 'expect(Math.atan(-1) === -Math.atan(1)).toBeTruthy()' },
    ],
    hints: ['atan is an odd function: atan(-x) = -atan(x)', 'tan(-45°) = -1, so atan(-1) = -π/4'],
    tags: ['Math', 'atan', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse tangent — result in radians
Math.atan(1)   // → 0.7853... (π/4)
Math.atan(0)   // → 0`,
      explanation: {
        en: 'Use Math.atan() to find the angle (in radians) whose tangent equals a given value.',
        es: 'Usa Math.atan() para encontrar el ángulo (en radianes) cuya tangente es un valor dado.',
      },
    },
  },
  {
    slug: 'math-atan-4',
    title: 'Math.atan(Infinity) Equals PI/2',
    description: `## Math.atan(x)\n\nAs x approaches ±∞, \`Math.atan(x)\` approaches ±π/2.\n\n**Challenge:** Verify that \`Math.atan(Infinity)\` returns π/2.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan',
    initialCode: `// Use Math.atan() with Infinity\nconst result = Math.atan(Infinity)\n`,
    solution: `const result = Math.atan(Infinity) // Math.PI / 2\n`,
    tests: [
      { description: 'Math.atan(Infinity) is approximately PI/2', assertion: 'expect(Math.abs(Math.atan(Infinity) - Math.PI / 2) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan(Infinity) is greater than 1.57', assertion: 'expect(Math.atan(Infinity) > 1.57).toBeTruthy()' },
      { description: 'Math.atan(Infinity) is less than 1.58', assertion: 'expect(Math.atan(Infinity) < 1.58).toBeTruthy()' },
      { description: 'typeof Math.atan(Infinity) is number', assertion: "expect(typeof Math.atan(Infinity)).toBe('number')" },
      { description: 'Math.atan(Infinity) is finite', assertion: 'expect(Number.isFinite(Math.atan(Infinity))).toBeTruthy()' },
    ],
    hints: ['Unlike asinh, atan(∞) is a finite value (π/2)', 'The range of atan is the open interval (-π/2, π/2)'],
    tags: ['Math', 'atan', 'static-method', 'trigonometry', 'Infinity'],
    usageExample: {
      code: `// Inverse tangent — result in radians
Math.atan(1)   // → 0.7853... (π/4)
Math.atan(0)   // → 0`,
      explanation: {
        en: 'Use Math.atan() to find the angle (in radians) whose tangent equals a given value.',
        es: 'Usa Math.atan() para encontrar el ángulo (en radianes) cuya tangente es un valor dado.',
      },
    },
  },
  {
    slug: 'math-atan-5',
    title: 'Math.atan() Always Returns a Number',
    description: `## Math.atan(x)\n\n\`Math.atan()\` is defined for all real numbers and always returns a \`number\`.\n\n**Challenge:** Verify the return type of \`Math.atan()\` for various inputs.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'atan',
    initialCode: `// Check the return type of Math.atan()\nconst result = typeof Math.atan(0)\n`,
    solution: `const result = typeof Math.atan(0) // 'number'\n`,
    tests: [
      { description: 'typeof Math.atan(0) is number', assertion: "expect(typeof Math.atan(0)).toBe('number')" },
      { description: 'typeof Math.atan(1) is number', assertion: "expect(typeof Math.atan(1)).toBe('number')" },
      { description: 'typeof Math.atan(-1) is number', assertion: "expect(typeof Math.atan(-1)).toBe('number')" },
      { description: 'typeof Math.atan(Infinity) is number', assertion: "expect(typeof Math.atan(Infinity)).toBe('number')" },
      { description: 'typeof Math.atan(100) is number', assertion: "expect(typeof Math.atan(100)).toBe('number')" },
    ],
    hints: ['All Math methods return a number primitive', 'atan accepts any real number including ±Infinity'],
    tags: ['Math', 'atan', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse tangent — result in radians
Math.atan(1)   // → 0.7853... (π/4)
Math.atan(0)   // → 0`,
      explanation: {
        en: 'Use Math.atan() to find the angle (in radians) whose tangent equals a given value.',
        es: 'Usa Math.atan() para encontrar el ángulo (en radianes) cuya tangente es un valor dado.',
      },
    },
  },
]
