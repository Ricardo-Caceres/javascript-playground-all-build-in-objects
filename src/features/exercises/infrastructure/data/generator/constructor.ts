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
      { description: 'typeof gen() is "object"', assertion: "typeof gen() === 'object'" },
      { description: 'gen() is not null', assertion: "gen() !== null" },
      { description: 'gen() has next method', assertion: "typeof gen().next === 'function'" },
      { description: 'gen() has return method', assertion: "typeof gen().return === 'function'" },
      { description: 'gen() has throw method', assertion: "typeof gen().throw === 'function'" }
    ],
    tags: [],
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
      { description: 'it.next().value is 1', assertion: 'it.next().value === 1' },
      { description: 'it.next().done is true after one yield', assertion: 'it.next(); it.next().done === true' },
      { description: 'it is an object', assertion: 'typeof it === "object"' },
      { description: 'it has next method', assertion: 'typeof it.next === "function"' },
      { description: 'it has return method', assertion: 'typeof it.return === "function"' }
    ],
    tags: [],
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
      { description: 'second next().value is 2', assertion: 'it.next(); it.next().value === 2' },
      { description: 'done is false after first next()', assertion: 'it.next().done === false' },
      { description: 'done is false after second next()', assertion: 'it.next(); it.next().done === false' },
      { description: 'done is true after third next()', assertion: 'it.next(); it.next(); it.next().done === true' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' }
    ],
    tags: [],
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
      { description: 'empty generator is done', assertion: 'it.next().done === true' },
      { description: 'empty generator value is undefined', assertion: 'it.next().value === undefined' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
    ],
    tags: [],
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
      { description: 'typeof generator function is function', assertion: "typeof (function* gen() {}) === 'function'" },
      { description: 'typeof generator function is not object', assertion: "typeof (function* gen() {}) !== 'object'" },
      { description: 'generator function is not null', assertion: "(function* gen() {}) !== null" },
      { description: 'generator function has prototype', assertion: "typeof (function* gen() {}).prototype === 'object'" },
      { description: 'generator function is callable', assertion: "typeof (function* gen() {}) === 'function'" }
    ],
    tags: [],
  }
]
