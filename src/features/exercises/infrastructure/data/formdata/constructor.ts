import type { Exercise } from '@/shared/types/exercises'

export const formDataConstructorExercises: Exercise[] = [
  {
    slug: 'formdata-constructor-1',
    title: 'FormData Constructor — instanceof check',
    description: `## FormData Constructor\n\n\`new FormData()\` creates an empty form data object used to build key/value pairs for form submission.\n\n**Challenge:** Confirm that \`new FormData()\` is an instance of \`FormData\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `// Check instanceof FormData\n`,
    solution: `new FormData() instanceof FormData`,
    tests: [
      { description: 'instanceof FormData', assertion: "expect(result).toBeTruthy()" },
      { description: 'is truthy', assertion: "expect(new FormData()).toBeTruthy()" },
      { description: 'typeof is object', assertion: "expect(result).toBe('object')" },
      { description: 'entries starts empty', assertion: "expect(result).toBe(0)" },
      { description: 'can append and get', assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" },
    ],
    hints: ['FormData is a Web API class available in browsers and Node.js 18+'],
    tags: ['FormData', 'constructor'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('name', 'Ana')
fd.get('name')  // → 'Ana'`,
      explanation: {
        en: "FormData builds a set of key-value pairs for submitting form data.",
        es: "FormData construye un conjunto de pares clave-valor para enviar datos de formulario.",
      },
    },
  },
  {
    slug: 'formdata-constructor-2',
    title: 'FormData Constructor — typeof',
    description: `## FormData typeof\n\nLike all objects in JavaScript, \`typeof new FormData()\` returns \`'object'\`.\n\n**Challenge:** Verify that \`typeof new FormData()\` is \`'object'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `// Check typeof new FormData()\n`,
    solution: `typeof new FormData()`,
    tests: [
      { description: "typeof is 'object'", assertion: "expect(result).toBe('object')" },
      { description: 'instanceof FormData', assertion: "expect(result).toBeTruthy()" },
      { description: 'is truthy', assertion: "expect(new FormData()).toBeTruthy()" },
      { description: 'entries starts empty', assertion: "expect(result).toBe(0)" },
      { description: 'can append and get', assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" },
    ],
    hints: ['All constructed objects have typeof === "object"'],
    tags: ['FormData', 'constructor', 'typeof'],
    usageExample: {
      code: `const fd = new FormData()
fd instanceof FormData  // → true`,
      explanation: {
        en: "FormData instances can be verified with instanceof.",
        es: "Las instancias de FormData se pueden verificar con instanceof.",
      },
    },
  },
  {
    slug: 'formdata-constructor-3',
    title: 'FormData Constructor — starts empty',
    description: `## FormData starts empty\n\nA freshly created \`FormData\` has no entries.\n\n**Challenge:** Verify that \`Array.from(new FormData().entries()).length\` is \`0\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `// Check that new FormData() starts with no entries\n`,
    solution: `Array.from(new FormData().entries()).length`,
    tests: [
      { description: 'entries length is 0', assertion: "expect(result).toBe(0)" },
      { description: 'instanceof FormData', assertion: "expect(result).toBeTruthy()" },
      { description: 'typeof is object', assertion: "expect(result).toBe('object')" },
      { description: 'is truthy', assertion: "expect(new FormData()).toBeTruthy()" },
      { description: 'can append and get', assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" },
    ],
    hints: ['Use Array.from() to convert the iterator returned by entries()'],
    tags: ['FormData', 'constructor', 'entries'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('file', new Blob(['data']), 'file.txt')
fd.get('file').name  // → 'file.txt'`,
      explanation: {
        en: "FormData can hold Blob or File objects for file uploads.",
        es: "FormData puede contener objetos Blob o File para cargas de archivos.",
      },
    },
  },
  {
    slug: 'formdata-constructor-4',
    title: 'FormData Constructor — append and get',
    description: `## FormData append and get\n\nAfter appending a key/value pair you can retrieve it with \`get()\`.\n\n**Challenge:** Append key \`'k'\` with value \`'v'\` to a new FormData, then retrieve it with \`get\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `const fd = new FormData();\n// append 'k' -> 'v' and get 'k'\n`,
    solution: `const fd = new FormData(); fd.append('k', 'v'); fd.get('k')`,
    tests: [
      { description: "get returns 'v'", assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" },
      { description: 'instanceof FormData', assertion: "expect(result).toBeTruthy()" },
      { description: 'typeof is object', assertion: "expect(result).toBe('object')" },
      { description: 'is truthy', assertion: "expect(new FormData()).toBeTruthy()" },
      { description: 'entries starts empty', assertion: "expect(result).toBe(0)" },
    ],
    hints: ['append(name, value) adds an entry; get(name) retrieves the first match'],
    tags: ['FormData', 'constructor', 'append', 'get'],
    usageExample: {
      code: `const fd = new FormData()
fd.set('a', '1')
fd.set('a', '2')
fd.get('a')  // → '2'`,
      explanation: {
        en: "set() replaces any existing values for a key; append() does not.",
        es: "set() reemplaza cualquier valor existente para una clave; append() no lo hace.",
      },
    },
  },
  {
    slug: 'formdata-constructor-5',
    title: 'FormData Constructor — truthy',
    description: `## FormData is truthy\n\nAn object created with \`new FormData()\` is always truthy in a boolean context.\n\n**Challenge:** Verify that \`new FormData()\` is truthy.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'FormData',
    initialCode: `// Verify new FormData() is truthy\n`,
    solution: `Boolean(new FormData())`,
    tests: [
      { description: 'is truthy', assertion: "expect(new FormData()).toBeTruthy()" },
      { description: 'instanceof FormData', assertion: "expect(result).toBeTruthy()" },
      { description: 'typeof is object', assertion: "expect(result).toBe('object')" },
      { description: 'entries starts empty', assertion: "expect(result).toBe(0)" },
      { description: 'can append and get', assertion: "const fd=new FormData(); fd.append('k','v'); expect(fd.get('k')).toBe('v')" },
    ],
    hints: ['All objects are truthy in JavaScript'],
    tags: ['FormData', 'constructor', 'truthy'],
    usageExample: {
      code: `const fd = new FormData()
fd.append('x', '1')
fd.append('x', '2')
fd.getAll('x')  // → ['1', '2']`,
      explanation: {
        en: "Use getAll() to retrieve all values for a key that has multiple entries.",
        es: "Usa getAll() para recuperar todos los valores de una clave que tiene múltiples entradas.",
      },
    },
  },
]
