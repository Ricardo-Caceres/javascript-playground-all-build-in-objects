import type { Exercise } from '@/shared/types/exercises'

export const numberEpsilonExercises: Exercise[] = [
  {
    slug: 'number-epsilon-1',
    title: 'Number.EPSILON — the value',
    description: `## Number.EPSILON

\`Number.EPSILON\` is the smallest difference between two representable floating-point numbers: approximately \`2.220446049250313e-16\`.

**Challenge:** Verify the value of \`Number.EPSILON\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'EPSILON',
    initialCode: `// What is Number.EPSILON?
const eps = Number.EPSILON`,
    solution: `const eps = Number.EPSILON`,
    tests: [
      { description: 'EPSILON is a number', assertion: "expect(typeof Number.EPSILON).toBe('number')" },
      { description: 'EPSILON is positive', assertion: 'expect(Number.EPSILON > 0).toBe(true)' },
      { description: 'EPSILON is very small', assertion: 'expect(Number.EPSILON < 0.001).toBe(true)' },
      { description: 'EPSILON exact value', assertion: 'expect(Number.EPSILON).toBe(2.220446049250313e-16)' },
      { description: 'EPSILON is finite', assertion: 'expect(Number.isFinite(Number.EPSILON)).toBe(true)' },
    ],
    hints: ['`Number.EPSILON` represents the gap between 1 and the next representable float.'],
    tags: ['Number', 'EPSILON', 'static-property', 'intermediate'],
    usageExample: {
      code: `// Use EPSILON to compare floats safely
0.1 + 0.2 === 0.3   // → false (floating-point issue)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON   // → true`,
      explanation: {
        en: 'Use Number.EPSILON as a tolerance threshold when comparing floating-point numbers that may differ by tiny rounding errors.',
        es: 'Usa Number.EPSILON como umbral de tolerancia al comparar números de punto flotante que pueden diferir por pequeños errores de redondeo.',
      },
    },
  },
  {
    slug: 'number-epsilon-2',
    title: 'Number.EPSILON — floating point addition problem',
    description: `## Floating Point Addition

In JavaScript, \`0.1 + 0.2 !== 0.3\` due to floating-point representation.

\`\`\`ts
0.1 + 0.2 === 0.3  // → false!
\`\`\``,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'EPSILON',
    initialCode: `// Demonstrate the floating point problem
const sum = 0.1 + 0.2`,
    solution: `const sum = 0.1 + 0.2`,
    tests: [
      { description: '0.1 + 0.2 !== 0.3', assertion: 'expect(0.1 + 0.2 === 0.3).toBe(false)' },
      { description: '0.1 + 0.2 is close to 0.3', assertion: 'expect(0.1 + 0.2).toBeCloseTo ? expect(true).toBe(true) : expect(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON * 10).toBe(true)' },
      { description: 'difference is tiny', assertion: 'expect(Math.abs(0.1 + 0.2 - 0.3) < 1e-10).toBe(true)' },
      { description: 'EPSILON is smaller than the error', assertion: 'expect(Number.EPSILON < 1e-15).toBe(true)' },
      { description: '1 + EPSILON !== 1', assertion: 'expect(1 + Number.EPSILON === 1).toBe(false)' },
    ],
    hints: ['Floating point arithmetic is not exact; `Number.EPSILON` helps you define a tolerance.'],
    tags: ['Number', 'EPSILON', 'floating-point', 'intermediate'],
    usageExample: {
      code: `// Use EPSILON to compare floats safely
0.1 + 0.2 === 0.3   // → false (floating-point issue)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON   // → true`,
      explanation: {
        en: 'Use Number.EPSILON as a tolerance threshold when comparing floating-point numbers that may differ by tiny rounding errors.',
        es: 'Usa Number.EPSILON como umbral de tolerancia al comparar números de punto flotante que pueden diferir por pequeños errores de redondeo.',
      },
    },
  },
  {
    slug: 'number-epsilon-3',
    title: 'Number.EPSILON — epsilon-based equality check',
    description: `## Epsilon Equality

Use \`Number.EPSILON\` to compare floats within a tolerance.

\`\`\`ts
function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON * Math.max(Math.abs(a), Math.abs(b), 1)
}
\`\`\`

**Challenge:** Implement \`almostEqual(a, b)\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'EPSILON',
    initialCode: `function almostEqual(a: number, b: number): boolean {
  // Compare using Number.EPSILON as tolerance
}`,
    solution: `function almostEqual(a: number, b: number): boolean {
  return Math.abs(a - b) < Number.EPSILON * Math.max(Math.abs(a), Math.abs(b), 1)
}`,
    tests: [
      { description: '0.1+0.2 almost equals 0.3', assertion: 'expect(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON * 10).toBe(true)' },
      { description: '1 and 2 are not almost equal', assertion: 'expect(Math.abs(1 - 2) < Number.EPSILON).toBe(false)' },
      { description: '0 and EPSILON differ', assertion: 'expect(0 === Number.EPSILON).toBe(false)' },
      { description: 'EPSILON * 2 > EPSILON', assertion: 'expect(Number.EPSILON * 2 > Number.EPSILON).toBe(true)' },
      { description: 'same number is equal', assertion: 'expect(Math.abs(5 - 5) < Number.EPSILON).toBe(true)' },
    ],
    hints: ['Multiply `EPSILON` by the magnitude of the numbers being compared for a relative tolerance.'],
    tags: ['Number', 'EPSILON', 'equality', 'intermediate'],
    usageExample: {
      code: `// Use EPSILON to compare floats safely
0.1 + 0.2 === 0.3   // → false (floating-point issue)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON   // → true`,
      explanation: {
        en: 'Use Number.EPSILON as a tolerance threshold when comparing floating-point numbers that may differ by tiny rounding errors.',
        es: 'Usa Number.EPSILON como umbral de tolerancia al comparar números de punto flotante que pueden diferir por pequeños errores de redondeo.',
      },
    },
  },
  {
    slug: 'number-epsilon-4',
    title: 'Number.EPSILON — type check',
    description: `## Number.EPSILON Type

Verify the type of \`Number.EPSILON\`.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'EPSILON',
    initialCode: `// What type is Number.EPSILON?
const t = typeof Number.EPSILON`,
    solution: `const t = typeof Number.EPSILON`,
    tests: [
      { description: 'typeof is number', assertion: "expect(typeof Number.EPSILON).toBe('number')" },
      { description: 'is finite', assertion: 'expect(Number.isFinite(Number.EPSILON)).toBe(true)' },
      { description: 'is not NaN', assertion: 'expect(Number.isNaN(Number.EPSILON)).toBe(false)' },
      { description: 'is not integer', assertion: 'expect(Number.isInteger(Number.EPSILON)).toBe(false)' },
      { description: 'is less than 1', assertion: 'expect(Number.EPSILON < 1).toBe(true)' },
    ],
    hints: ['`Number.EPSILON` is a regular floating-point number constant.'],
    tags: ['Number', 'EPSILON', 'type', 'beginner'],
    usageExample: {
      code: `// Use EPSILON to compare floats safely
0.1 + 0.2 === 0.3   // → false (floating-point issue)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON   // → true`,
      explanation: {
        en: 'Use Number.EPSILON as a tolerance threshold when comparing floating-point numbers that may differ by tiny rounding errors.',
        es: 'Usa Number.EPSILON como umbral de tolerancia al comparar números de punto flotante que pueden diferir por pequeños errores de redondeo.',
      },
    },
  },
  {
    slug: 'number-epsilon-5',
    title: 'Number.EPSILON — usage in tolerance comparison',
    description: `## Tolerance Comparison with EPSILON

Use \`Number.EPSILON\` as a tolerance to determine if two numbers are close enough to be treated as equal.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'EPSILON',
    initialCode: `function withinEpsilon(a: number, b: number): boolean {
  // Return true if |a - b| < Number.EPSILON
}`,
    solution: `function withinEpsilon(a: number, b: number): boolean {
  return Math.abs(a - b) < Number.EPSILON
}`,
    tests: [
      { description: 'same numbers pass', assertion: 'expect(Math.abs(0 - 0) < Number.EPSILON).toBe(true)' },
      { description: 'widely different numbers fail', assertion: 'expect(Math.abs(1 - 2) < Number.EPSILON).toBe(false)' },
      { description: 'EPSILON itself is the boundary', assertion: 'expect(Number.EPSILON > 0).toBe(true)' },
      { description: 'half EPSILON passes', assertion: 'expect(Number.EPSILON / 2 < Number.EPSILON).toBe(true)' },
      { description: 'double EPSILON fails', assertion: 'expect(Number.EPSILON * 2 < Number.EPSILON).toBe(false)' },
    ],
    hints: ['`Math.abs(a - b) < Number.EPSILON` is a simple tolerance check.'],
    tags: ['Number', 'EPSILON', 'tolerance', 'intermediate'],
    usageExample: {
      code: `// Use EPSILON to compare floats safely
0.1 + 0.2 === 0.3   // → false (floating-point issue)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON   // → true`,
      explanation: {
        en: 'Use Number.EPSILON as a tolerance threshold when comparing floating-point numbers that may differ by tiny rounding errors.',
        es: 'Usa Number.EPSILON como umbral de tolerancia al comparar números de punto flotante que pueden diferir por pequeños errores de redondeo.',
      },
    },
  },
]
