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
      { description: 'byteLength is 16', assertion: 'new ArrayBuffer(16).byteLength === 16' },
      { description: 'byteLength is 0', assertion: 'new ArrayBuffer(0).byteLength === 0' },
      { description: 'typeof byteLength is number', assertion: "typeof new ArrayBuffer(4).byteLength === 'number'" },
      { description: 'byteLength is 1024', assertion: 'new ArrayBuffer(1024).byteLength === 1024' },
      { description: 'byteLength is 2', assertion: 'new ArrayBuffer(2).byteLength === 2' }
    ],
    tags: []
  }
]
