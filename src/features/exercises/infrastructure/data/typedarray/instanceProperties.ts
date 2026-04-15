import type { Exercise } from '@/shared/types/exercises'

export const typedArrayInstancePropertiesExercises: Exercise[] = [
  {
    slug: 'typedarray-length-property',
    title: 'TypedArray.prototype.length',
    description: 'Access the length property to get the number of elements in a TypedArray.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'length',
    initialCode: `function getLength(arr: Int32Array) {
  // Return the number of elements in the typed array
}`,
    solution: `function getLength(arr: Int32Array) {
  return arr.length;
}`,
    tests: [
      {
        description: 'Length of 5-element array is 5',
        assertion: `expect(getLength(new Int32Array(5))).toBe(5);`,
      },
      {
        description: 'Length of 0-element array is 0',
        assertion: `expect(getLength(new Int32Array(0))).toBe(0);`,
      },
      {
        description: 'Length from array literal',
        assertion: `expect(getLength(new Int32Array([1, 2, 3]))).toBe(3);`,
      },
      {
        description: 'Length of 1-element array is 1',
        assertion: `expect(getLength(new Int32Array(1))).toBe(1);`,
      },
      {
        description: 'Length of 10-element array is 10',
        assertion: `expect(getLength(new Int32Array(10))).toBe(10);`,
      },
    ],
    hints: ['Access arr.length like a regular array'],
    tags: [],
  },
  {
    slug: 'typedarray-bytelength-property',
    title: 'TypedArray.prototype.byteLength',
    description: 'Access byteLength to get the total byte size of the TypedArray.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'byteLength',
    initialCode: `function getByteLength(arr: Int32Array) {
  // Return the total byte size of the typed array
}`,
    solution: `function getByteLength(arr: Int32Array) {
  return arr.byteLength;
}`,
    tests: [
      {
        description: 'Int32Array(4) has byteLength 16',
        assertion: `expect(getByteLength(new Int32Array(4))).toBe(16);`,
      },
      {
        description: 'Int32Array(1) has byteLength 4',
        assertion: `expect(getByteLength(new Int32Array(1))).toBe(4);`,
      },
      {
        description: 'Int32Array(0) has byteLength 0',
        assertion: `expect(getByteLength(new Int32Array(0))).toBe(0);`,
      },
      {
        description: 'Uint8Array(8) has byteLength 8',
        assertion: `expect(new Uint8Array(8).byteLength).toBe(8);`,
      },
      {
        description: 'Float64Array(2) has byteLength 16',
        assertion: `expect(new Float64Array(2).byteLength).toBe(16);`,
      },
    ],
    hints: ['byteLength = length × BYTES_PER_ELEMENT'],
    tags: [],
  },
  {
    slug: 'typedarray-byteoffset-property',
    title: 'TypedArray.prototype.byteOffset',
    description: 'Access byteOffset to get the offset in bytes from the start of the underlying ArrayBuffer.',
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'TypedArray',
    method: 'byteOffset',
    initialCode: `function getByteOffset(arr: Int32Array) {
  // Return the byte offset of the typed array within its buffer
}`,
    solution: `function getByteOffset(arr: Int32Array) {
  return arr.byteOffset;
}`,
    tests: [
      {
        description: 'Default byteOffset is 0',
        assertion: `expect(getByteOffset(new Int32Array(4))).toBe(0);`,
      },
      {
        description: 'byteOffset of 4 when created with offset 4',
        assertion: `expect(getByteOffset(new Int32Array(new ArrayBuffer(16), 4))).toBe(4);`,
      },
      {
        description: 'byteOffset of 8 when created with offset 8',
        assertion: `expect(getByteOffset(new Int32Array(new ArrayBuffer(16), 8))).toBe(8);`,
      },
      {
        description: 'byteOffset is always non-negative',
        assertion: `expect(getByteOffset(new Int32Array(new ArrayBuffer(16), 0)) >= 0).toBeTruthy();`,
      },
      {
        description: 'byteOffset from array literal is 0',
        assertion: `expect(getByteOffset(new Int32Array([1, 2, 3]))).toBe(0);`,
      },
    ],
    hints: ['new Int32Array(buffer, byteOffset) sets the starting offset'],
    tags: [],
  },
  {
    slug: 'typedarray-buffer-property',
    title: 'TypedArray.prototype.buffer',
    description: 'Access the buffer property to get the underlying ArrayBuffer of a TypedArray.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'buffer',
    initialCode: `function getBuffer(arr: Int32Array) {
  // Return the underlying ArrayBuffer
}`,
    solution: `function getBuffer(arr: Int32Array) {
  return arr.buffer;
}`,
    tests: [
      {
        description: 'buffer is an instance of ArrayBuffer',
        assertion: `expect(getBuffer(new Int32Array(4)) instanceof ArrayBuffer).toBeTruthy();`,
      },
      {
        description: 'buffer byteLength matches expected size',
        assertion: `expect(getBuffer(new Int32Array(4)).byteLength).toBe(16);`,
      },
      {
        description: 'Same buffer reference when created from buffer',
        assertion: `const buf = new ArrayBuffer(16); expect(getBuffer(new Int32Array(buf)) === buf).toBe(true);`,
      },
      {
        description: 'Uint8Array also has a buffer',
        assertion: `expect(new Uint8Array(8).buffer instanceof ArrayBuffer).toBeTruthy();`,
      },
      {
        description: 'Buffer byteLength for Uint8Array',
        assertion: `expect(new Uint8Array(8).buffer.byteLength).toBe(8);`,
      },
    ],
    hints: ['arr.buffer returns the ArrayBuffer backing this typed array'],
    tags: [],
  },
  {
    slug: 'typedarray-instance-bytes-per-element',
    title: 'TypedArray Instance BYTES_PER_ELEMENT',
    description: 'Access the BYTES_PER_ELEMENT property on a TypedArray instance.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'TypedArray',
    method: 'BYTES_PER_ELEMENT',
    initialCode: `function getInstanceBytesPerElement(arr: Int32Array) {
  // Return BYTES_PER_ELEMENT from the instance
}`,
    solution: `function getInstanceBytesPerElement(arr: Int32Array) {
  return arr.BYTES_PER_ELEMENT;
}`,
    tests: [
      {
        description: 'Int32Array instance has BYTES_PER_ELEMENT of 4',
        assertion: `expect(getInstanceBytesPerElement(new Int32Array(1))).toBe(4);`,
      },
      {
        description: 'Uint8Array instance has BYTES_PER_ELEMENT of 1',
        assertion: `expect(new Uint8Array(1).BYTES_PER_ELEMENT).toBe(1);`,
      },
      {
        description: 'Float64Array instance has BYTES_PER_ELEMENT of 8',
        assertion: `expect(new Float64Array(1).BYTES_PER_ELEMENT).toBe(8);`,
      },
      {
        description: 'Int16Array instance has BYTES_PER_ELEMENT of 2',
        assertion: `expect(new Int16Array(1).BYTES_PER_ELEMENT).toBe(2);`,
      },
      {
        description: 'Float32Array instance has BYTES_PER_ELEMENT of 4',
        assertion: `expect(new Float32Array(1).BYTES_PER_ELEMENT).toBe(4);`,
      },
    ],
    hints: ['Instance BYTES_PER_ELEMENT equals the static version'],
    tags: [],
  },
]
