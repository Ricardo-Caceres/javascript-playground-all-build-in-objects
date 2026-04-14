import type { Exercise } from '@/shared/types/exercises'

export const toExponentialExercises: Exercise[] = [
  {
    slug: 'number-to-exponential-1',
    title: 'toExponential() — basic usage',
    description: `## Number.prototype.toExponential()

\`num.toExponential(fractionDigits?)\` returns a string representing the number in exponential notation.

\`\`\`ts
(12345).toExponential()  // → '1.2345e+4'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toExponential',
    initialCode: `function toExp(n: number): string {
  // Use n.toExponential()
}`,
    solution: `function toExp(n: number): string {
  return n.toExponential()
}`,
    tests: [
      { description: '(12345).toExponential()', assertion: "expect((12345).toExponential()).toBe('1.2345e+4')" },
      { description: '(1).toExponential()', assertion: "expect((1).toExponential()).toBe('1e+0')" },
      { description: '(0).toExponential()', assertion: "expect((0).toExponential()).toBe('0e+0')" },
      { description: 'result is a string', assertion: "expect(typeof (12345).toExponential()).toBe('string')" },
      { description: '(100).toExponential()', assertion: "expect((100).toExponential()).toBe('1e+2')" },
    ],
    hints: ['`toExponential()` always returns a string in scientific notation.'],
    tags: ['Number', 'toExponential', 'instance-method', 'intermediate'],
  },
  {
    slug: 'number-to-exponential-2',
    title: 'toExponential() — with fractionDigits',
    description: `## toExponential(fractionDigits)

Specify the number of digits after the decimal point in the mantissa.

\`\`\`ts
(0.00123).toExponential(2)  // → '1.23e-3'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toExponential',
    initialCode: `const result = (0.00123).toExponential(2)`,
    solution: `const result = (0.00123).toExponential(2)`,
    tests: [
      { description: '(0.00123).toExponential(2)', assertion: "expect((0.00123).toExponential(2)).toBe('1.23e-3')" },
      { description: '(12345).toExponential(2)', assertion: "expect((12345).toExponential(2)).toBe('1.23e+4')" },
      { description: '(1).toExponential(3)', assertion: "expect((1).toExponential(3)).toBe('1.000e+0')" },
      { description: '(999).toExponential(1)', assertion: "expect((999).toExponential(1)).toBe('1.0e+3')" },
      { description: 'result is string', assertion: "expect(typeof (0.00123).toExponential(2)).toBe('string')" },
    ],
    hints: ['The argument controls how many decimal digits appear in the mantissa.'],
    tags: ['Number', 'toExponential', 'fractionDigits', 'intermediate'],
  },
  {
    slug: 'number-to-exponential-3',
    title: 'toExponential() — with 3 decimal places',
    description: `## toExponential(3)

\`(1).toExponential(3)\` pads with zeros to show 3 fractional digits.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toExponential',
    initialCode: `const result = (1).toExponential(3)`,
    solution: `const result = (1).toExponential(3)`,
    tests: [
      { description: '(1).toExponential(3)', assertion: "expect((1).toExponential(3)).toBe('1.000e+0')" },
      { description: '(0).toExponential(2)', assertion: "expect((0).toExponential(2)).toBe('0.00e+0')" },
      { description: '(5).toExponential(4)', assertion: "expect((5).toExponential(4)).toBe('5.0000e+0')" },
      { description: 'result has correct length', assertion: "expect((1).toExponential(3).length).toBe(9)" },
      { description: 'result is string', assertion: "expect(typeof (1).toExponential(3)).toBe('string')" },
    ],
    hints: ['`toExponential` pads with trailing zeros when needed.'],
    tags: ['Number', 'toExponential', 'padding', 'intermediate'],
  },
  {
    slug: 'number-to-exponential-4',
    title: 'toExponential() — large number',
    description: `## toExponential() — Large Number

\`(123456789).toExponential(2)\` rounds to 2 decimal places.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toExponential',
    initialCode: `const result = (123456789).toExponential(2)`,
    solution: `const result = (123456789).toExponential(2)`,
    tests: [
      { description: '(123456789).toExponential(2)', assertion: "expect((123456789).toExponential(2)).toBe('1.23e+8')" },
      { description: '(1000000).toExponential()', assertion: "expect((1000000).toExponential()).toBe('1e+6')" },
      { description: '(1500000).toExponential(1)', assertion: "expect((1500000).toExponential(1)).toBe('1.5e+6')" },
      { description: 'result is string', assertion: "expect(typeof (123456789).toExponential(2)).toBe('string')" },
      { description: 'starts with 1', assertion: "expect((123456789).toExponential(2).startsWith('1')).toBe(true)" },
    ],
    hints: ['`toExponential` rounds the mantissa to the specified number of digits.'],
    tags: ['Number', 'toExponential', 'large-number', 'intermediate'],
  },
  {
    slug: 'number-to-exponential-5',
    title: 'toExponential() — return type is string',
    description: `## toExponential() Returns a String

The result of \`toExponential()\` is always a \`string\`, not a number.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toExponential',
    initialCode: `const result = (42).toExponential()
const t = typeof result`,
    solution: `const result = (42).toExponential()
const t = typeof result`,
    tests: [
      { description: 'typeof is string', assertion: "expect(typeof (42).toExponential()).toBe('string')" },
      { description: 'negative number', assertion: "expect(typeof (-5).toExponential()).toBe('string')" },
      { description: 'zero is string', assertion: "expect(typeof (0).toExponential()).toBe('string')" },
      { description: 'contains e', assertion: "expect((42).toExponential().includes('e')).toBe(true)" },
      { description: 'not a number type', assertion: 'expect(typeof (42).toExponential() === "number").toBe(false)' },
    ],
    hints: ['All `toXxx()` number methods return strings, not numbers.'],
    tags: ['Number', 'toExponential', 'return-type', 'beginner'],
  },
]
