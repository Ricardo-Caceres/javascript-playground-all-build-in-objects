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
      { description: 'arr is [1,2,3]', assertion: 'expect(arr).toEqual([1,2,3])' },
      { description: 'arr length is 3', assertion: 'expect(arr).toHaveLength(3)' },
      { description: 'first value is 1', assertion: 'expect(arr[0]).toBe(1)' },
      { description: 'last value is 3', assertion: 'expect(arr[2]).toBe(3)' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' }
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
      { description: 'arr is ["h","e","l","l","o"]', assertion: 'expect(arr).toEqual(["h","e","l","l","o"])' },
      { description: 'arr length is 5', assertion: 'expect(arr).toHaveLength(5)' },
      { description: 'first value is "h"', assertion: 'expect(arr[0]).toBe("h")' },
      { description: 'last value is "o"', assertion: 'expect(arr[4]).toBe("o")' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' }
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
      { description: 'arr is [["a",1]]', assertion: 'expect(arr).toEqual([["a",1]])' },
      { description: 'arr length is 1', assertion: 'expect(arr).toHaveLength(1)' },
      { description: 'first value is ["a",1]', assertion: 'expect(arr[0]).toEqual(["a",1])' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' },
      { description: 'typeof arr[0] is object', assertion: 'expect(typeof arr[0]).toBe("object")' }
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
      { description: 'arr is [1,2]', assertion: 'expect(arr).toEqual([1,2])' },
      { description: 'arr length is 2', assertion: 'expect(arr).toHaveLength(2)' },
      { description: 'first value is 1', assertion: 'expect(arr[0]).toBe(1)' },
      { description: 'last value is 2', assertion: 'expect(arr[1]).toBe(2)' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' }
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
      { description: 'arr is [1,2,3,4]', assertion: 'expect(arr).toEqual([1,2,3,4])' },
      { description: 'arr length is 4', assertion: 'expect(arr).toHaveLength(4)' },
      { description: 'first value is 1', assertion: 'expect(arr[0]).toBe(1)' },
      { description: 'last value is 4', assertion: 'expect(arr[3]).toBe(4)' },
      { description: 'typeof arr is object', assertion: 'expect(typeof arr).toBe("object")' }
    ],
    tags: [],
  }
]
