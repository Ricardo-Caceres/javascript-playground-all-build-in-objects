import type { Exercise } from '@/shared/types/exercises'

export const stringLastIndexOfExercises: Exercise[] = [
  {
    slug: 'string-last-index-of-basic',
    title: 'String.prototype.lastIndexOf() — last occurrence',
    description: `## String.prototype.lastIndexOf()

\`str.lastIndexOf(searchValue)\` returns the index of the **last** occurrence of \`searchValue\`, or \`-1\` if not found.

**Challenge:** Implement \`findLast(str, sub)\` using \`.lastIndexOf()\`.

\`\`\`ts
findLast('abcabc', 'abc') // → 3
findLast('hello', 'l')    // → 3
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.lastIndexOf',
    initialCode: `function findLast(str: string, sub: string): number {
  // Use str.lastIndexOf(sub)
}`,
    solution: `function findLast(str: string, sub: string): number {
  return str.lastIndexOf(sub)
}`,
    tests: [
      { description: 'last abc in abcabc is 3', assertion: "expect(findLast('abcabc', 'abc')).toBe(3)" },
      { description: 'last l in hello is 3', assertion: "expect(findLast('hello', 'l')).toBe(3)" },
      { description: 'not found returns -1', assertion: "expect(findLast('hello', 'z')).toBe(-1)" },
      { description: 'only one occurrence', assertion: "expect(findLast('hello', 'h')).toBe(0)" },
      { description: 'last a in banana', assertion: "expect(findLast('banana', 'a')).toBe(5)" },
    ],
    hints: [
      '`.lastIndexOf()` scans from right to left and returns the last match.',
    ],
    tags: ['String', 'String.prototype.lastIndexOf', 'beginner'],
    usageExample: {
      code: `const str = 'abcabc'
str.lastIndexOf('a')    // → 3
str.lastIndexOf('z')    // → -1
str.lastIndexOf('b', 3) // → 1`,
      explanation: {
        en: "Use lastIndexOf() to find the index of the last occurrence of a substring, searching from right to left.",
        es: "Usa lastIndexOf() para encontrar el índice de la última ocurrencia de una subcadena, buscando de derecha a izquierda.",
      },
    },
  },
  {
    slug: 'string-last-index-of-not-found',
    title: 'String.prototype.lastIndexOf() — not found returns -1',
    description: `## String.prototype.lastIndexOf() — Not Found

**Challenge:** Implement \`notPresent(str, sub)\` that returns \`true\` when \`sub\` is not in \`str\`.

\`\`\`ts
notPresent('hello', 'xyz') // → true
notPresent('hello', 'ell') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.lastIndexOf',
    initialCode: `function notPresent(str: string, sub: string): boolean {
  // Return true if str.lastIndexOf(sub) === -1
}`,
    solution: `function notPresent(str: string, sub: string): boolean {
  return str.lastIndexOf(sub) === -1
}`,
    tests: [
      { description: 'xyz not in hello', assertion: "expect(notPresent('hello', 'xyz')).toBe(true)" },
      { description: 'ell is in hello', assertion: "expect(notPresent('hello', 'ell')).toBe(false)" },
      { description: 'empty string always present', assertion: "expect(notPresent('hello', '')).toBe(false)" },
      { description: 'z not in abc', assertion: "expect(notPresent('abc', 'z')).toBe(true)" },
      { description: 'abc is in abc', assertion: "expect(notPresent('abc', 'abc')).toBe(false)" },
    ],
    hints: [
      '`.lastIndexOf()` returns `-1` when not found, just like `.indexOf()`.',
    ],
    tags: ['String', 'String.prototype.lastIndexOf', 'beginner'],
    usageExample: {
      code: `const str = 'abcabc'
str.lastIndexOf('a')    // → 3
str.lastIndexOf('z')    // → -1
str.lastIndexOf('b', 3) // → 1`,
      explanation: {
        en: "Use lastIndexOf() to find the index of the last occurrence of a substring, searching from right to left.",
        es: "Usa lastIndexOf() para encontrar el índice de la última ocurrencia de una subcadena, buscando de derecha a izquierda.",
      },
    },
  },
  {
    slug: 'string-last-index-of-from-index',
    title: 'String.prototype.lastIndexOf() — fromIndex limits search',
    description: `## String.prototype.lastIndexOf() — fromIndex

The optional second argument \`fromIndex\` tells the search to start from that position and go **backward**.

**Challenge:** Implement \`lastBefore(str, sub, pos)\` using \`.lastIndexOf(sub, pos)\`.

\`\`\`ts
lastBefore('abcabc', 'a', 4) // → 3
lastBefore('abcabc', 'a', 2) // → 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.lastIndexOf',
    initialCode: `function lastBefore(str: string, sub: string, pos: number): number {
  // Use str.lastIndexOf(sub, pos)
}`,
    solution: `function lastBefore(str: string, sub: string, pos: number): number {
  return str.lastIndexOf(sub, pos)
}`,
    tests: [
      { description: 'last a before 4 in abcabc is 3', assertion: "expect(lastBefore('abcabc', 'a', 4)).toBe(3)" },
      { description: 'last a before 2 in abcabc is 0', assertion: "expect(lastBefore('abcabc', 'a', 2)).toBe(0)" },
      { description: 'last l before 3 in hello is 3', assertion: "expect(lastBefore('hello', 'l', 3)).toBe(3)" },
      { description: 'last l before 2 in hello is 2', assertion: "expect(lastBefore('hello', 'l', 2)).toBe(2)" },
      { description: 'not found with restricted pos', assertion: "expect(lastBefore('hello', 'o', 2)).toBe(-1)" },
    ],
    hints: [
      '`str.lastIndexOf(sub, fromIndex)` searches backward starting from `fromIndex`.',
    ],
    tags: ['String', 'String.prototype.lastIndexOf', 'fromIndex', 'intermediate'],
    usageExample: {
      code: `const str = 'abcabc'
str.lastIndexOf('a')    // → 3
str.lastIndexOf('z')    // → -1
str.lastIndexOf('b', 3) // → 1`,
      explanation: {
        en: "Use lastIndexOf() to find the index of the last occurrence of a substring, searching from right to left.",
        es: "Usa lastIndexOf() para encontrar el índice de la última ocurrencia de una subcadena, buscando de derecha a izquierda.",
      },
    },
  },
  {
    slug: 'string-last-index-of-multiple-occurrences',
    title: 'String.prototype.lastIndexOf() — multiple occurrences',
    description: `## String.prototype.lastIndexOf() — Multiple Occurrences

When there are multiple matches, \`.lastIndexOf()\` returns the rightmost one.

**Challenge:** Implement \`lastOccurrence(str, ch)\` using \`.lastIndexOf()\`.

\`\`\`ts
lastOccurrence('abracadabra', 'a') // → 10
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.lastIndexOf',
    initialCode: `function lastOccurrence(str: string, ch: string): number {
  // Use str.lastIndexOf(ch)
}`,
    solution: `function lastOccurrence(str: string, ch: string): number {
  return str.lastIndexOf(ch)
}`,
    tests: [
      { description: 'last a in abracadabra is 10', assertion: "expect(lastOccurrence('abracadabra', 'a')).toBe(10)" },
      { description: 'last r in abracadabra is 9', assertion: "expect(lastOccurrence('abracadabra', 'r')).toBe(9)" },
      { description: 'single char', assertion: "expect(lastOccurrence('a', 'a')).toBe(0)" },
      { description: 'last o in hello world', assertion: "expect(lastOccurrence('hello world', 'o')).toBe(7)" },
      { description: 'not found', assertion: "expect(lastOccurrence('hello', 'z')).toBe(-1)" },
    ],
    hints: [
      '`.lastIndexOf()` scans from the end, so it finds the rightmost match.',
    ],
    tags: ['String', 'String.prototype.lastIndexOf', 'beginner'],
    usageExample: {
      code: `const str = 'abcabc'
str.lastIndexOf('a')    // → 3
str.lastIndexOf('z')    // → -1
str.lastIndexOf('b', 3) // → 1`,
      explanation: {
        en: "Use lastIndexOf() to find the index of the last occurrence of a substring, searching from right to left.",
        es: "Usa lastIndexOf() para encontrar el índice de la última ocurrencia de una subcadena, buscando de derecha a izquierda.",
      },
    },
  },
  {
    slug: 'string-last-index-of-case-sensitive',
    title: 'String.prototype.lastIndexOf() — case-sensitive',
    description: `## String.prototype.lastIndexOf() — Case Sensitivity

Like \`.indexOf()\`, \`.lastIndexOf()\` is case-sensitive.

**Challenge:** Implement \`lastIndexIgnoreCase(str, sub)\` that searches case-insensitively.

\`\`\`ts
lastIndexIgnoreCase('Hello World Hello', 'hello') // → 12
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.lastIndexOf',
    initialCode: `function lastIndexIgnoreCase(str: string, sub: string): number {
  // Lowercase both, then use lastIndexOf
}`,
    solution: `function lastIndexIgnoreCase(str: string, sub: string): number {
  return str.toLowerCase().lastIndexOf(sub.toLowerCase())
}`,
    tests: [
      { description: 'last hello in Hello World Hello', assertion: "expect(lastIndexIgnoreCase('Hello World Hello', 'hello')).toBe(12)" },
      { description: 'case-insensitive WORLD', assertion: "expect(lastIndexIgnoreCase('Hello World', 'WORLD')).toBe(6)" },
      { description: 'not found', assertion: "expect(lastIndexIgnoreCase('hello', 'xyz')).toBe(-1)" },
      { description: 'exact match', assertion: "expect(lastIndexIgnoreCase('abc', 'abc')).toBe(0)" },
      { description: 'mixed case sub', assertion: "expect(lastIndexIgnoreCase('abcABC', 'abc')).toBe(3)" },
    ],
    hints: [
      'Convert both to lowercase before calling `.lastIndexOf()`.',
    ],
    tags: ['String', 'String.prototype.lastIndexOf', 'case-insensitive', 'intermediate'],
    usageExample: {
      code: `const str = 'abcabc'
str.lastIndexOf('a')    // → 3
str.lastIndexOf('z')    // → -1
str.lastIndexOf('b', 3) // → 1`,
      explanation: {
        en: "Use lastIndexOf() to find the index of the last occurrence of a substring, searching from right to left.",
        es: "Usa lastIndexOf() para encontrar el índice de la última ocurrencia de una subcadena, buscando de derecha a izquierda.",
      },
    },
  },
]
