import type { Exercise } from '@/shared/types/exercises'

export const toLocaleUpperCaseExercises: Exercise[] = [
  {
    slug: 'string-to-locale-upper-case-basic',
    title: 'String.prototype.toLocaleUpperCase() — basic ASCII uppercase',
    description: `## String.prototype.toLocaleUpperCase()

\`str.toLocaleUpperCase()\` converts a string to uppercase using the host locale's rules. For ASCII strings, the result is deterministic.

**Challenge:** Implement \`localeUpper(str)\` that converts the string to uppercase.

\`\`\`ts
localeUpper('hello') // → 'HELLO'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleUpperCase',
    initialCode: `function localeUpper(str: string): string {
  // Use str.toLocaleUpperCase()
}`,
    solution: `function localeUpper(str: string): string {
  return str.toLocaleUpperCase()
}`,
    tests: [
      { description: 'hello becomes HELLO', assertion: "expect(localeUpper('hello')).toBe('HELLO')" },
      { description: 'world becomes WORLD', assertion: "expect(localeUpper('world')).toBe('WORLD')" },
      { description: 'abc becomes ABC', assertion: "expect(localeUpper('abc')).toBe('ABC')" },
      { description: 'empty string unchanged', assertion: "expect(localeUpper('')).toBe('')" },
      { description: 'xyz becomes XYZ', assertion: "expect(localeUpper('xyz')).toBe('XYZ')" },
    ],
    hints: [
      'For ASCII strings, `toLocaleUpperCase()` behaves identically to `toUpperCase()`.',
    ],
    tags: ['String', 'String.prototype.toLocaleUpperCase', 'beginner'],
    usageExample: {
      code: `'hello'.toLocaleUpperCase()   // → 'HELLO'
'world'.toLocaleUpperCase()   // → 'WORLD'
'abc123'.toLocaleUpperCase()  // → 'ABC123'`,
      explanation: {
        en: "Use toLocaleUpperCase() to convert a string to uppercase using the locale-specific rules of the host environment.",
        es: "Usa toLocaleUpperCase() para convertir una cadena a mayúsculas usando las reglas específicas del locale del sistema.",
      },
    },
  },
  {
    slug: 'string-to-locale-upper-case-mixed',
    title: 'String.prototype.toLocaleUpperCase() — mixed case',
    description: `## String.prototype.toLocaleUpperCase() — Mixed Case

Mixed-case ASCII strings are fully uppercased.

**Challenge:** Implement \`normalizeUpper(str)\` that uppercases any ASCII string.

\`\`\`ts
normalizeUpper('HeLLo WoRLd') // → 'HELLO WORLD'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleUpperCase',
    initialCode: `function normalizeUpper(str: string): string {
  // Use str.toLocaleUpperCase()
}`,
    solution: `function normalizeUpper(str: string): string {
  return str.toLocaleUpperCase()
}`,
    tests: [
      { description: 'HeLLo WoRLd becomes HELLO WORLD', assertion: "expect(normalizeUpper('HeLLo WoRLd')).toBe('HELLO WORLD')" },
      { description: 'FoO becomes FOO', assertion: "expect(normalizeUpper('FoO')).toBe('FOO')" },
      { description: 'bAR becomes BAR', assertion: "expect(normalizeUpper('bAR')).toBe('BAR')" },
      { description: 'already uppercase unchanged', assertion: "expect(normalizeUpper('HELLO')).toBe('HELLO')" },
      { description: 'MiXeD becomes MIXED', assertion: "expect(normalizeUpper('MiXeD')).toBe('MIXED')" },
    ],
    hints: [
      'Every lowercase ASCII letter is converted to its uppercase equivalent.',
    ],
    tags: ['String', 'String.prototype.toLocaleUpperCase', 'beginner'],
    usageExample: {
      code: `'hello'.toLocaleUpperCase()   // → 'HELLO'
'world'.toLocaleUpperCase()   // → 'WORLD'
'abc123'.toLocaleUpperCase()  // → 'ABC123'`,
      explanation: {
        en: "Use toLocaleUpperCase() to convert a string to uppercase using the locale-specific rules of the host environment.",
        es: "Usa toLocaleUpperCase() para convertir una cadena a mayúsculas usando las reglas específicas del locale del sistema.",
      },
    },
  },
  {
    slug: 'string-to-locale-upper-case-already-upper',
    title: 'String.prototype.toLocaleUpperCase() — already uppercase',
    description: `## String.prototype.toLocaleUpperCase() — Already Uppercase

If the string is already uppercase, \`toLocaleUpperCase()\` returns an equal string.

**Challenge:** Implement \`ensureUpper(str)\` and verify it works on already-uppercase strings.

\`\`\`ts
ensureUpper('HELLO') // → 'HELLO'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleUpperCase',
    initialCode: `function ensureUpper(str: string): string {
  // Use str.toLocaleUpperCase()
}`,
    solution: `function ensureUpper(str: string): string {
  return str.toLocaleUpperCase()
}`,
    tests: [
      { description: 'HELLO unchanged', assertion: "expect(ensureUpper('HELLO')).toBe('HELLO')" },
      { description: 'WORLD unchanged', assertion: "expect(ensureUpper('WORLD')).toBe('WORLD')" },
      { description: 'ABC unchanged', assertion: "expect(ensureUpper('ABC')).toBe('ABC')" },
      { description: 'FOO unchanged', assertion: "expect(ensureUpper('FOO')).toBe('FOO')" },
      { description: 'BAR unchanged', assertion: "expect(ensureUpper('BAR')).toBe('BAR')" },
    ],
    hints: [
      'Calling `toLocaleUpperCase()` on an uppercase string is a no-op.',
    ],
    tags: ['String', 'String.prototype.toLocaleUpperCase', 'beginner'],
    usageExample: {
      code: `'hello'.toLocaleUpperCase()   // → 'HELLO'
'world'.toLocaleUpperCase()   // → 'WORLD'
'abc123'.toLocaleUpperCase()  // → 'ABC123'`,
      explanation: {
        en: "Use toLocaleUpperCase() to convert a string to uppercase using the locale-specific rules of the host environment.",
        es: "Usa toLocaleUpperCase() para convertir una cadena a mayúsculas usando las reglas específicas del locale del sistema.",
      },
    },
  },
  {
    slug: 'string-to-locale-upper-case-numbers',
    title: 'String.prototype.toLocaleUpperCase() — numbers unchanged',
    description: `## String.prototype.toLocaleUpperCase() — Non-Letter Characters

Digits and symbols are not affected by \`toLocaleUpperCase()\`.

**Challenge:** Implement \`upperLettersOnly(str)\` that uppercases a string with mixed letters and numbers.

\`\`\`ts
upperLettersOnly('abc123') // → 'ABC123'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleUpperCase',
    initialCode: `function upperLettersOnly(str: string): string {
  // Use str.toLocaleUpperCase() — only letters are affected
}`,
    solution: `function upperLettersOnly(str: string): string {
  return str.toLocaleUpperCase()
}`,
    tests: [
      { description: 'abc123 becomes ABC123', assertion: "expect(upperLettersOnly('abc123')).toBe('ABC123')" },
      { description: 'a1b2 becomes A1B2', assertion: "expect(upperLettersOnly('a1b2')).toBe('A1B2')" },
      { description: 'digits only unchanged', assertion: "expect(upperLettersOnly('123')).toBe('123')" },
      { description: 'symbols unchanged', assertion: "expect(upperLettersOnly('!@#')).toBe('!@#')" },
      { description: 'mixed letters and digits', assertion: "expect(upperLettersOnly('xy99z')).toBe('XY99Z')" },
    ],
    hints: [
      'Numbers and punctuation have no concept of case and are returned unchanged.',
    ],
    tags: ['String', 'String.prototype.toLocaleUpperCase', 'beginner'],
    usageExample: {
      code: `'hello'.toLocaleUpperCase()   // → 'HELLO'
'world'.toLocaleUpperCase()   // → 'WORLD'
'abc123'.toLocaleUpperCase()  // → 'ABC123'`,
      explanation: {
        en: "Use toLocaleUpperCase() to convert a string to uppercase using the locale-specific rules of the host environment.",
        es: "Usa toLocaleUpperCase() para convertir una cadena a mayúsculas usando las reglas específicas del locale del sistema.",
      },
    },
  },
  {
    slug: 'string-to-locale-upper-case-empty',
    title: 'String.prototype.toLocaleUpperCase() — empty string',
    description: `## String.prototype.toLocaleUpperCase() — Empty String

Calling \`toLocaleUpperCase()\` on an empty string returns an empty string.

**Challenge:** Implement \`safeLocaleUpper(str)\` and handle the empty string case.

\`\`\`ts
safeLocaleUpper('') // → ''
safeLocaleUpper('hi') // → 'HI'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLocaleUpperCase',
    initialCode: `function safeLocaleUpper(str: string): string {
  // Use str.toLocaleUpperCase()
}`,
    solution: `function safeLocaleUpper(str: string): string {
  return str.toLocaleUpperCase()
}`,
    tests: [
      { description: 'empty string returns empty', assertion: "expect(safeLocaleUpper('')).toBe('')" },
      { description: 'hi becomes HI', assertion: "expect(safeLocaleUpper('hi')).toBe('HI')" },
      { description: 'single lowercase char', assertion: "expect(safeLocaleUpper('a')).toBe('A')" },
      { description: 'result is falsy for empty', assertion: "expect(safeLocaleUpper('')).toBeFalsy()" },
      { description: 'test becomes TEST', assertion: "expect(safeLocaleUpper('test')).toBe('TEST')" },
    ],
    hints: [
      '`"".toLocaleUpperCase()` returns `""`.',
    ],
    tags: ['String', 'String.prototype.toLocaleUpperCase', 'beginner'],
    usageExample: {
      code: `'hello'.toLocaleUpperCase()   // → 'HELLO'
'world'.toLocaleUpperCase()   // → 'WORLD'
'abc123'.toLocaleUpperCase()  // → 'ABC123'`,
      explanation: {
        en: "Use toLocaleUpperCase() to convert a string to uppercase using the locale-specific rules of the host environment.",
        es: "Usa toLocaleUpperCase() para convertir una cadena a mayúsculas usando las reglas específicas del locale del sistema.",
      },
    },
  },
]
