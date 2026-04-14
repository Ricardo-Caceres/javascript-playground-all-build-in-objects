import type { Exercise } from '@/shared/types/exercises'

export const stringAtExercises: Exercise[] = [
  {
    slug: 'string-at-positive',
    title: 'String.prototype.at() — positive index',
    description: `## String.prototype.at()

\`String.prototype.at(index)\` returns the character at the given index. For non-negative indices it behaves like bracket notation, but it also accepts negative indices.

**Challenge:** Implement \`getChar(str, i)\` that returns the character at index \`i\` using \`.at()\`.

\`\`\`ts
getChar('hello', 0) // → 'h'
getChar('hello', 1) // → 'e'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.at',
    initialCode: `function getChar(str: string, i: number): string | undefined {
  // Use str.at(i)
}`,
    solution: `function getChar(str: string, i: number): string | undefined {
  return str.at(i)
}`,
    tests: [
      { description: 'index 0 gives first char', assertion: "expect(getChar('hello', 0)).toBe('h')" },
      { description: 'index 1 gives second char', assertion: "expect(getChar('hello', 1)).toBe('e')" },
      { description: 'index 4 gives last char', assertion: "expect(getChar('hello', 4)).toBe('o')" },
      { description: 'works with single char string', assertion: "expect(getChar('x', 0)).toBe('x')" },
      { description: 'out of bounds returns undefined', assertion: "expect(getChar('hi', 10)).toBeUndefined()" },
    ],
    hints: [
      '`str.at(0)` is equivalent to `str[0]` for non-negative indices.',
    ],
    tags: ['String', 'String.prototype.at', 'index', 'beginner'],
  },
  {
    slug: 'string-at-negative',
    title: 'String.prototype.at() — negative index',
    description: `## String.prototype.at() — Negative Index

Negative indices count from the end: \`-1\` is the last character, \`-2\` is the second-to-last, etc.

**Challenge:** Implement \`lastChar(str)\` that returns the last character using \`.at(-1)\`.

\`\`\`ts
lastChar('hello') // → 'o'
lastChar('abc')   // → 'c'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.at',
    initialCode: `function lastChar(str: string): string | undefined {
  // Use str.at(-1) to get the last character
}`,
    solution: `function lastChar(str: string): string | undefined {
  return str.at(-1)
}`,
    tests: [
      { description: 'last char of hello', assertion: "expect(lastChar('hello')).toBe('o')" },
      { description: 'last char of abc', assertion: "expect(lastChar('abc')).toBe('c')" },
      { description: 'single char string', assertion: "expect(lastChar('z')).toBe('z')" },
      { description: 'last char of world', assertion: "expect(lastChar('world')).toBe('d')" },
      { description: 'empty string returns undefined', assertion: "expect(lastChar('')).toBeUndefined()" },
    ],
    hints: [
      '`.at(-1)` is equivalent to `str[str.length - 1]` but much cleaner.',
    ],
    tags: ['String', 'String.prototype.at', 'negative index', 'beginner'],
  },
  {
    slug: 'string-at-second-to-last',
    title: 'String.prototype.at() — second-to-last character',
    description: `## String.prototype.at() — Index -2

\`str.at(-2)\` returns the second-to-last character.

**Challenge:** Implement \`secondToLast(str)\` using \`.at(-2)\`.

\`\`\`ts
secondToLast('hello') // → 'l'
secondToLast('abc')   // → 'b'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.at',
    initialCode: `function secondToLast(str: string): string | undefined {
  // Use str.at(-2)
}`,
    solution: `function secondToLast(str: string): string | undefined {
  return str.at(-2)
}`,
    tests: [
      { description: 'second-to-last of hello', assertion: "expect(secondToLast('hello')).toBe('l')" },
      { description: 'second-to-last of abc', assertion: "expect(secondToLast('abc')).toBe('b')" },
      { description: 'single char returns undefined', assertion: "expect(secondToLast('x')).toBeUndefined()" },
      { description: 'two-char string returns first', assertion: "expect(secondToLast('ab')).toBe('a')" },
      { description: 'second-to-last of world', assertion: "expect(secondToLast('world')).toBe('l')" },
    ],
    hints: [
      '`.at(-2)` counts 2 from the end.',
    ],
    tags: ['String', 'String.prototype.at', 'negative index', 'beginner'],
  },
  {
    slug: 'string-at-middle',
    title: 'String.prototype.at() — middle character',
    description: `## String.prototype.at() — Middle Index

**Challenge:** Implement \`middleChar(str)\` that returns the middle character of an odd-length string using \`.at()\`.

\`\`\`ts
middleChar('hello') // → 'l'
middleChar('abc')   // → 'b'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.at',
    initialCode: `function middleChar(str: string): string | undefined {
  // Calculate the middle index and use str.at(middleIndex)
}`,
    solution: `function middleChar(str: string): string | undefined {
  return str.at(Math.floor(str.length / 2))
}`,
    tests: [
      { description: 'middle of hello', assertion: "expect(middleChar('hello')).toBe('l')" },
      { description: 'middle of abc', assertion: "expect(middleChar('abc')).toBe('b')" },
      { description: 'middle of a', assertion: "expect(middleChar('a')).toBe('a')" },
      { description: 'middle of abcde', assertion: "expect(middleChar('abcde')).toBe('c')" },
      { description: 'middle of xyz', assertion: "expect(middleChar('xyz')).toBe('y')" },
    ],
    hints: [
      'For a string of length `n`, the middle index is `Math.floor(n / 2)`.',
    ],
    tags: ['String', 'String.prototype.at', 'index', 'intermediate'],
  },
  {
    slug: 'string-at-out-of-bounds',
    title: 'String.prototype.at() — out-of-bounds returns undefined',
    description: `## String.prototype.at() — Out-of-Bounds

Both positive out-of-bounds and very negative indices return \`undefined\`.

**Challenge:** Implement \`safeAt(str, i)\` that uses \`.at(i)\` and returns \`'?'\` if the result is \`undefined\`.

\`\`\`ts
safeAt('hi', 0)  // → 'h'
safeAt('hi', 99) // → '?'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.at',
    initialCode: `function safeAt(str: string, i: number): string {
  // Use str.at(i) and fall back to '?' if undefined
}`,
    solution: `function safeAt(str: string, i: number): string {
  return str.at(i) ?? '?'
}`,
    tests: [
      { description: 'returns char when in bounds', assertion: "expect(safeAt('hello', 0)).toBe('h')" },
      { description: 'returns ? for large positive index', assertion: "expect(safeAt('hi', 99)).toBe('?')" },
      { description: 'returns ? for very negative index', assertion: "expect(safeAt('hi', -99)).toBe('?')" },
      { description: 'works with negative -1', assertion: "expect(safeAt('hello', -1)).toBe('o')" },
      { description: 'empty string always ?', assertion: "expect(safeAt('', 0)).toBe('?')" },
    ],
    hints: [
      'Use the nullish coalescing operator `??` to provide a fallback.',
    ],
    tags: ['String', 'String.prototype.at', 'nullish coalescing', 'intermediate'],
  },
]
