import type { Exercise } from '@/shared/types/exercises'

export const fromCodePointExercises: Exercise[] = [
  {
    slug: 'string-from-code-point-basic',
    title: 'String.fromCodePoint() — basic usage',
    description: `## String.fromCodePoint()

\`String.fromCodePoint(...codePoints)\` returns a string from Unicode code point values. Unlike \`fromCharCode\`, it handles the full Unicode range including supplementary characters.

**Challenge:** Implement \`charFromCodePoint(cp)\` that returns the character for the given code point.

\`\`\`ts
charFromCodePoint(65) // → 'A'
charFromCodePoint(9731) // → '☃'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.fromCodePoint',
    initialCode: `function charFromCodePoint(cp: number): string {
  // Use String.fromCodePoint(cp)
}`,
    solution: `function charFromCodePoint(cp: number): string {
  return String.fromCodePoint(cp)
}`,
    tests: [
      { description: 'code point 65 is A', assertion: "expect(charFromCodePoint(65)).toBe('A')" },
      { description: 'code point 97 is a', assertion: "expect(charFromCodePoint(97)).toBe('a')" },
      { description: 'code point 9731 is snowman', assertion: "expect(charFromCodePoint(9731)).toBe('☃')" },
      { description: 'code point 48 is 0', assertion: "expect(charFromCodePoint(48)).toBe('0')" },
      { description: 'result is a string', assertion: "expect(typeof charFromCodePoint(65)).toBe('string')" },
    ],
    hints: [
      '`String.fromCodePoint` accepts the same values as `String.fromCharCode` for BMP characters.',
    ],
    tags: ['String', 'String.fromCodePoint', 'Unicode', 'beginner'],
  },
  {
    slug: 'string-from-code-point-emoji',
    title: 'String.fromCodePoint() — emoji / supplementary planes',
    description: `## String.fromCodePoint() — Supplementary Characters

Code points above U+FFFF (like emoji) require two UTF-16 code units (a surrogate pair). \`String.fromCodePoint\` handles this automatically.

**Challenge:** Implement \`getEmoji()\` that returns the grinning face emoji '😀' using code point 128512.

\`\`\`ts
getEmoji() // → '😀'
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.fromCodePoint',
    initialCode: `function getEmoji(): string {
  // Use String.fromCodePoint(128512) — the grinning face emoji
}`,
    solution: `function getEmoji(): string {
  return String.fromCodePoint(128512)
}`,
    tests: [
      { description: 'returns grinning face emoji', assertion: "expect(getEmoji()).toBe('😀')" },
      { description: 'result has length 2 (surrogate pair)', assertion: "expect(getEmoji()).toHaveLength(2)" },
      { description: 'result is a string', assertion: "expect(typeof getEmoji()).toBe('string')" },
      { description: 'code point 128513 is 😁', assertion: "expect(String.fromCodePoint(128513)).toBe('😁')" },
      { description: 'code point 10084 is ❤', assertion: "expect(String.fromCodePoint(10084)).toBe('❤')" },
    ],
    hints: [
      'Emoji like 😀 have code points > 65535 and are represented as surrogate pairs in UTF-16.',
      '`String.fromCodePoint(128512)` automatically generates the correct surrogate pair.',
    ],
    tags: ['String', 'String.fromCodePoint', 'emoji', 'surrogate pair', 'intermediate'],
  },
  {
    slug: 'string-from-code-point-multiple',
    title: 'String.fromCodePoint() — multiple code points',
    description: `## String.fromCodePoint() — Multiple Arguments

Pass multiple code points to build a string.

**Challenge:** Implement \`buildFromCodePoints(points)\` that converts an array of code points into a string.

\`\`\`ts
buildFromCodePoints([72, 105]) // → 'Hi'
\`\`\``,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.fromCodePoint',
    initialCode: `function buildFromCodePoints(points: number[]): string {
  // Use String.fromCodePoint(...points)
}`,
    solution: `function buildFromCodePoints(points: number[]): string {
  return String.fromCodePoint(...points)
}`,
    tests: [
      { description: 'builds Hi', assertion: "expect(buildFromCodePoints([72, 105])).toBe('Hi')" },
      { description: 'builds OK', assertion: "expect(buildFromCodePoints([79, 75])).toBe('OK')" },
      { description: 'empty array gives empty string', assertion: "expect(buildFromCodePoints([])).toBe('')" },
      { description: 'builds abc', assertion: "expect(buildFromCodePoints([97, 98, 99])).toBe('abc')" },
      { description: 'single code point', assertion: "expect(buildFromCodePoints([90])).toBe('Z')" },
    ],
    hints: [
      'Spread the array: `String.fromCodePoint(...points)`.',
    ],
    tags: ['String', 'String.fromCodePoint', 'spread', 'beginner'],
  },
  {
    slug: 'string-from-code-point-vs-char-code',
    title: 'String.fromCodePoint() vs fromCharCode — BMP equivalence',
    description: `## fromCodePoint vs fromCharCode

For code points in the Basic Multilingual Plane (0–65535), \`String.fromCodePoint\` and \`String.fromCharCode\` produce the same result.

**Challenge:** Implement \`sameResult(code)\` that returns \`true\` when \`String.fromCodePoint(code)\` equals \`String.fromCharCode(code)\`.

\`\`\`ts
sameResult(65)  // → true
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.fromCodePoint',
    initialCode: `function sameResult(code: number): boolean {
  // Compare String.fromCodePoint(code) and String.fromCharCode(code)
}`,
    solution: `function sameResult(code: number): boolean {
  return String.fromCodePoint(code) === String.fromCharCode(code)
}`,
    tests: [
      { description: 'true for code 65', assertion: "expect(sameResult(65)).toBe(true)" },
      { description: 'true for code 97', assertion: "expect(sameResult(97)).toBe(true)" },
      { description: 'true for code 9731', assertion: "expect(sameResult(9731)).toBe(true)" },
      { description: 'false for emoji code point', assertion: "expect(sameResult(128512)).toBe(false)" },
      { description: 'true for code 0', assertion: "expect(sameResult(0)).toBe(true)" },
    ],
    hints: [
      'For code points ≤ 65535 both methods agree; above that they diverge.',
    ],
    tags: ['String', 'String.fromCodePoint', 'String.fromCharCode', 'intermediate'],
  },
  {
    slug: 'string-from-code-point-string-length',
    title: 'String.fromCodePoint() — string length with emoji',
    description: `## String.fromCodePoint() — Length of Supplementary Characters

A supplementary character (code point > U+FFFF) counts as **2** in \`.length\` because JavaScript strings are UTF-16 and the character uses a surrogate pair.

**Challenge:** Implement \`emojiLength(cp)\` that returns the \`.length\` of the string produced by \`String.fromCodePoint(cp)\`.

\`\`\`ts
emojiLength(65)     // → 1
emojiLength(128512) // → 2
\`\`\``,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.fromCodePoint',
    initialCode: `function emojiLength(cp: number): number {
  // Return the .length of String.fromCodePoint(cp)
}`,
    solution: `function emojiLength(cp: number): number {
  return String.fromCodePoint(cp).length
}`,
    tests: [
      { description: 'ASCII char has length 1', assertion: "expect(emojiLength(65)).toBe(1)" },
      { description: 'emoji 😀 has length 2', assertion: "expect(emojiLength(128512)).toBe(2)" },
      { description: 'BMP char 9731 has length 1', assertion: "expect(emojiLength(9731)).toBe(1)" },
      { description: 'emoji 😁 has length 2', assertion: "expect(emojiLength(128513)).toBe(2)" },
      { description: 'space has length 1', assertion: "expect(emojiLength(32)).toBe(1)" },
    ],
    hints: [
      'JavaScript `.length` counts UTF-16 code units, not code points.',
    ],
    tags: ['String', 'String.fromCodePoint', 'length', 'surrogate pair', 'intermediate'],
  },
]
