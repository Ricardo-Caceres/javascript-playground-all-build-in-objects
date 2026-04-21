import type { Exercise } from '@/shared/types/exercises'

export const stringConcatExercises: Exercise[] = [
  {
    slug: 'string-concat-two-strings',
    title: 'String.prototype.concat() — join two strings',
    description: `## String.prototype.concat()

\`str.concat(str2, str3, ...)\` returns a new string that is the combination of the given strings. It does not modify the original.

**Challenge:** Implement \`joinTwo(a, b)\` using \`.concat()\`.

\`\`\`ts
joinTwo('Hello', ' World') // → 'Hello World'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.concat',
    initialCode: `function joinTwo(a: string, b: string): string {
  // Use a.concat(b)
}`,
    solution: `function joinTwo(a: string, b: string): string {
  return a.concat(b)
}`,
    tests: [
      { description: 'joins Hello and World', assertion: "expect(joinTwo('Hello', ' World')).toBe('Hello World')" },
      { description: 'joins two empty strings', assertion: "expect(joinTwo('', '')).toBe('')" },
      { description: 'joins a and b', assertion: "expect(joinTwo('a', 'b')).toBe('ab')" },
      { description: 'original is unchanged', assertion: "const s = 'foo'; s.concat('bar'); expect(s).toBe('foo')" },
      { description: 'result is a string', assertion: "expect(typeof joinTwo('x', 'y')).toBe('string')" },
    ],
    hints: [
      '`.concat()` returns a new string without mutating the original.',
    ],
    tags: ['String', 'String.prototype.concat', 'beginner'],
    usageExample: {
      code: `const str = 'Hello'
str.concat(', ', 'World', '!')   // → 'Hello, World!'
''.concat('a', 'b', 'c')          // → 'abc'`,
      explanation: {
        en: "Use concat() to join two or more strings together, returning a new string without modifying the originals.",
        es: "Usa concat() para unir dos o más cadenas, devolviendo una nueva sin modificar las originales.",
      },
    },
  },
  {
    slug: 'string-concat-multiple',
    title: 'String.prototype.concat() — multiple strings',
    description: `## String.prototype.concat() — Multiple Arguments

\`.concat()\` accepts multiple arguments and joins them all.

**Challenge:** Implement \`joinAll(parts)\` that calls \`''.concat(...parts)\`.

\`\`\`ts
joinAll(['Hello', ', ', 'World', '!']) // → 'Hello, World!'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.concat',
    initialCode: `function joinAll(parts: string[]): string {
  // Use ''.concat(...parts) to join all parts
}`,
    solution: `function joinAll(parts: string[]): string {
  return ''.concat(...parts)
}`,
    tests: [
      { description: 'joins four parts', assertion: "expect(joinAll(['Hello', ', ', 'World', '!'])).toBe('Hello, World!')" },
      { description: 'empty array gives empty string', assertion: "expect(joinAll([])).toBe('')" },
      { description: 'single part', assertion: "expect(joinAll(['hi'])).toBe('hi')" },
      { description: 'two parts', assertion: "expect(joinAll(['foo', 'bar'])).toBe('foobar')" },
      { description: 'three parts', assertion: "expect(joinAll(['a', 'b', 'c'])).toBe('abc')" },
    ],
    hints: [
      'Spread the array: `"".concat(...parts)`.',
    ],
    tags: ['String', 'String.prototype.concat', 'spread', 'beginner'],
    usageExample: {
      code: `const str = 'Hello'
str.concat(', ', 'World', '!')   // → 'Hello, World!'
''.concat('a', 'b', 'c')          // → 'abc'`,
      explanation: {
        en: "Use concat() to join two or more strings together, returning a new string without modifying the originals.",
        es: "Usa concat() para unir dos o más cadenas, devolviendo una nueva sin modificar las originales.",
      },
    },
  },
  {
    slug: 'string-concat-with-number',
    title: 'String.prototype.concat() — coerces non-strings',
    description: `## String.prototype.concat() — Type Coercion

\`.concat()\` coerces non-string arguments to strings, similar to the \`+\` operator.

**Challenge:** Implement \`appendNumber(str, n)\` that concatenates a string and a number using \`.concat()\`.

\`\`\`ts
appendNumber('score: ', 42) // → 'score: 42'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.concat',
    initialCode: `function appendNumber(str: string, n: number): string {
  // Use str.concat(String(n)) or str.concat(n as unknown as string)
}`,
    solution: `function appendNumber(str: string, n: number): string {
  return str.concat(String(n))
}`,
    tests: [
      { description: 'appends 42', assertion: "expect(appendNumber('score: ', 42)).toBe('score: 42')" },
      { description: 'appends 0', assertion: "expect(appendNumber('val=', 0)).toBe('val=0')" },
      { description: 'appends negative', assertion: "expect(appendNumber('n=', -5)).toBe('n=-5')" },
      { description: 'result is string', assertion: "expect(typeof appendNumber('x', 1)).toBe('string')" },
      { description: 'appends 100', assertion: "expect(appendNumber('count:', 100)).toBe('count:100')" },
    ],
    hints: [
      'Convert `n` to string first with `String(n)`, then concat.',
    ],
    tags: ['String', 'String.prototype.concat', 'coercion', 'beginner'],
    usageExample: {
      code: `const str = 'Hello'
str.concat(', ', 'World', '!')   // → 'Hello, World!'
''.concat('a', 'b', 'c')          // → 'abc'`,
      explanation: {
        en: "Use concat() to join two or more strings together, returning a new string without modifying the originals.",
        es: "Usa concat() para unir dos o más cadenas, devolviendo una nueva sin modificar las originales.",
      },
    },
  },
  {
    slug: 'string-concat-empty',
    title: 'String.prototype.concat() — concat with empty string',
    description: `## String.prototype.concat() — Identity

Concatenating with an empty string returns a copy of the original.

**Challenge:** Implement \`withEmpty(str)\` that returns \`str.concat('')\`.

\`\`\`ts
withEmpty('hello') // → 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'String',
    method: 'String.prototype.concat',
    initialCode: `function withEmpty(str: string): string {
  // Use str.concat('')
}`,
    solution: `function withEmpty(str: string): string {
  return str.concat('')
}`,
    tests: [
      { description: 'hello stays hello', assertion: "expect(withEmpty('hello')).toBe('hello')" },
      { description: 'empty stays empty', assertion: "expect(withEmpty('')).toBe('')" },
      { description: 'abc stays abc', assertion: "expect(withEmpty('abc')).toBe('abc')" },
      { description: 'result is a string', assertion: "expect(typeof withEmpty('x')).toBe('string')" },
      { description: 'same length', assertion: "expect(withEmpty('test')).toHaveLength(4)" },
    ],
    hints: [
      'Concatenating with `""` is a no-op — the result equals the original string.',
    ],
    tags: ['String', 'String.prototype.concat', 'empty string', 'beginner'],
    usageExample: {
      code: `const str = 'Hello'
str.concat(', ', 'World', '!')   // → 'Hello, World!'
''.concat('a', 'b', 'c')          // → 'abc'`,
      explanation: {
        en: "Use concat() to join two or more strings together, returning a new string without modifying the originals.",
        es: "Usa concat() para unir dos o más cadenas, devolviendo una nueva sin modificar las originales.",
      },
    },
  },
  {
    slug: 'string-concat-returns-new',
    title: 'String.prototype.concat() — returns a new string',
    description: `## String.prototype.concat() — Immutability

\`.concat()\` never modifies the original string. Strings in JavaScript are immutable.

**Challenge:** Implement \`concatAndCheck(a, b)\` that returns an object \`{ result, originalUnchanged }\` where \`result = a.concat(b)\` and \`originalUnchanged\` is \`true\` if \`a\` is still its original value.

\`\`\`ts
concatAndCheck('foo', 'bar') // → { result: 'foobar', originalUnchanged: true }
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'String',
    method: 'String.prototype.concat',
    initialCode: `function concatAndCheck(a: string, b: string): { result: string; originalUnchanged: boolean } {
  // Store a, call a.concat(b), verify a is unchanged
}`,
    solution: `function concatAndCheck(a: string, b: string): { result: string; originalUnchanged: boolean } {
  const original = a
  const result = a.concat(b)
  return { result, originalUnchanged: a === original }
}`,
    tests: [
      { description: 'result is concatenated', assertion: "expect(concatAndCheck('foo', 'bar').result).toBe('foobar')" },
      { description: 'original is unchanged', assertion: "expect(concatAndCheck('foo', 'bar').originalUnchanged).toBe(true)" },
      { description: 'result for hello+world', assertion: "expect(concatAndCheck('hello', ' world').result).toBe('hello world')" },
      { description: 'always originalUnchanged=true', assertion: "expect(concatAndCheck('x', 'y').originalUnchanged).toBe(true)" },
      { description: 'empty concat', assertion: "expect(concatAndCheck('', '').result).toBe('')" },
    ],
    hints: [
      'Strings are immutable in JavaScript. `.concat()` always returns a new value.',
    ],
    tags: ['String', 'String.prototype.concat', 'immutability', 'intermediate'],
    usageExample: {
      code: `const str = 'Hello'
str.concat(', ', 'World', '!')   // → 'Hello, World!'
''.concat('a', 'b', 'c')          // → 'abc'`,
      explanation: {
        en: "Use concat() to join two or more strings together, returning a new string without modifying the originals.",
        es: "Usa concat() para unir dos o más cadenas, devolviendo una nueva sin modificar las originales.",
      },
    },
  },
]
