import type { Exercise } from '@/shared/types/exercises'

export const generatorConstructorExercises: Exercise[] = [
  {
    slug: 'generator-constructor-typeof-object',
    title: 'Generator: typeof generator is object',
    description: 'Check that calling a generator function returns an object.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Generator',
    initialCode: `function* gen() { yield 1; yield 2; }\nconst result = typeof gen();`,
    solution: `function* gen() { yield 1; yield 2; }\nconst result = typeof gen();`,
    tests: [
      { description: 'typeof gen() is "object"', assertion: "expect(typeof gen()).toBe('object')" },
      { description: 'gen() is not null', assertion: "expect(gen() !== null).toBe(true)" },
      { description: 'gen() has next method', assertion: "expect(typeof gen().next).toBe('function')" },
      { description: 'gen() has return method', assertion: "expect(typeof gen().return).toBe('function')" },
      { description: 'gen() has throw method', assertion: "expect(typeof gen().throw).toBe('function')" }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 1; yield 2 }
const it = gen()
console.log(it.next()) // → { value: 1, done: false }
console.log(it.next()) // → { value: 2, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'A generator function returns a generator object that implements the iterator protocol via successive next() calls.',
        es: 'Una función generadora devuelve un objeto generador que implementa el protocolo iterador mediante llamadas sucesivas a next().',
      },
    },
  },
  {
    slug: 'generator-next-value',
    title: 'Generator: next() yields value',
    description: 'Check that next() yields the correct value.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Generator',
    initialCode: `function* gen() { yield 1; }\nconst it = gen();\nconst value = it.next().value;`,
    solution: `function* gen() { yield 1; }\nconst it = gen();\nconst value = it.next().value;`,
    tests: [
      { description: 'it.next().value is 1', assertion: 'const i2 = gen(); expect(i2.next().value).toBe(1)' },
      { description: 'it.next().done is true after one yield', assertion: 'const i2 = gen(); i2.next(); expect(i2.next().done).toBe(true)' },
      { description: 'it is an object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'it has next method', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'it has return method', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 1; yield 2 }
const it = gen()
console.log(it.next()) // → { value: 1, done: false }
console.log(it.next()) // → { value: 2, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'A generator function returns a generator object that implements the iterator protocol via successive next() calls.',
        es: 'Una función generadora devuelve un objeto generador que implementa el protocolo iterador mediante llamadas sucesivas a next().',
      },
    },
  },
  {
    slug: 'generator-next-second-value',
    title: 'Generator: next() yields second value',
    description: 'Check that next() yields the second value.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Generator',
    initialCode: `function* gen() { yield 1; yield 2; }\nconst it = gen();\nit.next();\nconst value = it.next().value;`,
    solution: `function* gen() { yield 1; yield 2; }\nconst it = gen();\nit.next();\nconst value = it.next().value;`,
    tests: [
      { description: 'second next().value is 2', assertion: 'const i2 = gen(); i2.next(); expect(i2.next().value).toBe(2)' },
      { description: 'done is false after first next()', assertion: 'const i2 = gen(); expect(i2.next().done).toBe(false)' },
      { description: 'done is false after second next()', assertion: 'const i2 = gen(); i2.next(); expect(i2.next().done).toBe(false)' },
      { description: 'done is true after third next()', assertion: 'const i2 = gen(); i2.next(); i2.next(); expect(i2.next().done).toBe(true)' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 1; yield 2 }
const it = gen()
console.log(it.next()) // → { value: 1, done: false }
console.log(it.next()) // → { value: 2, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'A generator function returns a generator object that implements the iterator protocol via successive next() calls.',
        es: 'Una función generadora devuelve un objeto generador que implementa el protocolo iterador mediante llamadas sucesivas a next().',
      },
    },
  },
  {
    slug: 'generator-empty-done',
    title: 'Generator: empty generator is done',
    description: 'Check that an empty generator is immediately done.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Generator',
    initialCode: `function* gen() {}\nconst it = gen();\nconst done = it.next().done;`,
    solution: `function* gen() {}\nconst it = gen();\nconst done = it.next().done;`,
    tests: [
      { description: 'empty generator is done', assertion: 'expect(it.next().done).toBe(true)' },
      { description: 'empty generator value is undefined', assertion: 'expect(it.next().value).toBeUndefined()' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 1; yield 2 }
const it = gen()
console.log(it.next()) // → { value: 1, done: false }
console.log(it.next()) // → { value: 2, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'A generator function returns a generator object that implements the iterator protocol via successive next() calls.',
        es: 'Una función generadora devuelve un objeto generador que implementa el protocolo iterador mediante llamadas sucesivas a next().',
      },
    },
  },
  {
    slug: 'generator-typeof-function','title': 'Generator: typeof generator function is function',
    description: 'Check that typeof a generator function is "function".',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Generator',
    initialCode: `const type = typeof (function* gen() {});`,
    solution: `const type = typeof (function* gen() {});`,
    tests: [
      { description: 'typeof generator function is function', assertion: "expect(typeof (function* gen() {})).toBe('function')" },
      { description: 'typeof generator function is not object', assertion: "expect(typeof (function* gen() {}) !== 'object').toBe(true)" },
      { description: 'generator function is not null', assertion: "expect((function* gen() {}) !== null).toBe(true)" },
      { description: 'generator function has prototype', assertion: "expect(typeof (function* gen() {}).prototype).toBe('object')" },
      { description: 'generator function is callable', assertion: "expect(typeof (function* gen() {})).toBe('function')" }
    ],
    tags: [],
  }
]
