import type { Exercise } from '@/shared/types/exercises'

export const padEndExercises: Exercise[] = [
  {
    slug: 'string-pad-end-basic',
    title: 'String.prototype.padEnd() — basic padding',
    description: `## String.prototype.padEnd()

\`str.padEnd(targetLength, padString?)\` pads the **end** of \`str\` with \`padString\` (default: space) until the total length reaches \`targetLength\`.

**Challenge:** Implement \`padRight(str, len)\` that pads with spaces to the given length.

\`\`\`ts
padRight('hi', 5) // → 'hi   '
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padEnd',
    initialCode: `function padRight(str: string, len: number): string {
  // Use str.padEnd(len)
}`,
    solution: `function padRight(str: string, len: number): string {
  return str.padEnd(len)
}`,
    tests: [
      { description: 'hi padded to 5', assertion: "expect(padRight('hi', 5)).toBe('hi   ')" },
      { description: 'has correct length', assertion: "expect(padRight('hello', 8)).toHaveLength(8)" },
      { description: 'no padding when already long enough', assertion: "expect(padRight('hello', 3)).toBe('hello')" },
      { description: 'pads with spaces', assertion: "expect(padRight('a', 4)).toBe('a   ')" },
      { description: 'empty string padded', assertion: "expect(padRight('', 3)).toBe('   ')" },
    ],
    hints: [
      '`.padEnd()` adds padding to the end (right side) of the string.',
    ],
    tags: ['String', 'String.prototype.padEnd', 'padding', 'beginner'],
  },
  {
    slug: 'string-pad-end-custom-fill',
    title: 'String.prototype.padEnd() — custom fill string',
    description: `## String.prototype.padEnd() — Custom Fill

Pass a second argument to use a custom fill string instead of spaces.

**Challenge:** Implement \`padDots(str, len)\` that pads the end with dots \`'.'\`.

\`\`\`ts
padDots('hi', 6) // → 'hi....'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padEnd',
    initialCode: `function padDots(str: string, len: number): string {
  // Use str.padEnd(len, '.')
}`,
    solution: `function padDots(str: string, len: number): string {
  return str.padEnd(len, '.')
}`,
    tests: [
      { description: 'hi dotted to 6', assertion: "expect(padDots('hi', 6)).toBe('hi....')" },
      { description: 'correct length', assertion: "expect(padDots('abc', 7)).toHaveLength(7)" },
      { description: 'no padding needed', assertion: "expect(padDots('hello', 3)).toBe('hello')" },
      { description: 'single char padded', assertion: "expect(padDots('x', 4)).toBe('x...')" },
      { description: 'empty string', assertion: "expect(padDots('', 3)).toBe('...')" },
    ],
    hints: [
      '`str.padEnd(length, ".")` fills with dots.',
    ],
    tags: ['String', 'String.prototype.padEnd', 'custom fill', 'beginner'],
  },
  {
    slug: 'string-pad-end-no-padding',
    title: 'String.prototype.padEnd() — no padding when already long enough',
    description: `## String.prototype.padEnd() — No-Op

If \`str.length >= targetLength\`, \`.padEnd()\` returns \`str\` unchanged.

**Challenge:** Implement \`padToTen(str)\` that pads to length 10.

\`\`\`ts
padToTen('hello world!') // → 'hello world!'  (unchanged, already > 10)
padToTen('hello')        // → 'hello     '
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padEnd',
    initialCode: `function padToTen(str: string): string {
  // Use str.padEnd(10)
}`,
    solution: `function padToTen(str: string): string {
  return str.padEnd(10)
}`,
    tests: [
      { description: 'long string unchanged', assertion: "expect(padToTen('hello world!')).toBe('hello world!')" },
      { description: 'short string padded', assertion: "expect(padToTen('hello')).toBe('hello     ')" },
      { description: 'exactly 10 unchanged', assertion: "expect(padToTen('0123456789')).toBe('0123456789')" },
      { description: 'empty padded to 10', assertion: "expect(padToTen('')).toHaveLength(10)" },
      { description: 'result at least 10', assertion: "expect(padToTen('hi').length >= 10).toBe(true)" },
    ],
    hints: [
      'If the string is already at or beyond the target length, `.padEnd()` returns it as-is.',
    ],
    tags: ['String', 'String.prototype.padEnd', 'beginner'],
  },
  {
    slug: 'string-pad-end-truncated-fill',
    title: 'String.prototype.padEnd() — fill string is truncated if needed',
    description: `## String.prototype.padEnd() — Truncated Fill

If the fill string is longer than needed, it is truncated.

\`'ab'.padEnd(5, 'XYZ')\` → \`'abXYZ'\` (fill truncated to exactly fit)
\`'ab'.padEnd(6, 'XYZ')\` → \`'abXYZX'\`

**Challenge:** Implement \`padPattern(str, len)\` that pads with \`'123'\`.

\`\`\`ts
padPattern('ab', 7) // → 'ab12312'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.padEnd',
    initialCode: `function padPattern(str: string, len: number): string {
  // Use str.padEnd(len, '123')
}`,
    solution: `function padPattern(str: string, len: number): string {
  return str.padEnd(len, '123')
}`,
    tests: [
      { description: 'ab padded to 7 with 123', assertion: "expect(padPattern('ab', 7)).toBe('ab12312')" },
      { description: 'ab padded to 5', assertion: "expect(padPattern('ab', 5)).toBe('ab123')" },
      { description: 'ab padded to 8', assertion: "expect(padPattern('ab', 8)).toBe('ab123123')" },
      { description: 'correct length', assertion: "expect(padPattern('x', 6)).toHaveLength(6)" },
      { description: 'no padding needed', assertion: "expect(padPattern('hello', 3)).toBe('hello')" },
    ],
    hints: [
      'The fill string cycles: `"123"` → `"123123..."` truncated to fit the gap.',
    ],
    tags: ['String', 'String.prototype.padEnd', 'fill string', 'intermediate'],
  },
  {
    slug: 'string-pad-end-fixed-width',
    title: 'String.prototype.padEnd() — fixed-width table formatting',
    description: `## String.prototype.padEnd() — Fixed-Width Formatting

\`.padEnd()\` is useful for aligning text in fixed-width columns.

**Challenge:** Implement \`formatRow(label, value)\` that left-aligns a label in a 15-character field and appends the value.

\`\`\`ts
formatRow('Name', 'Alice') // → 'Name           Alice'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.padEnd',
    initialCode: `function formatRow(label: string, value: string): string {
  // Pad label to 15 chars, then concatenate value
}`,
    solution: `function formatRow(label: string, value: string): string {
  return label.padEnd(15) + value
}`,
    tests: [
      { description: 'Name padded then Alice', assertion: "expect(formatRow('Name', 'Alice')).toBe('Name           Alice')" },
      { description: 'label column is 15 chars', assertion: "expect(formatRow('Hi', 'there').indexOf('there')).toBe(15)" },
      { description: 'long label not truncated', assertion: "expect(formatRow('VeryLongLabel!!', 'x')).toContain('x')" },
      { description: 'empty label padded', assertion: "expect(formatRow('', 'val').startsWith(' ')).toBe(true)" },
      { description: 'result contains value', assertion: "expect(formatRow('key', 'val')).toContain('val')" },
    ],
    hints: [
      '`label.padEnd(15)` ensures the label takes exactly 15 characters.',
    ],
    tags: ['String', 'String.prototype.padEnd', 'formatting', 'intermediate'],
  },
]
