import type { Exercise } from '@/shared/types/exercises'

export const fpCompositionExercises: Exercise[] = [
  {
    slug: 'fp-compose-1',
    title: 'Function composition — manual',
    description: `## Function Composition Basics

Function composition combines simple functions into more complex ones by nesting function calls.

**Challenge:** Given two functions \`add1(x)\` and \`double(x)\`, compose them manually to create a function that adds 1 then doubles the result.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `const add1 = (x) => x + 1
const double = (x) => x * 2

function composed(x) {
  // compose: add 1, then double
}`,
    solution: `const add1 = (x) => x + 1
const double = (x) => x * 2

function composed(x) {
  return double(add1(x))
}`,
    tests: [
      { description: 'composed(5) returns 12', assertion: 'const add1 = (x) => x + 1; const double = (x) => x * 2; function composed(x) { return double(add1(x)) } expect(composed(5)).toBe(12)' },
      { description: 'composed(0) returns 2', assertion: 'const add1 = (x) => x + 1; const double = (x) => x * 2; function composed(x) { return double(add1(x)) } expect(composed(0)).toBe(2)' },
      { description: 'composed(3) returns 8', assertion: 'const add1 = (x) => x + 1; const double = (x) => x * 2; function composed(x) { return double(add1(x)) } expect(composed(3)).toBe(8)' },
      { description: 'composition order matters', assertion: 'const add1 = (x) => x + 1; const double = (x) => x * 2; function composed(x) { return double(add1(x)) } function reversed(x) { return add1(double(x)) } expect(composed(5)).toBe(12); expect(reversed(5)).toBe(11)' },
      { description: 'works with negative inputs', assertion: 'const add1 = (x) => x + 1; const double = (x) => x * 2; function composed(x) { return double(add1(x)) } expect(composed(-3)).toBe(-4)' },
    ],
    hints: ['Call the first function, pass its result to the second', 'Composition reads right-to-left (innermost first)', 'Order of function application matters'],
    tags: ['functional', 'composition', 'function-chaining'],
    usageExample: {
      code: `const add1 = x => x + 1;
const double = x => x * 2;
const result = double(add1(3)); // 8`,
      explanation: {
        en: "Function composition chains functions so the output of one feeds into the next.",
        es: "La composición de funciones encadena funciones para que la salida de una alimente a la siguiente.",
      },
    },
  },
  {
    slug: 'fp-compose-2',
    title: 'Pipe — left-to-right composition',
    description: `## Pipe Function

A pipe function applies functions left-to-right, making compositions easier to read.

**Challenge:** Implement a \`pipe\` utility that takes multiple functions and returns a new function applying them left-to-right.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function pipe(...fns) {
  // return a function that applies fns left-to-right
}

const add1 = (x) => x + 1
const double = (x) => x * 2
const piped = pipe(add1, double)`,
    solution: `function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

const add1 = (x) => x + 1
const double = (x) => x * 2
const piped = pipe(add1, double)`,
    tests: [
      { description: 'pipe applies functions left-to-right', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const piped = pipe(add1, double); expect(piped(5)).toBe(12)' },
      { description: 'pipe with single function', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const double = (x) => x * 2; const p = pipe(double); expect(p(5)).toBe(10)' },
      { description: 'pipe with three functions', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const square = (x) => x * x; const p = pipe(add1, double, square); expect(p(2)).toBe(36)' },
      { description: 'pipe with empty function list', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const p = pipe(); expect(p(42)).toBe(42)' },
      { description: 'pipe creates reusable pipeline', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const p = pipe(add1, double); expect(p(3)).toBe(8); expect(p(5)).toBe(12)' },
    ],
    hints: ['Use reduce to chain function applications', 'Start with initial value x', 'Each result becomes input to next function'],
    tags: ['functional', 'composition', 'pipe', 'left-to-right'],
    usageExample: {
      code: `const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const process = pipe(x => x + 1, x => x * 2, x => x + 1);
process(3); // (3+1)*2+1 = 9`,
      explanation: {
        en: "pipe() applies functions left-to-right — the natural reading order.",
        es: "pipe() aplica funciones de izquierda a derecha — el orden de lectura natural.",
      },
    },
  },
  {
    slug: 'fp-compose-3',
    title: 'Compose — right-to-left composition',
    description: `## Compose Function

A compose function is the traditional approach, applying functions right-to-left (mathematical notation).

**Challenge:** Implement a \`compose\` utility that takes multiple functions and returns a new function applying them right-to-left.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function compose(...fns) {
  // return a function that applies fns right-to-left
}

const add1 = (x) => x + 1
const double = (x) => x * 2
const composed = compose(double, add1)`,
    solution: `function compose(...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x)
}

const add1 = (x) => x + 1
const double = (x) => x * 2
const composed = compose(double, add1)`,
    tests: [
      { description: 'compose applies functions right-to-left', assertion: 'function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const c = compose(double, add1); expect(c(5)).toBe(12)' },
      { description: 'compose order is opposite of manual nesting', assertion: 'function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const c = compose(add1, double); expect(c(5)).toBe(11)' },
      { description: 'compose with three functions', assertion: 'function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const square = (x) => x * x; const c = compose(square, double, add1); expect(c(2)).toBe(36)' },
      { description: 'compose with single function', assertion: 'function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const double = (x) => x * 2; const c = compose(double); expect(c(5)).toBe(10)' },
      { description: 'compose is reusable', assertion: 'function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const add1 = (x) => x + 1; const double = (x) => x * 2; const c = compose(double, add1); expect(c(3)).toBe(8); expect(c(5)).toBe(12)' },
    ],
    hints: ['Use reduceRight to reverse order', 'reduceRight processes from right to left', 'Same as mathematical function composition'],
    tags: ['functional', 'composition', 'compose', 'right-to-left'],
    usageExample: {
      code: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const double = x => x * 2;
const add1 = x => x + 1;
const process = compose(add1, double);
process(3); // double runs first: 3*2+1 = 7`,
      explanation: {
        en: "compose() applies functions right-to-left — mathematical composition order.",
        es: "compose() aplica funciones de derecha a izquierda — orden de composición matemática.",
      },
    },
  },
  {
    slug: 'fp-compose-4',
    title: 'Pipe three functions',
    description: `## Multi-function Pipeline

Chain three functions together using pipe.

**Challenge:** Use pipe to compose three functions: \`add2(x)\`, \`square(x)\`, and \`subtract10(x)\` in that order.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

const add2 = (x) => x + 2
const square = (x) => x * x
const subtract10 = (x) => x - 10

const pipeline = pipe(add2, square, subtract10)`,
    solution: `function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

const add2 = (x) => x + 2
const square = (x) => x * x
const subtract10 = (x) => x - 10

const pipeline = pipe(add2, square, subtract10)`,
    tests: [
      { description: 'pipeline(3) correctly chains functions', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add2 = (x) => x + 2; const square = (x) => x * x; const subtract10 = (x) => x - 10; const p = pipe(add2, square, subtract10); expect(p(3)).toBe(15)' },
      { description: 'pipeline(0) returns -10', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add2 = (x) => x + 2; const square = (x) => x * x; const subtract10 = (x) => x - 10; const p = pipe(add2, square, subtract10); expect(p(0)).toBe(-10)' },
      { description: 'pipeline(1) returns -9', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add2 = (x) => x + 2; const square = (x) => x * x; const subtract10 = (x) => x - 10; const p = pipe(add2, square, subtract10); expect(p(1)).toBe(-9)' },
      { description: 'manual computation matches pipeline', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add2 = (x) => x + 2; const square = (x) => x * x; const subtract10 = (x) => x - 10; const manual = subtract10(square(add2(2))); const p = pipe(add2, square, subtract10); expect(p(2)).toBe(manual)' },
      { description: 'pipeline is deterministic', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } const add2 = (x) => x + 2; const square = (x) => x * x; const subtract10 = (x) => x - 10; const p = pipe(add2, square, subtract10); expect(p(5)).toBe(p(5))' },
    ],
    hints: ['Add 2, then square, then subtract 10', 'Order is left-to-right', 'Each output becomes the next input'],
    tags: ['functional', 'composition', 'pipe', 'multi-function'],
    usageExample: {
      code: `const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const trim = s => s.trim();
const toLower = s => s.toLowerCase();
const process = pipe(trim, toLower);
process('  Hello  '); // 'hello'`,
      explanation: {
        en: "Pipe functions to build a clean data-transformation pipeline.",
        es: "Encadena funciones para construir un pipeline de transformación de datos limpio.",
      },
    },
  },
  {
    slug: 'fp-compose-5',
    title: 'Compose vs pipe equivalence',
    description: `## Comparing Compose and Pipe

Compose and pipe do the same thing but in opposite orders. Their composed results should be equivalent when used correctly.

**Challenge:** Prove that \`compose(f, g)(x)\` equals \`pipe(g, f)(x)\` by implementing both and testing their equivalence.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FunctionalProgramming',
    initialCode: `function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

function compose(...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x)
}

const double = (x) => x * 2
const add5 = (x) => x + 5

// compose applies right-to-left
const composed = compose(double, add5)

// pipe applies left-to-right, but args reversed
const piped = pipe(add5, double)`,
    solution: `function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x)
}

function compose(...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x)
}

const double = (x) => x * 2
const add5 = (x) => x + 5

// compose applies right-to-left
const composed = compose(double, add5)

// pipe applies left-to-right, but args reversed
const piped = pipe(add5, double)`,
    tests: [
      { description: 'compose and pipe produce same results', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const double = (x) => x * 2; const add5 = (x) => x + 5; const c = compose(double, add5); const p = pipe(add5, double); expect(c(3)).toBe(p(3))' },
      { description: 'both return 16 for input 3', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const double = (x) => x * 2; const add5 = (x) => x + 5; const c = compose(double, add5); const p = pipe(add5, double); expect(c(3)).toBe(16); expect(p(3)).toBe(16)' },
      { description: 'equivalence holds for multiple inputs', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const double = (x) => x * 2; const add5 = (x) => x + 5; const c = compose(double, add5); const p = pipe(add5, double); expect(c(1)).toBe(p(1)); expect(c(10)).toBe(p(10))' },
      { description: 'both apply add5 then double', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const double = (x) => x * 2; const add5 = (x) => x + 5; const c = compose(double, add5); const manual = double(add5(5)); expect(c(5)).toBe(manual)' },
      { description: 'order reversal makes equivalence', assertion: 'function pipe(...fns) { return (x) => fns.reduce((v, f) => f(v), x) } function compose(...fns) { return (x) => fns.reduceRight((v, f) => f(v), x) } const add1 = (x) => x + 1; const mult2 = (x) => x * 2; expect(compose(mult2, add1)(7)).toBe(pipe(add1, mult2)(7))' },
    ],
    hints: ['compose(f, g) reads right-to-left: apply g first, then f', 'pipe(g, f) reads left-to-right: apply g first, then f', 'They are mirrors of each other'],
    tags: ['functional', 'composition', 'pipe', 'compose', 'equivalence'],
    usageExample: {
      code: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// compose(g, h)(x) === pipe(h, g)(x)`,
      explanation: {
        en: "compose(g, h) and pipe(h, g) produce the same result — they differ only in order.",
        es: "compose(g, h) y pipe(h, g) producen el mismo resultado — solo difieren en el orden.",
      },
    },
  },
]
