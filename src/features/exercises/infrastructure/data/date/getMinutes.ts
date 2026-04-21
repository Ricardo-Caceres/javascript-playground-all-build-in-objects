import type { Exercise } from '@/shared/types/exercises'

export const dateGetMinutesExercises: Exercise[] = [
  {
    slug: 'date-getminutes-1',
    title: 'getMinutes() — returns 30',
    description: `## Date.prototype.getMinutes()\n\nReturns the minutes (0–59) in local time.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30).getMinutes()\` returns 30.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMinutes',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30).getMinutes()\n`,
    solution: `new Date(2024, 0, 15, 12, 30).getMinutes()`,
    tests: [
      { description: 'getMinutes() returns 30', assertion: "expect(result).toBe(30)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 30', assertion: "expect(result === 30).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
    ],
    hints: ['The 5th argument to the Date constructor is minutes (0–59)'],
    tags: ['Date', 'getMinutes', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30)
d.getMinutes()  // → 30
// returns 0–59`,
      explanation: {
        en: 'Use getMinutes() to retrieve the minutes component (0–59) of a Date object in local time.',
        es: 'Usa getMinutes() para obtener el componente de minutos (0–59) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getminutes-2',
    title: 'getMinutes() — returns 0',
    description: `## Date.prototype.getMinutes()\n\nWhen minutes are 0, \`getMinutes()\` returns 0.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 0).getMinutes()\` returns 0.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMinutes',
    initialCode: `// Use new Date(2024, 0, 15, 12, 0).getMinutes()\n`,
    solution: `new Date(2024, 0, 15, 12, 0).getMinutes()`,
    tests: [
      { description: 'getMinutes() returns 0', assertion: "expect(result).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 0', assertion: "expect(result === 0).toBeTruthy()" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['0 minutes means exactly on the hour'],
    tags: ['Date', 'getMinutes', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30)
d.getMinutes()  // → 30
// returns 0–59`,
      explanation: {
        en: 'Use getMinutes() to retrieve the minutes component (0–59) of a Date object in local time.',
        es: 'Usa getMinutes() para obtener el componente de minutos (0–59) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getminutes-3',
    title: 'getMinutes() — returns 59',
    description: `## Date.prototype.getMinutes()\n\n59 is the maximum minute value.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 59).getMinutes()\` returns 59.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMinutes',
    initialCode: `// Use new Date(2024, 0, 15, 12, 59).getMinutes()\n`,
    solution: `new Date(2024, 0, 15, 12, 59).getMinutes()`,
    tests: [
      { description: 'getMinutes() returns 59', assertion: "expect(result).toBe(59)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 59', assertion: "expect(result === 59).toBeTruthy()" },
      { description: 'result <= 59', assertion: "expect(result <= 59).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['Minutes range from 0 to 59; 60 would roll over to the next hour'],
    tags: ['Date', 'getMinutes', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30)
d.getMinutes()  // → 30
// returns 0–59`,
      explanation: {
        en: 'Use getMinutes() to retrieve the minutes component (0–59) of a Date object in local time.',
        es: 'Usa getMinutes() para obtener el componente de minutos (0–59) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getminutes-4',
    title: 'getMinutes() — result is a number',
    description: `## Date.prototype.getMinutes()\n\n\`getMinutes()\` returns a number in [0, 59].\n\n**Challenge:** Verify that \`typeof new Date(2024, 0, 15, 12, 30).getMinutes()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getMinutes',
    initialCode: `// Use typeof new Date(2024, 0, 15, 12, 30).getMinutes()\n`,
    solution: `typeof new Date(2024, 0, 15, 12, 30).getMinutes()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result >= 0', assertion: "expect(result >= 0).toBeTruthy()" },
      { description: 'result <= 59', assertion: "expect(result <= 59).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getMinutes() always returns a number'],
    tags: ['Date', 'getMinutes', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30)
d.getMinutes()  // → 30
// returns 0–59`,
      explanation: {
        en: 'Use getMinutes() to retrieve the minutes component (0–59) of a Date object in local time.',
        es: 'Usa getMinutes() para obtener el componente de minutos (0–59) de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getminutes-5',
    title: 'getMinutes() — after construction with full args',
    description: `## Date.prototype.getMinutes()\n\nWhen you pass all 7 args to the Date constructor, \`getMinutes()\` returns the correct value.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15, 12, 30, 45, 500).getMinutes()\` returns 30.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'getMinutes',
    initialCode: `// Use new Date(2024, 0, 15, 12, 30, 45, 500).getMinutes()\n`,
    solution: `new Date(2024, 0, 15, 12, 30, 45, 500).getMinutes()`,
    tests: [
      { description: 'getMinutes() returns 30', assertion: "expect(result).toBe(30)" },
      { description: 'getSeconds() returns 45', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getSeconds()).toBe(45)" },
      { description: 'getMilliseconds() returns 500', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getMilliseconds()).toBe(500)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'getHours() returns 12', assertion: "expect(new Date(2024, 0, 15, 12, 30, 45, 500).getHours()).toBe(12)" },
    ],
    hints: ['All time components are set by the 7-arg constructor'],
    tags: ['Date', 'getMinutes', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15, 12, 30)
d.getMinutes()  // → 30
// returns 0–59`,
      explanation: {
        en: 'Use getMinutes() to retrieve the minutes component (0–59) of a Date object in local time.',
        es: 'Usa getMinutes() para obtener el componente de minutos (0–59) de un objeto Date en hora local.',
      },
    },
  },
]
