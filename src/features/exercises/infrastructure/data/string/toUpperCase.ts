import type { Exercise } from '@/shared/types/exercises'

export const toUpperCaseExercises: Exercise[] = [
  {
    slug: 'string-to-upper-case-all-lower',
    title: 'String.prototype.toUpperCase() — all lowercase to uppercase',
    description: `## String.prototype.toUpperCase()

\`str.toUpperCase()\` returns a new string with all letters converted to uppercase.

**Challenge:** Implement \`upper(str)\` that converts a string to uppercase.

\`\`\`ts
upper('hello') // → 'HELLO'
upper('world') // → 'WORLD'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toUpperCase',
    initialCode: `function upper(str: string): string {
  // Use str.toUpperCase()
}`,
    solution: `function upper(str: string): string {
  return str.toUpperCase()
}`,
    tests: [
      { description: 'hello becomes HELLO', assertion: "expect(upper('hello')).toBe('HELLO')" },
      { description: 'world becomes WORLD', assertion: "expect(upper('world')).toBe('WORLD')" },
      { description: 'abc becomes ABC', assertion: "expect(upper('abc')).toBe('ABC')" },
      { description: 'javascript becomes JAVASCRIPT', assertion: "expect(upper('javascript')).toBe('JAVASCRIPT')" },
      { description: 'xyz becomes XYZ', assertion: "expect(upper('xyz')).toBe('XYZ')" },
    ],
    hints: [
      '`toUpperCase()` converts every lowercase letter to its uppercase equivalent.',
    ],
    tags: ['String', 'String.prototype.toUpperCase', 'beginner'],
  },
  {
    slug: 'string-to-upper-case-mixed',
    title: 'String.prototype.toUpperCase() — mixed case to uppercase',
    description: `## String.prototype.toUpperCase() — Mixed Case

All lowercase letters in a mixed string are converted to uppercase.

**Challenge:** Implement \`shout(str)\` that converts any string to uppercase.

\`\`\`ts
shout('HeLLo WoRLd') // → 'HELLO WORLD'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toUpperCase',
    initialCode: `function shout(str: string): string {
  // Use str.toUpperCase()
}`,
    solution: `function shout(str: string): string {
  return str.toUpperCase()
}`,
    tests: [
      { description: 'HeLLo WoRLd becomes HELLO WORLD', assertion: "expect(shout('HeLLo WoRLd')).toBe('HELLO WORLD')" },
      { description: 'FoO becomes FOO', assertion: "expect(shout('FoO')).toBe('FOO')" },
      { description: 'bAR becomes BAR', assertion: "expect(shout('bAR')).toBe('BAR')" },
      { description: 'MiXeD becomes MIXED', assertion: "expect(shout('MiXeD')).toBe('MIXED')" },
      { description: 'camelCase becomes CAMELCASE', assertion: "expect(shout('camelCase')).toBe('CAMELCASE')" },
    ],
    hints: [
      '`toUpperCase()` affects all lowercase letters, regardless of their position.',
    ],
    tags: ['String', 'String.prototype.toUpperCase', 'beginner'],
  },
  {
    slug: 'string-to-upper-case-already-upper',
    title: 'String.prototype.toUpperCase() — already uppercase unchanged',
    description: `## String.prototype.toUpperCase() — Already Uppercase

If all letters are already uppercase, \`toUpperCase()\` returns an equivalent string.

**Challenge:** Implement \`ensureUppercase(str)\` using \`toUpperCase\`.

\`\`\`ts
ensureUppercase('HELLO') // → 'HELLO'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toUpperCase',
    initialCode: `function ensureUppercase(str: string): string {
  // Use str.toUpperCase()
}`,
    solution: `function ensureUppercase(str: string): string {
  return str.toUpperCase()
}`,
    tests: [
      { description: 'HELLO unchanged', assertion: "expect(ensureUppercase('HELLO')).toBe('HELLO')" },
      { description: 'WORLD unchanged', assertion: "expect(ensureUppercase('WORLD')).toBe('WORLD')" },
      { description: 'ABC unchanged', assertion: "expect(ensureUppercase('ABC')).toBe('ABC')" },
      { description: 'always equals original when already upper', assertion: "expect(ensureUppercase('ABCDE')).toBe('ABCDE')" },
      { description: 'FOO unchanged', assertion: "expect(ensureUppercase('FOO')).toBe('FOO')" },
    ],
    hints: [
      '`toUpperCase()` is safe to call on already-uppercase strings.',
    ],
    tags: ['String', 'String.prototype.toUpperCase', 'beginner'],
  },
  {
    slug: 'string-to-upper-case-numbers',
    title: 'String.prototype.toUpperCase() — numbers and symbols unchanged',
    description: `## String.prototype.toUpperCase() — Numbers Unchanged

Digits, spaces, and symbols are not affected by \`toUpperCase()\`.

**Challenge:** Implement \`upperAlpha(str)\` that uppercases only the letters.

\`\`\`ts
upperAlpha('abc 123!') // → 'ABC 123!'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toUpperCase',
    initialCode: `function upperAlpha(str: string): string {
  // Use str.toUpperCase() — numbers and symbols are unchanged
}`,
    solution: `function upperAlpha(str: string): string {
  return str.toUpperCase()
}`,
    tests: [
      { description: 'abc 123! becomes ABC 123!', assertion: "expect(upperAlpha('abc 123!')).toBe('ABC 123!')" },
      { description: 'digits only unchanged', assertion: "expect(upperAlpha('123')).toBe('123')" },
      { description: 'symbols unchanged', assertion: "expect(upperAlpha('!@#')).toBe('!@#')" },
      { description: 'a1b2 becomes A1B2', assertion: "expect(upperAlpha('a1b2')).toBe('A1B2')" },
      { description: 'space unchanged', assertion: "expect(upperAlpha('a b')).toBe('A B')" },
    ],
    hints: [
      'Only letter characters are converted; numbers, symbols, and spaces are left as-is.',
    ],
    tags: ['String', 'String.prototype.toUpperCase', 'beginner'],
  },
  {
    slug: 'string-to-upper-case-empty',
    title: 'String.prototype.toUpperCase() — empty string',
    description: `## String.prototype.toUpperCase() — Empty String

Calling \`toUpperCase()\` on an empty string returns an empty string.

**Challenge:** Implement \`safeUpper(str)\` using \`toUpperCase\`.

\`\`\`ts
safeUpper('') // → ''
safeUpper('hi') // → 'HI'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toUpperCase',
    initialCode: `function safeUpper(str: string): string {
  // Use str.toUpperCase()
}`,
    solution: `function safeUpper(str: string): string {
  return str.toUpperCase()
}`,
    tests: [
      { description: 'empty string returns empty', assertion: "expect(safeUpper('')).toBe('')" },
      { description: 'hi becomes HI', assertion: "expect(safeUpper('hi')).toBe('HI')" },
      { description: 'single char a becomes A', assertion: "expect(safeUpper('a')).toBe('A')" },
      { description: 'empty is falsy', assertion: "expect(safeUpper('')).toBeFalsy()" },
      { description: 'test becomes TEST', assertion: "expect(safeUpper('test')).toBe('TEST')" },
    ],
    hints: [
      '`"".toUpperCase()` returns `""`.',
    ],
    tags: ['String', 'String.prototype.toUpperCase', 'beginner'],
  },
]
