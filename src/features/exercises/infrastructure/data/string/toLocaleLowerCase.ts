import type { Exercise } from '@/shared/types/exercises'

export const toLocaleLowerCaseExercises: Exercise[] = [
  {
    slug: 'string-to-locale-lower-case-basic',
    title: 'String.prototype.toLocaleLowerCase() — basic ASCII lowercase',
    description: `## String.prototype.toLocaleLowerCase()

\`str.toLocaleLowerCase()\` converts a string to lowercase using the host locale's rules. For ASCII strings, the result is deterministic and identical to \`toLowerCase()\`.

**Challenge:** Implement \`localeLower(str)\` that converts the string to lowercase.

\`\`\`ts
localeLower('HELLO') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleLowerCase',
    initialCode: `function localeLower(str: string): string {
  // Use str.toLocaleLowerCase()
}`,
    solution: `function localeLower(str: string): string {
  return str.toLocaleLowerCase()
}`,
    tests: [
      { description: 'HELLO becomes hello', assertion: "expect(localeLower('HELLO')).toBe('hello')" },
      { description: 'WORLD becomes world', assertion: "expect(localeLower('WORLD')).toBe('world')" },
      { description: 'ABC becomes abc', assertion: "expect(localeLower('ABC')).toBe('abc')" },
      { description: 'empty string unchanged', assertion: "expect(localeLower('')).toBe('')" },
      { description: 'XYZ becomes xyz', assertion: "expect(localeLower('XYZ')).toBe('xyz')" },
    ],
    hints: [
      'For ASCII strings, `toLocaleLowerCase()` behaves identically to `toLowerCase()`.',
    ],
    tags: ['String', 'String.prototype.toLocaleLowerCase', 'beginner'],
  },
  {
    slug: 'string-to-locale-lower-case-mixed',
    title: 'String.prototype.toLocaleLowerCase() — mixed case',
    description: `## String.prototype.toLocaleLowerCase() — Mixed Case

Mixed-case ASCII strings are fully lowercased.

**Challenge:** Implement \`normalizeLower(str)\` that lowercases any ASCII string.

\`\`\`ts
normalizeLower('HeLLo WoRLd') // → 'hello world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleLowerCase',
    initialCode: `function normalizeLower(str: string): string {
  // Use str.toLocaleLowerCase()
}`,
    solution: `function normalizeLower(str: string): string {
  return str.toLocaleLowerCase()
}`,
    tests: [
      { description: 'HeLLo WoRLd becomes hello world', assertion: "expect(normalizeLower('HeLLo WoRLd')).toBe('hello world')" },
      { description: 'FoO becomes foo', assertion: "expect(normalizeLower('FoO')).toBe('foo')" },
      { description: 'bAR becomes bar', assertion: "expect(normalizeLower('bAR')).toBe('bar')" },
      { description: 'already lowercase unchanged', assertion: "expect(normalizeLower('hello')).toBe('hello')" },
      { description: 'MiXeD becomes mixed', assertion: "expect(normalizeLower('MiXeD')).toBe('mixed')" },
    ],
    hints: [
      'Every uppercase ASCII letter is converted to its lowercase equivalent.',
    ],
    tags: ['String', 'String.prototype.toLocaleLowerCase', 'beginner'],
  },
  {
    slug: 'string-to-locale-lower-case-already-lower',
    title: 'String.prototype.toLocaleLowerCase() — already lowercase',
    description: `## String.prototype.toLocaleLowerCase() — Already Lowercase

If the string is already lowercase, \`toLocaleLowerCase()\` returns an equal string.

**Challenge:** Implement \`ensureLower(str)\` and verify it works on already-lowercase strings.

\`\`\`ts
ensureLower('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleLowerCase',
    initialCode: `function ensureLower(str: string): string {
  // Use str.toLocaleLowerCase()
}`,
    solution: `function ensureLower(str: string): string {
  return str.toLocaleLowerCase()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(ensureLower('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(ensureLower('world')).toBe('world')" },
      { description: 'abc unchanged', assertion: "expect(ensureLower('abc')).toBe('abc')" },
      { description: 'foo unchanged', assertion: "expect(ensureLower('foo')).toBe('foo')" },
      { description: 'bar unchanged', assertion: "expect(ensureLower('bar')).toBe('bar')" },
    ],
    hints: [
      'Calling `toLocaleLowerCase()` on a lowercase string is a no-op.',
    ],
    tags: ['String', 'String.prototype.toLocaleLowerCase', 'beginner'],
  },
  {
    slug: 'string-to-locale-lower-case-numbers',
    title: 'String.prototype.toLocaleLowerCase() — numbers and symbols unchanged',
    description: `## String.prototype.toLocaleLowerCase() — Non-Letter Characters

Digits and symbols are not affected by \`toLocaleLowerCase()\`.

**Challenge:** Implement \`lowerLettersOnly(str)\` that lowercases a string with mixed letters and numbers.

\`\`\`ts
lowerLettersOnly('ABC123') // → 'abc123'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleLowerCase',
    initialCode: `function lowerLettersOnly(str: string): string {
  // Use str.toLocaleLowerCase() — only letters are affected
}`,
    solution: `function lowerLettersOnly(str: string): string {
  return str.toLocaleLowerCase()
}`,
    tests: [
      { description: 'ABC123 becomes abc123', assertion: "expect(lowerLettersOnly('ABC123')).toBe('abc123')" },
      { description: 'A1B2 becomes a1b2', assertion: "expect(lowerLettersOnly('A1B2')).toBe('a1b2')" },
      { description: 'digits only unchanged', assertion: "expect(lowerLettersOnly('123')).toBe('123')" },
      { description: 'symbols unchanged', assertion: "expect(lowerLettersOnly('!@#')).toBe('!@#')" },
      { description: 'mixed letters and digits', assertion: "expect(lowerLettersOnly('XY99Z')).toBe('xy99z')" },
    ],
    hints: [
      'Numbers and punctuation have no concept of case and are returned unchanged.',
    ],
    tags: ['String', 'String.prototype.toLocaleLowerCase', 'beginner'],
  },
  {
    slug: 'string-to-locale-lower-case-empty',
    title: 'String.prototype.toLocaleLowerCase() — empty string',
    description: `## String.prototype.toLocaleLowerCase() — Empty String

Calling \`toLocaleLowerCase()\` on an empty string returns an empty string.

**Challenge:** Implement \`safeLocaleLower(str)\` and handle the empty string case.

\`\`\`ts
safeLocaleLower('') // → ''
safeLocaleLower('HI') // → 'hi'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleLowerCase',
    initialCode: `function safeLocaleLower(str: string): string {
  // Use str.toLocaleLowerCase()
}`,
    solution: `function safeLocaleLower(str: string): string {
  return str.toLocaleLowerCase()
}`,
    tests: [
      { description: 'empty string returns empty', assertion: "expect(safeLocaleLower('')).toBe('')" },
      { description: 'HI becomes hi', assertion: "expect(safeLocaleLower('HI')).toBe('hi')" },
      { description: 'single uppercase char', assertion: "expect(safeLocaleLower('A')).toBe('a')" },
      { description: 'result is falsy for empty', assertion: "expect(safeLocaleLower('')).toBeFalsy()" },
      { description: 'TEST becomes test', assertion: "expect(safeLocaleLower('TEST')).toBe('test')" },
    ],
    hints: [
      '`"".toLocaleLowerCase()` returns `""`.',
    ],
    tags: ['String', 'String.prototype.toLocaleLowerCase', 'beginner'],
  },
]
