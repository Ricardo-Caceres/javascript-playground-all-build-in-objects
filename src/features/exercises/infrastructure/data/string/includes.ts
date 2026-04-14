import type { Exercise } from '@/shared/types/exercises'

export const stringIncludesExercises: Exercise[] = [
  {
    slug: 'string-includes-found',
    title: 'String.prototype.includes() — substring found',
    description: `## String.prototype.includes()

\`str.includes(searchString)\` returns \`true\` if the string contains the given substring.

**Challenge:** Implement \`containsHello(str)\` that checks if \`'hello'\` is in \`str\`.

\`\`\`ts
containsHello('say hello world') // → true
containsHello('goodbye world')   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.includes',
    initialCode: `function containsHello(str: string): boolean {
  // Use str.includes('hello')
}`,
    solution: `function containsHello(str: string): boolean {
  return str.includes('hello')
}`,
    tests: [
      { description: 'found in middle', assertion: "expect(containsHello('say hello world')).toBe(true)" },
      { description: 'not found', assertion: "expect(containsHello('goodbye world')).toBe(false)" },
      { description: 'exact match', assertion: "expect(containsHello('hello')).toBe(true)" },
      { description: 'at start', assertion: "expect(containsHello('hello there')).toBe(true)" },
      { description: 'at end', assertion: "expect(containsHello('say hello')).toBe(true)" },
    ],
    hints: [
      '`.includes()` returns a boolean — no need to check index.',
    ],
    tags: ['String', 'String.prototype.includes', 'beginner'],
  },
  {
    slug: 'string-includes-not-found',
    title: 'String.prototype.includes() — not found',
    description: `## String.prototype.includes() — Missing Substring

**Challenge:** Implement \`lacksDigit(str)\` that returns \`true\` when \`str\` does NOT include any digit. Use \`.includes()\` for a single digit check.

For simplicity, check for the digit \`'5'\`.

\`\`\`ts
lacksDigit('hello') // → true
lacksDigit('h5llo') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.includes',
    initialCode: `function lacksDigit(str: string): boolean {
  // Return true when str does NOT include '5'
}`,
    solution: `function lacksDigit(str: string): boolean {
  return !str.includes('5')
}`,
    tests: [
      { description: 'hello lacks 5', assertion: "expect(lacksDigit('hello')).toBe(true)" },
      { description: 'h5llo has 5', assertion: "expect(lacksDigit('h5llo')).toBe(false)" },
      { description: 'empty lacks 5', assertion: "expect(lacksDigit('')).toBe(true)" },
      { description: '55 has 5', assertion: "expect(lacksDigit('55')).toBe(false)" },
      { description: 'abc lacks 5', assertion: "expect(lacksDigit('abc')).toBe(true)" },
    ],
    hints: [
      'Negate the result with `!` to check for absence.',
    ],
    tags: ['String', 'String.prototype.includes', 'negation', 'beginner'],
  },
  {
    slug: 'string-includes-case-sensitive',
    title: 'String.prototype.includes() — case-sensitive',
    description: `## String.prototype.includes() — Case Sensitivity

\`.includes()\` is case-sensitive.

**Challenge:** Implement \`includesIgnoreCase(str, sub)\` that checks for \`sub\` case-insensitively.

\`\`\`ts
includesIgnoreCase('Hello World', 'hello') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.includes',
    initialCode: `function includesIgnoreCase(str: string, sub: string): boolean {
  // Lowercase both, then use .includes()
}`,
    solution: `function includesIgnoreCase(str: string, sub: string): boolean {
  return str.toLowerCase().includes(sub.toLowerCase())
}`,
    tests: [
      { description: 'hello in Hello World', assertion: "expect(includesIgnoreCase('Hello World', 'hello')).toBe(true)" },
      { description: 'WORLD in Hello World', assertion: "expect(includesIgnoreCase('Hello World', 'WORLD')).toBe(true)" },
      { description: 'xyz not found', assertion: "expect(includesIgnoreCase('Hello World', 'xyz')).toBe(false)" },
      { description: 'exact case match', assertion: "expect(includesIgnoreCase('abc', 'bc')).toBe(true)" },
      { description: 'empty sub always true', assertion: "expect(includesIgnoreCase('hello', '')).toBe(true)" },
    ],
    hints: [
      'Convert both strings to lowercase before calling `.includes()`.',
    ],
    tags: ['String', 'String.prototype.includes', 'case-insensitive', 'intermediate'],
  },
  {
    slug: 'string-includes-with-position',
    title: 'String.prototype.includes() — with position parameter',
    description: `## String.prototype.includes() — Start Position

The optional second argument \`position\` sets where the search starts.

\`\`\`ts
'hello hello'.includes('hello', 1) // → true (found at index 6)
'hello hello'.includes('hello', 7) // → false
\`\`\`

**Challenge:** Implement \`includesAfter(str, sub, pos)\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.includes',
    initialCode: `function includesAfter(str: string, sub: string, pos: number): boolean {
  // Use str.includes(sub, pos)
}`,
    solution: `function includesAfter(str: string, sub: string, pos: number): boolean {
  return str.includes(sub, pos)
}`,
    tests: [
      { description: 'found after pos 1', assertion: "expect(includesAfter('hello hello', 'hello', 1)).toBe(true)" },
      { description: 'not found after pos 7', assertion: "expect(includesAfter('hello hello', 'hello', 7)).toBe(false)" },
      { description: 'found at start', assertion: "expect(includesAfter('abcabc', 'abc', 0)).toBe(true)" },
      { description: 'found at second occurrence', assertion: "expect(includesAfter('abcabc', 'abc', 1)).toBe(true)" },
      { description: 'not found when pos past end', assertion: "expect(includesAfter('abc', 'abc', 3)).toBe(false)" },
    ],
    hints: [
      '`str.includes(search, position)` starts searching from `position`.',
    ],
    tags: ['String', 'String.prototype.includes', 'position', 'intermediate'],
  },
  {
    slug: 'string-includes-empty-always-true',
    title: 'String.prototype.includes() — empty string always returns true',
    description: `## String.prototype.includes() — Empty Substring

Every string includes the empty string \`''\`.

**Challenge:** Implement \`alwaysTrue(str)\` that returns \`str.includes('')\`.

\`\`\`ts
alwaysTrue('anything') // → true
alwaysTrue('')          // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.includes',
    initialCode: `function alwaysTrue(str: string): boolean {
  // Use str.includes('')
}`,
    solution: `function alwaysTrue(str: string): boolean {
  return str.includes('')
}`,
    tests: [
      { description: 'anything includes empty', assertion: "expect(alwaysTrue('anything')).toBe(true)" },
      { description: 'empty includes empty', assertion: "expect(alwaysTrue('')).toBe(true)" },
      { description: 'space includes empty', assertion: "expect(alwaysTrue(' ')).toBe(true)" },
      { description: 'abc includes empty', assertion: "expect(alwaysTrue('abc')).toBe(true)" },
      { description: '123 includes empty', assertion: "expect(alwaysTrue('123')).toBe(true)" },
    ],
    hints: [
      'The empty string is a substring of every string.',
    ],
    tags: ['String', 'String.prototype.includes', 'empty string', 'beginner'],
  },
]
