import type { Exercise } from '@/shared/types/exercises'

export const typedArrayConstructorExercises: Exercise[] = [
  {
    slug: 'typedarray-constructor-from-length',
    title: 'Create Int32Array from Length',
    description: 'Create an Int32Array with a specified length. All elements are initialized to zero.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'Int32Array',
    initialCode: `function createInt32Array(length: number) {
  // Create and return a new Int32Array with the given length
}`,
    solution: `function createInt32Array(length: number) {
  return new Int32Array(length);
}`,
    tests: [
      {
        description: 'Returns an Int32Array',
        assertion: `expect(createInt32Array(4) instanceof Int32Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(createInt32Array(4).length).toBe(4);`,
      },
      {
        description: 'First element is zero',
        assertion: `expect(createInt32Array(3)[0]).toBe(0);`,
      },
      {
        description: 'Works with length 1',
        assertion: `expect(createInt32Array(1).length).toBe(1);`,
      },
      {
        description: 'Works with length 0',
        assertion: `expect(createInt32Array(0).length).toBe(0);`,
      },
    ],
    hints: ['Use new Int32Array(length)'],
    tags: [],
    usageExample: {
      code: `const arr = new Int32Array(4);
// Int32Array [0, 0, 0, 0]`,
      explanation: {
        en: "Pass a length to create a typed array filled with zeros.",
        es: "Pasa una longitud para crear un array tipado relleno de ceros.",
      },
    },
  },
  {
    slug: 'typedarray-constructor-from-array',
    title: 'Create Uint8Array from Array',
    description: 'Create a Uint8Array from an existing JavaScript array.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'Uint8Array',
    initialCode: `function createUint8Array(values: number[]) {
  // Create and return a new Uint8Array from the given array
}`,
    solution: `function createUint8Array(values: number[]) {
  return new Uint8Array(values);
}`,
    tests: [
      {
        description: 'Returns a Uint8Array',
        assertion: `expect(createUint8Array([1, 2, 3]) instanceof Uint8Array).toBeTruthy();`,
      },
      {
        description: 'Has the correct length',
        assertion: `expect(createUint8Array([1, 2, 3]).length).toBe(3);`,
      },
      {
        description: 'First element is correct',
        assertion: `expect(createUint8Array([1, 2, 3])[0]).toBe(1);`,
      },
      {
        description: 'Last element is correct',
        assertion: `expect(createUint8Array([1, 2, 3])[2]).toBe(3);`,
      },
      {
        description: 'Works with empty array',
        assertion: `expect(createUint8Array([]).length).toBe(0);`,
      },
    ],
    hints: ['Use new Uint8Array(array)'],
    tags: [],
    usageExample: {
      code: `const arr = new Uint8Array([10, 20, 30]);
arr[0]; // 10`,
      explanation: {
        en: "Pass a regular array to create a TypedArray with those values.",
        es: "Pasa un array normal para crear un TypedArray con esos valores.",
      },
    },
  },
  {
    slug: 'typedarray-constructor-from-arraybuffer',
    title: 'Create Float64Array from ArrayBuffer',
    description: 'Create a Float64Array backed by a given ArrayBuffer. Each Float64 takes 8 bytes.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'Float64Array',
    initialCode: `function createFloat64Array(buffer: ArrayBuffer) {
  // Create and return a new Float64Array from the given ArrayBuffer
}`,
    solution: `function createFloat64Array(buffer: ArrayBuffer) {
  return new Float64Array(buffer);
}`,
    tests: [
      {
        description: 'Returns a Float64Array',
        assertion: `expect(createFloat64Array(new ArrayBuffer(16)) instanceof Float64Array).toBeTruthy();`,
      },
      {
        description: 'Length is 2 for a 16-byte buffer (8 bytes each)',
        assertion: `expect(createFloat64Array(new ArrayBuffer(16)).length).toBe(2);`,
      },
      {
        description: 'Length is 1 for an 8-byte buffer',
        assertion: `expect(createFloat64Array(new ArrayBuffer(8)).length).toBe(1);`,
      },
      {
        description: 'Elements are initialized to zero',
        assertion: `expect(createFloat64Array(new ArrayBuffer(16))[0]).toBe(0);`,
      },
      {
        description: 'Buffer reference matches',
        assertion: `const buf = new ArrayBuffer(16); expect(createFloat64Array(buf).buffer === buf).toBe(true);`,
      },
    ],
    hints: ['Use new Float64Array(buffer)', 'Each Float64 element uses 8 bytes'],
    tags: [],
    usageExample: {
      code: `const buffer = new ArrayBuffer(8);
const view = new Float64Array(buffer);
view[0] = 3.14;`,
      explanation: {
        en: "Create a TypedArray from an ArrayBuffer to share raw memory.",
        es: "Crea un TypedArray desde un ArrayBuffer para compartir memoria cruda.",
      },
    },
  },
  {
    slug: 'typedarray-constructor-from-typedarray',
    title: 'Create Int16Array from Another TypedArray',
    description: 'Create an Int16Array by copying values from an existing Int32Array.',
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'Int16Array',
    initialCode: `function copyToInt16Array(source: Int32Array) {
  // Create and return a new Int16Array from the given Int32Array
}`,
    solution: `function copyToInt16Array(source: Int32Array) {
  return new Int16Array(source);
}`,
    tests: [
      {
        description: 'Returns an Int16Array',
        assertion: `expect(copyToInt16Array(new Int32Array([10, 20, 30])) instanceof Int16Array).toBeTruthy();`,
      },
      {
        description: 'Has the same length',
        assertion: `expect(copyToInt16Array(new Int32Array([10, 20, 30])).length).toBe(3);`,
      },
      {
        description: 'Second element is correct',
        assertion: `expect(copyToInt16Array(new Int32Array([10, 20, 30]))[1]).toBe(20);`,
      },
      {
        description: 'First element is correct',
        assertion: `expect(copyToInt16Array(new Int32Array([10, 20, 30]))[0]).toBe(10);`,
      },
      {
        description: 'Third element is correct',
        assertion: `expect(copyToInt16Array(new Int32Array([10, 20, 30]))[2]).toBe(30);`,
      },
    ],
    hints: ['Use new Int16Array(typedArray)', 'Values are copied and converted'],
    tags: [],
    usageExample: {
      code: `const original = new Int16Array([1, 2, 3]);
const copy = new Int16Array(original);
// copy: Int16Array [1, 2, 3]`,
      explanation: {
        en: "Pass another TypedArray to copy its values into a new typed array.",
        es: "Pasa otro TypedArray para copiar sus valores en un nuevo array tipado.",
      },
    },
  },
  {
    slug: 'typedarray-bytes-per-element',
    title: 'TypedArray BYTES_PER_ELEMENT',
    description: 'Access the static BYTES_PER_ELEMENT property to determine how many bytes each element uses.',
    category: 'static-property',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'BYTES_PER_ELEMENT',
    initialCode: `function getInt32BytesPerElement() {
  // Return Int32Array.BYTES_PER_ELEMENT
}`,
    solution: `function getInt32BytesPerElement() {
  return Int32Array.BYTES_PER_ELEMENT;
}`,
    tests: [
      {
        description: 'Int32Array has 4 bytes per element',
        assertion: `expect(getInt32BytesPerElement()).toBe(4);`,
      },
      {
        description: 'Uint8Array has 1 byte per element',
        assertion: `expect(Uint8Array.BYTES_PER_ELEMENT).toBe(1);`,
      },
      {
        description: 'Float64Array has 8 bytes per element',
        assertion: `expect(Float64Array.BYTES_PER_ELEMENT).toBe(8);`,
      },
      {
        description: 'Int16Array has 2 bytes per element',
        assertion: `expect(Int16Array.BYTES_PER_ELEMENT).toBe(2);`,
      },
      {
        description: 'Float32Array has 4 bytes per element',
        assertion: `expect(Float32Array.BYTES_PER_ELEMENT).toBe(4);`,
      },
    ],
    hints: ['BYTES_PER_ELEMENT is a static property on each TypedArray constructor'],
    tags: [],
    usageExample: {
      code: `Int32Array.BYTES_PER_ELEMENT; // 4
Uint8Array.BYTES_PER_ELEMENT; // 1
Float64Array.BYTES_PER_ELEMENT; // 8`,
      explanation: {
        en: "BYTES_PER_ELEMENT tells you how many bytes each element uses in memory.",
        es: "BYTES_PER_ELEMENT indica cuántos bytes usa cada elemento en memoria.",
      },
    },
  },
]
