import type { Exercise } from '@/shared/types/exercises'

export const iteratorForOfExercises: Exercise[] = [
  {
    slug: 'iterator-forof-array',
    title: 'Iterator: for...of array',
    description: 'Check for...of with array.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'forOf',
    initialCode: `const arr = []; for (const x of [1,2,3]) arr.push(x);`,
    solution: `const arr = []; for (const x of [1,2,3]) arr.push(x);`,
    tests: [
      { description: 'arr is [1,2,3]', assertion: 'JSON.stringify(arr) === JSON.stringify([1,2,3])' },
      { description: 'arr length is 3', assertion: 'arr.length === 3' },
      { description: 'first value is 1', assertion: 'arr[0] === 1' },
      { description: 'last value is 3', assertion: 'arr[2] === 3' },
      { description: 'typeof arr is object', assertion: 'typeof arr === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-forof-string',
    title: 'Iterator: for...of string',
    description: 'Check for...of with string.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'forOf',
    initialCode: `const chars = []; for (const c of 'abc') chars.push(c);`,
    solution: `const chars = []; for (const c of 'abc') chars.push(c);`,
    tests: [
      { description: 'chars is ["a","b","c"]', assertion: 'JSON.stringify(chars) === JSON.stringify(["a","b","c"])' },
      { description: 'chars length is 3', assertion: 'chars.length === 3' },
      { description: 'first value is "a"', assertion: 'chars[0] === "a"' },
      { description: 'last value is "c"', assertion: 'chars[2] === "c"' },
      { description: 'typeof chars is object', assertion: 'typeof chars === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-forof-map',
    title: 'Iterator: for...of map',
    description: 'Check for...of with map.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'forOf',
    initialCode: `const keys = []; for (const [k] of new Map([['x',1],['y',2]])) keys.push(k);`,
    solution: `const keys = []; for (const [k] of new Map([['x',1],['y',2]])) keys.push(k);`,
    tests: [
      { description: 'keys is ["x","y"]', assertion: 'JSON.stringify(keys) === JSON.stringify(["x","y"])' },
      { description: 'keys length is 2', assertion: 'keys.length === 2' },
      { description: 'first key is "x"', assertion: 'keys[0] === "x"' },
      { description: 'last key is "y"', assertion: 'keys[1] === "y"' },
      { description: 'typeof keys is object', assertion: 'typeof keys === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-forof-set',
    title: 'Iterator: for...of set',
    description: 'Check for...of with set.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'forOf',
    initialCode: `const vals = []; for (const v of new Set([10,20,30])) vals.push(v);`,
    solution: `const vals = []; for (const v of new Set([10,20,30])) vals.push(v);`,
    tests: [
      { description: 'vals is [10,20,30]', assertion: 'JSON.stringify(vals) === JSON.stringify([10,20,30])' },
      { description: 'vals length is 3', assertion: 'vals.length === 3' },
      { description: 'first value is 10', assertion: 'vals[0] === 10' },
      { description: 'last value is 30', assertion: 'vals[2] === 30' },
      { description: 'typeof vals is object', assertion: 'typeof vals === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-forof-sum',
    title: 'Iterator: for...of sum',
    description: 'Check for...of with sum.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'forOf',
    initialCode: `let sum = 0; for (const n of [1,2,3,4]) sum += n;`,
    solution: `let sum = 0; for (const n of [1,2,3,4]) sum += n;`,
    tests: [
      { description: 'sum is 10', assertion: 'sum === 10' },
      { description: 'typeof sum is number', assertion: 'typeof sum === "number"' },
      { description: 'sum is not 0', assertion: 'sum !== 0' },
      { description: 'sum is not null', assertion: 'sum !== null' },
      { description: 'sum is not undefined', assertion: 'sum !== undefined' }
    ],
    tags: [],
  }
]
