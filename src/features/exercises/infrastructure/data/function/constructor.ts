import type { Exercise } from '@/shared/types/exercises'

export const funcConstructorExercises: Exercise[] = [
  {
    slug: 'function-constructor-typeof',
    title: 'Function() — typeof a new Function()',
    description: `## Function constructor

The \`Function\` constructor creates a new \`Function\` object. The result of \`typeof\` a function instance is always \`'function'\`.

**Challenge:** Verify that \`typeof new Function()\` returns \`'function'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'Function',
    initialCode: `function checkFunctionType(): string {
  // Return the typeof a new Function()
}`,
    solution: `function checkFunctionType(): string {
  return typeof new Function()
}`,
    tests: [
      { description: 'returns a string', assertion: "expect(typeof new Function()).toBe('function')" },
      { description: 'new Function() is callable', assertion: "expect(typeof new Function()).toBe('function')" },
      { description: 'result equals function', assertion: "expect(typeof new Function() === 'function').toBe(true)" },
      { description: 'is not object', assertion: "expect(typeof new Function() === 'object').toBe(false)" },
      { description: 'not undefined', assertion: "expect(typeof new Function()).not.toBe('undefined')" },
    ],
    hints: [
      '`new Function()` creates a new function object.',
      '`typeof` a function always returns `\'function\'`.',
    ],
    tags: ['Function', 'constructor', 'typeof', 'beginner'],
  },
  {
    slug: 'function-constructor-dynamic',
    title: 'Function() — dynamic function creation',
    description: `## Function constructor — dynamic code

You can pass parameter names and a body string to \`new Function()\` to create a function dynamically at runtime.

**Challenge:** Create an \`add\` function using \`new Function('a', 'b', 'return a + b')\` and confirm it returns \`5\` for \`add(2, 3)\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'Function',
    initialCode: `function createAddFunction(): (a: number, b: number) => number {
  // Use new Function to create an add function
}`,
    solution: `function createAddFunction(): (a: number, b: number) => number {
  return new Function('a', 'b', 'return a + b') as (a: number, b: number) => number
}`,
    tests: [
      { description: 'add(2, 3) returns 5', assertion: "const add = new Function('a', 'b', 'return a + b'); expect(add(2, 3)).toBe(5)" },
      { description: 'result is 5', assertion: "expect(new Function('a', 'b', 'return a + b')(2, 3) === 5).toBe(true)" },
      { description: 'add(0, 0) returns 0', assertion: "expect(new Function('a', 'b', 'return a + b')(0, 0)).toBe(0)" },
      { description: 'result is a number', assertion: "expect(typeof new Function('a', 'b', 'return a + b')(2, 3)).toBe('number')" },
      { description: 'add(10, 20) returns 30', assertion: "expect(new Function('a', 'b', 'return a + b')(10, 20)).toBe(30)" },
    ],
    hints: [
      '`new Function(param1, param2, ..., body)` creates a function with named params.',
      'The last argument is always the function body as a string.',
    ],
    tags: ['Function', 'constructor', 'dynamic', 'beginner'],
  },
  {
    slug: 'function-constructor-instanceof',
    title: 'Function() — instanceof check',
    description: `## Function constructor — instanceof

Functions created with \`new Function()\` are instances of \`Function\`. This means \`instanceof Function\` returns \`true\`.

**Challenge:** Verify that \`new Function() instanceof Function\` returns \`true\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'Function',
    initialCode: `function checkFunctionInstance(): boolean {
  // Check if new Function() is an instance of Function
}`,
    solution: `function checkFunctionInstance(): boolean {
  return new Function() instanceof Function
}`,
    tests: [
      { description: 'new Function() instanceof Function is true', assertion: 'expect(new Function() instanceof Function).toBe(true)' },
      { description: 'result is boolean', assertion: "expect(typeof (new Function() instanceof Function)).toBe('boolean')" },
      { description: 'is also instanceof Object', assertion: 'expect(new Function() instanceof Object).toBe(true)' },
      { description: 'truthy check', assertion: 'expect(new Function() instanceof Function).toBeTruthy()' },
      { description: 'not null', assertion: 'expect(new Function()).not.toBeNull()' },
    ],
    hints: [
      '`instanceof` checks the prototype chain.',
      'All functions are instances of `Function`.',
    ],
    tags: ['Function', 'constructor', 'instanceof', 'beginner'],
  },
  {
    slug: 'function-constructor-typeof-function',
    title: 'Function — typeof Function itself',
    description: `## typeof Function

\`Function\` (the constructor itself) is a function. \`typeof Function\` returns \`'function'\`.

**Challenge:** Verify that \`typeof Function\` returns \`'function'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Function',
    initialCode: `function checkTypeofFunction(): string {
  // Return typeof Function
}`,
    solution: `function checkTypeofFunction(): string {
  return typeof Function
}`,
    tests: [
      { description: 'typeof Function is function', assertion: "expect(typeof Function).toBe('function')" },
      { description: 'Function is callable', assertion: "expect(typeof Function === 'function').toBe(true)" },
      { description: 'Function is truthy', assertion: 'expect(Function).toBeTruthy()' },
      { description: 'Function is not null', assertion: 'expect(Function).not.toBeNull()' },
      { description: 'Function instanceof Function', assertion: 'expect(Function instanceof Function).toBe(true)' },
    ],
    hints: [
      '`Function` is itself a function — it is its own constructor.',
    ],
    tags: ['Function', 'typeof', 'beginner'],
  },
  {
    slug: 'function-constructor-body-string',
    title: 'Function() — execute body from string',
    description: `## Function constructor — body string

Pass a single body string to \`new Function()\` to create a zero-argument function. Calling it executes the body.

**Challenge:** Verify that \`new Function('return 42')()\` returns \`42\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'Function',
    initialCode: `function createReturns42(): number {
  // Use new Function to create and immediately call a function returning 42
}`,
    solution: `function createReturns42(): number {
  return (new Function('return 42'))()
}`,
    tests: [
      { description: 'returns 42', assertion: "expect(new Function('return 42')()).toBe(42)" },
      { description: 'result is a number', assertion: "expect(typeof new Function('return 42')()).toBe('number')" },
      { description: 'equals 42', assertion: "expect(new Function('return 42')() === 42).toBe(true)" },
      { description: 'is not undefined', assertion: "expect(new Function('return 42')()).not.toBeUndefined()" },
      { description: 'result is truthy', assertion: "expect(new Function('return 42')()).toBeTruthy()" },
    ],
    hints: [
      '`new Function(body)` creates a function with that body.',
      'Call it immediately with `()` to execute it.',
    ],
    tags: ['Function', 'constructor', 'beginner'],
  },
]
