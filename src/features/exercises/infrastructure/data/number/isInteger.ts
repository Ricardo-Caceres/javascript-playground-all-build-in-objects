import type { Exercise } from '@/shared/types/exercises'

export const isIntegerExercises: Exercise[] = [
  {
    slug: 'number-is-integer-1',
    title: 'Number.isInteger() — integer returns true',
    description: `## Number.isInteger()

\`Number.isInteger(value)\` returns \`true\` if the value is a finite integer.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isInteger',
    initialCode: `function checkInt(n: number): boolean {
  // Use Number.isInteger(n)
}`,
    solution: `function checkInt(n: number): boolean {
  return Number.isInteger(n)
}`,
    tests: [
      { description: '4 is integer', assertion: 'expect(Number.isInteger(4)).toBe(true)' },
      { description: '0 is integer', assertion: 'expect(Number.isInteger(0)).toBe(true)' },
      { description: '-5 is integer', assertion: 'expect(Number.isInteger(-5)).toBe(true)' },
      { description: '1000000 is integer', assertion: 'expect(Number.isInteger(1000000)).toBe(true)' },
      { description: 'MAX_SAFE_INTEGER is integer', assertion: 'expect(Number.isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
    ],
    hints: ['Integers have no fractional part.'],
    tags: ['Number', 'isInteger', 'static-method', 'beginner'],
    usageExample: {
      code: `// Check if a value is an integer
Number.isInteger(42)    // → true
Number.isInteger(42.5)  // → false
Number.isInteger('42')  // → false`,
      explanation: {
        en: 'Use Number.isInteger() to verify that a value is a whole number, without type coercion.',
        es: 'Usa Number.isInteger() para verificar que un valor es un número entero, sin coerción de tipos.',
      },
    },
  },
  {
    slug: 'number-is-integer-2',
    title: 'Number.isInteger() — 4.0 is an integer',
    description: `## Number.isInteger() — 4.0

\`4.0\` and \`4\` are the same in JavaScript — both are integers.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isInteger',
    initialCode: `const result = Number.isInteger(4.0)`,
    solution: `const result = Number.isInteger(4.0)`,
    tests: [
      { description: '4.0 is integer', assertion: 'expect(Number.isInteger(4.0)).toBe(true)' },
      { description: '4.0 === 4', assertion: 'expect(4.0 === 4).toBe(true)' },
      { description: '0.0 is integer', assertion: 'expect(Number.isInteger(0.0)).toBe(true)' },
      { description: '100.0 is integer', assertion: 'expect(Number.isInteger(100.0)).toBe(true)' },
      { description: '-3.0 is integer', assertion: 'expect(Number.isInteger(-3.0)).toBe(true)' },
    ],
    hints: ['In JavaScript, `4.0 === 4` — they are the same value.'],
    tags: ['Number', 'isInteger', 'float', 'beginner'],
    usageExample: {
      code: `// Check if a value is an integer
Number.isInteger(42)    // → true
Number.isInteger(42.5)  // → false
Number.isInteger('42')  // → false`,
      explanation: {
        en: 'Use Number.isInteger() to verify that a value is a whole number, without type coercion.',
        es: 'Usa Number.isInteger() para verificar que un valor es un número entero, sin coerción de tipos.',
      },
    },
  },
  {
    slug: 'number-is-integer-3',
    title: 'Number.isInteger() — 4.5 is not an integer',
    description: `## Number.isInteger() — Non-Integer Float`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isInteger',
    initialCode: `const result = Number.isInteger(4.5)`,
    solution: `const result = Number.isInteger(4.5)`,
    tests: [
      { description: '4.5 is not integer', assertion: 'expect(Number.isInteger(4.5)).toBe(false)' },
      { description: '3.14 is not integer', assertion: 'expect(Number.isInteger(3.14)).toBe(false)' },
      { description: '-1.1 is not integer', assertion: 'expect(Number.isInteger(-1.1)).toBe(false)' },
      { description: '0.001 is not integer', assertion: 'expect(Number.isInteger(0.001)).toBe(false)' },
      { description: '1.9999 is not integer', assertion: 'expect(Number.isInteger(1.9999)).toBe(false)' },
    ],
    hints: ['Any number with a non-zero fractional part is not an integer.'],
    tags: ['Number', 'isInteger', 'float', 'beginner'],
    usageExample: {
      code: `// Check if a value is an integer
Number.isInteger(42)    // → true
Number.isInteger(42.5)  // → false
Number.isInteger('42')  // → false`,
      explanation: {
        en: 'Use Number.isInteger() to verify that a value is a whole number, without type coercion.',
        es: 'Usa Number.isInteger() para verificar que un valor es un número entero, sin coerción de tipos.',
      },
    },
  },
  {
    slug: 'number-is-integer-4',
    title: 'Number.isInteger() — Infinity is not an integer',
    description: `## Number.isInteger() — Infinity

\`Infinity\` is not an integer.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isInteger',
    initialCode: `const result = Number.isInteger(Infinity)`,
    solution: `const result = Number.isInteger(Infinity)`,
    tests: [
      { description: 'Infinity is not integer', assertion: 'expect(Number.isInteger(Infinity)).toBe(false)' },
      { description: '-Infinity is not integer', assertion: 'expect(Number.isInteger(-Infinity)).toBe(false)' },
      { description: 'NaN is not integer', assertion: 'expect(Number.isInteger(NaN)).toBe(false)' },
      { description: 'large finite integer is integer', assertion: 'expect(Number.isInteger(1e15)).toBe(true)' },
      { description: '1e300 is integer', assertion: 'expect(Number.isInteger(1e300)).toBe(true)' },
    ],
    hints: ['`isInteger` requires the value to be both finite and have no fractional part.'],
    tags: ['Number', 'isInteger', 'Infinity', 'beginner'],
    usageExample: {
      code: `// Check if a value is an integer
Number.isInteger(42)    // → true
Number.isInteger(42.5)  // → false
Number.isInteger('42')  // → false`,
      explanation: {
        en: 'Use Number.isInteger() to verify that a value is a whole number, without type coercion.',
        es: 'Usa Number.isInteger() para verificar que un valor es un número entero, sin coerción de tipos.',
      },
    },
  },
  {
    slug: 'number-is-integer-5',
    title: "Number.isInteger() — '4' (string) is not an integer",
    description: `## Number.isInteger() — No Coercion

Unlike some JS checks, \`Number.isInteger()\` does not coerce strings.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isInteger',
    initialCode: `const result = Number.isInteger('4')`,
    solution: `const result = Number.isInteger('4')`,
    tests: [
      { description: "'4' is not integer", assertion: "expect(Number.isInteger('4')).toBe(false)" },
      { description: 'null is not integer', assertion: 'expect(Number.isInteger(null)).toBe(false)' },
      { description: 'true is not integer', assertion: 'expect(Number.isInteger(true)).toBe(false)' },
      { description: 'undefined is not integer', assertion: 'expect(Number.isInteger(undefined)).toBe(false)' },
      { description: '4 (number) is integer', assertion: 'expect(Number.isInteger(4)).toBe(true)' },
    ],
    hints: ['`Number.isInteger` only accepts actual number types — no string coercion.'],
    tags: ['Number', 'isInteger', 'coercion', 'beginner'],
    usageExample: {
      code: `// Check if a value is an integer
Number.isInteger(42)    // → true
Number.isInteger(42.5)  // → false
Number.isInteger('42')  // → false`,
      explanation: {
        en: 'Use Number.isInteger() to verify that a value is a whole number, without type coercion.',
        es: 'Usa Number.isInteger() para verificar que un valor es un número entero, sin coerción de tipos.',
      },
    },
  },
]
