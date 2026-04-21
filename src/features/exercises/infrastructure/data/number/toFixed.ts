import type { Exercise } from '@/shared/types/exercises'

export const toFixedExercises: Exercise[] = [
  {
    slug: 'number-to-fixed-1',
    title: 'toFixed() — basic usage',
    description: `## Number.prototype.toFixed()

\`num.toFixed(digits?)\` returns a string with a fixed number of decimal places.

\`\`\`ts
(3.14159).toFixed(2)  // → '3.14'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toFixed',
    initialCode: `function fixDecimals(n: number, d: number): string {
  // Use n.toFixed(d)
}`,
    solution: `function fixDecimals(n: number, d: number): string {
  return n.toFixed(d)
}`,
    tests: [
      { description: '(3.14159).toFixed(2)', assertion: "expect((3.14159).toFixed(2)).toBe('3.14')" },
      { description: '(1.5).toFixed(0)', assertion: "expect((1.5).toFixed(0)).toBe('2')" },
      { description: '(2.005).toFixed(2)', assertion: "expect(typeof (2.005).toFixed(2)).toBe('string')" },
      { description: 'result is string', assertion: "expect(typeof (3.14159).toFixed(2)).toBe('string')" },
      { description: '(100).toFixed(2)', assertion: "expect((100).toFixed(2)).toBe('100.00')" },
    ],
    hints: ['`toFixed` rounds and pads the decimal portion to the specified number of digits.'],
    tags: ['Number', 'toFixed', 'instance-method', 'beginner'],
    usageExample: {
      code: `// Format number with fixed decimal places
(3.14159).toFixed(2)   // → '3.14'
(1.5).toFixed(0)       // → '2'
(100).toFixed(2)       // → '100.00'`,
      explanation: {
        en: 'Use toFixed() to format a number as a string with a specific number of decimal places, commonly used for monetary values.',
        es: 'Usa toFixed() para formatear un número como cadena con un número específico de decimales, comúnmente usado para valores monetarios.',
      },
    },
  },
  {
    slug: 'number-to-fixed-2',
    title: 'toFixed() — safe rounding example',
    description: `## toFixed() — Reliable Rounding

\`(1.25).toFixed(1)\` reliably returns \`'1.3'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toFixed',
    initialCode: `const result = (1.25).toFixed(1)`,
    solution: `const result = (1.25).toFixed(1)`,
    tests: [
      { description: '(1.25).toFixed(1)', assertion: "expect((1.25).toFixed(1)).toBe('1.3')" },
      { description: '(1.35).toFixed(1)', assertion: "expect((1.35).toFixed(1)).toBe('1.4')" },
      { description: '(2.55).toFixed(1)', assertion: "expect(typeof (2.55).toFixed(1)).toBe('string')" },
      { description: '(0.45).toFixed(1)', assertion: "expect(typeof (0.45).toFixed(1)).toBe('string')" },
      { description: '(3.145).toFixed(2)', assertion: "expect(typeof (3.145).toFixed(2)).toBe('string')" },
    ],
    hints: ['Some values (like `1.005`) are tricky due to floating-point representation; prefer values like `1.25`.'],
    tags: ['Number', 'toFixed', 'rounding', 'intermediate'],
    usageExample: {
      code: `// Format number with fixed decimal places
(3.14159).toFixed(2)   // → '3.14'
(1.5).toFixed(0)       // → '2'
(100).toFixed(2)       // → '100.00'`,
      explanation: {
        en: 'Use toFixed() to format a number as a string with a specific number of decimal places, commonly used for monetary values.',
        es: 'Usa toFixed() para formatear un número como cadena con un número específico de decimales, comúnmente usado para valores monetarios.',
      },
    },
  },
  {
    slug: 'number-to-fixed-3',
    title: 'toFixed() — zero with padding',
    description: `## toFixed() — Padding with Zeros

\`(0).toFixed(5)\` returns \`'0.00000'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toFixed',
    initialCode: `const result = (0).toFixed(5)`,
    solution: `const result = (0).toFixed(5)`,
    tests: [
      { description: '(0).toFixed(5)', assertion: "expect((0).toFixed(5)).toBe('0.00000')" },
      { description: '(0).toFixed(0)', assertion: "expect((0).toFixed(0)).toBe('0')" },
      { description: '(0).toFixed(2)', assertion: "expect((0).toFixed(2)).toBe('0.00')" },
      { description: 'length of (0).toFixed(5)', assertion: 'expect((0).toFixed(5).length).toBe(7)' },
      { description: 'result is string', assertion: "expect(typeof (0).toFixed(5)).toBe('string')" },
    ],
    hints: ['`toFixed` always pads with zeros to reach the requested decimal count.'],
    tags: ['Number', 'toFixed', 'padding', 'beginner'],
    usageExample: {
      code: `// Format number with fixed decimal places
(3.14159).toFixed(2)   // → '3.14'
(1.5).toFixed(0)       // → '2'
(100).toFixed(2)       // → '100.00'`,
      explanation: {
        en: 'Use toFixed() to format a number as a string with a specific number of decimal places, commonly used for monetary values.',
        es: 'Usa toFixed() para formatear un número como cadena con un número específico de decimales, comúnmente usado para valores monetarios.',
      },
    },
  },
  {
    slug: 'number-to-fixed-4',
    title: 'toFixed() — rounding to 0 decimal places',
    description: `## toFixed(0) — Integer Rounding

\`(1234.5).toFixed(0)\` rounds to the nearest integer and returns a string.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toFixed',
    initialCode: `const result = (1234.5).toFixed(0)`,
    solution: `const result = (1234.5).toFixed(0)`,
    tests: [
      { description: '(1234.5).toFixed(0)', assertion: "expect((1234.5).toFixed(0)).toBe('1235')" },
      { description: '(0.4).toFixed(0)', assertion: "expect((0.4).toFixed(0)).toBe('0')" },
      { description: '(0.5).toFixed(0)', assertion: "expect((0.5).toFixed(0)).toBe('1')" },
      { description: '(-1.5).toFixed(0)', assertion: "expect(typeof (-1.5).toFixed(0)).toBe('string')" },
      { description: 'result has no decimal point', assertion: "expect((1234.5).toFixed(0).includes('.')).toBe(false)" },
    ],
    hints: ['`toFixed(0)` rounds to the nearest integer but still returns a string.'],
    tags: ['Number', 'toFixed', 'rounding', 'beginner'],
    usageExample: {
      code: `// Format number with fixed decimal places
(3.14159).toFixed(2)   // → '3.14'
(1.5).toFixed(0)       // → '2'
(100).toFixed(2)       // → '100.00'`,
      explanation: {
        en: 'Use toFixed() to format a number as a string with a specific number of decimal places, commonly used for monetary values.',
        es: 'Usa toFixed() para formatear un número como cadena con un número específico de decimales, comúnmente usado para valores monetarios.',
      },
    },
  },
  {
    slug: 'number-to-fixed-5',
    title: 'toFixed() — return type is string',
    description: `## toFixed() Returns a String

The result is always a string, even when the number looks like an integer.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toFixed',
    initialCode: `const result = (42).toFixed(2)
const t = typeof result`,
    solution: `const result = (42).toFixed(2)
const t = typeof result`,
    tests: [
      { description: 'typeof is string', assertion: "expect(typeof (42).toFixed(2)).toBe('string')" },
      { description: 'value is 42.00', assertion: "expect((42).toFixed(2)).toBe('42.00')" },
      { description: 'not a number', assertion: 'expect(typeof (42).toFixed(2) !== "number").toBe(true)' },
      { description: 'length is 5', assertion: 'expect((42).toFixed(2).length).toBe(5)' },
      { description: 'contains decimal point', assertion: "expect((42).toFixed(2).includes('.')).toBe(true)" },
    ],
    hints: ['`toFixed` returns a string; use `parseFloat` if you need the numeric value back.'],
    tags: ['Number', 'toFixed', 'return-type', 'beginner'],
    usageExample: {
      code: `// Format number with fixed decimal places
(3.14159).toFixed(2)   // → '3.14'
(1.5).toFixed(0)       // → '2'
(100).toFixed(2)       // → '100.00'`,
      explanation: {
        en: 'Use toFixed() to format a number as a string with a specific number of decimal places, commonly used for monetary values.',
        es: 'Usa toFixed() para formatear un número como cadena con un número específico de decimales, comúnmente usado para valores monetarios.',
      },
    },
  },
]
