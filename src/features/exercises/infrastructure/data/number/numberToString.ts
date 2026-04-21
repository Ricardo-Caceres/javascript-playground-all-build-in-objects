import type { Exercise } from '@/shared/types/exercises'

export const numberToStringExercises: Exercise[] = [
  {
    slug: 'number-to-string-1',
    title: 'toString() — hex with radix 16',
    description: `## Number.prototype.toString()

\`num.toString(radix?)\` converts a number to a string, with an optional radix (base).

\`\`\`ts
(255).toString(16)  // → 'ff'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toString',
    initialCode: `function toHex(n: number): string {
  // Use n.toString(16)
}`,
    solution: `function toHex(n: number): string {
  return n.toString(16)
}`,
    tests: [
      { description: '(255).toString(16)', assertion: "expect((255).toString(16)).toBe('ff')" },
      { description: '(16).toString(16)', assertion: "expect((16).toString(16)).toBe('10')" },
      { description: '(0).toString(16)', assertion: "expect((0).toString(16)).toBe('0')" },
      { description: '(256).toString(16)', assertion: "expect((256).toString(16)).toBe('100')" },
      { description: 'result is string', assertion: "expect(typeof (255).toString(16)).toBe('string')" },
    ],
    hints: ['Hexadecimal (base 16) uses digits 0-9 and letters a-f.'],
    tags: ['Number', 'toString', 'instance-method', 'intermediate'],
    usageExample: {
      code: `// Convert number to string in a given base
(255).toString(16)   // → 'ff'
(255).toString(2)    // → '11111111'
(255).toString(10)   // → '255'`,
      explanation: {
        en: 'Use toString() with a radix argument to convert a number to its binary, octal, hexadecimal, or other base string representation.',
        es: 'Usa toString() con un argumento de base para convertir un número a su representación en binario, octal, hexadecimal u otra base.',
      },
    },
  },
  {
    slug: 'number-to-string-2',
    title: 'toString() — binary with radix 2',
    description: `## toString() — Binary

\`(8).toString(2)\` returns the binary representation \`'1000'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toString',
    initialCode: `const result = (8).toString(2)`,
    solution: `const result = (8).toString(2)`,
    tests: [
      { description: '(8).toString(2)', assertion: "expect((8).toString(2)).toBe('1000')" },
      { description: '(1).toString(2)', assertion: "expect((1).toString(2)).toBe('1')" },
      { description: '(4).toString(2)', assertion: "expect((4).toString(2)).toBe('100')" },
      { description: '(15).toString(2)', assertion: "expect((15).toString(2)).toBe('1111')" },
      { description: 'result is string', assertion: "expect(typeof (8).toString(2)).toBe('string')" },
    ],
    hints: ['Binary (base 2) only uses digits 0 and 1.'],
    tags: ['Number', 'toString', 'binary', 'intermediate'],
    usageExample: {
      code: `// Convert number to string in a given base
(255).toString(16)   // → 'ff'
(255).toString(2)    // → '11111111'
(255).toString(10)   // → '255'`,
      explanation: {
        en: 'Use toString() with a radix argument to convert a number to its binary, octal, hexadecimal, or other base string representation.',
        es: 'Usa toString() con un argumento de base para convertir un número a su representación en binario, octal, hexadecimal u otra base.',
      },
    },
  },
  {
    slug: 'number-to-string-3',
    title: 'toString() — default base 10',
    description: `## toString() — Base 10

\`(255).toString()\` (no radix) returns the decimal string \`'255'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toString',
    initialCode: `const result = (255).toString()`,
    solution: `const result = (255).toString()`,
    tests: [
      { description: '(255).toString()', assertion: "expect((255).toString()).toBe('255')" },
      { description: '(0).toString()', assertion: "expect((0).toString()).toBe('0')" },
      { description: '(-7).toString()', assertion: "expect((-7).toString()).toBe('-7')" },
      { description: 'result is string', assertion: "expect(typeof (255).toString()).toBe('string')" },
      { description: '(255).toString(10)', assertion: "expect((255).toString(10)).toBe('255')" },
    ],
    hints: ['Without a radix, `toString()` defaults to base 10.'],
    tags: ['Number', 'toString', 'base10', 'beginner'],
    usageExample: {
      code: `// Convert number to string in a given base
(255).toString(16)   // → 'ff'
(255).toString(2)    // → '11111111'
(255).toString(10)   // → '255'`,
      explanation: {
        en: 'Use toString() with a radix argument to convert a number to its binary, octal, hexadecimal, or other base string representation.',
        es: 'Usa toString() con un argumento de base para convertir un número a su representación en binario, octal, hexadecimal u otra base.',
      },
    },
  },
  {
    slug: 'number-to-string-4',
    title: 'toString() — octal with radix 8',
    description: `## toString() — Octal

\`(10).toString(8)\` returns the octal representation \`'12'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toString',
    initialCode: `const result = (10).toString(8)`,
    solution: `const result = (10).toString(8)`,
    tests: [
      { description: '(10).toString(8)', assertion: "expect((10).toString(8)).toBe('12')" },
      { description: '(8).toString(8)', assertion: "expect((8).toString(8)).toBe('10')" },
      { description: '(0).toString(8)', assertion: "expect((0).toString(8)).toBe('0')" },
      { description: '(64).toString(8)', assertion: "expect((64).toString(8)).toBe('100')" },
      { description: 'result is string', assertion: "expect(typeof (10).toString(8)).toBe('string')" },
    ],
    hints: ['Octal (base 8) uses digits 0-7.'],
    tags: ['Number', 'toString', 'octal', 'intermediate'],
    usageExample: {
      code: `// Convert number to string in a given base
(255).toString(16)   // → 'ff'
(255).toString(2)    // → '11111111'
(255).toString(10)   // → '255'`,
      explanation: {
        en: 'Use toString() with a radix argument to convert a number to its binary, octal, hexadecimal, or other base string representation.',
        es: 'Usa toString() con un argumento de base para convertir un número a su representación en binario, octal, hexadecimal u otra base.',
      },
    },
  },
  {
    slug: 'number-to-string-5',
    title: 'toString() — return type is string',
    description: `## toString() Returns a String`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toString',
    initialCode: `const result = (42).toString()
const t = typeof result`,
    solution: `const result = (42).toString()
const t = typeof result`,
    tests: [
      { description: 'typeof is string', assertion: "expect(typeof (42).toString()).toBe('string')" },
      { description: 'value is "42"', assertion: "expect((42).toString()).toBe('42')" },
      { description: 'not a number', assertion: 'expect(typeof (42).toString() !== "number").toBe(true)' },
      { description: 'negative is string', assertion: "expect(typeof (-1).toString()).toBe('string')" },
      { description: 'zero is string', assertion: "expect(typeof (0).toString()).toBe('string')" },
    ],
    hints: ['`toString()` always returns a string — use `Number()` to convert back.'],
    tags: ['Number', 'toString', 'return-type', 'beginner'],
    usageExample: {
      code: `// Convert number to string in a given base
(255).toString(16)   // → 'ff'
(255).toString(2)    // → '11111111'
(255).toString(10)   // → '255'`,
      explanation: {
        en: 'Use toString() with a radix argument to convert a number to its binary, octal, hexadecimal, or other base string representation.',
        es: 'Usa toString() con un argumento de base para convertir un número a su representación en binario, octal, hexadecimal u otra base.',
      },
    },
  },
]
