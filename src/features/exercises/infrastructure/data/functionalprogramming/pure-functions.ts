import type { Exercise } from '@/shared/types/exercises'

export const fpPureFunctionsExercises: Exercise[] = [
  {
    slug: 'fp-pure-1',
    title: 'Pure add function',
    description: `## Pure Functions

A pure function always returns the same output for the same input and has no side effects. It doesn't modify external state or depend on it.

**Challenge:** Implement a pure \`add\` function that takes two numbers and returns their sum.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function add(a, b) {
  // return sum
}`,
    solution: `function add(a, b) {
  return a + b
}`,
    tests: [
      { description: 'add(2, 3) returns 5', assertion: 'function add(a, b) { return a + b } expect(add(2, 3)).toBe(5)' },
      { description: 'add(0, 0) returns 0', assertion: 'function add(a, b) { return a + b } expect(add(0, 0)).toBe(0)' },
      { description: 'add(-1, 1) returns 0', assertion: 'function add(a, b) { return a + b } expect(add(-1, 1)).toBe(0)' },
      { description: 'add(10, -5) returns 5', assertion: 'function add(a, b) { return a + b } expect(add(10, -5)).toBe(5)' },
      { description: 'same input always gives same output', assertion: 'function add(a, b) { return a + b } expect(add(7, 3)).toBe(add(7, 3))' },
    ],
    hints: ['Pure functions have no side effects', 'Same input always gives same output', 'No external state manipulation'],
    tags: ['functional', 'pure', 'add', 'basic'],
    usageExample: {
      code: `function add(a, b) { return a + b; }
add(2, 3); // always 5 — no side effects`,
      explanation: {
        en: "A pure function always returns the same output for the same input and has no side effects.",
        es: "Una función pura siempre devuelve la misma salida para la misma entrada y no tiene efectos secundarios.",
      },
    },
  },
  {
    slug: 'fp-pure-2',
    title: 'Pure double function',
    description: `## Pure Function — Double

Create a pure function that doubles a number without modifying any external state.

**Challenge:** Implement a \`double\` function that takes a number and returns it multiplied by 2.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function double(x) {
  // return doubled value
}`,
    solution: `function double(x) {
  return x * 2
}`,
    tests: [
      { description: 'double(5) returns 10', assertion: 'function double(x) { return x * 2 } expect(double(5)).toBe(10)' },
      { description: 'double(0) returns 0', assertion: 'function double(x) { return x * 2 } expect(double(0)).toBe(0)' },
      { description: 'double(-3) returns -6', assertion: 'function double(x) { return x * 2 } expect(double(-3)).toBe(-6)' },
      { description: 'double(0.5) returns 1', assertion: 'function double(x) { return x * 2 } expect(double(0.5)).toBe(1)' },
      { description: 'repeated calls with same input give same result', assertion: 'function double(x) { return x * 2 } expect(double(7)).toBe(double(7))' },
    ],
    hints: ['Use multiplication operator', 'Pure functions are predictable', 'No side effects allowed'],
    tags: ['functional', 'pure', 'multiply', 'deterministic'],
    usageExample: {
      code: `function double(n) { return n * 2; }
double(5); // 10
double(5); // 10 — deterministic`,
      explanation: {
        en: "Pure functions are deterministic — calling them again with the same args gives the same result.",
        es: "Las funciones puras son deterministas — llamarlas de nuevo con los mismos args da el mismo resultado.",
      },
    },
  },
  {
    slug: 'fp-pure-3',
    title: 'Pure vs impure — array operations',
    description: `## Distinguishing Pure and Impure Functions

Learn to identify pure functions by checking whether they modify their inputs or depend on external state.

**Challenge:** Create a pure version of array transformation. Given an array, return a new array with each element doubled without modifying the original.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function pureDoubleArray(arr) {
  // return new array with each element doubled
  // do NOT modify original arr
}`,
    solution: `function pureDoubleArray(arr) {
  return arr.map(x => x * 2)
}`,
    tests: [
      { description: 'returns new array with doubled values', assertion: 'function pureDoubleArray(arr) { return arr.map(x => x * 2) } expect(pureDoubleArray([1, 2, 3])).toEqual([2, 4, 6])' },
      { description: 'original array is not modified', assertion: 'function pureDoubleArray(arr) { return arr.map(x => x * 2) } const orig = [1, 2, 3]; pureDoubleArray(orig); expect(orig).toEqual([1, 2, 3])' },
      { description: 'works with empty array', assertion: 'function pureDoubleArray(arr) { return arr.map(x => x * 2) } expect(pureDoubleArray([])).toEqual([])' },
      { description: 'works with negative numbers', assertion: 'function pureDoubleArray(arr) { return arr.map(x => x * 2) } expect(pureDoubleArray([-1, -2])).toEqual([-2, -4])' },
      { description: 'works with mixed positive and negative', assertion: 'function pureDoubleArray(arr) { return arr.map(x => x * 2) } expect(pureDoubleArray([1, -2, 3])).toEqual([2, -4, 6])' },
    ],
    hints: ['Use .map() to create a new array', 'Never modify the input array', 'Pure functions should not have side effects'],
    tags: ['functional', 'pure', 'array', 'immutable'],
    usageExample: {
      code: `// Pure: returns new array
const pureAdd = (arr, item) => [...arr, item];
// Impure: mutates original
const impureAdd = (arr, item) => { arr.push(item); };`,
      explanation: {
        en: "Pure functions avoid mutating arguments — return new values instead.",
        es: "Las funciones puras evitan mutar argumentos — devuelven nuevos valores en su lugar.",
      },
    },
  },
  {
    slug: 'fp-pure-4',
    title: 'Pure function — referential transparency',
    description: `## Referential Transparency

A hallmark of pure functions is referential transparency: you can replace a function call with its return value without changing program behavior.

**Challenge:** Implement a pure \`multiply\` function and verify that calling it multiple times with the same inputs always produces identical results.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function multiply(a, b) {
  // implement multiply
}`,
    solution: `function multiply(a, b) {
  return a * b
}`,
    tests: [
      { description: 'multiply(3, 4) returns 12', assertion: 'function multiply(a, b) { return a * b } expect(multiply(3, 4)).toBe(12)' },
      { description: 'multiple calls with same args return same value', assertion: 'function multiply(a, b) { return a * b } expect(multiply(5, 6)).toBe(multiply(5, 6))' },
      { description: 'result is deterministic', assertion: 'function multiply(a, b) { return a * b } const r1 = multiply(7, 8); const r2 = multiply(7, 8); expect(r1 === r2).toBeTruthy()' },
      { description: 'multiply by 0 returns 0', assertion: 'function multiply(a, b) { return a * b } expect(multiply(100, 0)).toBe(0)' },
      { description: 'multiply by 1 returns original', assertion: 'function multiply(a, b) { return a * b } expect(multiply(42, 1)).toBe(42)' },
    ],
    hints: ['Pure functions have no randomness', 'No reliance on external state', 'Outputs are completely predictable'],
    tags: ['functional', 'pure', 'referential-transparency', 'deterministic'],
    usageExample: {
      code: `function square(n) { return n * n; }
const result = square(4); // 16
// Anywhere you see square(4), you can replace it with 16`,
      explanation: {
        en: "Referential transparency means you can replace a call with its return value everywhere.",
        es: "La transparencia referencial significa que puedes reemplazar una llamada con su valor de retorno.",
      },
    },
  },
  {
    slug: 'fp-pure-5',
    title: 'Pure function composition',
    description: `## Composing Pure Functions

One benefit of pure functions is that they compose reliably. You can chain them together without worrying about side effects.

**Challenge:** Compose two pure functions: \`add(a, b)\` and \`double(x)\`. Implement \`addThenDouble\` which takes two numbers, adds them, then doubles the result.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FunctionalProgramming',
    initialCode: `function add(a, b) {
  return a + b
}

function double(x) {
  return x * 2
}

function addThenDouble(a, b) {
  // compose add and double
}`,
    solution: `function add(a, b) {
  return a + b
}

function double(x) {
  return x * 2
}

function addThenDouble(a, b) {
  return double(add(a, b))
}`,
    tests: [
      { description: 'add(2, 3) then double returns 10', assertion: 'function add(a, b) { return a + b } function double(x) { return x * 2 } function addThenDouble(a, b) { return double(add(a, b)) } expect(addThenDouble(2, 3)).toBe(10)' },
      { description: 'add(5, 5) then double returns 20', assertion: 'function add(a, b) { return a + b } function double(x) { return x * 2 } function addThenDouble(a, b) { return double(add(a, b)) } expect(addThenDouble(5, 5)).toBe(20)' },
      { description: 'add(0, 1) then double returns 2', assertion: 'function add(a, b) { return a + b } function double(x) { return x * 2 } function addThenDouble(a, b) { return double(add(a, b)) } expect(addThenDouble(0, 1)).toBe(2)' },
      { description: 'add(-1, -1) then double returns -4', assertion: 'function add(a, b) { return a + b } function double(x) { return x * 2 } function addThenDouble(a, b) { return double(add(a, b)) } expect(addThenDouble(-1, -1)).toBe(-4)' },
      { description: 'composition is pure and deterministic', assertion: 'function add(a, b) { return a + b } function double(x) { return x * 2 } function addThenDouble(a, b) { return double(add(a, b)) } expect(addThenDouble(3, 7)).toBe(addThenDouble(3, 7))' },
    ],
    hints: ['Call add() first with both arguments', 'Pass the result of add() to double()', 'Composition of pure functions is also pure'],
    tags: ['functional', 'pure', 'composition', 'advanced'],
    usageExample: {
      code: `const add = a => b => a + b;
const double = x => x * 2;
const addThenDouble = x => double(add(0)(x));
addThenDouble(5); // 10`,
      explanation: {
        en: "Pure functions compose cleanly because they're self-contained with no hidden state.",
        es: "Las funciones puras se componen limpiamente porque son autocontenidas sin estado oculto.",
      },
    },
  },
]
