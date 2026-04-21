import type { Exercise } from '@/shared/types/exercises'

export const dateGetDateExercises: Exercise[] = [
  {
    slug: 'date-getdate-1',
    title: 'getDate() — day 15',
    description: `## Date.prototype.getDate()\n\nReturns the day of the month (1–31) in local time.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15).getDate()\` returns 15.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDate',
    initialCode: `// Use new Date(2024, 0, 15).getDate()\n`,
    solution: `new Date(2024, 0, 15).getDate()`,
    tests: [
      { description: 'getDate() returns 15', assertion: "expect(result).toBe(15)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 15', assertion: "expect(result === 15).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result > 0', assertion: "expect(result > 0).toBeTruthy()" },
    ],
    hints: ['getDate() returns the day of the month — NOT the day of the week (that is getDay())'],
    tags: ['Date', 'getDate', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getDate()  // → 15`,
      explanation: {
        en: 'Use getDate() to retrieve the day of the month (1–31) in local time from a Date object.',
        es: 'Usa getDate() para obtener el día del mes (1–31) en hora local de un objeto Date.',
      },
    },
  },
  {
    slug: 'date-getdate-2',
    title: 'getDate() — first day of month',
    description: `## Date.prototype.getDate()\n\nThe first day of any month is always 1.\n\n**Challenge:** Verify that \`new Date(2024, 0, 1).getDate()\` returns 1.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDate',
    initialCode: `// Use new Date(2024, 0, 1).getDate()\n`,
    solution: `new Date(2024, 0, 1).getDate()`,
    tests: [
      { description: 'getDate() returns 1 for first day', assertion: "expect(result).toBe(1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1', assertion: "expect(result === 1).toBeTruthy()" },
      { description: 'result >= 1', assertion: "expect(result >= 1).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['Day-of-month indexing starts at 1, unlike months which start at 0'],
    tags: ['Date', 'getDate', 'instance-method', 'first-day'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getDate()  // → 15`,
      explanation: {
        en: 'Use getDate() to retrieve the day of the month (1–31) in local time from a Date object.',
        es: 'Usa getDate() para obtener el día del mes (1–31) en hora local de un objeto Date.',
      },
    },
  },
  {
    slug: 'date-getdate-3',
    title: 'getDate() — last day of January (31)',
    description: `## Date.prototype.getDate()\n\nJanuary has 31 days. \`getDate()\` for Jan 31 returns 31.\n\n**Challenge:** Verify that \`new Date(2024, 0, 31).getDate()\` returns 31.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDate',
    initialCode: `// Use new Date(2024, 0, 31).getDate()\n`,
    solution: `new Date(2024, 0, 31).getDate()`,
    tests: [
      { description: 'getDate() returns 31', assertion: "expect(result).toBe(31)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 31', assertion: "expect(result === 31).toBeTruthy()" },
      { description: 'result <= 31', assertion: "expect(result <= 31).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['January has 31 days; getDate() ranges from 1 to the last day of the month'],
    tags: ['Date', 'getDate', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getDate()  // → 15`,
      explanation: {
        en: 'Use getDate() to retrieve the day of the month (1–31) in local time from a Date object.',
        es: 'Usa getDate() para obtener el día del mes (1–31) en hora local de un objeto Date.',
      },
    },
  },
  {
    slug: 'date-getdate-4',
    title: 'getDate() — result is a number',
    description: `## Date.prototype.getDate()\n\n\`getDate()\` always returns a number.\n\n**Challenge:** Verify that \`typeof new Date(2024, 0, 15).getDate()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDate',
    initialCode: `// Use typeof new Date(2024, 0, 15).getDate()\n`,
    solution: `typeof new Date(2024, 0, 15).getDate()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result >= 1', assertion: "expect(result >= 1).toBeTruthy()" },
      { description: 'result <= 31', assertion: "expect(result <= 31).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getDate() returns an integer between 1 and 31'],
    tags: ['Date', 'getDate', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getDate()  // → 15`,
      explanation: {
        en: 'Use getDate() to retrieve the day of the month (1–31) in local time from a Date object.',
        es: 'Usa getDate() para obtener el día del mes (1–31) en hora local de un objeto Date.',
      },
    },
  },
  {
    slug: 'date-getdate-5',
    title: 'getDate() — first day via Date constructor',
    description: `## Date.prototype.getDate()\n\nWhen you pass day 1 explicitly, getDate() returns 1.\n\n**Challenge:** Verify that \`new Date(2024, 5, 1).getDate()\` returns 1 for June 1.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDate',
    initialCode: `// Use new Date(2024, 5, 1).getDate()\n`,
    solution: `new Date(2024, 5, 1).getDate()`,
    tests: [
      { description: 'getDate() returns 1 for June 1', assertion: "expect(result).toBe(1)" },
      { description: 'month is 5 (June)', assertion: "expect(new Date(2024, 5, 1).getMonth()).toBe(5)" },
      { description: 'year is 2024', assertion: "expect(new Date(2024, 5, 1).getFullYear()).toBe(2024)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result >= 1', assertion: "expect(result >= 1).toBeTruthy()" },
    ],
    hints: ['The third argument to the Date constructor is the day-of-month (1-indexed)'],
    tags: ['Date', 'getDate', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getDate()  // → 15`,
      explanation: {
        en: 'Use getDate() to retrieve the day of the month (1–31) in local time from a Date object.',
        es: 'Usa getDate() para obtener el día del mes (1–31) en hora local de un objeto Date.',
      },
    },
  },
]
