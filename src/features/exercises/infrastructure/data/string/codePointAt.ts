import type { Exercise } from '@/shared/types/exercises'

export const codePointAtExercises: Exercise[] = [
  {
    slug: 'string-code-point-at-basic',
    title: 'String.prototype.codePointAt() — basic ASCII',
    description: `## String.prototype.codePointAt()

\`str.codePointAt(pos)\` returns the Unicode code point value at the given position. For BMP characters it works just like \`.charCodeAt()\`.

**Challenge:** Implement \`getCodePoint(str, pos)\` using \`.codePointAt()\`.

\`\`\`ts
getCodePoint('A', 0) // → 65
getCodePoint('a', 0) // → 97
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.codePointAt',
    initialCode: `function getCodePoint(str: string, pos: number): number | undefined {
  // Use str.codePointAt(pos)
}`,
    solution: `function getCodePoint(str: string, pos: number): number | undefined {
  return str.codePointAt(pos)
}`,
    tests: [
      { description: 'A is code point 65', assertion: "expect(getCodePoint('A', 0)).toBe(65)" },
      { description: 'a is code point 97', assertion: "expect(getCodePoint('a', 0)).toBe(97)" },
      { description: '0 is code point 48', assertion: "expect(getCodePoint('0', 0)).toBe(48)" },
      { description: 'space is code point 32', assertion: "expect(getCodePoint(' ', 0)).toBe(32)" },
      { description: 'out of bounds returns undefined', assertion: "expect(getCodePoint('hi', 99)).toBeUndefined()" },
    ],
    hints: [
      'For BMP characters (code points ≤ 65535), `.codePointAt()` returns the same value as `.charCodeAt()`.',
    ],
    tags: ['String', 'String.prototype.codePointAt', 'Unicode', 'beginner'],
  },
  {
    slug: 'string-code-point-at-emoji',
    title: 'String.prototype.codePointAt() — emoji code point',
    description: `## String.prototype.codePointAt() — Supplementary Characters

For emoji and other supplementary characters, \`.codePointAt(0)\` returns the full code point (e.g. 128512 for 😀).

**Challenge:** Implement \`emojiCodePoint()\` that returns the code point of '😀' at position 0.

\`\`\`ts
emojiCodePoint() // → 128512
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.codePointAt',
    initialCode: `function emojiCodePoint(): number | undefined {
  // Return '😀'.codePointAt(0)
}`,
    solution: `function emojiCodePoint(): number | undefined {
  return '😀'.codePointAt(0)
}`,
    tests: [
      { description: 'emoji code point is 128512', assertion: "expect(emojiCodePoint()).toBe(128512)" },
      { description: 'result is a number', assertion: "expect(typeof emojiCodePoint()).toBe('number')" },
      { description: 'code point is above BMP', assertion: "expect((emojiCodePoint() ?? 0) > 65535).toBe(true)" },
      { description: '😁 has code point 128513', assertion: "expect('😁'.codePointAt(0)).toBe(128513)" },
      { description: '❤ has code point 10084', assertion: "expect('❤'.codePointAt(0)).toBe(10084)" },
    ],
    hints: [
      'Emoji code points are above 65535 and require a surrogate pair in UTF-16.',
    ],
    tags: ['String', 'String.prototype.codePointAt', 'emoji', 'supplementary', 'intermediate'],
  },
  {
    slug: 'string-code-point-at-surrogate',
    title: 'String.prototype.codePointAt() — surrogate at position 1',
    description: `## String.prototype.codePointAt() — Surrogate Position

An emoji stored as a surrogate pair occupies positions 0 and 1. \`.codePointAt(1)\` returns the low surrogate code unit.

**Challenge:** Implement \`lowSurrogate()\` that returns the code point of '😀' at position 1 (the low surrogate).

\`\`\`ts
lowSurrogate() // → 56832  (0xDE00)
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.codePointAt',
    initialCode: `function lowSurrogate(): number | undefined {
  // Return '😀'.codePointAt(1) — the low surrogate
}`,
    solution: `function lowSurrogate(): number | undefined {
  return '😀'.codePointAt(1)
}`,
    tests: [
      { description: 'low surrogate of 😀 is 56832', assertion: "expect(lowSurrogate()).toBe(56832)" },
      { description: 'is in surrogate range', assertion: "expect((lowSurrogate() ?? 0) >= 56320).toBe(true)" },
      { description: 'result is a number', assertion: "expect(typeof lowSurrogate()).toBe('number')" },
      { description: 'position 0 gives full code point', assertion: "expect('😀'.codePointAt(0)).toBe(128512)" },
      { description: 'position 1 is less than full code point', assertion: "expect((lowSurrogate() ?? 0) < 128512).toBe(true)" },
    ],
    hints: [
      'Low surrogates are in the range 0xDC00–0xDFFF (56320–57343).',
    ],
    tags: ['String', 'String.prototype.codePointAt', 'surrogate pair', 'advanced'],
  },
  {
    slug: 'string-code-point-at-undefined',
    title: 'String.prototype.codePointAt() — undefined for out-of-bounds',
    description: `## String.prototype.codePointAt() — Out-of-Bounds

Like \`.at()\`, \`.codePointAt()\` returns \`undefined\` when the index is out of range.

**Challenge:** Implement \`isValidPos(str, pos)\` that returns \`true\` when \`str.codePointAt(pos)\` is not \`undefined\`.

\`\`\`ts
isValidPos('hi', 0) // → true
isValidPos('hi', 5) // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.codePointAt',
    initialCode: `function isValidPos(str: string, pos: number): boolean {
  // Return true if str.codePointAt(pos) is not undefined
}`,
    solution: `function isValidPos(str: string, pos: number): boolean {
  return str.codePointAt(pos) !== undefined
}`,
    tests: [
      { description: 'pos 0 is valid for hi', assertion: "expect(isValidPos('hi', 0)).toBe(true)" },
      { description: 'pos 1 is valid for hi', assertion: "expect(isValidPos('hi', 1)).toBe(true)" },
      { description: 'pos 5 is invalid for hi', assertion: "expect(isValidPos('hi', 5)).toBe(false)" },
      { description: 'empty string pos 0 is invalid', assertion: "expect(isValidPos('', 0)).toBe(false)" },
      { description: 'pos 2 is invalid for hi', assertion: "expect(isValidPos('hi', 2)).toBe(false)" },
    ],
    hints: [
      '`.codePointAt()` returns `undefined` for out-of-range indices.',
    ],
    tags: ['String', 'String.prototype.codePointAt', 'undefined', 'beginner'],
  },
  {
    slug: 'string-code-point-at-vs-char-code',
    title: 'String.prototype.codePointAt() — vs charCodeAt for BMP',
    description: `## codePointAt vs charCodeAt

For BMP characters, both methods return the same value. For supplementary characters, they differ at position 0.

**Challenge:** Implement \`codesMatch(str, pos)\` that returns \`true\` when \`.codePointAt(pos)\` equals \`.charCodeAt(pos)\`.

\`\`\`ts
codesMatch('A', 0)  // → true
codesMatch('😀', 0) // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.codePointAt',
    initialCode: `function codesMatch(str: string, pos: number): boolean {
  // Compare str.codePointAt(pos) and str.charCodeAt(pos)
}`,
    solution: `function codesMatch(str: string, pos: number): boolean {
  return str.codePointAt(pos) === str.charCodeAt(pos)
}`,
    tests: [
      { description: 'match for A', assertion: "expect(codesMatch('A', 0)).toBe(true)" },
      { description: 'match for a', assertion: "expect(codesMatch('a', 0)).toBe(true)" },
      { description: 'no match for emoji at 0', assertion: "expect(codesMatch('😀', 0)).toBe(false)" },
      { description: 'match for snowman', assertion: "expect(codesMatch('☃', 0)).toBe(true)" },
      { description: 'match for space', assertion: "expect(codesMatch(' ', 0)).toBe(true)" },
    ],
    hints: [
      'BMP code points (0–65535) are the same in both methods. Supplementary code points differ.',
    ],
    tags: ['String', 'String.prototype.codePointAt', 'charCodeAt', 'intermediate'],
  },
]
