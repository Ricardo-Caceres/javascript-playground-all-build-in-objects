import type { Exercise } from '@/shared/types/exercises'

export const dateParsExercises: Exercise[] = [
  {
    slug: 'date-parse-1',
    title: 'Date.parse() — epoch string returns 0',
    description: `## Date.parse()\n\nParses a date string and returns the number of milliseconds since Unix epoch, or NaN if invalid.\n\n**Challenge:** Verify that \`Date.parse('1970-01-01T00:00:00.000Z')\` returns 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'parse',
    initialCode: `// Use Date.parse()\n`,
    solution: `Date.parse('1970-01-01T00:00:00.000Z')`,
    tests: [
      { description: "result returns 0", assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
    ],
    hints: ['The Unix epoch is midnight Jan 1, 1970 UTC — its timestamp is exactly 0'],
    tags: ['Date', 'parse', 'static-method', 'epoch'],
    usageExample: {
      code: `Date.parse('2024-01-15T00:00:00.000Z')  // → 1705276800000
Date.parse('invalid')  // → NaN`,
      explanation: {
        en: 'Use Date.parse() to convert a date string into a millisecond timestamp, or detect invalid strings by checking for NaN.',
        es: 'Usa Date.parse() para convertir una cadena de fecha en un timestamp de milisegundos, o detectar cadenas inválidas comprobando NaN.',
      },
    },
  },
  {
    slug: 'date-parse-2',
    title: 'Date.parse() — 2024 date is positive',
    description: `## Date.parse()\n\nAny date string after the epoch returns a positive number.\n\n**Challenge:** Verify that \`Date.parse('2024-01-15')\` returns a number greater than 0.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'parse',
    initialCode: `// Use Date.parse()\n`,
    solution: `Date.parse('2024-01-15') > 0`,
    tests: [
      { description: "result", assertion: "expect(result).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(result).toBe('number')" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(Date.parse('2024-01-15'))).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(Date.parse('2024-01-15'))).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(Date.parse('2024-01-15'))).toBeTruthy()" },
    ],
    hints: ['All dates after 1970 produce a positive timestamp in milliseconds'],
    tags: ['Date', 'parse', 'static-method'],
    usageExample: {
      code: `Date.parse('2024-01-15T00:00:00.000Z')  // → 1705276800000
Date.parse('invalid')  // → NaN`,
      explanation: {
        en: 'Use Date.parse() to convert a date string into a millisecond timestamp, or detect invalid strings by checking for NaN.',
        es: 'Usa Date.parse() para convertir una cadena de fecha en un timestamp de milisegundos, o detectar cadenas inválidas comprobando NaN.',
      },
    },
  },
  {
    slug: 'date-parse-3',
    title: 'Date.parse() — returns a number',
    description: `## Date.parse()\n\n\`Date.parse()\` always returns a primitive number (or NaN, which is also of type 'number').\n\n**Challenge:** Verify that \`typeof Date.parse('2024-01-15')\` returns \`'number'\`.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'parse',
    initialCode: `// Use Date.parse()\n`,
    solution: `typeof Date.parse('2024-01-15')`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(result).toBe('number')" },
      { description: 'result > 0', assertion: "expect(result).toBeTruthy()" },
      { description: 'result is not NaN for valid string', assertion: "expect(!isNaN(Date.parse('2024-01-15'))).toBeTruthy()" },
      { description: 'typeof epoch parse is also number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(Date.parse('2024-01-15'))).toBeTruthy()" },
    ],
    hints: ['Both valid and invalid parse results are of type "number" (NaN is typeof "number" too)'],
    tags: ['Date', 'parse', 'static-method', 'typeof'],
    usageExample: {
      code: `Date.parse('2024-01-15T00:00:00.000Z')  // → 1705276800000
Date.parse('invalid')  // → NaN`,
      explanation: {
        en: 'Use Date.parse() to convert a date string into a millisecond timestamp, or detect invalid strings by checking for NaN.',
        es: 'Usa Date.parse() para convertir una cadena de fecha en un timestamp de milisegundos, o detectar cadenas inválidas comprobando NaN.',
      },
    },
  },
  {
    slug: 'date-parse-4',
    title: 'Date.parse() — invalid string returns NaN',
    description: `## Date.parse()\n\nWhen given an unparseable string, \`Date.parse()\` returns \`NaN\`.\n\n**Challenge:** Verify that \`Number.isNaN(Date.parse('invalid'))\` returns \`true\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'parse',
    initialCode: `// Use Date.parse('invalid')\n`,
    solution: `Number.isNaN(Date.parse('invalid'))`,
    tests: [
      { description: "result is true", assertion: "expect(result).toBeTruthy()" },
      { description: "isNaN(Date.parse('invalid')) is true", assertion: "expect(isNaN(Date.parse('invalid'))).toBeTruthy()" },
      { description: "typeof result is still 'number'", assertion: "expect(typeof Date.parse('invalid')).toBe('number')" },
      { description: "result is not finite", assertion: "expect(!Number.isFinite(Date.parse('invalid'))).toBeTruthy()" },
      { description: "NaN !== NaN", assertion: "expect(Date.parse('invalid') !== Date.parse('invalid')).toBeTruthy()" },
    ],
    hints: ['Use Number.isNaN() rather than isNaN() for accurate NaN detection'],
    tags: ['Date', 'parse', 'static-method', 'NaN'],
    usageExample: {
      code: `Date.parse('2024-01-15T00:00:00.000Z')  // → 1705276800000
Date.parse('invalid')  // → NaN`,
      explanation: {
        en: 'Use Date.parse() to convert a date string into a millisecond timestamp, or detect invalid strings by checking for NaN.',
        es: 'Usa Date.parse() para convertir una cadena de fecha en un timestamp de milisegundos, o detectar cadenas inválidas comprobando NaN.',
      },
    },
  },
  {
    slug: 'date-parse-5',
    title: 'Date.parse() — epoch boundary (1970-01-01)',
    description: `## Date.parse()\n\n\`Date.parse('1970-01-01')\` may return 0 or a small positive offset depending on the local timezone, but is always >= 0.\n\n**Challenge:** Verify that \`Date.parse('1970-01-01') >= 0\`.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'parse',
    initialCode: `// Use Date.parse('1970-01-01')\n`,
    solution: `Date.parse('1970-01-01') >= 0`,
    tests: [
      { description: "result", assertion: "expect(result).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof Date.parse('1970-01-01')).toBe('number')" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(Date.parse('1970-01-01'))).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(Date.parse('1970-01-01'))).toBeTruthy()" },
      { description: "UTC epoch is exactly 0", assertion: "expect(result).toBe(0)" },
    ],
    hints: ['Without a timezone suffix, date strings may be parsed as local time — use Z suffix for UTC'],
    tags: ['Date', 'parse', 'static-method', 'epoch'],
    usageExample: {
      code: `Date.parse('2024-01-15T00:00:00.000Z')  // → 1705276800000
Date.parse('invalid')  // → NaN`,
      explanation: {
        en: 'Use Date.parse() to convert a date string into a millisecond timestamp, or detect invalid strings by checking for NaN.',
        es: 'Usa Date.parse() para convertir una cadena de fecha en un timestamp de milisegundos, o detectar cadenas inválidas comprobando NaN.',
      },
    },
  },
]
