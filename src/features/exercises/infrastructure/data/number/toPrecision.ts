import type { Exercise } from '@/shared/types/exercises'

export const toPrecisionExercises: Exercise[] = [
  {
    slug: 'number-to-precision-1',
    title: 'toPrecision() — 5 significant digits',
    description: `## Number.prototype.toPrecision()

\`num.toPrecision(precision?)\` returns a string with the specified number of significant digits.

\`\`\`ts
(123.456).toPrecision(5)  // → '123.46'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toPrecision',
    initialCode: `function toSigFigs(n: number, p: number): string {
  // Use n.toPrecision(p)
}`,
    solution: `function toSigFigs(n: number, p: number): string {
  return n.toPrecision(p)
}`,
    tests: [
      { description: '(123.456).toPrecision(5)', assertion: "expect((123.456).toPrecision(5)).toBe('123.46')" },
      { description: '(1).toPrecision(3)', assertion: "expect((1).toPrecision(3)).toBe('1.00')" },
      { description: '(0).toPrecision(4)', assertion: "expect((0).toPrecision(4)).toBe('0.000')" },
      { description: 'result is string', assertion: "expect(typeof (123.456).toPrecision(5)).toBe('string')" },
      { description: '(99.9).toPrecision(3)', assertion: "expect((99.9).toPrecision(3)).toBe('99.9')" },
    ],
    hints: ['`toPrecision` counts significant digits, not just decimal places.'],
    tags: ['Number', 'toPrecision', 'instance-method', 'intermediate'],
    usageExample: {
      code: `// Format number to a specified precision
(123.456).toPrecision(5)    // → '123.46'
(0.000123).toPrecision(2)   // → '0.00012'`,
      explanation: {
        en: 'Use toPrecision() to format a number to a total number of significant digits, which is useful in scientific or measurement contexts.',
        es: 'Usa toPrecision() para formatear un número con un total de dígitos significativos, útil en contextos científicos o de medición.',
      },
    },
  },
  {
    slug: 'number-to-precision-2',
    title: 'toPrecision() — small number',
    description: `## toPrecision() — Small Number

\`(0.000123).toPrecision(2)\` returns \`'0.00012'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toPrecision',
    initialCode: `const result = (0.000123).toPrecision(2)`,
    solution: `const result = (0.000123).toPrecision(2)`,
    tests: [
      { description: '(0.000123).toPrecision(2)', assertion: "expect((0.000123).toPrecision(2)).toBe('0.00012')" },
      { description: '(0.0001).toPrecision(1)', assertion: "expect((0.0001).toPrecision(1)).toBe('0.0001')" },
      { description: '(0.005).toPrecision(1)', assertion: "expect((0.005).toPrecision(1)).toBe('0.005')" },
      { description: 'result is string', assertion: "expect(typeof (0.000123).toPrecision(2)).toBe('string')" },
      { description: '(0.0099).toPrecision(1)', assertion: "expect((0.0099).toPrecision(1)).toBe('0.01')" },
    ],
    hints: ['For small numbers, `toPrecision` counts from the first significant digit.'],
    tags: ['Number', 'toPrecision', 'small-number', 'intermediate'],
    usageExample: {
      code: `// Format number to a specified precision
(123.456).toPrecision(5)    // → '123.46'
(0.000123).toPrecision(2)   // → '0.00012'`,
      explanation: {
        en: 'Use toPrecision() to format a number to a total number of significant digits, which is useful in scientific or measurement contexts.',
        es: 'Usa toPrecision() para formatear un número con un total de dígitos significativos, útil en contextos científicos o de medición.',
      },
    },
  },
  {
    slug: 'number-to-precision-3',
    title: 'toPrecision() — large number uses exponential notation',
    description: `## toPrecision() — Exponential Notation

For large numbers with fewer significant digits than the number requires, exponential notation is used.

\`\`\`ts
(123456789).toPrecision(4)  // → '1.235e+8'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toPrecision',
    initialCode: `const result = (123456789).toPrecision(4)`,
    solution: `const result = (123456789).toPrecision(4)`,
    tests: [
      { description: '(123456789).toPrecision(4)', assertion: "expect((123456789).toPrecision(4)).toBe('1.235e+8')" },
      { description: '(100000000).toPrecision(2)', assertion: "expect((100000000).toPrecision(2)).toBe('1.0e+8')" },
      { description: 'result contains e', assertion: "expect((123456789).toPrecision(4).includes('e')).toBe(true)" },
      { description: 'result is string', assertion: "expect(typeof (123456789).toPrecision(4)).toBe('string')" },
      { description: '(1e10).toPrecision(3)', assertion: "expect((1e10).toPrecision(3)).toBe('1.00e+10')" },
    ],
    hints: ['When the precision is less than the number of digits, exponential notation is used.'],
    tags: ['Number', 'toPrecision', 'exponential', 'intermediate'],
    usageExample: {
      code: `// Format number to a specified precision
(123.456).toPrecision(5)    // → '123.46'
(0.000123).toPrecision(2)   // → '0.00012'`,
      explanation: {
        en: 'Use toPrecision() to format a number to a total number of significant digits, which is useful in scientific or measurement contexts.',
        es: 'Usa toPrecision() para formatear un número con un total de dígitos significativos, útil en contextos científicos o de medición.',
      },
    },
  },
  {
    slug: 'number-to-precision-4',
    title: 'toPrecision() — no argument returns same as toString',
    description: `## toPrecision() — No Argument

Calling \`toPrecision()\` with no argument returns the same as \`.toString()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toPrecision',
    initialCode: `const result = (123.456).toPrecision()`,
    solution: `const result = (123.456).toPrecision()`,
    tests: [
      { description: 'no arg same as toString', assertion: "expect((123.456).toPrecision()).toBe((123.456).toString())" },
      { description: '(42).toPrecision() equals "42"', assertion: "expect((42).toPrecision()).toBe('42')" },
      { description: '(0).toPrecision() equals "0"', assertion: "expect((0).toPrecision()).toBe('0')" },
      { description: 'result is string', assertion: "expect(typeof (123.456).toPrecision()).toBe('string')" },
      { description: '(-5).toPrecision() equals "-5"', assertion: "expect((-5).toPrecision()).toBe('-5')" },
    ],
    hints: ['Without an argument, `toPrecision()` uses the full precision of the number.'],
    tags: ['Number', 'toPrecision', 'toString', 'beginner'],
    usageExample: {
      code: `// Format number to a specified precision
(123.456).toPrecision(5)    // → '123.46'
(0.000123).toPrecision(2)   // → '0.00012'`,
      explanation: {
        en: 'Use toPrecision() to format a number to a total number of significant digits, which is useful in scientific or measurement contexts.',
        es: 'Usa toPrecision() para formatear un número con un total de dígitos significativos, útil en contextos científicos o de medición.',
      },
    },
  },
  {
    slug: 'number-to-precision-5',
    title: 'toPrecision() — return type is string',
    description: `## toPrecision() Returns a String`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toPrecision',
    initialCode: `const result = (3.14).toPrecision(3)
const t = typeof result`,
    solution: `const result = (3.14).toPrecision(3)
const t = typeof result`,
    tests: [
      { description: 'typeof is string', assertion: "expect(typeof (3.14).toPrecision(3)).toBe('string')" },
      { description: 'value is 3.14', assertion: "expect((3.14).toPrecision(3)).toBe('3.14')" },
      { description: 'not a number type', assertion: 'expect(typeof (3.14).toPrecision(3) !== "number").toBe(true)' },
      { description: '(0).toPrecision(1) is string', assertion: "expect(typeof (0).toPrecision(1)).toBe('string')" },
      { description: '(42).toPrecision(4)', assertion: "expect((42).toPrecision(4)).toBe('42.00')" },
    ],
    hints: ['`toPrecision` returns a string — parse it with `parseFloat` if you need arithmetic.'],
    tags: ['Number', 'toPrecision', 'return-type', 'beginner'],
    usageExample: {
      code: `// Format number to a specified precision
(123.456).toPrecision(5)    // → '123.46'
(0.000123).toPrecision(2)   // → '0.00012'`,
      explanation: {
        en: 'Use toPrecision() to format a number to a total number of significant digits, which is useful in scientific or measurement contexts.',
        es: 'Usa toPrecision() para formatear un número con un total de dígitos significativos, útil en contextos científicos o de medición.',
      },
    },
  },
]
