import type { Exercise } from '@/shared/types/exercises'

export const substringExercises: Exercise[] = [
  {
    slug: 'string-substring-basic',
    title: 'String.prototype.substring() — basic substring',
    description: `## String.prototype.substring()

\`str.substring(start, end)\` returns the characters from index \`start\` up to (not including) \`end\`.

**Challenge:** Implement \`extractSub(str)\` that extracts characters from index 1 to 4.

\`\`\`ts
extractSub('abcdef') // → 'bcd'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.substring',
    initialCode: `function extractSub(str: string): string {
  // Use str.substring(1, 4)
}`,
    solution: `function extractSub(str: string): string {
  return str.substring(1, 4)
}`,
    tests: [
      { description: 'extracts bcd from abcdef', assertion: "expect(extractSub('abcdef')).toBe('bcd')" },
      { description: 'extracts 123 from 0123456', assertion: "expect(extractSub('0123456')).toBe('123')" },
      { description: 'result length is 3', assertion: "expect(extractSub('abcdef')).toHaveLength(3)" },
      { description: 'extracts ell from hello', assertion: "expect(extractSub('hello!')).toBe('ell')" },
      { description: 'extracts xyz from wxyzab', assertion: "expect(extractSub('wxyzab')).toBe('xyz')" },
    ],
    hints: [
      '`str.substring(1, 4)` returns characters at indices 1, 2, and 3.',
    ],
    tags: ['String', 'String.prototype.substring', 'beginner'],
  },
  {
    slug: 'string-substring-start-equals-end',
    title: 'String.prototype.substring() — start === end returns empty string',
    description: `## String.prototype.substring() — Same Indices

When \`start === end\`, \`.substring()\` returns an empty string.

**Challenge:** Implement \`emptySubstring(str, n)\` that calls \`substring(n, n)\`.

\`\`\`ts
emptySubstring('hello', 2) // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.substring',
    initialCode: `function emptySubstring(str: string, n: number): string {
  // Use str.substring(n, n) — same start and end returns ''
}`,
    solution: `function emptySubstring(str: string, n: number): string {
  return str.substring(n, n)
}`,
    tests: [
      { description: 'same indices returns empty', assertion: "expect(emptySubstring('hello', 2)).toBe('')" },
      { description: 'index 0 same returns empty', assertion: "expect(emptySubstring('abc', 0)).toBe('')" },
      { description: 'result is empty string', assertion: "expect(emptySubstring('world', 3)).toBe('')" },
      { description: 'result has length 0', assertion: "expect(emptySubstring('hello', 1)).toHaveLength(0)" },
      { description: 'result is falsy', assertion: "expect(emptySubstring('test', 1)).toBeFalsy()" },
    ],
    hints: [
      'When start and end are equal, there are no characters to extract.',
    ],
    tags: ['String', 'String.prototype.substring', 'beginner'],
  },
  {
    slug: 'string-substring-start-greater-end',
    title: 'String.prototype.substring() — start > end swaps arguments',
    description: `## String.prototype.substring() — Argument Swap

Unlike \`slice\`, if \`start > end\`, \`.substring()\` swaps them automatically.

**Challenge:** Implement \`substringSwap(str)\` that calls \`substring(5, 2)\` and relies on auto-swap.

\`\`\`ts
substringSwap('abcdefgh') // → 'cde'  (same as substring(2, 5))
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.substring',
    initialCode: `function substringSwap(str: string): string {
  // Use str.substring(5, 2) — arguments are swapped automatically
}`,
    solution: `function substringSwap(str: string): string {
  return str.substring(5, 2)
}`,
    tests: [
      { description: 'substring(5,2) same as substring(2,5)', assertion: "expect(substringSwap('abcdefgh')).toBe('cde')" },
      { description: 'swap gives same as correct order', assertion: "expect('hello'.substring(4, 1)).toBe('ell')" },
      { description: 'result length 3', assertion: "expect(substringSwap('abcdefgh')).toHaveLength(3)" },
      { description: 'swap on 0123456', assertion: "expect('0123456'.substring(5, 2)).toBe('234')" },
      { description: 'swap is symmetric', assertion: "expect('abcdef'.substring(4, 1)).toBe('abcdef'.substring(1, 4))" },
    ],
    hints: [
      '`str.substring(a, b)` treats the arguments as `substring(min(a,b), max(a,b))`.',
    ],
    tags: ['String', 'String.prototype.substring', 'intermediate'],
  },
  {
    slug: 'string-substring-omit-end',
    title: 'String.prototype.substring() — omit end goes to end of string',
    description: `## String.prototype.substring() — Omitting End

If you omit the second argument, \`.substring()\` goes to the end of the string.

**Challenge:** Implement \`fromStart(str, n)\` that returns everything from index \`n\` to the end.

\`\`\`ts
fromStart('hello world', 6) // → 'world'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.substring',
    initialCode: `function fromStart(str: string, n: number): string {
  // Use str.substring(n) — omitting end goes to end of string
}`,
    solution: `function fromStart(str: string, n: number): string {
  return str.substring(n)
}`,
    tests: [
      { description: 'from index 6 of hello world', assertion: "expect(fromStart('hello world', 6)).toBe('world')" },
      { description: 'from index 0 returns full string', assertion: "expect(fromStart('hello', 0)).toBe('hello')" },
      { description: 'from index 3 of abcdef', assertion: "expect(fromStart('abcdef', 3)).toBe('def')" },
      { description: 'from end index returns empty', assertion: "expect(fromStart('hello', 5)).toBe('')" },
      { description: 'from index 1 of hi', assertion: "expect(fromStart('hi', 1)).toBe('i')" },
    ],
    hints: [
      '`str.substring(n)` is equivalent to `str.substring(n, str.length)`.',
    ],
    tags: ['String', 'String.prototype.substring', 'beginner'],
  },
  {
    slug: 'string-substring-first-n',
    title: 'String.prototype.substring() — extract first N chars',
    description: `## String.prototype.substring() — First N Chars

\`str.substring(0, n)\` extracts the first \`n\` characters.

**Challenge:** Implement \`firstN(str, n)\` that returns the first \`n\` characters.

\`\`\`ts
firstN('hello', 3) // → 'hel'
firstN('abcdef', 4) // → 'abcd'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.substring',
    initialCode: `function firstN(str: string, n: number): string {
  // Use str.substring(0, n)
}`,
    solution: `function firstN(str: string, n: number): string {
  return str.substring(0, n)
}`,
    tests: [
      { description: 'first 3 of hello is hel', assertion: "expect(firstN('hello', 3)).toBe('hel')" },
      { description: 'first 4 of abcdef is abcd', assertion: "expect(firstN('abcdef', 4)).toBe('abcd')" },
      { description: 'first 0 is empty', assertion: "expect(firstN('hello', 0)).toBe('')" },
      { description: 'first n has correct length', assertion: "expect(firstN('hello', 2)).toHaveLength(2)" },
      { description: 'first 1 gives first char', assertion: "expect(firstN('world', 1)).toBe('w')" },
    ],
    hints: [
      '`str.substring(0, n)` is a common pattern for truncating strings.',
    ],
    tags: ['String', 'String.prototype.substring', 'beginner'],
  },
]
