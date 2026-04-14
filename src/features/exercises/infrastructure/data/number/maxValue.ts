import type { Exercise } from '@/shared/types/exercises'

export const maxValueExercises: Exercise[] = [
  {
    slug: 'number-max-value-1',
    title: 'Number.MAX_VALUE — comparison with large numbers',
    description: `## Number.MAX_VALUE

\`Number.MAX_VALUE\` is approximately \`1.7976931348623157e+308\` — the largest positive finite number representable in JavaScript.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_VALUE',
    initialCode: `// Explore Number.MAX_VALUE
const max = Number.MAX_VALUE`,
    solution: `const max = Number.MAX_VALUE`,
    tests: [
      { description: 'MAX_VALUE is very large', assertion: 'expect(Number.MAX_VALUE > 1e300).toBe(true)' },
      { description: 'regular large numbers are smaller', assertion: 'expect(1e308 < Number.MAX_VALUE).toBe(true)' },
      { description: 'typeof is number', assertion: "expect(typeof Number.MAX_VALUE).toBe('number')" },
      { description: 'is positive', assertion: 'expect(Number.MAX_VALUE > 0).toBe(true)' },
      { description: 'is finite', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
    ],
    hints: ['`MAX_VALUE` is the largest finite number; going beyond it gives `Infinity`.'],
    tags: ['Number', 'MAX_VALUE', 'static-property', 'beginner'],
  },
  {
    slug: 'number-max-value-2',
    title: 'Number.MAX_VALUE — overflow to Infinity',
    description: `## Overflow to Infinity

Multiplying \`Number.MAX_VALUE\` by any number greater than 1 results in \`Infinity\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MAX_VALUE',
    initialCode: `// What happens when you exceed MAX_VALUE?
const overflow = Number.MAX_VALUE * 2`,
    solution: `const overflow = Number.MAX_VALUE * 2`,
    tests: [
      { description: 'MAX_VALUE * 2 is Infinity', assertion: 'expect(Number.MAX_VALUE * 2).toBe(Infinity)' },
      { description: 'MAX_VALUE itself is finite', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
      { description: 'Infinity is not finite', assertion: 'expect(Number.isFinite(Infinity)).toBe(false)' },
      { description: 'MAX_VALUE + 1 is still finite (precision)', assertion: 'expect(Number.isFinite(Number.MAX_VALUE + 1)).toBe(true)' },
      { description: 'MAX_VALUE * 10 is Infinity', assertion: 'expect(Number.MAX_VALUE * 10).toBe(Infinity)' },
    ],
    hints: ['Exceeding `MAX_VALUE` through multiplication overflows to `Infinity`.'],
    tags: ['Number', 'MAX_VALUE', 'overflow', 'Infinity', 'intermediate'],
  },
  {
    slug: 'number-max-value-3',
    title: 'Number.MAX_VALUE — type',
    description: `## Type of MAX_VALUE

Confirm \`Number.MAX_VALUE\` is a finite number.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_VALUE',
    initialCode: `const t = typeof Number.MAX_VALUE`,
    solution: `const t = typeof Number.MAX_VALUE`,
    tests: [
      { description: 'typeof is number', assertion: "expect(typeof Number.MAX_VALUE).toBe('number')" },
      { description: 'isFinite returns true', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
      { description: 'isNaN returns false', assertion: 'expect(Number.isNaN(Number.MAX_VALUE)).toBe(false)' },
      { description: 'isInteger returns false', assertion: 'expect(Number.isInteger(Number.MAX_VALUE)).toBe(false)' },
      { description: 'is greater than 0', assertion: 'expect(Number.MAX_VALUE > 0).toBe(true)' },
    ],
    hints: ['`MAX_VALUE` is a plain `number`, and it is finite.'],
    tags: ['Number', 'MAX_VALUE', 'type', 'beginner'],
  },
  {
    slug: 'number-max-value-4',
    title: 'Number.MAX_VALUE — isFinite check',
    description: `## isFinite Check on MAX_VALUE

\`Number.MAX_VALUE\` is finite even though it is enormous.`,
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'MAX_VALUE',
    initialCode: `const finite = Number.isFinite(Number.MAX_VALUE)`,
    solution: `const finite = Number.isFinite(Number.MAX_VALUE)`,
    tests: [
      { description: 'MAX_VALUE isFinite true', assertion: 'expect(Number.isFinite(Number.MAX_VALUE)).toBe(true)' },
      { description: 'Infinity isFinite false', assertion: 'expect(Number.isFinite(Infinity)).toBe(false)' },
      { description: '-Infinity isFinite false', assertion: 'expect(Number.isFinite(-Infinity)).toBe(false)' },
      { description: 'NaN isFinite false', assertion: 'expect(Number.isFinite(NaN)).toBe(false)' },
      { description: '0 isFinite true', assertion: 'expect(Number.isFinite(0)).toBe(true)' },
    ],
    hints: ['`MAX_VALUE` is finite — only `Infinity`, `-Infinity`, and `NaN` fail `isFinite`.'],
    tags: ['Number', 'MAX_VALUE', 'isFinite', 'beginner'],
  },
  {
    slug: 'number-max-value-5',
    title: 'Number.MAX_VALUE — multiplication beyond MAX_VALUE',
    description: `## Beyond MAX_VALUE

Explore what happens when arithmetic results exceed \`Number.MAX_VALUE\`.`,
    category: 'static-property',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'MAX_VALUE',
    initialCode: `function exceedsMax(n: number): boolean {
  // Return true if n > Number.MAX_VALUE
}`,
    solution: `function exceedsMax(n: number): boolean {
  return n > Number.MAX_VALUE
}`,
    tests: [
      { description: 'Infinity exceeds MAX', assertion: 'expect(Infinity > Number.MAX_VALUE).toBe(true)' },
      { description: 'MAX does not exceed itself', assertion: 'expect(Number.MAX_VALUE > Number.MAX_VALUE).toBe(false)' },
      { description: 'MAX * 2 is Infinity', assertion: 'expect(Number.isFinite(Number.MAX_VALUE * 2)).toBe(false)' },
      { description: '1e308 is less than MAX', assertion: 'expect(1e308 < Number.MAX_VALUE).toBe(true)' },
      { description: 'large product returns Infinity', assertion: 'expect(Number.MAX_VALUE * 2 === Infinity).toBe(true)' },
    ],
    hints: ['Any number greater than `MAX_VALUE` in JS is `Infinity`.'],
    tags: ['Number', 'MAX_VALUE', 'overflow', 'intermediate'],
  },
]
