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
      { description: 'arr is [1,2,3]', assertion: 'expect(arr).toEqual([1,2,3])' },
      { description: 'arr length is 3', assertion: 'expect(arr).toHaveLength(3)' },
      { description: 'first value is 1', assertion: 'expect(arr[0]).toBe(1)' },
      { description: 'last value is 3', assertion: 'expect(arr[2]).toBe(3)' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' }
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
      { description: 'chars is ["a","b","c"]', assertion: 'expect(chars).toEqual(["a","b","c"])' },
      { description: 'chars length is 3', assertion: 'expect(chars).toHaveLength(3)' },
      { description: 'first value is "a"', assertion: 'expect(chars[0]).toBe("a")' },
      { description: 'last value is "c"', assertion: 'expect(chars[2]).toBe("c")' },
      { description: 'typeof chars is object', assertion: 'expect(typeof chars).toBe("object")' }
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
      { description: 'keys is ["x","y"]', assertion: 'expect(keys).toEqual(["x","y"])' },
      { description: 'keys length is 2', assertion: 'expect(keys).toHaveLength(2)' },
      { description: 'first key is "x"', assertion: 'expect(keys[0]).toBe("x")' },
      { description: 'last key is "y"', assertion: 'expect(keys[1]).toBe("y")' },
      { description: 'typeof keys is object', assertion: 'expect(typeof keys).toBe("object")' }
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
      { description: 'vals is [10,20,30]', assertion: 'expect(vals).toEqual([10,20,30])' },
      { description: 'vals length is 3', assertion: 'expect(vals).toHaveLength(3)' },
      { description: 'first value is 10', assertion: 'expect(vals[0]).toBe(10)' },
      { description: 'last value is 30', assertion: 'expect(vals[2]).toBe(30)' },
      { description: 'typeof vals is object', assertion: 'expect(typeof vals).toBe("object")' }
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
      { description: 'sum is 10', assertion: 'expect(sum).toBe(10)' },
      { description: 'typeof sum is number', assertion: 'expect(typeof sum).toBe("number")' },
      { description: 'sum is not 0', assertion: 'expect(sum !== 0).toBe(true)' },
      { description: 'sum is not null', assertion: 'expect(sum !== null).toBe(true)' },
      { description: 'sum is not undefined', assertion: 'expect(sum !== undefined).toBe(true)' }
    ],
    tags: [],
  }
]
