import type { Exercise } from '@/shared/types/exercises'

export const booleanConstructorExercises: Exercise[] = [
  {
    slug: 'boolean-constructor-1',
    title: 'Boolean() — truthy number',
    description: `## Boolean(value)\n\n\`Boolean(value)\` converts a value to a boolean. Non-zero numbers are truthy.\n\n**Challenge:** Verify that \`Boolean(1)\` is \`true\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Boolean',
    initialCode: `const b = Boolean(1)\n`,
    solution: `Boolean(1)`,
    tests: [
      { description: 'result is true', assertion: 'expect(result).toBe(true)' },
      { description: 'result is truthy', assertion: 'expect(result).toBeTruthy()' },
      { description: 'Boolean(42) is true', assertion: 'expect(Boolean(42)).toBe(true)' },
      { description: 'Boolean(-1) is true', assertion: 'expect(Boolean(-1)).toBe(true)' },
      { description: 'Boolean(Infinity) is true', assertion: 'expect(Boolean(Infinity)).toBe(true)' },
    ],
    hints: ['All non-zero numbers coerce to true.'],
    tags: ['boolean', 'constructor', 'truthy'],
    usageExample: {
      code: `Boolean(1)   // → true
Boolean(0)   // → false`,
      explanation: {
        en: "Boolean() converts any value to its boolean equivalent using JS truthy/falsy rules.",
        es: "Boolean() convierte cualquier valor a su equivalente booleano usando las reglas truthy/falsy de JS.",
      },
    },
  },
  {
    slug: 'boolean-constructor-2',
    title: 'Boolean() — zero is falsy',
    description: `## Boolean(0)\n\n\`0\` is a falsy value — \`Boolean(0)\` returns \`false\`.\n\n**Challenge:** Verify that \`Boolean(0)\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Boolean',
    initialCode: `const b = Boolean(0)\n`,
    solution: `Boolean(0)`,
    tests: [
      { description: 'result is false', assertion: 'expect(result).toBe(false)' },
      { description: 'result is falsy', assertion: 'expect(result).toBeFalsy()' },
      { description: 'Boolean(-0) is false', assertion: 'expect(Boolean(-0)).toBe(false)' },
      { description: 'Boolean(NaN) is false', assertion: 'expect(Boolean(NaN)).toBe(false)' },
      { description: 'result is not true', assertion: 'expect(result === true).toBe(false)' },
    ],
    hints: ['0, -0, and NaN are all falsy.'],
    tags: ['boolean', 'constructor', 'falsy'],
    usageExample: {
      code: `Boolean(0)   // → false
Boolean(-0)  // → false
Boolean(NaN) // → false`,
      explanation: {
        en: "Zero, -0, and NaN are all falsy values that convert to false.",
        es: "Cero, -0 y NaN son valores falsy que se convierten a false.",
      },
    },
  },
  {
    slug: 'boolean-constructor-3',
    title: 'Boolean() — empty string is falsy',
    description: `## Boolean('')\n\nAn empty string is falsy — \`Boolean('')\` returns \`false\`.\n\n**Challenge:** Verify that \`Boolean('')\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Boolean',
    initialCode: `const b = Boolean('')\n`,
    solution: `Boolean('')`,
    tests: [
      { description: "result is false", assertion: "expect(result).toBe(false)" },
      { description: "result is falsy", assertion: "expect(result).toBeFalsy()" },
      { description: 'Boolean(undefined) is false', assertion: 'expect(Boolean(undefined)).toBe(false)' },
      { description: 'result is false', assertion: 'expect(result).toBe(false)' },
      { description: 'Boolean(false) is false', assertion: 'expect(Boolean(false)).toBe(false)' },
    ],
    hints: ['Empty string is one of the six falsy values in JavaScript.'],
    tags: ['boolean', 'constructor', 'falsy', 'string'],
    usageExample: {
      code: `Boolean('')    // → false
Boolean('hi')  // → true`,
      explanation: {
        en: "An empty string is falsy; any non-empty string is truthy.",
        es: "Una cadena vacía es falsy; cualquier cadena no vacía es truthy.",
      },
    },
  },
  {
    slug: 'boolean-constructor-4',
    title: 'Boolean() — non-empty string is truthy',
    description: `## Boolean('hello')\n\nAny non-empty string is truthy — \`Boolean('hello')\` returns \`true\`.\n\n**Challenge:** Verify that \`Boolean('hello')\` is \`true\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Boolean',
    initialCode: `const b = Boolean('hello')\n`,
    solution: `Boolean('hello')`,
    tests: [
      { description: "result is true", assertion: "expect(result).toBe(true)" },
      { description: "result is truthy", assertion: "expect(result).toBeTruthy()" },
      { description: "Boolean('false') is true", assertion: "expect(Boolean('false')).toBe(true)" },
      { description: "Boolean(' ') is true", assertion: "expect(Boolean(' ')).toBe(true)" },
      { description: "Boolean('0') is true", assertion: "expect(Boolean('0')).toBe(true)" },
    ],
    hints: ["Any non-empty string is truthy — even '0' or 'false'."],
    tags: ['boolean', 'constructor', 'truthy', 'string'],
    usageExample: {
      code: `Boolean('hello')  // → true
Boolean('0')     // → true`,
      explanation: {
        en: "Any non-empty string—even '0' or 'false'—is truthy.",
        es: "Cualquier cadena no vacía, incluso '0' o 'false', es truthy.",
      },
    },
  },
  {
    slug: 'boolean-constructor-5',
    title: 'Boolean() — null is falsy',
    description: `## Boolean(null)\n\n\`null\` is a falsy value — \`Boolean(null)\` returns \`false\`.\n\n**Challenge:** Verify that \`Boolean(null)\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Boolean',
    initialCode: `const b = Boolean(null)\n`,
    solution: `Boolean(null)`,
    tests: [
      { description: 'result is false', assertion: 'expect(result).toBe(false)' },
      { description: 'result is falsy', assertion: 'expect(result).toBeFalsy()' },
      { description: 'Boolean(undefined) is false', assertion: 'expect(Boolean(undefined)).toBe(false)' },
      { description: 'Boolean({}) is true', assertion: 'expect(Boolean({})).toBe(true)' },
      { description: 'Boolean([]) is true', assertion: 'expect(Boolean([])).toBe(true)' },
    ],
    hints: ['null is one of the six falsy values; objects (even empty ones) are truthy.'],
    tags: ['boolean', 'constructor', 'falsy', 'null'],
    usageExample: {
      code: `Boolean(null)      // → false
Boolean(undefined) // → false
Boolean({})        // → true`,
      explanation: {
        en: "null and undefined are falsy; objects (even empty ones) are always truthy.",
        es: "null y undefined son falsy; los objetos (incluso vacíos) siempre son truthy.",
      },
    },
  },
]
