import type { Exercise } from '@/shared/types/exercises'

export const textEncoderConstructorExercises: Exercise[] = [
  {
    slug: 'textencoder-constructor-1',
    title: 'TextEncoder — encoding property',
    description: `## TextEncoder Constructor\n\n\`new TextEncoder()\` always uses UTF-8. The \`encoding\` property returns the label \`'utf-8'\`.\n\n**Challenge:** Access the \`encoding\` property of a new TextEncoder.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TextEncoder',
    initialCode: `// Access the encoding property of a TextEncoder\nconst enc = new TextEncoder()\n`,
    solution: `new TextEncoder().encoding`,
    tests: [
      { description: "encoding is 'utf-8'", assertion:"expect(result).toBe('utf-8')" },
      { description: 'encoding is a string', assertion:"expect(typeof result).toBe('string')" },
      { description: 'encoding is lowercase', assertion:"expect(result).toBe(result.toLowerCase())" },
      { description: 'two encoders share the same encoding', assertion:"expect(result).toBe(result)" },
      { description: 'encoding is not utf-16', assertion:"expect(result !== 'utf-16').toBe(true)" },
    ],
    hints: ['TextEncoder only supports UTF-8.'],
    tags: ['TextEncoder', 'constructor', 'encoding'],
    usageExample: {
      code: `const enc = new TextEncoder()
enc.encoding  // → 'utf-8'`,
      explanation: {
        en: "TextEncoder always uses UTF-8 encoding to convert strings to bytes.",
        es: "TextEncoder siempre usa codificación UTF-8 para convertir cadenas en bytes.",
      },
    },
  },
  {
    slug: 'textencoder-constructor-2',
    title: 'TextEncoder — instanceof check',
    description: `## TextEncoder instanceof\n\n\`new TextEncoder() instanceof TextEncoder\` is \`true\`.\n\n**Challenge:** Verify the instanceof check.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TextEncoder',
    initialCode: `// Check instanceof\nconst enc = new TextEncoder()\n`,
    solution: `new TextEncoder() instanceof TextEncoder`,
    tests: [
      { description: 'instanceof TextEncoder', assertion:'expect(result).toBe(true)' },
      { description: 'instanceof Object', assertion:'expect(new TextEncoder() instanceof Object).toBe(true)' },
      { description: 'two instances are different objects', assertion:'expect(new TextEncoder() === new TextEncoder()).toBe(false)' },
      { description: 'is truthy', assertion:'expect(new TextEncoder()).toBeTruthy()' },
      { description: 'not null', assertion:'expect(new TextEncoder() !== null).toBe(true)' },
    ],
    hints: ['TextEncoder is a constructor function.'],
    tags: ['TextEncoder', 'constructor', 'instanceof'],
    usageExample: {
      code: `new TextEncoder() instanceof TextEncoder  // → true`,
      explanation: {
        en: "TextEncoder instances can be checked with instanceof.",
        es: "Las instancias de TextEncoder se pueden verificar con instanceof.",
      },
    },
  },
  {
    slug: 'textencoder-constructor-3',
    title: 'TextEncoder — encode empty string',
    description: `## Encoding an Empty String\n\n\`new TextEncoder().encode('')\` returns a \`Uint8Array\` with \`length === 0\`.\n\n**Challenge:** Verify that encoding an empty string gives a zero-length Uint8Array.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TextEncoder',
    initialCode: `// Encode an empty string\nconst enc = new TextEncoder()\nenc.encode('')\n`,
    solution: `new TextEncoder().encode('').length`,
    tests: [
      { description: "encode('') length is 0", assertion:"expect(result).toBe(0)" },
      { description: "encode('') is Uint8Array", assertion:"expect(new TextEncoder().encode('') instanceof Uint8Array).toBe(true)" },
      { description: "encode('') byteLength is 0", assertion:"expect(new TextEncoder().encode('').byteLength).toBe(0)" },
      { description: 'encoding property still utf-8', assertion:"expect(result).toBe('utf-8')" },
      { description: "encode('') is not null", assertion:"expect(new TextEncoder().encode('') !== null).toBe(true)" },
    ],
    hints: ["Encoding an empty string produces an empty byte array."],
    tags: ['TextEncoder', 'constructor', 'encode', 'Uint8Array'],
    usageExample: {
      code: `const enc = new TextEncoder()
enc.encode('A')  // → Uint8Array [65]`,
      explanation: {
        en: "encode() converts a string into a Uint8Array of UTF-8 bytes.",
        es: "encode() convierte una cadena en un Uint8Array de bytes UTF-8.",
      },
    },
  },
  {
    slug: 'textencoder-constructor-4',
    title: 'TextEncoder — encode single ASCII character',
    description: `## Encoding ASCII\n\nASCII characters map 1-to-1 in UTF-8. \`encode('A')\` returns a Uint8Array of length 1.\n\n**Challenge:** Verify that encoding \`'A'\` yields a 1-byte array.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'TextEncoder',
    initialCode: `// Encode a single ASCII character\nconst enc = new TextEncoder()\nenc.encode('A')\n`,
    solution: `new TextEncoder().encode('A').length`,
    tests: [
      { description: "encode('A') length is 1", assertion:"expect(result).toBe(1)" },
      { description: "encode('A') is Uint8Array", assertion:"expect(new TextEncoder().encode('A') instanceof Uint8Array).toBe(true)" },
      { description: "encode('A')[0] is 65", assertion:"expect(new TextEncoder().encode('A')[0]).toBe(65)" },
      { description: "encode('Z') length is 1", assertion:"expect(new TextEncoder().encode('Z').length).toBe(1)" },
      { description: "encode('hello') length is 5", assertion:"expect(new TextEncoder().encode('hello').length).toBe(5)" },
    ],
    hints: ['ASCII characters are single bytes in UTF-8.'],
    tags: ['TextEncoder', 'constructor', 'encode', 'ASCII'],
    usageExample: {
      code: `const enc = new TextEncoder()
typeof enc  // → 'object'`,
      explanation: {
        en: "TextEncoder is a constructor that produces objects, not a plain function.",
        es: "TextEncoder es un constructor que produce objetos, no una función simple.",
      },
    },
  },
  {
    slug: 'textencoder-constructor-5',
    title: 'TextEncoder — encode multi-byte character',
    description: `## UTF-8 Multi-byte Encoding\n\nThe Euro sign \`'€'\` (U+20AC) requires **3 bytes** in UTF-8.\n\nUTF-8 encodes code points > U+07FF using 3 or 4 bytes. U+20AC encodes as \`0xE2 0x82 0xAC\`.\n\n**Challenge:** Verify that \`encode('€').length === 3\`.`,
    category: 'constructor',
    difficulty: 'advanced',
    builtIn: 'TextEncoder',
    initialCode: `// Encode a multi-byte UTF-8 character\nconst enc = new TextEncoder()\nenc.encode('€')\n`,
    solution: `new TextEncoder().encode('€').length`,
    tests: [
      { description: "encode('€') length is 3", assertion:"expect(result).toBe(3)" },
      { description: "encode('€') first byte is 0xE2", assertion:"expect(new TextEncoder().encode('€')[0]).toBe(0xE2)" },
      { description: "encode('€') second byte is 0x82", assertion:"expect(new TextEncoder().encode('€')[1]).toBe(0x82)" },
      { description: "encode('€') third byte is 0xAC", assertion:"expect(new TextEncoder().encode('€')[2]).toBe(0xAC)" },
      { description: "encode('€') is Uint8Array", assertion:"expect(new TextEncoder().encode('€') instanceof Uint8Array).toBe(true)" },
    ],
    hints: ['U+20AC (€) is encoded as 3 bytes in UTF-8: 0xE2, 0x82, 0xAC.'],
    tags: ['TextEncoder', 'constructor', 'encode', 'multi-byte', 'UTF-8'],
    usageExample: {
      code: `new TextEncoder().encoding === 'utf-8'  // → true`,
      explanation: {
        en: "All TextEncoder instances use UTF-8; it is the only supported encoding.",
        es: "Todas las instancias de TextEncoder usan UTF-8; es la única codificación admitida.",
      },
    },
  },
]
