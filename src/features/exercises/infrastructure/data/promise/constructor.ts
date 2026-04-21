import type { Exercise } from '@/shared/types/exercises'

export const promiseConstructorExercises: Exercise[] = [
  {
    slug: 'promise-constructor-1',
    title: 'Promise — instanceof',
    description: `## Promise Constructor\n\n\`new Promise((res) => res(1)) instanceof Promise\` is \`true\`.\n\n**Challenge:** Verify the instanceof check.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Promise',
    initialCode: `new Promise((res) => res(1)) instanceof Promise\n`,
    solution: `new Promise((res) => res(1)) instanceof Promise`,
    tests: [
      { description: 'instanceof Promise is true', assertion:'expect(result).toBe(true)' },
      { description: 'instanceof Object is true', assertion:'expect(new Promise((res) => res(1)) instanceof Object).toBe(true)' },
      { description: 'is truthy', assertion:'expect(new Promise((res) => res(1))).toBeTruthy()' },
      { description: 'is not null', assertion:'expect(new Promise((res) => res(1)) !== null).toBe(true)' },
      { description: 'Promise.resolve() instanceof Promise', assertion:'expect(Promise.resolve(1) instanceof Promise).toBe(true)' },
    ],
    hints: ['All Promise instances pass the instanceof Promise check.'],
    tags: ['promise', 'constructor', 'instanceof'],
    usageExample: {
      code: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100)
})
p.then(v => console.log(v))  // → 42`,
      explanation: {
        en: 'The Promise constructor takes an executor function with resolve and reject callbacks to create a new promise.',
        es: 'El constructor Promise recibe una función ejecutora con callbacks resolve y reject para crear una nueva promesa.',
      },
    },
  },
  {
    slug: 'promise-constructor-2',
    title: 'Promise — typeof',
    description: `## typeof Promise Instance\n\n\`typeof new Promise(() => {})\` is \`'object'\`.\n\n**Challenge:** Verify the type.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Promise',
    initialCode: `typeof new Promise(() => {})\n`,
    solution: `typeof new Promise(() => {})`,
    tests: [
      { description: "typeof is 'object'", assertion:"expect(result).toBe('object')" },
      { description: "not 'function'", assertion:"expect(result === 'function').toBe(false)" },
      { description: "not 'string'", assertion:"expect(result === 'string').toBe(false)" },
      { description: 'instanceof Promise', assertion:'expect(result).toBe(true)' },
      { description: 'is not null', assertion:'expect(new Promise(() => {}) !== null).toBe(true)' },
    ],
    hints: ['Promise instances are objects.'],
    tags: ['promise', 'constructor', 'typeof'],
    usageExample: {
      code: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100)
})
p.then(v => console.log(v))  // → 42`,
      explanation: {
        en: 'The Promise constructor takes an executor function with resolve and reject callbacks to create a new promise.',
        es: 'El constructor Promise recibe una función ejecutora con callbacks resolve y reject para crear una nueva promesa.',
      },
    },
  },
  {
    slug: 'promise-constructor-3',
    title: 'Promise — executor does not have to resolve',
    description: `## Promise Pending\n\n\`new Promise(() => {})\` creates a pending Promise. It's still a Promise instance.\n\n**Challenge:** Verify a pending Promise is still instanceof Promise.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Promise',
    initialCode: `new Promise(() => {}) instanceof Promise\n`,
    solution: `new Promise(() => {}) instanceof Promise`,
    tests: [
      { description: 'pending promise instanceof Promise', assertion:'expect(result).toBe(true)' },
      { description: 'typeof is object', assertion:"expect(result).toBe('object')" },
      { description: 'is truthy', assertion:'expect(new Promise(() => {})).toBeTruthy()' },
      { description: 'is not null', assertion:'expect(new Promise(() => {}) !== null).toBe(true)' },
      { description: 'is not undefined', assertion:'expect(new Promise(() => {}) !== undefined).toBe(true)' },
    ],
    hints: ['A Promise can be in a pending state — it is still a valid Promise.'],
    tags: ['promise', 'constructor', 'pending'],
    usageExample: {
      code: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100)
})
p.then(v => console.log(v))  // → 42`,
      explanation: {
        en: 'The Promise constructor takes an executor function with resolve and reject callbacks to create a new promise.',
        es: 'El constructor Promise recibe una función ejecutora con callbacks resolve y reject para crear una nueva promesa.',
      },
    },
  },
  {
    slug: 'promise-constructor-4',
    title: 'Promise.resolve() — instanceof',
    description: `## Promise.resolve()\n\n\`Promise.resolve(42) instanceof Promise\` is \`true\`.\n\n**Challenge:** Verify Promise.resolve creates a Promise.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Promise',
    initialCode: `Promise.resolve(42) instanceof Promise\n`,
    solution: `Promise.resolve(42) instanceof Promise`,
    tests: [
      { description: 'Promise.resolve() instanceof Promise', assertion:'expect(result).toBe(true)' },
      { description: 'result.resolve() is object', assertion:"expect(result.resolve(42)).toBe('object')" },
      { description: 'is truthy', assertion:'expect(Promise.resolve(42)).toBeTruthy()' },
      { description: 'Promise.resolve(null) instanceof Promise', assertion:'expect(Promise.resolve(null) instanceof Promise).toBe(true)' },
      { description: 'Promise.resolve(undefined) instanceof Promise', assertion:'expect(Promise.resolve(undefined) instanceof Promise).toBe(true)' },
    ],
    hints: ['Promise.resolve() always returns a Promise.'],
    tags: ['promise', 'constructor', 'resolve'],
    usageExample: {
      code: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100)
})
p.then(v => console.log(v))  // → 42`,
      explanation: {
        en: 'The Promise constructor takes an executor function with resolve and reject callbacks to create a new promise.',
        es: 'El constructor Promise recibe una función ejecutora con callbacks resolve y reject para crear una nueva promesa.',
      },
    },
  },
  {
    slug: 'promise-constructor-5',
    title: 'Promise — typeof Promise function',
    description: `## typeof Promise\n\n\`typeof Promise\` is \`'function'\` because Promise is a constructor.\n\n**Challenge:** Verify the type of Promise itself.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Promise',
    initialCode: `typeof Promise\n`,
    solution: `typeof Promise`,
    tests: [
      { description: "result is 'function'", assertion:"expect(result).toBe('function')" },
      { description: "not 'object'", assertion:"expect(result === 'object').toBe(false)" },
      { description: 'Promise instanceof Function', assertion:'expect(Promise instanceof Function).toBe(true)' },
      { description: 'Promise is truthy', assertion:'expect(Promise).toBeTruthy()' },
      { description: 'Promise is not null', assertion:'expect(Promise !== null).toBe(true)' },
    ],
    hints: ['Constructors are functions in JavaScript.'],
    tags: ['promise', 'constructor', 'typeof'],
    usageExample: {
      code: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 100)
})
p.then(v => console.log(v))  // → 42`,
      explanation: {
        en: 'The Promise constructor takes an executor function with resolve and reject callbacks to create a new promise.',
        es: 'El constructor Promise recibe una función ejecutora con callbacks resolve y reject para crear una nueva promesa.',
      },
    },
  },
]
