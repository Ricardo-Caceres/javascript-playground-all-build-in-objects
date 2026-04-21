import type { Exercise } from '@/shared/types/exercises'

export const toLowerCaseExercises: Exercise[] = [
  {
    slug: 'string-to-lower-case-all-caps',
    title: 'String.prototype.toLowerCase() — all caps to lowercase',
    description: `## String.prototype.toLowerCase()

\`str.toLowerCase()\` returns a new string with all letters converted to lowercase.

**Challenge:** Implement \`lower(str)\` that converts a string to lowercase.

\`\`\`ts
lower('HELLO') // → 'hello'
lower('WORLD') // → 'world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLowerCase',
    initialCode: `function lower(str: string): string {
  // Use str.toLowerCase()
}`,
    solution: `function lower(str: string): string {
  return str.toLowerCase()
}`,
    tests: [
      { description: 'HELLO becomes hello', assertion: "expect(lower('HELLO')).toBe('hello')" },
      { description: 'WORLD becomes world', assertion: "expect(lower('WORLD')).toBe('world')" },
      { description: 'ABC becomes abc', assertion: "expect(lower('ABC')).toBe('abc')" },
      { description: 'JAVASCRIPT becomes javascript', assertion: "expect(lower('JAVASCRIPT')).toBe('javascript')" },
      { description: 'XYZ becomes xyz', assertion: "expect(lower('XYZ')).toBe('xyz')" },
    ],
    hints: [
      '`toLowerCase()` converts every uppercase letter to its lowercase equivalent.',
    ],
    tags: ['String', 'String.prototype.toLowerCase', 'beginner'],
    usageExample: {
      code: `'HELLO World'.toLowerCase()   // → 'hello world'
'ABC'.toLowerCase()           // → 'abc'
'XYZ123'.toLowerCase()        // → 'xyz123'`,
      explanation: {
        en: "Use toLowerCase() to convert all alphabetical characters in a string to lowercase.",
        es: "Usa toLowerCase() para convertir todos los caracteres alfabéticos de una cadena a minúsculas.",
      },
    },
  },
  {
    slug: 'string-to-lower-case-mixed',
    title: 'String.prototype.toLowerCase() — mixed case to lowercase',
    description: `## String.prototype.toLowerCase() — Mixed Case

All uppercase letters in a mixed string are converted to lowercase.

**Challenge:** Implement \`normalize(str)\` that normalizes case to lowercase.

\`\`\`ts
normalize('HeLLo WoRLd') // → 'hello world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLowerCase',
    initialCode: `function normalize(str: string): string {
  // Use str.toLowerCase()
}`,
    solution: `function normalize(str: string): string {
  return str.toLowerCase()
}`,
    tests: [
      { description: 'HeLLo WoRLd becomes hello world', assertion: "expect(normalize('HeLLo WoRLd')).toBe('hello world')" },
      { description: 'JavaScript becomes javascript', assertion: "expect(normalize('JavaScript')).toBe('javascript')" },
      { description: 'FoO becomes foo', assertion: "expect(normalize('FoO')).toBe('foo')" },
      { description: 'MiXeD becomes mixed', assertion: "expect(normalize('MiXeD')).toBe('mixed')" },
      { description: 'CamelCase becomes camelcase', assertion: "expect(normalize('CamelCase')).toBe('camelcase')" },
    ],
    hints: [
      '`toLowerCase()` only affects uppercase letters — other characters are unchanged.',
    ],
    tags: ['String', 'String.prototype.toLowerCase', 'beginner'],
    usageExample: {
      code: `'HELLO World'.toLowerCase()   // → 'hello world'
'ABC'.toLowerCase()           // → 'abc'
'XYZ123'.toLowerCase()        // → 'xyz123'`,
      explanation: {
        en: "Use toLowerCase() to convert all alphabetical characters in a string to lowercase.",
        es: "Usa toLowerCase() para convertir todos los caracteres alfabéticos de una cadena a minúsculas.",
      },
    },
  },
  {
    slug: 'string-to-lower-case-already-lower',
    title: 'String.prototype.toLowerCase() — already lowercase unchanged',
    description: `## String.prototype.toLowerCase() — Already Lowercase

If all letters are already lowercase, \`toLowerCase()\` returns an equivalent string.

**Challenge:** Implement \`ensureLowercase(str)\` using \`toLowerCase\`.

\`\`\`ts
ensureLowercase('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLowerCase',
    initialCode: `function ensureLowercase(str: string): string {
  // Use str.toLowerCase()
}`,
    solution: `function ensureLowercase(str: string): string {
  return str.toLowerCase()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(ensureLowercase('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(ensureLowercase('world')).toBe('world')" },
      { description: 'test unchanged', assertion: "expect(ensureLowercase('test')).toBe('test')" },
      { description: 'lowercase always equals original', assertion: "expect(ensureLowercase('abcde')).toBe('abcde')" },
      { description: 'foo unchanged', assertion: "expect(ensureLowercase('foo')).toBe('foo')" },
    ],
    hints: [
      '`toLowerCase()` is safe to call on already-lowercase strings.',
    ],
    tags: ['String', 'String.prototype.toLowerCase', 'beginner'],
    usageExample: {
      code: `'HELLO World'.toLowerCase()   // → 'hello world'
'ABC'.toLowerCase()           // → 'abc'
'XYZ123'.toLowerCase()        // → 'xyz123'`,
      explanation: {
        en: "Use toLowerCase() to convert all alphabetical characters in a string to lowercase.",
        es: "Usa toLowerCase() para convertir todos los caracteres alfabéticos de una cadena a minúsculas.",
      },
    },
  },
  {
    slug: 'string-to-lower-case-numbers',
    title: 'String.prototype.toLowerCase() — numbers and symbols unchanged',
    description: `## String.prototype.toLowerCase() — Numbers Unchanged

Digits, spaces, and symbols are not affected by \`toLowerCase()\`.

**Challenge:** Implement \`lowerAlpha(str)\` that lowercases only the letters.

\`\`\`ts
lowerAlpha('ABC 123!') // → 'abc 123!'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLowerCase',
    initialCode: `function lowerAlpha(str: string): string {
  // Use str.toLowerCase() — numbers and symbols are unchanged
}`,
    solution: `function lowerAlpha(str: string): string {
  return str.toLowerCase()
}`,
    tests: [
      { description: 'ABC 123! becomes abc 123!', assertion: "expect(lowerAlpha('ABC 123!')).toBe('abc 123!')" },
      { description: 'digits only unchanged', assertion: "expect(lowerAlpha('123')).toBe('123')" },
      { description: 'symbols unchanged', assertion: "expect(lowerAlpha('!@#')).toBe('!@#')" },
      { description: 'A1B2 becomes a1b2', assertion: "expect(lowerAlpha('A1B2')).toBe('a1b2')" },
      { description: 'space unchanged', assertion: "expect(lowerAlpha('A B')).toBe('a b')" },
    ],
    hints: [
      'Only letter characters are converted; numbers, symbols, and spaces are left as-is.',
    ],
    tags: ['String', 'String.prototype.toLowerCase', 'beginner'],
    usageExample: {
      code: `'HELLO World'.toLowerCase()   // → 'hello world'
'ABC'.toLowerCase()           // → 'abc'
'XYZ123'.toLowerCase()        // → 'xyz123'`,
      explanation: {
        en: "Use toLowerCase() to convert all alphabetical characters in a string to lowercase.",
        es: "Usa toLowerCase() para convertir todos los caracteres alfabéticos de una cadena a minúsculas.",
      },
    },
  },
  {
    slug: 'string-to-lower-case-empty',
    title: 'String.prototype.toLowerCase() — empty string',
    description: `## String.prototype.toLowerCase() — Empty String

Calling \`toLowerCase()\` on an empty string returns an empty string.

**Challenge:** Implement \`safeLower(str)\` using \`toLowerCase\`.

\`\`\`ts
safeLower('') // → ''
safeLower('HI') // → 'hi'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toLowerCase',
    initialCode: `function safeLower(str: string): string {
  // Use str.toLowerCase()
}`,
    solution: `function safeLower(str: string): string {
  return str.toLowerCase()
}`,
    tests: [
      { description: 'empty string returns empty', assertion: "expect(safeLower('')).toBe('')" },
      { description: 'HI becomes hi', assertion: "expect(safeLower('HI')).toBe('hi')" },
      { description: 'single char A becomes a', assertion: "expect(safeLower('A')).toBe('a')" },
      { description: 'empty is falsy', assertion: "expect(safeLower('')).toBeFalsy()" },
      { description: 'TEST becomes test', assertion: "expect(safeLower('TEST')).toBe('test')" },
    ],
    hints: [
      '`"".toLowerCase()` returns `""`.',
    ],
    tags: ['String', 'String.prototype.toLowerCase', 'beginner'],
    usageExample: {
      code: `'HELLO World'.toLowerCase()   // → 'hello world'
'ABC'.toLowerCase()           // → 'abc'
'XYZ123'.toLowerCase()        // → 'xyz123'`,
      explanation: {
        en: "Use toLowerCase() to convert all alphabetical characters in a string to lowercase.",
        es: "Usa toLowerCase() para convertir todos los caracteres alfabéticos de una cadena a minúsculas.",
      },
    },
  },
]
