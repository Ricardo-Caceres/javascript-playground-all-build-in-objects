import type { Exercise } from '@/shared/types/exercises'

export const dateSetDateExercises: Exercise[] = [
  {
    slug: 'date-setdate-1',
    title: 'setDate() — set to day 1',
    description: `## Date.prototype.setDate()\n\nSets the day-of-month and returns the new timestamp.\n\n**Challenge:** Verify that after \`setDate(1)\`, \`getDate()\` returns 1.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setDate',
    initialCode: `// Create a Date, call setDate(1), then getDate()\n`,
    solution: `const d = new Date(2024, 0, 15); d.setDate(1); d.getDate()`,
    tests: [
      { description: 'getDate() returns 1 after setDate(1)', assertion: "const d = new Date(2024, 0, 15); d.setDate(1); expect(d.getDate()).toBe(1)" },
      { description: 'setDate() returns a number', assertion: "const d2 = new Date(2024, 0, 15); expect(typeof d2.setDate(1)).toBe('number')" },
      { description: 'day is mutated', assertion: "const d3 = new Date(2024, 0, 15); d3.setDate(1); expect(d3.getDate() !== 15).toBeTruthy()" },
      { description: 'month unchanged', assertion: "const d4 = new Date(2024, 0, 15); d4.setDate(1); expect(d4.getMonth()).toBe(0)" },
      { description: 'year unchanged', assertion: "const d5 = new Date(2024, 0, 15); d5.setDate(1); expect(d5.getFullYear()).toBe(2024)" },
    ],
    hints: ['setDate() sets the day-of-month (1-indexed); month and year are unchanged'],
    tags: ['Date', 'setDate', 'instance-method', 'mutation'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setDate(1)
d.getDate()  // → 1`,
      explanation: {
        en: 'Use setDate() to mutate the day-of-month of a Date object in place and get back the updated timestamp.',
        es: 'Usa setDate() para mutar el día del mes de un objeto Date en su lugar y obtener el timestamp actualizado.',
      },
    },
  },
  {
    slug: 'date-setdate-2',
    title: 'setDate() — set to day 28',
    description: `## Date.prototype.setDate()\n\nDay 28 is valid for all months.\n\n**Challenge:** Verify that after \`setDate(28)\`, \`getDate()\` returns 28.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setDate',
    initialCode: `// Use setDate(28)\n`,
    solution: `const d = new Date(2024, 0, 15); d.setDate(28); d.getDate()`,
    tests: [
      { description: 'getDate() returns 28 after setDate(28)', assertion: "const d = new Date(2024, 0, 15); d.setDate(28); expect(d.getDate()).toBe(28)" },
      { description: 'setDate() returns a number', assertion: "const d2 = new Date(2024, 0, 15); expect(typeof d2.setDate(28)).toBe('number')" },
      { description: 'day === 28', assertion: "const d3 = new Date(2024, 0, 15); d3.setDate(28); expect(d3.getDate() === 28).toBeTruthy()" },
      { description: 'month unchanged', assertion: "const d4 = new Date(2024, 0, 15); d4.setDate(28); expect(d4.getMonth()).toBe(0)" },
      { description: 'year unchanged', assertion: "const d5 = new Date(2024, 0, 15); d5.setDate(28); expect(d5.getFullYear()).toBe(2024)" },
    ],
    hints: ['Day 28 is safe to use for any month since even February has at least 28 days'],
    tags: ['Date', 'setDate', 'instance-method'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setDate(1)
d.getDate()  // → 1`,
      explanation: {
        en: 'Use setDate() to mutate the day-of-month of a Date object in place and get back the updated timestamp.',
        es: 'Usa setDate() para mutar el día del mes de un objeto Date en su lugar y obtener el timestamp actualizado.',
      },
    },
  },
  {
    slug: 'date-setdate-3',
    title: 'setDate() — returns a number',
    description: `## Date.prototype.setDate()\n\n\`setDate()\` returns the new timestamp.\n\n**Challenge:** Verify that \`typeof d.setDate(1)\` returns \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setDate',
    initialCode: `// Use typeof d.setDate(1)\n`,
    solution: `const d = new Date(2024, 0, 15); typeof d.setDate(1)`,
    tests: [
      { description: 'setDate() returns a number', assertion: "const d = new Date(2024, 0, 15); expect(typeof d.setDate(1)).toBe('number')" },
      { description: 'return value is finite', assertion: "const d2 = new Date(2024, 0, 15); expect(Number.isFinite(d2.setDate(1))).toBeTruthy()" },
      { description: 'return value is integer', assertion: "const d3 = new Date(2024, 0, 15); expect(Number.isInteger(d3.setDate(1))).toBeTruthy()" },
      { description: 'return value > 0', assertion: "const d4 = new Date(2024, 0, 15); expect(d4.setDate(1) > 0).toBeTruthy()" },
      { description: 'getDate() is 1 after setDate(1)', assertion: "const d5 = new Date(2024, 0, 15); d5.setDate(1); expect(d5.getDate()).toBe(1)" },
    ],
    hints: ['setDate() returns the new timestamp in ms, just like setFullYear() and setMonth()'],
    tags: ['Date', 'setDate', 'instance-method', 'return-value'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setDate(1)
d.getDate()  // → 1`,
      explanation: {
        en: 'Use setDate() to mutate the day-of-month of a Date object in place and get back the updated timestamp.',
        es: 'Usa setDate() para mutar el día del mes de un objeto Date en su lugar y obtener el timestamp actualizado.',
      },
    },
  },
  {
    slug: 'date-setdate-4',
    title: 'setDate() — mutates the date',
    description: `## Date.prototype.setDate()\n\nThe original Date object is changed after calling \`setDate()\`.\n\n**Challenge:** Verify the day changes from 15 to 20 after \`setDate(20)\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Date',
    method: 'setDate',
    initialCode: `// Verify mutation by checking getDate() after setDate(20)\n`,
    solution: `const d = new Date(2024, 0, 15); d.setDate(20); d.getDate()`,
    tests: [
      { description: 'getDate() returns 20 after setDate(20)', assertion: "const d = new Date(2024, 0, 15); d.setDate(20); expect(d.getDate()).toBe(20)" },
      { description: 'day changed from 15', assertion: "const d2 = new Date(2024, 0, 15); d2.setDate(20); expect(d2.getDate() !== 15).toBeTruthy()" },
      { description: 'setDate() returns a number', assertion: "const d3 = new Date(2024, 0, 15); expect(typeof d3.setDate(20)).toBe('number')" },
      { description: 'month unchanged', assertion: "const d4 = new Date(2024, 0, 15); d4.setDate(20); expect(d4.getMonth()).toBe(0)" },
      { description: 'year unchanged', assertion: "const d5 = new Date(2024, 0, 15); d5.setDate(20); expect(d5.getFullYear()).toBe(2024)" },
    ],
    hints: ['setDate() mutates in place — useful for rolling forward/back a date'],
    tags: ['Date', 'setDate', 'instance-method', 'mutation'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setDate(1)
d.getDate()  // → 1`,
      explanation: {
        en: 'Use setDate() to mutate the day-of-month of a Date object in place and get back the updated timestamp.',
        es: 'Usa setDate() para mutar el día del mes de un objeto Date en su lugar y obtener el timestamp actualizado.',
      },
    },
  },
  {
    slug: 'date-setdate-5',
    title: 'setDate() — overflow rolls to next month',
    description: `## Date.prototype.setDate()\n\nPassing a day value greater than the month's length causes the date to overflow into the next month.\n\n**Challenge:** Verify that setting day 32 on January rolls over to February.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Date',
    method: 'setDate',
    initialCode: `// Use setDate(32) on a January Date — should roll to February\n`,
    solution: `const d = new Date(2024, 0, 1); d.setDate(32); d.getMonth()`,
    tests: [
      { description: 'setDate(32) on Jan rolls to February (month 1)', assertion: "const d = new Date(2024, 0, 1); d.setDate(32); expect(d.getMonth()).toBe(1)" },
      { description: 'setDate() returns a number', assertion: "const d2 = new Date(2024, 0, 1); expect(typeof d2.setDate(32)).toBe('number')" },
      { description: 'year is still 2024', assertion: "const d3 = new Date(2024, 0, 1); d3.setDate(32); expect(d3.getFullYear()).toBe(2024)" },
      { description: 'day overflow carries over', assertion: "const d4 = new Date(2024, 0, 1); d4.setDate(32); expect(d4.getDate() > 0).toBeTruthy()" },
      { description: 'day is 1 (Jan has 31 days, 32-31=1)', assertion: "const d5 = new Date(2024, 0, 1); d5.setDate(32); expect(d5.getDate()).toBe(1)" },
    ],
    hints: ['January has 31 days; day 32 = day 1 of February. This overflow behaviour is by spec.'],
    tags: ['Date', 'setDate', 'instance-method', 'overflow'],
    usageExample: {
      code: `const d = new Date(2024, 0, 15)
d.setDate(1)
d.getDate()  // → 1`,
      explanation: {
        en: 'Use setDate() to mutate the day-of-month of a Date object in place and get back the updated timestamp.',
        es: 'Usa setDate() para mutar el día del mes de un objeto Date en su lugar y obtener el timestamp actualizado.',
      },
    },
  },
]
