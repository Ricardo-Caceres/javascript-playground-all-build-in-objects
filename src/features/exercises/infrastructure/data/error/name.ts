import type { Exercise } from '@/shared/types/exercises'

export const errorNameExercises: Exercise[] = [
  {
    slug: 'error-name-1',
    title: "Error.name — base Error is 'Error'",
    description: `## Error.prototype.name\n\nThe \`.name\` property identifies the type of error. For the base \`Error\` class it is \`'Error'\`.\n\n**Challenge:** Verify \`new Error().name\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Error',
    method: 'name',
    initialCode: `const err = new Error()\n`,
    solution: `new Error().name`,
    tests: [
      { description: "name is 'Error'", assertion:"expect(result).toBe('Error')" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'same for Error with message', assertion:"expect(new Error('msg').name).toBe('Error')" },
      { description: 'name is not null', assertion:"expect(result !== null).toBe(true)" },
    ],
    hints: ['The base Error class has name "Error".'],
    tags: ['error', 'name', 'instance-property'],
    usageExample: {
      code: `new Error('x').name  // → 'Error'`,
      explanation: {
        en: "The name property of a base Error is 'Error'.",
        es: "La propiedad name de un Error base es 'Error'.",
      },
    },
  },
  {
    slug: 'error-name-2',
    title: "Error.name — TypeError is 'TypeError'",
    description: `## TypeError.name\n\n\`new TypeError().name\` returns \`'TypeError'\`.\n\n**Challenge:** Verify the name.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Error',
    method: 'name',
    initialCode: `const err = new TypeError()\n`,
    solution: `new TypeError().name`,
    tests: [
      { description: "name is 'TypeError'", assertion:"expect(result).toBe('TypeError')" },
      { description: 'is an Error', assertion:"expect(new TypeError() instanceof Error).toBe(true)" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name with message same', assertion:"expect(new TypeError('bad').name).toBe('TypeError')" },
    ],
    hints: ['TypeError is a subclass of Error with name "TypeError".'],
    tags: ['error', 'name', 'TypeError'],
    usageExample: {
      code: `new TypeError('x').name   // → 'TypeError'
new RangeError('x').name  // → 'RangeError'`,
      explanation: {
        en: "Subclasses of Error set their own name to identify the error type.",
        es: "Las subclases de Error establecen su propio name para identificar el tipo de error.",
      },
    },
  },
  {
    slug: 'error-name-3',
    title: "Error.name — RangeError is 'RangeError'",
    description: `## RangeError.name\n\n\`new RangeError().name\` returns \`'RangeError'\`.\n\n**Challenge:** Verify the name.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Error',
    method: 'name',
    initialCode: `const err = new RangeError()\n`,
    solution: `new RangeError().name`,
    tests: [
      { description: "name is 'RangeError'", assertion:"expect(result).toBe('RangeError')" },
      { description: 'is an Error', assertion:"expect(new RangeError() instanceof Error).toBe(true)" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name consistent with message', assertion:"expect(new RangeError('x').name).toBe('RangeError')" },
    ],
    hints: ['RangeError is for values outside the allowed range.'],
    tags: ['error', 'name', 'RangeError'],
    usageExample: {
      code: `const err = new Error('x')
err.name = 'CustomError'
err.name  // → 'CustomError'`,
      explanation: {
        en: "You can reassign the name property to create custom error identifiers.",
        es: "Puedes reasignar la propiedad name para crear identificadores de error personalizados.",
      },
    },
  },
  {
    slug: 'error-name-4',
    title: "Error.name — SyntaxError is 'SyntaxError'",
    description: `## SyntaxError.name\n\n\`new SyntaxError().name\` returns \`'SyntaxError'\`.\n\n**Challenge:** Verify the name.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Error',
    method: 'name',
    initialCode: `const err = new SyntaxError()\n`,
    solution: `new SyntaxError().name`,
    tests: [
      { description: "name is 'SyntaxError'", assertion:"expect(result).toBe('SyntaxError')" },
      { description: 'is an Error', assertion:"expect(new SyntaxError() instanceof Error).toBe(true)" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'JSON.parse throws SyntaxError', assertion:"expect(() => JSON.parse('bad')).toThrow(SyntaxError)" },
    ],
    hints: ['SyntaxError is thrown when invalid code or JSON is parsed.'],
    tags: ['error', 'name', 'SyntaxError'],
    usageExample: {
      code: `class AppError extends Error {
  constructor(msg) { super(msg); this.name = 'AppError' }
}
new AppError('x').name  // → 'AppError'`,
      explanation: {
        en: "Set this.name in subclass constructors to give custom errors a meaningful name.",
        es: "Establece this.name en constructores de subclase para dar a los errores personalizados un nombre significativo.",
      },
    },
  },
  {
    slug: 'error-name-5',
    title: "Error.name — ReferenceError is 'ReferenceError'",
    description: `## ReferenceError.name\n\n\`new ReferenceError().name\` returns \`'ReferenceError'\`.\n\n**Challenge:** Verify the name.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Error',
    method: 'name',
    initialCode: `const err = new ReferenceError()\n`,
    solution: `new ReferenceError().name`,
    tests: [
      { description: "name is 'ReferenceError'", assertion:"expect(result).toBe('ReferenceError')" },
      { description: 'is an Error', assertion:"expect(new ReferenceError() instanceof Error).toBe(true)" },
      { description: 'name is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'name is truthy', assertion:"expect(result).toBeTruthy()" },
      { description: 'name consistent with message', assertion:"expect(new ReferenceError('x').name).toBe('ReferenceError')" },
    ],
    hints: ['ReferenceError is thrown when accessing undeclared variables.'],
    tags: ['error', 'name', 'ReferenceError'],
    usageExample: {
      code: `const err = new Error('x')
typeof err.name  // → 'string'`,
      explanation: {
        en: "The name property is always a string that identifies the error type.",
        es: "La propiedad name siempre es una cadena que identifica el tipo de error.",
      },
    },
  },
]
