import type { Exercise } from '@/shared/types/exercises'

export const dateGetMillisecondsExercises: Exercise[] = [
  {
    slug: 'date-getmilliseconds-1',
    title: 'getMilliseconds() — returns 500',
    description: `## Date.prototype.getMilliseconds()\n\nReturns the milliseconds component (0–999) in local time.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()\` returns 500.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMilliseconds',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()`,
    tests: [
      { description: 'getMilliseconds() returns 500', assertion: "expect(result).toBe(500)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 500', assertion: "expect(result === 500).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
    ],
    hints: ['The 7th argument to the Date constructor is milliseconds (0–999)'],
    tags: ['Date', 'getMilliseconds', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30, 45, 750)
d.getMilliseconds()  // → 750
// returns 0–999`,
      explanation: {
        en: 'Use getMilliseconds() to retrieve the milliseconds component (0–999) of a Date object in local time.',
        es: 'Usa getMilliseconds() para obtener el componente de milisegundos (0–999) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getmilliseconds-2',
    title: 'getMilliseconds() — returns 0',
    description: `## Date.prototype.getMilliseconds()\n\nWhen no milliseconds are set, \`getMilliseconds()\` returns 0.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 0).getMilliseconds()\` returns 0.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMilliseconds',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 0).getMilliseconds()\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 0).getMilliseconds()`,
    tests: [
      { description: 'getMilliseconds() returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['0 ms means exactly at the start of a second'],
    tags: ['Date', 'getMilliseconds', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30, 45, 750)
d.getMilliseconds()  // → 750
// returns 0–999`,
      explanation: {
        en: 'Use getMilliseconds() to retrieve the milliseconds component (0–999) of a Date object in local time.',
        es: 'Usa getMilliseconds() para obtener el componente de milisegundos (0–999) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getmilliseconds-3',
    title: 'getMilliseconds() — returns 999',
    description: `## Date.prototype.getMilliseconds()\n\n999 is the maximum milliseconds value (one ms before a second ticks over).\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 999).getMilliseconds()\` returns 999.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMilliseconds',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 999).getMilliseconds()\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 999).getMilliseconds()`,
    tests: [
      { description: 'getMilliseconds() returns 999', assertion: "expect(result).toBe(999)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 999', assertion: "expect(result === 999).toBeTruthy()" },
      { description: 'result <= 999', assertion: "expect(result <= 999).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['Milliseconds range from 0 to 999; 1000 would roll over to the next second'],
    tags: ['Date', 'getMilliseconds', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30, 45, 750)
d.getMilliseconds()  // → 750
// returns 0–999`,
      explanation: {
        en: 'Use getMilliseconds() to retrieve the milliseconds component (0–999) of a Date object in local time.',
        es: 'Usa getMilliseconds() para obtener el componente de milisegundos (0–999) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getmilliseconds-4',
    title: 'getMilliseconds() — result is a number',
    description: `## Date.prototype.getMilliseconds()\n\n\`getMilliseconds()\` returns a number in [0, 999].\n\n**Challenge:** Verify that \`typeof new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMilliseconds',
    initialCode: `// Use typeof new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()\n`,
    solution: `typeof new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 999', assertion: "expect(result <= 999).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getMilliseconds() always returns a number'],
    tags: ['Date', 'getMilliseconds', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30, 45, 750)
d.getMilliseconds()  // → 750
// returns 0–999`,
      explanation: {
        en: 'Use getMilliseconds() to retrieve the milliseconds component (0–999) of a Date object in local time.',
        es: 'Usa getMilliseconds() para obtener el componente de milisegundos (0–999) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getmilliseconds-5',
    title: 'getMilliseconds() — after construction with full args',
    description: `## Date.prototype.getMilliseconds()\n\nUsing all 7 args, \`getMilliseconds()\` returns the exact value passed.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 750).getMilliseconds()\` returns 750.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'getMilliseconds',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 750).getMilliseconds()\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 750).getMilliseconds()`,
    tests: [
      { description: 'getMilliseconds() returns 750', assertion: "expect(result).toBe(750)" },
      { description: 'getSeconds() returns 45', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 750).getSeconds()).toBe(45)" },
      { description: 'getMinutes() returns 30', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 750).getMinutes()).toBe(30)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result <= 999', assertion: "expect(result <= 999).toBeTruthy()" },
    ],
    hints: ['The 7th constructor arg is milliseconds; it independently stores the sub-second component'],
    tags: ['Date', 'getMilliseconds', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30, 45, 750)
d.getMilliseconds()  // → 750
// returns 0–999`,
      explanation: {
        en: 'Use getMilliseconds() to retrieve the milliseconds component (0–999) of a Date object in local time.',
        es: 'Usa getMilliseconds() para obtener el componente de milisegundos (0–999) de un objeto Date en hora local.',
      },
    },
  },
]
