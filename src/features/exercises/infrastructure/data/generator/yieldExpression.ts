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
      { description: 'array is [1,2,3]', assertion: 'JSON.stringify([...count()]) === JSON.stringify([1,2,3])' },
      { description: 'length is 3', assertion: '[...count()].length === 3' },
      { description: 'first value is 1', assertion: '[...count()][0] === 1' },
      { description: 'last value is 3', assertion: '[...count()][2] === 3' },
      { description: 'typeof count is function', assertion: 'typeof count === "function"' }
    ],
    tags: [],
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
      { description: 'array is [4,5,6]', assertion: 'JSON.stringify([...gen()]) === JSON.stringify([4,5,6])' },
      { description: 'length is 3', assertion: '[...gen()].length === 3' },
      { description: 'first value is 4', assertion: '[...gen()][0] === 4' },
      { description: 'last value is 6', assertion: '[...gen()][2] === 6' },
      { description: 'typeof gen is function', assertion: 'typeof gen === "function"' }
    ],
    tags: [],
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
      { description: 'array is [0,1,2]', assertion: 'JSON.stringify([...range(3)]) === JSON.stringify([0,1,2])' },
      { description: 'length is 3', assertion: '[...range(3)].length === 3' },
      { description: 'first value is 0', assertion: '[...range(3)][0] === 0' },
      { description: 'last value is 2', assertion: '[...range(3)][2] === 2' },
      { description: 'typeof range is function', assertion: 'typeof range === "function"' }
    ],
    tags: [],
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
      { description: 'array is ["a","b"]', assertion: '(() => { const arr = []; for (const v of gen()) arr.push(v); return JSON.stringify(arr) === JSON.stringify(["a","b"]); })()' },
      { description: 'length is 2', assertion: '(() => { const arr = []; for (const v of gen()) arr.push(v); return arr.length === 2; })()' },
      { description: 'first value is "a"', assertion: '(() => { const arr = []; for (const v of gen()) arr.push(v); return arr[0] === "a"; })()' },
      { description: 'last value is "b"', assertion: '(() => { const arr = []; for (const v of gen()) arr.push(v); return arr[1] === "b"; })()' },
      { description: 'typeof gen is function', assertion: 'typeof gen === "function"' }
    ],
    tags: [],
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
      { description: 'length is 2', assertion: '[...gen()].length === 2' },
      { description: 'first value is 1', assertion: '[...gen()][0] === 1' },
      { description: 'last value is 2', assertion: '[...gen()][1] === 2' },
      { description: 'typeof gen is function', assertion: 'typeof gen === "function"' },
      { description: 'typeof len is number', assertion: 'typeof len === "number"' }
    ],
    tags: [],
  }
]
