import type { Exercise } from '@/shared/types/exercises'

export const generatorYieldExercises: Exercise[] = [
  {
    slug: 'generator-yield-array',
    title: 'Generator: yield array',
    description: 'Check that yield produces an array of values.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'yield',
    initialCode: `function* count() { yield 1; yield 2; yield 3; }\nconst arr = [...count()];`,
    solution: `function* count() { yield 1; yield 2; yield 3; }\nconst arr = [...count()];`,
    tests: [
      { description: 'array is [1,2,3]', assertion: 'expect([...count()]).toEqual([1,2,3])' },
      { description: 'length is 3', assertion: 'expect([...count()]).toHaveLength(3)' },
      { description: 'first value is 1', assertion: 'expect([...count()][0]).toBe(1)' },
      { description: 'last value is 3', assertion: 'expect([...count()][2]).toBe(3)' },
      { description: 'typeof count is function', assertion: 'expect(typeof count).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() {
  const x = yield 'ready?'
  yield x * 2
}
const it = gen()
it.next()       // → { value: 'ready?', done: false }
it.next(5)      // → { value: 10, done: false }`,
      explanation: {
        en: 'The yield expression pauses the generator and optionally receives a value passed to the next next() call.',
        es: 'La expresión yield pausa el generador y opcionalmente recibe un valor pasado en la siguiente llamada a next().',
      },
    },
  },
  {
    slug: 'generator-yield-star',
    title: 'Generator: yield*',
    description: 'Check that yield* delegates to another iterable.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'yield',
    initialCode: `function* gen() { yield* [4, 5, 6]; }\nconst arr = [...gen()];`,
    solution: `function* gen() { yield* [4, 5, 6]; }\nconst arr = [...gen()];`,
    tests: [
      { description: 'array is [4,5,6]', assertion: 'expect([...gen()]).toEqual([4,5,6])' },
      { description: 'length is 3', assertion: 'expect([...gen()]).toHaveLength(3)' },
      { description: 'first value is 4', assertion: 'expect([...gen()][0]).toBe(4)' },
      { description: 'last value is 6', assertion: 'expect([...gen()][2]).toBe(6)' },
      { description: 'typeof gen is function', assertion: 'expect(typeof gen).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() {
  const x = yield 'ready?'
  yield x * 2
}
const it = gen()
it.next()       // → { value: 'ready?', done: false }
it.next(5)      // → { value: 10, done: false }`,
      explanation: {
        en: 'The yield expression pauses the generator and optionally receives a value passed to the next next() call.',
        es: 'La expresión yield pausa el generador y opcionalmente recibe un valor pasado en la siguiente llamada a next().',
      },
    },
  },
  {
    slug: 'generator-yield-range',
    title: 'Generator: yield in range',
    description: 'Check that yield in a loop produces a range.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'yield',
    initialCode: `function* range(n) { for(let i=0; i<n; i++) yield i; }\nconst arr = [...range(3)];`,
    solution: `function* range(n) { for(let i=0; i<n; i++) yield i; }\nconst arr = [...range(3)];`,
    tests: [
      { description: 'array is [0,1,2]', assertion: 'expect([...range(3)]).toEqual([0,1,2])' },
      { description: 'length is 3', assertion: 'expect([...range(3)]).toHaveLength(3)' },
      { description: 'first value is 0', assertion: 'expect([...range(3)][0]).toBe(0)' },
      { description: 'last value is 2', assertion: 'expect([...range(3)][2]).toBe(2)' },
      { description: 'typeof range is function', assertion: 'expect(typeof range).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() {
  const x = yield 'ready?'
  yield x * 2
}
const it = gen()
it.next()       // → { value: 'ready?', done: false }
it.next(5)      // → { value: 10, done: false }`,
      explanation: {
        en: 'The yield expression pauses the generator and optionally receives a value passed to the next next() call.',
        es: 'La expresión yield pausa el generador y opcionalmente recibe un valor pasado en la siguiente llamada a next().',
      },
    },
  },
  {
    slug: 'generator-yield-forof',
    title: 'Generator: yield for...of',
    description: 'Check that for...of works with generator.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'yield',
    initialCode: `function* gen() { yield 'a'; yield 'b'; }\nconst arr = []; for (const v of gen()) arr.push(v);`,
    solution: `function* gen() { yield 'a'; yield 'b'; }\nconst arr = []; for (const v of gen()) arr.push(v);`,
    tests: [
      { description: 'array is ["a","b"]', assertion: 'expect((() => { const a2 = []; for (const v of gen()) a2.push(v); return JSON.stringify(a2) === JSON.stringify(["a","b"]); })()).toBe(true)' },
      { description: 'length is 2', assertion: 'expect((() => { const a2 = []; for (const v of gen()) a2.push(v); return a2.length === 2; })()).toBe(true)' },
      { description: 'first value is "a"', assertion: 'expect((() => { const a2 = []; for (const v of gen()) a2.push(v); return a2[0] === "a"; })()).toBe(true)' },
      { description: 'last value is "b"', assertion: 'expect((() => { const a2 = []; for (const v of gen()) a2.push(v); return a2[1] === "b"; })()).toBe(true)' },
      { description: 'typeof gen is function', assertion: 'expect(typeof gen).toBe("function")' }
    ],
    tags: [],
    usageExample: {
      code: `function* gen() {
  const x = yield 'ready?'
  yield x * 2
}
const it = gen()
it.next()       // → { value: 'ready?', done: false }
it.next(5)      // → { value: 10, done: false }`,
      explanation: {
        en: 'The yield expression pauses the generator and optionally receives a value passed to the next next() call.',
        es: 'La expresión yield pausa el generador y opcionalmente recibe un valor pasado en la siguiente llamada a next().',
      },
    },
  },
  {
    slug: 'generator-yield-length',
    title: 'Generator: yield length',
    description: 'Check that the length of yielded values is correct.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'yield',
    initialCode: `function* gen() { yield 1; yield 2; }\nconst len = [...gen()].length;`,
    solution: `function* gen() { yield 1; yield 2; }\nconst len = [...gen()].length;`,
    tests: [
      { description: 'length is 2', assertion: 'expect([...gen()]).toHaveLength(2)' },
      { description: 'first value is 1', assertion: 'expect([...gen()][0]).toBe(1)' },
      { description: 'last value is 2', assertion: 'expect([...gen()][1]).toBe(2)' },
      { description: 'typeof gen is function', assertion: 'expect(typeof gen).toBe("function")' },
      { description: 'typeof len is number', assertion: 'expect(typeof len).toBe("number")' }
    ],
    tags: [],
  }
]
