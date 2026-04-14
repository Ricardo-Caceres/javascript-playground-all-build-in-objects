import type { Exercise } from '@/shared/types/exercises'

export const stringIndexOfExercises: Exercise[] = [
  {
    slug: 'string-index-of-found',
    title: 'String.prototype.indexOf() — found returns index',
    description: `## String.prototype.indexOf()

\`str.indexOf(searchValue)\` returns the index of the first occurrence of \`searchValue\`, or \`-1\` if not found.

**Challenge:** Implement \`findFirst(str, sub)\` that returns the index of \`sub\` in \`str\`.

\`\`\`ts
findFirst('hello world', 'world') // → 6
findFirst('hello', 'xyz')         // → -1
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.indexOf',
    initialCode: `function findFirst(str: string, sub: string): number {
  // Use str.indexOf(sub)
}`,
    solution: `function findFirst(str: string, sub: string): number {
  return str.indexOf(sub)
}`,
    tests: [
      { description: 'world is at 6', assertion: "expect(findFirst('hello world', 'world')).toBe(6)" },
      { description: 'xyz returns -1', assertion: "expect(findFirst('hello', 'xyz')).toBe(-1)" },
      { description: 'first char at 0', assertion: "expect(findFirst('hello', 'h')).toBe(0)" },
      { description: 'substring in middle', assertion: "expect(findFirst('abcdef', 'cd')).toBe(2)" },
      { description: 'empty sub at 0', assertion: "expect(findFirst('hello', '')).toBe(0)" },
    ],
    hints: [
      '`.indexOf()` returns the zero-based index of the first match, or -1.',
    ],
    tags: ['String', 'String.prototype.indexOf', 'beginner'],
  },
  {
    slug: 'string-index-of-not-found',
    title: 'String.prototype.indexOf() — not found returns -1',
    description: `## String.prototype.indexOf() — Not Found

**Challenge:** Implement \`contains(str, sub)\` that returns \`true\` when \`sub\` is found (i.e. \`indexOf !== -1\`).

\`\`\`ts
contains('hello', 'ell') // → true
contains('hello', 'xyz') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.indexOf',
    initialCode: `function contains(str: string, sub: string): boolean {
  // Use str.indexOf(sub) !== -1
}`,
    solution: `function contains(str: string, sub: string): boolean {
  return str.indexOf(sub) !== -1
}`,
    tests: [
      { description: 'ell is in hello', assertion: "expect(contains('hello', 'ell')).toBe(true)" },
      { description: 'xyz is not in hello', assertion: "expect(contains('hello', 'xyz')).toBe(false)" },
      { description: 'empty sub is always found', assertion: "expect(contains('hello', '')).toBe(true)" },
      { description: 'exact match', assertion: "expect(contains('abc', 'abc')).toBe(true)" },
      { description: 'empty string contains nothing non-empty', assertion: "expect(contains('', 'a')).toBe(false)" },
    ],
    hints: [
      '`indexOf() !== -1` is the classic pre-ES6 way to check if a substring exists.',
    ],
    tags: ['String', 'String.prototype.indexOf', 'beginner'],
  },
  {
    slug: 'string-index-of-from-index',
    title: 'String.prototype.indexOf() — fromIndex parameter',
    description: `## String.prototype.indexOf() — fromIndex

The optional second argument sets the start position of the search.

**Challenge:** Implement \`findAfter(str, sub, from)\` using \`.indexOf(sub, from)\`.

\`\`\`ts
findAfter('hello hello', 'hello', 1) // → 6
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.indexOf',
    initialCode: `function findAfter(str: string, sub: string, from: number): number {
  // Use str.indexOf(sub, from)
}`,
    solution: `function findAfter(str: string, sub: string, from: number): number {
  return str.indexOf(sub, from)
}`,
    tests: [
      { description: 'finds second hello', assertion: "expect(findAfter('hello hello', 'hello', 1)).toBe(6)" },
      { description: 'not found after end', assertion: "expect(findAfter('hello', 'h', 1)).toBe(-1)" },
      { description: 'finds at exact from', assertion: "expect(findAfter('abcabc', 'abc', 3)).toBe(3)" },
      { description: 'from=0 same as normal', assertion: "expect(findAfter('hello', 'ell', 0)).toBe(1)" },
      { description: 'not found with large from', assertion: "expect(findAfter('abc', 'a', 5)).toBe(-1)" },
    ],
    hints: [
      '`str.indexOf(sub, from)` starts scanning at index `from`.',
    ],
    tags: ['String', 'String.prototype.indexOf', 'fromIndex', 'intermediate'],
  },
  {
    slug: 'string-index-of-first-occurrence',
    title: 'String.prototype.indexOf() — first occurrence only',
    description: `## String.prototype.indexOf() — First Occurrence

\`.indexOf()\` returns only the **first** occurrence. Use \`.lastIndexOf()\` for the last.

**Challenge:** Implement \`firstOccurrence(str, ch)\` using \`.indexOf()\`.

\`\`\`ts
firstOccurrence('abacaba', 'a') // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.indexOf',
    initialCode: `function firstOccurrence(str: string, ch: string): number {
  // Use str.indexOf(ch)
}`,
    solution: `function firstOccurrence(str: string, ch: string): number {
  return str.indexOf(ch)
}`,
    tests: [
      { description: 'first a in abacaba is 0', assertion: "expect(firstOccurrence('abacaba', 'a')).toBe(0)" },
      { description: 'first l in hello is 2', assertion: "expect(firstOccurrence('hello', 'l')).toBe(2)" },
      { description: 'not found returns -1', assertion: "expect(firstOccurrence('hello', 'z')).toBe(-1)" },
      { description: 'first occurrence, not last', assertion: "expect(firstOccurrence('aabbcc', 'b')).toBe(2)" },
      { description: 'only one occurrence', assertion: "expect(firstOccurrence('hello', 'h')).toBe(0)" },
    ],
    hints: [
      '`.indexOf()` stops at the first match and does not continue.',
    ],
    tags: ['String', 'String.prototype.indexOf', 'beginner'],
  },
  {
    slug: 'string-index-of-empty-always-zero',
    title: 'String.prototype.indexOf() — empty string always at 0',
    description: `## String.prototype.indexOf() — Empty String

\`str.indexOf('')\` always returns \`0\` regardless of the string content.

**Challenge:** Implement \`emptyIndex(str)\` that returns \`str.indexOf('')\`.

\`\`\`ts
emptyIndex('hello') // → 0
emptyIndex('')       // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.indexOf',
    initialCode: `function emptyIndex(str: string): number {
  // Use str.indexOf('')
}`,
    solution: `function emptyIndex(str: string): number {
  return str.indexOf('')
}`,
    tests: [
      { description: 'hello returns 0', assertion: "expect(emptyIndex('hello')).toBe(0)" },
      { description: 'empty string returns 0', assertion: "expect(emptyIndex('')).toBe(0)" },
      { description: 'abc returns 0', assertion: "expect(emptyIndex('abc')).toBe(0)" },
      { description: 'xyz returns 0', assertion: "expect(emptyIndex('xyz')).toBe(0)" },
      { description: 'space returns 0', assertion: "expect(emptyIndex(' ')).toBe(0)" },
    ],
    hints: [
      'The empty string is found at position 0 in every string.',
    ],
    tags: ['String', 'String.prototype.indexOf', 'empty string', 'beginner'],
  },
]
