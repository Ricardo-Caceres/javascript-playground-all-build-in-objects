import { Exercise } from '@/shared/types/exercises';

export const atomicsLoadExercises: Exercise[] = [
  {
    slug: 'atomics-load-initial',
    title: 'Atomics.load initial value',
    description: 'Use Atomics.load to get the initial value at an index.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Atomics',
    method: 'load',
    initialCode: `function loadValue(arr, idx) {
  // Use Atomics.load to get value at idx
}`,
    solution: `function loadValue(arr, idx) {
  return Atomics.load(arr, idx);
}`,
    tests: [
      {
        description: 'Initial value is 0',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = loadValue(arr, 0);
expect(result).toBe(0);`
      },
      {
        description: 'Load after store',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
Atomics.store(arr, 1, 42);
const result = loadValue(arr, 1);
expect(result).toBe(42);`
      },
      {
        description: 'Load from index 2',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
Atomics.store(arr, 2, 7);
const result = loadValue(arr, 2);
expect(result).toBe(7);`
      },
      {
        description: 'Compare load vs direct access',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
Atomics.store(arr, 3, 99);
const result = loadValue(arr, 3);
expect(result).toBe(arr[3]);`
      },
      {
        description: 'Load from different typed array',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr1 = new Int32Array(sab);
const arr2 = new Int32Array(sab);
Atomics.store(arr1, 0, 123);
const result = loadValue(arr2, 0);
expect(result).toBe(123);`
      },
    ],
    hints: ['Use Atomics.load(typedArray, index)'],
    tags: [],
    usageExample: {
      code: `const sab = new SharedArrayBuffer(4)
const i32 = new Int32Array(sab)
i32[0] = 42
Atomics.load(i32, 0)  // → 42`,
      explanation: {
        en: "Atomics.load() reads a value atomically, preventing data races in multi-threaded code.",
        es: "Atomics.load() lee un valor atómicamente, previniendo condiciones de carrera en código multihilo.",
      },
    },
  },
];
