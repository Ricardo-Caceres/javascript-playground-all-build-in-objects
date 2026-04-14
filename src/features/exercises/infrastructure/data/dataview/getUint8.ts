import type { Exercise } from '@/shared/types/exercises'

export const dataViewGetUint8Exercises: Exercise[] = [
  {
    slug: 'dataview-getuint8',
    title: 'DataView getUint8/setUint8',
    description: 'Test getUint8 and setUint8 methods.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DataView',
    initialCode: 'const dv = new DataView(new ArrayBuffer(1));',
    solution: 'const dv = new DataView(new ArrayBuffer(1));',
    tests: [
      { description: 'set/get 255', assertion: 'const dv = new DataView(new ArrayBuffer(1)); dv.setUint8(0, 255); dv.getUint8(0) === 255' },
      { description: 'set/get 0', assertion: 'const dv = new DataView(new ArrayBuffer(1)); dv.setUint8(0, 0); dv.getUint8(0) === 0' },
      { description: 'set/get at offset 1', assertion: 'const dv = new DataView(new ArrayBuffer(2)); dv.setUint8(1, 128); dv.getUint8(1) === 128' },
      { description: 'typeof getUint8 is function', assertion: "typeof DataView.prototype.getUint8 === 'function'" },
      { description: 'set/get 100', assertion: 'const dv = new DataView(new ArrayBuffer(1)); dv.setUint8(0, 100); dv.getUint8(0) === 100' }
    ],
    tags: []
  }
]
