import type { Exercise } from '@/shared/types/exercises'

export const toWellFormedExercises: Exercise[] = [
  {
    slug: 'string-to-well-formed-normal',
    title: 'String.prototype.toWellFormed() — normal string unchanged',
    description: `## String.prototype.toWellFormed()

\`str.toWellFormed()\` returns a new string where lone surrogates are replaced with the Unicode replacement character \`U+FFFD\` (\`'\\uFFFD'\`). A well-formed string is returned unchanged.

**Challenge:** Implement \`ensureWellFormed(str)\` that calls \`toWellFormed()\`.

\`\`\`ts
ensureWellFormed('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.toWellFormed',
    initialCode: `function ensureWellFormed(str: string): string {
  // Use str.toWellFormed()
}`,
    solution: `function ensureWellFormed(str: string): string {
  return str.toWellFormed()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(ensureWellFormed('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(ensureWellFormed('world')).toBe('world')" },
      { description: 'abc unchanged', assertion: "expect(ensureWellFormed('abc')).toBe('abc')" },
      { description: 'empty string unchanged', assertion: "expect(ensureWellFormed('')).toBe('')" },
      { description: 'numbers unchanged', assertion: "expect(ensureWellFormed('123')).toBe('123')" },
    ],
    hints: [
      'Strings without lone surrogates are returned as-is.',
    ],
    tags: ['String', 'String.prototype.toWellFormed', 'ES2024', 'intermediate'],
  },
  {
    slug: 'string-to-well-formed-lone-surrogate',
    title: 'String.prototype.toWellFormed() — lone surrogate replaced with U+FFFD',
    description: `## String.prototype.toWellFormed() — Lone Surrogate

A lone high surrogate like \`'\\uD800'\` is not a valid Unicode scalar. \`.toWellFormed()\` replaces it with \`'\\uFFFD'\`.

**Challenge:** Implement \`fixLoneSurrogate()\` that converts \`'\\uD800'\` to a well-formed string.

\`\`\`ts
fixLoneSurrogate() // → '\uFFFD'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.toWellFormed',
    initialCode: `function fixLoneSurrogate(): string {
  // Use '\\uD800'.toWellFormed() — lone surrogate becomes '\\uFFFD'
}`,
    solution: `function fixLoneSurrogate(): string {
  return '\uD800'.toWellFormed()
}`,
    tests: [
      { description: 'lone high surrogate becomes replacement char', assertion: "expect(fixLoneSurrogate()).toBe('\uFFFD')" },
      { description: 'result is the replacement character', assertion: "expect('\uD800'.toWellFormed()).toBe('\uFFFD')" },
      { description: 'lone low surrogate also replaced', assertion: "expect('\uDFFF'.toWellFormed()).toBe('\uFFFD')" },
      { description: 'result has length 1', assertion: "expect(fixLoneSurrogate()).toHaveLength(1)" },
      { description: 'result equals U+FFFD', assertion: "expect(fixLoneSurrogate()).toBe('\uFFFD')" },
    ],
    hints: [
      '`\\uD800` is a lone high surrogate — it has no paired low surrogate.',
      '`toWellFormed()` replaces it with `\\uFFFD` (the Unicode replacement character).',
    ],
    tags: ['String', 'String.prototype.toWellFormed', 'surrogate', 'ES2024', 'intermediate'],
  },
  {
    slug: 'string-to-well-formed-emoji',
    title: 'String.prototype.toWellFormed() — string with emoji unchanged',
    description: `## String.prototype.toWellFormed() — Emoji

Emoji characters use surrogate pairs correctly. A well-formed emoji string is returned unchanged.

**Challenge:** Implement \`wellFormedEmoji()\` that shows an emoji string is unchanged.

\`\`\`ts
wellFormedEmoji() // → '😀'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.toWellFormed',
    initialCode: `function wellFormedEmoji(): string {
  // Use '😀'.toWellFormed() — emoji is a valid surrogate pair, unchanged
}`,
    solution: `function wellFormedEmoji(): string {
  return '😀'.toWellFormed()
}`,
    tests: [
      { description: 'emoji is unchanged', assertion: "expect(wellFormedEmoji()).toBe('😀')" },
      { description: 'emoji is well-formed', assertion: "expect('😀'.toWellFormed()).toBe('😀')" },
      { description: 'emoji string with text', assertion: "expect('hi 😀'.toWellFormed()).toBe('hi 😀')" },
      { description: 'multiple emoji unchanged', assertion: "expect('😀😂'.toWellFormed()).toBe('😀😂')" },
      { description: 'emoji length preserved', assertion: "expect(wellFormedEmoji()).toHaveLength(2)" },
    ],
    hints: [
      'Emoji like 😀 use a valid high–low surrogate pair, so `toWellFormed()` leaves them unchanged.',
    ],
    tags: ['String', 'String.prototype.toWellFormed', 'emoji', 'ES2024', 'intermediate'],
  },
  {
    slug: 'string-to-well-formed-empty',
    title: 'String.prototype.toWellFormed() — empty string',
    description: `## String.prototype.toWellFormed() — Empty String

Calling \`toWellFormed()\` on an empty string returns an empty string.

**Challenge:** Implement \`wellFormedEmpty()\` that calls \`toWellFormed\` on an empty string.

\`\`\`ts
wellFormedEmpty() // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.toWellFormed',
    initialCode: `function wellFormedEmpty(): string {
  // Use ''.toWellFormed()
}`,
    solution: `function wellFormedEmpty(): string {
  return ''.toWellFormed()
}`,
    tests: [
      { description: 'empty string returns empty', assertion: "expect(wellFormedEmpty()).toBe('')" },
      { description: 'empty is falsy', assertion: "expect(wellFormedEmpty()).toBeFalsy()" },
      { description: 'empty has length 0', assertion: "expect(wellFormedEmpty()).toHaveLength(0)" },
      { description: 'direct call also empty', assertion: "expect(''.toWellFormed()).toBe('')" },
      { description: 'result equals empty', assertion: "expect(wellFormedEmpty() === '').toBe(true)" },
    ],
    hints: [
      '`"".toWellFormed()` returns `""` since there are no characters to process.',
    ],
    tags: ['String', 'String.prototype.toWellFormed', 'ES2024', 'beginner'],
  },
  {
    slug: 'string-to-well-formed-mixed',
    title: 'String.prototype.toWellFormed() — mixed lone surrogate',
    description: `## String.prototype.toWellFormed() — Mixed String

In a string that contains both normal characters and a lone surrogate, only the surrogate is replaced.

**Challenge:** Implement \`fixMixed()\` that returns the well-formed version of \`'ab\\uD800cd'\`.

\`\`\`ts
fixMixed() // → 'ab\uFFFDcd'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.toWellFormed',
    initialCode: `function fixMixed(): string {
  // Use 'ab\\uD800cd'.toWellFormed()
}`,
    solution: `function fixMixed(): string {
  return 'ab\uD800cd'.toWellFormed()
}`,
    tests: [
      { description: 'surrogate replaced in middle', assertion: "expect(fixMixed()).toBe('ab\uFFFDcd')" },
      { description: 'normal chars preserved', assertion: "expect(fixMixed().startsWith('ab')).toBe(true)" },
      { description: 'normal chars at end preserved', assertion: "expect(fixMixed().endsWith('cd')).toBe(true)" },
      { description: 'result length 4', assertion: "expect(fixMixed()).toHaveLength(4)" },
      { description: 'lone surrogate at start also replaced', assertion: "expect('\uD800ab'.toWellFormed()).toBe('\uFFFDab')" },
    ],
    hints: [
      'Only the lone surrogate is replaced — all other characters remain intact.',
    ],
    tags: ['String', 'String.prototype.toWellFormed', 'surrogate', 'ES2024', 'intermediate'],
  },
]
