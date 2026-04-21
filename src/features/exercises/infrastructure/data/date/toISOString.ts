import type { Exercise } from '@/shared/types/exercises'

export const dateToISOStringExercises: Exercise[] = [
  {
    slug: 'date-toisostring-1',
    title: 'toISOString() — epoch string',
    description: `## Date.prototype.toISOString()\n\nReturns the date as an ISO 8601 string in UTC. The epoch returns \`'1970-01-01T00:00:00.000Z'\`.\n\n**Challenge:** Verify that \`new Date(0).toISOString()\` returns \`'1970-01-01T00:00:00.000Z'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'toISOString',
    initialCode: `// Use new Date(0).toISOString()\n`,
    solution: `new Date(0).toISOString()`,
    tests: [
      { description: "result === '1970-01-01T00:00:00.000Z'", assertion: "expect(result).toBe('1970-01-01T00:00:00.000Z')" },
      { description: 'result is a string', assertion: "expect(typeof result).toBe('string')" },
      { description: "result ends with 'Z'", assertion: "expect(result.endsWith('Z')).toBeTruthy()" },
      { description: "result contains 'T'", assertion: "expect(result.includes('T')).toBeTruthy()" },
      { description: "result contains '1970'", assertion: "expect(result.includes('1970')).toBeTruthy()" },
    ],
    hints: ['toISOString() always returns a UTC-based ISO 8601 string ending with "Z"'],
    tags: ['Date', 'toISOString', 'instance-method', 'epoch'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.toISOString()  // → '2024-01-15T00:00:00.000Z'`,
      explanation: {
        en: 'Use toISOString() to serialize a Date as a UTC ISO 8601 string in the format YYYY-MM-DDTHH:mm:ss.sssZ.',
        es: 'Usa toISOString() para serializar un Date como cadena ISO 8601 en UTC con el formato YYYY-MM-DDTHH:mm:ss.sssZ.',
      },
    },
  },
  {
    slug: 'date-toisostring-2',
    title: 'toISOString() — contains "T" separator',
    description: `## Date.prototype.toISOString()\n\nISO 8601 strings use "T" to separate the date portion from the time portion.\n\n**Challenge:** Verify that the output of \`toISOString()\` includes \`'T'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'toISOString',
    initialCode: `// Use new Date(0).toISOString().includes('T')\n`,
    solution: `new Date(0).toISOString().includes('T')`,
    tests: [
      { description: "result includes 'T'", assertion: "expect(result.includes('T')).toBeTruthy()" },
      { description: 'result is a string', assertion: "expect(typeof result).toBe('string')" },
      { description: "result ends with 'Z'", assertion: "expect(result.endsWith('Z')).toBeTruthy()" },
      { description: "result includes '1970'", assertion: "expect(result.includes('1970')).toBeTruthy()" },
      { description: 'result length is 24', assertion: "expect(result.length).toBe(24)" },
    ],
    hints: ['The "T" separator is part of the ISO 8601 standard format'],
    tags: ['Date', 'toISOString', 'instance-method'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.toISOString()  // → '2024-01-15T00:00:00.000Z'`,
      explanation: {
        en: 'Use toISOString() to serialize a Date as a UTC ISO 8601 string in the format YYYY-MM-DDTHH:mm:ss.sssZ.',
        es: 'Usa toISOString() para serializar un Date como cadena ISO 8601 en UTC con el formato YYYY-MM-DDTHH:mm:ss.sssZ.',
      },
    },
  },
  {
    slug: 'date-toisostring-3',
    title: 'toISOString() — ends with "Z"',
    description: `## Date.prototype.toISOString()\n\nThe output always ends with "Z" to indicate UTC time.\n\n**Challenge:** Verify that \`new Date(0).toISOString().endsWith('Z')\` is true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'toISOString',
    initialCode: `// Use new Date(0).toISOString().endsWith('Z')\n`,
    solution: `new Date(0).toISOString().endsWith('Z')`,
    tests: [
      { description: "result ends with 'Z'", assertion: "expect(result.endsWith('Z')).toBeTruthy()" },
      { description: "result includes 'T'", assertion: "expect(result.includes('T')).toBeTruthy()" },
      { description: 'result is a string', assertion: "expect(typeof result).toBe('string')" },
      { description: 'result is truthy', assertion: "expect(result).toBeTruthy()" },
      { description: 'result length is 24', assertion: "expect(result.length).toBe(24)" },
    ],
    hints: ['"Z" in an ISO string means UTC (Zulu time)'],
    tags: ['Date', 'toISOString', 'instance-method', 'UTC'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.toISOString()  // → '2024-01-15T00:00:00.000Z'`,
      explanation: {
        en: 'Use toISOString() to serialize a Date as a UTC ISO 8601 string in the format YYYY-MM-DDTHH:mm:ss.sssZ.',
        es: 'Usa toISOString() para serializar un Date como cadena ISO 8601 en UTC con el formato YYYY-MM-DDTHH:mm:ss.sssZ.',
      },
    },
  },
  {
    slug: 'date-toisostring-4',
    title: 'toISOString() — length is 24',
    description: `## Date.prototype.toISOString()\n\nISO strings from JavaScript have a fixed length of 24 characters (including milliseconds and "Z").\n\n**Challenge:** Verify that \`new Date(0).toISOString().length\` equals 24.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'toISOString',
    initialCode: `// Use new Date(0).toISOString().length\n`,
    solution: `new Date(0).toISOString().length`,
    tests: [
      { description: 'result length is 24', assertion: "expect(result.length).toBe(24)" },
      { description: 'result is a string', assertion: "expect(typeof result).toBe('string')" },
      { description: "result ends with 'Z'", assertion: "expect(result.endsWith('Z')).toBeTruthy()" },
      { description: "result includes '.000Z' (milliseconds)", assertion: "expect(result.includes('.000Z')).toBeTruthy()" },
      { description: 'result is truthy', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['Format: YYYY-MM-DDTHH:mm:ss.mmmZ — exactly 24 characters'],
    tags: ['Date', 'toISOString', 'instance-method', 'length'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.toISOString()  // → '2024-01-15T00:00:00.000Z'`,
      explanation: {
        en: 'Use toISOString() to serialize a Date as a UTC ISO 8601 string in the format YYYY-MM-DDTHH:mm:ss.sssZ.',
        es: 'Usa toISOString() para serializar un Date como cadena ISO 8601 en UTC con el formato YYYY-MM-DDTHH:mm:ss.sssZ.',
      },
    },
  },
  {
    slug: 'date-toisostring-5',
    title: 'toISOString() — includes year 2024',
    description: `## Date.prototype.toISOString()\n\nThe year appears at the start of the ISO string.\n\n**Challenge:** Verify that \`new Date('2024-01-15T00:00:00.000Z').toISOString()\` includes \`'2024'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'toISOString',
    initialCode: `// Use new Date('2024-01-15T00:00:00.000Z').toISOString()\n`,
    solution: `new Date('2024-01-15T00:00:00.000Z').toISOString().includes('2024')`,
    tests: [
      { description: "result includes '2024'", assertion: "expect(result).toBeTruthy()" },
      { description: 'result is a string', assertion: "expect(typeof new Date('2024-01-15T00:00:00.000Z').toISOString()).toBe('string')" },
      { description: "result ends with 'Z'", assertion: "expect(new Date('2024-01-15T00:00:00.000Z').toISOString().endsWith('Z')).toBeTruthy()" },
      { description: 'result length is 24', assertion: "expect(new Date('2024-01-15T00:00:00.000Z').toISOString().length).toBe(24)" },
      { description: "exact string match", assertion: "expect(new Date('2024-01-15T00:00:00.000Z').toISOString()).toBe('2024-01-15T00:00:00.000Z')" },
    ],
    hints: ['toISOString() is lossless — the round-trip through a UTC string preserves all information'],
    tags: ['Date', 'toISOString', 'instance-method'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.toISOString()  // → '2024-01-15T00:00:00.000Z'`,
      explanation: {
        en: 'Use toISOString() to serialize a Date as a UTC ISO 8601 string in the format YYYY-MM-DDTHH:mm:ss.sssZ.',
        es: 'Usa toISOString() para serializar un Date como cadena ISO 8601 en UTC con el formato YYYY-MM-DDTHH:mm:ss.sssZ.',
      },
    },
  },
]
