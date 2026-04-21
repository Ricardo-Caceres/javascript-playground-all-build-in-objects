import type { Exercise } from '@/shared/types/exercises'

export const dateGetUTCMonthExercises: Exercise[] = [
  {
    slug: 'date-getutcmonth-1',
    title: 'getUTCMonth() — January is 0',
    description: `## Date.prototype.getUTCMonth()\n\nReturns the UTC month index (0 = January). Use UTC strings to avoid timezone drift.\n\n**Challenge:** Verify that \`new Date('2024-01-15T00:00:00.000Z').getUTCMonth()\` returns 0.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCMonth',
    initialCode: `// Use new Date('2024-01-15T00:00:00.000Z').getUTCMonth()\n`,
    solution: `new Date('2024-01-15T00:00:00.000Z').getUTCMonth()`,
    tests: [
      { description: 'getUTCMonth() returns 0 for January', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['getUTCMonth() uses the same 0-indexed system as getMonth() — Jan=0, Dec=11'],
    tags: ['Date', 'getUTCMonth', 'instance-method', 'UTC'],
    usageExample: {
      code: `const d = new Date('2024-06-15T00:00:00.000Z')
d.getUTCMonth()  // → 5 (June)
// 0=Jan, 11=Dec`,
      explanation: {
        en: 'Use getUTCMonth() to retrieve the zero-indexed UTC month (0 = January through 11 = December) of a Date.',
        es: 'Usa getUTCMonth() para obtener el mes UTC con índice cero (0 = enero hasta 11 = diciembre) de un Date.',
      },
    },
  },
  {
    slug: 'date-getutcmonth-2',
    title: 'getUTCMonth() — June is 5',
    description: `## Date.prototype.getUTCMonth()\n\nJune has UTC month index 5.\n\n**Challenge:** Verify that \`new Date('2024-06-15T12:30:45.000Z').getUTCMonth()\` returns 5.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCMonth',
    initialCode: `// Use new Date('2024-06-15T12:30:45.000Z').getUTCMonth()\n`,
    solution: `new Date('2024-06-15T12:30:45.000Z').getUTCMonth()`,
    tests: [
      { description: 'getUTCMonth() returns 5 for June', assertion: "expect(result).toBe(5)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 5', assertion: "expect(result === 5).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 11', assertion: "expect(result <= 11).toBeTruthy()" },
    ],
    hints: ['June is month index 5 in the 0-indexed system'],
    tags: ['Date', 'getUTCMonth', 'instance-method', 'UTC', 'June'],
    usageExample: {
      code: `const d = new Date('2024-06-15T00:00:00.000Z')
d.getUTCMonth()  // → 5 (June)
// 0=Jan, 11=Dec`,
      explanation: {
        en: 'Use getUTCMonth() to retrieve the zero-indexed UTC month (0 = January through 11 = December) of a Date.',
        es: 'Usa getUTCMonth() para obtener el mes UTC con índice cero (0 = enero hasta 11 = diciembre) de un Date.',
      },
    },
  },
  {
    slug: 'date-getutcmonth-3',
    title: 'getUTCMonth() — December is 11',
    description: `## Date.prototype.getUTCMonth()\n\nDecember has UTC month index 11 (the maximum).\n\n**Challenge:** Verify that \`new Date('2024-12-25T00:00:00.000Z').getUTCMonth()\` returns 11.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCMonth',
    initialCode: `// Use new Date('2024-12-25T00:00:00.000Z').getUTCMonth()\n`,
    solution: `new Date('2024-12-25T00:00:00.000Z').getUTCMonth()`,
    tests: [
      { description: 'getUTCMonth() returns 11 for December', assertion: "expect(result).toBe(11)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 11', assertion: "expect(result === 11).toBeTruthy()" },
      { description: 'result <= 11', assertion: "expect(result <= 11).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['December = 11 (0-indexed), the maximum month index'],
    tags: ['Date', 'getUTCMonth', 'instance-method', 'UTC', 'December'],
    usageExample: {
      code: `const d = new Date('2024-06-15T00:00:00.000Z')
d.getUTCMonth()  // → 5 (June)
// 0=Jan, 11=Dec`,
      explanation: {
        en: 'Use getUTCMonth() to retrieve the zero-indexed UTC month (0 = January through 11 = December) of a Date.',
        es: 'Usa getUTCMonth() para obtener el mes UTC con índice cero (0 = enero hasta 11 = diciembre) de un Date.',
      },
    },
  },
  {
    slug: 'date-getutcmonth-4',
    title: 'getUTCMonth() — result is a number',
    description: `## Date.prototype.getUTCMonth()\n\n\`getUTCMonth()\` returns a number in [0, 11].\n\n**Challenge:** Verify that \`typeof new Date('2024-06-15T12:30:45.000Z').getUTCMonth()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCMonth',
    initialCode: `// Use typeof new Date('2024-06-15T12:30:45.000Z').getUTCMonth()\n`,
    solution: `typeof new Date('2024-06-15T12:30:45.000Z').getUTCMonth()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 11', assertion: "expect(result <= 11).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getUTCMonth() always returns an integer number'],
    tags: ['Date', 'getUTCMonth', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date('2024-06-15T00:00:00.000Z')
d.getUTCMonth()  // → 5 (June)
// 0=Jan, 11=Dec`,
      explanation: {
        en: 'Use getUTCMonth() to retrieve the zero-indexed UTC month (0 = January through 11 = December) of a Date.',
        es: 'Usa getUTCMonth() para obtener el mes UTC con índice cero (0 = enero hasta 11 = diciembre) de un Date.',
      },
    },
  },
  {
    slug: 'date-getutcmonth-5',
    title: 'getUTCMonth() — epoch month is 0',
    description: `## Date.prototype.getUTCMonth()\n\nThe Unix epoch is January 1, 1970, so its UTC month is 0.\n\n**Challenge:** Verify that \`new Date(0).getUTCMonth()\` returns 0.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCMonth',
    initialCode: `// Use new Date(0).getUTCMonth()\n`,
    solution: `new Date(0).getUTCMonth()`,
    tests: [
      { description: 'result returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'epoch UTC year is 1970', assertion: "expect(new Date(0).getUTCFullYear()).toBe(1970)" },
      { description: 'epoch UTC date is 1', assertion: "expect(new Date(0).getUTCDate()).toBe(1)" },
    ],
    hints: ['The epoch is January 1, 1970 UTC; January = month index 0'],
    tags: ['Date', 'getUTCMonth', 'instance-method', 'UTC', 'epoch'],
    usageExample: {
      code: `const d = new Date('2024-06-15T00:00:00.000Z')
d.getUTCMonth()  // → 5 (June)
// 0=Jan, 11=Dec`,
      explanation: {
        en: 'Use getUTCMonth() to retrieve the zero-indexed UTC month (0 = January through 11 = December) of a Date.',
        es: 'Usa getUTCMonth() para obtener el mes UTC con índice cero (0 = enero hasta 11 = diciembre) de un Date.',
      },
    },
  },
]
