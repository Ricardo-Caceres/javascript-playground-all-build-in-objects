import type { Exercise } from '@/shared/types/exercises'

export const trimExercises: Exercise[] = [
  {
    slug: 'string-trim-leading-spaces',
    title: 'String.prototype.trim() — leading spaces',
    description: `## String.prototype.trim()

\`str.trim()\` removes whitespace from both the **start** and **end** of a string.

**Challenge:** Implement \`trimStr(str)\` that trims whitespace from both ends.

\`\`\`ts
trimStr('   hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trim',
    initialCode: `function trimStr(str: string): string {
  // Use str.trim()
}`,
    solution: `function trimStr(str: string): string {
  return str.trim()
}`,
    tests: [
      { description: 'removes leading spaces', assertion: "expect(trimStr('   hello')).toBe('hello')" },
      { description: 'no leading spaces unchanged', assertion: "expect(trimStr('hello')).toBe('hello')" },
      { description: 'multiple leading spaces removed', assertion: "expect(trimStr('    hi')).toBe('hi')" },
      { description: 'spaces only becomes empty', assertion: "expect(trimStr('   ')).toBe('')" },
      { description: 'empty string unchanged', assertion: "expect(trimStr('')).toBe('')" },
    ],
    hints: [
      '`trim()` removes all leading and trailing whitespace characters.',
    ],
    tags: ['String', 'String.prototype.trim', 'beginner'],
  },
  {
    slug: 'string-trim-trailing-spaces',
    title: 'String.prototype.trim() — trailing spaces',
    description: `## String.prototype.trim() — Trailing Whitespace

\`.trim()\` also removes spaces at the end of a string.

**Challenge:** Implement \`cleanTrailing(str)\` that removes trailing whitespace.

\`\`\`ts
cleanTrailing('hello   ') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trim',
    initialCode: `function cleanTrailing(str: string): string {
  // Use str.trim()
}`,
    solution: `function cleanTrailing(str: string): string {
  return str.trim()
}`,
    tests: [
      { description: 'removes trailing spaces', assertion: "expect(cleanTrailing('hello   ')).toBe('hello')" },
      { description: 'no trailing spaces unchanged', assertion: "expect(cleanTrailing('hello')).toBe('hello')" },
      { description: 'multiple trailing spaces removed', assertion: "expect(cleanTrailing('hi    ')).toBe('hi')" },
      { description: 'only trailing spaces becomes empty', assertion: "expect(cleanTrailing('   ')).toBe('')" },
      { description: 'world with trailing space', assertion: "expect(cleanTrailing('world ')).toBe('world')" },
    ],
    hints: [
      '`trim()` removes whitespace from the end as well as the start.',
    ],
    tags: ['String', 'String.prototype.trim', 'beginner'],
  },
  {
    slug: 'string-trim-both-ends',
    title: 'String.prototype.trim() — both ends',
    description: `## String.prototype.trim() — Both Ends

\`.trim()\` strips whitespace from both the start and end simultaneously.

**Challenge:** Implement \`trimBoth(str)\` that removes whitespace from both ends.

\`\`\`ts
trimBoth('  hello  ') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trim',
    initialCode: `function trimBoth(str: string): string {
  // Use str.trim()
}`,
    solution: `function trimBoth(str: string): string {
  return str.trim()
}`,
    tests: [
      { description: 'removes both ends whitespace', assertion: "expect(trimBoth('  hello  ')).toBe('hello')" },
      { description: 'world with spaces on both sides', assertion: "expect(trimBoth('  world  ')).toBe('world')" },
      { description: 'preserves internal spaces', assertion: "expect(trimBoth('  hello world  ')).toBe('hello world')" },
      { description: 'only spaces becomes empty', assertion: "expect(trimBoth('     ')).toBe('')" },
      { description: 'no whitespace unchanged', assertion: "expect(trimBoth('test')).toBe('test')" },
    ],
    hints: [
      '`trim()` never removes whitespace from the middle of a string.',
    ],
    tags: ['String', 'String.prototype.trim', 'beginner'],
  },
  {
    slug: 'string-trim-no-whitespace',
    title: 'String.prototype.trim() — no whitespace unchanged',
    description: `## String.prototype.trim() — No Whitespace

If the string has no leading or trailing whitespace, \`.trim()\` returns an equivalent string.

**Challenge:** Implement \`trimClean(str)\` and verify it works on clean strings.

\`\`\`ts
trimClean('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trim',
    initialCode: `function trimClean(str: string): string {
  // Use str.trim()
}`,
    solution: `function trimClean(str: string): string {
  return str.trim()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(trimClean('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(trimClean('world')).toBe('world')" },
      { description: 'abc unchanged', assertion: "expect(trimClean('abc')).toBe('abc')" },
      { description: 'internal spaces preserved', assertion: "expect(trimClean('hello world')).toBe('hello world')" },
      { description: 'empty string unchanged', assertion: "expect(trimClean('')).toBe('')" },
    ],
    hints: [
      '`trim()` on a clean string is a no-op.',
    ],
    tags: ['String', 'String.prototype.trim', 'beginner'],
  },
  {
    slug: 'string-trim-tabs-and-newlines',
    title: 'String.prototype.trim() — tabs and newlines',
    description: `## String.prototype.trim() — Tabs and Newlines

\`.trim()\` removes all whitespace characters: spaces, tabs (\`\\t\`), and newlines (\`\\n\`).

**Challenge:** Implement \`trimAll(str)\` that removes all surrounding whitespace including tabs and newlines.

\`\`\`ts
trimAll('\\t hello \\n') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trim',
    initialCode: `function trimAll(str: string): string {
  // Use str.trim() — also removes tabs and newlines
}`,
    solution: `function trimAll(str: string): string {
  return str.trim()
}`,
    tests: [
      { description: 'removes tab and newline', assertion: "expect(trimAll('\\t hello \\n')).toBe('hello')" },
      { description: 'removes leading tab', assertion: "expect(trimAll('\\thello')).toBe('hello')" },
      { description: 'removes trailing newline', assertion: "expect(trimAll('hello\\n')).toBe('hello')" },
      { description: 'removes mixed whitespace', assertion: "expect(trimAll('\\n\\t hello \\t\\n')).toBe('hello')" },
      { description: 'only tabs become empty', assertion: "expect(trimAll('\\t\\t')).toBe('')" },
    ],
    hints: [
      '`trim()` removes all Unicode whitespace characters, including `\\t`, `\\n`, `\\r`, and spaces.',
    ],
    tags: ['String', 'String.prototype.trim', 'whitespace', 'beginner'],
  },
]
