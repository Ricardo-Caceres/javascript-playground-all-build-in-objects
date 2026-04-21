import type { Exercise } from '@/shared/types/exercises'

export const fpHigherOrderExercises: Exercise[] = [
  {
    slug: 'fp-higher-1',
    title: 'Custom map — higher-order function',
    description: `## Higher-Order Functions

Higher-order functions accept other functions as arguments or return functions.

**Challenge:** Implement \`myMap\` that takes an array and a function, applies the function to each element, and returns a new array with the results.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function myMap(arr, fn) {
  // apply fn to each element
  // return new array
}`,
    solution: `function myMap(arr, fn) {
  return arr.reduce((acc, x) => [...acc, fn(x)], [])
}`,
    tests: [
      { description: 'myMap doubles array elements', assertion:'function myMap(arr, fn) { return arr.reduce((acc, x) => [...acc, fn(x)], []) } expect(myMap([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])' },
      { description: 'myMap works with strings', assertion:'function myMap(arr, fn) { return arr.reduce((acc, x) => [...acc, fn(x)], []) } expect(myMap([1, 2], x => "num")).toEqual(["num", "num"])' },
      { description: 'myMap returns new array', assertion:'function myMap(arr, fn) { return arr.reduce((acc, x) => [...acc, fn(x)], []) } const orig = [1, 2]; const result = myMap(orig, x => x); expect(result !== orig).toBe(true)' },
      { description: 'myMap handles empty array', assertion:'function myMap(arr, fn) { return arr.reduce((acc, x) => [...acc, fn(x)], []) } expect(myMap([], x => x * 2)).toEqual([])' },
      { description: 'myMap with different function', assertion:'function myMap(arr, fn) { return arr.reduce((acc, x) => [...acc, fn(x)], []) } expect(myMap([1, 2, 3], x => x + 10)).toEqual([11, 12, 13])' },
    ],
    hints: ['Use reduce to build new array', 'Spread operator can add elements to accumulator', 'fn is applied to each element'],
    tags: ['functional', 'higher-order', 'map', 'reduce'],
    usageExample: {
      code: `function myMap(arr, fn) {
  const result = [];
  for (const item of arr) result.push(fn(item));
  return result;
}
myMap([1, 2, 3], x => x * 2); // [2, 4, 6]`,
      explanation: {
        en: "A higher-order function takes another function as an argument to customize behavior.",
        es: "Una función de orden superior toma otra función como argumento para personalizar el comportamiento.",
      },
    },
  },
  {
    slug: 'fp-higher-2',
    title: 'Custom filter — higher-order function',
    description: `## Filtering with Higher-Order Functions

Create a custom filter function that keeps only elements matching a predicate.

**Challenge:** Implement \`myFilter\` that takes an array and a predicate function, returning only elements where the predicate is true.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function myFilter(arr, predicate) {
  // keep only elements where predicate(x) is true
}`,
    solution: `function myFilter(arr, predicate) {
  return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, [])
}`,
    tests: [
      { description: 'myFilter keeps even numbers', assertion:'function myFilter(arr, predicate) { return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, []) } expect(myFilter([1, 2, 3, 4], x => x % 2 === 0)).toEqual([2, 4])' },
      { description: 'myFilter with custom predicate', assertion:'function myFilter(arr, predicate) { return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, []) } expect(myFilter([1, 5, 10, 15], x => x > 5)).toEqual([10, 15])' },
      { description: 'myFilter returns empty when nothing matches', assertion:'function myFilter(arr, predicate) { return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, []) } expect(myFilter([1, 2, 3], x => x > 10)).toEqual([])' },
      { description: 'myFilter returns all when all match', assertion:'function myFilter(arr, predicate) { return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, []) } expect(myFilter([2, 4, 6], x => x % 2 === 0)).toEqual([2, 4, 6])' },
      { description: 'myFilter with empty array', assertion:'function myFilter(arr, predicate) { return arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, []) } expect(myFilter([], x => x > 5)).toEqual([])' },
    ],
    hints: ['Use reduce with conditional logic', 'Include x if predicate(x) is true', 'Otherwise keep accumulator unchanged'],
    tags: ['functional', 'higher-order', 'filter', 'predicate'],
    usageExample: {
      code: `function myFilter(arr, predicate) {
  const result = [];
  for (const item of arr) if (predicate(item)) result.push(item);
  return result;
}
myFilter([1, 2, 3, 4], x => x % 2 === 0); // [2, 4]`,
      explanation: {
        en: "A custom filter passes only items for which the predicate returns true.",
        es: "Un filtro personalizado pasa solo los elementos para los que el predicado devuelve true.",
      },
    },
  },
  {
    slug: 'fp-higher-3',
    title: 'Custom reduce — transform array',
    description: `## Reduce for Accumulation

Reduce transforms an array into a single value by accumulating results.

**Challenge:** Implement \`myReduce\` that sums all elements in an array (using Array.prototype.reduce internally).`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function myReduce(arr, fn, initial) {
  // accumulate values using fn
}

const sum = (acc, x) => acc + x
const result = myReduce([1, 2, 3], sum, 0)`,
    solution: `function myReduce(arr, fn, initial) {
  return arr.reduce(fn, initial)
}

const sum = (acc, x) => acc + x
const result = myReduce([1, 2, 3], sum, 0)`,
    tests: [
      { description: 'myReduce sums array', assertion:'function myReduce(arr, fn, initial) { return arr.reduce(fn, initial) } const sum = (acc, x) => acc + x; expect(myReduce([1, 2, 3], sum, 0)).toBe(6)' },
      { description: 'myReduce with product', assertion:'function myReduce(arr, fn, initial) { return arr.reduce(fn, initial) } const prod = (acc, x) => acc * x; expect(myReduce([2, 3, 4], prod, 1)).toBe(24)' },
      { description: 'myReduce with empty array', assertion:'function myReduce(arr, fn, initial) { return arr.reduce(fn, initial) } const sum = (acc, x) => acc + x; expect(myReduce([], sum, 0)).toBe(0)' },
      { description: 'myReduce with string concatenation', assertion:'function myReduce(arr, fn, initial) { return arr.reduce(fn, initial) } const concat = (acc, x) => acc + x; expect(myReduce(["a", "b", "c"], concat, "")).toBe("abc")' },
      { description: 'myReduce builds object from array', assertion:'function myReduce(arr, fn, initial) { return arr.reduce(fn, initial) } const toObj = (acc, x) => ({...acc, [x]: true}); expect(myReduce(["a", "b"], toObj, {})).toEqual({a: true, b: true})' },
    ],
    hints: ['myReduce is a wrapper around Array.prototype.reduce', 'Pass fn and initial to reduce', 'Reduce accumulates values into a single result'],
    tags: ['functional', 'higher-order', 'reduce', 'accumulation'],
    usageExample: {
      code: `function myReduce(arr, fn, init) {
  let acc = init;
  for (const item of arr) acc = fn(acc, item);
  return acc;
}
myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0); // 10`,
      explanation: {
        en: "Reduce accumulates a result by applying a combining function to each element.",
        es: "Reduce acumula un resultado aplicando una función combinadora a cada elemento.",
      },
    },
  },
  {
    slug: 'fp-higher-4',
    title: 'Multiplier factory — function returning function',
    description: `## Factory Functions

A factory function returns new functions with customized behavior.

**Challenge:** Create a \`multiplierFactory\` function that returns a new function. Each returned function multiplies its argument by a specific factor.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function multiplierFactory(factor) {
  // return a function that multiplies by factor
}

const double = multiplierFactory(2)
const triple = multiplierFactory(3)`,
    solution: `function multiplierFactory(factor) {
  return (x) => x * factor
}

const double = multiplierFactory(2)
const triple = multiplierFactory(3)`,
    tests: [
      { description: 'double multiplier works', assertion:'function multiplierFactory(factor) { return (x) => x * factor } const double = multiplierFactory(2); expect(double(5)).toBe(10)' },
      { description: 'triple multiplier works', assertion:'function multiplierFactory(factor) { return (x) => x * factor } const triple = multiplierFactory(3); expect(triple(5)).toBe(15)' },
      { description: 'multipliers are independent', assertion:'function multiplierFactory(factor) { return (x) => x * factor } const double = multiplierFactory(2); const triple = multiplierFactory(3); expect(double(4)).toBe(8); expect(triple(4)).toBe(12)' },
      { description: 'factory with factor 1', assertion:'function multiplierFactory(factor) { return (x) => x * factor } const id = multiplierFactory(1); expect(id(99)).toBe(99)' },
      { description: 'factory with negative factor', assertion:'function multiplierFactory(factor) { return (x) => x * factor } const negate = multiplierFactory(-1); expect(negate(5)).toBe(-5)' },
    ],
    hints: ['Factory returns a function', 'The returned function closes over factor', 'Each call to factory creates a new function'],
    tags: ['functional', 'higher-order', 'factory', 'closure'],
    usageExample: {
      code: `function multiplier(factor) {
  return x => x * factor;
}
const double = multiplier(2);
double(5); // 10`,
      explanation: {
        en: "A function factory returns a specialized function — a classic higher-order pattern.",
        es: "Una fábrica de funciones devuelve una función especializada — un patrón de orden superior clásico.",
      },
    },
  },
  {
    slug: 'fp-higher-5',
    title: 'Compose map, filter, and reduce',
    description: `## Combining Higher-Order Functions

Use map, filter, and reduce together to solve complex transformations.

**Challenge:** Given an array of numbers, filter even numbers, map them to their squares, then reduce to sum.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FunctionalProgramming',
    initialCode: `function sumOfSquaredEvens(arr) {
  // filter even numbers
  // map to squares
  // reduce to sum
}`,
    solution: `function sumOfSquaredEvens(arr) {
  return arr
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((acc, x) => acc + x, 0)
}`,
    tests: [
      { description: 'sum of squared evens from [1,2,3,4]', assertion:'function sumOfSquaredEvens(arr) { return arr.filter(x => x % 2 === 0).map(x => x * x).reduce((acc, x) => acc + x, 0) } expect(sumOfSquaredEvens([1, 2, 3, 4])).toBe(20)' },
      { description: 'sum of squared evens from [2,4,6]', assertion:'function sumOfSquaredEvens(arr) { return arr.filter(x => x % 2 === 0).map(x => x * x).reduce((acc, x) => acc + x, 0) } expect(sumOfSquaredEvens([2, 4, 6])).toBe(56)' },
      { description: 'no even numbers returns 0', assertion:'function sumOfSquaredEvens(arr) { return arr.filter(x => x % 2 === 0).map(x => x * x).reduce((acc, x) => acc + x, 0) } expect(sumOfSquaredEvens([1, 3, 5])).toBe(0)' },
      { description: 'empty array returns 0', assertion:'function sumOfSquaredEvens(arr) { return arr.filter(x => x % 2 === 0).map(x => x * x).reduce((acc, x) => acc + x, 0) } expect(sumOfSquaredEvens([])).toBe(0)' },
      { description: 'manual calculation matches', assertion:'function sumOfSquaredEvens(arr) { return arr.filter(x => x % 2 === 0).map(x => x * x).reduce((acc, x) => acc + x, 0) } expect(sumOfSquaredEvens([1, 2, 3, 4, 5])).toBe(4 + 16)' },
    ],
    hints: ['Chain filter, map, and reduce', 'Filter for x % 2 === 0', 'Map to x * x', 'Reduce with addition and initial 0'],
    tags: ['functional', 'higher-order', 'composition', 'advanced'],
    usageExample: {
      code: `const result = [1, 2, 3, 4, 5]
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .reduce((sum, x) => sum + x, 0);
// 60`,
      explanation: {
        en: "Compose map, filter, and reduce in a chain to build expressive data pipelines.",
        es: "Combina map, filter y reduce en cadena para construir pipelines de datos expresivos.",
      },
    },
  },
]
