import type { Exercise } from '@/shared/types/exercises'

export const mathAtan2Exercises: Exercise[] = [
  {
    slug: 'math-atan2-1',
    title: 'Math.atan2(0, 1) Equals Zero',
    description: `## Math.atan2(y, x)\n\nReturns the angle (in radians) between the positive x-axis and the point (x, y). \`Math.atan2(0, 1)\` returns \`0\`.\n\n**Challenge:** Use \`Math.atan2()\` and verify its result for the point (1, 0).`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'atan2',
    initialCode: `// Use Math.atan2(y, x) — note argument order is y first\nconst result = Math.atan2(0, 1)\n`,
    solution: `const result = Math.atan2(0, 1) // 0\n`,
    tests: [
      { description: 'Math.atan2(0, 1) returns 0', assertion: 'expect(Math.atan2(0, 1)).toBe(0)' },
      { description: 'typeof Math.atan2(0, 1) is number', assertion: "expect(typeof Math.atan2(0, 1)).toBe('number')" },
      { description: 'Math.atan2(0, 1) is non-negative', assertion: 'expect(Math.atan2(0, 1) >= 0).toBeTruthy()' },
      { description: 'Math.atan2(0, 1) is finite', assertion: 'expect(Number.isFinite(Math.atan2(0, 1))).toBeTruthy()' },
      { description: 'Math.abs(Math.atan2(0, 1)) is less than 0.001', assertion: 'expect(Math.abs(Math.atan2(0, 1)) < 0.001).toBeTruthy()' },
    ],
    hints: ['Note: argument order is (y, x), not (x, y)', 'The point (1, 0) is on the positive x-axis, so the angle is 0'],
    tags: ['Math', 'atan2', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Angle from positive x-axis to point (x, y)
Math.atan2(1, 1)   // → 0.7853... (π/4)
Math.atan2(0, 1)   // → 0`,
      explanation: {
        en: 'Use Math.atan2(y, x) to compute the angle of a point from the origin, correctly handling all quadrants.',
        es: 'Usa Math.atan2(y, x) para calcular el ángulo de un punto desde el origen, manejando todos los cuadrantes correctamente.',
      },
    },
  },
  {
    slug: 'math-atan2-2',
    title: 'Math.atan2(1, 0) Equals PI/2',
    description: `## Math.atan2(y, x)\n\n\`Math.atan2(1, 0)\` returns \`Math.PI / 2\` (90°, pointing up the y-axis).\n\n**Challenge:** Verify that \`Math.atan2(1, 0)\` equals π/2.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan2',
    initialCode: `// Use Math.atan2(y, x) for the point (0, 1)\nconst result = Math.atan2(1, 0)\n`,
    solution: `const result = Math.atan2(1, 0) // Math.PI / 2\n`,
    tests: [
      { description: 'Math.atan2(1, 0) is approximately PI/2', assertion: 'expect(Math.abs(Math.atan2(1, 0) - Math.PI / 2) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan2(1, 0) is greater than 1.57', assertion: 'expect(Math.atan2(1, 0) > 1.57).toBeTruthy()' },
      { description: 'Math.atan2(1, 0) is less than 1.58', assertion: 'expect(Math.atan2(1, 0) < 1.58).toBeTruthy()' },
      { description: 'typeof Math.atan2(1, 0) is number', assertion: "expect(typeof Math.atan2(1, 0)).toBe('number')" },
      { description: 'Math.atan2(1, 0) is finite', assertion: 'expect(Number.isFinite(Math.atan2(1, 0))).toBeTruthy()' },
    ],
    hints: ['The point (0, 1) is on the positive y-axis, giving angle 90° = π/2', 'atan2 handles the division-by-zero case that plain atan cannot'],
    tags: ['Math', 'atan2', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Angle from positive x-axis to point (x, y)
Math.atan2(1, 1)   // → 0.7853... (π/4)
Math.atan2(0, 1)   // → 0`,
      explanation: {
        en: 'Use Math.atan2(y, x) to compute the angle of a point from the origin, correctly handling all quadrants.',
        es: 'Usa Math.atan2(y, x) para calcular el ángulo de un punto desde el origen, manejando todos los cuadrantes correctamente.',
      },
    },
  },
  {
    slug: 'math-atan2-3',
    title: 'Math.atan2(1, 1) Equals PI/4',
    description: `## Math.atan2(y, x)\n\n\`Math.atan2(1, 1)\` returns \`Math.PI / 4\` (45°, the first-quadrant diagonal).\n\n**Challenge:** Verify that \`Math.atan2(1, 1)\` equals π/4.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan2',
    initialCode: `// Use Math.atan2(y, x) for the point (1, 1)\nconst result = Math.atan2(1, 1)\n`,
    solution: `const result = Math.atan2(1, 1) // Math.PI / 4\n`,
    tests: [
      { description: 'Math.atan2(1, 1) is approximately PI/4', assertion: 'expect(Math.abs(Math.atan2(1, 1) - Math.PI / 4) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan2(1, 1) is greater than 0.78', assertion: 'expect(Math.atan2(1, 1) > 0.78).toBeTruthy()' },
      { description: 'Math.atan2(1, 1) is less than 0.79', assertion: 'expect(Math.atan2(1, 1) < 0.79).toBeTruthy()' },
      { description: 'typeof Math.atan2(1, 1) is number', assertion: "expect(typeof Math.atan2(1, 1)).toBe('number')" },
      { description: 'Math.atan2(1, 1) is finite', assertion: 'expect(Number.isFinite(Math.atan2(1, 1))).toBeTruthy()' },
    ],
    hints: ['The point (1, 1) is at 45° from the x-axis', 'π/4 ≈ 0.7854'],
    tags: ['Math', 'atan2', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Angle from positive x-axis to point (x, y)
Math.atan2(1, 1)   // → 0.7853... (π/4)
Math.atan2(0, 1)   // → 0`,
      explanation: {
        en: 'Use Math.atan2(y, x) to compute the angle of a point from the origin, correctly handling all quadrants.',
        es: 'Usa Math.atan2(y, x) para calcular el ángulo de un punto desde el origen, manejando todos los cuadrantes correctamente.',
      },
    },
  },
  {
    slug: 'math-atan2-4',
    title: 'Math.atan2(0, -1) Equals PI',
    description: `## Math.atan2(y, x)\n\n\`Math.atan2(0, -1)\` returns \`Math.PI\` (180°, pointing in the negative x direction).\n\n**Challenge:** Verify that \`Math.atan2(0, -1)\` equals π.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan2',
    initialCode: `// Use Math.atan2(y, x) for the negative x-axis\nconst result = Math.atan2(0, -1)\n`,
    solution: `const result = Math.atan2(0, -1) // Math.PI\n`,
    tests: [
      { description: 'Math.atan2(0, -1) is approximately PI', assertion: 'expect(Math.abs(Math.atan2(0, -1) - Math.PI) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan2(0, -1) is greater than 3.14', assertion: 'expect(Math.atan2(0, -1) > 3.14).toBeTruthy()' },
      { description: 'Math.atan2(0, -1) is less than 3.15', assertion: 'expect(Math.atan2(0, -1) < 3.15).toBeTruthy()' },
      { description: 'typeof Math.atan2(0, -1) is number', assertion: "expect(typeof Math.atan2(0, -1)).toBe('number')" },
      { description: 'Math.atan2(0, -1) is finite', assertion: 'expect(Number.isFinite(Math.atan2(0, -1))).toBeTruthy()' },
    ],
    hints: ['The point (-1, 0) is on the negative x-axis, giving angle 180° = π', 'atan2 correctly handles all four quadrants'],
    tags: ['Math', 'atan2', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Angle from positive x-axis to point (x, y)
Math.atan2(1, 1)   // → 0.7853... (π/4)
Math.atan2(0, 1)   // → 0`,
      explanation: {
        en: 'Use Math.atan2(y, x) to compute the angle of a point from the origin, correctly handling all quadrants.',
        es: 'Usa Math.atan2(y, x) para calcular el ángulo de un punto desde el origen, manejando todos los cuadrantes correctamente.',
      },
    },
  },
  {
    slug: 'math-atan2-5',
    title: 'Math.atan2(-1, 0) Equals -PI/2',
    description: `## Math.atan2(y, x)\n\n\`Math.atan2(-1, 0)\` returns \`-Math.PI / 2\` (-90°, pointing down the y-axis).\n\n**Challenge:** Verify that \`Math.atan2(-1, 0)\` equals -π/2.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'atan2',
    initialCode: `// Use Math.atan2(y, x) for the negative y-axis\nconst result = Math.atan2(-1, 0)\n`,
    solution: `const result = Math.atan2(-1, 0) // -Math.PI / 2\n`,
    tests: [
      { description: 'Math.atan2(-1, 0) is approximately -PI/2', assertion: 'expect(Math.abs(Math.atan2(-1, 0) - (-Math.PI / 2)) < 1e-10).toBeTruthy()' },
      { description: 'Math.atan2(-1, 0) is less than -1.57', assertion: 'expect(Math.atan2(-1, 0) < -1.57).toBeTruthy()' },
      { description: 'Math.atan2(-1, 0) is greater than -1.58', assertion: 'expect(Math.atan2(-1, 0) > -1.58).toBeTruthy()' },
      { description: 'typeof Math.atan2(-1, 0) is number', assertion: "expect(typeof Math.atan2(-1, 0)).toBe('number')" },
      { description: 'Math.atan2(-1, 0) is finite', assertion: 'expect(Number.isFinite(Math.atan2(-1, 0))).toBeTruthy()' },
    ],
    hints: ['The point (0, -1) is on the negative y-axis, giving -90° = -π/2', 'atan2 range is (-π, π]'],
    tags: ['Math', 'atan2', 'static-method', 'trigonometry'],
    usageExample: {
      code: `// Angle from positive x-axis to point (x, y)
Math.atan2(1, 1)   // → 0.7853... (π/4)
Math.atan2(0, 1)   // → 0`,
      explanation: {
        en: 'Use Math.atan2(y, x) to compute the angle of a point from the origin, correctly handling all quadrants.',
        es: 'Usa Math.atan2(y, x) para calcular el ángulo de un punto desde el origen, manejando todos los cuadrantes correctamente.',
      },
    },
  },
]
