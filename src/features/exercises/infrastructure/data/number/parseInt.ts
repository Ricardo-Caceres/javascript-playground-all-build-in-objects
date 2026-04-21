import type { Exercise } from '@/shared/types/exercises'

export const numberParseIntExercises: Exercise[] = [
  {
    slug: 'number-parse-int-1',
    title: "Number.parseInt() — '42' → 42",
    description: `## Number.parseInt()

\`Number.parseInt(string, radix)\` parses a string and returns an integer. It is the same as the global \`parseInt()\`.

\`\`\`ts
Number.parseInt('42')  // → 42
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseInt',
    initialCode: `function parseIntBase10(str: string): number {
  // Use Number.parseInt(str, 10)
}`,
    solution: `function parseIntBase10(str: string): number {
  return Number.parseInt(str, 10)
}`,
    tests: [
      { description: "'42' → 42", assertion: "expect(Number.parseInt('42', 10)).toBe(42)" },
      { description: "'0' → 0", assertion: "expect(Number.parseInt('0', 10)).toBe(0)" },
      { description: "'-7' → -7", assertion: "expect(Number.parseInt('-7', 10)).toBe(-7)" },
      { description: "'100' → 100", assertion: "expect(Number.parseInt('100', 10)).toBe(100)" },
      { description: "'255' → 255", assertion: "expect(Number.parseInt('255', 10)).toBe(255)" },
    ],
    hints: ['Always specify the radix to avoid ambiguity.'],
    tags: ['Number', 'parseInt', 'static-method', 'beginner'],
    usageExample: {
      code: `// Parse a string to an integer with optional base
Number.parseInt('42px')       // → 42
Number.parseInt('0xff', 16)   // → 255
Number.parseInt('10', 2)      // → 2`,
      explanation: {
        en: 'Use Number.parseInt() to convert a string to an integer, optionally specifying a radix for binary, octal, or hexadecimal input.',
        es: 'Usa Number.parseInt() para convertir una cadena a un entero, especificando opcionalmente una base para entrada binaria, octal o hexadecimal.',
      },
    },
  },
  {
    slug: 'number-parse-int-2',
    title: "Number.parseInt() — hex string with radix 16",
    description: `## Number.parseInt() — Hex

Use radix \`16\` to parse hexadecimal strings.

\`\`\`ts
Number.parseInt('0xff', 16)  // → 255
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'parseInt',
    initialCode: `const hex = Number.parseInt('0xff', 16)`,
    solution: `const hex = Number.parseInt('0xff', 16)`,
    tests: [
      { description: "'0xff' radix 16 → 255", assertion: "expect(Number.parseInt('0xff', 16)).toBe(255)" },
      { description: "'ff' radix 16 → 255", assertion: "expect(Number.parseInt('ff', 16)).toBe(255)" },
      { description: "'10' radix 16 → 16", assertion: "expect(Number.parseInt('10', 16)).toBe(16)" },
      { description: "'1a' radix 16 → 26", assertion: "expect(Number.parseInt('1a', 16)).toBe(26)" },
      { description: "'FF' radix 16 → 255", assertion: "expect(Number.parseInt('FF', 16)).toBe(255)" },
    ],
    hints: ['Hexadecimal uses base 16 with digits 0-9 and letters a-f.'],
    tags: ['Number', 'parseInt', 'hex', 'intermediate'],
    usageExample: {
      code: `// Parse a string to an integer with optional base
Number.parseInt('42px')       // → 42
Number.parseInt('0xff', 16)   // → 255
Number.parseInt('10', 2)      // → 2`,
      explanation: {
        en: 'Use Number.parseInt() to convert a string to an integer, optionally specifying a radix for binary, octal, or hexadecimal input.',
        es: 'Usa Number.parseInt() para convertir una cadena a un entero, especificando opcionalmente una base para entrada binaria, octal o hexadecimal.',
      },
    },
  },
  {
    slug: 'number-parse-int-3',
    title: "Number.parseInt() — binary string with radix 2",
    description: `## Number.parseInt() — Binary

Use radix \`2\` to parse binary strings.

\`\`\`ts
Number.parseInt('10', 2)  // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'parseInt',
    initialCode: `const binary = Number.parseInt('10', 2)`,
    solution: `const binary = Number.parseInt('10', 2)`,
    tests: [
      { description: "'10' radix 2 → 2", assertion: "expect(Number.parseInt('10', 2)).toBe(2)" },
      { description: "'1' radix 2 → 1", assertion: "expect(Number.parseInt('1', 2)).toBe(1)" },
      { description: "'1010' radix 2 → 10", assertion: "expect(Number.parseInt('1010', 2)).toBe(10)" },
      { description: "'1111' radix 2 → 15", assertion: "expect(Number.parseInt('1111', 2)).toBe(15)" },
      { description: "'0' radix 2 → 0", assertion: "expect(Number.parseInt('0', 2)).toBe(0)" },
    ],
    hints: ['Binary uses base 2 with only digits 0 and 1.'],
    tags: ['Number', 'parseInt', 'binary', 'intermediate'],
    usageExample: {
      code: `// Parse a string to an integer with optional base
Number.parseInt('42px')       // → 42
Number.parseInt('0xff', 16)   // → 255
Number.parseInt('10', 2)      // → 2`,
      explanation: {
        en: 'Use Number.parseInt() to convert a string to an integer, optionally specifying a radix for binary, octal, or hexadecimal input.',
        es: 'Usa Number.parseInt() para convertir una cadena a un entero, especificando opcionalmente una base para entrada binaria, octal o hexadecimal.',
      },
    },
  },
  {
    slug: 'number-parse-int-4',
    title: "Number.parseInt() — leading/trailing whitespace ignored",
    description: `## Number.parseInt() — Whitespace`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseInt',
    initialCode: `const result = Number.parseInt('  3  ', 10)`,
    solution: `const result = Number.parseInt('  3  ', 10)`,
    tests: [
      { description: "'  3  ' → 3", assertion: "expect(Number.parseInt('  3  ', 10)).toBe(3)" },
      { description: "'\\t5' → 5", assertion: "expect(Number.parseInt('\\t5', 10)).toBe(5)" },
      { description: "'\\n10' → 10", assertion: "expect(Number.parseInt('\\n10', 10)).toBe(10)" },
      { description: "'  -2  ' → -2", assertion: "expect(Number.parseInt('  -2  ', 10)).toBe(-2)" },
      { description: "'   0' → 0", assertion: "expect(Number.parseInt('   0', 10)).toBe(0)" },
    ],
    hints: ['Leading whitespace is stripped before parsing.'],
    tags: ['Number', 'parseInt', 'whitespace', 'beginner'],
    usageExample: {
      code: `// Parse a string to an integer with optional base
Number.parseInt('42px')       // → 42
Number.parseInt('0xff', 16)   // → 255
Number.parseInt('10', 2)      // → 2`,
      explanation: {
        en: 'Use Number.parseInt() to convert a string to an integer, optionally specifying a radix for binary, octal, or hexadecimal input.',
        es: 'Usa Number.parseInt() para convertir una cadena a un entero, especificando opcionalmente una base para entrada binaria, octal o hexadecimal.',
      },
    },
  },
  {
    slug: 'number-parse-int-5',
    title: "Number.parseInt() — 'abc' returns NaN",
    description: `## Number.parseInt() — NaN for Non-Numeric Strings

When the string cannot be parsed as an integer, \`NaN\` is returned.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseInt',
    initialCode: `const result = Number.parseInt('abc', 10)`,
    solution: `const result = Number.parseInt('abc', 10)`,
    tests: [
      { description: "'abc' → NaN", assertion: "expect(Number.isNaN(Number.parseInt('abc', 10))).toBe(true)" },
      { description: "'' → NaN", assertion: "expect(Number.isNaN(Number.parseInt('', 10))).toBe(true)" },
      { description: "'12abc' → 12 (stops at non-numeric)", assertion: "expect(Number.parseInt('12abc', 10)).toBe(12)" },
      { description: "'xyz' → NaN", assertion: "expect(Number.isNaN(Number.parseInt('xyz', 10))).toBe(true)" },
      { description: "'3.9' → 3 (truncates decimal)", assertion: "expect(Number.parseInt('3.9', 10)).toBe(3)" },
    ],
    hints: ['`parseInt` truncates at the decimal point and returns `NaN` for non-numeric leading characters.'],
    tags: ['Number', 'parseInt', 'NaN', 'beginner'],
    usageExample: {
      code: `// Parse a string to an integer with optional base
Number.parseInt('42px')       // → 42
Number.parseInt('0xff', 16)   // → 255
Number.parseInt('10', 2)      // → 2`,
      explanation: {
        en: 'Use Number.parseInt() to convert a string to an integer, optionally specifying a radix for binary, octal, or hexadecimal input.',
        es: 'Usa Number.parseInt() para convertir una cadena a un entero, especificando opcionalmente una base para entrada binaria, octal o hexadecimal.',
      },
    },
  },
]
