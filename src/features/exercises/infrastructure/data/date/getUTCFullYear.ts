import type { Exercise } from '@/shared/types/exercises'

export const dateGetUTCFullYearExercises: Exercise[] = [
  {
    slug: 'date-getutcfullyear-1',
    title: 'getUTCFullYear() — returns 2024',
    description: `## Date.prototype.getUTCFullYear()\n\nReturns the UTC year. Unlike \`getFullYear()\`, it is unaffected by the local timezone.\n\n**Challenge:** Verify that \`new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()\` returns 2024.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCFullYear',
    initialCode: `// Use new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()\n`,
    solution: `new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()`,
    tests: [
      { description: 'getUTCFullYear() returns 2024', assertion: "expect(result).toBe(2024)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 2024', assertion: "expect(result === 2024).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result > 0', assertion: "expect(result > 0).toBeTruthy()" },
    ],
    hints: ['Always use UTC variants when working with ISO date strings ending in "Z"'],
    tags: ['Date', 'getUTCFullYear', 'instance-method', 'UTC'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.getUTCFullYear()  // → 2024`,
      explanation: {
        en: 'Use getUTCFullYear() to retrieve the four-digit UTC year of a Date, regardless of local timezone.',
        es: 'Usa getUTCFullYear() para obtener el año UTC de cuatro dígitos de un Date, independientemente de la zona horaria local.',
      },
    },
  },
  {
    slug: 'date-getutcfullyear-2',
    title: 'getUTCFullYear() — epoch year is 1970',
    description: `## Date.prototype.getUTCFullYear()\n\nThe Unix epoch is Jan 1, 1970 UTC, so \`getUTCFullYear()\` returns 1970.\n\n**Challenge:** Verify that \`new Date(0).getUTCFullYear()\` returns 1970.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCFullYear',
    initialCode: `// Use new Date(0).getUTCFullYear()\n`,
    solution: `new Date(0).getUTCFullYear()`,
    tests: [
      { description: 'result returns 1970', assertion: "expect(result).toBe(1970)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1970', assertion: "expect(result === 1970).toBeTruthy()" },
      { description: 'result > 1969', assertion: "expect(result > 1969).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['The UTC year of the epoch is reliably 1970 in every timezone'],
    tags: ['Date', 'getUTCFullYear', 'instance-method', 'UTC', 'epoch'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.getUTCFullYear()  // → 2024`,
      explanation: {
        en: 'Use getUTCFullYear() to retrieve the four-digit UTC year of a Date, regardless of local timezone.',
        es: 'Usa getUTCFullYear() para obtener el año UTC de cuatro dígitos de un Date, independientemente de la zona horaria local.',
      },
    },
  },
  {
    slug: 'date-getutcfullyear-3',
    title: 'getUTCFullYear() — result is a number',
    description: `## Date.prototype.getUTCFullYear()\n\n\`getUTCFullYear()\` returns a number.\n\n**Challenge:** Verify that \`typeof new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getUTCFullYear',
    initialCode: `// Use typeof new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()\n`,
    solution: `typeof new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result > 0', assertion: "expect(result > 0).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
    ],
    hints: ['getUTCFullYear() always returns a number primitive'],
    tags: ['Date', 'getUTCFullYear', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.getUTCFullYear()  // → 2024`,
      explanation: {
        en: 'Use getUTCFullYear() to retrieve the four-digit UTC year of a Date, regardless of local timezone.',
        es: 'Usa getUTCFullYear() para obtener el año UTC de cuatro dígitos de un Date, independientemente de la zona horaria local.',
      },
    },
  },
  {
    slug: 'date-getutcfullyear-4',
    title: 'getUTCFullYear() — via Date.UTC()',
    description: `## Date.prototype.getUTCFullYear()\n\nCombining \`Date.UTC()\` with \`new Date()\` guarantees the correct UTC year.\n\n**Challenge:** Verify that \`new Date(Date.UTC(2000, 0, 1)).getUTCFullYear()\` returns 2000.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'getUTCFullYear',
    initialCode: `// Use new Date(Date.UTC(2000, 0, 1)).getUTCFullYear()\n`,
    solution: `new Date(Date.UTC(2000, 0, 1)).getUTCFullYear()`,
    tests: [
      { description: 'getUTCFullYear() returns 2000', assertion: "expect(result).toBe(2000)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 2000', assertion: "expect(result === 2000).toBeTruthy()" },
      { description: 'getUTCMonth() returns 0', assertion: "expect(new Date(Date.UTC(2000, 0, 1)).getUTCMonth()).toBe(0)" },
      { description: 'getUTCDate() returns 1', assertion: "expect(new Date(Date.UTC(2000, 0, 1)).getUTCDate()).toBe(1)" },
    ],
    hints: ['Date.UTC() creates a timestamp for a UTC date; getUTCFullYear() reads it back accurately'],
    tags: ['Date', 'getUTCFullYear', 'instance-method', 'UTC'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.getUTCFullYear()  // → 2024`,
      explanation: {
        en: 'Use getUTCFullYear() to retrieve the four-digit UTC year of a Date, regardless of local timezone.',
        es: 'Usa getUTCFullYear() para obtener el año UTC de cuatro dígitos de un Date, independientemente de la zona horaria local.',
      },
    },
  },
  {
    slug: 'date-getutcfullyear-5',
    title: 'getUTCFullYear() — comparison',
    description: `## Date.prototype.getUTCFullYear()\n\nA later year has a larger \`getUTCFullYear()\` value.\n\n**Challenge:** Verify that the UTC year of a 2025 date is greater than that of a 2024 date.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'getUTCFullYear',
    initialCode: `// Compare getUTCFullYear() of two dates\n`,
    solution: `new Date('2025-01-15T00:00:00.000Z').getUTCFullYear() > new Date('2024-01-15T00:00:00.000Z').getUTCFullYear()`,
    tests: [
      { description: '2025 > 2024 by UTC year', assertion: "expect(new Date('2025-01-15T00:00:00.000Z').getUTCFullYear() > result).toBeTruthy()" },
      { description: 'difference is 1', assertion: "expect(new Date('2025-01-15T00:00:00.000Z').getUTCFullYear() - result).toBe(1)" },
      { description: '2024 UTC year is 2024', assertion: "expect(result).toBe(2024)" },
      { description: '2025 UTC year is 2025', assertion: "expect(new Date('2025-01-15T00:00:00.000Z').getUTCFullYear()).toBe(2025)" },
      { description: 'both are numbers', assertion: "expect(typeof result).toBe('number')" },
    ],
    hints: ['getUTCFullYear() returns an integer that can be compared directly'],
    tags: ['Date', 'getUTCFullYear', 'instance-method', 'comparison'],
    usageExample: {
      code: `const d = new Date('2024-01-15T00:00:00.000Z')
d.getUTCFullYear()  // → 2024`,
      explanation: {
        en: 'Use getUTCFullYear() to retrieve the four-digit UTC year of a Date, regardless of local timezone.',
        es: 'Usa getUTCFullYear() para obtener el año UTC de cuatro dígitos de un Date, independientemente de la zona horaria local.',
      },
    },
  },
]
