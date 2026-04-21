import { Exercise } from '@/shared/types/exercises';

export const atomicsAddExercises: Exercise[] = [
  {
    slug: 'atomics-add-old-value',
    title: 'Atomics.add returns old value',
    description: 'Use Atomics.add to get the old value at an index before adding.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'Atomics',
    method: 'add',
    initialCode: `function addAndGetOld(arr, idx, value) {
  // Use Atomics.add to add value at idx
}`,
    solution: `function addAndGetOld(arr, idx, value) {
  return Atomics.add(arr, idx, value);
}`,
    tests: [
      {
        description: 'Returns 0 for initial add',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = addAndGetOld(arr, 0, 5);
expect(result).toBe(0);`
      },
      {
        description: 'arr[0] becomes 5 after add',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
addAndGetOld(arr, 0, 5);
expect(arr[0]).toBe(5);`
      },
      {
        description: 'Chaining adds returns previous value',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
addAndGetOld(arr, 0, 2);
const result = addAndGetOld(arr, 0, 3);
expect(result).toBe(2);`
      },
      {
        description: 'Add to index 2',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
const result = addAndGetOld(arr, 2, 7);
expect(result).toBe(0);`
      },
      {
        description: 'Add negative value',
        assertion: `const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4);
const arr = new Int32Array(sab);
addAndGetOld(arr, 1, -3);
expect(arr[1]).toBe(-3);`
      },
    ],
    hints: ['Use Atomics.add(typedArray, index, value)'],
    tags: [],
    usageExample: {
      code: `const i32 = new Int32Array(new SharedArrayBuffer(4))
Atomics.add(i32, 0, 5)
Atomics.load(i32, 0)  // → 5`,
      explanation: {
        en: "Atomics.add() atomically adds a value to an element, returning the old value.",
        es: "Atomics.add() suma atómicamente un valor a un elemento, devolviendo el valor anterior.",
      },
    },
  },
];
