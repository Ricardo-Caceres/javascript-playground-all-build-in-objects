import type { Exercise } from '@/shared/types/exercises'

export const typedArrayOfExercises: Exercise[] = [
  {
    slug: 'typedarray-of-basic',
    title: 'Int32Array.of() Basic Usage',
    description: 'Use the static of() method to create an Int32Array from a set of values.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'of',
    initialCode: `function createInt32Of(...values: number[]) {
  // Create and return an Int32Array using Int32Array.of()
}`,
    solution: `function createInt32Of(...values: number[]) {
  return Int32Array.of(...values);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(createInt32Of(1, 2, 3) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(createInt32Of(1, 2, 3).length).toBe(3);`,
      },
      {
        description: 'First element is 1',
        assertion: `expect(createInt32Of(1, 2, 3)[0]).toBe(1);`,
      },
      {
        description: 'Second element is 2',
        assertion: `expect(createInt32Of(1, 2, 3)[1]).toBe(2);`,
      },
      {
        description: 'Third element is 3',
        assertion: `expect(createInt32Of(1, 2, 3)[2]).toBe(3);`,
      },
    ],
    hints: ['Use Int32Array.of(1, 2, 3)'],
    tags: [],
  },
  {
    slug: 'typedarray-of-floats',
    title: 'Float32Array.of() with Floats',
    description: 'Create a Float32Array from float values using of(). Note that Float32 precision is limited.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'of',
    initialCode: `function createFloat32Of(...values: number[]) {
  // Create and return a Float32Array using Float32Array.of()
}`,
    solution: `function createFloat32Of(...values: number[]) {
  return Float32Array.of(...values);
}`,
    tests: [
      {
        description: 'Returns a Float32Array',
        assertion: `expect(createFloat32Of(1.1, 2.2, 3.3) instanceof Float32Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(createFloat32Of(1.1, 2.2, 3.3).length).toBe(3);`,
      },
      {
        description: 'First element is approximately 1.1',
        assertion: `expect(Math.abs(createFloat32Of(1.1, 2.2, 3.3)[0] - 1.1) < 0.01).toBeTruthy();`,
      },
      {
        description: 'Second element is approximately 2.2',
        assertion: `expect(Math.abs(createFloat32Of(1.1, 2.2, 3.3)[1] - 2.2) < 0.01).toBeTruthy();`,
      },
      {
        description: 'Third element is approximately 3.3',
        assertion: `expect(Math.abs(createFloat32Of(1.1, 2.2, 3.3)[2] - 3.3) < 0.01).toBeTruthy();`,
      },
    ],
    hints: ['Use Float32Array.of(1.1, 2.2, 3.3)', 'Float32 has limited precision vs Float64'],
    tags: [],
  },
  {
    slug: 'typedarray-of-uint8-range',
    title: 'Uint8Array.of() — Byte Values',
    description: 'Create a Uint8Array using of() with valid byte values (0–255).',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'of',
    initialCode: `function createUint8Of(...values: number[]) {
  // Create and return a Uint8Array using Uint8Array.of()
}`,
    solution: `function createUint8Of(...values: number[]) {
  return Uint8Array.of(...values);
}`,
    tests: [
      {
        description: 'Returns a Uint8Array',
        assertion: `expect(createUint8Of(255, 0, 127) instanceof Uint8Array).toBeTruthy();`,
      },
      {
        description: 'First element is 255',
        assertion: `expect(createUint8Of(255, 0, 127)[0]).toBe(255);`,
      },
      {
        description: 'Second element is 0',
        assertion: `expect(createUint8Of(255, 0, 127)[1]).toBe(0);`,
      },
      {
        description: 'Third element is 127',
        assertion: `expect(createUint8Of(255, 0, 127)[2]).toBe(127);`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(createUint8Of(255, 0, 127).length).toBe(3);`,
      },
    ],
    hints: ['Uint8Array stores values 0–255'],
    tags: [],
  },
  {
    slug: 'typedarray-of-int8-signed',
    title: 'Int8Array.of() — Signed Byte Range',
    description: 'Create an Int8Array using of(). Int8 holds values from -128 to 127.',
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'of',
    initialCode: `function createInt8Of(...values: number[]) {
  // Create and return an Int8Array using Int8Array.of()
}`,
    solution: `function createInt8Of(...values: number[]) {
  return Int8Array.of(...values);
}`,
    tests: [
      {
        description: 'Returns an Int8Array',
        assertion: `expect(createInt8Of(127, -128) instanceof Int8Array).toBeTruthy();`,
      },
      {
        description: 'First element is 127 (max positive)',
        assertion: `expect(createInt8Of(127, -128)[0]).toBe(127);`,
      },
      {
        description: 'Second element is -128 (min negative)',
        assertion: `expect(createInt8Of(127, -128)[1]).toBe(-128);`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(createInt8Of(127, -128).length).toBe(2);`,
      },
      {
        description: 'Zero value works',
        assertion: `expect(createInt8Of(0)[0]).toBe(0);`,
      },
    ],
    hints: ['Int8Array range is -128 to 127'],
    tags: [],
  },
  {
    slug: 'typedarray-of-bigint',
    title: 'BigInt64Array.of() — BigInt Values',
    description: 'Create a BigInt64Array using of() with BigInt literals. BigInt64Array stores 64-bit integers.',
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'TypedArray',
    method: 'of',
    initialCode: `function createBigInt64Of(...values: bigint[]) {
  // Create and return a BigInt64Array using BigInt64Array.of()
}`,
    solution: `function createBigInt64Of(...values: bigint[]) {
  return BigInt64Array.of(...values);
}`,
    tests: [
      {
        description: 'Returns a BigInt64Array',
        assertion: `expect(createBigInt64Of(9007199254740993n) instanceof BigInt64Array).toBeTruthy();`,
      },
      {
        description: 'Preserves the large BigInt value',
        assertion: `expect(BigInt64Array.of(9007199254740993n)[0] === 9007199254740993n).toBeTruthy();`,
      },
      {
        description: 'Has correct length',
        assertion: `expect(createBigInt64Of(1n, 2n, 3n).length).toBe(3);`,
      },
      {
        description: 'First element with multiple values',
        assertion: `expect(createBigInt64Of(10n, 20n)[0] === 10n).toBeTruthy();`,
      },
      {
        description: 'Second element with multiple values',
        assertion: `expect(createBigInt64Of(10n, 20n)[1] === 20n).toBeTruthy();`,
      },
    ],
    hints: ['Use BigInt64Array.of(value)', 'BigInt literals use the n suffix: 42n'],
    tags: [],
  },
]
