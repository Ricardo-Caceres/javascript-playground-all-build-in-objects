import type { Exercise } from '@/shared/types/exercises'

export const regexpTestExercises: Exercise[] = [
  {
    slug: 'regexp-test-1',
    title: 'RegExp test() — match found',
    description: `## RegExp.prototype.test()\n\n\`test()\` returns true if the pattern matches anywhere in the string.\n\n**Challenge:** Verify that \`/\\d+/.test('abc123')\` returns true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'test',
    initialCode: `// Use /\\d+/.test('abc123')\n`,
    solution: `/\\d+/.test('abc123')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: "/\\d+/.test('abc') returns false", assertion: "expect(/\\d+/.test('abc')).toBe(false)" },
      { description: "/\\d+/.test('123') returns true", assertion: "expect(/\\d+/.test('123')).toBe(true)" },
      { description: 'test() is a function', assertion: "expect(typeof /\\d+/.test).toBe('function')" },
    ],
    hints: ['test() searches for a match and returns true or false'],
    tags: ['RegExp', 'test', 'method'],
    usageExample: {
      code: `const re = /\\d+/
re.test('abc123') // → true
re.test('abc')    // → false`,
      explanation: {
        en: 'Use RegExp.test() to check whether a string matches the regular expression pattern.',
        es: 'Usa RegExp.test() para verificar si una cadena coincide con el patrón de la expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-test-2',
    title: 'RegExp test() — no match',
    description: `## RegExp.prototype.test()\n\n\`test()\` returns false when the pattern does not match.\n\n**Challenge:** Verify that \`/^\\d+$/.test('abc')\` returns false.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'test',
    initialCode: `// Use /^\\d+$/.test('abc')\n`,
    solution: `/^\\d+$/.test('abc')`,
    tests: [
      { description: "result returns false", assertion: "expect(result).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: "/^\\d+$/.test('123') returns true", assertion: "expect(/^\\d+$/.test('123')).toBe(true)" },
      { description: "/^\\d+$/.test('12a') returns false", assertion: "expect(/^\\d+$/.test('12a')).toBe(false)" },
      { description: 'result is falsy', assertion: "expect(result).toBeFalsy()" },
    ],
    hints: ['The ^ and $ anchors require the entire string to match'],
    tags: ['RegExp', 'test', 'anchors'],
    usageExample: {
      code: `const re = /\\d+/
re.test('abc123') // → true
re.test('abc')    // → false`,
      explanation: {
        en: 'Use RegExp.test() to check whether a string matches the regular expression pattern.',
        es: 'Usa RegExp.test() para verificar si una cadena coincide con el patrón de la expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-test-3',
    title: 'RegExp test() — case insensitive',
    description: `## RegExp.prototype.test()\n\nWith the \`i\` flag, test() ignores case.\n\n**Challenge:** Verify that \`/hello/i.test('HELLO')\` returns true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'test',
    initialCode: `// Use /hello/i.test('HELLO')\n`,
    solution: `/hello/i.test('HELLO')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: "/hello/i.test('Hello') returns true", assertion: "expect(/hello/i.test('Hello')).toBe(true)" },
      { description: "/hello/.test('HELLO') returns false (no i flag)", assertion: "expect(/hello/.test('HELLO')).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: "/hello/i.test('world') returns false", assertion: "expect(/hello/i.test('world')).toBe(false)" },
    ],
    hints: ['The i flag enables case-insensitive matching'],
    tags: ['RegExp', 'test', 'ignoreCase'],
    usageExample: {
      code: `const re = /\\d+/
re.test('abc123') // → true
re.test('abc')    // → false`,
      explanation: {
        en: 'Use RegExp.test() to check whether a string matches the regular expression pattern.',
        es: 'Usa RegExp.test() para verificar si una cadena coincide con el patrón de la expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-test-4',
    title: 'RegExp test() — empty string',
    description: `## RegExp.prototype.test()\n\n\`/^$/.test('')\` tests for an empty string.\n\n**Challenge:** Verify that \`/^$/.test('')\` returns true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'test',
    initialCode: `// Use /^$/.test('')\n`,
    solution: `/^$/.test('')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: "/^$/.test('a') returns false", assertion: "expect(/^$/.test('a')).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: "/.*/.test('') returns true", assertion: "expect(/.*/.test('')).toBe(true)" },
      { description: "result is truthy", assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['/^$/ matches exactly an empty string — ^ is start, $ is end'],
    tags: ['RegExp', 'test', 'empty'],
    usageExample: {
      code: `const re = /\\d+/
re.test('abc123') // → true
re.test('abc')    // → false`,
      explanation: {
        en: 'Use RegExp.test() to check whether a string matches the regular expression pattern.',
        es: 'Usa RegExp.test() para verificar si una cadena coincide con el patrón de la expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-test-5',
    title: 'RegExp test() — result is boolean',
    description: `## RegExp.prototype.test()\n\ntest() always returns a boolean value.\n\n**Challenge:** Verify that the result of test() is strictly a boolean.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: 'test',
    initialCode: `// Check typeof /abc/.test('abc')\n`,
    solution: `typeof /abc/.test('abc')`,
    tests: [
      { description: "result is 'boolean'", assertion: "expect(result).toBe('boolean')" },
      { description: "typeof /abc/.test('xyz') is 'boolean'", assertion: "expect(typeof /abc/.test('xyz')).toBe('boolean')" },
      { description: "/abc/.test('abc') is true", assertion: "expect(/abc/.test('abc')).toBe(true)" },
      { description: "/abc/.test('xyz') is false", assertion: "expect(/abc/.test('xyz')).toBe(false)" },
      { description: 'test returns true or false, not truthy/falsy', assertion: "expect(/abc/.test('abc') === true).toBe(true)" },
    ],
    hints: ['test() always returns a strict boolean true or false'],
    tags: ['RegExp', 'test', 'boolean'],
    usageExample: {
      code: `const re = /\\d+/
re.test('abc123') // → true
re.test('abc')    // → false`,
      explanation: {
        en: 'Use RegExp.test() to check whether a string matches the regular expression pattern.',
        es: 'Usa RegExp.test() para verificar si una cadena coincide con el patrón de la expresión regular.',
      },
    },
  },
]
