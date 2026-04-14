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
      { description: 'Uint8Array length is 4', assertion: 'new Uint8Array(4).length === 4' },
      { description: 'Int32Array[1] is 2', assertion: 'new Int32Array([1,2,3])[1] === 2' },
      { description: 'Float64Array byteLength is 16', assertion: 'new Float64Array(2).byteLength === 16' },
      { description: 'typeof Uint8Array is object', assertion: "typeof new Uint8Array(1) === 'object'" },
      { description: 'Uint8Array[0] is 255', assertion: 'new Uint8Array([255])[0] === 255' }
    ],
    tags: []
  }
]
