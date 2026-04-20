import type { Exercise } from '@/shared/types/exercises'

export const arrayBufferByteLengthExercises: Exercise[] = [
  {
    slug: 'arraybuffer-bytelength',
    title: 'ArrayBuffer byteLength',
    description: 'Check the byteLength property of ArrayBuffer.',
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'ArrayBuffer',
    initialCode: 'const buf = new ArrayBuffer(16);',
    solution: 'const buf = new ArrayBuffer(16);',
    tests: [
      { description: 'byteLength is 16', assertion: 'expect(new ArrayBuffer(16).byteLength).toBe(16)' },
      { description: 'byteLength is 0', assertion: 'expect(new ArrayBuffer(0).byteLength).toBe(0)' },
      { description: 'typeof byteLength is number', assertion: "expect(typeof new ArrayBuffer(4).byteLength).toBe('number')" },
      { description: 'byteLength is 1024', assertion: 'expect(new ArrayBuffer(1024).byteLength).toBe(1024)' },
      { description: 'byteLength is 2', assertion: 'expect(new ArrayBuffer(2).byteLength).toBe(2)' }
    ],
    tags: []
  }
]
