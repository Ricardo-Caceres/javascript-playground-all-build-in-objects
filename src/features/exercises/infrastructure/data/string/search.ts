import type { Exercise } from '@/shared/types/exercises'

export const searchExercises: Exercise[] = [
  {
    slug: 'string-search-index-of-match',
    title: 'String.prototype.search() — returns index of first match',
    description: `## String.prototype.search()

\`str.search(regexp)\` returns the index of the first match of \`regexp\`, or \`-1\` if not found.

**Challenge:** Implement \`findDigitIndex(str)\` that returns the index of the first digit.

\`\`\`ts
findDigitIndex('abc3def') // → 3
findDigitIndex('hello')   // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.search',
    initialCode: `function findDigitIndex(str: string): number {
  // Use str.search(/\\d/) to find the first digit
}`,
    solution: `function findDigitIndex(str: string): number {
  return str.search(/\d/)
}`,
    tests: [
      { description: 'digit at index 3', assertion: "expect(findDigitIndex('abc3def')).toBe(3)" },
      { description: 'digit at index 0', assertion: "expect(findDigitIndex('9hello')).toBe(0)" },
      { description: 'no digit returns -1', assertion: "expect(findDigitIndex('hello')).toBe(-1)" },
      { description: 'empty string returns -1', assertion: "expect(findDigitIndex('')).toBe(-1)" },
      { description: 'digit at end', assertion: "expect(findDigitIndex('hello5')).toBe(5)" },
    ],
    hints: [
      '`str.search(/\\d/)` returns the index of the first digit character.',
    ],
    tags: ['String', 'String.prototype.search', 'regex', 'beginner'],
    usageExample: {
      code: `'hello world'.search(/world/)   // → 6
'hello'.search(/\d/)           // → -1
'abc123'.search(/[0-9]/)       // → 3`,
      explanation: {
        en: "Use search() to find the index of the first regex match in a string, returning -1 if not found.",
        es: "Usa search() para encontrar el índice de la primera coincidencia de una expresión regular, devolviendo -1 si no se encuentra.",
      },
    },
  },
  {
    slug: 'string-search-not-found',
    title: 'String.prototype.search() — -1 when not found',
    description: `## String.prototype.search() — Not Found

When the regex has no match, \`.search()\` returns \`-1\`.

**Challenge:** Implement \`hasUpperCase(str)\` that returns \`true\` if the string contains an uppercase letter.

\`\`\`ts
hasUpperCase('Hello') // → true
hasUpperCase('hello') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.search',
    initialCode: `function hasUpperCase(str: string): boolean {
  // Use str.search(/[A-Z]/) !== -1
}`,
    solution: `function hasUpperCase(str: string): boolean {
  return str.search(/[A-Z]/) !== -1
}`,
    tests: [
      { description: 'Hello has uppercase', assertion: "expect(hasUpperCase('Hello')).toBe(true)" },
      { description: 'hello has no uppercase', assertion: "expect(hasUpperCase('hello')).toBe(false)" },
      { description: 'all caps is true', assertion: "expect(hasUpperCase('ABC')).toBe(true)" },
      { description: 'empty string is false', assertion: "expect(hasUpperCase('')).toBe(false)" },
      { description: 'mixed string with uppercase', assertion: "expect(hasUpperCase('hEllo')).toBe(true)" },
    ],
    hints: [
      '`str.search(/[A-Z]/)` returns `-1` if no uppercase letter is found.',
    ],
    tags: ['String', 'String.prototype.search', 'beginner'],
    usageExample: {
      code: `'hello world'.search(/world/)   // → 6
'hello'.search(/\d/)           // → -1
'abc123'.search(/[0-9]/)       // → 3`,
      explanation: {
        en: "Use search() to find the index of the first regex match in a string, returning -1 if not found.",
        es: "Usa search() para encontrar el índice de la primera coincidencia de una expresión regular, devolviendo -1 si no se encuentra.",
      },
    },
  },
  {
    slug: 'string-search-case-insensitive',
    title: 'String.prototype.search() — case-insensitive with /i',
    description: `## String.prototype.search() — Case-Insensitive

Add the \`i\` flag to make the search case-insensitive.

**Challenge:** Implement \`findWordIndex(str, word)\` that returns the index of \`word\` (case-insensitive).

\`\`\`ts
findWordIndex('Hello World', 'world') // → 6
findWordIndex('Hello World', 'HELLO') // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.search',
    initialCode: `function findWordIndex(str: string, word: string): number {
  // Use str.search(new RegExp(word, 'i')) for case-insensitive search
}`,
    solution: `function findWordIndex(str: string, word: string): number {
  return str.search(new RegExp(word, 'i'))
}`,
    tests: [
      { description: 'finds world case-insensitively', assertion: "expect(findWordIndex('Hello World', 'world')).toBe(6)" },
      { description: 'finds HELLO case-insensitively', assertion: "expect(findWordIndex('Hello World', 'HELLO')).toBe(0)" },
      { description: 'not found returns -1', assertion: "expect(findWordIndex('Hello World', 'foo')).toBe(-1)" },
      { description: 'finds mixed case', assertion: "expect(findWordIndex('abcDEF', 'def')).toBe(3)" },
      { description: 'empty string returns -1', assertion: "expect(findWordIndex('', 'abc')).toBe(-1)" },
    ],
    hints: [
      'Use `new RegExp(word, "i")` to build a case-insensitive regex dynamically.',
    ],
    tags: ['String', 'String.prototype.search', 'case-insensitive', 'intermediate'],
    usageExample: {
      code: `'hello world'.search(/world/)   // → 6
'hello'.search(/\d/)           // → -1
'abc123'.search(/[0-9]/)       // → 3`,
      explanation: {
        en: "Use search() to find the index of the first regex match in a string, returning -1 if not found.",
        es: "Usa search() para encontrar el índice de la primera coincidencia de una expresión regular, devolviendo -1 si no se encuentra.",
      },
    },
  },
  {
    slug: 'string-search-vs-indexof',
    title: 'String.prototype.search() — vs indexOf comparison',
    description: `## String.prototype.search() vs indexOf

Both return the index of a match or \`-1\`. \`search\` accepts regex; \`indexOf\` accepts only strings.

**Challenge:** Implement \`firstLetterIndex(str)\` that returns the index of the first letter using \`search\`.

\`\`\`ts
firstLetterIndex('123abc') // → 3
firstLetterIndex('hello')  // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.search',
    initialCode: `function firstLetterIndex(str: string): number {
  // Use str.search(/[a-zA-Z]/) to find the first letter
}`,
    solution: `function firstLetterIndex(str: string): number {
  return str.search(/[a-zA-Z]/)
}`,
    tests: [
      { description: 'first letter at index 3', assertion: "expect(firstLetterIndex('123abc')).toBe(3)" },
      { description: 'first letter at index 0', assertion: "expect(firstLetterIndex('hello')).toBe(0)" },
      { description: 'no letters returns -1', assertion: "expect(firstLetterIndex('123')).toBe(-1)" },
      { description: 'empty returns -1', assertion: "expect(firstLetterIndex('')).toBe(-1)" },
      { description: 'spaces then letters', assertion: "expect(firstLetterIndex('   x')).toBe(3)" },
    ],
    hints: [
      '`str.search(/[a-zA-Z]/)` behaves like `str.indexOf` for literals but supports patterns.',
    ],
    tags: ['String', 'String.prototype.search', 'beginner'],
    usageExample: {
      code: `'hello world'.search(/world/)   // → 6
'hello'.search(/\d/)           // → -1
'abc123'.search(/[0-9]/)       // → 3`,
      explanation: {
        en: "Use search() to find the index of the first regex match in a string, returning -1 if not found.",
        es: "Usa search() para encontrar el índice de la primera coincidencia de una expresión regular, devolviendo -1 si no se encuentra.",
      },
    },
  },
  {
    slug: 'string-search-position-digit',
    title: 'String.prototype.search() — position of digit',
    description: `## String.prototype.search() — Finding Digits

Use \`.search()\` to locate digits in a string.

**Challenge:** Implement \`digitPosition(str)\` that returns the position of the first digit, or \`-1\` if none.

\`\`\`ts
digitPosition('price: 5') // → 7
digitPosition('no digits') // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.search',
    initialCode: `function digitPosition(str: string): number {
  // Use str.search(/[0-9]/)
}`,
    solution: `function digitPosition(str: string): number {
  return str.search(/[0-9]/)
}`,
    tests: [
      { description: 'digit at position 7', assertion: "expect(digitPosition('price: 5')).toBe(7)" },
      { description: 'no digits returns -1', assertion: "expect(digitPosition('no digits')).toBe(-1)" },
      { description: 'digit at position 0', assertion: "expect(digitPosition('42abc')).toBe(0)" },
      { description: 'empty string returns -1', assertion: "expect(digitPosition('')).toBe(-1)" },
      { description: 'last char is digit', assertion: "expect(digitPosition('abc9')).toBe(3)" },
    ],
    hints: [
      '`/[0-9]/` is equivalent to `/\\d/` for matching digit characters.',
    ],
    tags: ['String', 'String.prototype.search', 'beginner'],
    usageExample: {
      code: `'hello world'.search(/world/)   // → 6
'hello'.search(/\d/)           // → -1
'abc123'.search(/[0-9]/)       // → 3`,
      explanation: {
        en: "Use search() to find the index of the first regex match in a string, returning -1 if not found.",
        es: "Usa search() para encontrar el índice de la primera coincidencia de una expresión regular, devolviendo -1 si no se encuentra.",
      },
    },
  },
]
