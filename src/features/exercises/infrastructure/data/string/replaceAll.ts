import type { Exercise } from '@/shared/types/exercises'

export const replaceAllExercises: Exercise[] = [
  {
    slug: 'string-replace-all-basic',
    title: 'String.prototype.replaceAll() — replace all occurrences',
    description: `## String.prototype.replaceAll()

\`str.replaceAll(searchValue, replaceValue)\` replaces **all** occurrences of \`searchValue\`.

**Challenge:** Implement \`replaceAllOccurrences(str, from, to)\` that replaces every occurrence of \`from\` with \`to\`.

\`\`\`ts
replaceAllOccurrences('foo bar foo', 'foo', 'baz') // → 'baz bar baz'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.replaceAll',
    initialCode: `function replaceAllOccurrences(str: string, from: string, to: string): string {
  // Use str.replaceAll(from, to) — replaces every match
}`,
    solution: `function replaceAllOccurrences(str: string, from: string, to: string): string {
  return str.replaceAll(from, to)
}`,
    tests: [
      { description: 'replaces all foo occurrences', assertion: "expect(replaceAllOccurrences('foo bar foo', 'foo', 'baz')).toBe('baz bar baz')" },
      { description: 'replaces all a with b', assertion: "expect(replaceAllOccurrences('banana', 'a', 'o')).toBe('bonono')" },
      { description: 'no match returns original', assertion: "expect(replaceAllOccurrences('hello', 'xyz', 'abc')).toBe('hello')" },
      { description: 'replaces all spaces', assertion: "expect(replaceAllOccurrences('a b c', ' ', '-')).toBe('a-b-c')" },
      { description: 'single occurrence', assertion: "expect(replaceAllOccurrences('hello', 'ell', 'ELL')).toBe('hELLo')" },
    ],
    hints: [
      '`replaceAll` is like `replace` with a `/g` flag regex but works with plain strings.',
    ],
    tags: ['String', 'String.prototype.replaceAll', 'beginner'],
  },
  {
    slug: 'string-replace-all-vs-replace',
    title: 'String.prototype.replaceAll() — vs replace (only first)',
    description: `## replaceAll vs replace

\`.replace(str)\` only replaces the **first** match. \`.replaceAll(str)\` replaces **all** matches.

**Challenge:** Implement \`countReplacements(str, from, to)\` and show it replaces more than \`replace\` alone would.

\`\`\`ts
'aaa'.replace('a', 'b')    // → 'baa'
'aaa'.replaceAll('a', 'b') // → 'bbb'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.replaceAll',
    initialCode: `function replaceAllChars(str: string, from: string, to: string): string {
  // Use str.replaceAll(from, to) to replace every occurrence
}`,
    solution: `function replaceAllChars(str: string, from: string, to: string): string {
  return str.replaceAll(from, to)
}`,
    tests: [
      { description: 'replaceAll replaces all a in aaa', assertion: "expect(replaceAllChars('aaa', 'a', 'b')).toBe('bbb')" },
      { description: 'replace only gets first a in aaa', assertion: "expect('aaa'.replace('a', 'b')).toBe('baa')" },
      { description: 'replaceAll on banana', assertion: "expect(replaceAllChars('banana', 'an', 'XX')).toBe('bXXXXa')" },
      { description: 'replaceAll with empty to deletes all', assertion: "expect(replaceAllChars('aabbcc', 'b', '')).toBe('aacc')" },
      { description: 'no match same as replace', assertion: "expect(replaceAllChars('hello', 'z', 'x')).toBe('hello')" },
    ],
    hints: [
      '`str.replace("a", "b")` only replaces the first `"a"` found.',
      '`str.replaceAll("a", "b")` replaces every `"a"` in the string.',
    ],
    tags: ['String', 'String.prototype.replaceAll', 'beginner'],
  },
  {
    slug: 'string-replace-all-regex-g',
    title: 'String.prototype.replaceAll() — regex with g flag',
    description: `## String.prototype.replaceAll() — Regex with /g

When passing a regex to \`replaceAll\`, it **must** have the \`g\` flag.

**Challenge:** Implement \`removeVowels(str)\` that removes all vowels using a regex.

\`\`\`ts
removeVowels('hello world') // → 'hll wrld'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.replaceAll',
    initialCode: `function removeVowels(str: string): string {
  // Use str.replaceAll(/[aeiou]/gi, '') — regex must have the g flag
}`,
    solution: `function removeVowels(str: string): string {
  return str.replaceAll(/[aeiou]/gi, '')
}`,
    tests: [
      { description: 'removes vowels from hello world', assertion: "expect(removeVowels('hello world')).toBe('hll wrld')" },
      { description: 'no vowels unchanged', assertion: "expect(removeVowels('gym')).toBe('gym')" },
      { description: 'all vowels become empty', assertion: "expect(removeVowels('aeiou')).toBe('')" },
      { description: 'uppercase vowels removed', assertion: "expect(removeVowels('HELLO')).toBe('HLL')" },
      { description: 'empty string unchanged', assertion: "expect(removeVowels('')).toBe('')" },
    ],
    hints: [
      'When using a regex with `replaceAll`, the `/g` flag is required.',
      '`/[aeiou]/gi` matches all vowels case-insensitively.',
    ],
    tags: ['String', 'String.prototype.replaceAll', 'regex', 'intermediate'],
  },
  {
    slug: 'string-replace-all-empty-string',
    title: 'String.prototype.replaceAll() — empty string replacement (split-like)',
    description: `## String.prototype.replaceAll() — Empty String

Replacing the empty string \`''\` inserts the replacement between every character (like splitting).

**Challenge:** Implement \`joinCharsWithDash(str)\` that inserts a dash between every character.

\`\`\`ts
joinCharsWithDash('abc') // → '-a-b-c-'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.replaceAll',
    initialCode: `function joinCharsWithDash(str: string): string {
  // Use str.replaceAll('', '-') — inserts '-' at every empty string position
}`,
    solution: `function joinCharsWithDash(str: string): string {
  return str.replaceAll('', '-')
}`,
    tests: [
      { description: 'abc becomes -a-b-c-', assertion: "expect(joinCharsWithDash('abc')).toBe('-a-b-c-')" },
      { description: 'empty string becomes single dash', assertion: "expect(joinCharsWithDash('')).toBe('-')" },
      { description: 'single char gets dashes around', assertion: "expect(joinCharsWithDash('x')).toBe('-x-')" },
      { description: 'hi becomes -h-i-', assertion: "expect(joinCharsWithDash('hi')).toBe('-h-i-')" },
      { description: 'result length for abc', assertion: "expect(joinCharsWithDash('abc')).toHaveLength(7)" },
    ],
    hints: [
      'Replacing `""` inserts the replacement at every position, including the start and end.',
    ],
    tags: ['String', 'String.prototype.replaceAll', 'intermediate'],
  },
  {
    slug: 'string-replace-all-no-match',
    title: 'String.prototype.replaceAll() — no match returns original',
    description: `## String.prototype.replaceAll() — No Match

If the search value is not found, \`replaceAll\` returns the original string unchanged.

**Challenge:** Implement \`tryReplaceAll(str, from, to)\` using \`replaceAll\`.

\`\`\`ts
tryReplaceAll('hello', 'xyz', '!!!') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.replaceAll',
    initialCode: `function tryReplaceAll(str: string, from: string, to: string): string {
  // Use str.replaceAll(from, to)
}`,
    solution: `function tryReplaceAll(str: string, from: string, to: string): string {
  return str.replaceAll(from, to)
}`,
    tests: [
      { description: 'no match returns original', assertion: "expect(tryReplaceAll('hello', 'xyz', '!!!')).toBe('hello')" },
      { description: 'match replaces all', assertion: "expect(tryReplaceAll('aabbaa', 'aa', 'X')).toBe('XbbX')" },
      { description: 'empty search on empty string', assertion: "expect(tryReplaceAll('', 'a', 'b')).toBe('')" },
      { description: 'case sensitive no match', assertion: "expect(tryReplaceAll('Hello', 'hello', 'hi')).toBe('Hello')" },
      { description: 'replaces all occurrences', assertion: "expect(tryReplaceAll('abcabc', 'bc', 'BC')).toBe('aBCaBC')" },
    ],
    hints: [
      '`replaceAll` is case-sensitive by default.',
    ],
    tags: ['String', 'String.prototype.replaceAll', 'beginner'],
  },
]
