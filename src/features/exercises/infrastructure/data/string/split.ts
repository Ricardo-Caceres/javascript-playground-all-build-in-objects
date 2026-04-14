import type { Exercise } from '@/shared/types/exercises'

export const splitExercises: Exercise[] = [
  {
    slug: 'string-split-by-char',
    title: 'String.prototype.split() — split by character',
    description: `## String.prototype.split()

\`str.split(separator)\` splits the string into an array of substrings at each \`separator\`.

**Challenge:** Implement \`splitByComma(str)\` that splits a comma-separated string.

\`\`\`ts
splitByComma('a,b,c') // → ['a', 'b', 'c']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.split',
    initialCode: `function splitByComma(str: string): string[] {
  // Use str.split(',')
}`,
    solution: `function splitByComma(str: string): string[] {
  return str.split(',')
}`,
    tests: [
      { description: 'splits a,b,c', assertion: "expect(splitByComma('a,b,c')).toEqual(['a', 'b', 'c'])" },
      { description: 'single value no comma', assertion: "expect(splitByComma('hello')).toEqual(['hello'])" },
      { description: 'trailing comma creates empty', assertion: "expect(splitByComma('a,b,')).toEqual(['a', 'b', ''])" },
      { description: 'splits numbers', assertion: "expect(splitByComma('1,2,3')).toEqual(['1', '2', '3'])" },
      { description: 'result length', assertion: "expect(splitByComma('a,b,c')).toHaveLength(3)" },
    ],
    hints: [
      '`str.split(",")` splits at every comma.',
    ],
    tags: ['String', 'String.prototype.split', 'beginner'],
  },
  {
    slug: 'string-split-by-string',
    title: 'String.prototype.split() — split by string',
    description: `## String.prototype.split() — String Separator

The separator can be a multi-character string.

**Challenge:** Implement \`splitBySep(str, sep)\` that splits \`str\` by the separator \`sep\`.

\`\`\`ts
splitBySep('one::two::three', '::') // → ['one', 'two', 'three']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.split',
    initialCode: `function splitBySep(str: string, sep: string): string[] {
  // Use str.split(sep)
}`,
    solution: `function splitBySep(str: string, sep: string): string[] {
  return str.split(sep)
}`,
    tests: [
      { description: 'splits by double colon', assertion: "expect(splitBySep('one::two::three', '::')).toEqual(['one', 'two', 'three'])" },
      { description: 'splits by --', assertion: "expect(splitBySep('a--b--c', '--')).toEqual(['a', 'b', 'c'])" },
      { description: 'splits by space', assertion: "expect(splitBySep('hello world', ' ')).toEqual(['hello', 'world'])" },
      { description: 'separator not found', assertion: "expect(splitBySep('hello', '::')).toEqual(['hello'])" },
      { description: 'result length', assertion: "expect(splitBySep('one::two::three', '::')).toHaveLength(3)" },
    ],
    hints: [
      'The separator can be any string, not just a single character.',
    ],
    tags: ['String', 'String.prototype.split', 'beginner'],
  },
  {
    slug: 'string-split-with-limit',
    title: 'String.prototype.split() — split with limit',
    description: `## String.prototype.split() — Limit

The optional second argument limits the number of substrings returned.

**Challenge:** Implement \`splitFirst(str, sep)\` that returns at most 2 parts.

\`\`\`ts
splitFirst('a,b,c,d', ',') // → ['a', 'b']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.split',
    initialCode: `function splitFirst(str: string, sep: string): string[] {
  // Use str.split(sep, 2) to get at most 2 results
}`,
    solution: `function splitFirst(str: string, sep: string): string[] {
  return str.split(sep, 2)
}`,
    tests: [
      { description: 'limits to 2 parts', assertion: "expect(splitFirst('a,b,c,d', ',')).toEqual(['a', 'b'])" },
      { description: 'single value no sep', assertion: "expect(splitFirst('hello', ',')).toEqual(['hello'])" },
      { description: 'result has at most 2 items', assertion: "expect(splitFirst('x,y,z', ',')).toHaveLength(2)" },
      { description: 'splits x and y only', assertion: "expect(splitFirst('x,y,z', ',')).toEqual(['x', 'y'])" },
      { description: 'less than limit', assertion: "expect(splitFirst('a,b', ',')).toEqual(['a', 'b'])" },
    ],
    hints: [
      '`str.split(sep, 2)` returns an array with at most 2 elements.',
    ],
    tags: ['String', 'String.prototype.split', 'limit', 'intermediate'],
  },
  {
    slug: 'string-split-empty-string',
    title: 'String.prototype.split() — empty string gives chars array',
    description: `## String.prototype.split() — Empty Separator

Splitting on an empty string \`''\` splits the string into individual characters.

**Challenge:** Implement \`toChars(str)\` that returns an array of characters.

\`\`\`ts
toChars('hello') // → ['h', 'e', 'l', 'l', 'o']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.split',
    initialCode: `function toChars(str: string): string[] {
  // Use str.split('') to get an array of individual characters
}`,
    solution: `function toChars(str: string): string[] {
  return str.split('')
}`,
    tests: [
      { description: 'splits hello into chars', assertion: "expect(toChars('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])" },
      { description: 'empty string gives empty array', assertion: "expect(toChars('')).toEqual([])" },
      { description: 'single char gives one-element array', assertion: "expect(toChars('x')).toEqual(['x'])" },
      { description: 'length equals string length', assertion: "expect(toChars('abc')).toHaveLength(3)" },
      { description: 'abc gives a b c', assertion: "expect(toChars('abc')).toEqual(['a', 'b', 'c'])" },
    ],
    hints: [
      '`str.split("")` splits at every character boundary.',
    ],
    tags: ['String', 'String.prototype.split', 'beginner'],
  },
  {
    slug: 'string-split-no-separator',
    title: 'String.prototype.split() — no separator returns whole string in array',
    description: `## String.prototype.split() — No Separator

Calling \`.split()\` without arguments returns the whole string wrapped in an array.

**Challenge:** Implement \`wrapInArray(str)\` that returns \`[str]\` using \`split()\`.

\`\`\`ts
wrapInArray('hello') // → ['hello']
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.split',
    initialCode: `function wrapInArray(str: string): string[] {
  // Use str.split() with no argument
}`,
    solution: `function wrapInArray(str: string): string[] {
  return str.split()
}`,
    tests: [
      { description: 'hello in array', assertion: "expect(wrapInArray('hello')).toEqual(['hello'])" },
      { description: 'empty string in array', assertion: "expect(wrapInArray('')).toEqual([''])" },
      { description: 'always length 1', assertion: "expect(wrapInArray('anything')).toHaveLength(1)" },
      { description: 'contains original string', assertion: "expect(wrapInArray('test')).toContain('test')" },
      { description: 'abc in array', assertion: "expect(wrapInArray('abc')).toEqual(['abc'])" },
    ],
    hints: [
      '`str.split()` with no argument returns `[str]` — the whole string as a single element.',
    ],
    tags: ['String', 'String.prototype.split', 'beginner'],
  },
]
