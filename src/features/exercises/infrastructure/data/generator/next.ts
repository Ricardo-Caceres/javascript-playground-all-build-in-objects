import type { Exercise } from '@/shared/types/exercises'

export const generatorNextExercises: Exercise[] = [
  {
    slug: 'generator-next-basic',
    title: 'Generator: next() basic',
    description: 'Check that next() returns the correct value and done.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'next',
    initialCode: `function* g() { yield 10; }\nconst it = g();\nconst result = it.next();`,
    solution: `function* g() { yield 10; }\nconst it = g();\nconst result = it.next();`,
    tests: [
      { description: 'next() returns {value:10,done:false}', assertion: 'JSON.stringify(it.next()) === JSON.stringify({ value: 10, done: false })' },
      { description: 'next() value is 10', assertion: 'it.next().value === 10' },
      { description: 'next() done is false', assertion: 'it.next().done === false' },
      { description: 'typeof next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'generator-next-second',
    title: 'Generator: next() second value',
    description: 'Check that next() returns the second value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'next',
    initialCode: `function* g() { yield 1; yield 2; }\nconst it = g();\nit.next();\nconst result = it.next();`,
    solution: `function* g() { yield 1; yield 2; }\nconst it = g();\nit.next();\nconst result = it.next();`,
    tests: [
      { description: 'second next() returns {value:2,done:false}', assertion: 'it.next(); JSON.stringify(it.next()) === JSON.stringify({ value: 2, done: false })' },
      { description: 'second next() value is 2', assertion: 'it.next(); it.next().value === 2' },
      { description: 'done is false after first next()', assertion: 'it.next().done === false' },
      { description: 'done is false after second next()', assertion: 'it.next(); it.next().done === false' },
      { description: 'done is true after third next()', assertion: 'it.next(); it.next(); it.next().done === true' }
    ],
    tags: [],
  },
  {
    slug: 'generator-next-done',
    title: 'Generator: next() done after yield',
    description: 'Check that done is true after all yields.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'next',
    initialCode: `function* g() { yield 1; }\nconst it = g();\nit.next();\nconst done = it.next().done;`,
    solution: `function* g() { yield 1; }\nconst it = g();\nit.next();\nconst done = it.next().done;`,
    tests: [
      { description: 'done is true after all yields', assertion: 'it.next(); it.next().done === true' },
      { description: 'value is undefined after done', assertion: 'it.next(); it.next(); it.next().value === undefined' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'generator-next-return',
    title: 'Generator: next() with return',
    description: 'Check that next() returns {value, done} when using return.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'next',
    initialCode: `function* g() { return 42; }\nconst it = g();\nconst result = it.next();`,
    solution: `function* g() { return 42; }\nconst it = g();\nconst result = it.next();`,
    tests: [
      { description: 'next() returns {value:42,done:true}', assertion: 'JSON.stringify(it.next()) === JSON.stringify({ value: 42, done: true })' },
      { description: 'done is true after return', assertion: 'it.next().done === true' },
      { description: 'value is 42 after return', assertion: 'it.next().value === 42' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'generator-next-after-done',
    title: 'Generator: next() after done',
    description: 'Check that next() after done returns {value:undefined,done:true}.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'next',
    initialCode: `function* g() {}\nconst it = g();\nit.next();\nconst result = it.next();`,
    solution: `function* g() {}\nconst it = g();\nit.next();\nconst result = it.next();`,
    tests: [
      { description: 'next() after done returns {value:undefined,done:true}', assertion: 'it.next(); JSON.stringify(it.next()) === JSON.stringify({ value: undefined, done: true })' },
      { description: 'done is true after done', assertion: 'it.next(); it.next().done === true' },
      { description: 'value is undefined after done', assertion: 'it.next(); it.next().value === undefined' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' }
    ],
    tags: [],
  }
]
