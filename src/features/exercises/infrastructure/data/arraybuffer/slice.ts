import type { Exercise } from '@/shared/types/exercises'

export const arrayBufferSliceExercises: Exercise[] = [
  {
    slug: 'arraybuffer-slice',
    title: 'ArrayBuffer slice',
    description: 'Test the slice method of ArrayBuffer.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'ArrayBuffer',
    initialCode: 'const buf = new ArrayBuffer(8);',
    solution: 'const buf = new ArrayBuffer(8);',
    tests: [
      { description: 'slice(0,4) has byteLength 4', assertion: 'expect(new ArrayBuffer(8).slice(0, 4).byteLength).toBe(4)' },
      { description: 'slice(4) has byteLength 4', assertion: 'expect(new ArrayBuffer(8).slice(4).byteLength).toBe(4)' },
      { description: 'slice(0,8) is ArrayBuffer', assertion: 'expect(new ArrayBuffer(8).slice(0, 8) instanceof ArrayBuffer).toBe(true)' },
      { description: 'slice(2,6) has byteLength 4', assertion: 'expect(new ArrayBuffer(8).slice(2, 6).byteLength).toBe(4)' },
      { description: 'typeof slice is function', assertion: "expect(typeof ArrayBuffer.prototype.slice).toBe('function')" }
    ],
    tags: []
  }
]
