import type { Exercise } from '@/shared/types/exercises'

export const typedArrayInstanceMethodsExercises: Exercise[] = [
  {
    slug: 'typedarray-set-method',
    title: 'TypedArray.prototype.set()',
    description: 'Use the set() method to copy values from an array into a TypedArray.',
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'set',
    initialCode: `function fillWithSet(values: number[]) {
  // Create an Int32Array of the same length and use .set() to copy values
  const arr = new Int32Array(values.length);
  // Use arr.set() here
  return arr;
}`,
    solution: `function fillWithSet(values: number[]) {
  const arr = new Int32Array(values.length);
  arr.set(values);
  return arr;
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(fillWithSet([10, 20, 30]) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'First element is set correctly',
        assertion: `expect(fillWithSet([10, 20, 30])[0]).toBe(10);`,
      },
      {
        description: 'Second element is set correctly',
        assertion: `expect(fillWithSet([10, 20, 30])[1]).toBe(20);`,
      },
      {
        description: 'Third element is set correctly',
        assertion: `expect(fillWithSet([10, 20, 30])[2]).toBe(30);`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(fillWithSet([10, 20, 30]).length).toBe(3);`,
      },
    ],
    hints: ['arr.set(array) copies values starting at index 0'],
    tags: [],
  },
  {
    slug: 'typedarray-subarray-method',
    title: 'TypedArray.prototype.subarray()',
    description: 'Use subarray() to get a view of a portion of a typed array without copying.',
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'subarray',
    initialCode: `function getSubarray(arr: Int32Array, start: number, end: number) {
  // Return a subarray view of arr from start to end
}`,
    solution: `function getSubarray(arr: Int32Array, start: number, end: number) {
  return arr.subarray(start, end);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(getSubarray(new Int32Array([1,2,3,4,5]), 1, 3) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'Has length 2 for range 1..3',
        assertion: `expect(getSubarray(new Int32Array([1,2,3,4,5]), 1, 3).length).toBe(2);`,
      },
      {
        description: 'First element of subarray is 2',
        assertion: `expect(getSubarray(new Int32Array([1,2,3,4,5]), 1, 3)[0]).toBe(2);`,
      },
      {
        description: 'Second element of subarray is 3',
        assertion: `expect(getSubarray(new Int32Array([1,2,3,4,5]), 1, 3)[1]).toBe(3);`,
      },
      {
        description: 'Subarray shares the same buffer',
        assertion: `const src = new Int32Array([1,2,3,4,5]); expect(getSubarray(src, 1, 3).buffer === src.buffer).toBe(true);`,
      },
    ],
    hints: ['subarray(start, end) returns a view, not a copy'],
    tags: [],
  },
  {
    slug: 'typedarray-fill-method',
    title: 'TypedArray.prototype.fill()',
    description: 'Use the fill() method to fill all elements of a TypedArray with a static value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'fill',
    initialCode: `function fillTypedArray(length: number, value: number) {
  // Create an Int32Array of given length and fill it with the given value
}`,
    solution: `function fillTypedArray(length: number, value: number) {
  return new Int32Array(length).fill(value);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(fillTypedArray(3, 7) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'First element is filled',
        assertion: `expect(fillTypedArray(3, 7)[0]).toBe(7);`,
      },
      {
        description: 'Second element is filled',
        assertion: `expect(fillTypedArray(3, 7)[1]).toBe(7);`,
      },
      {
        description: 'Third element is filled',
        assertion: `expect(fillTypedArray(3, 7)[2]).toBe(7);`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(fillTypedArray(3, 7).length).toBe(3);`,
      },
    ],
    hints: ['new Int32Array(n).fill(value)'],
    tags: [],
  },
  {
    slug: 'typedarray-copywithin-method',
    title: 'TypedArray.prototype.copyWithin()',
    description: 'Use copyWithin() to copy a sequence of elements within the array.',
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'TypedArray',
    method: 'copyWithin',
    initialCode: `function copyWithinExample() {
  // Create Int32Array([1,2,3,4,5]) and copy elements from index 3 to index 0
  // Expected result: [4,5,3,4,5]
}`,
    solution: `function copyWithinExample() {
  return new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(copyWithinExample() instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'First element is now 4',
        assertion: `expect(copyWithinExample()[0]).toBe(4);`,
      },
      {
        description: 'Second element is now 5',
        assertion: `expect(copyWithinExample()[1]).toBe(5);`,
      },
      {
        description: 'Third element is unchanged',
        assertion: `expect(copyWithinExample()[2]).toBe(3);`,
      },
      {
        description: 'Length is preserved',
        assertion: `expect(copyWithinExample().length).toBe(5);`,
      },
    ],
    hints: ['copyWithin(target, start) copies from start to target position'],
    tags: [],
  },
  {
    slug: 'typedarray-reverse-method',
    title: 'TypedArray.prototype.reverse()',
    description: 'Use reverse() to reverse the elements of a TypedArray in place.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'reverse',
    initialCode: `function reverseTypedArray(values: number[]) {
  // Create an Int32Array from values and return it reversed
}`,
    solution: `function reverseTypedArray(values: number[]) {
  return Int32Array.from(values).reverse();
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(reverseTypedArray([1, 2, 3]) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'First element is now the last',
        assertion: `expect(reverseTypedArray([1, 2, 3])[0]).toBe(3);`,
      },
      {
        description: 'Last element is now the first',
        assertion: `expect(reverseTypedArray([1, 2, 3])[2]).toBe(1);`,
      },
      {
        description: 'Middle element stays',
        assertion: `expect(reverseTypedArray([1, 2, 3])[1]).toBe(2);`,
      },
      {
        description: 'Length is preserved',
        assertion: `expect(reverseTypedArray([1, 2, 3]).length).toBe(3);`,
      },
    ],
    hints: ['reverse() mutates and returns the array'],
    tags: [],
  },
]
