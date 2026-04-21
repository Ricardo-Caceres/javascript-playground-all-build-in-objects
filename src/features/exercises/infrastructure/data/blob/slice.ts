import type { Exercise } from '@/shared/types/exercises'

export const blobSliceExercises: Exercise[] = [
  {
    slug: 'blob-slice-1',
    title: 'Blob.slice — slice(0,3) size',
    description: `## Blob.slice() Method\n\n\`blob.slice(start, end)\` returns a new Blob containing bytes from \`start\` (inclusive) to \`end\` (exclusive).\n\n**Challenge:** Verify that \`new Blob(['hello']).slice(0, 3).size === 3\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Blob',
    initialCode: `// Slice the first 3 bytes\nconst b = new Blob(['hello'])\nb.slice(0, 3)\n`,
    solution: `new Blob(['hello']).slice(0, 3).size`,
    tests: [
      { description: 'slice(0,3) size is 3', assertion:"expect(result).toBe(3)" },
      { description: 'slice(0,5) size is 5', assertion:"expect(new Blob(['hello']).slice(0, 5).size).toBe(5)" },
      { description: 'slice(1,3) size is 2', assertion:"expect(new Blob(['hello']).slice(1, 3).size).toBe(2)" },
      { description: 'slice(0,1) size is 1', assertion:"expect(new Blob(['hello']).slice(0, 1).size).toBe(1)" },
      { description: 'size is a number', assertion:"expect(typeof result).toBe('number')" },
    ],
    hints: ['slice(start, end) — the end index is exclusive.'],
    tags: ['Blob', 'slice', 'instance-method'],
    usageExample: {
      code: `const b = new Blob(['Hello World'])
const part = b.slice(0, 5)
await part.text()  // → 'Hello'`,
      explanation: {
        en: "slice() returns a new Blob containing a portion of the original Blob's data.",
        es: "slice() devuelve un nuevo Blob que contiene una parte de los datos del Blob original.",
      },
    },
  },
  {
    slug: 'blob-slice-2',
    title: 'Blob.slice — returns Blob instance',
    description: `## Blob.slice() Returns Blob\n\n\`blob.slice()\` returns a new \`Blob\` instance, not just a plain object.\n\n**Challenge:** Verify that \`new Blob(['hello']).slice(0, 3) instanceof Blob\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Blob',
    initialCode: `// Verify that slice returns a Blob\nconst b = new Blob(['hello'])\nb.slice(0, 3) instanceof Blob\n`,
    solution: `new Blob(['hello']).slice(0, 3) instanceof Blob`,
    tests: [
      { description: 'slice returns a Blob', assertion:"expect(result).toBe(true)" },
      { description: 'slice result is not null', assertion:"expect(new Blob(['hello']).slice(0, 3) !== null).toBe(true)" },
      { description: 'slice result is truthy', assertion:"expect(new Blob(['hello']).slice(0, 3)).toBeTruthy()" },
      { description: 'slice result is a different object', assertion:"const b = new Blob(['hello']); expect(b.slice(0, 3) === b).toBe(false)" },
      { description: 'instanceof Object', assertion:"expect(new Blob(['hello']).slice(0, 3) instanceof Object).toBe(true)" },
    ],
    hints: ['Blob.slice always returns a new Blob object.'],
    tags: ['Blob', 'slice', 'instance-method', 'instanceof'],
    usageExample: {
      code: `const b = new Blob(['ABCDEF'])
b.slice(2, 4).size  // → 2`,
      explanation: {
        en: "The slice is a copy; modifying one Blob does not affect the other.",
        es: "El slice es una copia; modificar un Blob no afecta al otro.",
      },
    },
  },
  {
    slug: 'blob-slice-3',
    title: 'Blob.slice — contentType argument',
    description: `## Blob.slice() with contentType\n\n\`blob.slice(start, end, contentType)\` sets the \`type\` of the returned Blob.\n\n**Challenge:** Verify that \`new Blob(['hello']).slice(0, 3, 'text/plain').type === 'text/plain'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Blob',
    initialCode: `// Slice with a content type\nconst b = new Blob(['hello'])\nb.slice(0, 3, 'text/plain')\n`,
    solution: `new Blob(['hello']).slice(0, 3, 'text/plain').type`,
    tests: [
      { description: "slice with 'text/plain' type", assertion:"expect(result).toBe('text/plain')" },
      { description: "slice with 'image/png' type", assertion:"expect(new Blob(['hello']).slice(0, 3, 'image/png').type).toBe('image/png')" },
      { description: 'type is a string', assertion:"expect(typeof new Blob(['hello']).slice(0, 3, 'text/html').type).toBe('string')" },
      { description: 'size is still 3', assertion:"expect(new Blob(['hello']).slice(0, 3, 'text/plain').size).toBe(3)" },
      { description: 'without contentType type is empty', assertion:"expect(new Blob(['hello']).slice(0, 3).type).toBe('')" },
    ],
    hints: ['The third argument to slice sets the MIME type of the resulting Blob.'],
    tags: ['Blob', 'slice', 'instance-method', 'type', 'contentType'],
    usageExample: {
      code: `const b = new Blob(['hello'])
b.slice(-3).text().then(t => t)  // → 'llo'`,
      explanation: {
        en: "Negative indices count from the end of the Blob.",
        es: "Los índices negativos cuentan desde el final del Blob.",
      },
    },
  },
  {
    slug: 'blob-slice-4',
    title: 'Blob.slice — slice from offset',
    description: `## Blob.slice() from Offset\n\n\`blob.slice(start)\` slices from \`start\` to the end of the Blob.\n\n\`new Blob(['hello']).slice(2).size\` equals **3** (\`'llo'\` = 3 bytes).\n\n**Challenge:** Verify that \`new Blob(['hello']).slice(2).size === 3\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Blob',
    initialCode: `// Slice from an offset\nconst b = new Blob(['hello'])\nb.slice(2)\n`,
    solution: `new Blob(['hello']).slice(2).size`,
    tests: [
      { description: "slice(2) from 'hello' is 3", assertion:"expect(result).toBe(3)" },
      { description: "slice(1) from 'hello' is 4", assertion:"expect(new Blob(['hello']).slice(1).size).toBe(4)" },
      { description: "slice(0) is full size", assertion:"expect(new Blob(['hello']).slice(0).size).toBe(5)" },
      { description: "slice(5) is empty", assertion:"expect(new Blob(['hello']).slice(5).size).toBe(0)" },
      { description: 'result is Blob', assertion:"expect(new Blob(['hello']).slice(2) instanceof Blob).toBe(true)" },
    ],
    hints: ['Omitting the end argument slices to the end of the Blob.'],
    tags: ['Blob', 'slice', 'instance-method', 'offset'],
    usageExample: {
      code: `const b = new Blob(['data'], { type: 'text/plain' })
const s = b.slice(0, 2, 'text/html')
s.type  // → 'text/html'`,
      explanation: {
        en: "Pass a MIME type as the third argument to change the type of the sliced Blob.",
        es: "Pasa un tipo MIME como tercer argumento para cambiar el tipo del Blob resultante.",
      },
    },
  },
  {
    slug: 'blob-slice-5',
    title: 'Blob.slice — slice(0,0) empty result',
    description: `## Blob.slice() Empty Slice\n\n\`blob.slice(0, 0)\` returns a Blob with \`size === 0\` — an empty byte range.\n\n**Challenge:** Verify that \`new Blob(['hello']).slice(0, 0).size === 0\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Blob',
    initialCode: `// Slice an empty range\nconst b = new Blob(['hello'])\nb.slice(0, 0)\n`,
    solution: `new Blob(['hello']).slice(0, 0).size`,
    tests: [
      { description: 'slice(0,0) size is 0', assertion:"expect(result).toBe(0)" },
      { description: 'slice(2,2) size is 0', assertion:"expect(new Blob(['hello']).slice(2, 2).size).toBe(0)" },
      { description: 'result is still a Blob', assertion:"expect(new Blob(['hello']).slice(0, 0) instanceof Blob).toBe(true)" },
      { description: 'size is a number', assertion:"expect(typeof result).toBe('number')" },
      { description: 'size is not negative', assertion:"expect(result).toBeGreaterThanOrEqual(0)" },
    ],
    hints: ['When start === end, there are zero bytes in the range.'],
    tags: ['Blob', 'slice', 'instance-method', 'empty'],
    usageExample: {
      code: `const b = new Blob(['Hello'])
b.slice(0).size === b.size  // → true`,
      explanation: {
        en: "slice(0) creates a full copy of the Blob.",
        es: "slice(0) crea una copia completa del Blob.",
      },
    },
  },
]
