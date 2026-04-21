import type { Exercise } from '@/shared/types/exercises'

export const dateConstructorExercises: Exercise[] = [
  {
    slug: 'date-constructor-1',
    title: 'Date Constructor — Unix epoch (0 ms)',
    description: `## Date Constructor\n\n\`new Date(0)\` creates a Date at exactly the Unix epoch: January 1, 1970 00:00:00 UTC.\n\n**Challenge:** Verify that \`new Date(0).getFullYear()\` returns 1970.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Date',
    initialCode: `// Use new Date(0)\n`,
    solution: `new Date(0).getFullYear()`,
    tests: [
      { description: 'result returns 1970', assertion: "expect(result).toBe(1970)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'new Date(0) is a Date object', assertion: "expect(new Date(0) instanceof Date).toBeTruthy()" },
      { description: 'getTime() returns 0 for epoch', assertion: "expect(new Date(0).getTime()).toBe(0)" },
      { description: 'getFullYear() === 1970', assertion: "expect(result === 1970).toBeTruthy()" },
    ],
    hints: ['Passing 0 to the Date constructor gives the Unix epoch (Jan 1 1970 UTC)'],
    tags: ['Date', 'constructor', 'epoch'],
    usageExample: {
      code: `const d1 = new Date()
const d2 = new Date('2024-01-15')
const d3 = new Date(2024, 0, 15)  // → Jan 15 2024
d3 instanceof Date  // → true`,
      explanation: {
        en: 'Use new Date() to create a Date object from the current time, a timestamp, a date string, or explicit year/month/day arguments.',
        es: 'Usa new Date() para crear un objeto Date a partir de la hora actual, un timestamp, una cadena de fecha o argumentos explícitos de año/mes/día.',
      },
    },
  },
  {
    slug: 'date-constructor-2',
    title: 'Date Constructor — date string',
    description: `## Date Constructor\n\n\`new Date(dateString)\` parses an ISO 8601 date string.\n\n**Challenge:** Verify that \`new Date('2024-01-15').getFullYear()\` returns 2024.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Date',
    initialCode: `// Use new Date('2024-01-15')\n`,
    solution: `new Date('2024-01-15').getFullYear()`,
    tests: [
      { description: "result returns 2024", assertion: "expect(result).toBe(2024)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: "new Date('2024-01-15') is a Date instance", assertion: "expect(new Date('2024-01-15') instanceof Date).toBeTruthy()" },
      { description: 'getTime() > 0 for dates after epoch', assertion: "expect(new Date('2024-01-15').getTime() > 0).toBeTruthy()" },
      { description: 'getFullYear() === 2024', assertion: "expect(result === 2024).toBeTruthy()" },
    ],
    hints: ['ISO 8601 date strings like "YYYY-MM-DD" are reliably parsed by new Date()'],
    tags: ['Date', 'constructor', 'string'],
    usageExample: {
      code: `const d1 = new Date()
const d2 = new Date('2024-01-15')
const d3 = new Date(2024, 0, 15)  // → Jan 15 2024
d3 instanceof Date  // → true`,
      explanation: {
        en: 'Use new Date() to create a Date object from the current time, a timestamp, a date string, or explicit year/month/day arguments.',
        es: 'Usa new Date() para crear un objeto Date a partir de la hora actual, un timestamp, una cadena de fecha o argumentos explícitos de año/mes/día.',
      },
    },
  },
  {
    slug: 'date-constructor-3',
    title: 'Date Constructor — year, month, day args',
    description: `## Date Constructor\n\n\`new Date(year, month, day)\` creates a local-time Date. **Month is 0-indexed** (0 = January, 11 = December).\n\n**Challenge:** Verify that \`new Date(2024, 0, 15).getMonth()\` returns 0 (January).`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Date',
    initialCode: `// Use new Date(2024, 0, 15)\n`,
    solution: `new Date(2024, 0, 15).getMonth()`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'getFullYear() returns 2024', assertion: "expect(new Date(2024, 0, 15).getFullYear()).toBe(2024)" },
      { description: 'getDate() returns 15', assertion: "expect(new Date(2024, 0, 15).getDate()).toBe(15)" },
      { description: 'instanceof Date is true', assertion: "expect(new Date(2024, 0, 15) instanceof Date).toBeTruthy()" },
      { description: 'month 0 means January', assertion: "expect(result === 0).toBeTruthy()" },
    ],
    hints: ['Month index starts at 0: January=0, February=1, …, December=11'],
    tags: ['Date', 'constructor', 'month', '0-indexed'],
    usageExample: {
      code: `const d1 = new Date()
const d2 = new Date('2024-01-15')
const d3 = new Date(2024, 0, 15)  // → Jan 15 2024
d3 instanceof Date  // → true`,
      explanation: {
        en: 'Use new Date() to create a Date object from the current time, a timestamp, a date string, or explicit year/month/day arguments.',
        es: 'Usa new Date() para crear un objeto Date a partir de la hora actual, un timestamp, una cadena de fecha o argumentos explícitos de año/mes/día.',
      },
    },
  },
  {
    slug: 'date-constructor-4',
    title: 'Date Constructor — typeof result',
    description: `## Date Constructor\n\n\`new Date()\` returns an object, not a primitive.\n\n**Challenge:** Verify that \`typeof new Date(0)\` returns \`'object'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Date',
    initialCode: `// Use typeof new Date(0)\n`,
    solution: `typeof new Date(0)`,
    tests: [
      { description: "result is 'object'", assertion: "expect(result).toBe('object')" },
      { description: 'new Date(0) instanceof Date', assertion: "expect(new Date(0) instanceof Date).toBeTruthy()" },
      { description: 'new Date(0) is truthy', assertion: "expect(new Date(0)).toBeTruthy()" },
      { description: 'new Date(0) is not null', assertion: "expect(new Date(0) !== null).toBeTruthy()" },
      { description: "typeof result === 'object'", assertion: "expect(result === 'object').toBeTruthy()" },
    ],
    hints: ['Unlike primitives, Date instances have typeof === "object"'],
    tags: ['Date', 'constructor', 'typeof'],
    usageExample: {
      code: `const d1 = new Date()
const d2 = new Date('2024-01-15')
const d3 = new Date(2024, 0, 15)  // → Jan 15 2024
d3 instanceof Date  // → true`,
      explanation: {
        en: 'Use new Date() to create a Date object from the current time, a timestamp, a date string, or explicit year/month/day arguments.',
        es: 'Usa new Date() para crear un objeto Date a partir de la hora actual, un timestamp, una cadena de fecha o argumentos explícitos de año/mes/día.',
      },
    },
  },
  {
    slug: 'date-constructor-5',
    title: 'Date Constructor — all time components',
    description: `## Date Constructor\n\n\`new Date(year, month, day, hours, minutes, seconds, ms)\` lets you set every component at once.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 500).getSeconds()\` returns 45.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'Date',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 500)\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 500).getSeconds()`,
    tests: [
      { description: 'getSeconds() returns 45', assertion: "expect(result).toBe(45)" },
      { description: 'getHours() returns 12', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getHours()).toBe(12)" },
      { description: 'getMinutes() returns 30', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getMinutes()).toBe(30)" },
      { description: 'getMilliseconds() returns 500', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()).toBe(500)" },
      { description: 'instanceof Date is true', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500) instanceof Date).toBeTruthy()" },
    ],
    hints: ['The 7-arg constructor is new Date(year, monthIndex, day, hours, minutes, seconds, ms)'],
    tags: ['Date', 'constructor', 'time-components'],
    usageExample: {
      code: `const d1 = new Date()
const d2 = new Date('2024-01-15')
const d3 = new Date(2024, 0, 15)  // → Jan 15 2024
d3 instanceof Date  // → true`,
      explanation: {
        en: 'Use new Date() to create a Date object from the current time, a timestamp, a date string, or explicit year/month/day arguments.',
        es: 'Usa new Date() para crear un objeto Date a partir de la hora actual, un timestamp, una cadena de fecha o argumentos explícitos de año/mes/día.',
      },
    },
  },
]
