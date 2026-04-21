import type { Exercise } from '@/shared/types/exercises'

export const mathFroundExercises: Exercise[] = [
  {
    slug: 'math-fround-1',
    title: 'Math.fround() — Precision Loss',
    description: `## Math.fround()\n\nReturns the nearest 32-bit single precision float representation of a number.\n\n**Challenge:** Observe how \`Math.fround(1.337)\` differs from the original 64-bit float value.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'Math',
    method: 'fround',
    initialCode: `// Use Math.fround()\n`,
    solution: `Math.fround(1.337)`,
    tests: [
      { description: 'result returns 1.3370000123977661', assertion: "expect(result).toBe(1.3370000123977661)" },
      { description: 'result !== 1.337', assertion: "expect(result !== 1.337).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'there is a non-zero difference from 1.337', assertion: "expect(Math.abs(result - 1.337) > 0).toBeTruthy()" },
    ],
    hints: ['Math.fround converts to 32-bit float, losing precision compared to 64-bit'],
    tags: ['Math', 'fround', 'static-method'],
    usageExample: {
      code: `// Nearest 32-bit single-precision float
Math.fround(1.337)   // → 1.3370000124...
Math.fround(1.5)     // → 1.5`,
      explanation: {
        en: 'Use Math.fround() to convert a number to the nearest 32-bit float, useful when working with WebGL or typed arrays.',
        es: 'Usa Math.fround() para convertir un número al flotante de 32 bits más cercano, útil con WebGL o arreglos tipados.',
      },
    },
  },
  {
    slug: 'math-fround-2',
    title: 'Math.fround() — Zero',
    description: `## Math.fround()\n\nReturns the nearest 32-bit single precision float representation of a number.\n\n**Challenge:** Verify that \`Math.fround(0)\` equals 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'fround',
    initialCode: `// Use Math.fround()\n`,
    solution: `Math.fround(0)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'absolute value is less than 0.001', assertion: "expect(Math.abs(result) < 0.001).toBeTruthy()" },
    ],
    hints: ['Zero is represented exactly in all floating-point formats'],
    tags: ['Math', 'fround', 'static-method'],
    usageExample: {
      code: `// Nearest 32-bit single-precision float
Math.fround(1.337)   // → 1.3370000124...
Math.fround(1.5)     // → 1.5`,
      explanation: {
        en: 'Use Math.fround() to convert a number to the nearest 32-bit float, useful when working with WebGL or typed arrays.',
        es: 'Usa Math.fround() para convertir un número al flotante de 32 bits más cercano, útil con WebGL o arreglos tipados.',
      },
    },
  },
  {
    slug: 'math-fround-3',
    title: 'Math.fround() — One',
    description: `## Math.fround()\n\nReturns the nearest 32-bit single precision float representation of a number.\n\n**Challenge:** Verify that \`Math.fround(1)\` equals 1 exactly.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'fround',
    initialCode: `// Use Math.fround()\n`,
    solution: `Math.fround(1)`,
    tests: [
      { description: 'result returns 1', assertion: "expect(result).toBe(1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1', assertion: "expect(result === 1).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'difference from 1 is less than 0.001', assertion: "expect(Math.abs(result - 1) < 0.001).toBeTruthy()" },
    ],
    hints: ['Integers that fit in 32-bit float are represented exactly'],
    tags: ['Math', 'fround', 'static-method'],
    usageExample: {
      code: `// Nearest 32-bit single-precision float
Math.fround(1.337)   // → 1.3370000124...
Math.fround(1.5)     // → 1.5`,
      explanation: {
        en: 'Use Math.fround() to convert a number to the nearest 32-bit float, useful when working with WebGL or typed arrays.',
        es: 'Usa Math.fround() para convertir un número al flotante de 32 bits más cercano, útil con WebGL o arreglos tipados.',
      },
    },
  },
  {
    slug: 'math-fround-4',
    title: 'Math.fround() — Return Type',
    description: `## Math.fround()\n\nReturns the nearest 32-bit single precision float representation of a number.\n\n**Challenge:** Confirm that \`Math.fround()\` always returns a JavaScript \`number\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'fround',
    initialCode: `// Use Math.fround()\n`,
    solution: `typeof Math.fround(0)`,
    tests: [
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'typeof Math.fround(-1) is number', assertion: "expect(typeof Math.fround(-1)).toBe('number')" },
      { description: 'typeof result is number', assertion: "expect(typeof result).toBe('number')" },
    ],
    hints: ['Math.fround always returns a JavaScript number primitive'],
    tags: ['Math', 'fround', 'static-method'],
    usageExample: {
      code: `// Nearest 32-bit single-precision float
Math.fround(1.337)   // → 1.3370000124...
Math.fround(1.5)     // → 1.5`,
      explanation: {
        en: 'Use Math.fround() to convert a number to the nearest 32-bit float, useful when working with WebGL or typed arrays.',
        es: 'Usa Math.fround() para convertir un número al flotante de 32 bits más cercano, útil con WebGL o arreglos tipados.',
      },
    },
  },
  {
    slug: 'math-fround-5',
    title: 'Math.fround() — Exact in Float32',
    description: `## Math.fround()\n\nReturns the nearest 32-bit single precision float representation of a number.\n\n**Challenge:** Verify that \`Math.fround(1.5)\` is exactly 1.5 since 1.5 is representable in 32-bit float.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'fround',
    initialCode: `// Use Math.fround()\n`,
    solution: `Math.fround(1.5)`,
    tests: [
      { description: 'result returns 1.5', assertion: "expect(result).toBe(1.5)" },
      { description: 'result === 1.5', assertion: "expect(result === 1.5).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'difference from 1.5 is less than 1e-10', assertion: "expect(Math.abs(result - 1.5) < 1e-10).toBeTruthy()" },
    ],
    hints: ['1.5 = 1 + 1/2 is exactly representable in binary floating point'],
    tags: ['Math', 'fround', 'static-method'],
    usageExample: {
      code: `// Nearest 32-bit single-precision float
Math.fround(1.337)   // → 1.3370000124...
Math.fround(1.5)     // → 1.5`,
      explanation: {
        en: 'Use Math.fround() to convert a number to the nearest 32-bit float, useful when working with WebGL or typed arrays.',
        es: 'Usa Math.fround() para convertir un número al flotante de 32 bits más cercano, útil con WebGL o arreglos tipados.',
      },
    },
  },
]
