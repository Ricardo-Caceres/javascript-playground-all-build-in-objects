import type { Exercise } from '@/shared/types/exercises'

export const typedArraysExercises: Exercise[] = [
  {
    slug: 'typedarrays-basics',
    title: 'TypedArrays basics',
    description: 'Test basic TypedArray usage.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ArrayBuffer',
    initialCode: 'const arr = new Uint8Array(4);',
    solution: 'const arr = new Uint8Array(4);',
    tests: [
      { description: 'Uint8Array length is 4', assertion: 'expect(new Uint8Array(4).length).toBe(4)' },
      { description: 'Int32Array[1] is 2', assertion: 'expect(new Int32Array([1,2,3])[1]).toBe(2)' },
      { description: 'Float64Array byteLength is 16', assertion: 'expect(new Float64Array(2).byteLength).toBe(16)' },
      { description: 'typeof Uint8Array is object', assertion: "expect(typeof new Uint8Array(1)).toBe('object')" },
      { description: 'Uint8Array[0] is 255', assertion: 'expect(new Uint8Array([255])[0]).toBe(255)' }
    ],
    tags: []
  }
]
