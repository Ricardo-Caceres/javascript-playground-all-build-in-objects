import type { Exercise } from '@/shared/types/exercises'

export const dataViewByteOffsetExercises: Exercise[] = [
  {
    slug: 'dataview-byteoffset',
    title: 'DataView byteOffset',
    description: 'Test the byteOffset property of DataView.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'DataView',
    initialCode: 'const dv = new DataView(new ArrayBuffer(8));',
    solution: 'const dv = new DataView(new ArrayBuffer(8));',
    tests: [
      { description: 'byteOffset is 0', assertion: 'new DataView(new ArrayBuffer(8)).byteOffset === 0' },
      { description: 'byteOffset is 4', assertion: 'new DataView(new ArrayBuffer(8), 4).byteOffset === 4' },
      { description: 'byteOffset is 2', assertion: 'new DataView(new ArrayBuffer(8), 2, 4).byteOffset === 2' },
      { description: 'typeof byteOffset is number', assertion: "typeof new DataView(new ArrayBuffer(4)).byteOffset === 'number'" },
      { description: 'byteOffset is 8', assertion: 'new DataView(new ArrayBuffer(16), 8).byteOffset === 8' }
    ],
    tags: []
  }
]
