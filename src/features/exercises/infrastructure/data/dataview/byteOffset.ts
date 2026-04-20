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
      { description: 'byteOffset is 0', assertion: 'expect(new DataView(new ArrayBuffer(8)).byteOffset).toBe(0)' },
      { description: 'byteOffset is 4', assertion: 'expect(new DataView(new ArrayBuffer(8), 4).byteOffset).toBe(4)' },
      { description: 'byteOffset is 2', assertion: 'expect(new DataView(new ArrayBuffer(8), 2, 4).byteOffset).toBe(2)' },
      { description: 'typeof byteOffset is number', assertion: "expect(typeof new DataView(new ArrayBuffer(4)).byteOffset).toBe('number')" },
      { description: 'byteOffset is 8', assertion: 'expect(new DataView(new ArrayBuffer(16), 8).byteOffset).toBe(8)' }
    ],
    tags: []
  }
]
