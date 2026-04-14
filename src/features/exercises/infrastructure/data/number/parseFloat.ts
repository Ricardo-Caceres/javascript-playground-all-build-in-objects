import type { Exercise } from '@/shared/types/exercises'

export const numberParseFloatExercises: Exercise[] = [
  {
    slug: 'number-parse-float-1',
    title: "Number.parseFloat() — '3.14' → 3.14",
    description: `## Number.parseFloat()

\`Number.parseFloat(string)\` parses a string and returns a floating-point number. It is the same as the global \`parseFloat()\`.

\`\`\`ts
Number.parseFloat('3.14')  // → 3.14
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseFloat',
    initialCode: `function parse(str: string): number {
  // Use Number.parseFloat(str)
}`,
    solution: `function parse(str: string): number {
  return Number.parseFloat(str)
}`,
    tests: [
      { description: "'3.14' → 3.14", assertion: "expect(Number.parseFloat('3.14')).toBe(3.14)" },
      { description: "'0' → 0", assertion: "expect(Number.parseFloat('0')).toBe(0)" },
      { description: "'-2.5' → -2.5", assertion: "expect(Number.parseFloat('-2.5')).toBe(-2.5)" },
      { description: "'1e3' → 1000", assertion: "expect(Number.parseFloat('1e3')).toBe(1000)" },
      { description: "'Infinity' → Infinity", assertion: "expect(Number.parseFloat('Infinity')).toBe(Infinity)" },
    ],
    hints: ['`Number.parseFloat` is identical to the global `parseFloat`.'],
    tags: ['Number', 'parseFloat', 'static-method', 'beginner'],
  },
  {
    slug: 'number-parse-float-2',
    title: "Number.parseFloat() — leading/trailing whitespace ignored",
    description: `## Number.parseFloat() — Whitespace

Leading and trailing whitespace is ignored.

\`\`\`ts
Number.parseFloat('  2.5  ')  // → 2.5
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseFloat',
    initialCode: `const result = Number.parseFloat('  2.5  ')`,
    solution: `const result = Number.parseFloat('  2.5  ')`,
    tests: [
      { description: "leading spaces ignored", assertion: "expect(Number.parseFloat('  2.5  ')).toBe(2.5)" },
      { description: "tab whitespace ignored", assertion: "expect(Number.parseFloat('\\t3.0')).toBe(3)" },
      { description: "newline ignored", assertion: "expect(Number.parseFloat('\\n1.5')).toBe(1.5)" },
      { description: "'  42' parses", assertion: "expect(Number.parseFloat('  42')).toBe(42)" },
      { description: "'   -1.0   ' parses", assertion: "expect(Number.parseFloat('   -1.0   ')).toBe(-1)" },
    ],
    hints: ['Leading whitespace is stripped before parsing.'],
    tags: ['Number', 'parseFloat', 'whitespace', 'beginner'],
  },
  {
    slug: 'number-parse-float-3',
    title: "Number.parseFloat() — stops at non-numeric characters",
    description: `## Number.parseFloat() — Partial Parse

\`Number.parseFloat\` parses as far as it can, stopping at the first non-numeric character.

\`\`\`ts
Number.parseFloat('123abc')  // → 123
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'parseFloat',
    initialCode: `const result = Number.parseFloat('123abc')`,
    solution: `const result = Number.parseFloat('123abc')`,
    tests: [
      { description: "'123abc' → 123", assertion: "expect(Number.parseFloat('123abc')).toBe(123)" },
      { description: "'3.14xyz' → 3.14", assertion: "expect(Number.parseFloat('3.14xyz')).toBe(3.14)" },
      { description: "'12.5 apples' → 12.5", assertion: "expect(Number.parseFloat('12.5 apples')).toBe(12.5)" },
      { description: "'-5hello' → -5", assertion: "expect(Number.parseFloat('-5hello')).toBe(-5)" },
      { description: "'0.1px' → 0.1", assertion: "expect(Number.parseFloat('0.1px')).toBe(0.1)" },
    ],
    hints: ['Parsing stops at the first character that cannot be part of a float.'],
    tags: ['Number', 'parseFloat', 'partial-parse', 'intermediate'],
  },
  {
    slug: 'number-parse-float-4',
    title: "Number.parseFloat() — empty string returns NaN",
    description: `## Number.parseFloat() — Empty String

An empty string or a string with no parseable digits returns \`NaN\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'parseFloat',
    initialCode: `const result = Number.parseFloat('')`,
    solution: `const result = Number.parseFloat('')`,
    tests: [
      { description: "'' → NaN", assertion: "expect(Number.isNaN(Number.parseFloat(''))).toBe(true)" },
      { description: "'abc' → NaN", assertion: "expect(Number.isNaN(Number.parseFloat('abc'))).toBe(true)" },
      { description: "'   ' → NaN", assertion: "expect(Number.isNaN(Number.parseFloat('   '))).toBe(true)" },
      { description: "'$100' → NaN", assertion: "expect(Number.isNaN(Number.parseFloat('$100'))).toBe(true)" },
      { description: "'1' → 1 (not NaN)", assertion: "expect(Number.isNaN(Number.parseFloat('1'))).toBe(false)" },
    ],
    hints: ['When there are no leading numeric characters to parse, the result is `NaN`.'],
    tags: ['Number', 'parseFloat', 'NaN', 'beginner'],
  },
  {
    slug: 'number-parse-float-5',
    title: "Number.parseFloat() — second decimal point stops parsing",
    description: `## Number.parseFloat() — Two Decimal Points

\`'3.14.15'\` parses as \`3.14\` — the second decimal point stops parsing.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'parseFloat',
    initialCode: `const result = Number.parseFloat('3.14.15')`,
    solution: `const result = Number.parseFloat('3.14.15')`,
    tests: [
      { description: "'3.14.15' → 3.14", assertion: "expect(Number.parseFloat('3.14.15')).toBe(3.14)" },
      { description: "'1.2.3.4' → 1.2", assertion: "expect(Number.parseFloat('1.2.3.4')).toBe(1.2)" },
      { description: "'0..5' → 0", assertion: "expect(Number.parseFloat('0..5')).toBe(0)" },
      { description: "'5.' → 5", assertion: "expect(Number.parseFloat('5.')).toBe(5)" },
      { description: "'.5' → 0.5", assertion: "expect(Number.parseFloat('.5')).toBe(0.5)" },
    ],
    hints: ['A second decimal point is not valid in a float literal, so parsing stops.'],
    tags: ['Number', 'parseFloat', 'decimal', 'intermediate'],
  },
]
