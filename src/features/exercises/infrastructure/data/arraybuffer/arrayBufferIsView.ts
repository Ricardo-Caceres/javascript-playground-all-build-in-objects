import type { Exercise } from '@/shared/types/exercises'

export const arrayBufferIsViewExercises: Exercise[] = [
  {
    slug: 'arraybuffer-isview',
    title: 'ArrayBuffer.isView',
    description: 'Test ArrayBuffer.isView static method.',
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'ArrayBuffer',
    initialCode: 'const arr = new Uint8Array(4);',
    solution: 'const arr = new Uint8Array(4);',
    tests: [
      { description: 'isView(Uint8Array) is true', assertion: 'expect(ArrayBuffer.isView(new Uint8Array(4))).toBe(true)' },
      { description: 'isView(ArrayBuffer) is false', assertion: 'expect(ArrayBuffer.isView(new ArrayBuffer(4))).toBe(false)' },
      { description: 'isView(DataView) is true', assertion: 'expect(ArrayBuffer.isView(new DataView(new ArrayBuffer(4)))).toBe(true)' },
      { description: 'isView([]) is false', assertion: 'expect(ArrayBuffer.isView([])).toBe(false)' },
      { description: 'isView(Int32Array) is true', assertion: 'expect(ArrayBuffer.isView(new Int32Array(2))).toBe(true)' }
    ],
    tags: []
  }
]
