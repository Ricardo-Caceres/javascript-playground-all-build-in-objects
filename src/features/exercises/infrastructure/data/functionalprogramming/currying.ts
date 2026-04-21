import type { Exercise } from '@/shared/types/exercises'

export const fpCurryingExercises: Exercise[] = [
  {
    slug: 'fp-curry-1',
    title: 'Basic currying — manual',
    description: `## Currying Basics

Currying is a technique of translating a function that takes multiple arguments into a sequence of functions that each take a single argument.

**Challenge:** Create a curried \`add\` function using arrow functions. Instead of \`add(a, b)\`, it should be called as \`add(a)(b)\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `const add = (a) => {
  // return a function that takes b
}`,
    solution: `const add = (a) => (b) => a + b`,
    tests: [
      { description: 'add(2)(3) returns 5', assertion: 'const add = (a) => (b) => a + b; expect(add(2)(3)).toBe(5)' },
      { description: 'add(0)(0) returns 0', assertion: 'const add = (a) => (b) => a + b; expect(add(0)(0)).toBe(0)' },
      { description: 'add(10)(-5) returns 5', assertion: 'const add = (a) => (b) => a + b; expect(add(10)(-5)).toBe(5)' },
      { description: 'partial application works', assertion: 'const add = (a) => (b) => a + b; const add5 = add(5); expect(add5(3)).toBe(8)' },
      { description: 'curried add is reusable', assertion: 'const add = (a) => (b) => a + b; const add10 = add(10); expect(add10(5)).toBe(15); expect(add10(20)).toBe(30)' },
    ],
    hints: ['Use arrow functions for concise syntax', 'Return a function that takes b from the outer function', 'Each level of nesting handles one parameter'],
    tags: ['functional', 'currying', 'partial-application'],
    usageExample: {
      code: `const add = a => b => a + b;
add(2)(3); // 5`,
      explanation: {
        en: "Currying converts a multi-argument function into a chain of single-argument functions.",
        es: "Currying convierte una función de múltiples argumentos en una cadena de funciones de un solo argumento.",
      },
    },
  },
  {
    slug: 'fp-curry-2',
    title: 'Partial application with currying',
    description: `## Partial Application

Once a function is curried, you can create specialized versions by "partially applying" some arguments.

**Challenge:** Use a curried \`multiply\` function to create specialized functions like \`double\` and \`triple\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `const multiply = (a) => (b) => a * b

const double = (x) => {
  // create a function that doubles
}

const triple = (x) => {
  // create a function that triples
}`,
    solution: `const multiply = (a) => (b) => a * b

const double = (x) => multiply(2)(x)

const triple = (x) => multiply(3)(x)`,
    tests: [
      { description: 'double(5) returns 10', assertion: 'const multiply = (a) => (b) => a * b; const double = (x) => multiply(2)(x); expect(double(5)).toBe(10)' },
      { description: 'triple(5) returns 15', assertion: 'const multiply = (a) => (b) => a * b; const triple = (x) => multiply(3)(x); expect(triple(5)).toBe(15)' },
      { description: 'double(0) returns 0', assertion: 'const multiply = (a) => (b) => a * b; const double = (x) => multiply(2)(x); expect(double(0)).toBe(0)' },
      { description: 'triple(0) returns 0', assertion: 'const multiply = (a) => (b) => a * b; const triple = (x) => multiply(3)(x); expect(triple(0)).toBe(0)' },
      { description: 'double and triple are reusable across inputs', assertion: 'const multiply = (a) => (b) => a * b; const double = (x) => multiply(2)(x); const triple = (x) => multiply(3)(x); expect(double(4)).toBe(8); expect(triple(4)).toBe(12)' },
    ],
    hints: ['Use the curried multiply function with fixed first argument', 'Pass the specialized multiplier (2 or 3)', 'Partial application reduces function complexity'],
    tags: ['functional', 'currying', 'partial-application', 'specialization'],
    usageExample: {
      code: `const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);
