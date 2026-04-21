import type { Exercise } from '@/shared/types/exercises'

export const fromCharCodeExercises: Exercise[] = [
  {
    slug: 'string-from-char-code-basic',
    title: 'String.fromCharCode() — single character',
    description: `## String.fromCharCode()

\`String.fromCharCode(...codes)\` returns a string from one or more UTF-16 code unit values.

**Challenge:** Implement \`charFromCode(code)\` that returns the character for the given char code.

\`\`\`ts
charFromCode(65) // → 'A'
charFromCode(97) // → 'a'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.fromCharCode',
    initialCode: `function charFromCode(code: number): string {
  // Use String.fromCharCode(code) to get the character
}`,
    solution: `function charFromCode(code: number): string {
  return String.fromCharCode(code)
}`,
    tests: [
      { description: 'code 65 is A', assertion: "expect(charFromCode(65)).toBe('A')" },
      { description: 'code 97 is a', assertion: "expect(charFromCode(97)).toBe('a')" },
      { description: 'code 48 is 0', assertion: "expect(charFromCode(48)).toBe('0')" },
      { description: 'code 32 is space', assertion: "expect(charFromCode(32)).toBe(' ')" },
      { description: 'result is single character', assertion: "expect(charFromCode(65)).toHaveLength(1)" },
    ],
    hints: [
      'ASCII code 65 = A, 97 = a, 48 = 0, 32 = space.',
    ],
    tags: ['String', 'String.fromCharCode', 'ASCII', 'beginner'],
    usageExample: {
      code: `String.fromCharCode(65)        // → 'A'
String.fromCharCode(97)        // → 'a'
String.fromCharCode(72, 105)   // → 'Hi'`,
      explanation: {
        en: "Use String.fromCharCode() to create a string from one or more UTF-16 char code values.",
        es: "Usa String.fromCharCode() para crear una cadena a partir de uno o más valores de código de carácter UTF-16.",
      },
    },
  },
  {
    slug: 'string-from-char-code-word',
    title: 'String.fromCharCode() — build a word',
    description: `## String.fromCharCode() — Multiple Codes

Pass multiple code values to build a string in one call.

**Challenge:** Implement \`buildWord(codes)\` that converts an array of char codes to a string.

\`\`\`ts
buildWord([72, 105]) // → 'Hi'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.fromCharCode',
    initialCode: `function buildWord(codes: number[]): string {
  // Use String.fromCharCode(...codes) to build the string
}`,
    solution: `function buildWord(codes: number[]): string {
  return String.fromCharCode(...codes)
}`,
    tests: [
      { description: 'builds Hi', assertion: "expect(buildWord([72, 105])).toBe('Hi')" },
      { description: 'builds ABC', assertion: "expect(buildWord([65, 66, 67])).toBe('ABC')" },
      { description: 'builds hello', assertion: "expect(buildWord([104, 101, 108, 108, 111])).toBe('hello')" },
      { description: 'single code', assertion: "expect(buildWord([90])).toBe('Z')" },
      { description: 'empty array', assertion: "expect(buildWord([])).toBe('')" },
    ],
    hints: [
      'Spread the array as arguments: `String.fromCharCode(...codes)`.',
    ],
    tags: ['String', 'String.fromCharCode', 'spread', 'beginner'],
    usageExample: {
      code: `String.fromCharCode(65)        // → 'A'
String.fromCharCode(97)        // → 'a'
String.fromCharCode(72, 105)   // → 'Hi'`,
      explanation: {
        en: "Use String.fromCharCode() to create a string from one or more UTF-16 char code values.",
        es: "Usa String.fromCharCode() para crear una cadena a partir de uno o más valores de código de carácter UTF-16.",
      },
    },
  },
  {
    slug: 'string-from-char-code-uppercase-range',
    title: 'String.fromCharCode() — uppercase alphabet range',
    description: `## String.fromCharCode() — ASCII Range

The uppercase letters A–Z are codes 65–90.

**Challenge:** Implement \`getUppercaseLetter(n)\` that returns the nth uppercase letter (0-indexed, so 0 → 'A', 25 → 'Z').

\`\`\`ts
getUppercaseLetter(0)  // → 'A'
getUppercaseLetter(25) // → 'Z'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.fromCharCode',
    initialCode: `function getUppercaseLetter(n: number): string {
  // A is charCode 65. Return String.fromCharCode(65 + n)
}`,
    solution: `function getUppercaseLetter(n: number): string {
  return String.fromCharCode(65 + n)
}`,
    tests: [
      { description: 'n=0 is A', assertion: "expect(getUppercaseLetter(0)).toBe('A')" },
      { description: 'n=25 is Z', assertion: "expect(getUppercaseLetter(25)).toBe('Z')" },
      { description: 'n=1 is B', assertion: "expect(getUppercaseLetter(1)).toBe('B')" },
      { description: 'n=4 is E', assertion: "expect(getUppercaseLetter(4)).toBe('E')" },
      { description: 'result is one char', assertion: "expect(getUppercaseLetter(10)).toHaveLength(1)" },
    ],
    hints: [
      'A = 65, B = 66, … Z = 90. So the nth letter is `String.fromCharCode(65 + n)`.',
    ],
    tags: ['String', 'String.fromCharCode', 'ASCII', 'beginner'],
    usageExample: {
      code: `String.fromCharCode(65)        // → 'A'
String.fromCharCode(97)        // → 'a'
String.fromCharCode(72, 105)   // → 'Hi'`,
      explanation: {
        en: "Use String.fromCharCode() to create a string from one or more UTF-16 char code values.",
        es: "Usa String.fromCharCode() para crear una cadena a partir de uno o más valores de código de carácter UTF-16.",
      },
    },
  },
  {
    slug: 'string-from-char-code-special',
    title: 'String.fromCharCode() — special characters',
    description: `## String.fromCharCode() — Special Characters

Char codes beyond the basic ASCII range represent extended characters, like accented letters.

**Challenge:** Implement \`getChar(code)\` using \`String.fromCharCode\`.

\`\`\`ts
getChar(169) // → '©'
getChar(174) // → '®'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.fromCharCode',
    initialCode: `function getChar(code: number): string {
  // Use String.fromCharCode(code)
}`,
    solution: `function getChar(code: number): string {
  return String.fromCharCode(code)
}`,
    tests: [
      { description: 'code 169 is ©', assertion: "expect(getChar(169)).toBe('©')" },
      { description: 'code 174 is ®', assertion: "expect(getChar(174)).toBe('®')" },
      { description: 'code 8364 is €', assertion: "expect(getChar(8364)).toBe('€')" },
      { description: 'code 9733 is ★', assertion: "expect(getChar(9733)).toBe('★')" },
      { description: 'result is a string', assertion: "expect(typeof getChar(169)).toBe('string')" },
    ],
    hints: [
      '`String.fromCharCode` works for any UTF-16 code unit, not just ASCII.',
    ],
    tags: ['String', 'String.fromCharCode', 'Unicode', 'intermediate'],
    usageExample: {
      code: `String.fromCharCode(65)        // → 'A'
String.fromCharCode(97)        // → 'a'
String.fromCharCode(72, 105)   // → 'Hi'`,
      explanation: {
        en: "Use String.fromCharCode() to create a string from one or more UTF-16 char code values.",
        es: "Usa String.fromCharCode() para crear una cadena a partir de uno o más valores de código de carácter UTF-16.",
      },
    },
  },
  {
    slug: 'string-from-char-code-roundtrip',
    title: 'String.fromCharCode() — round-trip with charCodeAt',
    description: `## String.fromCharCode() — Round-trip

You can convert a char to its code with \`.charCodeAt(0)\`, and back with \`String.fromCharCode\`.

**Challenge:** Implement \`shiftChar(ch, n)\` that shifts a character by \`n\` positions in the char code table.

\`\`\`ts
shiftChar('A', 1) // → 'B'
shiftChar('a', 2) // → 'c'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.fromCharCode',
    initialCode: `function shiftChar(ch: string, n: number): string {
  // Get the char code with ch.charCodeAt(0), add n, convert back
}`,
    solution: `function shiftChar(ch: string, n: number): string {
  return String.fromCharCode(ch.charCodeAt(0) + n)
}`,
    tests: [
      { description: 'A+1 is B', assertion: "expect(shiftChar('A', 1)).toBe('B')" },
      { description: 'a+2 is c', assertion: "expect(shiftChar('a', 2)).toBe('c')" },
      { description: 'A+0 is A', assertion: "expect(shiftChar('A', 0)).toBe('A')" },
      { description: 'Z-1 is Y', assertion: "expect(shiftChar('Z', -1)).toBe('Y')" },
      { description: '0+1 is 1', assertion: "expect(shiftChar('0', 1)).toBe('1')" },
    ],
    hints: [
      'Use `ch.charCodeAt(0)` to get the code, then `String.fromCharCode(code + n)` to get the new char.',
    ],
    tags: ['String', 'String.fromCharCode', 'charCodeAt', 'intermediate'],
    usageExample: {
      code: `String.fromCharCode(65)        // → 'A'
String.fromCharCode(97)        // → 'a'
String.fromCharCode(72, 105)   // → 'Hi'`,
      explanation: {
        en: "Use String.fromCharCode() to create a string from one or more UTF-16 char code values.",
        es: "Usa String.fromCharCode() para crear una cadena a partir de uno o más valores de código de carácter UTF-16.",
      },
    },
  },
]
