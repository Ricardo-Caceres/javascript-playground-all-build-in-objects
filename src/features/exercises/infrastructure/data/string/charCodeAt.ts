import type { Exercise } from '@/shared/types/exercises'

export const charCodeAtExercises: Exercise[] = [
  {
    slug: 'string-char-code-at-uppercase-a',
    title: 'String.prototype.charCodeAt() — code for A',
    description: `## String.prototype.charCodeAt()

\`str.charCodeAt(index)\` returns the UTF-16 code unit value of the character at the given index, or \`NaN\` for out-of-bounds.

**Challenge:** Implement \`getCode(str, i)\` that returns the char code at index \`i\`.

\`\`\`ts
getCode('A', 0) // → 65
getCode('a', 0) // → 97
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charCodeAt',
    initialCode: `function getCode(str: string, i: number): number {
  // Use str.charCodeAt(i)
}`,
    solution: `function getCode(str: string, i: number): number {
  return str.charCodeAt(i)
}`,
    tests: [
      { description: 'A is 65', assertion: "expect(getCode('A', 0)).toBe(65)" },
      { description: 'a is 97', assertion: "expect(getCode('a', 0)).toBe(97)" },
      { description: '0 digit is 48', assertion: "expect(getCode('0', 0)).toBe(48)" },
      { description: 'space is 32', assertion: "expect(getCode(' ', 0)).toBe(32)" },
      { description: 'Z is 90', assertion: "expect(getCode('Z', 0)).toBe(90)" },
    ],
    hints: [
      'ASCII: A=65, Z=90, a=97, z=122, 0=48, 9=57, space=32.',
    ],
    tags: ['String', 'String.prototype.charCodeAt', 'ASCII', 'beginner'],
    usageExample: {
      code: `const str = 'ABC'
str.charCodeAt(0)   // → 65
str.charCodeAt(1)   // → 66
str.charCodeAt(99)  // → NaN`,
      explanation: {
        en: "Use charCodeAt() to get the UTF-16 code unit value of the character at the given index.",
        es: "Usa charCodeAt() para obtener el valor de unidad de código UTF-16 del carácter en el índice dado.",
      },
    },
  },
  {
    slug: 'string-char-code-at-nan',
    title: 'String.prototype.charCodeAt() — NaN for out-of-bounds',
    description: `## String.prototype.charCodeAt() — NaN

When the index is out of bounds, \`.charCodeAt()\` returns \`NaN\`.

**Challenge:** Implement \`codeOrNaN(str, i)\` and return \`true\` when the code is \`NaN\`.

\`\`\`ts
codeOrNaN('hi', 99) // → true  (NaN)
codeOrNaN('hi', 0)  // → false (104)
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charCodeAt',
    initialCode: `function codeOrNaN(str: string, i: number): boolean {
  // Return true if str.charCodeAt(i) is NaN
}`,
    solution: `function codeOrNaN(str: string, i: number): boolean {
  return isNaN(str.charCodeAt(i))
}`,
    tests: [
      { description: 'out-of-bounds returns NaN (true)', assertion: "expect(codeOrNaN('hi', 99)).toBe(true)" },
      { description: 'in-bounds returns false', assertion: "expect(codeOrNaN('hi', 0)).toBe(false)" },
      { description: 'empty string index 0 is NaN', assertion: "expect(codeOrNaN('', 0)).toBe(true)" },
      { description: 'negative index is NaN', assertion: "expect(codeOrNaN('hi', -1)).toBe(true)" },
      { description: 'valid index 1 is not NaN', assertion: "expect(codeOrNaN('abc', 1)).toBe(false)" },
    ],
    hints: [
      'Use `isNaN()` to check the return value.',
    ],
    tags: ['String', 'String.prototype.charCodeAt', 'NaN', 'beginner'],
    usageExample: {
      code: `const str = 'ABC'
str.charCodeAt(0)   // → 65
str.charCodeAt(1)   // → 66
str.charCodeAt(99)  // → NaN`,
      explanation: {
        en: "Use charCodeAt() to get the UTF-16 code unit value of the character at the given index.",
        es: "Usa charCodeAt() para obtener el valor de unidad de código UTF-16 del carácter en el índice dado.",
      },
    },
  },
  {
    slug: 'string-char-code-at-lowercase-check',
    title: 'String.prototype.charCodeAt() — detect lowercase',
    description: `## String.prototype.charCodeAt() — Lowercase Detection

Lowercase letters have codes 97–122. You can use this to detect if a character is lowercase.

**Challenge:** Implement \`isLowercase(ch)\` that returns \`true\` if the single character is lowercase using \`.charCodeAt(0)\`.

\`\`\`ts
isLowercase('a') // → true
isLowercase('A') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.charCodeAt',
    initialCode: `function isLowercase(ch: string): boolean {
  // Use ch.charCodeAt(0); lowercase is 97–122
}`,
    solution: `function isLowercase(ch: string): boolean {
  const code = ch.charCodeAt(0)
  return code >= 97 && code <= 122
}`,
    tests: [
      { description: 'a is lowercase', assertion: "expect(isLowercase('a')).toBe(true)" },
      { description: 'z is lowercase', assertion: "expect(isLowercase('z')).toBe(true)" },
      { description: 'A is not lowercase', assertion: "expect(isLowercase('A')).toBe(false)" },
      { description: 'Z is not lowercase', assertion: "expect(isLowercase('Z')).toBe(false)" },
      { description: 'm is lowercase', assertion: "expect(isLowercase('m')).toBe(true)" },
    ],
    hints: [
      'Lowercase codes: a=97, z=122.',
    ],
    tags: ['String', 'String.prototype.charCodeAt', 'ASCII', 'intermediate'],
    usageExample: {
      code: `const str = 'ABC'
str.charCodeAt(0)   // → 65
str.charCodeAt(1)   // → 66
str.charCodeAt(99)  // → NaN`,
      explanation: {
        en: "Use charCodeAt() to get the UTF-16 code unit value of the character at the given index.",
        es: "Usa charCodeAt() para obtener el valor de unidad de código UTF-16 del carácter en el índice dado.",
      },
    },
  },
  {
    slug: 'string-char-code-at-second-char',
    title: 'String.prototype.charCodeAt() — code of second character',
    description: `## String.prototype.charCodeAt() — Second Character

**Challenge:** Implement \`secondCharCode(str)\` that returns the char code of the character at index 1.

\`\`\`ts
secondCharCode('hello') // → 101  ('e')
secondCharCode('AB')    // → 66   ('B')
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charCodeAt',
    initialCode: `function secondCharCode(str: string): number {
  // Use str.charCodeAt(1)
}`,
    solution: `function secondCharCode(str: string): number {
  return str.charCodeAt(1)
}`,
    tests: [
      { description: 'e in hello is 101', assertion: "expect(secondCharCode('hello')).toBe(101)" },
      { description: 'B in AB is 66', assertion: "expect(secondCharCode('AB')).toBe(66)" },
      { description: 'b in abc is 98', assertion: "expect(secondCharCode('abc')).toBe(98)" },
      { description: '1 in 12 is 49', assertion: "expect(secondCharCode('12')).toBe(49)" },
      { description: 'single char returns NaN', assertion: "expect(isNaN(secondCharCode('x'))).toBe(true)" },
    ],
    hints: [
      '`str.charCodeAt(1)` is the code of the second character.',
    ],
    tags: ['String', 'String.prototype.charCodeAt', 'index', 'beginner'],
    usageExample: {
      code: `const str = 'ABC'
str.charCodeAt(0)   // → 65
str.charCodeAt(1)   // → 66
str.charCodeAt(99)  // → NaN`,
      explanation: {
        en: "Use charCodeAt() to get the UTF-16 code unit value of the character at the given index.",
        es: "Usa charCodeAt() para obtener el valor de unidad de código UTF-16 del carácter en el índice dado.",
      },
    },
  },
  {
    slug: 'string-char-code-at-digit-check',
    title: 'String.prototype.charCodeAt() — detect digit character',
    description: `## String.prototype.charCodeAt() — Digit Detection

Digit characters '0'–'9' have char codes 48–57.

**Challenge:** Implement \`isDigitChar(ch)\` using \`.charCodeAt(0)\` to detect digit characters.

\`\`\`ts
isDigitChar('5') // → true
isDigitChar('a') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.charCodeAt',
    initialCode: `function isDigitChar(ch: string): boolean {
  // Use ch.charCodeAt(0); digits are 48-57
}`,
    solution: `function isDigitChar(ch: string): boolean {
  const code = ch.charCodeAt(0)
  return code >= 48 && code <= 57
}`,
    tests: [
      { description: '5 is a digit', assertion: "expect(isDigitChar('5')).toBe(true)" },
      { description: '0 is a digit', assertion: "expect(isDigitChar('0')).toBe(true)" },
      { description: '9 is a digit', assertion: "expect(isDigitChar('9')).toBe(true)" },
      { description: 'a is not a digit', assertion: "expect(isDigitChar('a')).toBe(false)" },
      { description: 'space is not a digit', assertion: "expect(isDigitChar(' ')).toBe(false)" },
    ],
    hints: [
      'Digit char codes: 0=48, 9=57.',
    ],
    tags: ['String', 'String.prototype.charCodeAt', 'ASCII', 'intermediate'],
    usageExample: {
      code: `const str = 'ABC'
str.charCodeAt(0)   // → 65
str.charCodeAt(1)   // → 66
str.charCodeAt(99)  // → NaN`,
      explanation: {
        en: "Use charCodeAt() to get the UTF-16 code unit value of the character at the given index.",
        es: "Usa charCodeAt() para obtener el valor de unidad de código UTF-16 del carácter en el índice dado.",
      },
    },
  },
]
