import type { Exercise } from '@/shared/types/exercises'

export const funcBindExercises: Exercise[] = [
  {
    slug: 'function-bind-this',
    title: 'Function.prototype.bind() — bind this',
    description: `## fn.bind(thisArg)

\`bind()\` returns a **new function** with \`this\` permanently set to the provided value.

**Challenge:** Use \`greet.bind({name: 'Bob'})\` and verify the bound function returns \`'Bob'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'bind',
    initialCode: `function createBoundGreet(): () => string {
  function greet(this: { name: string }) { return this.name }
  // Return greet bound to { name: 'Bob' }
}`,
    solution: `function createBoundGreet(): () => string {
  function greet(this: { name: string }) { return this.name }
  return greet.bind({ name: 'Bob' })
}`,
    tests: [
      { description: 'bound function returns Bob', assertion: "function greet() { return this.name; } const g = greet.bind({name:'Bob'}); expect(g()).toBe('Bob')" },
      { description: 'result is string', assertion: "function greet() { return this.name; } const g = greet.bind({name:'Bob'}); expect(typeof g()).toBe('string')" },
      { description: 'result equals Bob', assertion: "function greet() { return this.name; } expect(greet.bind({name:'Bob'})() === 'Bob').toBe(true)" },
      { description: 'result is truthy', assertion: "function greet() { return this.name; } expect(greet.bind({name:'Bob'})()).toBeTruthy()" },
      { description: 'works with other names', assertion: "function greet() { return this.name; } expect(greet.bind({name:'Carol'})()).toBe('Carol')" },
    ],
    hints: [
      '`bind()` returns a new function — you must call it separately.',
      'The bound `this` cannot be changed by `call` or `apply`.',
    ],
    tags: ['Function', 'bind', 'this', 'beginner'],
  },
  {
    slug: 'function-bind-partial-application',
    title: 'Function.prototype.bind() — partial application',
    description: `## bind() for partial application

Arguments passed to \`bind()\` after \`thisArg\` are prepended when calling the bound function.

**Challenge:** Use \`add.bind(null, 5)\` to create \`add5\` and verify \`add5(3) === 8\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'bind',
    initialCode: `function createAdd5(): (b: number) => number {
  function add(a: number, b: number) { return a + b }
  // Return add with 5 pre-bound as the first argument
}`,
    solution: `function createAdd5(): (b: number) => number {
  function add(a: number, b: number) { return a + b }
  return add.bind(null, 5)
}`,
    tests: [
      { description: 'add5(3) returns 8', assertion: 'function add(a, b) { return a + b; } const add5 = add.bind(null, 5); expect(add5(3)).toBe(8)' },
      { description: 'result is number', assertion: "function add(a, b) { return a + b; } const add5 = add.bind(null, 5); expect(typeof add5(3)).toBe('number')" },
      { description: 'add5(0) returns 5', assertion: 'function add(a, b) { return a + b; } const add5 = add.bind(null, 5); expect(add5(0)).toBe(5)' },
      { description: 'add5(10) returns 15', assertion: 'function add(a, b) { return a + b; } const add5 = add.bind(null, 5); expect(add5(10)).toBe(15)' },
      { description: 'bound fn is truthy', assertion: 'function add(a, b) { return a + b; } expect(add.bind(null, 5)).toBeTruthy()' },
    ],
    hints: [
      'Arguments after `thisArg` in `bind()` are partially applied.',
    ],
    tags: ['Function', 'bind', 'partial application', 'intermediate'],
  },
  {
    slug: 'function-bind-returns-function',
    title: 'Function.prototype.bind() — returns a function',
    description: `## bind() returns a function

\`bind()\` always returns a new function regardless of the original function. \`typeof\` the result is \`'function'\`.

**Challenge:** Verify that \`typeof greet.bind({})\` returns \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'bind',
    initialCode: `function checkBindType(): string {
  function greet() { return 'hello' }
  // Return typeof greet.bind({})
}`,
    solution: `function checkBindType(): string {
  function greet() { return 'hello' }
  return typeof greet.bind({})
}`,
    tests: [
      { description: 'typeof bind result is function', assertion: "function greet() { return 'hello'; } expect(typeof greet.bind({})).toBe('function')" },
      { description: 'bind result is truthy', assertion: "function greet() { return 'hello'; } expect(greet.bind({})).toBeTruthy()" },
      { description: 'bind result is not null', assertion: "function greet() { return 'hello'; } expect(greet.bind({})).not.toBeNull()" },
      { description: 'bind result is not undefined', assertion: "function greet() { return 'hello'; } expect(greet.bind({})).not.toBeUndefined()" },
      { description: 'bound fn is callable', assertion: "function greet() { return 'hello'; } expect(typeof greet.bind({}) === 'function').toBe(true)" },
    ],
    hints: [
      '`bind()` always returns a new function object.',
    ],
    tags: ['Function', 'bind', 'typeof', 'beginner'],
  },
  {
    slug: 'function-bind-multiply-double',
    title: 'Function.prototype.bind() — create double()',
    description: `## bind() to create specialized functions

Bind the first argument of \`multiply\` to \`2\` to create a \`double\` function.

**Challenge:** Use \`multiply.bind(null, 2)\` to create \`double\` and verify \`double(4) === 8\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Function',
    method: 'bind',
    initialCode: `function createDouble(): (n: number) => number {
  function multiply(a: number, b: number) { return a * b }
  // Return multiply bound with 2 as first arg
}`,
    solution: `function createDouble(): (n: number) => number {
  function multiply(a: number, b: number) { return a * b }
  return multiply.bind(null, 2)
}`,
    tests: [
      { description: 'double(4) returns 8', assertion: 'function multiply(a, b) { return a * b; } const double = multiply.bind(null, 2); expect(double(4)).toBe(8)' },
      { description: 'double(1) returns 2', assertion: 'function multiply(a, b) { return a * b; } const double = multiply.bind(null, 2); expect(double(1)).toBe(2)' },
      { description: 'double(0) returns 0', assertion: 'function multiply(a, b) { return a * b; } const double = multiply.bind(null, 2); expect(double(0)).toBe(0)' },
      { description: 'result is number', assertion: "function multiply(a, b) { return a * b; } const double = multiply.bind(null, 2); expect(typeof double(4)).toBe('number')" },
      { description: 'result is truthy', assertion: 'function multiply(a, b) { return a * b; } const double = multiply.bind(null, 2); expect(double(4)).toBeTruthy()' },
    ],
    hints: [
      'Partial application with `bind` creates specialized functions from general ones.',
    ],
    tags: ['Function', 'bind', 'partial application', 'intermediate'],
  },
  {
    slug: 'function-bind-bound-this-x',
    title: 'Function.prototype.bind() — bound this.x',
    description: `## bind() — accessing this.x

When a function references \`this.x\`, binding it to an object with \`x: 42\` ensures it always returns \`42\`.

**Challenge:** Bind \`fn\` to \`{x: 42}\` and verify \`bound()\` returns \`42\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Function',
    method: 'bind',
    initialCode: `function createBoundX(): () => number {
  const fn = function(this: { x: number }) { return this.x }
  // Return fn bound to { x: 42 }
}`,
    solution: `function createBoundX(): () => number {
  const fn = function(this: { x: number }) { return this.x }
  return fn.bind({ x: 42 })
}`,
    tests: [
      { description: 'bound() returns 42', assertion: 'const fn = function() { return this.x; }; const bound = fn.bind({x:42}); expect(bound()).toBe(42)' },
      { description: 'result equals 42', assertion: 'const fn = function() { return this.x; }; expect(fn.bind({x:42})() === 42).toBe(true)' },
      { description: 'result is number', assertion: "const fn = function() { return this.x; }; expect(typeof fn.bind({x:42})()).toBe('number')" },
      { description: 'result is truthy', assertion: 'const fn = function() { return this.x; }; expect(fn.bind({x:42})()).toBeTruthy()' },
      { description: 'bind({x:0}) returns 0', assertion: 'const fn = function() { return this.x; }; expect(fn.bind({x:0})()).toBe(0)' },
    ],
    hints: [
      '`this.x` resolves to the bound context\'s `x` property.',
    ],
    tags: ['Function', 'bind', 'this', 'beginner'],
  },
]
