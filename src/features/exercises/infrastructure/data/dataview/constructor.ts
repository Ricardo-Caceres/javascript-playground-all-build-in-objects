import type { Exercise } from '@/shared/types/exercises'

export const dataViewConstructorExercises: Exercise[] = [
  {
    slug: 'dataview-constructor',
    title: 'DataView constructor',
    description: 'Test DataView construction and properties.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'DataView',
    initialCode: 'const dv = new DataView(new ArrayBuffer(4));',
    solution: 'const dv = new DataView(new ArrayBuffer(4));',
    tests: [
      { description: 'instanceof DataView', assertion: 'expect(new DataView(new ArrayBuffer(4)) instanceof DataView).toBe(true)' },
      { description: 'typeof DataView is object', assertion: "expect(typeof new DataView(new ArrayBuffer(4))).toBe('object')" },
      { description: 'byteLength is 8', assertion: 'expect(new DataView(new ArrayBuffer(8)).byteLength).toBe(8)' },
      { description: 'byteOffset is 4', assertion: 'expect(new DataView(new ArrayBuffer(8), 4).byteOffset).toBe(4)' },
      { description: 'buffer is ArrayBuffer', assertion: 'expect(new DataView(new ArrayBuffer(8)).buffer instanceof ArrayBuffer).toBe(true)' }
    ],
    tags: []
  }
]
