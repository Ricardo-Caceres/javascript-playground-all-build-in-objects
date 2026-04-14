import type { Exercise } from '@/shared/types/exercises'

export const isSafeIntegerExercises: Exercise[] = [
  {
    slug: 'number-is-safe-integer-1',
    title: 'Number.isSafeInteger() — 42 is safe',
    description: `## Number.isSafeInteger()

\`Number.isSafeInteger(value)\` returns \`true\` if the value is an integer between \`-(2^53-1)\` and \`2^53-1\` inclusive.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isSafeInteger',
    initialCode: `function checkSafe(n: number): boolean {
  // Use Number.isSafeInteger(n)
}`,
    solution: `function checkSafe(n: number): boolean {
  return Number.isSafeInteger(n)
}`,
    tests: [
      { description: '42 is safe', assertion: 'expect(Number.isSafeInteger(42)).toBe(true)' },
      { description: '0 is safe', assertion: 'expect(Number.isSafeInteger(0)).toBe(true)' },
      { description: '-100 is safe', assertion: 'expect(Number.isSafeInteger(-100)).toBe(true)' },
      { description: '1 is safe', assertion: 'expect(Number.isSafeInteger(1)).toBe(true)' },
      { description: '1000000 is safe', assertion: 'expect(Number.isSafeInteger(1000000)).toBe(true)' },
    ],
    hints: ['Normal integers well within JavaScript\'s range are all safe.'],
    tags: ['Number', 'isSafeInteger', 'static-method', 'beginner'],
  },
  {
    slug: 'number-is-safe-integer-2',
    title: 'Number.isSafeInteger() — MAX_SAFE_INTEGER is safe',
    description: `## isSafeInteger at MAX_SAFE_INTEGER`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isSafeInteger',
    initialCode: `const result = Number.isSafeInteger(Number.MAX_SAFE_INTEGER)`,
    solution: `const result = Number.isSafeInteger(Number.MAX_SAFE_INTEGER)`,
    tests: [
      { description: 'MAX_SAFE_INTEGER is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
      { description: 'MIN_SAFE_INTEGER is safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)' },
      { description: 'MAX_SAFE_INTEGER - 1 is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1)).toBe(true)' },
      { description: 'MIN_SAFE_INTEGER + 1 is safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1)).toBe(true)' },
      { description: '9007199254740991 is safe', assertion: 'expect(Number.isSafeInteger(9007199254740991)).toBe(true)' },
    ],
    hints: ['`MAX_SAFE_INTEGER` is exactly at the safe boundary.'],
    tags: ['Number', 'isSafeInteger', 'MAX_SAFE_INTEGER', 'beginner'],
  },
  {
    slug: 'number-is-safe-integer-3',
    title: 'Number.isSafeInteger() — MAX_SAFE_INTEGER + 1 is not safe',
    description: `## isSafeInteger Beyond the Boundary`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'isSafeInteger',
    initialCode: `const result = Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)`,
    solution: `const result = Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)`,
    tests: [
      { description: 'MAX_SAFE_INTEGER + 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)' },
      { description: 'MIN_SAFE_INTEGER - 1 is not safe', assertion: 'expect(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false)' },
      { description: '9007199254740992 is not safe', assertion: 'expect(Number.isSafeInteger(9007199254740992)).toBe(false)' },
      { description: 'Infinity is not safe', assertion: 'expect(Number.isSafeInteger(Infinity)).toBe(false)' },
      { description: 'MAX_SAFE_INTEGER is safe', assertion: 'expect(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)' },
    ],
    hints: ['One step beyond `MAX_SAFE_INTEGER` is no longer safe.'],
    tags: ['Number', 'isSafeInteger', 'MAX_SAFE_INTEGER', 'intermediate'],
  },
  {
    slug: 'number-is-safe-integer-4',
    title: 'Number.isSafeInteger() — 3.0 is a safe integer',
    description: `## isSafeInteger — 3.0

\`3.0 === 3\` in JavaScript, so \`Number.isSafeInteger(3.0)\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isSafeInteger',
    initialCode: `const result = Number.isSafeInteger(3.0)`,
    solution: `const result = Number.isSafeInteger(3.0)`,
    tests: [
      { description: '3.0 is safe integer', assertion: 'expect(Number.isSafeInteger(3.0)).toBe(true)' },
      { description: '0.0 is safe integer', assertion: 'expect(Number.isSafeInteger(0.0)).toBe(true)' },
      { description: '-5.0 is safe integer', assertion: 'expect(Number.isSafeInteger(-5.0)).toBe(true)' },
      { description: '100.0 is safe integer', assertion: 'expect(Number.isSafeInteger(100.0)).toBe(true)' },
      { description: '3.0 === 3', assertion: 'expect(3.0 === 3).toBe(true)' },
    ],
    hints: ['`3.0` has no fractional part and equals `3`, so it is a safe integer.'],
    tags: ['Number', 'isSafeInteger', 'float', 'beginner'],
  },
  {
    slug: 'number-is-safe-integer-5',
    title: 'Number.isSafeInteger() — 3.1 is not a safe integer',
    description: `## isSafeInteger — Fractional Numbers`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isSafeInteger',
    initialCode: `const result = Number.isSafeInteger(3.1)`,
    solution: `const result = Number.isSafeInteger(3.1)`,
    tests: [
      { description: '3.1 is not safe integer', assertion: 'expect(Number.isSafeInteger(3.1)).toBe(false)' },
      { description: '2.5 is not safe integer', assertion: 'expect(Number.isSafeInteger(2.5)).toBe(false)' },
      { description: '-1.5 is not safe integer', assertion: 'expect(Number.isSafeInteger(-1.5)).toBe(false)' },
      { description: 'NaN is not safe integer', assertion: 'expect(Number.isSafeInteger(NaN)).toBe(false)' },
      { description: 'Infinity is not safe integer', assertion: 'expect(Number.isSafeInteger(Infinity)).toBe(false)' },
    ],
    hints: ['`isSafeInteger` requires an exact integer value — no fractional parts allowed.'],
    tags: ['Number', 'isSafeInteger', 'float', 'beginner'],
  },
]
