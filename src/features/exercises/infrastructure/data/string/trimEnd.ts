import type { Exercise } from '@/shared/types/exercises'

export const trimEndExercises: Exercise[] = [
  {
    slug: 'string-trim-end-trailing-spaces',
    title: 'String.prototype.trimEnd() — trailing spaces removed',
    description: `## String.prototype.trimEnd()

\`str.trimEnd()\` removes whitespace from the **end** (right side) of a string only.

**Challenge:** Implement \`trimRight(str)\` that removes trailing whitespace.

\`\`\`ts
trimRight('hello   ') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimEnd',
    initialCode: `function trimRight(str: string): string {
  // Use str.trimEnd()
}`,
    solution: `function trimRight(str: string): string {
  return str.trimEnd()
}`,
    tests: [
      { description: 'removes trailing spaces', assertion: "expect(trimRight('hello   ')).toBe('hello')" },
      { description: 'multiple trailing spaces', assertion: "expect(trimRight('hi    ')).toBe('hi')" },
      { description: 'only trailing whitespace', assertion: "expect(trimRight('   ')).toBe('')" },
      { description: 'no trailing whitespace unchanged', assertion: "expect(trimRight('hello')).toBe('hello')" },
      { description: 'world with trailing space', assertion: "expect(trimRight('world ')).toBe('world')" },
    ],
    hints: [
      '`trimEnd()` only removes whitespace at the end of the string.',
    ],
    tags: ['String', 'String.prototype.trimEnd', 'beginner'],
  },
  {
    slug: 'string-trim-end-leading-preserved',
    title: 'String.prototype.trimEnd() — leading spaces preserved',
    description: `## String.prototype.trimEnd() — Leading Spaces Preserved

\`trimEnd()\` does NOT touch the leading whitespace — only trailing whitespace is removed.

**Challenge:** Implement \`trimEndOnly(str)\` that removes trailing but preserves leading whitespace.

\`\`\`ts
trimEndOnly('  hello  ') // → '  hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimEnd',
    initialCode: `function trimEndOnly(str: string): string {
  // Use str.trimEnd() — leading spaces are kept
}`,
    solution: `function trimEndOnly(str: string): string {
  return str.trimEnd()
}`,
    tests: [
      { description: 'trailing removed, leading preserved', assertion: "expect(trimEndOnly('  hello  ')).toBe('  hello')" },
      { description: 'leading spaces still there', assertion: "expect(trimEndOnly('   hi   ').startsWith('   ')).toBe(true)" },
      { description: 'only trailing spaces removed', assertion: "expect(trimEndOnly('  test  ')).toBe('  test')" },
      { description: 'no trailing, leading kept', assertion: "expect(trimEndOnly('  world')).toBe('  world')" },
      { description: 'only trailing becomes empty', assertion: "expect(trimEndOnly('   ')).toBe('')" },
    ],
    hints: [
      '`trimEnd()` is asymmetric — it only affects the right side of the string.',
    ],
    tags: ['String', 'String.prototype.trimEnd', 'beginner'],
  },
  {
    slug: 'string-trim-end-both-only-leading-preserved',
    title: 'String.prototype.trimEnd() — both ends → only leading preserved',
    description: `## String.prototype.trimEnd() — Only Trailing Removed

When both leading and trailing whitespace exist, \`trimEnd()\` leaves the leading intact.

**Challenge:** Implement \`keepLeading(str)\` using \`trimEnd\`.

\`\`\`ts
keepLeading('   hello   ') // → '   hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimEnd',
    initialCode: `function keepLeading(str: string): string {
  // Use str.trimEnd()
}`,
    solution: `function keepLeading(str: string): string {
  return str.trimEnd()
}`,
    tests: [
      { description: 'leading preserved after trimEnd', assertion: "expect(keepLeading('   hello   ')).toBe('   hello')" },
      { description: 'leading spaces count correct', assertion: "expect(keepLeading('  hi  ').startsWith('  h')).toBe(true)" },
      { description: 'no trailing space after trimEnd', assertion: "expect(keepLeading('  abc  ').endsWith('c')).toBe(true)" },
      { description: 'only leading remains', assertion: "expect(keepLeading('  world  ')).toBe('  world')" },
      { description: 'only leading tabs preserved', assertion: "expect(keepLeading('\\ttest\\t')).toBe('\\ttest')" },
    ],
    hints: [
      'Compare `trim()` (both ends) vs `trimEnd()` (right end only) vs `trimStart()` (left end only).',
    ],
    tags: ['String', 'String.prototype.trimEnd', 'beginner'],
  },
  {
    slug: 'string-trim-end-no-whitespace',
    title: 'String.prototype.trimEnd() — no whitespace unchanged',
    description: `## String.prototype.trimEnd() — Clean String

A string without trailing whitespace is returned unchanged by \`trimEnd()\`.

**Challenge:** Implement \`verifyTrimEnd(str)\` using \`trimEnd\`.

\`\`\`ts
verifyTrimEnd('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimEnd',
    initialCode: `function verifyTrimEnd(str: string): string {
  // Use str.trimEnd()
}`,
    solution: `function verifyTrimEnd(str: string): string {
  return str.trimEnd()
}`,
    tests: [
      { description: 'hello unchanged', assertion: "expect(verifyTrimEnd('hello')).toBe('hello')" },
      { description: 'world unchanged', assertion: "expect(verifyTrimEnd('world')).toBe('world')" },
      { description: 'abc unchanged', assertion: "expect(verifyTrimEnd('abc')).toBe('abc')" },
      { description: 'empty unchanged', assertion: "expect(verifyTrimEnd('')).toBe('')" },
      { description: 'internal spaces preserved', assertion: "expect(verifyTrimEnd('hello world')).toBe('hello world')" },
    ],
    hints: [
      '`trimEnd()` is a no-op when there is no trailing whitespace.',
    ],
    tags: ['String', 'String.prototype.trimEnd', 'beginner'],
  },
  {
    slug: 'string-trim-end-trailing-newline',
    title: 'String.prototype.trimEnd() — trailing newline',
    description: `## String.prototype.trimEnd() — Newline

\`trimEnd()\` also removes trailing newlines and tabs.

**Challenge:** Implement \`stripNewline(str)\` that removes a trailing newline.

\`\`\`ts
stripNewline('hello\\n') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.trimEnd',
    initialCode: `function stripNewline(str: string): string {
  // Use str.trimEnd()
}`,
    solution: `function stripNewline(str: string): string {
  return str.trimEnd()
}`,
    tests: [
      { description: 'removes trailing newline', assertion: "expect(stripNewline('hello\\n')).toBe('hello')" },
      { description: 'removes trailing tab', assertion: "expect(stripNewline('hello\\t')).toBe('hello')" },
      { description: 'removes trailing carriage return', assertion: "expect(stripNewline('hello\\r')).toBe('hello')" },
      { description: 'removes multiple trailing whitespace', assertion: "expect(stripNewline('hello\\n\\t')).toBe('hello')" },
      { description: 'no trailing whitespace unchanged', assertion: "expect(stripNewline('hello')).toBe('hello')" },
    ],
    hints: [
      '`trimEnd()` removes all trailing whitespace characters, including `\\n`, `\\t`, and `\\r`.',
    ],
    tags: ['String', 'String.prototype.trimEnd', 'whitespace', 'beginner'],
  },
]
