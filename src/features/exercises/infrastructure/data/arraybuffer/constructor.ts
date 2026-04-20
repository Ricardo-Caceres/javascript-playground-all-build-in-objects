import type { Exercise } from '@/shared/types/exercises'

export const arrayBufferConstructorExercises: Exercise[] = [
  {
    slug: 'arraybuffer-constructor-instanceof',
    title: 'ArrayBuffer instanceof',
    description: 'Check if new ArrayBuffer(8) is an instance of ArrayBuffer.',
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'ArrayBuffer',
    initialCode: 'const buf = new ArrayBuffer(8);',
    solution: 'const buf = new ArrayBuffer(8);',
    tests: [
      { description: 'Should be instance of ArrayBuffer', assertion: 'expect(new ArrayBuffer(8) instanceof ArrayBuffer).toBe(true)' },
      { description: 'byteLength is 8', assertion: 'expect(new ArrayBuffer(8).byteLength).toBe(8)' },
      { description: 'typeof new ArrayBuffer(0) is object', assertion: "expect(typeof new ArrayBuffer(0)).toBe('object')" },
      { description: 'byteLength is 4', assertion: 'expect(new ArrayBuffer(4).byteLength).toBe(4)' },
      { description: 'Throws on negative length', assertion: 'expect(() => new ArrayBuffer(-1)).toThrow()' }
    ],
    tags: []
  }
]
