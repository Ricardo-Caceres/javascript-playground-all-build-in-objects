import type { Exercise } from '@/shared/types/exercises'

export const regexpConstructorExercises: Exercise[] = [
  {
    slug: 'regexp-constructor-1',
    title: 'RegExp Constructor — literal test',
    description: `## RegExp Constructor\n\nA RegExp literal \`/pattern/\` creates a regular expression object.\n\n**Challenge:** Verify that \`/hello/.test('hello world')\` returns true.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    method: undefined,
    initialCode: `// Use /hello/.test('hello world')\n`,
    solution: `/hello/.test('hello world')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: '/hello/ is a RegExp instance', assertion: "expect(/hello/ instanceof RegExp).toBeTruthy()" },
      { description: "/hello/.test('world') returns false", assertion: "expect(/hello/.test('world')).toBe(false)" },
      { description: "literal creates object", assertion: "expect(typeof /hello/).toBe('object')" },
    ],
    hints: ['RegExp literals are written between forward slashes'],
    tags: ['RegExp', 'constructor', 'literal'],
    usageExample: {
      code: `const re1 = /hello/i
const re2 = new RegExp('hello', 'i')
re1.test('Hello world') // → true`,
      explanation: {
        en: 'Use the RegExp constructor or literal syntax to create a regular expression.',
        es: 'Usa el constructor RegExp o la sintaxis literal para crear una expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-constructor-2',
    title: 'RegExp Constructor — new RegExp()',
    description: `## RegExp Constructor\n\n\`new RegExp(pattern)\` creates a RegExp from a string.\n\n**Challenge:** Verify that \`new RegExp('hello').test('hello')\` returns true.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    initialCode: `// Use new RegExp('hello').test('hello')\n`,
    solution: `new RegExp('hello').test('hello')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: 'new RegExp returns a RegExp instance', assertion: "expect(new RegExp('hello') instanceof RegExp).toBeTruthy()" },
      { description: "new RegExp('hello').test('world') returns false", assertion: "expect(new RegExp('hello').test('world')).toBe(false)" },
      { description: 'result of test() is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: 'typeof new RegExp() is object', assertion: "expect(typeof new RegExp('hello')).toBe('object')" },
    ],
    hints: ['new RegExp(str) is equivalent to a literal when you need dynamic patterns'],
    tags: ['RegExp', 'constructor', 'new'],
    usageExample: {
      code: `const re1 = /hello/i
const re2 = new RegExp('hello', 'i')
re1.test('Hello world') // → true`,
      explanation: {
        en: 'Use the RegExp constructor or literal syntax to create a regular expression.',
        es: 'Usa el constructor RegExp o la sintaxis literal para crear una expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-constructor-3',
    title: 'RegExp Constructor — case insensitive flag',
    description: `## RegExp Constructor — Flags\n\nThe \`i\` flag makes the RegExp case insensitive.\n\n**Challenge:** Verify that \`/hello/i.test('HELLO')\` returns true.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    initialCode: `// Use /hello/i.test('HELLO')\n`,
    solution: `/hello/i.test('HELLO')`,
    tests: [
      { description: "result returns true", assertion: "expect(result).toBe(true)" },
      { description: "/hello/i.test('Hello') returns true", assertion: "expect(/hello/i.test('Hello')).toBe(true)" },
      { description: "/hello/.test('HELLO') returns false (no flag)", assertion: "expect(/hello/.test('HELLO')).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof result).toBe('boolean')" },
      { description: '/hello/i has ignoreCase true', assertion: "expect(/hello/i.ignoreCase).toBe(true)" },
    ],
    hints: ['Add the i flag after the closing slash: /pattern/i'],
    tags: ['RegExp', 'constructor', 'flags', 'ignoreCase'],
    usageExample: {
      code: `const re1 = /hello/i
const re2 = new RegExp('hello', 'i')
re1.test('Hello world') // → true`,
      explanation: {
        en: 'Use the RegExp constructor or literal syntax to create a regular expression.',
        es: 'Usa el constructor RegExp o la sintaxis literal para crear una expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-constructor-4',
    title: 'RegExp Constructor — typeof',
    description: `## RegExp Constructor\n\n\`typeof\` a RegExp literal returns 'object'.\n\n**Challenge:** Verify that \`typeof /abc/\` is 'object'.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    initialCode: `// Use typeof /abc/\n`,
    solution: `typeof /abc/`,
    tests: [
      { description: "result is 'object'", assertion: "expect(result).toBe('object')" },
      { description: '/abc/ instanceof RegExp is true', assertion: "expect(/abc/ instanceof RegExp).toBeTruthy()" },
      { description: "typeof new RegExp('abc') is 'object'", assertion: "expect(typeof new RegExp('abc')).toBe('object')" },
      { description: '/abc/ is truthy', assertion: "expect(/abc/).toBeTruthy()" },
      { description: "new RegExp('abc') instanceof RegExp", assertion: "expect(new RegExp('abc') instanceof RegExp).toBe(true)" },
    ],
    hints: ['RegExp objects are objects, so typeof returns "object"'],
    tags: ['RegExp', 'constructor', 'typeof'],
    usageExample: {
      code: `const re1 = /hello/i
const re2 = new RegExp('hello', 'i')
re1.test('Hello world') // → true`,
      explanation: {
        en: 'Use the RegExp constructor or literal syntax to create a regular expression.',
        es: 'Usa el constructor RegExp o la sintaxis literal para crear una expresión regular.',
      },
    },
  },
  {
    slug: 'regexp-constructor-5',
    title: 'RegExp Constructor — digit pattern',
    description: `## RegExp Constructor\n\n\`new RegExp('^\\\\d+$')\` matches strings of only digits.\n\n**Challenge:** Verify that \`new RegExp('^\\\\d+$').test('123')\` returns true.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'RegExp',
    initialCode: `// Use new RegExp('^\\\\d+$').test('123')\n`,
    solution: `new RegExp('^\\d+$').test('123')`,
    tests: [
      { description: "new RegExp('^\\\\d+$').test('123') returns true", assertion: "expect(new RegExp('^\\\\d+$').test('123')).toBe(true)" },
      { description: "new RegExp('^\\\\d+$').test('abc') returns false", assertion: "expect(new RegExp('^\\\\d+$').test('abc')).toBe(false)" },
      { description: "new RegExp('^\\\\d+$').test('12a') returns false", assertion: "expect(new RegExp('^\\\\d+$').test('12a')).toBe(false)" },
      { description: 'result is boolean', assertion: "expect(typeof new RegExp('^\\\\d+$').test('123')).toBe('boolean')" },
      { description: "equivalent literal /^\\d+$/.test('123') is true", assertion: "expect(/^\\d+$/.test('123')).toBe(true)" },
    ],
    hints: ['In a string passed to new RegExp, backslashes must be doubled: \\\\d'],
    tags: ['RegExp', 'constructor', 'digits', 'anchors'],
    usageExample: {
      code: `const re1 = /hello/i
const re2 = new RegExp('hello', 'i')
re1.test('Hello world') // → true`,
      explanation: {
        en: 'Use the RegExp constructor or literal syntax to create a regular expression.',
        es: 'Usa el constructor RegExp o la sintaxis literal para crear una expresión regular.',
      },
    },
  },
]
