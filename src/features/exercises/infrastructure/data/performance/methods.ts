import type { Exercise } from '@/shared/types/exercises'

export const performanceMethodsExercises: Exercise[] = [
  {
    slug: 'performance-methods-1',
    title: 'performance — now() returns a number',
    description: `## performance.now()\n\n\`performance.now()\` returns a high-resolution timestamp in milliseconds as a \`number\`.\n\n**Challenge:** Verify that \`typeof performance.now()\` is \`'number'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'performance',
    initialCode: `// Check the return type of performance.now()\ntypeof performance.now()`,
    solution: `typeof performance.now()`,
    tests: [
      { description: 'performance.now() returns a number', assertion: "expect(result).toBe('number')" },
      { description: 'performance.now() is greater than 0', assertion: "expect(performance.now()).toBeGreaterThan(0)" },
      { description: 'mark returns a PerformanceMark', assertion: "performance.clearMarks('test-mark-3'); expect(performance.mark('test-mark-3') instanceof PerformanceMark).toBeTruthy()" },
      { description: 'getEntriesByName after mark returns one entry', assertion: "performance.clearMarks('m4'); performance.mark('m4'); expect(performance.getEntriesByName('m4').length).toBe(1)" },
      { description: 'clearMarks removes entries', assertion: "performance.mark('cm5'); performance.clearMarks('cm5'); expect(performance.getEntriesByName('cm5').length).toBe(0)" },
    ],
    hints: ['performance.now() returns DOMHighResTimeStamp — a floating-point number'],
    tags: ['performance', 'now', 'instance-method'],
  },
  {
    slug: 'performance-methods-2',
    title: 'performance — now() is greater than 0',
    description: `## performance.now() — positive value\n\n\`performance.now()\` returns the time elapsed since the performance origin (page load / process start), which is always greater than zero.\n\n**Challenge:** Verify that \`performance.now()\` is greater than \`0\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'performance',
    initialCode: `// Confirm the value is positive\nperformance.now() > 0`,
    solution: `performance.now() > 0`,
    tests: [
      { description: 'performance.now() is greater than 0', assertion: "expect(performance.now()).toBeGreaterThan(0)" },
      { description: 'performance.now() returns a number', assertion: "expect(result).toBe('number')" },
      { description: 'mark returns a PerformanceMark', assertion: "performance.clearMarks('test-mark-3'); expect(performance.mark('test-mark-3') instanceof PerformanceMark).toBeTruthy()" },
      { description: 'getEntriesByName after mark returns one entry', assertion: "performance.clearMarks('m4'); performance.mark('m4'); expect(performance.getEntriesByName('m4').length).toBe(1)" },
      { description: 'clearMarks removes entries', assertion: "performance.mark('cm5'); performance.clearMarks('cm5'); expect(performance.getEntriesByName('cm5').length).toBe(0)" },
    ],
    hints: ['The performance origin is the time the page or process started — always in the past'],
    tags: ['performance', 'now', 'instance-method'],
  },
  {
    slug: 'performance-methods-3',
    title: 'performance — mark() returns a PerformanceMark',
    description: `## performance.mark()\n\n\`performance.mark(name)\` creates a named timestamp entry and returns a \`PerformanceMark\` object.\n\n**Challenge:** Verify that \`performance.mark('test-mark-3')\` is an \`instanceof PerformanceMark\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'performance',
    initialCode: `// Create a mark and check its type\nperformance.clearMarks('test-mark-3')\nperformance.mark('test-mark-3') instanceof PerformanceMark`,
    solution: `performance.clearMarks('test-mark-3')
performance.mark('test-mark-3') instanceof PerformanceMark`,
    tests: [
      { description: 'mark returns a PerformanceMark', assertion: "performance.clearMarks('test-mark-3'); expect(performance.mark('test-mark-3') instanceof PerformanceMark).toBeTruthy()" },
      { description: 'performance.now() returns a number', assertion: "expect(result).toBe('number')" },
      { description: 'performance.now() is greater than 0', assertion: "expect(performance.now()).toBeGreaterThan(0)" },
      { description: 'getEntriesByName after mark returns one entry', assertion: "performance.clearMarks('m4'); performance.mark('m4'); expect(performance.getEntriesByName('m4').length).toBe(1)" },
      { description: 'clearMarks removes entries', assertion: "performance.mark('cm5'); performance.clearMarks('cm5'); expect(performance.getEntriesByName('cm5').length).toBe(0)" },
    ],
    hints: ['performance.mark() was updated to return the created PerformanceMark in modern browsers'],
    tags: ['performance', 'mark', 'PerformanceMark', 'instance-method'],
  },
  {
    slug: 'performance-methods-4',
    title: 'performance — getEntriesByName after mark',
    description: `## performance.getEntriesByName()\n\nAfter calling \`performance.mark(name)\`, the entry is retrievable via \`performance.getEntriesByName(name)\`.\n\n**Challenge:** Verify that \`getEntriesByName\` returns exactly one entry after a single mark.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'performance',
    initialCode: `// Clear first to avoid stale state, then mark and retrieve
performance.clearMarks('m4')
performance.mark('m4')
performance.getEntriesByName('m4').length`,
    solution: `performance.clearMarks('m4')
performance.mark('m4')
performance.getEntriesByName('m4').length`,
    tests: [
      { description: 'getEntriesByName after mark returns one entry', assertion: "performance.clearMarks('m4'); performance.mark('m4'); expect(performance.getEntriesByName('m4').length).toBe(1)" },
      { description: 'performance.now() returns a number', assertion: "expect(result).toBe('number')" },
      { description: 'performance.now() is greater than 0', assertion: "expect(performance.now()).toBeGreaterThan(0)" },
      { description: 'mark returns a PerformanceMark', assertion: "performance.clearMarks('test-mark-3'); expect(performance.mark('test-mark-3') instanceof PerformanceMark).toBeTruthy()" },
      { description: 'clearMarks removes entries', assertion: "performance.mark('cm5'); performance.clearMarks('cm5'); expect(performance.getEntriesByName('cm5').length).toBe(0)" },
    ],
    hints: ['Always clearMarks before marking in tests to prevent entries accumulating across runs'],
    tags: ['performance', 'getEntriesByName', 'mark', 'instance-method'],
  },
  {
    slug: 'performance-methods-5',
    title: 'performance — clearMarks removes entries',
    description: `## performance.clearMarks()\n\n\`performance.clearMarks(name)\` removes all entries with the given name. After clearing, \`getEntriesByName\` returns an empty array.\n\n**Challenge:** Verify that \`clearMarks\` removes the named entry.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'performance',
    initialCode: `// Mark, clear, then verify the entry is gone
performance.mark('cm5')
performance.clearMarks('cm5')
performance.getEntriesByName('cm5').length`,
    solution: `performance.mark('cm5')
performance.clearMarks('cm5')
performance.getEntriesByName('cm5').length`,
    tests: [
      { description: 'clearMarks removes entries', assertion: "performance.mark('cm5'); performance.clearMarks('cm5'); expect(performance.getEntriesByName('cm5').length).toBe(0)" },
      { description: 'performance.now() returns a number', assertion: "expect(result).toBe('number')" },
      { description: 'performance.now() is greater than 0', assertion: "expect(performance.now()).toBeGreaterThan(0)" },
      { description: 'mark returns a PerformanceMark', assertion: "performance.clearMarks('test-mark-3'); expect(performance.mark('test-mark-3') instanceof PerformanceMark).toBeTruthy()" },
      { description: 'getEntriesByName after mark returns one entry', assertion: "performance.clearMarks('m4'); performance.mark('m4'); expect(performance.getEntriesByName('m4').length).toBe(1)" },
    ],
    hints: ['clearMarks() with no argument clears all marks; with a name, only that name is cleared'],
    tags: ['performance', 'clearMarks', 'instance-method'],
  },
]
