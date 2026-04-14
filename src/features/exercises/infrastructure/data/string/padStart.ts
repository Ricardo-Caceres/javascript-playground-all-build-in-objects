import type { Exercise } from '@/shared/types/exercises'

export const padStartExercises: Exercise[] = [
  {
    slug: 'string-pad-start-zero-padding',
    title: 'String.prototype.padStart() — zero-pad numbers',
    description: `## String.prototype.padStart()

\`str.padStart(targetLength, padString?)\` pads the **start** of \`str\` with \`padString\` (default: space) until the total length reaches \`targetLength\`.

**Challenge:** Implement \`zeroPad(n, width)\` that zero-pads a number to the given width.

\`\`\`ts
zeroPad(5, 3)  // → '005'
zeroPad(42, 4) // → '0042'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padStart',
    initialCode: `function zeroPad(n: number, width: number): string {
  // Use String(n).padStart(width, '0')
}`,
    solution: `function zeroPad(n: number, width: number): string {
  return String(n).padStart(width, '0')
}`,
    tests: [
      { description: '5 zero-padded to 3 is 005', assertion: "expect(zeroPad(5, 3)).toBe('005')" },
      { description: '42 zero-padded to 4 is 0042', assertion: "expect(zeroPad(42, 4)).toBe('0042')" },
      { description: '100 zero-padded to 3 is 100 (no padding)', assertion: "expect(zeroPad(100, 3)).toBe('100')" },
      { description: '0 zero-padded to 2 is 00', assertion: "expect(zeroPad(0, 2)).toBe('00')" },
      { description: 'correct length', assertion: "expect(zeroPad(7, 5)).toHaveLength(5)" },
    ],
    hints: [
      'Convert to string first: `String(n).padStart(width, "0")`.',
    ],
    tags: ['String', 'String.prototype.padStart', 'zero-padding', 'beginner'],
  },
  {
    slug: 'string-pad-start-custom-fill',
    title: 'String.prototype.padStart() — custom fill string',
    description: `## String.prototype.padStart() — Custom Fill

Pass a custom fill string to pad with something other than spaces or zeros.

**Challenge:** Implement \`padStars(str, len)\` that pads the start with \`'*'\`.

\`\`\`ts
padStars('hi', 5) // → '***hi'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padStart',
    initialCode: `function padStars(str: string, len: number): string {
  // Use str.padStart(len, '*')
}`,
    solution: `function padStars(str: string, len: number): string {
  return str.padStart(len, '*')
}`,
    tests: [
      { description: 'hi padded to 5 with *', assertion: "expect(padStars('hi', 5)).toBe('***hi')" },
      { description: 'correct length', assertion: "expect(padStars('abc', 6)).toHaveLength(6)" },
      { description: 'no padding needed', assertion: "expect(padStars('hello', 3)).toBe('hello')" },
      { description: 'single char', assertion: "expect(padStars('x', 4)).toBe('***x')" },
      { description: 'empty string padded', assertion: "expect(padStars('', 3)).toBe('***')" },
    ],
    hints: [
      '`str.padStart(len, "*")` fills with asterisks on the left.',
    ],
    tags: ['String', 'String.prototype.padStart', 'custom fill', 'beginner'],
  },
  {
    slug: 'string-pad-start-no-padding',
    title: 'String.prototype.padStart() — no padding when already long enough',
    description: `## String.prototype.padStart() — No-Op

If \`str.length >= targetLength\`, \`.padStart()\` returns \`str\` unchanged.

**Challenge:** Implement \`padToFive(str)\` that pads to length 5.

\`\`\`ts
padToFive('hi')      // → '   hi'
padToFive('hello!')  // → 'hello!'  (unchanged)
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padStart',
    initialCode: `function padToFive(str: string): string {
  // Use str.padStart(5)
}`,
    solution: `function padToFive(str: string): string {
  return str.padStart(5)
}`,
    tests: [
      { description: 'hi padded to 5', assertion: "expect(padToFive('hi')).toBe('   hi')" },
      { description: 'longer string unchanged', assertion: "expect(padToFive('hello!')).toBe('hello!')" },
      { description: 'exactly 5 unchanged', assertion: "expect(padToFive('abcde')).toBe('abcde')" },
      { description: 'empty padded to 5', assertion: "expect(padToFive('')).toBe('     ')" },
      { description: 'result at least 5', assertion: "expect(padToFive('ab').length >= 5).toBe(true)" },
    ],
    hints: [
      'If the string is already 5 or more chars, `.padStart(5)` is a no-op.',
    ],
    tags: ['String', 'String.prototype.padStart', 'beginner'],
  },
  {
    slug: 'string-pad-start-space-padding',
    title: 'String.prototype.padStart() — space padding (default)',
    description: `## String.prototype.padStart() — Default Space Fill

Without a second argument, \`.padStart()\` pads with spaces.

**Challenge:** Implement \`rightAlign(str, width)\` that right-aligns text by padding with spaces.

\`\`\`ts
rightAlign('42', 6) // → '    42'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.padStart',
    initialCode: `function rightAlign(str: string, width: number): string {
  // Use str.padStart(width)
}`,
    solution: `function rightAlign(str: string, width: number): string {
  return str.padStart(width)
}`,
    tests: [
      { description: '42 right-aligned to 6', assertion: "expect(rightAlign('42', 6)).toBe('    42')" },
      { description: 'correct length', assertion: "expect(rightAlign('hi', 8)).toHaveLength(8)" },
      { description: 'padded with spaces', assertion: "expect(rightAlign('x', 3)).toBe('  x')" },
      { description: 'no padding needed', assertion: "expect(rightAlign('hello', 3)).toBe('hello')" },
      { description: 'abc right-aligned to 5', assertion: "expect(rightAlign('abc', 5)).toBe('  abc')" },
    ],
    hints: [
      '`.padStart()` without a fill string uses space characters.',
    ],
    tags: ['String', 'String.prototype.padStart', 'right-align', 'beginner'],
  },
  {
    slug: 'string-pad-start-fixed-width',
    title: 'String.prototype.padStart() — fixed-width number formatting',
    description: `## String.prototype.padStart() — Fixed-Width Formatting

Zero-padding is great for time values like hours and minutes.

**Challenge:** Implement \`formatTime(h, m)\` that formats hours and minutes as \`HH:MM\`.

\`\`\`ts
formatTime(9, 5)  // → '09:05'
formatTime(12, 0) // → '12:00'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.padStart',
    initialCode: `function formatTime(h: number, m: number): string {
  // Zero-pad both h and m to 2 digits using padStart
}`,
    solution: `function formatTime(h: number, m: number): string {
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0')
}`,
    tests: [
      { description: '9:5 formats as 09:05', assertion: "expect(formatTime(9, 5)).toBe('09:05')" },
      { description: '12:0 formats as 12:00', assertion: "expect(formatTime(12, 0)).toBe('12:00')" },
      { description: '0:0 formats as 00:00', assertion: "expect(formatTime(0, 0)).toBe('00:00')" },
      { description: '23:59 formats as 23:59', assertion: "expect(formatTime(23, 59)).toBe('23:59')" },
      { description: 'result has length 5', assertion: "expect(formatTime(1, 1)).toHaveLength(5)" },
    ],
    hints: [
      'Use `String(h).padStart(2, "0")` for hours and the same for minutes.',
    ],
    tags: ['String', 'String.prototype.padStart', 'formatting', 'intermediate'],
  },
]
