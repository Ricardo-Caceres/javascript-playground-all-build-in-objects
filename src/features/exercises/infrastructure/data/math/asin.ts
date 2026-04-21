import type { Exercise } from '@/shared/types/exercises'

export const mathAsinExercises: Exercise[] = [
  {
    slug: 'math-asin-1',
    title: 'Math.asin(0) Equals Zero',
    description: `## Math.asin(x)\n\nReturns the arcsine (in radians) of a number. \`Math.asin(0)\` returns \`0\`.\n\n**Challenge:** Use \`Math.asin()\` and verify its result for input \`0\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'asin',
    initialCode: `// Use Math.asin() with input 0\nconst result = Math.asin(0)\n`,
    solution: `const result = Math.asin(0) // 0\n`,
    tests: [
      { description: 'Math.asin(0) returns 0', assertion: 'expect(Math.asin(0)).toBe(0)' },
      { description: 'typeof Math.asin(0) is number', assertion: "expect(typeof Math.asin(0)).toBe('number')" },
      { description: 'Math.asin(0) equals 0', assertion: 'expect(Math.asin(0) === 0).toBeTruthy()' },
      { description: 'Math.asin(0) is finite', assertion: 'expect(Number.isFinite(Math.asin(0))).toBeTruthy()' },
      { description: 'Math.abs(Math.asin(0)) is less than 0.001', assertion: 'expect(Math.abs(Math.asin(0)) < 0.001).toBeTruthy()' },
    ],
    hints: ['sin(0) = 0, so asin(0) = 0', 'The range of asin is [-π/2, π/2]'],
    tags: ['Math', 'asin', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse sine — result in radians
Math.asin(0)   // → 0
Math.asin(1)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.asin() to find the angle (in radians) whose sine equals a given value.',
        es: 'Usa Math.asin() para encontrar el ángulo (en radianes) cuyo seno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-asin-2',
    title: 'Math.asin(1) Equals PI/2',
    description: `## Math.asin(x)\n\n\`Math.asin(1)\` returns \`Math.PI / 2\` (approximately 1.5708 radians).\n\n**Challenge:** Verify that \`Math.asin(1)\` equals π/2.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'asin',
    initialCode: `// Use Math.asin() with input 1\nconst result = Math.asin(1)\n`,
    solution: `const result = Math.asin(1) // Math.PI / 2\n`,
    tests: [
      { description: 'Math.asin(1) is approximately PI/2', assertion: 'expect(Math.abs(Math.asin(1) - Math.PI / 2) < 1e-10).toBeTruthy()' },
      { description: 'Math.asin(1) is greater than 1.5', assertion: 'expect(Math.asin(1) > 1.5).toBeTruthy()' },
      { description: 'Math.asin(1) is less than 1.6', assertion: 'expect(Math.asin(1) < 1.6).toBeTruthy()' },
      { description: 'typeof Math.asin(1) is number', assertion: "expect(typeof Math.asin(1)).toBe('number')" },
      { description: 'Math.asin(1) is finite', assertion: 'expect(Number.isFinite(Math.asin(1))).toBeTruthy()' },
    ],
    hints: ['sin(π/2) = 1, so asin(1) = π/2', 'Math.PI / 2 ≈ 1.5708'],
    tags: ['Math', 'asin', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse sine — result in radians
Math.asin(0)   // → 0
Math.asin(1)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.asin() to find the angle (in radians) whose sine equals a given value.',
        es: 'Usa Math.asin() para encontrar el ángulo (en radianes) cuyo seno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-asin-3',
    title: 'Math.asin(-1) Equals -PI/2',
    description: `## Math.asin(x)\n\n\`Math.asin(-1)\` returns \`-Math.PI / 2\` (approximately -1.5708 radians).\n\n**Challenge:** Verify that \`Math.asin(-1)\` equals -π/2.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'asin',
    initialCode: `// Use Math.asin() with input -1\nconst result = Math.asin(-1)\n`,
    solution: `const result = Math.asin(-1) // -Math.PI / 2\n`,
    tests: [
      { description: 'Math.asin(-1) is approximately -PI/2', assertion: 'expect(Math.abs(Math.asin(-1) - (-Math.PI / 2)) < 1e-10).toBeTruthy()' },
      { description: 'Math.asin(-1) is less than -1.5', assertion: 'expect(Math.asin(-1) < -1.5).toBeTruthy()' },
      { description: 'Math.asin(-1) is greater than -1.6', assertion: 'expect(Math.asin(-1) > -1.6).toBeTruthy()' },
      { description: 'typeof Math.asin(-1) is number', assertion: "expect(typeof Math.asin(-1)).toBe('number')" },
      { description: 'Math.asin(-1) is finite', assertion: 'expect(Number.isFinite(Math.asin(-1))).toBeTruthy()' },
    ],
    hints: ['sin(-π/2) = -1, so asin(-1) = -π/2', 'asin is an odd function: asin(-x) = -asin(x)'],
    tags: ['Math', 'asin', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse sine — result in radians
Math.asin(0)   // → 0
Math.asin(1)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.asin() to find the angle (in radians) whose sine equals a given value.',
        es: 'Usa Math.asin() para encontrar el ángulo (en radianes) cuyo seno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-asin-4',
    title: 'Math.asin(0.5) ≈ 0.524 Radians',
    description: `## Math.asin(x)\n\n\`Math.asin(0.5)\` returns approximately \`0.5236\` radians (30°).\n\n**Challenge:** Compute and verify \`Math.asin(0.5)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'asin',
    initialCode: `// Use Math.asin() with input 0.5\nconst result = Math.asin(0.5)\n`,
    solution: `const result = Math.asin(0.5) // ~0.5236 (30 degrees in radians)\n`,
    tests: [
      { description: 'Math.asin(0.5) is approximately 0.5236', assertion: 'expect(Math.abs(Math.asin(0.5) - 0.5235987755982989) < 1e-10).toBeTruthy()' },
      { description: 'Math.asin(0.5) is greater than 0.5', assertion: 'expect(Math.asin(0.5) > 0.5).toBeTruthy()' },
      { description: 'Math.asin(0.5) is less than 0.6', assertion: 'expect(Math.asin(0.5) < 0.6).toBeTruthy()' },
      { description: 'typeof Math.asin(0.5) is number', assertion: "expect(typeof Math.asin(0.5)).toBe('number')" },
      { description: 'Math.asin(0.5) is finite', assertion: 'expect(Number.isFinite(Math.asin(0.5))).toBeTruthy()' },
    ],
    hints: ['sin(30°) = 0.5, so asin(0.5) = π/6 ≈ 0.5236', 'Multiply by 180/Math.PI to convert to degrees'],
    tags: ['Math', 'asin', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse sine — result in radians
Math.asin(0)   // → 0
Math.asin(1)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.asin() to find the angle (in radians) whose sine equals a given value.',
        es: 'Usa Math.asin() para encontrar el ángulo (en radianes) cuyo seno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-asin-5',
    title: 'Math.asin() Out of Domain Returns NaN',
    description: `## Math.asin(x)\n\n\`Math.asin()\` is only defined for inputs in [-1, 1]. Values outside this range return \`NaN\`.\n\n**Challenge:** Verify that \`Math.asin(2)\` returns \`NaN\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'asin',
    initialCode: `// Use Math.asin() with an out-of-range value\nconst result = Math.asin(2)\n`,
    solution: `const result = Math.asin(2) // NaN\n`,
    tests: [
      { description: 'Math.asin(2) is NaN', assertion: 'expect(isNaN(Math.asin(2))).toBeTruthy()' },
      { description: 'Math.asin(-2) is NaN', assertion: 'expect(isNaN(Math.asin(-2))).toBeTruthy()' },
      { description: 'typeof Math.asin(2) is number', assertion: "expect(typeof Math.asin(2)).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: 'expect(Math.asin(2) !== Math.asin(2)).toBeTruthy()' },
      { description: 'Math.asin(1.1) is NaN', assertion: 'expect(isNaN(Math.asin(1.1))).toBeTruthy()' },
    ],
    hints: ['The domain of asin is [-1, 1]', 'NaN is the only JavaScript value where x !== x'],
    tags: ['Math', 'asin', 'static-method', 'trigonometry', 'NaN'],
    usageExample: {
      code: `// Inverse sine — result in radians
Math.asin(0)   // → 0
Math.asin(1)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.asin() to find the angle (in radians) whose sine equals a given value.',
        es: 'Usa Math.asin() para encontrar el ángulo (en radianes) cuyo seno es un valor dado.',
      },
    },
  },
]
