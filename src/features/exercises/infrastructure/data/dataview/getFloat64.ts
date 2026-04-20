import type { Exercise } from '@/shared/types/exercises'

export const dataViewGetFloat64Exercises: Exercise[] = [
  {
    slug: 'dataview-getfloat64',
    title: 'DataView getFloat64/setFloat64',
    description: 'Test getFloat64 and setFloat64 methods.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DataView',
    initialCode: 'const dv = new DataView(new ArrayBuffer(8));',
    solution: 'const dv = new DataView(new ArrayBuffer(8));',
    tests: [
      { description: 'set/get 3.14', assertion: 'const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, 3.14); expect(Math.abs(dv.getFloat64(0) - 3.14) < 1e-10).toBe(true)' },
      { description: 'set/get 0', assertion: 'const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, 0); expect(dv.getFloat64(0)).toBe(0)' },
      { description: 'typeof getFloat64 is function', assertion: "expect(typeof DataView.prototype.getFloat64).toBe('function')" },
      { description: 'set/get -1.5', assertion: 'const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, -1.5); expect(dv.getFloat64(0)).toBe(-1.5)' },
      { description: 'set/get 1e100', assertion: 'const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, 1e100); expect(dv.getFloat64(0)).toBe(1e100)' }
    ],
    tags: []
  }
]
