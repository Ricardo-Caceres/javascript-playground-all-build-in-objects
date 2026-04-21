import type { Exercise } from '@/shared/types/exercises'

export const abortControllerConstructorExercises: Exercise[] = [
  {
    slug: 'abortcontroller-constructor-1',
    title: 'AbortController Constructor — instanceof check',
    description: `## AbortController Constructor\n\n\`new AbortController()\` creates a controller that can abort one or more operations.\n\n**Challenge:** Verify that \`new AbortController()\` is an instance of \`AbortController\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `// Check instanceof AbortController\n`,
    solution: `new AbortController() instanceof AbortController`,
    tests: [
      { description: 'instanceof AbortController', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'signal instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.reason is undefined', assertion: "expect(result).toBeUndefined()" },
      { description: 'typeof signal is object', assertion: "expect(result).toBe('object')" },
    ],
    hints: ['AbortController is a Web API available in browsers and Node.js 15+'],
    tags: ['AbortController', 'constructor'],
    usageExample: {
      code: `const ac = new AbortController()
ac.signal.aborted  // → false`,
      explanation: {
        en: "AbortController lets you cancel fetch requests or other async operations.",
        es: "AbortController te permite cancelar solicitudes fetch u otras operaciones asíncronas.",
      },
    },
  },
  {
    slug: 'abortcontroller-constructor-2',
    title: 'AbortController — signal.aborted starts false',
    description: `## AbortController signal.aborted\n\nA newly created controller has not been aborted, so \`signal.aborted\` is \`false\`.\n\n**Challenge:** Verify that \`new AbortController().signal.aborted\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `// Check signal.aborted on a new AbortController\n`,
    solution: `new AbortController().signal.aborted`,
    tests: [
      { description: 'signal.aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'instanceof AbortController', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.reason is undefined', assertion: "expect(result).toBeUndefined()" },
      { description: 'typeof signal is object', assertion: "expect(result).toBe('object')" },
    ],
    hints: ['Before calling abort(), the signal.aborted property is always false'],
    tags: ['AbortController', 'constructor', 'signal', 'aborted'],
    usageExample: {
      code: `const ac = new AbortController()
ac.abort()
ac.signal.aborted  // → true`,
      explanation: {
        en: "Call abort() to cancel the associated operation and set signal.aborted to true.",
        es: "Llama a abort() para cancelar la operación asociada y establecer signal.aborted a true.",
      },
    },
  },
  {
    slug: 'abortcontroller-constructor-3',
    title: 'AbortController — signal instanceof AbortSignal',
    description: `## AbortController.signal\n\nThe \`signal\` property of an \`AbortController\` is always an instance of \`AbortSignal\`.\n\n**Challenge:** Verify that \`new AbortController().signal instanceof AbortSignal\` is truthy.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `// Check signal instanceof AbortSignal\n`,
    solution: `new AbortController().signal instanceof AbortSignal`,
    tests: [
      { description: 'signal instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'instanceof AbortController', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'signal.reason is undefined', assertion: "expect(result).toBeUndefined()" },
      { description: 'typeof signal is object', assertion: "expect(result).toBe('object')" },
    ],
    hints: ['AbortController.signal returns an AbortSignal instance that reflects the controller state'],
    tags: ['AbortController', 'constructor', 'AbortSignal', 'signal'],
    usageExample: {
      code: `const ac = new AbortController()
fetch('/api', { signal: ac.signal })
ac.abort()  // cancels the request`,
      explanation: {
        en: "Pass signal to fetch() to make the request cancellable.",
        es: "Pasa signal a fetch() para hacer la solicitud cancelable.",
      },
    },
  },
  {
    slug: 'abortcontroller-constructor-4',
    title: 'AbortController — signal.reason starts undefined',
    description: `## AbortController signal.reason\n\nBefore \`abort()\` is called, \`signal.reason\` is \`undefined\`.\n\n**Challenge:** Verify that \`new AbortController().signal.reason\` is \`undefined\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `// Check signal.reason on a new AbortController\n`,
    solution: `new AbortController().signal.reason`,
    tests: [
      { description: 'signal.reason is undefined', assertion: "expect(result).toBeUndefined()" },
      { description: 'instanceof AbortController', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'signal instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'typeof signal is object', assertion: "expect(result).toBe('object')" },
    ],
    hints: ['reason is set when abort(reason) is called; before that it is undefined'],
    tags: ['AbortController', 'constructor', 'signal', 'reason'],
    usageExample: {
      code: `const ac = new AbortController()
ac instanceof AbortController  // → true`,
      explanation: {
        en: "AbortController instances can be verified with instanceof.",
        es: "Las instancias de AbortController se pueden verificar con instanceof.",
      },
    },
  },
  {
    slug: 'abortcontroller-constructor-5',
    title: 'AbortController — typeof signal is object',
    description: `## AbortController signal type\n\nThe \`signal\` property is an object.\n\n**Challenge:** Verify that \`typeof new AbortController().signal\` is \`'object'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'AbortController',
    initialCode: `// Check typeof signal\n`,
    solution: `typeof new AbortController().signal`,
    tests: [
      { description: "typeof signal is 'object'", assertion: "expect(result).toBe('object')" },
      { description: 'instanceof AbortController', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.aborted is false', assertion: "expect(result).toBe(false)" },
      { description: 'signal instanceof AbortSignal', assertion: "expect(result).toBeTruthy()" },
      { description: 'signal.reason is undefined', assertion: "expect(result).toBeUndefined()" },
    ],
    hints: ['typeof on any object (other than null) returns "object"'],
    tags: ['AbortController', 'constructor', 'signal', 'typeof'],
    usageExample: {
      code: `const ac = new AbortController()
ac.signal instanceof AbortSignal  // → true`,
      explanation: {
        en: "The signal property is an AbortSignal that can be monitored for cancellation.",
        es: "La propiedad signal es una AbortSignal que puede monitorearse para cancelación.",
      },
    },
  },
]
