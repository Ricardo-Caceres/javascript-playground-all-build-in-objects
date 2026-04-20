import type { Exercise } from '@/shared/types/exercises'

export const iteratorDestructuringExercises: Exercise[] = [
  {
    slug: 'iterator-destructuring-basic',
    title: 'Iterator: destructuring basic',
    description: 'Check destructuring with array.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'destructuring',
    initialCode: `const [a, b] = [1, 2];\nconst sum = a + b;`,
    solution: `const [a, b] = [1, 2];\nconst sum = a + b;`,
    tests: [
      { description: 'a + b is 3', assertion: 'expect(a + b).toBe(3)' },
      { description: 'a is 1', assertion: 'expect(a).toBe(1)' },
      { description: 'b is 2', assertion: 'expect(b).toBe(2)' },
      { description: 'typeof a is number', assertion: 'expect(typeof a).toBe("number")' },
      { description: 'typeof b is number', assertion: 'expect(typeof b).toBe("number")' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-destructuring-rest',
    title: 'Iterator: destructuring rest',
    description: 'Check destructuring with rest.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'destructuring',
    initialCode: `const [first, ...rest] = [1,2,3];`,
    solution: `const [first, ...rest] = [1,2,3];`,
    tests: [
      { description: 'rest is [2,3]', assertion: 'expect(rest).toEqual([2,3])' },
      { description: 'first is 1', assertion: 'expect(first).toBe(1)' },
      { description: 'rest length is 2', assertion: 'expect(rest).toHaveLength(2)' },
      { description: 'typeof rest is object', assertion: 'expect(typeof rest).toBe("object")' },
      { description: 'typeof first is number', assertion: 'expect(typeof first).toBe("number")' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-destructuring-skip',
    title: 'Iterator: destructuring skip',
    description: 'Check destructuring with skip.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'destructuring',
    initialCode: `const [x, , z] = [1, 2, 3];`,
    solution: `const [x, , z] = [1, 2, 3];`,
    tests: [
      { description: 'z is 3', assertion: 'expect(z).toBe(3)' },
      { description: 'x is 1', assertion: 'expect(x).toBe(1)' },
      { description: 'typeof z is number', assertion: 'expect(typeof z).toBe("number")' },
      { description: 'typeof x is number', assertion: 'expect(typeof x).toBe("number")' },
      { description: 'typeof [x, , z] is object', assertion: 'expect(typeof [x,,z]).toBe("object")' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-destructuring-generator',
    title: 'Iterator: destructuring generator',
    description: 'Check destructuring with generator.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'destructuring',
    initialCode: `function* gen() { yield 'a'; yield 'b'; }\nconst [p, q] = gen();`,
    solution: `function* gen() { yield 'a'; yield 'b'; }\nconst [p, q] = gen();`,
    tests: [
      { description: 'p is "a"', assertion: 'expect(p).toBe("a")' },
      { description: 'q is "b"', assertion: 'expect(q).toBe("b")' },
      { description: 'typeof p is string', assertion: 'expect(typeof p).toBe("string")' },
      { description: 'typeof q is string', assertion: 'expect(typeof q).toBe("string")' },
      { description: 'typeof [p, q] is object', assertion: 'expect(typeof [p,q]).toBe("object")' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-destructuring-string',
    title: 'Iterator: destructuring string',
    description: 'Check destructuring with string.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'destructuring',
    initialCode: `const [h, ...t] = 'hello';`,
    solution: `const [h, ...t] = 'hello';`,
    tests: [
      { description: 'h is "h"', assertion: 'expect(h).toBe("h")' },
      { description: 't is ["e","l","l","o"]', assertion: 'expect(t).toEqual(["e","l","l","o"])' },
      { description: 'typeof h is string', assertion: 'expect(typeof h).toBe("string")' },
      { description: 'typeof t is object', assertion: 'expect(typeof t).toBe("object")' },
      { description: 't length is 4', assertion: 'expect(t).toHaveLength(4)' }
    ],
    tags: [],
  }
]
