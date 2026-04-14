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
      { description: 'a + b is 3', assertion: 'a + b === 3' },
      { description: 'a is 1', assertion: 'a === 1' },
      { description: 'b is 2', assertion: 'b === 2' },
      { description: 'typeof a is number', assertion: 'typeof a === "number"' },
      { description: 'typeof b is number', assertion: 'typeof b === "number"' }
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
      { description: 'rest is [2,3]', assertion: 'JSON.stringify(rest) === JSON.stringify([2,3])' },
      { description: 'first is 1', assertion: 'first === 1' },
      { description: 'rest length is 2', assertion: 'rest.length === 2' },
      { description: 'typeof rest is object', assertion: 'typeof rest === "object"' },
      { description: 'typeof first is number', assertion: 'typeof first === "number"' }
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
      { description: 'z is 3', assertion: 'z === 3' },
      { description: 'x is 1', assertion: 'x === 1' },
      { description: 'typeof z is number', assertion: 'typeof z === "number"' },
      { description: 'typeof x is number', assertion: 'typeof x === "number"' },
      { description: 'typeof [x, , z] is object', assertion: 'typeof [x, , z] === "object"' }
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
      { description: 'p is "a"', assertion: 'p === "a"' },
      { description: 'q is "b"', assertion: 'q === "b"' },
      { description: 'typeof p is string', assertion: 'typeof p === "string"' },
      { description: 'typeof q is string', assertion: 'typeof q === "string"' },
      { description: 'typeof [p, q] is object', assertion: 'typeof [p, q] === "object"' }
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
      { description: 'h is "h"', assertion: 'h === "h"' },
      { description: 't is ["e","l","l","o"]', assertion: 'JSON.stringify(t) === JSON.stringify(["e","l","l","o"])' },
      { description: 'typeof h is string', assertion: 'typeof h === "string"' },
      { description: 'typeof t is object', assertion: 'typeof t === "object"' },
      { description: 't length is 4', assertion: 't.length === 4' }
    ],
    tags: [],
  }
]
