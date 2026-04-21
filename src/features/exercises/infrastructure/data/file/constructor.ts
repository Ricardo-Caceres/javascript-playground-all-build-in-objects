import type { Exercise } from '@/shared/types/exercises'

export const fileConstructorExercises: Exercise[] = [
  {
    slug: 'file-constructor-1',
    title: 'File — name property',
    description: `## File Constructor\n\n\`new File(fileParts, fileName, options)\` creates a File object. The second argument sets the \`name\` property.\n\n**Challenge:** Verify that \`new File(['hello'], 'test.txt').name === 'test.txt'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'File',
    initialCode: `// Create a File and read its name\nconst f = new File(['hello'], 'test.txt')\n`,
    solution: `new File(['hello'], 'test.txt').name`,
    tests: [
      { description: "name is 'test.txt'", assertion: "expect(result).toBe('test.txt')" },
      { description: 'name is a string', assertion: "expect(typeof result).toBe('string')" },
      { description: "name 'data.json' is preserved", assertion: "expect(new File(['{}'], 'data.json').name).toBe('data.json')" },
      { description: 'name is truthy', assertion: "expect(new File(['x'], 'f.txt').name).toBeTruthy()" },
      { description: 'different filenames are preserved', assertion: "expect(new File(['x'], 'image.png').name).toBe('image.png')" },
    ],
    hints: ['The second argument to the File constructor is the filename.'],
    tags: ['File', 'constructor', 'name'],
    usageExample: {
      code: `const f = new File(['hello'], 'greeting.txt', { type: 'text/plain' })
f.name  // → 'greeting.txt'`,
      explanation: {
        en: "File() creates a File object with content, a name, and an optional MIME type.",
        es: "File() crea un objeto File con contenido, un nombre y un tipo MIME opcional.",
      },
    },
  },
  {
    slug: 'file-constructor-2',
    title: 'File — size property',
    description: `## File size Property\n\nSince \`File\` extends \`Blob\`, it has a \`size\` property reflecting the byte count of its content.\n\n**Challenge:** Verify that \`new File(['hello'], 'test.txt').size === 5\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'File',
    initialCode: `// Check the size of a File\nconst f = new File(['hello'], 'test.txt')\n`,
    solution: `new File(['hello'], 'test.txt').size`,
    tests: [
      { description: "size of 'hello' is 5", assertion: "expect(result).toBe(5)" },
      { description: 'size is a number', assertion: "expect(typeof result).toBe('number')" },
      { description: "size of 'hi' is 2", assertion: "expect(new File(['hi'], 'f.txt').size).toBe(2)" },
      { description: 'empty file size is 0', assertion: "expect(new File([], 'f.txt').size).toBe(0)" },
      { description: 'size is non-negative', assertion: "expect(result).toBeGreaterThanOrEqual(0)" },
    ],
    hints: ['File inherits size from Blob.'],
    tags: ['File', 'constructor', 'size'],
    usageExample: {
      code: `const f = new File(['data'], 'file.json', { type: 'application/json' })
f.type  // → 'application/json'`,
      explanation: {
        en: "Set the type option to specify the MIME type of the file.",
        es: "Establece la opción type para especificar el tipo MIME del archivo.",
      },
    },
  },
  {
    slug: 'file-constructor-3',
    title: 'File — type option',
    description: `## File MIME Type\n\nPass \`{ type }\` as the third argument to set the MIME type, just like Blob.\n\n**Challenge:** Verify that \`new File(['x'], 'f.txt', { type: 'text/plain' }).type === 'text/plain'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'File',
    initialCode: `// Set the MIME type via options\nconst f = new File(['x'], 'f.txt', { type: 'text/plain' })\n`,
    solution: `new File(['x'], 'f.txt', { type: 'text/plain' }).type`,
    tests: [
      { description: "type is 'text/plain'", assertion: "expect(result).toBe('text/plain')" },
      { description: "type is 'image/jpeg'", assertion: "expect(new File(['x'], 'img.jpg', { type: 'image/jpeg' }).type).toBe('image/jpeg')" },
      { description: 'type is a string', assertion: "expect(typeof new File(['x'], 'f.txt', { type: 'text/html' }).type).toBe('string')" },
      { description: "default type is ''", assertion: "expect(new File(['x'], 'f.txt').type).toBe('')" },
      { description: 'type does not affect size', assertion: "expect(new File(['hello'], 'f.txt', { type: 'text/plain' }).size).toBe(5)" },
    ],
    hints: ['File accepts the same options as Blob, including type.'],
    tags: ['File', 'constructor', 'type', 'MIME'],
    usageExample: {
      code: `const f = new File(['hi'], 'test.txt')
f.size  // → 2`,
      explanation: {
        en: "size returns the number of bytes in the file content.",
        es: "size devuelve el número de bytes en el contenido del archivo.",
      },
    },
  },
  {
    slug: 'file-constructor-4',
    title: 'File — instanceof Blob',
    description: `## File Extends Blob\n\n\`File\` is a subclass of \`Blob\`. Therefore \`new File(['x'], 'f.txt') instanceof Blob\` is \`true\`.\n\n**Challenge:** Verify the Blob inheritance.`,
    category: 'constructor',
    difficulty: 'intermediate',
    builtIn: 'File',
    initialCode: `// Check inheritance from Blob\nconst f = new File(['x'], 'f.txt')\nf instanceof Blob\n`,
    solution: `new File(['x'], 'f.txt') instanceof Blob`,
    tests: [
      { description: 'instanceof Blob is true', assertion: "expect(result).toBe(true)" },
      { description: 'instanceof Object is true', assertion: "expect(new File(['x'], 'f.txt') instanceof Object).toBe(true)" },
      { description: 'has size property from Blob', assertion: "expect(new File(['x'], 'f.txt')).toHaveProperty('size')" },
      { description: 'has type property from Blob', assertion: "expect(new File(['x'], 'f.txt')).toHaveProperty('type')" },
      { description: 'has slice method from Blob', assertion: "expect(typeof new File(['x'], 'f.txt').slice).toBe('function')" },
    ],
    hints: ['File inherits size, type, and slice from Blob.'],
    tags: ['File', 'constructor', 'instanceof', 'Blob', 'inheritance'],
    usageExample: {
      code: `const f = new File([''], 'empty.txt')
f instanceof Blob  // → true`,
      explanation: {
        en: "File extends Blob and inherits all Blob methods like text() and arrayBuffer().",
        es: "File extiende Blob y hereda todos los métodos de Blob como text() y arrayBuffer().",
      },
    },
  },
  {
    slug: 'file-constructor-5',
    title: 'File — instanceof File',
    description: `## File instanceof\n\n\`new File(['x'], 'f.txt') instanceof File\` is \`true\`.\n\n**Challenge:** Verify the instanceof check for File itself.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'File',
    initialCode: `// Check instanceof File\nconst f = new File(['x'], 'f.txt')\nf instanceof File\n`,
    solution: `new File(['x'], 'f.txt') instanceof File`,
    tests: [
      { description: 'instanceof File is true', assertion: "expect(result).toBe(true)" },
      { description: 'instanceof Blob is also true', assertion: "expect(result).toBe(true)" },
      { description: 'two File instances are different objects', assertion: "expect(new File(['x'], 'f.txt') === new File(['x'], 'f.txt')).toBe(false)" },
      { description: 'is truthy', assertion: "expect(new File(['x'], 'f.txt')).toBeTruthy()" },
      { description: 'has name property', assertion: "expect(new File(['x'], 'f.txt')).toHaveProperty('name')" },
    ],
    hints: ['File is its own class and also a subclass of Blob.'],
    tags: ['File', 'constructor', 'instanceof'],
    usageExample: {
      code: `const f = new File(['content'], 'doc.txt', { lastModified: Date.now() })
f.lastModified  // → current timestamp`,
      explanation: {
        en: "lastModified stores when the file was last modified as a Unix timestamp.",
        es: "lastModified almacena cuándo se modificó el archivo por última vez como timestamp Unix.",
      },
    },
  },
]
