import type { Exercise } from '@/shared/types/exercises'

export const stringLengthExercises: Exercise[] = [
  {
    slug: 'string-length-basic',
    title: 'String.prototype.length — basic length',
    description: `## String.prototype.length

\`str.length\` is a read-only property that returns the number of UTF-16 code units in the string.

**Challenge:** Implement \`strLen(str)\` that returns the length of the string.

\`\`\`ts
strLen('hello') // → 5
strLen('hi')    // → 2
\`\`\``,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.length',
    initialCode: `function strLen(str: string): number {
  // Use str.length
}`,
    solution: `function strLen(str: string): number {
  return str.length
}`,
    tests: [
      { description: 'hello has length 5', assertion: "expect(strLen('hello')).toBe(5)" },
      { description: 'hi has length 2', assertion: "expect(strLen('hi')).toBe(2)" },
      { description: 'world has length 5', assertion: "expect(strLen('world')).toBe(5)" },
      { description: 'javascript has length 10', assertion: "expect(strLen('javascript')).toBe(10)" },
      { description: 'abc has length 3', assertion: "expect(strLen('abc')).toBe(3)" },
    ],
    hints: [
      '`str.length` is a property, not a method — no parentheses needed.',
    ],
    tags: ['String', 'String.prototype.length', 'beginner'],
  },
  {
    slug: 'string-length-empty',
    title: 'String.prototype.length — empty string length 0',
    description: `## String.prototype.length — Empty String

An empty string \`''\` has a length of \`0\`.

**Challenge:** Implement \`isEmpty(str)\` that returns \`true\` if the string has length 0.

\`\`\`ts
isEmpty('')      // → true
isEmpty('hello') // → false
\`\`\``,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.length',
    initialCode: `function isEmpty(str: string): boolean {
  // Use str.length === 0
}`,
    solution: `function isEmpty(str: string): boolean {
  return str.length === 0
}`,
    tests: [
      { description: 'empty string is empty', assertion: "expect(isEmpty('')).toBe(true)" },
      { description: 'non-empty string is not empty', assertion: "expect(isEmpty('hello')).toBe(false)" },
      { description: 'space has length 1, not empty', assertion: "expect(isEmpty(' ')).toBe(false)" },
      { description: 'single char not empty', assertion: "expect(isEmpty('x')).toBe(false)" },
      { description: 'empty length is 0', assertion: "expect(''.length).toBe(0)" },
    ],
    hints: [
      '`"".length === 0` is always `true`.',
    ],
    tags: ['String', 'String.prototype.length', 'beginner'],
  },
  {
    slug: 'string-length-emoji',
    title: 'String.prototype.length — emoji length is 2 code units',
    description: `## String.prototype.length — Emoji

Emoji like 😀 are encoded as a surrogate pair (two UTF-16 code units), so \`'😀'.length === 2\`.

**Challenge:** Implement \`emojiLength()\` that returns the length of the emoji \`'😀'\`.

\`\`\`ts
emojiLength() // → 2
\`\`\``,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.length',
    initialCode: `function emojiLength(): number {
  // Return '😀'.length — emoji takes 2 UTF-16 code units
}`,
    solution: `function emojiLength(): number {
  return '😀'.length
}`,
    tests: [
      { description: 'emoji has length 2', assertion: "expect(emojiLength()).toBe(2)" },
      { description: 'direct emoji length check', assertion: "expect('😀'.length).toBe(2)" },
      { description: 'emoji not length 1', assertion: "expect('😀'.length === 1).toBe(false)" },
      { description: 'two emoji have length 4', assertion: "expect('😀😂'.length).toBe(4)" },
      { description: 'hi plus emoji', assertion: "expect('hi😀'.length).toBe(4)" },
    ],
    hints: [
      'Emoji characters outside the Basic Multilingual Plane use two UTF-16 code units (a surrogate pair).',
      '`"😀".length === 2` even though it looks like a single character.',
    ],
    tags: ['String', 'String.prototype.length', 'emoji', 'unicode', 'intermediate'],
  },
  {
    slug: 'string-length-spaces-count',
    title: 'String.prototype.length — spaces count toward length',
    description: `## String.prototype.length — Spaces Count

Spaces are characters too and are counted in \`.length\`.

**Challenge:** Implement \`lengthWithSpaces(str)\` that returns the length including spaces.

\`\`\`ts
lengthWithSpaces('hello world') // → 11
\`\`\``,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.length',
    initialCode: `function lengthWithSpaces(str: string): number {
  // Use str.length — spaces are counted
}`,
    solution: `function lengthWithSpaces(str: string): number {
  return str.length
}`,
    tests: [
      { description: 'hello world has length 11', assertion: "expect(lengthWithSpaces('hello world')).toBe(11)" },
      { description: 'a b has length 3', assertion: "expect(lengthWithSpaces('a b')).toBe(3)" },
      { description: 'three spaces has length 3', assertion: "expect(lengthWithSpaces('   ')).toBe(3)" },
      { description: 'space has length 1', assertion: "expect(lengthWithSpaces(' ')).toBe(1)" },
      { description: 'hello has length 5 no spaces', assertion: "expect(lengthWithSpaces('hello')).toBe(5)" },
    ],
    hints: [
      'Every character — including whitespace — contributes 1 to `.length`.',
    ],
    tags: ['String', 'String.prototype.length', 'beginner'],
  },
  {
    slug: 'string-length-unicode-surrogate',
    title: 'String.prototype.length — Unicode surrogate pairs',
    description: `## String.prototype.length — Surrogate Pairs

Characters outside the Basic Multilingual Plane (code points > U+FFFF) require two UTF-16 code units, so their \`.length\` is 2.

**Challenge:** Implement \`surrogateLength()\` that returns the length of \`'𠮷'\` (U+20BB7).

\`\`\`ts
surrogateLength() // → 2
\`\`\``,
    category: 'instance-property',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.length',
    initialCode: `function surrogateLength(): number {
  // '𠮷' is a CJK character that requires 2 code units
  // Return '𠮷'.length
}`,
    solution: `function surrogateLength(): number {
  return '𠮷'.length
}`,
    tests: [
      { description: 'U+20BB7 has length 2', assertion: "expect(surrogateLength()).toBe(2)" },
      { description: 'direct check', assertion: "expect('𠮷'.length).toBe(2)" },
      { description: 'not length 1', assertion: "expect('𠮷'.length === 1).toBe(false)" },
      { description: 'two copies have length 4', assertion: "expect('𠮷𠮷'.length).toBe(4)" },
      { description: 'ascii a has length 1', assertion: "expect('a'.length).toBe(1)" },
    ],
    hints: [
      'Characters with code points above U+FFFF require a surrogate pair (2 code units).',
      '`"𠮷".length === 2` even though it is a single Unicode character.',
    ],
    tags: ['String', 'String.prototype.length', 'unicode', 'surrogate', 'advanced'],
  },
]
