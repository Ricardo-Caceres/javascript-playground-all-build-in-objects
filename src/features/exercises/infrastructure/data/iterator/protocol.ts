import type { Exercise } from '@/shared/types/exercises'

export const iteratorProtocolExercises: Exercise[] = [
  {
    slug: 'iterator-protocol-array',
    title: 'Iterator Protocol: Array',
    description: 'Check that Array[Symbol.iterator]() returns correct values.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'Symbol.iterator',
    initialCode: `const it = [1,2,3][Symbol.iterator]();\nconst first = it.next();`,
    solution: `const it = [1,2,3][Symbol.iterator]();\nconst first = it.next();`,
    tests: [
      { description: 'first value is 1', assertion: 'it.next().value === 1' },
      { description: 'first done is false', assertion: 'it.next().done === false' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-protocol-string',
    title: 'Iterator Protocol: String',
    description: 'Check that String[Symbol.iterator]() returns correct values.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'Symbol.iterator',
    initialCode: `const it = 'ab'[Symbol.iterator]();\nit.next();\nconst second = it.next().value;`,
    solution: `const it = 'ab'[Symbol.iterator]();\nit.next();\nconst second = it.next().value;`,
    tests: [
      { description: 'second value is b', assertion: 'it.next(); it.next().value === "b"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' },
      { description: 'typeof it.throw is function', assertion: 'typeof it.throw === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-protocol-set',
    title: 'Iterator Protocol: Set',
    description: 'Check that Set[Symbol.iterator]() returns correct values.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'Symbol.iterator',
    initialCode: `const it = new Set([1,2])[Symbol.iterator]();\nconst first = it.next().value;`,
    solution: `const it = new Set([1,2])[Symbol.iterator]();\nconst first = it.next().value;`,
    tests: [
      { description: 'first value is 1', assertion: 'it.next().value === 1' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' },
      { description: 'typeof it.throw is function', assertion: 'typeof it.throw === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-protocol-map',
    title: 'Iterator Protocol: Map',
    description: 'Check that Map[Symbol.iterator]() returns correct values.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'Symbol.iterator',
    initialCode: `const it = new Map([['a',1]])[Symbol.iterator]();\nconst first = it.next().value;`,
    solution: `const it = new Map([['a',1]])[Symbol.iterator]();\nconst first = it.next().value;`,
    tests: [
      { description: 'first value is ["a",1]', assertion: 'JSON.stringify(it.next().value) === JSON.stringify(["a",1])' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' },
      { description: 'typeof it.throw is function', assertion: 'typeof it.throw === "function"' }
    ],
    tags: [],
  },
  {
    slug: 'iterator-protocol-done',
    title: 'Iterator Protocol: done',
    description: 'Check that done is true after iteration.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Iterator',
    method: 'Symbol.iterator',
    initialCode: `const it = [1][Symbol.iterator]();\nit.next();\nconst done = it.next().done;`,
    solution: `const it = [1][Symbol.iterator]();\nit.next();\nconst done = it.next().done;`,
    tests: [
      { description: 'done is true after iteration', assertion: 'it.next(); it.next().done === true' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' },
      { description: 'typeof it.throw is function', assertion: 'typeof it.throw === "function"' }
    ],
    tags: [],
  }
]
