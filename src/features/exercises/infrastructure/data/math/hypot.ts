import type { Exercise } from '@/shared/types/exercises'

export const mathHypotExercises: Exercise[] = [
  {
    slug: 'math-hypot-1',
    title: 'Math.hypot() — 3-4-5 Triangle',
    description: `## Math.hypot()\n\nReturns the square root of the sum of squares of its arguments.\n\n**Challenge:** Use \`Math.hypot(3, 4)\` to compute the hypotenuse of a 3-4-5 right triangle.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'hypot',
    initialCode: `// Use Math.hypot()\n`,
    solution: `Math.hypot(3, 4)`,
    tests: [
      { description: 'result returns 5', assertion: "expect(result).toBe(5)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 5', assertion: "expect(result === 5).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'difference from 5 is less than 0.001', assertion: "expect(Math.abs(result - 5) < 0.001).toBeTruthy()" },
    ],
    hints: ['The 3-4-5 Pythagorean triple: sqrt(9 + 16) = sqrt(25) = 5'],
    tags: ['Math', 'hypot', 'static-method'],
    usageExample: {
      code: `// Euclidean distance / hypotenuse
Math.hypot(3, 4)   // → 5
Math.hypot(5, 12)  // → 13`,
      explanation: {
        en: 'Use Math.hypot() to calculate the hypotenuse of a right triangle or Euclidean distance between points.',
        es: 'Usa Math.hypot() para calcular la hipotenusa de un triángulo rectángulo o la distancia euclidiana entre puntos.',
      },
    },
  },
  {
    slug: 'math-hypot-2',
    title: 'Math.hypot() — 5-12-13 Triangle',
    description: `## Math.hypot()\n\nReturns the square root of the sum of squares of its arguments.\n\n**Challenge:** Use \`Math.hypot(5, 12)\` to compute the hypotenuse of a 5-12-13 right triangle.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'hypot',
    initialCode: `// Use Math.hypot()\n`,
    solution: `Math.hypot(5, 12)`,
    tests: [
      { description: 'result returns 13', assertion: "expect(result).toBe(13)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 13', assertion: "expect(result === 13).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'difference from 13 is less than 0.001', assertion: "expect(Math.abs(result - 13) < 0.001).toBeTruthy()" },
    ],
    hints: ['The 5-12-13 Pythagorean triple: sqrt(25 + 144) = sqrt(169) = 13'],
    tags: ['Math', 'hypot', 'static-method'],
    usageExample: {
      code: `// Euclidean distance / hypotenuse
Math.hypot(3, 4)   // → 5
Math.hypot(5, 12)  // → 13`,
      explanation: {
        en: 'Use Math.hypot() to calculate the hypotenuse of a right triangle or Euclidean distance between points.',
        es: 'Usa Math.hypot() para calcular la hipotenusa de un triángulo rectángulo o la distancia euclidiana entre puntos.',
      },
    },
  },
  {
    slug: 'math-hypot-3',
    title: 'Math.hypot() — Single Zero',
    description: `## Math.hypot()\n\nReturns the square root of the sum of squares of its arguments.\n\n**Challenge:** Verify that \`Math.hypot(0)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'hypot',
    initialCode: `// Use Math.hypot()\n`,
    solution: `Math.hypot(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['sqrt(0^2) = sqrt(0) = 0'],
    tags: ['Math', 'hypot', 'static-method'],
    usageExample: {
      code: `// Euclidean distance / hypotenuse
Math.hypot(3, 4)   // → 5
Math.hypot(5, 12)  // → 13`,
      explanation: {
        en: 'Use Math.hypot() to calculate the hypotenuse of a right triangle or Euclidean distance between points.',
        es: 'Usa Math.hypot() para calcular la hipotenusa de un triángulo rectángulo o la distancia euclidiana entre puntos.',
      },
    },
  },
  {
    slug: 'math-hypot-4',
    title: 'Math.hypot() — Unit Diagonal',
    description: `## Math.hypot()\n\nReturns the square root of the sum of squares of its arguments.\n\n**Challenge:** Compute the diagonal of a unit square using \`Math.hypot(1, 1)\`, which should equal √2.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'hypot',
    initialCode: `// Use Math.hypot()\n`,
    solution: `Math.hypot(1, 1)`,
    tests: [
      { description: 'result ≈ Math.SQRT2', assertion: "expect(Math.abs(result - Math.SQRT2) < 1e-10).toBeTruthy()" },
      { description: 'result > 1.414', assertion: "expect(result > 1.414).toBeTruthy()" },
      { description: 'result < 1.415', assertion: "expect(result < 1.415).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
    ],
    hints: ['sqrt(1^2 + 1^2) = sqrt(2) = Math.SQRT2 ≈ 1.41421356...'],
    tags: ['Math', 'hypot', 'static-method'],
    usageExample: {
      code: `// Euclidean distance / hypotenuse
Math.hypot(3, 4)   // → 5
Math.hypot(5, 12)  // → 13`,
      explanation: {
        en: 'Use Math.hypot() to calculate the hypotenuse of a right triangle or Euclidean distance between points.',
        es: 'Usa Math.hypot() para calcular la hipotenusa de un triángulo rectángulo o la distancia euclidiana entre puntos.',
      },
    },
  },
  {
    slug: 'math-hypot-5',
    title: 'Math.hypot() — No Arguments',
    description: `## Math.hypot()\n\nReturns the square root of the sum of squares of its arguments.\n\n**Challenge:** Confirm that \`Math.hypot()\` with no arguments returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'hypot',
    initialCode: `// Use Math.hypot()\n`,
    solution: `Math.hypot()`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['sqrt(sum of empty set) = sqrt(0) = 0 by convention'],
    tags: ['Math', 'hypot', 'static-method'],
    usageExample: {
      code: `// Euclidean distance / hypotenuse
Math.hypot(3, 4)   // → 5
Math.hypot(5, 12)  // → 13`,
      explanation: {
        en: 'Use Math.hypot() to calculate the hypotenuse of a right triangle or Euclidean distance between points.',
        es: 'Usa Math.hypot() para calcular la hipotenusa de un triángulo rectángulo o la distancia euclidiana entre puntos.',
      },
    },
  },
]
