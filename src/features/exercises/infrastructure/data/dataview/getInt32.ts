import type { Exercise } from '@/shared/types/exercises'

export const dataViewGetInt32Exercises: Exercise[] = [
  {
    slug: 'dataview-getint32',
    title: 'DataView getInt32/setInt32',
    description: 'Test getInt32 and setInt32 methods.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DataView',
    initialCode: 'const dv = new DataView(new ArrayBuffer(4));',
    solution: 'const dv = new DataView(new ArrayBuffer(4));',
    tests: [
      { description: 'set/get 42', assertion: 'const dv = new DataView(new ArrayBuffer(4)); dv.setInt32(0, 42); dv.getInt32(0) === 42' },
      { description: 'set/get -1', assertion: 'const dv = new DataView(new ArrayBuffer(4)); dv.setInt32(0, -1); dv.getInt32(0) === -1' },
      { description: 'typeof getInt32 is function', assertion: "typeof DataView.prototype.getInt32 === 'function'" },
      { description: 'set/get at offset 4', assertion: 'const dv = new DataView(new ArrayBuffer(8)); dv.setInt32(4, 100); dv.getInt32(4) === 100' },
      { description: 'set/get 0', assertion: 'const dv = new DataView(new ArrayBuffer(4)); dv.setInt32(0, 0); dv.getInt32(0) === 0' }
    ],
    tags: []
  }
]
