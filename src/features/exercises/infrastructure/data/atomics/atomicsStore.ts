import { Exercise } from '@/shared/types/exercises';

export const atomicsStoreExercises: Exercise[] = [
  {
    slug: 'atomics-store-value',
    title: 'Atomics.store returns value',
    description: 'Use Atomics.store to store a value and return it.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Atomics',
    method: 'store',
    initialCode: `function storeValue(arr, idx, value) {
  // Use Atomics.store to store value at idx
}`,
    solution: `function storeValue(arr, idx, value) {
  return Atomics.store(arr, idx, value);
}`,
    tests: [
      {
        description: 'Returns the value stored',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = storeValue(arr, 0, 10);
expect(result).toBe(10);`
      },
      {
        description: 'Store then load',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
storeValue(arr, 1, 42);
expect(arr[1]).toBe(42);`
      },
      {
        description: 'Store at index 2',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
storeValue(arr, 2, 7);
expect(arr[2]).toBe(7);`
      },
      {
        description: 'Store overwrites value',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
storeValue(arr, 3, 5);
storeValue(arr, 3, 9);
expect(arr[3]).toBe(9);`
      },
      {
        description: 'Store with Atomics.load',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
storeValue(arr, 0, 11);
const result = Atomics.load(arr, 0);
expect(result).toBe(11);`
      },
    ],
    hints: ['Use Atomics.store(typedArray, index, value)'],
    tags: [],
    usageExample: {
      code: `const i32 = new Int32Array(new SharedArrayBuffer(4))
Atomics.store(i32, 0, 42)
Atomics.load(i32, 0)  // → 42`,
      explanation: {
        en: "Atomics.store() writes a value atomically to a shared typed array element.",
        es: "Atomics.store() escribe un valor atómicamente en un elemento de arreglo tipado compartido.",
      },
    },
  },
];
