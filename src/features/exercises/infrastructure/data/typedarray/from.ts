import type { Exercise } from '@/shared/types/exercises'

export const typedArrayFromExercises: Exercise[] = [
  {
    slug: 'typedarray-from-array-like',
    title: 'Int32Array.from() with Array',
    description: 'Use the static from() method to create a typed array from a regular array.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'from',
    initialCode: `function fromArray(values: number[]) {
  // Create and return an Int32Array from the given array using Int32Array.from()
}`,
    solution: `function fromArray(values: number[]) {
  return Int32Array.from(values);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(fromArray([1, 2, 3]) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(fromArray([1, 2, 3]).length).toBe(3);`,
      },
      {
        description: 'First element is correct',
        assertion: `expect(fromArray([1, 2, 3])[0]).toBe(1);`,
      },
      {
        description: 'Last element is correct',
        assertion: `expect(fromArray([1, 2, 3])[2]).toBe(3);`,
      },
      {
        description: 'Works with empty array',
        assertion: `expect(fromArray([]).length).toBe(0);`,
      },
    ],
    hints: ['Use Int32Array.from(array)'],
    tags: [],
  },
  {
    slug: 'typedarray-from-float-array',
    title: 'Float64Array.from() with Floats',
    description: 'Create a Float64Array from an array of floating-point numbers using from().',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'from',
    initialCode: `function fromFloats(values: number[]) {
  // Create and return a Float64Array from the given float values
}`,
    solution: `function fromFloats(values: number[]) {
  return Float64Array.from(values);
}`,
    tests: [
      {
        description: 'Returns a Float64Array',
        assertion: `expect(fromFloats([1.5, 2.5, 3.5]) instanceof Float64Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(fromFloats([1.5, 2.5, 3.5]).length).toBe(3);`,
      },
      {
        description: 'First element is correct',
        assertion: `expect(fromFloats([1.5, 2.5, 3.5])[0]).toBe(1.5);`,
      },
      {
        description: 'Second element is correct',
        assertion: `expect(fromFloats([1.5, 2.5, 3.5])[1]).toBe(2.5);`,
      },
      {
        description: 'Third element is correct',
        assertion: `expect(fromFloats([1.5, 2.5, 3.5])[2]).toBe(3.5);`,
      },
    ],
    hints: ['Use Float64Array.from(array)'],
    tags: [],
  },
  {
    slug: 'typedarray-from-with-map',
    title: 'Int32Array.from() with Map Function',
    description: 'Use the map function argument of from() to transform each element.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'from',
    initialCode: `function doubleValues(values: number[]) {
  // Create an Int32Array from values, doubling each element using the map function
}`,
    solution: `function doubleValues(values: number[]) {
  return Int32Array.from(values, x => x * 2);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(doubleValues([1, 2, 3]) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'First element is doubled',
        assertion: `expect(doubleValues([1, 2, 3])[0]).toBe(2);`,
      },
      {
        description: 'Second element is doubled',
        assertion: `expect(doubleValues([1, 2, 3])[1]).toBe(4);`,
      },
      {
        description: 'Third element is doubled',
        assertion: `expect(doubleValues([1, 2, 3])[2]).toBe(6);`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(doubleValues([1, 2, 3]).length).toBe(3);`,
      },
    ],
    hints: ['Int32Array.from(array, x => x * 2)'],
    tags: [],
  },
  {
    slug: 'typedarray-from-string',
    title: 'Uint8Array.from() from String',
    description: 'Create a Uint8Array from a string of digit characters, parsing each character as an integer.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'from',
    initialCode: `function fromDigitString(str: string) {
  // Create a Uint8Array from a string of digits, converting each char to an integer
}`,
    solution: `function fromDigitString(str: string) {
  return Uint8Array.from(str, x => parseInt(x));
}`,
    tests: [
      {
        description: 'Returns a Uint8Array',
        assertion: `expect(fromDigitString('123') instanceof Uint8Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(fromDigitString('123').length).toBe(3);`,
      },
      {
        description: 'First element is 1',
        assertion: `expect(fromDigitString('123')[0]).toBe(1);`,
      },
      {
        description: 'Second element is 2',
        assertion: `expect(fromDigitString('123')[1]).toBe(2);`,
      },
      {
        description: 'Third element is 3',
        assertion: `expect(fromDigitString('123')[2]).toBe(3);`,
      },
    ],
    hints: ['Use Uint8Array.from(str, x => parseInt(x))'],
    tags: [],
  },
  {
    slug: 'typedarray-from-array-like-object',
    title: 'Int32Array.from() with Array-Like Object',
    description: 'Create a typed array from an array-like object with a length property using a map function.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'from',
    initialCode: `function fromArrayLike(len: number) {
  // Create an Int32Array of given length where each element is index * 10
}`,
    solution: `function fromArrayLike(len: number) {
  return Int32Array.from({ length: len }, (_, i) => i * 10);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(fromArrayLike(3) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(fromArrayLike(3).length).toBe(3);`,
      },
      {
        description: 'First element is 0',
        assertion: `expect(fromArrayLike(3)[0]).toBe(0);`,
      },
      {
        description: 'Second element is 10',
        assertion: `expect(fromArrayLike(3)[1]).toBe(10);`,
      },
      {
        description: 'Third element is 20',
        assertion: `expect(fromArrayLike(3)[2]).toBe(20);`,
      },
    ],
    hints: ['Use Int32Array.from({length: n}, (_, i) => i * 10)'],
    tags: [],
  },
]
