import type { Exercise } from '@/shared/types/exercises'

export const dateGetFullYearExercises: Exercise[] = [
  {
    slug: 'date-getfullyear-1',
    title: 'getFullYear() — returns 2024',
    description: `## Date.prototype.getFullYear()\n\nReturns the local-time year of the date.\n\n**Challenge:** Verify that \`new Date(2024, 0, 15).getFullYear()\` returns 2024.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getFullYear',
    initialCode: `// Use new Date(2024, 0, 15).getFullYear()\n`,
    solution: `new Date(2024, 0, 15).getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 2024', assertion: "expect(result).toBe(2024)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 2024', assertion: "expect(result === 2024).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
    ],
    hints: ['getFullYear() returns the 4-digit year in local time'],
    tags: ['Date', 'getFullYear', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getFullYear()  // → 2024`,
      explanation: {
        en: 'Use getFullYear() to retrieve the four-digit year of a Date object in local time.',
        es: 'Usa getFullYear() para obtener el año de cuatro dígitos de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getfullyear-2',
    title: 'getFullYear() — epoch year is 1970',
    description: `## Date.prototype.getFullYear()\n\nThe Unix epoch (Jan 1 1970 UTC) has a local year of 1970 in most timezones.\n\n**Challenge:** Verify that \`new Date(0).getFullYear()\` returns 1970.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getFullYear',
    initialCode: `// Use new Date(0).getFullYear()\n`,
    solution: `new Date(0).getFullYear()`,
    tests: [
      { description: 'result returns 1970', assertion: "expect(result).toBe(1970)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 1970', assertion: "expect(result === 1970).toBeTruthy()" },
      { description: 'result > 1969', assertion: "expect(result > 1969).toBeTruthy()" },
      { description: 'result < 1971', assertion: "expect(result < 1971).toBeTruthy()" },
    ],
    hints: ['new Date(0) is the Unix epoch — January 1, 1970 UTC'],
    tags: ['Date', 'getFullYear', 'instance-method', 'epoch'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getFullYear()  // → 2024`,
      explanation: {
        en: 'Use getFullYear() to retrieve the four-digit year of a Date object in local time.',
        es: 'Usa getFullYear() para obtener el año de cuatro dígitos de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getfullyear-3',
    title: 'getFullYear() — year 2000',
    description: `## Date.prototype.getFullYear()\n\n\`getFullYear()\` always returns a 4-digit year (unlike the deprecated \`getYear()\`).\n\n**Challenge:** Verify that \`new Date(2000, 0, 1).getFullYear()\` returns 2000.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getFullYear',
    initialCode: `// Use new Date(2000, 0, 1).getFullYear()\n`,
    solution: `new Date(2000, 0, 1).getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 2000', assertion: "expect(result).toBe(2000)" },
      { description: 'result is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: 'result === 2000', assertion: "expect(result === 2000).toBeTruthy()" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result > 1999', assertion: "expect(result > 1999).toBeTruthy()" },
    ],
    hints: ['getFullYear() returns the full 4-digit year, safe for years 2000+'],
    tags: ['Date', 'getFullYear', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getFullYear()  // → 2024`,
      explanation: {
        en: 'Use getFullYear() to retrieve the four-digit year of a Date object in local time.',
        es: 'Usa getFullYear() para obtener el año de cuatro dígitos de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getfullyear-4',
    title: 'getFullYear() — result is a number',
    description: `## Date.prototype.getFullYear()\n\nThe return type of \`getFullYear()\` is always a primitive number.\n\n**Challenge:** Verify that \`typeof new Date(2024, 0, 15).getFullYear()\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'getFullYear',
    initialCode: `// Use typeof new Date(2024, 0, 15).getFullYear()\n`,
    solution: `typeof new Date(2024, 0, 15).getFullYear()`,
    tests: [
      { description: "typeof result is 'number'", assertion: "expect(typeof result).toBe('number')" },
      { description: 'result is integer', assertion: "expect(Number.isInteger(result)).toBeTruthy()" },
      { description: 'result is finite', assertion: "expect(Number.isFinite(result)).toBeTruthy()" },
      { description: 'result is not NaN', assertion: "expect(!isNaN(result)).toBeTruthy()" },
      { description: 'result > 0', assertion: "expect(result > 0).toBeTruthy()" },
    ],
    hints: ['getFullYear() returns a number primitive, not a string'],
    tags: ['Date', 'getFullYear', 'instance-method', 'typeof'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getFullYear()  // → 2024`,
      explanation: {
        en: 'Use getFullYear() to retrieve the four-digit year of a Date object in local time.',
        es: 'Usa getFullYear() para obtener el año de cuatro dígitos de un objeto Date en hora local.',
      },
    },
  },
  {
    slug: 'date-getfullyear-5',
    title: 'getFullYear() — after setFullYear()',
    description: `## Date.prototype.getFullYear()\n\nAfter calling \`setFullYear()\`, \`getFullYear()\` reflects the updated year.\n\n**Challenge:** Verify that after \`setFullYear(2030)\`, \`getFullYear()\` returns 2030.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'getFullYear',
    initialCode: `// Create a Date, call setFullYear(2030), then getFullYear()\n`,
    solution: `const d = new Date(2024, 0, 15); d.setFullYear(2030); d.getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 2030 after setFullYear(2030)', assertion: "const d = new Date(2024, 0, 15); d.setFullYear(2030); expect(d.getFullYear()).toBe(2030)" },
      { description: 'result is a number', assertion: "const d2 = new Date(2024, 0, 15); d2.setFullYear(2030); expect(typeof d2.getFullYear()).toBe('number')" },
      { description: 'year was mutated', assertion: "const d3 = new Date(2024, 0, 15); d3.setFullYear(2030); expect(d3.getFullYear() !== 2024).toBeTruthy()" },
      { description: 'getFullYear() === 2030', assertion: "const d4 = new Date(2024, 0, 15); d4.setFullYear(2030); expect(d4.getFullYear() === 2030).toBeTruthy()" },
      { description: 'month is still 0', assertion: "const d5 = new Date(2024, 0, 15); d5.setFullYear(2030); expect(d5.getMonth()).toBe(0)" },
    ],
    hints: ['setFullYear() mutates the Date in place; getFullYear() then returns the updated year'],
    tags: ['Date', 'getFullYear', 'instance-method', 'setFullYear'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.getFullYear()  // → 2024`,
      explanation: {
        en: 'Use getFullYear() to retrieve the four-digit year of a Date object in local time.',
        es: 'Usa getFullYear() para obtener el año de cuatro dígitos de un objeto Date en hora local.',
      },
    },
  },
]
