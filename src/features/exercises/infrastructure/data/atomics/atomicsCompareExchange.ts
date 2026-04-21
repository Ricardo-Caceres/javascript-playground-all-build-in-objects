import { Exercise } from '@/shared/types/exercises';

export const atomicsCompareExchangeExercises: Exercise[] = [
  {
    slug: 'atomics-compareexchange-old-value',
    title: 'Atomics.compareExchange returns old value',
    description: 'Use Atomics.compareExchange to get the old value at an index before exchanging.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Atomics',
    method: 'compareExchange',
    initialCode: `function compareAndExchange(arr, idx, expected, replacement) {
  // Use Atomics.compareExchange
}`,
    solution: `function compareAndExchange(arr, idx, expected, replacement) {
  return Atomics.compareExchange(arr, idx, expected, replacement);
}`,
    tests: [
      {
        description: 'Returns 0 for initial compareExchange',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = compareAndExchange(arr, 0, 0, 5);
expect(result).toBe(0);`
      },
      {
        description: 'Exchange happens when expected matches',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
compareAndExchange(arr, 1, 0, 42);
expect(arr[1]).toBe(42);`
      },
      {
        description: 'No exchange when expected does not match',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
Atomics.store(arr, 2, 7);
compareAndExchange(arr, 2, 0, 99);
expect(arr[2]).toBe(7);`
      },
      {
        description: 'After successful exchange, value is replaced',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
compareAndExchange(arr, 3, 0, 11);
expect(arr[3]).toBe(11);`
      },
      {
        description: 'After failed exchange, value is unchanged',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
Atomics.store(arr, 0, 5);
compareAndExchange(arr, 0, 0, 99);
expect(arr[0]).toBe(5);`
      },
    ],
    hints: ['Use Atomics.compareExchange(typedArray, index, expected, replacement)'],
    tags: [],
    usageExample: {
      code: `const i32 = new Int32Array(new SharedArrayBuffer(4))
Atomics.store(i32, 0, 5)
Atomics.compareExchange(i32, 0, 5, 10)  // → 5 (old val)
Atomics.load(i32, 0)  // → 10`,
      explanation: {
        en: "compareExchange() updates a value only if it currently equals the expected value.",
        es: "compareExchange() actualiza un valor solo si actualmente es igual al valor esperado.",
      },
    },
  },
];
