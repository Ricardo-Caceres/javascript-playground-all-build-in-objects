import { Exercise } from '@/shared/types/exercises';

export const atomicsSubExercises: Exercise[] = [
  {
    slug: 'atomics-sub-old-value',
    title: 'Atomics.sub returns old value',
    description: 'Use Atomics.sub to get the old value at an index before subtracting.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Atomics',
    method: 'sub',
    initialCode: `function subAndGetOld(arr, idx, value) {
  // Use Atomics.sub to subtract value at idx
}`,
    solution: `function subAndGetOld(arr, idx, value) {
  return Atomics.sub(arr, idx, value);
}`,
    tests: [
      {
        description: 'Returns 0 for initial sub',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = subAndGetOld(arr, 0, 5);
expect(result).toBe(0);`
      },
      {
        description: 'arr[0] becomes -5 after sub',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
subAndGetOld(arr, 0, 5);
expect(arr[0]).toBe(-5);`
      },
      {
        description: 'Sub from index 2',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = subAndGetOld(arr, 2, 7);
expect(result).toBe(0);`
      },
      {
        description: 'Sub to negative result',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
subAndGetOld(arr, 1, 3);
subAndGetOld(arr, 1, 4);
expect(arr[1]).toBe(-7);`
      },
      {
        description: 'Chain sub operations',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
subAndGetOld(arr, 0, 2);
const result = subAndGetOld(arr, 0, 3);
expect(result).toBe(-2);`
      },
    ],
    hints: ['Use Atomics.sub(typedArray, index, value)'],
    tags: [],
    usageExample: {
      code: `const i32 = new Int32Array(new SharedArrayBuffer(4))
Atomics.store(i32, 0, 10)
Atomics.sub(i32, 0, 3)  // → 10 (old value)
Atomics.load(i32, 0)   // → 7`,
      explanation: {
        en: "Atomics.sub() atomically subtracts a value, returning the old value before subtraction.",
        es: "Atomics.sub() resta atómicamente un valor, devolviendo el valor anterior a la resta.",
      },
    },
  },
];
