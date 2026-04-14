import type { Exercise } from '@/shared/types/exercises'

export const repeatExercises: Exercise[] = [
  {
    slug: 'string-repeat-basic',
    title: 'String.prototype.repeat() — basic repetition',
    description: `## String.prototype.repeat()

\`str.repeat(count)\` returns a new string with \`str\` repeated \`count\` times.

**Challenge:** Implement \`repeatStr(str, n)\` that returns \`str\` repeated \`n\` times.

\`\`\`ts
repeatStr('ab', 3) // → 'ababab'
repeatStr('x', 0)  // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.repeat',
    initialCode: `function repeatStr(str: string, n: number): string {
  // Use str.repeat(n) to return the string repeated n times
}`,
    solution: `function repeatStr(str: string, n: number): string {
  return str.repeat(n)
}`,
    tests: [
      { description: 'repeats ab 3 times', assertion: "expect(repeatStr('ab', 3)).toBe('ababab')" },
      { description: 'zero count returns empty string', assertion: "expect(repeatStr('x', 0)).toBe('')" },
      { description: 'count of 1 returns same string', assertion: "expect(repeatStr('hello', 1)).toBe('hello')" },
      { description: 'repeats single char', assertion: "expect(repeatStr('-', 5)).toBe('-----')" },
      { description: 'empty string repeated is empty', assertion: "expect(repeatStr('', 10)).toBe('')" },
    ],
    hints: [
      '`str.repeat(0)` always returns an empty string.',
      '`str.repeat(1)` returns a copy of the original string.',
    ],
    tags: ['String', 'String.prototype.repeat', 'beginner'],
  },
  {
    slug: 'string-repeat-zero-count',
    title: 'String.prototype.repeat() — zero count',
    description: `## String.prototype.repeat() — Zero Count

Calling \`.repeat(0)\` always returns an empty string regardless of the original string.

**Challenge:** Implement \`isRepeatEmpty(str)\` that returns \`true\` if repeating \`str\` zero times gives an empty string.

\`\`\`ts
isRepeatEmpty('hello') // → true
isRepeatEmpty('')      // → true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.repeat',
    initialCode: `function isRepeatEmpty(str: string): boolean {
  // Use str.repeat(0) and check if it equals ''
}`,
    solution: `function isRepeatEmpty(str: string): boolean {
  return str.repeat(0) === ''
}`,
    tests: [
      { description: 'any string repeated 0 times is empty', assertion: "expect(isRepeatEmpty('hello')).toBe(true)" },
      { description: 'empty string repeated 0 times is empty', assertion: "expect(isRepeatEmpty('')).toBe(true)" },
      { description: 'single char repeated 0 times is empty', assertion: "expect(isRepeatEmpty('a')).toBe(true)" },
      { description: 'repeat(0) has length 0', assertion: "expect('abc'.repeat(0)).toHaveLength(0)" },
      { description: 'repeat(0) is falsy', assertion: "expect('xyz'.repeat(0)).toBeFalsy()" },
    ],
    hints: [
      '`str.repeat(0)` is always `""` regardless of what `str` is.',
    ],
    tags: ['String', 'String.prototype.repeat', 'beginner'],
  },
  {
    slug: 'string-repeat-count-one',
    title: 'String.prototype.repeat() — count of 1',
    description: `## String.prototype.repeat() — Count 1

\`str.repeat(1)\` returns a new string equal to the original.

**Challenge:** Implement \`repeatOnce(str)\` that returns the string repeated once.

\`\`\`ts
repeatOnce('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.repeat',
    initialCode: `function repeatOnce(str: string): string {
  // Use str.repeat(1)
}`,
    solution: `function repeatOnce(str: string): string {
  return str.repeat(1)
}`,
    tests: [
      { description: 'hello repeated once is hello', assertion: "expect(repeatOnce('hello')).toBe('hello')" },
      { description: 'empty string repeated once is empty', assertion: "expect(repeatOnce('')).toBe('')" },
      { description: 'single char repeated once', assertion: "expect(repeatOnce('a')).toBe('a')" },
      { description: 'same length as original', assertion: "expect(repeatOnce('test')).toHaveLength(4)" },
      { description: 'xyz repeated once is xyz', assertion: "expect(repeatOnce('xyz')).toBe('xyz')" },
    ],
    hints: [
      '`str.repeat(1)` is equivalent to copying the string.',
    ],
    tags: ['String', 'String.prototype.repeat', 'beginner'],
  },
  {
    slug: 'string-repeat-long',
    title: 'String.prototype.repeat() — long repetition',
    description: `## String.prototype.repeat() — Large Count

You can repeat a string many times. The result length is \`str.length * count\`.

**Challenge:** Implement \`buildLine(char, n)\` that builds a line of \`n\` identical characters.

\`\`\`ts
buildLine('=', 10) // → '=========='
buildLine('ab', 4) // → 'abababab'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.repeat',
    initialCode: `function buildLine(char: string, n: number): string {
  // Use char.repeat(n)
}`,
    solution: `function buildLine(char: string, n: number): string {
  return char.repeat(n)
}`,
    tests: [
      { description: 'equals repeated 10 times', assertion: "expect(buildLine('=', 10)).toBe('==========')" },
      { description: 'ab repeated 4 times', assertion: "expect(buildLine('ab', 4)).toBe('abababab')" },
      { description: 'dash repeated 3 times', assertion: "expect(buildLine('-', 3)).toBe('---')" },
      { description: 'result has correct length', assertion: "expect(buildLine('x', 7)).toHaveLength(7)" },
      { description: 'star repeated 5 times', assertion: "expect(buildLine('*', 5)).toBe('*****')" },
    ],
    hints: [
      'The resulting string length will be `char.length * n`.',
    ],
    tags: ['String', 'String.prototype.repeat', 'beginner'],
  },
  {
    slug: 'string-repeat-empty-input',
    title: 'String.prototype.repeat() — empty string input',
    description: `## String.prototype.repeat() — Empty String

Repeating an empty string any number of times always yields an empty string.

**Challenge:** Implement \`repeatEmpty(n)\` that repeats an empty string \`n\` times and returns the result.

\`\`\`ts
repeatEmpty(100) // → ''
repeatEmpty(0)   // → ''
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.repeat',
    initialCode: `function repeatEmpty(n: number): string {
  // Use ''.repeat(n)
}`,
    solution: `function repeatEmpty(n: number): string {
  return ''.repeat(n)
}`,
    tests: [
      { description: 'empty repeated 100 times is empty', assertion: "expect(repeatEmpty(100)).toBe('')" },
      { description: 'empty repeated 0 times is empty', assertion: "expect(repeatEmpty(0)).toBe('')" },
      { description: 'empty repeated 1 time is empty', assertion: "expect(repeatEmpty(1)).toBe('')" },
      { description: 'always has length 0', assertion: "expect(repeatEmpty(50)).toHaveLength(0)" },
      { description: 'result is falsy', assertion: "expect(repeatEmpty(5)).toBeFalsy()" },
    ],
    hints: [
      'An empty string has no characters to repeat, so the result is always `""`.',
    ],
    tags: ['String', 'String.prototype.repeat', 'beginner'],
  },
]
