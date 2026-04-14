import type { Exercise } from '@/shared/types/exercises'

export const iteratorSpreadExercises: Exercise[] = [
  {
    slug: 'iterator-spread-set',
    title: 'Iterator: spread set',
    description: 'Check spread with set.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'spread',
    initialCode: `const arr = [...new Set([1,2,3])];`,
    solution: `const arr = [...new Set([1,2,3])];`,
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
    slug: 'iterator-spread-string',
    title: 'Iterator: spread string',
    description: 'Check spread with string.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'spread',
    initialCode: `const arr = [...'hello'];`,
    solution: `const arr = [...'hello'];`,
    tests: [
      { description: 'arr is ["h","e","l","l","o"]', assertion: 'JSON.stringify(arr) === JSON.stringify(["h","e","l","l","o"])' },
      { description: 'arr length is 5', assertion: 'arr.length === 5' },
      { description: 'first value is "h"', assertion: 'arr[0] === "h"' },
      { description: 'last value is "o"', assertion: 'arr[4] === "o"' },
      { description: 'typeof arr is object', assertion: 'typeof arr === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-spread-map',
    title: 'Iterator: spread map',
    description: 'Check spread with map.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'spread',
    initialCode: `const arr = [...new Map([['a',1]])];`,
    solution: `const arr = [...new Map([['a',1]])];`,
    tests: [
      { description: 'arr is [["a",1]]', assertion: 'JSON.stringify(arr) === JSON.stringify([["a",1]])' },
      { description: 'arr length is 1', assertion: 'arr.length === 1' },
      { description: 'first value is ["a",1]', assertion: 'JSON.stringify(arr[0]) === JSON.stringify(["a",1])' },
      { description: 'typeof arr is object', assertion: 'typeof arr === "object"' },
      { description: 'typeof arr[0] is object', assertion: 'typeof arr[0] === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-spread-generator',
    title: 'Iterator: spread generator',
    description: 'Check spread with generator.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'spread',
    initialCode: `function* gen() { yield 1; yield 2; }\nconst arr = [...gen()];`,
    solution: `function* gen() { yield 1; yield 2; }\nconst arr = [...gen()];`,
    tests: [
      { description: 'arr is [1,2]', assertion: 'JSON.stringify(arr) === JSON.stringify([1,2])' },
      { description: 'arr length is 2', assertion: 'arr.length === 2' },
      { description: 'first value is 1', assertion: 'arr[0] === 1' },
      { description: 'last value is 2', assertion: 'arr[1] === 2' },
      { description: 'typeof arr is object', assertion: 'typeof arr === "object"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-spread-multi',
    title: 'Iterator: spread multi',
    description: 'Check spread with multiple arrays.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'spread',
    initialCode: `const arr = [...[1,2],...[3,4]];`,
    solution: `const arr = [...[1,2],...[3,4]];`,
    tests: [
      { description: 'arr is [1,2,3,4]', assertion: 'JSON.stringify(arr) === JSON.stringify([1,2,3,4])' },
      { description: 'arr length is 4', assertion: 'arr.length === 4' },
      { description: 'first value is 1', assertion: 'arr[0] === 1' },
      { description: 'last value is 4', assertion: 'arr[3] === 4' },
      { description: 'typeof arr is object', assertion: 'typeof arr === "object"' }
    ],
    tags: [],
  }
]
