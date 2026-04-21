import type { Exercise } from '@/shared/types/exercises'

export const dateSetFullYearExercises: Exercise[] = [
  {
    slug: 'date-setfullyear-1',
    title: 'setFullYear() — set to 2025',
    description: `## Date.prototype.setFullYear()\n\nMutates the Date in place, setting the year. Returns the new timestamp as a number.\n\n**Challenge:** Verify that after \`setFullYear(2025)\`, \`getFullYear()\` returns 2025.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setFullYear',
    initialCode: `// Create a Date, call setFullYear(2025), then getFullYear()\n`,
    solution: `const d = new Date(2024, 0, 15); d.setFullYear(2025); d.getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 2025 after setFullYear(2025)', assertion: "const d = new Date(2024, 0, 15); d.setFullYear(2025); expect(d.getFullYear()).toBe(2025)" },
      { description: 'setFullYear() returns a number', assertion: "const d2 = new Date(2024, 0, 15); expect(typeof d2.setFullYear(2025)).toBe('number')" },
      { description: 'date is mutated', assertion: "const d3 = new Date(2024, 0, 15); d3.setFullYear(2025); expect(d3.getFullYear() !== 2024).toBeTruthy()" },
      { description: 'month is unchanged', assertion: "const d4 = new Date(2024, 0, 15); d4.setFullYear(2025); expect(d4.getMonth()).toBe(0)" },
      { description: 'day is unchanged', assertion: "const d5 = new Date(2024, 0, 15); d5.setFullYear(2025); expect(d5.getDate()).toBe(15)" },
    ],
    hints: ['setFullYear() mutates the Date object in place — it does not create a new Date'],
    tags: ['Date', 'setFullYear', 'instance-method', 'mutation'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setFullYear(2030)
d.getFullYear()  // → 2030`,
      explanation: {
        en: 'Use setFullYear() to mutate the year of a Date object in place; the month and day remain unchanged.',
        es: 'Usa setFullYear() para mutar el año de un objeto Date en su lugar; el mes y el día permanecen sin cambios.',
      },
    },
  },
  {
    slug: 'date-setfullyear-2',
    title: 'setFullYear() — returns a number',
    description: `## Date.prototype.setFullYear()\n\n\`setFullYear()\` returns the new timestamp (ms since epoch) as a number.\n\n**Challenge:** Verify that \`typeof d.setFullYear(2025)\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setFullYear',
    initialCode: `// Use typeof d.setFullYear(2025)\n`,
    solution: `const d = new Date(2024, 0, 15); typeof d.setFullYear(2025)`,
    tests: [
      { description: 'setFullYear() returns a number', assertion: "const d = new Date(2024, 0, 15); expect(typeof d.setFullYear(2025)).toBe('number')" },
      { description: 'return value is finite', assertion: "const d2 = new Date(2024, 0, 15); expect(Number.isFinite(d2.setFullYear(2025))).toBeTruthy()" },
      { description: 'return value is integer', assertion: "const d3 = new Date(2024, 0, 15); expect(Number.isInteger(d3.setFullYear(2025))).toBeTruthy()" },
      { description: 'return value > 0', assertion: "const d4 = new Date(2024, 0, 15); expect(d4.setFullYear(2025) > 0).toBeTruthy()" },
      { description: 'getFullYear() is correct after set', assertion: "const d5 = new Date(2024, 0, 15); d5.setFullYear(2025); expect(d5.getFullYear()).toBe(2025)" },
    ],
    hints: ['setFullYear() returns the new numeric timestamp — useful for chaining arithmetic'],
    tags: ['Date', 'setFullYear', 'instance-method', 'return-value'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setFullYear(2030)
d.getFullYear()  // → 2030`,
      explanation: {
        en: 'Use setFullYear() to mutate the year of a Date object in place; the month and day remain unchanged.',
        es: 'Usa setFullYear() para mutar el año de un objeto Date en su lugar; el mes y el día permanecen sin cambios.',
      },
    },
  },
  {
    slug: 'date-setfullyear-3',
    title: 'setFullYear() — date is mutated',
    description: `## Date.prototype.setFullYear()\n\nThe original Date object is changed after calling \`setFullYear()\`.\n\n**Challenge:** Verify that the year changes from 2024 to 1990 after calling \`setFullYear(1990)\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setFullYear',
    initialCode: `// Create a Date(2024,...), setFullYear(1990), verify mutation\n`,
    solution: `const d = new Date(2024, 0, 15); d.setFullYear(1990); d.getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 1990 after setFullYear(1990)', assertion: "const d = new Date(2024, 0, 15); d.setFullYear(1990); expect(d.getFullYear()).toBe(1990)" },
      { description: 'date is mutated (not 2024)', assertion: "const d2 = new Date(2024, 0, 15); d2.setFullYear(1990); expect(d2.getFullYear() !== 2024).toBeTruthy()" },
      { description: 'setFullYear() returns a number', assertion: "const d3 = new Date(2024, 0, 15); expect(typeof d3.setFullYear(1990)).toBe('number')" },
      { description: 'month is unchanged', assertion: "const d4 = new Date(2024, 0, 15); d4.setFullYear(1990); expect(d4.getMonth()).toBe(0)" },
      { description: 'day is unchanged', assertion: "const d5 = new Date(2024, 0, 15); d5.setFullYear(1990); expect(d5.getDate()).toBe(15)" },
    ],
    hints: ['setFullYear() modifies the Date in place — check with getFullYear() after calling it'],
    tags: ['Date', 'setFullYear', 'instance-method', 'mutation'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setFullYear(2030)
d.getFullYear()  // → 2030`,
      explanation: {
        en: 'Use setFullYear() to mutate the year of a Date object in place; the month and day remain unchanged.',
        es: 'Usa setFullYear() para mutar el año de un objeto Date en su lugar; el mes y el día permanecen sin cambios.',
      },
    },
  },
  {
    slug: 'date-setfullyear-4',
    title: 'setFullYear() — set to 1990',
    description: `## Date.prototype.setFullYear()\n\nYou can set any valid year, including past years.\n\n**Challenge:** Verify that after \`setFullYear(1990)\`, \`getFullYear()\` returns 1990.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setFullYear',
    initialCode: `// Use setFullYear(1990)\n`,
    solution: `const d = new Date(2024, 0, 15); d.setFullYear(1990); d.getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 1990', assertion: "const d = new Date(2024, 0, 15); d.setFullYear(1990); expect(d.getFullYear()).toBe(1990)" },
      { description: 'result is a number', assertion: "const d2 = new Date(2024, 0, 15); d2.setFullYear(1990); expect(typeof d2.getFullYear()).toBe('number')" },
      { description: 'result === 1990', assertion: "const d3 = new Date(2024, 0, 15); d3.setFullYear(1990); expect(d3.getFullYear() === 1990).toBeTruthy()" },
      { description: 'result < 2024', assertion: "const d4 = new Date(2024, 0, 15); d4.setFullYear(1990); expect(d4.getFullYear() < 2024).toBeTruthy()" },
      { description: 'setFullYear() returns a number', assertion: "const d5 = new Date(2024, 0, 15); expect(typeof d5.setFullYear(1990)).toBe('number')" },
    ],
    hints: ['setFullYear() accepts any integer year, including historical dates'],
    tags: ['Date', 'setFullYear', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setFullYear(2030)
d.getFullYear()  // → 2030`,
      explanation: {
        en: 'Use setFullYear() to mutate the year of a Date object in place; the month and day remain unchanged.',
        es: 'Usa setFullYear() para mutar el año de un objeto Date en su lugar; el mes y el día permanecen sin cambios.',
      },
    },
  },
  {
    slug: 'date-setfullyear-5',
    title: 'setFullYear() — chaining with getFullYear()',
    description: `## Date.prototype.setFullYear()\n\nAfter setting the year, you can immediately read it back with \`getFullYear()\`.\n\n**Challenge:** Verify that setting year to 2030 and reading with getFullYear() gives 2030.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'setFullYear',
    initialCode: `// Create a Date, setFullYear(2030), then getFullYear()\n`,
    solution: `const d = new Date(2024, 0, 15); d.setFullYear(2030); d.getFullYear()`,
    tests: [
      { description: 'getFullYear() returns 2030 after set', assertion: "const d = new Date(2024, 0, 15); d.setFullYear(2030); expect(d.getFullYear()).toBe(2030)" },
      { description: 'return value of setFullYear is a number', assertion: "const d2 = new Date(2024, 0, 15); expect(typeof d2.setFullYear(2030)).toBe('number')" },
      { description: 'month unchanged', assertion: "const d3 = new Date(2024, 5, 15); d3.setFullYear(2030); expect(d3.getMonth()).toBe(5)" },
      { description: 'day unchanged', assertion: "const d4 = new Date(2024, 0, 20); d4.setFullYear(2030); expect(d4.getDate()).toBe(20)" },
      { description: 'year changed from 2024 to 2030', assertion: "const d5 = new Date(2024, 0, 15); d5.setFullYear(2030); expect(d5.getFullYear() > 2024).toBeTruthy()" },
    ],
    hints: ['After setFullYear(), you can verify the mutation with getFullYear()'],
    tags: ['Date', 'setFullYear', 'instance-method', 'chaining'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setFullYear(2030)
d.getFullYear()  // → 2030`,
      explanation: {
        en: 'Use setFullYear() to mutate the year of a Date object in place; the month and day remain unchanged.',
        es: 'Usa setFullYear() para mutar el año de un objeto Date en su lugar; el mes y el día permanecen sin cambios.',
      },
    },
  },
]
