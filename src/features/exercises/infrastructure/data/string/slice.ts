import type { Exercise } from '@/shared/types/exercises'

export const stringSliceExercises: Exercise[] = [
  {
    slug: 'string-slice-basic',
    title: 'String.prototype.slice() — basic substring',
    description: `## String.prototype.slice()

\`str.slice(start, end)\` extracts a substring from index \`start\` up to (not including) \`end\`.

**Challenge:** Implement \`getMiddle(str)\` that returns characters from index 2 to 5 (exclusive).

\`\`\`ts
getMiddle('abcdefgh') // → 'cde'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.slice',
    initialCode: `function getMiddle(str: string): string {
  // Use str.slice(2, 5) to extract characters at indices 2, 3, 4
}`,
    solution: `function getMiddle(str: string): string {
  return str.slice(2, 5)
}`,
    tests: [
      { description: 'extracts cde from abcdefgh', assertion: "expect(getMiddle('abcdefgh')).toBe('cde')" },
      { description: 'extracts from index 2 to 5', assertion: "expect(getMiddle('0123456')).toBe('234')" },
      { description: 'three characters long', assertion: "expect(getMiddle('abcdefgh')).toHaveLength(3)" },
      { description: 'extracts xyz from abxyzmno', assertion: "expect(getMiddle('abxyzmno')).toBe('xyz')" },
      { description: 'extracts 234 from 0123456', assertion: "expect(getMiddle('0123456')).toBe('234')" },
    ],
    hints: [
      '`str.slice(2, 5)` extracts characters at positions 2, 3, and 4.',
    ],
    tags: ['String', 'String.prototype.slice', 'beginner'],
    usageExample: {
      code: `const str = 'Hello, World!'
str.slice(7, 12)    // → 'World'
str.slice(-6, -1)   // → 'World'
str.slice(7)        // → 'World!'`,
      explanation: {
        en: "Use slice() to extract a portion of a string by start and end indices, supporting negative indices.",
        es: "Usa slice() para extraer una porción de una cadena mediante índices de inicio y fin, admitiendo índices negativos.",
      },
    },
  },
  {
    slug: 'string-slice-negative-start',
    title: 'String.prototype.slice() — negative start (last N chars)',
    description: `## String.prototype.slice() — Negative Start

A negative \`start\` counts from the end of the string. \`str.slice(-3)\` gives the last 3 characters.

**Challenge:** Implement \`lastThree(str)\` that returns the last 3 characters.

\`\`\`ts
lastThree('abcdef') // → 'def'
lastThree('hi')     // → 'hi'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.slice',
    initialCode: `function lastThree(str: string): string {
  // Use str.slice(-3) to get the last 3 characters
}`,
    solution: `function lastThree(str: string): string {
  return str.slice(-3)
}`,
    tests: [
      { description: 'last 3 of abcdef is def', assertion: "expect(lastThree('abcdef')).toBe('def')" },
      { description: 'last 3 of hello is llo', assertion: "expect(lastThree('hello')).toBe('llo')" },
      { description: 'short string returns whole', assertion: "expect(lastThree('hi')).toBe('hi')" },
      { description: 'exactly 3 chars returns same', assertion: "expect(lastThree('xyz')).toBe('xyz')" },
      { description: 'last 3 of 123456 is 456', assertion: "expect(lastThree('123456')).toBe('456')" },
    ],
    hints: [
      '`str.slice(-3)` is equivalent to `str.slice(str.length - 3)`.',
    ],
    tags: ['String', 'String.prototype.slice', 'negative index', 'beginner'],
    usageExample: {
      code: `const str = 'Hello, World!'
str.slice(7, 12)    // → 'World'
str.slice(-6, -1)   // → 'World'
str.slice(7)        // → 'World!'`,
      explanation: {
        en: "Use slice() to extract a portion of a string by start and end indices, supporting negative indices.",
        es: "Usa slice() para extraer una porción de una cadena mediante índices de inicio y fin, admitiendo índices negativos.",
      },
    },
  },
  {
    slug: 'string-slice-negative-end',
    title: 'String.prototype.slice() — negative end',
    description: `## String.prototype.slice() — Negative End

A negative \`end\` counts from the end. \`str.slice(0, -1)\` drops the last character.

**Challenge:** Implement \`dropLast(str)\` that removes the last character.

\`\`\`ts
dropLast('hello') // → 'hell'
dropLast('ab')    // → 'a'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.slice',
    initialCode: `function dropLast(str: string): string {
  // Use str.slice(0, -1) to remove the last character
}`,
    solution: `function dropLast(str: string): string {
  return str.slice(0, -1)
}`,
    tests: [
      { description: 'drops last char of hello', assertion: "expect(dropLast('hello')).toBe('hell')" },
      { description: 'drops last char of ab', assertion: "expect(dropLast('ab')).toBe('a')" },
      { description: 'drops trailing exclamation', assertion: "expect(dropLast('yes!')).toBe('yes')" },
      { description: 'one char becomes empty', assertion: "expect(dropLast('x')).toBe('')" },
      { description: 'length is one less', assertion: "expect(dropLast('hello')).toHaveLength(4)" },
    ],
    hints: [
      '`str.slice(0, -1)` is equivalent to `str.slice(0, str.length - 1)`.',
    ],
    tags: ['String', 'String.prototype.slice', 'negative index', 'beginner'],
    usageExample: {
      code: `const str = 'Hello, World!'
str.slice(7, 12)    // → 'World'
str.slice(-6, -1)   // → 'World'
str.slice(7)        // → 'World!'`,
      explanation: {
        en: "Use slice() to extract a portion of a string by start and end indices, supporting negative indices.",
        es: "Usa slice() para extraer una porción de una cadena mediante índices de inicio y fin, admitiendo índices negativos.",
      },
    },
  },
  {
    slug: 'string-slice-omit-end',
    title: 'String.prototype.slice() — omit end to end-of-string',
    description: `## String.prototype.slice() — Omitting End

If you omit the second argument, \`.slice()\` goes to the end of the string.

**Challenge:** Implement \`fromIndex(str, n)\` that returns everything from index \`n\` onwards.

\`\`\`ts
fromIndex('hello world', 6) // → 'world'
fromIndex('abcdef', 3)      // → 'def'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.slice',
    initialCode: `function fromIndex(str: string, n: number): string {
  // Use str.slice(n) — no second argument means slice to end
}`,
    solution: `function fromIndex(str: string, n: number): string {
  return str.slice(n)
}`,
    tests: [
      { description: 'from index 6 of hello world', assertion: "expect(fromIndex('hello world', 6)).toBe('world')" },
      { description: 'from index 3 of abcdef', assertion: "expect(fromIndex('abcdef', 3)).toBe('def')" },
      { description: 'from index 0 returns full string', assertion: "expect(fromIndex('hello', 0)).toBe('hello')" },
      { description: 'from last index returns last char', assertion: "expect(fromIndex('hello', 4)).toBe('o')" },
      { description: 'from length returns empty', assertion: "expect(fromIndex('hello', 5)).toBe('')" },
    ],
    hints: [
      '`str.slice(n)` without a second argument is equivalent to `str.slice(n, str.length)`.',
    ],
    tags: ['String', 'String.prototype.slice', 'beginner'],
    usageExample: {
      code: `const str = 'Hello, World!'
str.slice(7, 12)    // → 'World'
str.slice(-6, -1)   // → 'World'
str.slice(7)        // → 'World!'`,
      explanation: {
        en: "Use slice() to extract a portion of a string by start and end indices, supporting negative indices.",
        es: "Usa slice() para extraer una porción de una cadena mediante índices de inicio y fin, admitiendo índices negativos.",
      },
    },
  },
  {
    slug: 'string-slice-single-char',
    title: 'String.prototype.slice() — slice single char',
    description: `## String.prototype.slice() — Single Character

Use \`.slice(n, n+1)\` to extract exactly one character at index \`n\`.

**Challenge:** Implement \`charAt(str, n)\` that returns the character at index \`n\` using \`slice\`.

\`\`\`ts
charAt('hello', 1) // → 'e'
charAt('world', 4) // → 'd'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.slice',
    initialCode: `function charAtSlice(str: string, n: number): string {
  // Use str.slice(n, n + 1)
}`,
    solution: `function charAtSlice(str: string, n: number): string {
  return str.slice(n, n + 1)
}`,
    tests: [
      { description: 'char at index 1 of hello is e', assertion: "expect(charAtSlice('hello', 1)).toBe('e')" },
      { description: 'char at index 4 of world is d', assertion: "expect(charAtSlice('world', 4)).toBe('d')" },
      { description: 'char at index 0', assertion: "expect(charAtSlice('abc', 0)).toBe('a')" },
      { description: 'result is single character', assertion: "expect(charAtSlice('hello', 2)).toHaveLength(1)" },
      { description: 'out of bounds returns empty', assertion: "expect(charAtSlice('hi', 10)).toBe('')" },
    ],
    hints: [
      '`str.slice(n, n + 1)` extracts exactly one character at index `n`.',
    ],
    tags: ['String', 'String.prototype.slice', 'beginner'],
    usageExample: {
      code: `const str = 'Hello, World!'
str.slice(7, 12)    // → 'World'
str.slice(-6, -1)   // → 'World'
str.slice(7)        // → 'World!'`,
      explanation: {
        en: "Use slice() to extract a portion of a string by start and end indices, supporting negative indices.",
        es: "Usa slice() para extraer una porción de una cadena mediante índices de inicio y fin, admitiendo índices negativos.",
      },
    },
  },
]
