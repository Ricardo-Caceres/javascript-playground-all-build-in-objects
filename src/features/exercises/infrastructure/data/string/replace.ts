import type { Exercise } from '@/shared/types/exercises'

export const replaceExercises: Exercise[] = [
  {
    slug: 'string-replace-first-occurrence',
    title: 'String.prototype.replace() — replace first occurrence',
    description: `## String.prototype.replace()

\`str.replace(searchValue, replaceValue)\` returns a new string with the **first** occurrence of \`searchValue\` replaced by \`replaceValue\`.

**Challenge:** Implement \`replaceFirst(str, from, to)\` that replaces the first occurrence of \`from\` with \`to\`.

\`\`\`ts
replaceFirst('foo bar foo', 'foo', 'baz') // → 'baz bar foo'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.replace',
    initialCode: `function replaceFirst(str: string, from: string, to: string): string {
  // Use str.replace(from, to) — replaces only the first match
}`,
    solution: `function replaceFirst(str: string, from: string, to: string): string {
  return str.replace(from, to)
}`,
    tests: [
      { description: 'replaces only first foo', assertion: "expect(replaceFirst('foo bar foo', 'foo', 'baz')).toBe('baz bar foo')" },
      { description: 'replaces cat with dog', assertion: "expect(replaceFirst('cat sat on cat', 'cat', 'dog')).toBe('dog sat on cat')" },
      { description: 'no match returns original', assertion: "expect(replaceFirst('hello', 'xyz', 'abc')).toBe('hello')" },
      { description: 'replaces space', assertion: "expect(replaceFirst('a b c', ' ', '-')).toBe('a-b c')" },
      { description: 'single char replacement', assertion: "expect(replaceFirst('aaa', 'a', 'b')).toBe('baa')" },
    ],
    hints: [
      '`str.replace(string, replacement)` only replaces the first match.',
      'Use `replaceAll` or a `/g` regex to replace all occurrences.',
    ],
    tags: ['String', 'String.prototype.replace', 'beginner'],
  },
  {
    slug: 'string-replace-regex-pattern',
    title: 'String.prototype.replace() — regex pattern',
    description: `## String.prototype.replace() — Regex Pattern

Pass a regex as the first argument to match by pattern instead of literal string.

**Challenge:** Implement \`removeDigits(str)\` that removes all digits from a string using a regex with the \`g\` flag.

\`\`\`ts
removeDigits('a1b2c3') // → 'abc'
removeDigits('hello')  // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.replace',
    initialCode: `function removeDigits(str: string): string {
  // Use str.replace(/\\d/g, '') to remove all digit characters
}`,
    solution: `function removeDigits(str: string): string {
  return str.replace(/\d/g, '')
}`,
    tests: [
      { description: 'removes all digits', assertion: "expect(removeDigits('a1b2c3')).toBe('abc')" },
      { description: 'no digits unchanged', assertion: "expect(removeDigits('hello')).toBe('hello')" },
      { description: 'only digits becomes empty', assertion: "expect(removeDigits('123')).toBe('')" },
      { description: 'mixed string', assertion: "expect(removeDigits('abc123def456')).toBe('abcdef')" },
      { description: 'empty string unchanged', assertion: "expect(removeDigits('')).toBe('')" },
    ],
    hints: [
      '`/\\d/g` matches all digit characters (0–9) globally.',
      'Replace with `""` to delete them.',
    ],
    tags: ['String', 'String.prototype.replace', 'regex', 'intermediate'],
  },
  {
    slug: 'string-replace-function',
    title: 'String.prototype.replace() — replace with function',
    description: `## String.prototype.replace() — Replacer Function

The second argument can be a function. It receives the matched substring and returns the replacement.

**Challenge:** Implement \`doubleNumbers(str)\` that doubles every digit found in the string.

\`\`\`ts
doubleNumbers('a1b2') // → 'a2b4'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.replace',
    initialCode: `function doubleNumbers(str: string): string {
  // Use str.replace(/\\d/g, match => String(Number(match) * 2))
}`,
    solution: `function doubleNumbers(str: string): string {
  return str.replace(/\d/g, match => String(Number(match) * 2))
}`,
    tests: [
      { description: 'doubles 1 and 2', assertion: "expect(doubleNumbers('a1b2')).toBe('a2b4')" },
      { description: 'doubles 3', assertion: "expect(doubleNumbers('x3y')).toBe('x6y')" },
      { description: 'no digits unchanged', assertion: "expect(doubleNumbers('hello')).toBe('hello')" },
      { description: 'doubles 4 to 8', assertion: "expect(doubleNumbers('4')).toBe('8')" },
      { description: 'doubles 0 stays 0', assertion: "expect(doubleNumbers('a0b')).toBe('a0b')" },
    ],
    hints: [
      'The replacer function receives the matched substring as its first argument.',
      'Convert with `Number(match)`, multiply, then convert back to `String`.',
    ],
    tags: ['String', 'String.prototype.replace', 'function', 'intermediate'],
  },
  {
    slug: 'string-replace-capture-groups',
    title: 'String.prototype.replace() — capture groups in replacement',
    description: `## String.prototype.replace() — Capture Groups

Use \`$1\`, \`$2\`, etc. in the replacement string to reference captured groups.

**Challenge:** Implement \`swapWords(str)\` that swaps two space-separated words.

\`\`\`ts
swapWords('hello world') // → 'world hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.replace',
    initialCode: `function swapWords(str: string): string {
  // Use str.replace(/(\\w+) (\\w+)/, '$2 $1')
}`,
    solution: `function swapWords(str: string): string {
  return str.replace(/(\w+) (\w+)/, '$2 $1')
}`,
    tests: [
      { description: 'swaps hello world', assertion: "expect(swapWords('hello world')).toBe('world hello')" },
      { description: 'swaps foo bar', assertion: "expect(swapWords('foo bar')).toBe('bar foo')" },
      { description: 'swaps first two words only', assertion: "expect(swapWords('a b c')).toBe('b a c')" },
      { description: 'swaps one two', assertion: "expect(swapWords('one two')).toBe('two one')" },
      { description: 'swaps cat dog', assertion: "expect(swapWords('cat dog')).toBe('dog cat')" },
    ],
    hints: [
      '`/(\\w+) (\\w+)/` captures two words separated by a space.',
      '`$1` and `$2` refer to the first and second captured groups.',
    ],
    tags: ['String', 'String.prototype.replace', 'capture groups', 'intermediate'],
  },
  {
    slug: 'string-replace-no-match',
    title: 'String.prototype.replace() — no match returns original',
    description: `## String.prototype.replace() — No Match

If \`searchValue\` is not found, \`.replace()\` returns the original string unchanged.

**Challenge:** Implement \`safeReplace(str, from, to)\` that replaces \`from\` with \`to\`, or returns \`str\` if not found.

\`\`\`ts
safeReplace('hello', 'xyz', '!!!')  // → 'hello'
safeReplace('hello', 'ell', 'ELL') // → 'hELLo'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.replace',
    initialCode: `function safeReplace(str: string, from: string, to: string): string {
  // str.replace returns original string when no match is found
}`,
    solution: `function safeReplace(str: string, from: string, to: string): string {
  return str.replace(from, to)
}`,
    tests: [
      { description: 'no match returns original', assertion: "expect(safeReplace('hello', 'xyz', '!!!')).toBe('hello')" },
      { description: 'match replaces correctly', assertion: "expect(safeReplace('hello', 'ell', 'ELL')).toBe('hELLo')" },
      { description: 'empty string no match', assertion: "expect(safeReplace('', 'a', 'b')).toBe('')" },
      { description: 'replaces exact match', assertion: "expect(safeReplace('abc', 'abc', 'xyz')).toBe('xyz')" },
      { description: 'partial no match', assertion: "expect(safeReplace('cat', 'dog', 'fox')).toBe('cat')" },
    ],
    hints: [
      '`.replace()` never throws — it just returns the original string if nothing matched.',
    ],
    tags: ['String', 'String.prototype.replace', 'beginner'],
  },
]
