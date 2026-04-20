import type { Exercise } from '@/shared/types/exercises'

export const generatorReturnExercises: Exercise[] = [
  {
    slug: 'generator-return-basic',
    title: 'Generator: return()',
    description: 'Check that return() ends the generator and returns the value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'return',
    initialCode: `function* g() { yield 1; yield 2; }\nconst it = g();\nconst result = it.return(99);`,
    solution: `function* g() { yield 1; yield 2; }\nconst it = g();\nconst result = it.return(99);`,
    tests: [
      { description: 'return(99) returns {value:99,done:true}', assertion: 'const i2 = g(); expect(i2.return(99)).toEqual({ value: 99, done: true })' },
      { description: 'done is true after return', assertion: 'const i2 = g(); i2.return(); expect(i2.next().done).toBe(true)' },
      { description: 'return("end") returns {value:"end",done:true}', assertion: 'const i2 = g(); i2.next(); expect(i2.return("end")).toEqual({ value: "end", done: true })' },
      { description: 'typeof return is function', assertion: 'expect(typeof it.return).toBe("function")' },
      { description: 'return(42).value is 42', assertion: 'const i2 = g(); expect(i2.return(42).value).toBe(42)' }
    ],
    tags: [],
  },
  {
    slug: 'generator-return-done',
    title: 'Generator: return() done',
    description: 'Check that after return(), generator is done.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'return',
    initialCode: `function* g() { yield 1; }\nconst it = g();\nit.return();\nconst done = it.next().done;`,
    solution: `function* g() { yield 1; }\nconst it = g();\nit.return();\nconst done = it.next().done;`,
    tests: [
      { description: 'done is true after return', assertion: 'const i2 = g(); i2.return(); expect(i2.next().done).toBe(true)' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.throw is function', assertion: 'expect(typeof it.throw).toBe("function")' }
    ],
    tags: [],
  },
  {
    slug: 'generator-return-after-next',
    title: 'Generator: return() after next()',
    description: 'Check that return() after next() returns correct value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'return',
    initialCode: `function* g() { yield 1; yield 2; }\nconst it = g();\nit.next();\nconst result = it.return('end');`,
    solution: `function* g() { yield 1; yield 2; }\nconst it = g();\nit.next();\nconst result = it.return('end');`,
    tests: [
      { description: 'return("end") returns {value:"end",done:true}', assertion: 'const i2 = g(); i2.next(); expect(i2.return("end")).toEqual({ value: "end", done: true })' },
      { description: 'done is true after return', assertion: 'const i2 = g(); i2.next(); i2.return(); expect(i2.next().done).toBe(true)' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' }
    ],
    tags: [],
  },
  {
    slug: 'generator-return-typeof',
    title: 'Generator: typeof return is function',
    description: 'Check that typeof return is function.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'return',
    initialCode: `typeof (function* g() {})().return`,
    solution: `typeof (function* g() {})().return`,
    tests: [
      { description: 'typeof return is function', assertion: 'expect(result).toBe("function")' },
      { description: 'typeof return is not object', assertion: 'expect(result !== "object").toBe(true)' },
      { description: 'typeof return is not undefined', assertion: 'expect(result !== "undefined").toBe(true)' },
      { description: 'typeof return is not null', assertion: 'expect(result !== "null").toBe(true)' },
      { description: 'typeof return is not number', assertion: 'expect(result !== "number").toBe(true)' }
    ],
    tags: [],
  },
  {
    slug: 'generator-return-value',
    title: 'Generator: return() value',
    description: 'Check that return() returns the correct value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'return',
    initialCode: `function* g() { yield 1; }\nconst it = g();\nconst value = it.return(42).value;`,
    solution: `function* g() { yield 1; }\nconst it = g();\nconst value = it.return(42).value;`,
    tests: [
      { description: 'return(42).value is 42', assertion: 'const i2 = g(); expect(i2.return(42).value).toBe(42)' },
      { description: 'done is true after return', assertion: 'const i2 = g(); i2.return(); expect(i2.next().done).toBe(true)' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' }
    ],
    tags: [],
  }
]