double(5); // 10
triple(5); // 15`,
      explanation: {
        en: "Partial application creates specialized functions by pre-filling one argument.",
        es: "La aplicación parcial crea funciones especializadas prefijando un argumento.",
      },
    },
  },
  {
    slug: 'fp-curry-3',
    title: 'Curry helper function',
    description: `## Creating a Curry Helper

Write a utility function that automatically curries any 2-argument function.

**Challenge:** Implement a \`curry\` function that takes a 2-argument function and returns its curried version.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function curry(fn) {
  // return a curried version of fn
}`,
    solution: `function curry(fn) {
  return (a) => (b) => fn(a, b)
}`,
    tests: [
      { description: 'currying add works', assertion: 'function curry(fn) { return (a) => (b) => fn(a, b) } const add = curry((a, b) => a + b); expect(add(2)(3)).toBe(5)' },
      { description: 'currying multiply works', assertion: 'function curry(fn) { return (a) => (b) => fn(a, b) } const mult = curry((a, b) => a * b); expect(mult(4)(5)).toBe(20)' },
      { description: 'currying concat works', assertion: 'function curry(fn) { return (a) => (b) => fn(a, b) } const concat = curry((a, b) => a + b); expect(concat("hello")(" world")).toBe("hello world")' },
      { description: 'partial application with curried function', assertion: 'function curry(fn) { return (a) => (b) => fn(a, b) } const add = curry((a, b) => a + b); const add10 = add(10); expect(add10(5)).toBe(15)' },
      { description: 'preserves function behavior', assertion: 'function curry(fn) { return (a) => (b) => fn(a, b) } const subtract = curry((a, b) => a - b); expect(subtract(10)(3)).toBe(7)' },
    ],
    hints: ['The curry function returns a function', 'That function returns another function', 'The innermost function calls the original with both arguments'],
    tags: ['functional', 'currying', 'higher-order', 'utility'],
    usageExample: {
      code: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}`,
      explanation: {
        en: "A generic curry() utility auto-curries any function based on its argument count.",
        es: "Una utilidad curry() genérica aplica curry automáticamente a cualquier función según su número de argumentos.",
      },
    },
  },
  {
    slug: 'fp-curry-4',
    title: 'Reusing curried functions',
    description: `## Composing with Curried Functions

Curried functions are powerful when reused in different contexts.

**Challenge:** Create a curried \`power\` function and use it to create \`square\` and \`cube\` functions.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `const power = (exp) => (base) => {
  // compute base to the power of exp
}

const square = (x) => {
  // use power to square x
}

const cube = (x) => {
  // use power to cube x
}`,
    solution: `const power = (exp) => (base) => Math.pow(base, exp)

const square = (x) => power(2)(x)

const cube = (x) => power(3)(x)`,
    tests: [
      { description: 'square(5) returns 25', assertion: 'const power = (exp) => (base) => Math.pow(base, exp); const square = (x) => power(2)(x); expect(square(5)).toBe(25)' },
      { description: 'cube(3) returns 27', assertion: 'const power = (exp) => (base) => Math.pow(base, exp); const cube = (x) => power(3)(x); expect(cube(3)).toBe(27)' },
      { description: 'square(0) returns 0', assertion: 'const power = (exp) => (base) => Math.pow(base, exp); const square = (x) => power(2)(x); expect(square(0)).toBe(0)' },
      { description: 'square(1) returns 1', assertion: 'const power = (exp) => (base) => Math.pow(base, exp); const square = (x) => power(2)(x); expect(square(1)).toBe(1)' },
      { description: 'both functions work consistently', assertion: 'const power = (exp) => (base) => Math.pow(base, exp); const square = (x) => power(2)(x); const cube = (x) => power(3)(x); expect(square(2)).toBe(4); expect(cube(2)).toBe(8)' },
    ],
    hints: ['Use Math.pow for exponentiation', 'power(2) creates a square function', 'power(3) creates a cube function'],
    tags: ['functional', 'currying', 'partial-application', 'math'],
    usageExample: {
      code: `const log = level => msg => '[' + level + '] ' + msg;
const warn = log('WARN');
warn('Low memory'); // '[WARN] Low memory'`,
      explanation: {
        en: "Curried loggers let you partially apply the log level for reuse throughout the codebase.",
        es: "Los loggers con curry permiten aplicar parcialmente el nivel de log para reutilizarlo.",
      },
    },
  },
  {
    slug: 'fp-curry-5',
    title: 'Currying 3-argument functions',
    description: `## Advanced Currying

Currying can be extended to functions with more than 2 arguments.

**Challenge:** Implement a curried \`sum3\` function that adds three numbers when called as \`sum3(a)(b)(c)\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FunctionalProgramming',
    initialCode: `const sum3 = (a) => {
  // return function that takes b
}`,
    solution: `const sum3 = (a) => (b) => (c) => a + b + c`,
    tests: [
      { description: 'sum3(1)(2)(3) returns 6', assertion: 'const sum3 = (a) => (b) => (c) => a + b + c; expect(sum3(1)(2)(3)).toBe(6)' },
      { description: 'sum3(0)(0)(0) returns 0', assertion: 'const sum3 = (a) => (b) => (c) => a + b + c; expect(sum3(0)(0)(0)).toBe(0)' },
      { description: 'sum3(5)(10)(15) returns 30', assertion: 'const sum3 = (a) => (b) => (c) => a + b + c; expect(sum3(5)(10)(15)).toBe(30)' },
      { description: 'partial application with 2 args', assertion: 'const sum3 = (a) => (b) => (c) => a + b + c; const sum1and2 = sum3(1)(2); expect(sum1and2(3)).toBe(6)' },
      { description: 'partial application with 1 arg', assertion: 'const sum3 = (a) => (b) => (c) => a + b + c; const sum1 = sum3(5); expect(sum1(10)(15)).toBe(30)' },
    ],
    hints: ['Each parameter level returns a function', 'Three parameters means three nested arrow functions', 'The innermost function performs the addition'],
    tags: ['functional', 'currying', 'advanced', 'multi-arg'],
    usageExample: {
      code: `const add = a => b => a + b;
const add10 = add(10);
[1, 2, 3].map(add10); // [11, 12, 13]`,
      explanation: {
        en: "Partially applied functions work directly as callbacks in array methods.",
        es: "Las funciones aplicadas parcialmente funcionan directamente como callbacks en métodos de array.",
      },
    },
  },
]
