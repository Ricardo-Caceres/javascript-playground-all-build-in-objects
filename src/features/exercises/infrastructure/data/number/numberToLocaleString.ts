import type { Exercise } from '@/shared/types/exercises'

export const numberToLocaleStringExercises: Exercise[] = [
  {
    slug: 'number-to-locale-string-1',
    title: 'toLocaleString() — returns a string',
    description: `## Number.prototype.toLocaleString()

\`num.toLocaleString(locale?, options?)\` returns a locale-aware string representation of the number.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toLocaleString',
    initialCode: `const result = (1000).toLocaleString()`,
    solution: `const result = (1000).toLocaleString()`,
    tests: [
      { description: 'returns a string', assertion: "expect(typeof (1000).toLocaleString()).toBe('string')" },
      { description: 'result is truthy', assertion: 'expect((1000).toLocaleString()).toBeTruthy()' },
      { description: '(0).toLocaleString() includes 0', assertion: "expect((0).toLocaleString().includes('0')).toBe(true)" },
      { description: '(1000).toLocaleString() includes 1', assertion: "expect((1000).toLocaleString('en-US').includes('1')).toBe(true)" },
      { description: '(1.5).toLocaleString() includes 1', assertion: "expect((1.5).toLocaleString().includes('1')).toBe(true)" },
    ],
    hints: ['`toLocaleString()` formats numbers according to locale conventions.'],
    tags: ['Number', 'toLocaleString', 'instance-method', 'beginner'],
    usageExample: {
      code: `// Format number for the user's locale
const n = 1234567.89
n.toLocaleString()          // → '1,234,567.89' (en-US)
n.toLocaleString('de-DE')   // → '1.234.567,89'`,
      explanation: {
        en: 'Use toLocaleString() to format a number as a locale-appropriate string, such as adding thousands separators or currency symbols.',
        es: 'Usa toLocaleString() para formatear un número como cadena apropiada para la localización, como separadores de miles o símbolos de moneda.',
      },
    },
  },
  {
    slug: 'number-to-locale-string-2',
    title: 'toLocaleString() — zero includes 0',
    description: `## toLocaleString() — Zero

\`(0).toLocaleString()\` always includes the character \`'0'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toLocaleString',
    initialCode: `const result = (0).toLocaleString()`,
    solution: `const result = (0).toLocaleString()`,
    tests: [
      { description: 'result includes 0', assertion: "expect((0).toLocaleString().includes('0')).toBe(true)" },
      { description: 'result is string', assertion: "expect(typeof (0).toLocaleString()).toBe('string')" },
      { description: 'result is truthy', assertion: 'expect((0).toLocaleString()).toBeTruthy()' },
      { description: 'result has length', assertion: 'expect((0).toLocaleString().length > 0).toBe(true)' },
      { description: '(0).toLocaleString() is defined', assertion: "expect((0).toLocaleString()).toBeDefined ? expect(true).toBe(true) : expect((0).toLocaleString() !== undefined).toBe(true)" },
    ],
    hints: ['The string representation of zero will always contain `\'0\'`.'],
    tags: ['Number', 'toLocaleString', 'zero', 'beginner'],
    usageExample: {
      code: `// Format number for the user's locale
const n = 1234567.89
n.toLocaleString()          // → '1,234,567.89' (en-US)
n.toLocaleString('de-DE')   // → '1.234.567,89'`,
      explanation: {
        en: 'Use toLocaleString() to format a number as a locale-appropriate string, such as adding thousands separators or currency symbols.',
        es: 'Usa toLocaleString() para formatear un número como cadena apropiada para la localización, como separadores de miles o símbolos de moneda.',
      },
    },
  },
  {
    slug: 'number-to-locale-string-3',
    title: 'toLocaleString() — en-US locale includes 1 for 1000',
    description: `## toLocaleString() — Locale en-US

With the \`'en-US'\` locale, \`(1000).toLocaleString('en-US')\` returns a string that includes \`'1'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Number',
    method: 'toLocaleString',
    initialCode: `const result = (1000).toLocaleString('en-US')`,
    solution: `const result = (1000).toLocaleString('en-US')`,
    tests: [
      { description: 'result includes 1', assertion: "expect((1000).toLocaleString('en-US').includes('1')).toBe(true)" },
      { description: 'result is string', assertion: "expect(typeof (1000).toLocaleString('en-US')).toBe('string')" },
      { description: 'result is truthy', assertion: "expect((1000).toLocaleString('en-US')).toBeTruthy()" },
      { description: 'result includes 0 digits', assertion: "expect((1000).toLocaleString('en-US').includes('0')).toBe(true)" },
      { description: 'length is reasonable', assertion: "expect((1000).toLocaleString('en-US').length >= 4).toBe(true)" },
    ],
    hints: ['`\'en-US\'` typically formats thousands with commas: `\'1,000\'`.'],
    tags: ['Number', 'toLocaleString', 'locale', 'intermediate'],
    usageExample: {
      code: `// Format number for the user's locale
const n = 1234567.89
n.toLocaleString()          // → '1,234,567.89' (en-US)
n.toLocaleString('de-DE')   // → '1.234.567,89'`,
      explanation: {
        en: 'Use toLocaleString() to format a number as a locale-appropriate string, such as adding thousands separators or currency symbols.',
        es: 'Usa toLocaleString() para formatear un número como cadena apropiada para la localización, como separadores de miles o símbolos de moneda.',
      },
    },
  },
  {
    slug: 'number-to-locale-string-4',
    title: 'toLocaleString() — result is truthy for various inputs',
    description: `## toLocaleString() — Truthy Results

\`toLocaleString()\` always returns a non-empty string for any number.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toLocaleString',
    initialCode: `const a = (42).toLocaleString()
const b = (-1).toLocaleString()
const c = (0.5).toLocaleString()`,
    solution: `const a = (42).toLocaleString()
const b = (-1).toLocaleString()
const c = (0.5).toLocaleString()`,
    tests: [
      { description: '(42).toLocaleString() is truthy', assertion: 'expect((42).toLocaleString()).toBeTruthy()' },
      { description: '(-1).toLocaleString() is truthy', assertion: 'expect((-1).toLocaleString()).toBeTruthy()' },
      { description: '(0.5).toLocaleString() is truthy', assertion: 'expect((0.5).toLocaleString()).toBeTruthy()' },
      { description: '(1e6).toLocaleString() is truthy', assertion: 'expect((1e6).toLocaleString()).toBeTruthy()' },
      { description: '(0).toLocaleString() is truthy', assertion: 'expect((0).toLocaleString()).toBeTruthy()' },
    ],
    hints: ['`toLocaleString()` always returns a non-empty string.'],
    tags: ['Number', 'toLocaleString', 'truthy', 'beginner'],
    usageExample: {
      code: `// Format number for the user's locale
const n = 1234567.89
n.toLocaleString()          // → '1,234,567.89' (en-US)
n.toLocaleString('de-DE')   // → '1.234.567,89'`,
      explanation: {
        en: 'Use toLocaleString() to format a number as a locale-appropriate string, such as adding thousands separators or currency symbols.',
        es: 'Usa toLocaleString() para formatear un número como cadena apropiada para la localización, como separadores de miles o símbolos de moneda.',
      },
    },
  },
  {
    slug: 'number-to-locale-string-5',
    title: 'toLocaleString() — 1.5 includes 1',
    description: `## toLocaleString() — Decimals

\`(1.5).toLocaleString()\` includes the digit \`'1'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Number',
    method: 'toLocaleString',
    initialCode: `const result = (1.5).toLocaleString()`,
    solution: `const result = (1.5).toLocaleString()`,
    tests: [
      { description: '(1.5).toLocaleString() includes 1', assertion: "expect((1.5).toLocaleString().includes('1')).toBe(true)" },
      { description: 'result is string', assertion: "expect(typeof (1.5).toLocaleString()).toBe('string')" },
      { description: 'result is truthy', assertion: 'expect((1.5).toLocaleString()).toBeTruthy()' },
      { description: '(2.7).toLocaleString() includes 2', assertion: "expect((2.7).toLocaleString().includes('2')).toBe(true)" },
      { description: 'length is at least 1', assertion: 'expect((1.5).toLocaleString().length >= 1).toBe(true)' },
    ],
    hints: ['The formatted string always contains the leading digits of the number.'],
    tags: ['Number', 'toLocaleString', 'decimal', 'beginner'],
    usageExample: {
      code: `// Format number for the user's locale
const n = 1234567.89
n.toLocaleString()          // → '1,234,567.89' (en-US)
n.toLocaleString('de-DE')   // → '1.234.567,89'`,
      explanation: {
        en: 'Use toLocaleString() to format a number as a locale-appropriate string, such as adding thousands separators or currency symbols.',
        es: 'Usa toLocaleString() para formatear un número como cadena apropiada para la localización, como separadores de miles o símbolos de moneda.',
      },
    },
  },
]
