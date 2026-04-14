import type { Exercise } from '@/shared/types/exercises'

export const charAtExercises: Exercise[] = [
  {
    slug: 'string-char-at-first',
    title: 'String.prototype.charAt() — first character',
    description: `## String.prototype.charAt()

\`str.charAt(index)\` returns the character at the specified index, or an empty string \`''\` for out-of-bounds (unlike \`.at()\` which returns \`undefined\`).

**Challenge:** Implement \`firstChar(str)\` that returns the first character using \`.charAt(0)\`.

\`\`\`ts
firstChar('hello') // → 'h'
firstChar('world') // → 'w'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charAt',
    initialCode: `function firstChar(str: string): string {
  // Use str.charAt(0)
}`,
    solution: `function firstChar(str: string): string {
  return str.charAt(0)
}`,
    tests: [
      { description: 'first char of hello', assertion: "expect(firstChar('hello')).toBe('h')" },
      { description: 'first char of world', assertion: "expect(firstChar('world')).toBe('w')" },
      { description: 'single char string', assertion: "expect(firstChar('a')).toBe('a')" },
      { description: 'empty string returns empty string', assertion: "expect(firstChar('')).toBe('')" },
      { description: 'result is a string', assertion: "expect(typeof firstChar('hi')).toBe('string')" },
    ],
    hints: [
      '`str.charAt(0)` is equivalent to `str[0]` for most cases, but returns `""` instead of `undefined` for out-of-bounds.',
    ],
    tags: ['String', 'String.prototype.charAt', 'index', 'beginner'],
  },
  {
    slug: 'string-char-at-last',
    title: 'String.prototype.charAt() — last character',
    description: `## String.prototype.charAt() — Last Character

Use \`str.length - 1\` to get the last character index.

**Challenge:** Implement \`lastCharAt(str)\` using \`.charAt(str.length - 1)\`.

\`\`\`ts
lastCharAt('hello') // → 'o'
lastCharAt('abc')   // → 'c'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charAt',
    initialCode: `function lastCharAt(str: string): string {
  // Use str.charAt(str.length - 1)
}`,
    solution: `function lastCharAt(str: string): string {
  return str.charAt(str.length - 1)
}`,
    tests: [
      { description: 'last char of hello', assertion: "expect(lastCharAt('hello')).toBe('o')" },
      { description: 'last char of abc', assertion: "expect(lastCharAt('abc')).toBe('c')" },
      { description: 'single char string', assertion: "expect(lastCharAt('z')).toBe('z')" },
      { description: 'last char of world', assertion: "expect(lastCharAt('world')).toBe('d')" },
      { description: 'two-char string', assertion: "expect(lastCharAt('ab')).toBe('b')" },
    ],
    hints: [
      'The last index is `str.length - 1`.',
    ],
    tags: ['String', 'String.prototype.charAt', 'index', 'beginner'],
  },
  {
    slug: 'string-char-at-out-of-bounds',
    title: 'String.prototype.charAt() — out-of-bounds returns empty string',
    description: `## String.prototype.charAt() — Out-of-Bounds

\`charAt\` returns \`''\` (empty string) for out-of-bounds, while \`.at()\` returns \`undefined\`.

**Challenge:** Implement \`isOutOfBounds(str, i)\` that returns \`true\` when \`.charAt(i)\` returns an empty string.

\`\`\`ts
isOutOfBounds('hi', 99) // → true
isOutOfBounds('hi', 0)  // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charAt',
    initialCode: `function isOutOfBounds(str: string, i: number): boolean {
  // Return true if str.charAt(i) === ''
}`,
    solution: `function isOutOfBounds(str: string, i: number): boolean {
  return str.charAt(i) === ''
}`,
    tests: [
      { description: 'index 99 is out of bounds', assertion: "expect(isOutOfBounds('hi', 99)).toBe(true)" },
      { description: 'index 0 is in bounds', assertion: "expect(isOutOfBounds('hi', 0)).toBe(false)" },
      { description: 'empty string index 0 is out of bounds', assertion: "expect(isOutOfBounds('', 0)).toBe(true)" },
      { description: 'negative index is out of bounds', assertion: "expect(isOutOfBounds('hi', -1)).toBe(true)" },
      { description: 'exact last index is in bounds', assertion: "expect(isOutOfBounds('hi', 1)).toBe(false)" },
    ],
    hints: [
      'Unlike `.at()`, `.charAt()` does NOT support negative indices — they are treated as 0 or out-of-bounds.',
    ],
    tags: ['String', 'String.prototype.charAt', 'out-of-bounds', 'beginner'],
  },
  {
    slug: 'string-char-at-middle',
    title: 'String.prototype.charAt() — middle character',
    description: `## String.prototype.charAt() — Middle

**Challenge:** Implement \`midChar(str)\` using \`.charAt()\` to return the middle character of an odd-length string.

\`\`\`ts
midChar('hello') // → 'l'
midChar('abc')   // → 'b'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.charAt',
    initialCode: `function midChar(str: string): string {
  // Use str.charAt(Math.floor(str.length / 2))
}`,
    solution: `function midChar(str: string): string {
  return str.charAt(Math.floor(str.length / 2))
}`,
    tests: [
      { description: 'middle of hello', assertion: "expect(midChar('hello')).toBe('l')" },
      { description: 'middle of abc', assertion: "expect(midChar('abc')).toBe('b')" },
      { description: 'single char', assertion: "expect(midChar('x')).toBe('x')" },
      { description: 'middle of abcde', assertion: "expect(midChar('abcde')).toBe('c')" },
      { description: 'middle of 12345', assertion: "expect(midChar('12345')).toBe('3')" },
    ],
    hints: [
      '`Math.floor(str.length / 2)` gives the middle index for any length.',
    ],
    tags: ['String', 'String.prototype.charAt', 'index', 'intermediate'],
  },
  {
    slug: 'string-char-at-specific-position',
    title: 'String.prototype.charAt() — specific position',
    description: `## String.prototype.charAt() — Any Position

**Challenge:** Implement \`charAtPos(str, pos)\` that wraps \`.charAt(pos)\`.

\`\`\`ts
charAtPos('JavaScript', 4) // → 'S'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.charAt',
    initialCode: `function charAtPos(str: string, pos: number): string {
  // Use str.charAt(pos)
}`,
    solution: `function charAtPos(str: string, pos: number): string {
  return str.charAt(pos)
}`,
    tests: [
      { description: 'pos 4 of JavaScript', assertion: "expect(charAtPos('JavaScript', 4)).toBe('S')" },
      { description: 'pos 0 of TypeScript', assertion: "expect(charAtPos('TypeScript', 0)).toBe('T')" },
      { description: 'pos 2 of abc', assertion: "expect(charAtPos('abc', 2)).toBe('c')" },
      { description: 'out of bounds returns empty string', assertion: "expect(charAtPos('abc', 10)).toBe('')" },
      { description: 'pos 1 of hello', assertion: "expect(charAtPos('hello', 1)).toBe('e')" },
    ],
    hints: [
      '`str.charAt(pos)` is the classic way to get a character; `str[pos]` is the modern shorthand.',
    ],
    tags: ['String', 'String.prototype.charAt', 'index', 'beginner'],
  },
]
