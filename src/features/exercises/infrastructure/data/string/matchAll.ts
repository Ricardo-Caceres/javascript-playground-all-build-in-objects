import type { Exercise } from '@/shared/types/exercises'

export const matchAllExercises: Exercise[] = [
  {
    slug: 'string-match-all-collect',
    title: 'String.prototype.matchAll() — collect all matches',
    description: `## String.prototype.matchAll()

\`str.matchAll(regexp)\` returns an iterator of all regex match results. The regex **must** use the \`g\` flag.

Use spread \`[...str.matchAll(re)]\` to get an array.

**Challenge:** Implement \`countMatches(str, re)\` that returns the number of matches.

\`\`\`ts
countMatches('aababc', /a/g) // → 3
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.matchAll',
    initialCode: `function countMatches(str: string, re: RegExp): number {
  // Use [...str.matchAll(re)].length
}`,
    solution: `function countMatches(str: string, re: RegExp): number {
  return [...str.matchAll(re)].length
}`,
    tests: [
      { description: 'counts 3 a matches', assertion: "expect(countMatches('aababc', /a/g)).toBe(3)" },
      { description: 'no matches returns 0', assertion: "expect(countMatches('hello', /\\d/g)).toBe(0)" },
      { description: 'counts word matches', assertion: "expect(countMatches('the cat sat on the mat', /\\bthe\\b/g)).toBe(2)" },
      { description: 'single match', assertion: "expect(countMatches('hello', /l/g)).toBe(2)" },
      { description: 'empty string no matches', assertion: "expect(countMatches('', /a/g)).toBe(0)" },
    ],
    hints: [
      'Spread the iterator into an array: `[...str.matchAll(re)]`.',
      'The `g` flag is required for `matchAll`.',
    ],
    tags: ['String', 'String.prototype.matchAll', 'regex', 'global flag', 'intermediate'],
    usageExample: {
      code: `const str = 'a1 b2 c3'
const matches = [...str.matchAll(/(\w)(\d)/g)]
matches.length   // → 3
matches[0][1]    // → 'a'`,
      explanation: {
        en: "Use matchAll() with the g flag to iterate over all regex matches and access capture groups in each result.",
        es: "Usa matchAll() con la bandera g para iterar sobre todas las coincidencias y acceder a los grupos de captura en cada resultado.",
      },
    },
  },
  {
    slug: 'string-match-all-capture-groups',
    title: 'String.prototype.matchAll() — access capture groups',
    description: `## String.prototype.matchAll() — Capture Groups

Each match result in \`matchAll\` is a full match object with capture groups at indices 1, 2, etc.

**Challenge:** Implement \`extractNumbers(str)\` that returns all digit sequences as numbers.

\`\`\`ts
extractNumbers('price: 42 and 100') // → [42, 100]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.matchAll',
    initialCode: `function extractNumbers(str: string): number[] {
  // Use [...str.matchAll(/(\\d+)/g)] and map to Number(m[1])
}`,
    solution: `function extractNumbers(str: string): number[] {
  return [...str.matchAll(/(\d+)/g)].map(m => Number(m[1]))
}`,
    tests: [
      { description: 'extracts 42 and 100', assertion: "expect(extractNumbers('price: 42 and 100')).toEqual([42, 100])" },
      { description: 'no numbers returns empty', assertion: "expect(extractNumbers('no numbers here')).toEqual([])" },
      { description: 'single number', assertion: "expect(extractNumbers('age: 25')).toEqual([25])" },
      { description: 'numbers at various positions', assertion: "expect(extractNumbers('1 two 3 four 5')).toEqual([1, 3, 5])" },
      { description: 'empty string', assertion: "expect(extractNumbers('')).toEqual([])" },
    ],
    hints: [
      'Each match result `m` has `m[1]` for the first capture group.',
    ],
    tags: ['String', 'String.prototype.matchAll', 'regex', 'capture groups', 'intermediate'],
    usageExample: {
      code: `const str = 'a1 b2 c3'
const matches = [...str.matchAll(/(\w)(\d)/g)]
matches.length   // → 3
matches[0][1]    // → 'a'`,
      explanation: {
        en: "Use matchAll() with the g flag to iterate over all regex matches and access capture groups in each result.",
        es: "Usa matchAll() con la bandera g para iterar sobre todas las coincidencias y acceder a los grupos de captura en cada resultado.",
      },
    },
  },
  {
    slug: 'string-match-all-named-groups',
    title: 'String.prototype.matchAll() — named capture groups',
    description: `## String.prototype.matchAll() — Named Groups

Named groups from each match are in \`match.groups\`.

**Challenge:** Implement \`extractKeyValues(str)\` that parses \`key=value\` pairs from a string.

\`\`\`ts
extractKeyValues('a=1 b=2 c=3') // → [{ key: 'a', value: '1' }, ...]
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.matchAll',
    initialCode: `function extractKeyValues(str: string): Array<{ key: string; value: string }> {
  // Use [...str.matchAll(/(?<key>\\w+)=(?<value>\\w+)/g)]
  // and map each match to { key: m.groups!.key, value: m.groups!.value }
}`,
    solution: `function extractKeyValues(str: string): Array<{ key: string; value: string }> {
  return [...str.matchAll(/(?<key>\w+)=(?<value>\w+)/g)].map(m => ({
    key: m.groups!.key,
    value: m.groups!.value,
  }))
}`,
    tests: [
      { description: 'extracts first key', assertion: "expect(extractKeyValues('a=1 b=2')[0].key).toBe('a')" },
      { description: 'extracts first value', assertion: "expect(extractKeyValues('a=1 b=2')[0].value).toBe('1')" },
      { description: 'extracts second key', assertion: "expect(extractKeyValues('a=1 b=2')[1].key).toBe('b')" },
      { description: 'count of pairs', assertion: "expect(extractKeyValues('x=10 y=20 z=30')).toHaveLength(3)" },
      { description: 'empty string', assertion: "expect(extractKeyValues('')).toEqual([])" },
    ],
    hints: [
      'Access named groups via `m.groups!.key` and `m.groups!.value`.',
    ],
    tags: ['String', 'String.prototype.matchAll', 'regex', 'named groups', 'advanced'],
    usageExample: {
      code: `const str = 'a1 b2 c3'
const matches = [...str.matchAll(/(\w)(\d)/g)]
matches.length   // → 3
matches[0][1]    // → 'a'`,
      explanation: {
        en: "Use matchAll() with the g flag to iterate over all regex matches and access capture groups in each result.",
        es: "Usa matchAll() con la bandera g para iterar sobre todas las coincidencias y acceder a los grupos de captura en cada resultado.",
      },
    },
  },
  {
    slug: 'string-match-all-empty-results',
    title: 'String.prototype.matchAll() — empty results',
    description: `## String.prototype.matchAll() — No Matches

When the pattern does not match anything, the spread array is empty.

**Challenge:** Implement \`noDigits(str)\` that returns \`true\` when \`str\` contains no digit sequences.

\`\`\`ts
noDigits('hello') // → true
noDigits('hi5')   // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.matchAll',
    initialCode: `function noDigits(str: string): boolean {
  // Use [...str.matchAll(/\\d+/g)].length === 0
}`,
    solution: `function noDigits(str: string): boolean {
  return [...str.matchAll(/\d+/g)].length === 0
}`,
    tests: [
      { description: 'hello has no digits', assertion: "expect(noDigits('hello')).toBe(true)" },
      { description: 'hi5 has a digit', assertion: "expect(noDigits('hi5')).toBe(false)" },
      { description: 'empty string has no digits', assertion: "expect(noDigits('')).toBe(true)" },
      { description: '123 has digits', assertion: "expect(noDigits('123')).toBe(false)" },
      { description: 'abc has no digits', assertion: "expect(noDigits('abc')).toBe(true)" },
    ],
    hints: [
      'If the spread array length is 0, there were no matches.',
    ],
    tags: ['String', 'String.prototype.matchAll', 'regex', 'beginner'],
    usageExample: {
      code: `const str = 'a1 b2 c3'
const matches = [...str.matchAll(/(\w)(\d)/g)]
matches.length   // → 3
matches[0][1]    // → 'a'`,
      explanation: {
        en: "Use matchAll() with the g flag to iterate over all regex matches and access capture groups in each result.",
        es: "Usa matchAll() con la bandera g para iterar sobre todas las coincidencias y acceder a los grupos de captura en cada resultado.",
      },
    },
  },
  {
    slug: 'string-match-all-index',
    title: 'String.prototype.matchAll() — match index property',
    description: `## String.prototype.matchAll() — Match Index

Each match result has an \`index\` property indicating where the match starts.

**Challenge:** Implement \`matchIndices(str, ch)\` that returns an array of indices where \`ch\` occurs.

\`\`\`ts
matchIndices('abacaba', 'a') // → [0, 2, 4, 6]
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.matchAll',
    initialCode: `function matchIndices(str: string, ch: string): number[] {
  // Use [...str.matchAll(new RegExp(ch, 'g'))].map(m => m.index!)
}`,
    solution: `function matchIndices(str: string, ch: string): number[] {
  return [...str.matchAll(new RegExp(ch, 'g'))].map(m => m.index!)
}`,
    tests: [
      { description: 'a at 0,2,4,6 in abacaba', assertion: "expect(matchIndices('abacaba', 'a')).toEqual([0, 2, 4, 6])" },
      { description: 'l at 2,3 in hello', assertion: "expect(matchIndices('hello', 'l')).toEqual([2, 3])" },
      { description: 'no match returns empty', assertion: "expect(matchIndices('hello', 'z')).toEqual([])" },
      { description: 'single occurrence', assertion: "expect(matchIndices('hello', 'h')).toEqual([0])" },
      { description: 'all chars', assertion: "expect(matchIndices('aaa', 'a')).toEqual([0, 1, 2])" },
    ],
    hints: [
      'Each match result `m` has a numeric `m.index` property.',
    ],
    tags: ['String', 'String.prototype.matchAll', 'regex', 'index', 'intermediate'],
    usageExample: {
      code: `const str = 'a1 b2 c3'
const matches = [...str.matchAll(/(\w)(\d)/g)]
matches.length   // → 3
matches[0][1]    // → 'a'`,
      explanation: {
        en: "Use matchAll() with the g flag to iterate over all regex matches and access capture groups in each result.",
        es: "Usa matchAll() con la bandera g para iterar sobre todas las coincidencias y acceder a los grupos de captura en cada resultado.",
      },
    },
  },
]
