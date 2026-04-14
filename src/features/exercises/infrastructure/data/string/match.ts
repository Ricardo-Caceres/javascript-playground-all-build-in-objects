import type { Exercise } from '@/shared/types/exercises'

export const matchExercises: Exercise[] = [
  {
    slug: 'string-match-basic',
    title: 'String.prototype.match() — basic regex match',
    description: `## String.prototype.match()

\`str.match(regexp)\` returns an array with the match information when found, or \`null\` when not found.

Without the \`g\` flag, it returns the first match plus capture groups.

**Challenge:** Implement \`matchDigits(str)\` that returns the first sequence of digits in \`str\` using \`/\\d+/\`.

\`\`\`ts
matchDigits('abc123def') // → '123'
matchDigits('no digits') // → null
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.match',
    initialCode: `function matchDigits(str: string): string | null {
  // Use str.match(/\\d+/) and return the matched string or null
}`,
    solution: `function matchDigits(str: string): string | null {
  const result = str.match(/\d+/)
  return result ? result[0] : null
}`,
    tests: [
      { description: 'finds 123', assertion: "expect(matchDigits('abc123def')).toBe('123')" },
      { description: 'no digits returns null', assertion: "expect(matchDigits('no digits')).toBeNull()" },
      { description: 'finds first sequence only', assertion: "expect(matchDigits('12 and 34')).toBe('12')" },
      { description: 'finds at start', assertion: "expect(matchDigits('42abc')).toBe('42')" },
      { description: 'finds at end', assertion: "expect(matchDigits('abc99')).toBe('99')" },
    ],
    hints: [
      'Without the `g` flag, `.match()` returns details about the first match.',
      'Access the matched text with `result[0]`.',
    ],
    tags: ['String', 'String.prototype.match', 'regex', 'intermediate'],
  },
  {
    slug: 'string-match-global-flag',
    title: 'String.prototype.match() — global flag returns all matches',
    description: `## String.prototype.match() — Global Flag

With the \`g\` flag, \`.match()\` returns an array of all matched strings (no capture group details).

**Challenge:** Implement \`allWords(str)\` that returns all word tokens using \`/\\w+/g\`.

\`\`\`ts
allWords('hello world foo') // → ['hello', 'world', 'foo']
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.match',
    initialCode: `function allWords(str: string): string[] {
  // Use str.match(/\\w+/g) ?? []
}`,
    solution: `function allWords(str: string): string[] {
  return str.match(/\w+/g) ?? []
}`,
    tests: [
      { description: 'finds three words', assertion: "expect(allWords('hello world foo')).toEqual(['hello', 'world', 'foo'])" },
      { description: 'empty string gives empty array', assertion: "expect(allWords('')).toEqual([])" },
      { description: 'single word', assertion: "expect(allWords('hi')).toEqual(['hi'])" },
      { description: 'ignores spaces', assertion: "expect(allWords('a b c')).toEqual(['a', 'b', 'c'])" },
      { description: 'two words', assertion: "expect(allWords('foo bar')).toEqual(['foo', 'bar'])" },
    ],
    hints: [
      'With the `g` flag, `.match()` returns a flat array of all matched strings.',
      'Use `?? []` to handle the null case when no matches are found.',
    ],
    tags: ['String', 'String.prototype.match', 'regex', 'global flag', 'intermediate'],
  },
  {
    slug: 'string-match-null',
    title: 'String.prototype.match() — no match returns null',
    description: `## String.prototype.match() — Null Return

When the regex does not match, \`.match()\` returns \`null\`.

**Challenge:** Implement \`hasMatch(str, pattern)\` that returns \`true\` when the pattern is found.

\`\`\`ts
hasMatch('hello123', /\\d+/) // → true
hasMatch('hello', /\\d+/)    // → false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.match',
    initialCode: `function hasMatch(str: string, pattern: RegExp): boolean {
  // Return true when str.match(pattern) is not null
}`,
    solution: `function hasMatch(str: string, pattern: RegExp): boolean {
  return str.match(pattern) !== null
}`,
    tests: [
      { description: 'digits found', assertion: "expect(hasMatch('hello123', /\\d+/)).toBe(true)" },
      { description: 'digits not found', assertion: "expect(hasMatch('hello', /\\d+/)).toBe(false)" },
      { description: 'word boundary match', assertion: "expect(hasMatch('hello world', /world/)).toBe(true)" },
      { description: 'no match for xyz', assertion: "expect(hasMatch('abcdef', /xyz/)).toBe(false)" },
      { description: 'empty string no digit', assertion: "expect(hasMatch('', /\\d/)).toBe(false)" },
    ],
    hints: [
      '`.match()` returns `null` when there is no match.',
    ],
    tags: ['String', 'String.prototype.match', 'regex', 'beginner'],
  },
  {
    slug: 'string-match-capture-groups',
    title: 'String.prototype.match() — capture groups',
    description: `## String.prototype.match() — Capture Groups

Without the \`g\` flag, \`.match()\` returns an array where index 0 is the full match and index 1, 2, … are capture groups.

**Challenge:** Implement \`parseDate(str)\` that extracts year, month, and day from \`'YYYY-MM-DD'\` and returns them as numbers.

\`\`\`ts
parseDate('2024-01-15') // → { year: 2024, month: 1, day: 15 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.match',
    initialCode: `function parseDate(str: string): { year: number; month: number; day: number } | null {
  // Use str.match(/(\\d{4})-(\\d{2})-(\\d{2})/) and extract groups
}`,
    solution: `function parseDate(str: string): { year: number; month: number; day: number } | null {
  const m = str.match(/(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return null
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) }
}`,
    tests: [
      { description: 'parses year', assertion: "expect(parseDate('2024-01-15')?.year).toBe(2024)" },
      { description: 'parses month', assertion: "expect(parseDate('2024-01-15')?.month).toBe(1)" },
      { description: 'parses day', assertion: "expect(parseDate('2024-01-15')?.day).toBe(15)" },
      { description: 'invalid returns null', assertion: "expect(parseDate('not-a-date')).toBeNull()" },
      { description: 'parses another date year', assertion: "expect(parseDate('2000-12-31')?.year).toBe(2000)" },
    ],
    hints: [
      'Capture group values are at indices 1, 2, 3 in the result array.',
    ],
    tags: ['String', 'String.prototype.match', 'regex', 'capture groups', 'intermediate'],
  },
  {
    slug: 'string-match-named-groups',
    title: 'String.prototype.match() — named capture groups',
    description: `## String.prototype.match() — Named Groups

Named groups use \`(?<name>...)\` syntax and are accessible via \`result.groups\`.

**Challenge:** Implement \`parseColor(str)\` that extracts \`r\`, \`g\`, \`b\` from \`'rgb(255,128,0)'\` using named groups.

\`\`\`ts
parseColor('rgb(255,128,0)') // → { r: 255, g: 128, b: 0 }
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'String',
    method: 'String.prototype.match',
    initialCode: `function parseColor(str: string): { r: number; g: number; b: number } | null {
  // Use named groups: /rgb\\((?<r>\\d+),(?<g>\\d+),(?<b>\\d+)\\)/
}`,
    solution: `function parseColor(str: string): { r: number; g: number; b: number } | null {
  const m = str.match(/rgb\((?<r>\d+),(?<g>\d+),(?<b>\d+)\)/)
  if (!m?.groups) return null
  return { r: Number(m.groups.r), g: Number(m.groups.g), b: Number(m.groups.b) }
}`,
    tests: [
      { description: 'parses r value', assertion: "expect(parseColor('rgb(255,128,0)')?.r).toBe(255)" },
      { description: 'parses g value', assertion: "expect(parseColor('rgb(255,128,0)')?.g).toBe(128)" },
      { description: 'parses b value', assertion: "expect(parseColor('rgb(255,128,0)')?.b).toBe(0)" },
      { description: 'invalid returns null', assertion: "expect(parseColor('not-a-color')).toBeNull()" },
      { description: 'parses another color', assertion: "expect(parseColor('rgb(0,0,255)')?.b).toBe(255)" },
    ],
    hints: [
      'Named groups are in `result.groups` (may be undefined if no groups matched).',
    ],
    tags: ['String', 'String.prototype.match', 'regex', 'named groups', 'advanced'],
  },
]
