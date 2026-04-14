import type { Exercise } from '@/shared/types/exercises'

export const numberIsFiniteExercises: Exercise[] = [
  {
    slug: 'number-is-finite-1',
    title: 'Number.isFinite() — finite number returns true',
    description: `## Number.isFinite()

\`Number.isFinite(value)\` returns \`true\` if the value is a finite number. Unlike global \`isFinite()\`, it does **not** coerce the argument.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isFinite',
    initialCode: `function checkFinite(n: number): boolean {
  // Use Number.isFinite(n)
}`,
    solution: `function checkFinite(n: number): boolean {
  return Number.isFinite(n)
}`,
    tests: [
      { description: '42 is finite', assertion: 'expect(Number.isFinite(42)).toBe(true)' },
      { description: '3.14 is finite', assertion: 'expect(Number.isFinite(3.14)).toBe(true)' },
      { description: '0 is finite', assertion: 'expect(Number.isFinite(0)).toBe(true)' },
      { description: '-1000 is finite', assertion: 'expect(Number.isFinite(-1000)).toBe(true)' },
      { description: 'MAX_VALUE is finite', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
    ],
    hints: ['Any regular number (including negatives and decimals) is finite.'],
    tags: ['Number', 'isFinite', 'static-method', 'beginner'],
  },
  {
    slug: 'number-is-finite-2',
    title: 'Number.isFinite() — Infinity returns false',
    description: `## Number.isFinite() — Infinity

\`Number.isFinite(Infinity)\` returns \`false\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isFinite',
    initialCode: `const result = Number.isFinite(Infinity)`,
    solution: `const result = Number.isFinite(Infinity)`,
    tests: [
      { description: 'Infinity is not finite', assertion: 'expect(Number.isFinite(Infinity)).toBe(false)' },
      { description: 'POSITIVE_INFINITY is not finite', assertion: 'expect(Number.isFinite(Number.POSITIVE_INFINITY)).toBe(false)' },
      { description: '1/0 is not finite', assertion: 'expect(Number.isFinite(1/0)).toBe(false)' },
      { description: '1e309 is Infinity', assertion: 'expect(Number.isFinite(1e309)).toBe(false)' },
      { description: 'finite number returns true', assertion: 'expect(Number.isFinite(1e308)).toBe(true)' },
    ],
    hints: ['`Infinity` is not finite — it represents an unbounded value.'],
    tags: ['Number', 'isFinite', 'Infinity', 'beginner'],
  },
  {
    slug: 'number-is-finite-3',
    title: 'Number.isFinite() — -Infinity returns false',
    description: `## Number.isFinite() — -Infinity`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isFinite',
    initialCode: `const result = Number.isFinite(-Infinity)`,
    solution: `const result = Number.isFinite(-Infinity)`,
    tests: [
      { description: '-Infinity is not finite', assertion: 'expect(Number.isFinite(-Infinity)).toBe(false)' },
      { description: 'NEGATIVE_INFINITY is not finite', assertion: 'expect(Number.isFinite(Number.NEGATIVE_INFINITY)).toBe(false)' },
      { description: '-1/0 is not finite', assertion: 'expect(Number.isFinite(-1/0)).toBe(false)' },
      { description: '-1e308 is finite', assertion: 'expect(Number.isFinite(-1e308)).toBe(true)' },
      { description: '-0 is finite', assertion: 'expect(Number.isFinite(-0)).toBe(true)' },
    ],
    hints: ['Both `Infinity` and `-Infinity` are not finite.'],
    tags: ['Number', 'isFinite', '-Infinity', 'beginner'],
  },
  {
    slug: 'number-is-finite-4',
    title: 'Number.isFinite() — NaN returns false',
    description: `## Number.isFinite() — NaN`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'isFinite',
    initialCode: `const result = Number.isFinite(NaN)`,
    solution: `const result = Number.isFinite(NaN)`,
    tests: [
      { description: 'NaN is not finite', assertion: 'expect(Number.isFinite(NaN)).toBe(false)' },
      { description: 'Number.NaN is not finite', assertion: 'expect(Number.isFinite(Number.NaN)).toBe(false)' },
      { description: '0/0 is not finite', assertion: 'expect(Number.isFinite(0/0)).toBe(false)' },
      { description: 'real number is finite', assertion: 'expect(Number.isFinite(99)).toBe(true)' },
      { description: 'NaN is also not an integer', assertion: 'expect(Number.isInteger(NaN)).toBe(false)' },
    ],
    hints: ['`NaN` is not finite — it is not a real number at all.'],
    tags: ['Number', 'isFinite', 'NaN', 'beginner'],
  },
  {
    slug: 'number-is-finite-5',
    title: 'Number.isFinite() — no coercion unlike global isFinite',
    description: `## Number.isFinite() vs global isFinite()

Global \`isFinite('42')\` returns \`true\` (coerces string to number first). \`Number.isFinite('42')\` returns \`false\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'isFinite',
    initialCode: `// Strict version does not coerce
const strict = Number.isFinite('42')
const global = isFinite('42')`,
    solution: `const strict = Number.isFinite('42')
const global = isFinite('42')`,
    tests: [
      { description: "Number.isFinite('42') is false", assertion: "expect(Number.isFinite('42')).toBe(false)" },
      { description: "global isFinite('42') is true", assertion: "expect(isFinite('42')).toBe(true)" },
      { description: "Number.isFinite(null) is false", assertion: 'expect(Number.isFinite(null)).toBe(false)' },
      { description: "global isFinite(null) is true", assertion: 'expect(isFinite(null)).toBe(true)' },
      { description: 'Number.isFinite(42) is true', assertion: 'expect(Number.isFinite(42)).toBe(true)' },
    ],
    hints: ['`Number.isFinite` never coerces — only actual number types can be finite.'],
    tags: ['Number', 'isFinite', 'coercion', 'intermediate'],
  },
]
