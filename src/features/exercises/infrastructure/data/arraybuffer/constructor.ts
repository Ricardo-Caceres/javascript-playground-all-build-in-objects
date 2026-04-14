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
      { description: 'Should be instance of ArrayBuffer', assertion: 'new ArrayBuffer(8) instanceof ArrayBuffer' },
      { description: 'byteLength is 8', assertion: 'new ArrayBuffer(8).byteLength === 8' },
      { description: 'typeof new ArrayBuffer(0) is object', assertion: "typeof new ArrayBuffer(0) === 'object'" },
      { description: 'byteLength is 4', assertion: 'new ArrayBuffer(4).byteLength === 4' },
      { description: 'Throws on negative length', assertion: 'expect(() => new ArrayBuffer(-1 as any)).toThrow()' }
    ],
    tags: []
  }
]
