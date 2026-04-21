import type { Exercise } from '@/shared/types/exercises'

export const mathAcosExercises: Exercise[] = [
  {
    slug: 'math-acos-1',
    title: 'Math.acos(1) Equals Zero',
    description: `## Math.acos(x)\n\nReturns the arccosine (in radians) of a number. \`Math.acos(1)\` returns \`0\`.\n\n**Challenge:** Use \`Math.acos()\` and verify its result for input \`1\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'acos',
    initialCode: `// Use Math.acos() with input 1\nconst result = Math.acos(1)\n`,
    solution: `const result = Math.acos(1) // 0\n`,
    tests: [
      { description: 'Math.acos(1) returns 0', assertion: 'expect(Math.acos(1)).toBe(0)' },
      { description: 'typeof Math.acos(1) is number', assertion: "expect(typeof Math.acos(1)).toBe('number')" },
      { description: 'Math.acos(1) is non-negative', assertion: 'expect(Math.acos(1) >= 0).toBeTruthy()' },
      { description: 'Math.acos(1) is less than 0.001', assertion: 'expect(Math.acos(1) < 0.001).toBeTruthy()' },
      { description: 'Math.acos(1) is finite', assertion: 'expect(Number.isFinite(Math.acos(1))).toBeTruthy()' },
    ],
    hints: ['cos(0) = 1, so acos(1) = 0', 'The range of acos is [0, π]'],
    tags: ['Math', 'acos', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse cosine — result in radians
Math.acos(1)   // → 0
Math.acos(0)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.acos() to find the angle (in radians) whose cosine equals a given value.',
        es: 'Usa Math.acos() para encontrar el ángulo (en radianes) cuyo coseno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-acos-2',
    title: 'Math.acos(0) Equals PI/2',
    description: `## Math.acos(x)\n\n\`Math.acos(0)\` returns \`Math.PI / 2\` (approximately 1.5708 radians).\n\n**Challenge:** Verify that \`Math.acos(0)\` equals π/2.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'acos',
    initialCode: `// Use Math.acos() with input 0\nconst result = Math.acos(0)\n`,
    solution: `const result = Math.acos(0) // Math.PI / 2\n`,
    tests: [
      { description: 'Math.acos(0) is approximately PI/2', assertion: 'expect(Math.abs(Math.acos(0) - Math.PI / 2) < 1e-10).toBeTruthy()' },
      { description: 'Math.acos(0) is greater than 1.5', assertion: 'expect(Math.acos(0) > 1.5).toBeTruthy()' },
      { description: 'Math.acos(0) is less than 1.6', assertion: 'expect(Math.acos(0) < 1.6).toBeTruthy()' },
      { description: 'typeof Math.acos(0) is number', assertion: "expect(typeof Math.acos(0)).toBe('number')" },
      { description: 'Math.acos(0) is finite', assertion: 'expect(Number.isFinite(Math.acos(0))).toBeTruthy()' },
    ],
    hints: ['cos(π/2) = 0, so acos(0) = π/2', 'Math.PI / 2 ≈ 1.5708'],
    tags: ['Math', 'acos', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse cosine — result in radians
Math.acos(1)   // → 0
Math.acos(0)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.acos() to find the angle (in radians) whose cosine equals a given value.',
        es: 'Usa Math.acos() para encontrar el ángulo (en radianes) cuyo coseno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-acos-3',
    title: 'Math.acos(-1) Equals PI',
    description: `## Math.acos(x)\n\n\`Math.acos(-1)\` returns \`Math.PI\` (approximately 3.1416 radians).\n\n**Challenge:** Verify that \`Math.acos(-1)\` equals π.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'acos',
    initialCode: `// Use Math.acos() with input -1\nconst result = Math.acos(-1)\n`,
    solution: `const result = Math.acos(-1) // Math.PI\n`,
    tests: [
      { description: 'Math.acos(-1) is approximately PI', assertion: 'expect(Math.abs(Math.acos(-1) - Math.PI) < 1e-10).toBeTruthy()' },
      { description: 'Math.acos(-1) is greater than 3.14', assertion: 'expect(Math.acos(-1) > 3.14).toBeTruthy()' },
      { description: 'Math.acos(-1) is less than 3.15', assertion: 'expect(Math.acos(-1) < 3.15).toBeTruthy()' },
      { description: 'typeof Math.acos(-1) is number', assertion: "expect(typeof Math.acos(-1)).toBe('number')" },
      { description: 'Math.acos(-1) is finite', assertion: 'expect(Number.isFinite(Math.acos(-1))).toBeTruthy()' },
    ],
    hints: ['cos(π) = -1, so acos(-1) = π', 'This is a common way to get π in JavaScript'],
    tags: ['Math', 'acos', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse cosine — result in radians
Math.acos(1)   // → 0
Math.acos(0)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.acos() to find the angle (in radians) whose cosine equals a given value.',
        es: 'Usa Math.acos() para encontrar el ángulo (en radianes) cuyo coseno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-acos-4',
    title: 'Math.acos(0.5) ≈ 1.047 Radians',
    description: `## Math.acos(x)\n\n\`Math.acos(0.5)\` returns approximately \`1.0472\` radians (60°).\n\n**Challenge:** Compute and verify \`Math.acos(0.5)\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'acos',
    initialCode: `// Use Math.acos() with input 0.5\nconst result = Math.acos(0.5)\n`,
    solution: `const result = Math.acos(0.5) // ~1.0472 (60 degrees in radians)\n`,
    tests: [
      { description: 'Math.acos(0.5) is approximately 1.0472', assertion: 'expect(Math.abs(Math.acos(0.5) - 1.0471975511965979) < 1e-10).toBeTruthy()' },
      { description: 'Math.acos(0.5) is greater than 1', assertion: 'expect(Math.acos(0.5) > 1).toBeTruthy()' },
      { description: 'Math.acos(0.5) is less than 1.1', assertion: 'expect(Math.acos(0.5) < 1.1).toBeTruthy()' },
      { description: 'typeof Math.acos(0.5) is number', assertion: "expect(typeof Math.acos(0.5)).toBe('number')" },
      { description: 'Math.acos(0.5) is finite', assertion: 'expect(Number.isFinite(Math.acos(0.5))).toBeTruthy()' },
    ],
    hints: ['cos(60°) = 0.5, so acos(0.5) = π/3 ≈ 1.0472', 'Convert to degrees by multiplying by 180/Math.PI'],
    tags: ['Math', 'acos', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Inverse cosine — result in radians
Math.acos(1)   // → 0
Math.acos(0)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.acos() to find the angle (in radians) whose cosine equals a given value.',
        es: 'Usa Math.acos() para encontrar el ángulo (en radianes) cuyo coseno es un valor dado.',
      },
    },
  },
  {
    slug: 'math-acos-5',
    title: 'Math.acos() Out of Domain Returns NaN',
    description: `## Math.acos(x)\n\n\`Math.acos()\` is only defined for inputs in [-1, 1]. Values outside this range return \`NaN\`.\n\n**Challenge:** Verify that \`Math.acos(2)\` returns \`NaN\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'acos',
    initialCode: `// Use Math.acos() with an out-of-range value\nconst result = Math.acos(2)\n`,
    solution: `const result = Math.acos(2) // NaN\n`,
    tests: [
      { description: 'Math.acos(2) is NaN', assertion: 'expect(isNaN(Math.acos(2))).toBeTruthy()' },
      { description: 'Math.acos(-2) is NaN', assertion: 'expect(isNaN(Math.acos(-2))).toBeTruthy()' },
      { description: 'typeof Math.acos(2) is number', assertion: "expect(typeof Math.acos(2)).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: 'expect(Math.acos(2) !== Math.acos(2)).toBeTruthy()' },
      { description: 'Math.acos(1.1) is NaN', assertion: 'expect(isNaN(Math.acos(1.1))).toBeTruthy()' },
    ],
    hints: ['The domain of acos is [-1, 1]', 'NaN is the only value where x !== x is true'],
    tags: ['Math', 'acos', 'static-method', 'trigonometry', 'NaN'],
    usageExample: {
      code: `// Inverse cosine — result in radians
Math.acos(1)   // → 0
Math.acos(0)   // → 1.5707... (π/2)`,
      explanation: {
        en: 'Use Math.acos() to find the angle (in radians) whose cosine equals a given value.',
        es: 'Usa Math.acos() para encontrar el ángulo (en radianes) cuyo coseno es un valor dado.',
      },
    },
  },
]
