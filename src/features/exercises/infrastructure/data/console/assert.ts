import type { Exercise } from '@/shared/types/exercises'

export const consoleAssertExercises: Exercise[] = [
  {
    slug: 'console-assert-1',
    title: 'console — assert is a function',
    description: `## console.assert()\n\n\`console.assert(assertion, message)\` logs a message to console if the assertion is false. If the assertion is true, nothing happens.\n\n**Challenge:** Verify that \`console.assert\` is a function.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Check the type of console.assert\ntypeof console.assert`,
    solution: `typeof console.assert`,
    tests: [
      { description: 'console.assert is a function', assertion: "expect(result).toBe('function')" },
      { description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" },
      { description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" },
      { description: 'console.count is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.table is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.assert is a debugging tool that does not throw errors'],
    tags: ['console', 'assert', 'instance-method'],
    usageExample: {
      code: `console.assert(1 === 1, 'Math works')   // no output
console.assert(1 === 2, 'This fails')   // → Assertion failed: This fails`,
      explanation: {
        en: "console.assert() logs an error message only when the condition is falsy.",
        es: "console.assert() registra un mensaje de error solo cuando la condición es falsy.",
      },
    },
  },
  {
    slug: 'console-assert-2',
    title: 'console — assert(true) returns undefined',
    description: `## console.assert() — true assertion\n\nWhen \`console.assert(assertion)\` is called with a true assertion, nothing is logged and it returns \`undefined\`.\n\n**Challenge:** Verify that \`console.assert(true, 'msg')\` returns \`undefined\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Call assert with a true condition\nconsole.assert(true, 'msg')`,
    solution: `console.assert(true, 'msg')`,
    tests: [
      { description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" },
      { description: 'console.assert is a function', assertion: "expect(result).toBe('function')" },
      { description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" },
      { description: 'console.count is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.table is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.assert does not throw — it only conditionally logs'],
    tags: ['console', 'assert', 'instance-method'],
    usageExample: {
      code: `const x = 5
console.assert(x > 0, 'x must be positive')  // no output`,
      explanation: {
        en: "Use console.assert() to add lightweight runtime checks during development.",
        es: "Usa console.assert() para agregar verificaciones ligeras en tiempo de ejecución durante el desarrollo.",
      },
    },
  },
  {
    slug: 'console-assert-3',
    title: 'console — assert(false) returns undefined (no throw)',
    description: `## console.assert() — false assertion\n\nWhen \`console.assert(assertion)\` is called with a false assertion, a message is logged (to console error), but it does NOT throw an exception. It returns \`undefined\`.\n\n**Challenge:** Verify that \`console.assert(false, 'msg')\` returns \`undefined\` and does not throw.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'console',
    initialCode: `// Call assert with a false condition\nconsole.assert(false, 'msg')`,
    solution: `console.assert(false, 'msg')`,
    tests: [
      { description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" },
      { description: 'console.assert is a function', assertion: "expect(result).toBe('function')" },
      { description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" },
      { description: 'console.count is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.table is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.assert does not throw exceptions — it only logs messages'],
    tags: ['console', 'assert', 'instance-method'],
    usageExample: {
      code: `console.assert(false, 'Always fails')  // → Assertion failed: Always fails`,
      explanation: {
        en: "Passing false as the condition always triggers the assertion message.",
        es: "Pasar false como condición siempre dispara el mensaje de aserción.",
      },
    },
  },
  {
    slug: 'console-assert-4',
    title: 'console — count is a function',
    description: `## console.count()\n\n\`console.count(label)\` logs how many times it has been called with that label.\n\n**Challenge:** Verify that \`console.count\` is a function.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'console',
    initialCode: `// Check the type of console.count\ntypeof console.count`,
    solution: `typeof console.count`,
    tests: [
      { description: 'console.count is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.assert is a function', assertion: "expect(result).toBe('function')" },
      { description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" },
      { description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" },
      { description: 'console.table is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.count tracks invocation count by label'],
    tags: ['console', 'count', 'instance-method'],
    usageExample: {
      code: `const arr = [1, 2, 3]
console.assert(arr.length > 0, 'Array is empty')`,
      explanation: {
        en: "console.assert() is handy for verifying array state without throwing.",
        es: "console.assert() es útil para verificar el estado de un arreglo sin lanzar excepciones.",
      },
    },
  },
  {
    slug: 'console-assert-5',
    title: 'console — table is a function',
    description: `## console.table()\n\n\`console.table(data)\` formats and logs data in a table format.\n\n**Challenge:** Verify that \`console.table\` is a function.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'console',
    initialCode: `// Check the type of console.table\ntypeof console.table`,
    solution: `typeof console.table`,
    tests: [
      { description: 'console.table is a function', assertion: "expect(result).toBe('function')" },
      { description: 'console.assert is a function', assertion: "expect(result).toBe('function')" },
      { description: 'assert(true) returns undefined', assertion: "expect(console.assert(true,'msg')).toBeUndefined()" },
      { description: 'assert(false) returns undefined (no throw)', assertion: "expect(console.assert(false,'msg')).toBeUndefined()" },
      { description: 'console.count is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['console.table is useful for visualizing structured data like arrays and objects'],
    tags: ['console', 'table', 'instance-method'],
    usageExample: {
      code: `function divide(a, b) {
  console.assert(b !== 0, 'Divisor cannot be zero')
  return a / b
}`,
      explanation: {
        en: "Embed console.assert() in functions to catch invalid arguments early.",
        es: "Incorpora console.assert() en funciones para detectar argumentos inválidos temprano.",
      },
    },
  },
]
