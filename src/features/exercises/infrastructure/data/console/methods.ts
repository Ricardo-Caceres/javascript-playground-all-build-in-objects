import type { Exercise } from '@/shared/types/exercises'

export const consoleMethodsExercises: Exercise[] = [
  {
    slug: 'console-methods-1',
    title: 'console — log is a function',
    description: `## console.log()\n\n\`console.log\` is a built-in method used to output messages to the console.\n\n**Challenge:** Verify that \`console.log\` is a function.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Check the type of console.log\ntypeof console.log`,
    solution: `typeof console.log`,
    tests: [
      { description: 'console.log is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.error is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.warn is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.info is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log returns undefined', assertion: "expect(result).toBeUndefined()" },
    ],
    hints: ['console.log is a method on the global console object'],
    tags: ['console', 'log', 'instance-method'],
    usageExample: {
      code: `console.log('Hello')    // → Hello
console.warn('Warn!')   // → ⚠ Warn!
console.error('Err!')  // → ✖ Err!`,
      explanation: {
        en: "console provides multiple logging methods: log, warn, error, info, and debug.",
        es: "console proporciona múltiples métodos de registro: log, warn, error, info y debug.",
      },
    },
  },
  {
    slug: 'console-methods-2',
    title: 'console — error is a function',
    description: `## console.error()\n\n\`console.error\` is used to output error messages to the console. It works similarly to \`console.log\`.\n\n**Challenge:** Verify that \`console.error\` is a function.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Check the type of console.error\ntypeof console.error`,
    solution: `typeof console.error`,
    tests: [
      { description: 'console.error is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.warn is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.info is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log returns undefined', assertion: "expect(result).toBeUndefined()" },
    ],
    hints: ['console.error outputs to stderr in Node.js and the error level in browsers'],
    tags: ['console', 'error', 'instance-method'],
    usageExample: {
      code: `console.table([{ name: 'Ana', age: 30 }])
// displays a formatted table`,
      explanation: {
        en: "console.table() renders arrays of objects as a formatted table for easy inspection.",
        es: "console.table() muestra arreglos de objetos como una tabla formateada para fácil inspección.",
      },
    },
  },
  {
    slug: 'console-methods-3',
    title: 'console — warn is a function',
    description: `## console.warn()\n\n\`console.warn\` is used to output warning messages to the console.\n\n**Challenge:** Verify that \`console.warn\` is a function.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Check the type of console.warn\ntypeof console.warn`,
    solution: `typeof console.warn`,
    tests: [
      { description: 'console.warn is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.error is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.info is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log returns undefined', assertion: "expect(result).toBeUndefined()" },
    ],
    hints: ['console.warn outputs warning-level messages'],
    tags: ['console', 'warn', 'instance-method'],
    usageExample: {
      code: `console.group('Details')
console.log('item 1')
console.groupEnd()`,
      explanation: {
        en: "console.group() and groupEnd() let you nest related log messages visually.",
        es: "console.group() y groupEnd() te permiten anidar visualmente mensajes de registro relacionados.",
      },
    },
  },
  {
    slug: 'console-methods-4',
    title: 'console — info is a function',
    description: `## console.info()\n\n\`console.info\` is used to output informational messages. It's an alias for \`console.log\` in most environments.\n\n**Challenge:** Verify that \`console.info\` is a function.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'console',
    initialCode: `// Check the type of console.info\ntypeof console.info`,
    solution: `typeof console.info`,
    tests: [
      { description: 'console.info is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.warn is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.error is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.log returns undefined', assertion: "expect(result).toBeUndefined()" },
    ],
    hints: ['console.info is often an alias for console.log'],
    tags: ['console', 'info', 'instance-method'],
    usageExample: {
      code: `console.time('loop')
for (let i = 0; i < 1e6; i++) {}
console.timeEnd('loop')  // → loop: 5.2ms`,
      explanation: {
        en: "console.time() and timeEnd() measure how long a block of code takes to run.",
        es: "console.time() y timeEnd() miden cuánto tarda en ejecutarse un bloque de código.",
      },
    },
  },
  {
    slug: 'console-methods-5',
    title: 'console — log returns undefined',
    description: `## console.log() return value\n\n\`console.log\` and other console methods do not return a meaningful value — they return \`undefined\`.\n\n**Challenge:** Verify that \`console.log('test')\` returns \`undefined\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'console',
    initialCode: `// Check the return value of console.log\nconsole.log('test')`,
    solution: `console.log('test')`,
    tests: [
      { description: 'console.log returns undefined', assertion: "expect(result).toBeUndefined()" },
      { description: 'console.error returns undefined', assertion: "expect(console.error('test')).toBeUndefined()" },
      { description: 'console.warn returns undefined', assertion: "expect(console.warn('test')).toBeUndefined()" },
      { description: 'console.info returns undefined', assertion: "expect(console.info('test')).toBeUndefined()" },
      { description: 'console.log is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.log is designed for side effects (printing), not for returning values'],
    tags: ['console', 'log', 'return-value', 'instance-method'],
    usageExample: {
      code: `console.count('click')  // → click: 1
console.count('click')  // → click: 2`,
      explanation: {
        en: "console.count() tracks how many times a labeled event has been logged.",
        es: "console.count() rastrea cuántas veces se ha registrado un evento etiquetado.",
      },
    },
  },
]
