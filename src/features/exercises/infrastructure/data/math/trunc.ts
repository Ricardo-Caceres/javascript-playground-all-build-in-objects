import type { Exercise } from '@/shared/types/exercises'

export const mathTruncExercises: Exercise[] = [
  {
    slug: 'math-trunc-1',
    title: 'Math.trunc() — trunc(4.9) = 4',
    description: `## Math.trunc()\n\nReturns the integer part of a number by removing any fractional digits.\n\n**Challenge:** Verify that \`Math.trunc(4.9)\` returns 4.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'trunc',
    initialCode: `// Use Math.trunc()\n`,
    solution: `Math.trunc(4.9)`,
    tests: [
      { description: 'result returns 4', assertion: "expect(result).toBe(4)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 4', assertion: "expect(result === 4).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is less than 5', assertion: "expect(result < 5).toBeTruthy()" },
    ],
    hints: ['Math.trunc removes the fractional part — it truncates toward zero'],
    tags: ['Math', 'trunc', 'static-method'],
    usageExample: {
      code: `// Remove fractional part (truncates towards zero)
Math.trunc(4.9)    // → 4
Math.trunc(-4.9)   // → -4`,
      explanation: {
        en: 'Use Math.trunc() to drop the decimal part of a number, always truncating towards zero unlike Math.floor().',
        es: 'Usa Math.trunc() para eliminar la parte decimal de un número, truncando siempre hacia cero a diferencia de Math.floor().',
      },
    },
  },
  {
    slug: 'math-trunc-2',
    title: 'Math.trunc() — trunc(-4.9) = -4',
    description: `## Math.trunc()\n\nReturns the integer part of a number by removing any fractional digits.\n\n**Challenge:** Verify that \`Math.trunc(-4.9)\` returns -4, not -5 (truncates toward zero, unlike Math.floor).`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'trunc',
    initialCode: `// Use Math.trunc()\n`,
    solution: `Math.trunc(-4.9)`,
    tests: [
      { description: 'result returns -4', assertion: "expect(result).toBe(-4)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === -4', assertion: "expect(result === -4).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is greater than -5', assertion: "expect(result > -5).toBeTruthy()" },
    ],
    hints: ['Math.trunc truncates toward zero: -4.9 → -4, not -5. Compare with Math.floor(-4.9) = -5'],
    tags: ['Math', 'trunc', 'static-method'],
    usageExample: {
      code: `// Remove fractional part (truncates towards zero)
Math.trunc(4.9)    // → 4
Math.trunc(-4.9)   // → -4`,
      explanation: {
        en: 'Use Math.trunc() to drop the decimal part of a number, always truncating towards zero unlike Math.floor().',
        es: 'Usa Math.trunc() para eliminar la parte decimal de un número, truncando siempre hacia cero a diferencia de Math.floor().',
      },
    },
  },
  {
    slug: 'math-trunc-3',
    title: 'Math.trunc() — trunc(0.1) = 0',
    description: `## Math.trunc()\n\nReturns the integer part of a number by removing any fractional digits.\n\n**Challenge:** Verify that \`Math.trunc(0.1)\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Math',
    method: 'trunc',
    initialCode: `// Use Math.trunc()\n`,
    solution: `Math.trunc(0.1)`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is less than 1', assertion: "expect(result < 1).toBeTruthy()" },
    ],
    hints: ['The integer part of 0.1 is 0 — the fractional part .1 is discarded'],
    tags: ['Math', 'trunc', 'static-method'],
    usageExample: {
      code: `// Remove fractional part (truncates towards zero)
Math.trunc(4.9)    // → 4
Math.trunc(-4.9)   // → -4`,
      explanation: {
        en: 'Use Math.trunc() to drop the decimal part of a number, always truncating towards zero unlike Math.floor().',
        es: 'Usa Math.trunc() para eliminar la parte decimal de un número, truncando siempre hacia cero a diferencia de Math.floor().',
      },
    },
  },
  {
    slug: 'math-trunc-4',
    title: 'Math.trunc() — trunc(-0.1) = -0',
    description: `## Math.trunc()\n\nReturns the integer part of a number by removing any fractional digits.\n\n**Challenge:** Explore that \`Math.trunc(-0.1)\` returns -0, distinguishable via \`Object.is\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'trunc',
    initialCode: `// Use Math.trunc()\n`,
    solution: `Math.trunc(-0.1)`,
    tests: [
      { description: 'Object.is(result, -0) is true', assertion: "expect(Object.is(result, -0)).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0 (== treats -0 as 0)', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is <= 0', assertion: "expect(result <= 0).toBeTruthy()" },
    ],
    hints: ['Truncating a negative fraction toward zero yields -0 in JavaScript'],
    tags: ['Math', 'trunc', 'static-method'],
    usageExample: {
      code: `// Remove fractional part (truncates towards zero)
Math.trunc(4.9)    // → 4
Math.trunc(-4.9)   // → -4`,
      explanation: {
        en: 'Use Math.trunc() to drop the decimal part of a number, always truncating towards zero unlike Math.floor().',
        es: 'Usa Math.trunc() para eliminar la parte decimal de un número, truncando siempre hacia cero a diferencia de Math.floor().',
      },
    },
  },
  {
    slug: 'math-trunc-5',
    title: 'Math.trunc() — trunc(NaN) = NaN',
    description: `## Math.trunc()\n\nReturns the integer part of a number by removing any fractional digits.\n\n**Challenge:** Observe that \`Math.trunc(NaN)\` returns NaN.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Math',
    method: 'trunc',
    initialCode: `// Use Math.trunc()\n`,
    solution: `Math.trunc(NaN)`,
    tests: [
      { description: 'result is NaN', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'result is a number type', assertion: "expect(typeof result).toBe('number')" },
      { description: 'NaN is not equal to itself', assertion: "expect(result !== result).toBeTruthy()" },
      { description: 'isNaN is true (second check)', assertion: "expect(isNaN(result)).toBeTruthy()" },
      { description: 'typeof is still number', assertion: "expect(typeof result).toBe('number')" },
    ],
    hints: ['NaN has no integer part; Math.trunc propagates NaN'],
    tags: ['Math', 'trunc', 'static-method'],
    usageExample: {
      code: `// Remove fractional part (truncates towards zero)
Math.trunc(4.9)    // → 4
Math.trunc(-4.9)   // → -4`,
      explanation: {
        en: 'Use Math.trunc() to drop the decimal part of a number, always truncating towards zero unlike Math.floor().',
        es: 'Usa Math.trunc() para eliminar la parte decimal de un número, truncando siempre hacia cero a diferencia de Math.floor().',
      },
    },
  },
]
