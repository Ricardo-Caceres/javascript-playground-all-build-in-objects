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
      { description: 'instanceof DataView', assertion: 'new DataView(new ArrayBuffer(4)) instanceof DataView' },
      { description: 'typeof DataView is object', assertion: "typeof new DataView(new ArrayBuffer(4)) === 'object'" },
      { description: 'byteLength is 8', assertion: 'new DataView(new ArrayBuffer(8)).byteLength === 8' },
      { description: 'byteOffset is 4', assertion: 'new DataView(new ArrayBuffer(8), 4).byteOffset === 4' },
      { description: 'buffer is ArrayBuffer', assertion: 'new DataView(new ArrayBuffer(8)).buffer instanceof ArrayBuffer' }
    ],
    tags: []
  }
]
