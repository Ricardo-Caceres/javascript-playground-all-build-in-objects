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
      { description: 'next() returns {value:10,done:false}', assertion: 'const i2 = g(); expect(i2.next()).toEqual({ value: 10, done: false })' },
      { description: 'next() value is 10', assertion: 'const i2 = g(); expect(i2.next().value).toBe(10)' },
      { description: 'next() done is false', assertion: 'const i2 = g(); expect(i2.next().done).toBe(false)' },
      { description: 'typeof next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 10; yield 20 }
const it = gen()
console.log(it.next()) // → { value: 10, done: false }
console.log(it.next()) // → { value: 20, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'generator.next() advances the generator to the next yield and returns an object with value and done properties.',
        es: 'generator.next() avanza el generador al siguiente yield y devuelve un objeto con las propiedades value y done.',
      },
    },
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
      { description: 'second next() returns {value:2,done:false}', assertion: 'const i2 = g(); i2.next(); expect(i2.next()).toEqual({ value: 2, done: false })' },
      { description: 'second next() value is 2', assertion: 'const i2 = g(); i2.next(); expect(i2.next().value).toBe(2)' },
      { description: 'done is false after first next()', assertion: 'const i2 = g(); expect(i2.next().done).toBe(false)' },
      { description: 'done is false after second next()', assertion: 'const i2 = g(); i2.next(); expect(i2.next().done).toBe(false)' },
      { description: 'done is true after third next()', assertion: 'const i2 = g(); i2.next(); i2.next(); expect(i2.next().done).toBe(true)' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 10; yield 20 }
const it = gen()
console.log(it.next()) // → { value: 10, done: false }
console.log(it.next()) // → { value: 20, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'generator.next() advances the generator to the next yield and returns an object with value and done properties.',
        es: 'generator.next() avanza el generador al siguiente yield y devuelve un objeto con las propiedades value y done.',
      },
    },
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
      { description: 'done is true after all yields', assertion: 'const i2 = g(); i2.next(); expect(i2.next().done).toBe(true)' },
      { description: 'value is undefined after done', assertion: 'const i2 = g(); i2.next(); i2.next(); expect(i2.next().value).toBeUndefined()' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 10; yield 20 }
const it = gen()
console.log(it.next()) // → { value: 10, done: false }
console.log(it.next()) // → { value: 20, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'generator.next() advances the generator to the next yield and returns an object with value and done properties.',
        es: 'generator.next() avanza el generador al siguiente yield y devuelve un objeto con las propiedades value y done.',
      },
    },
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
      { description: 'next() returns {value:42,done:true}', assertion: 'const i2 = g(); expect(i2.next()).toEqual({ value: 42, done: true })' },
      { description: 'done is true after return', assertion: 'const i2 = g(); expect(i2.next().done).toBe(true)' },
      { description: 'value is 42 after return', assertion: 'const i2 = g(); expect(i2.next().value).toBe(42)' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() { yield 10; yield 20 }
const it = gen()
console.log(it.next()) // → { value: 10, done: false }
console.log(it.next()) // → { value: 20, done: false }
console.log(it.next()) // → { value: undefined, done: true }`,
      explanation: {
        en: 'generator.next() advances the generator to the next yield and returns an object with value and done properties.',
        es: 'generator.next() avanza el generador al siguiente yield y devuelve un objeto con las propiedades value y done.',
      },
    },
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
      { description: 'next() after done returns {value:undefined,done:true}', assertion: 'const i2 = g(); i2.next(); expect(i2.next()).toEqual({ value: undefined, done: true })' },
      { description: 'done is true after done', assertion: 'const i2 = g(); i2.next(); expect(i2.next().done).toBe(true)' },
      { description: 'value is undefined after done', assertion: 'const i2 = g(); i2.next(); expect(i2.next().value).toBeUndefined()' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' }
    ],
    tags: [],
  }
]
