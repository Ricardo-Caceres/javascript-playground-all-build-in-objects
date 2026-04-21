import type { Exercise } from '@/shared/types/exercises'

export const isWellFormedExercises: Exercise[] = [
  {
    slug: 'string-is-well-formed-normal',
    title: 'String.prototype.isWellFormed() — normal string is true',
    description: `## String.prototype.isWellFormed()

\`str.isWellFormed()\` returns \`true\` if the string contains no lone surrogate code units (i.e., it is a valid Unicode string).

This is an **ES2024** method.

**Challenge:** Implement \`checkWellFormed(str)\` that returns \`str.isWellFormed()\`.

\`\`\`ts
checkWellFormed('hello') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.isWellFormed',
    initialCode: `function checkWellFormed(str: string): boolean {
  // Use str.isWellFormed()
}`,
    solution: `function checkWellFormed(str: string): boolean {
  return str.isWellFormed()
}`,
    tests: [
      { description: 'hello is well-formed', assertion: "expect(checkWellFormed('hello')).toBe(true)" },
      { description: 'empty string is well-formed', assertion: "expect(checkWellFormed('')).toBe(true)" },
      { description: 'ASCII is well-formed', assertion: "expect(checkWellFormed('ABC123')).toBe(true)" },
      { description: 'emoji is well-formed', assertion: "expect(checkWellFormed('😀')).toBe(true)" },
      { description: 'mixed text is well-formed', assertion: "expect(checkWellFormed('Hello 😀 World')).toBe(true)" },
    ],
    hints: [
      'Normal strings that do not contain lone surrogates are always well-formed.',
    ],
    tags: ['String', 'String.prototype.isWellFormed', 'ES2024', 'intermediate'],
    usageExample: {
      code: `'hello'.isWellFormed()      // → true
'😀'.isWellFormed()         // → true
'\uD800'.isWellFormed()     // → false`,
      explanation: {
        en: "Use isWellFormed() to check if a string contains no lone surrogate code units (ES2024).",
        es: "Usa isWellFormed() para verificar si una cadena no contiene unidades de código sustituto solitarias (ES2024).",
      },
    },
  },
  {
    slug: 'string-is-well-formed-lone-surrogate',
    title: 'String.prototype.isWellFormed() — lone surrogate is false',
    description: `## String.prototype.isWellFormed() — Lone Surrogate

A string containing a lone high surrogate (\`\\uD800\`) is not well-formed.

**Challenge:** Implement \`hasLoneSurrogate()\` that returns \`true\` when the string \`'\\uD800'\` is NOT well-formed.

\`\`\`ts
hasLoneSurrogate() // → true  (it is NOT well-formed)
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.isWellFormed',
    initialCode: `function hasLoneSurrogate(): boolean {
  // Return true when '\uD800'.isWellFormed() === false
}`,
    solution: `function hasLoneSurrogate(): boolean {
  return !'\uD800'.isWellFormed()
}`,
    tests: [
      { description: 'lone high surrogate is not well-formed', assertion: "expect('\\uD800'.isWellFormed()).toBe(false)" },
      { description: 'lone low surrogate is not well-formed', assertion: "expect('\\uDC00'.isWellFormed()).toBe(false)" },
      { description: 'hasLoneSurrogate returns true', assertion: "expect(hasLoneSurrogate()).toBe(true)" },
      { description: 'normal string is well-formed', assertion: "expect('hello'.isWellFormed()).toBe(true)" },
      { description: 'paired surrogates (emoji) are well-formed', assertion: "expect('😀'.isWellFormed()).toBe(true)" },
    ],
    hints: [
      'A lone surrogate (without its pair) makes a string not well-formed.',
    ],
    tags: ['String', 'String.prototype.isWellFormed', 'surrogate', 'intermediate'],
    usageExample: {
      code: `'hello'.isWellFormed()      // → true
'😀'.isWellFormed()         // → true
'\uD800'.isWellFormed()     // → false`,
      explanation: {
        en: "Use isWellFormed() to check if a string contains no lone surrogate code units (ES2024).",
        es: "Usa isWellFormed() para verificar si una cadena no contiene unidades de código sustituto solitarias (ES2024).",
      },
    },
  },
  {
    slug: 'string-is-well-formed-emoji',
    title: 'String.prototype.isWellFormed() — emoji string is true',
    description: `## String.prototype.isWellFormed() — Emoji

An emoji like '😀' is stored as a valid surrogate pair, so it IS well-formed.

**Challenge:** Implement \`emojiIsWellFormed()\` that returns \`'😀'.isWellFormed()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.isWellFormed',
    initialCode: `function emojiIsWellFormed(): boolean {
  // Return '😀'.isWellFormed()
}`,
    solution: `function emojiIsWellFormed(): boolean {
  return '😀'.isWellFormed()
}`,
    tests: [
      { description: 'emoji is well-formed', assertion: "expect(emojiIsWellFormed()).toBe(true)" },
      { description: '😁 is also well-formed', assertion: "expect('😁'.isWellFormed()).toBe(true)" },
      { description: '❤ is well-formed', assertion: "expect('❤'.isWellFormed()).toBe(true)" },
      { description: 'multi-emoji string is well-formed', assertion: "expect('😀😁😂'.isWellFormed()).toBe(true)" },
      { description: 'result is boolean', assertion: "expect(typeof emojiIsWellFormed()).toBe('boolean')" },
    ],
    hints: [
      'Emoji are encoded as proper surrogate pairs, so they pass the well-formedness check.',
    ],
    tags: ['String', 'String.prototype.isWellFormed', 'emoji', 'beginner'],
    usageExample: {
      code: `'hello'.isWellFormed()      // → true
'😀'.isWellFormed()         // → true
'\uD800'.isWellFormed()     // → false`,
      explanation: {
        en: "Use isWellFormed() to check if a string contains no lone surrogate code units (ES2024).",
        es: "Usa isWellFormed() para verificar si una cadena no contiene unidades de código sustituto solitarias (ES2024).",
      },
    },
  },
  {
    slug: 'string-is-well-formed-empty',
    title: 'String.prototype.isWellFormed() — empty string is true',
    description: `## String.prototype.isWellFormed() — Empty String

An empty string has no code units, so it cannot contain lone surrogates. It is well-formed.

**Challenge:** Implement \`emptyIsWellFormed()\` that returns \`''.isWellFormed()\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.isWellFormed',
    initialCode: `function emptyIsWellFormed(): boolean {
  // Return ''.isWellFormed()
}`,
    solution: `function emptyIsWellFormed(): boolean {
  return ''.isWellFormed()
}`,
    tests: [
      { description: 'empty string is well-formed', assertion: "expect(emptyIsWellFormed()).toBe(true)" },
      { description: 'result is boolean', assertion: "expect(typeof emptyIsWellFormed()).toBe('boolean')" },
      { description: 'result is true', assertion: "expect(emptyIsWellFormed()).toBeTruthy()" },
      { description: 'space is well-formed', assertion: "expect(' '.isWellFormed()).toBe(true)" },
      { description: 'newline is well-formed', assertion: "expect('\\n'.isWellFormed()).toBe(true)" },
    ],
    hints: [
      'An empty string trivially satisfies the well-formedness condition.',
    ],
    tags: ['String', 'String.prototype.isWellFormed', 'empty string', 'beginner'],
    usageExample: {
      code: `'hello'.isWellFormed()      // → true
'😀'.isWellFormed()         // → true
'\uD800'.isWellFormed()     // → false`,
      explanation: {
        en: "Use isWellFormed() to check if a string contains no lone surrogate code units (ES2024).",
        es: "Usa isWellFormed() para verificar si una cadena no contiene unidades de código sustituto solitarias (ES2024).",
      },
    },
  },
  {
    slug: 'string-is-well-formed-mixed',
    title: 'String.prototype.isWellFormed() — mixed surrogate string',
    description: `## String.prototype.isWellFormed() — Mixed Content

A string containing even one lone surrogate is not well-formed, regardless of other content.

**Challenge:** Implement \`mixedSurrogateWellFormed()\` that returns whether \`'hello\\uD800world'\` is well-formed.

\`\`\`ts
mixedSurrogateWellFormed() // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.isWellFormed',
    initialCode: `function mixedSurrogateWellFormed(): boolean {
  // Return 'hello\uD800world'.isWellFormed()
}`,
    solution: `function mixedSurrogateWellFormed(): boolean {
  return 'hello\uD800world'.isWellFormed()
}`,
    tests: [
      { description: 'mixed string with lone surrogate is false', assertion: "expect(mixedSurrogateWellFormed()).toBe(false)" },
      { description: 'hello alone is well-formed', assertion: "expect('hello'.isWellFormed()).toBe(true)" },
      { description: 'world alone is well-formed', assertion: "expect('world'.isWellFormed()).toBe(true)" },
      { description: 'lone high surrogate anywhere breaks it', assertion: "expect('a\\uD800b'.isWellFormed()).toBe(false)" },
      { description: 'lone low surrogate also breaks it', assertion: "expect('a\\uDC00b'.isWellFormed()).toBe(false)" },
    ],
    hints: [
      'A single lone surrogate anywhere in the string makes it not well-formed.',
    ],
    tags: ['String', 'String.prototype.isWellFormed', 'surrogate', 'intermediate'],
    usageExample: {
      code: `'hello'.isWellFormed()      // → true
'😀'.isWellFormed()         // → true
'\uD800'.isWellFormed()     // → false`,
      explanation: {
        en: "Use isWellFormed() to check if a string contains no lone surrogate code units (ES2024).",
        es: "Usa isWellFormed() para verificar si una cadena no contiene unidades de código sustituto solitarias (ES2024).",
      },
    },
  },
]
