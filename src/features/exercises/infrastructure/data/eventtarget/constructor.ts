import type { Exercise } from '@/shared/types/exercises'

export const eventTargetConstructorExercises: Exercise[] = [
  {
    slug: 'eventtarget-constructor-1',
    title: 'EventTarget Constructor — instanceof check',
    description: `## EventTarget\n\n\`EventTarget\` is the base class for all objects that can receive DOM events. You can instantiate it directly with \`new EventTarget()\`.\n\n**Challenge:** Confirm \`new EventTarget()\` is an instance of \`EventTarget\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `// Verify that new EventTarget() is an instance of EventTarget\nnew EventTarget() instanceof EventTarget`,
    solution: `new EventTarget() instanceof EventTarget`,
    tests: [
      { description: 'instanceof EventTarget', assertion: "expect(result).toBeTruthy()" },
      { description: 'addEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'removeEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'dispatchEvent is a function', assertion: "expect(result).toBe('function')" },
      { description: 'is truthy', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['EventTarget is the base class for all DOM event-capable objects'],
    tags: ['EventTarget', 'constructor'],
    usageExample: {
      code: `const et = new EventTarget()
et instanceof EventTarget  // → true`,
      explanation: {
        en: "EventTarget is the base class for objects that can receive events.",
        es: "EventTarget es la clase base para objetos que pueden recibir eventos.",
      },
    },
  },
  {
    slug: 'eventtarget-constructor-2',
    title: 'EventTarget — addEventListener exists',
    description: `## EventTarget — addEventListener\n\nEvery \`EventTarget\` instance exposes an \`addEventListener\` method for registering event listeners.\n\n**Challenge:** Confirm that \`addEventListener\` is a function on a new \`EventTarget\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `// Check that addEventListener is a function\ntypeof new EventTarget().addEventListener`,
    solution: `typeof new EventTarget().addEventListener`,
    tests: [
      { description: 'addEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(result).toBeTruthy()" },
      { description: 'removeEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'dispatchEvent is a function', assertion: "expect(result).toBe('function')" },
      { description: 'is truthy', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['All three event methods are inherited from the EventTarget prototype'],
    tags: ['EventTarget', 'constructor', 'addEventListener'],
    usageExample: {
      code: `const et = new EventTarget()
et.addEventListener('greet', e => console.log('hello'))
et.dispatchEvent(new Event('greet'))  // → logs 'hello'`,
      explanation: {
        en: "EventTarget supports adding, removing, and dispatching events.",
        es: "EventTarget soporta agregar, eliminar y despachar eventos.",
      },
    },
  },
  {
    slug: 'eventtarget-constructor-3',
    title: 'EventTarget — removeEventListener exists',
    description: `## EventTarget — removeEventListener\n\nEvery \`EventTarget\` instance exposes a \`removeEventListener\` method to unsubscribe listeners.\n\n**Challenge:** Confirm that \`removeEventListener\` is a function on a new \`EventTarget\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `// Check that removeEventListener is a function\ntypeof new EventTarget().removeEventListener`,
    solution: `typeof new EventTarget().removeEventListener`,
    tests: [
      { description: 'removeEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(result).toBeTruthy()" },
      { description: 'addEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'dispatchEvent is a function', assertion: "expect(result).toBe('function')" },
      { description: 'is truthy', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['removeEventListener removes a previously-added listener'],
    tags: ['EventTarget', 'constructor', 'removeEventListener'],
    usageExample: {
      code: `class MyEmitter extends EventTarget {}
const em = new MyEmitter()
em instanceof EventTarget  // → true`,
      explanation: {
        en: "Extend EventTarget to add event dispatch capabilities to any class.",
        es: "Extiende EventTarget para agregar capacidades de despacho de eventos a cualquier clase.",
      },
    },
  },
  {
    slug: 'eventtarget-constructor-4',
    title: 'EventTarget — dispatchEvent exists',
    description: `## EventTarget — dispatchEvent\n\nEvery \`EventTarget\` instance exposes a \`dispatchEvent\` method for programmatically firing events.\n\n**Challenge:** Confirm that \`dispatchEvent\` is a function on a new \`EventTarget\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `// Check that dispatchEvent is a function\ntypeof new EventTarget().dispatchEvent`,
    solution: `typeof new EventTarget().dispatchEvent`,
    tests: [
      { description: 'dispatchEvent is a function', assertion: "expect(result).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(result).toBeTruthy()" },
      { description: 'addEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'removeEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'is truthy', assertion: "expect(result).toBeTruthy()" },
    ],
    hints: ['dispatchEvent synchronously invokes all registered listeners for the given event'],
    tags: ['EventTarget', 'constructor', 'dispatchEvent'],
    usageExample: {
      code: `const et = new EventTarget()
typeof et.addEventListener  // → 'function'`,
      explanation: {
        en: "EventTarget provides addEventListener, removeEventListener, and dispatchEvent.",
        es: "EventTarget proporciona addEventListener, removeEventListener y dispatchEvent.",
      },
    },
  },
  {
    slug: 'eventtarget-constructor-5',
    title: 'EventTarget — instance is truthy',
    description: `## EventTarget — truthiness\n\n\`new EventTarget()\` returns an object, and all objects are truthy in JavaScript.\n\n**Challenge:** Confirm that \`new EventTarget()\` is truthy.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `// Verify that a new EventTarget() is truthy\nnew EventTarget()`,
    solution: `new EventTarget()`,
    tests: [
      { description: 'is truthy', assertion: "expect(result).toBeTruthy()" },
      { description: 'instanceof EventTarget', assertion: "expect(result).toBeTruthy()" },
      { description: 'addEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'removeEventListener is a function', assertion: "expect(result).toBe('function')" },
      { description: 'dispatchEvent is a function', assertion: "expect(result).toBe('function')" },
    ],
    hints: ['Objects are always truthy in JavaScript — only falsy primitives like null/undefined/0/"" are falsy'],
    tags: ['EventTarget', 'constructor'],
    usageExample: {
      code: `new EventTarget() === new EventTarget()  // → false`,
      explanation: {
        en: "Each EventTarget() call creates a new independent instance.",
        es: "Cada llamada a EventTarget() crea una nueva instancia independiente.",
      },
    },
  },
]
