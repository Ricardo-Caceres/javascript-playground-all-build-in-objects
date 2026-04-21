import type { Exercise } from '@/shared/types/exercises'

export const dateGetDayExercises: Exercise[] = [
  {
    slug: 'date-getday-1',
    title: 'getDay() — Monday is 1',
    description: `## Date.prototype.getDay()\n\nReturns the day of the week (0 = Sunday, 6 = Saturday). Jan 1, 2024 was a Monday.\n\n**Challenge:** Verify that \`new Date(2024, 0, 1).getDay()\` returns 1 (Monday).`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDay',
    initialCode: `// Use new Date(2024, 0, 1).getDay()\n`,
    solution: `new Date(2024, 0, 1).getDay()`,
    tests: [
      { description: 'Jan 1 2024 is Monday (day 1)', assertion: "expect(result).toBe(1)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1', assertion: "expect(result === 1).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 6', assertion: "expect(result <= 6).toBeTruthy()" },
    ],
    hints: ['Jan 1, 2024 was a Monday. getDay() returns 1 for Monday (0=Sun, 1=Mon, …, 6=Sat)'],
    tags: ['Date', 'getDay', 'instance-method', 'Monday'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)  // Monday
d.getDay()  // → 1
// 0=Sun, 1=Mon, …, 6=Sat`,
      explanation: {
        en: 'Use getDay() to retrieve the day of the week (0 = Sunday through 6 = Saturday) in local time.',
        es: 'Usa getDay() para obtener el día de la semana (0 = domingo hasta 6 = sábado) en hora local.',
      },
    },
  },
  {
    slug: 'date-getday-2',
    title: 'getDay() — Sunday is 0',
    description: `## Date.prototype.getDay()\n\nSunday has the index 0. Jan 7, 2024 was a Sunday.\n\n**Challenge:** Verify that \`new Date(2024, 0, 7).getDay()\` returns 0.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDay',
    initialCode: `// Use new Date(2024, 0, 7).getDay()\n`,
    solution: `new Date(2024, 0, 7).getDay()`,
    tests: [
      { description: 'Jan 7 2024 is Sunday (day 0)', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['Sunday = 0, Monday = 1, …, Saturday = 6 in the getDay() system'],
    tags: ['Date', 'getDay', 'instance-method', 'Sunday'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)  // Monday
d.getDay()  // → 1
// 0=Sun, 1=Mon, …, 6=Sat`,
      explanation: {
        en: 'Use getDay() to retrieve the day of the week (0 = Sunday through 6 = Saturday) in local time.',
        es: 'Usa getDay() para obtener el día de la semana (0 = domingo hasta 6 = sábado) en hora local.',
      },
    },
  },
  {
    slug: 'date-getday-3',
    title: 'getDay() — Saturday is 6',
    description: `## Date.prototype.getDay()\n\nSaturday has the index 6. Jan 6, 2024 was a Saturday.\n\n**Challenge:** Verify that \`new Date(2024, 0, 6).getDay()\` returns 6.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDay',
    initialCode: `// Use new Date(2024, 0, 6).getDay()\n`,
    solution: `new Date(2024, 0, 6).getDay()`,
    tests: [
      { description: 'Jan 6 2024 is Saturday (day 6)', assertion: "expect(result).toBe(6)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 6', assertion: "expect(result === 6).toBeTruthy()" },
      { description: 'result <= 6', assertion: "expect(result <= 6).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['Saturday is the last day of the week in JS (index 6)'],
    tags: ['Date', 'getDay', 'instance-method', 'Saturday'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)  // Monday
d.getDay()  // → 1
// 0=Sun, 1=Mon, …, 6=Sat`,
      explanation: {
        en: 'Use getDay() to retrieve the day of the week (0 = Sunday through 6 = Saturday) in local time.',
        es: 'Usa getDay() para obtener el día de la semana (0 = domingo hasta 6 = sábado) en hora local.',
      },
    },
  },
  {
    slug: 'date-getday-4',
    title: 'getDay() — result is between 0 and 6',
    description: `## Date.prototype.getDay()\n\n\`getDay()\` always returns an integer from 0 (Sunday) to 6 (Saturday).\n\n**Challenge:** Verify that the result is in the range [0, 6].`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDay',
    initialCode: `// Use new Date(2024, 0, 15).getDay()\n`,
    solution: `new Date(2024, 0, 15).getDay()`,
    tests: [
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 6', assertion: "expect(result <= 6).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['Days of week run Sunday(0) through Saturday(6) — 7 values total'],
    tags: ['Date', 'getDay', 'instance-method', 'range'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)  // Monday
d.getDay()  // → 1
// 0=Sun, 1=Mon, …, 6=Sat`,
      explanation: {
        en: 'Use getDay() to retrieve the day of the week (0 = Sunday through 6 = Saturday) in local time.',
        es: 'Usa getDay() para obtener el día de la semana (0 = domingo hasta 6 = sábado) en hora local.',
      },
    },
  },
  {
    slug: 'date-getday-5',
    title: 'getDay() — result is a number',
    description: `## Date.prototype.getDay()\n\n\`getDay()\` returns a primitive number.\n\n**Challenge:** Verify that \`typeof new Date(2024, 0, 15).getDay()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getDay',
    initialCode: `// Use typeof new Date(2024, 0, 15).getDay()\n`,
    solution: `typeof new Date(2024, 0, 15).getDay()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 6', assertion: "expect(result <= 6).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getDay() always returns a number — specifically an integer in [0, 6]'],
    tags: ['Date', 'getDay', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)  // Monday
d.getDay()  // → 1
// 0=Sun, 1=Mon, …, 6=Sat`,
      explanation: {
        en: 'Use getDay() to retrieve the day of the week (0 = Sunday through 6 = Saturday) in local time.',
        es: 'Usa getDay() para obtener el día de la semana (0 = domingo hasta 6 = sábado) en hora local.',
      },
    },
  },
]
