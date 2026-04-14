import type { Exercise } from '@/shared/types/exercises'

export const startsWithExercises: Exercise[] = [
  {
    slug: 'string-starts-with-basic',
    title: 'String.prototype.startsWith() — basic match',
    description: `## String.prototype.startsWith()

\`str.startsWith(searchString)\` returns \`true\` if \`str\` begins with \`searchString\`.

**Challenge:** Implement \`startsWithHello(str)\` that checks if a string starts with \`'hello'\`.

\`\`\`ts
startsWithHello('hello world') // → true
startsWithHello('world hello') // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.startsWith',
    initialCode: `function startsWithHello(str: string): boolean {
  // Use str.startsWith('hello')
}`,
    solution: `function startsWithHello(str: string): boolean {
  return str.startsWith('hello')
}`,
    tests: [
      { description: 'hello world starts with hello', assertion: "expect(startsWithHello('hello world')).toBe(true)" },
      { description: 'world hello does not start with hello', assertion: "expect(startsWithHello('world hello')).toBe(false)" },
      { description: 'exactly hello is true', assertion: "expect(startsWithHello('hello')).toBe(true)" },
      { description: 'empty string is false', assertion: "expect(startsWithHello('')).toBe(false)" },
      { description: 'hello! starts with hello', assertion: "expect(startsWithHello('hello!')).toBe(true)" },
    ],
    hints: [
      '`str.startsWith(searchString)` returns `true` when `str` begins with `searchString`.',
    ],
    tags: ['String', 'String.prototype.startsWith', 'beginner'],
  },
  {
    slug: 'string-starts-with-no-match',
    title: 'String.prototype.startsWith() — no match',
    description: `## String.prototype.startsWith() — No Match

Returns \`false\` when the string does not start with the given prefix.

**Challenge:** Implement \`doesNotStartWithA(str)\` that returns \`true\` if \`str\` does NOT start with \`'A'\`.

\`\`\`ts
doesNotStartWithA('Banana') // → false
doesNotStartWithA('cherry') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.startsWith',
    initialCode: `function doesNotStartWithA(str: string): boolean {
  // Use !str.startsWith('A')
}`,
    solution: `function doesNotStartWithA(str: string): boolean {
  return !str.startsWith('A')
}`,
    tests: [
      { description: 'Banana starts with A, returns false', assertion: "expect(doesNotStartWithA('Banana')).toBe(false)" },
      { description: 'cherry does not start with A, returns true', assertion: "expect(doesNotStartWithA('cherry')).toBe(true)" },
      { description: 'Apple starts with A, returns false', assertion: "expect(doesNotStartWithA('Apple')).toBe(false)" },
      { description: 'empty string does not start with A', assertion: "expect(doesNotStartWithA('')).toBe(true)" },
      { description: 'lowercase a is not A', assertion: "expect(doesNotStartWithA('apple')).toBe(true)" },
    ],
    hints: [
      '`startsWith` is case-sensitive, so `"a"` and `"A"` are different.',
    ],
    tags: ['String', 'String.prototype.startsWith', 'beginner'],
  },
  {
    slug: 'string-starts-with-case-sensitive',
    title: 'String.prototype.startsWith() — case-sensitive',
    description: `## String.prototype.startsWith() — Case Sensitivity

\`.startsWith()\` is case-sensitive. \`'Hello'\` does not start with \`'hello'\`.

**Challenge:** Implement \`startsWithExact(str, prefix)\` that checks the prefix case-sensitively.

\`\`\`ts
startsWithExact('Hello', 'hello') // → false
startsWithExact('Hello', 'Hello') // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.startsWith',
    initialCode: `function startsWithExact(str: string, prefix: string): boolean {
  // Use str.startsWith(prefix)
}`,
    solution: `function startsWithExact(str: string, prefix: string): boolean {
  return str.startsWith(prefix)
}`,
    tests: [
      { description: 'Hello does not start with hello', assertion: "expect(startsWithExact('Hello', 'hello')).toBe(false)" },
      { description: 'Hello starts with Hello', assertion: "expect(startsWithExact('Hello', 'Hello')).toBe(true)" },
      { description: 'HELLO does not start with hello', assertion: "expect(startsWithExact('HELLO', 'hello')).toBe(false)" },
      { description: 'hello starts with h', assertion: "expect(startsWithExact('hello', 'h')).toBe(true)" },
      { description: 'case must match exactly', assertion: "expect(startsWithExact('World', 'W')).toBe(true)" },
    ],
    hints: [
      '`startsWith` performs a case-sensitive comparison.',
    ],
    tags: ['String', 'String.prototype.startsWith', 'case-sensitive', 'beginner'],
  },
  {
    slug: 'string-starts-with-position',
    title: 'String.prototype.startsWith() — with position param',
    description: `## String.prototype.startsWith() — Position Parameter

The optional second argument \`position\` specifies where to start the search.

**Challenge:** Implement \`startsAtPos(str, search, pos)\` that checks if \`str\` starts with \`search\` at position \`pos\`.

\`\`\`ts
startsAtPos('hello world', 'world', 6) // → true
startsAtPos('hello world', 'hello', 6) // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.startsWith',
    initialCode: `function startsAtPos(str: string, search: string, pos: number): boolean {
  // Use str.startsWith(search, pos)
}`,
    solution: `function startsAtPos(str: string, search: string, pos: number): boolean {
  return str.startsWith(search, pos)
}`,
    tests: [
      { description: 'world at position 6', assertion: "expect(startsAtPos('hello world', 'world', 6)).toBe(true)" },
      { description: 'hello not at position 6', assertion: "expect(startsAtPos('hello world', 'hello', 6)).toBe(false)" },
      { description: 'hello at position 0', assertion: "expect(startsAtPos('hello world', 'hello', 0)).toBe(true)" },
      { description: 'e at position 1', assertion: "expect(startsAtPos('hello', 'e', 1)).toBe(true)" },
      { description: 'l at position 2', assertion: "expect(startsAtPos('hello', 'l', 2)).toBe(true)" },
    ],
    hints: [
      'The second argument shifts the starting position of the search.',
    ],
    tags: ['String', 'String.prototype.startsWith', 'position', 'intermediate'],
  },
  {
    slug: 'string-starts-with-empty',
    title: 'String.prototype.startsWith() — empty string always true',
    description: `## String.prototype.startsWith() — Empty String

Every string starts with an empty string \`''\`, so \`.startsWith('')\` always returns \`true\`.

**Challenge:** Implement \`alwaysTrue(str)\` that checks if \`str\` starts with \`''\`.

\`\`\`ts
alwaysTrue('anything') // → true
alwaysTrue('')         // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.startsWith',
    initialCode: `function alwaysTrue(str: string): boolean {
  // Use str.startsWith('')
}`,
    solution: `function alwaysTrue(str: string): boolean {
  return str.startsWith('')
}`,
    tests: [
      { description: 'any string starts with empty', assertion: "expect(alwaysTrue('anything')).toBe(true)" },
      { description: 'empty string starts with empty', assertion: "expect(alwaysTrue('')).toBe(true)" },
      { description: 'hello starts with empty', assertion: "expect(alwaysTrue('hello')).toBe(true)" },
      { description: 'single char starts with empty', assertion: "expect(alwaysTrue('x')).toBe(true)" },
      { description: 'spaces start with empty', assertion: "expect(alwaysTrue('   ')).toBe(true)" },
    ],
    hints: [
      'The empty string `""` is a prefix of every string.',
    ],
    tags: ['String', 'String.prototype.startsWith', 'beginner'],
  },
]
