import type { Exercise } from '@/shared/types/exercises'

export const eventConstructorExercises: Exercise[] = [
  {
    slug: 'event-constructor-1',
    title: 'Event Constructor — type property',
    description: `## Event\n\nThe \`Event\` constructor takes a \`type\` string as its first argument. The resulting event's \`type\` property reflects that string.\n\n**Challenge:** Verify that \`new Event('click').type\` is \`'click'\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Create an event and check its type\nnew Event('click').type`,
    solution: `new Event('click').type`,
    tests: [
      { description: "type is 'click'", assertion: "expect(result).toBe('click')" },
      { description: 'instanceof Event', assertion: "expect(result).toBeTruthy()" },
      { description: 'bubbles defaults to false', assertion: "expect(result).toBe(false)" },
      { description: 'bubbles:true is set', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" },
      { description: 'cancelable defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['The first argument to new Event() becomes the type property'],
    tags: ['Event', 'constructor', 'type'],
    usageExample: {
      code: `const e = new Event('click')
e.type  // → 'click'`,
      explanation: {
        en: "Event() creates a new synthetic event with the specified type name.",
        es: "Event() crea un nuevo evento sintético con el nombre de tipo especificado.",
      },
    },
  },
  {
    slug: 'event-constructor-2',
    title: 'Event Constructor — instanceof Event',
    description: `## Event — instanceof\n\nObjects created with \`new Event()\` are instances of the \`Event\` class.\n\n**Challenge:** Verify that \`new Event('x') instanceof Event\` is truthy.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check instanceof Event\nnew Event('x') instanceof Event`,
    solution: `new Event('x') instanceof Event`,
    tests: [
      { description: 'instanceof Event', assertion: "expect(result).toBeTruthy()" },
      { description: "type is 'click'", assertion: "expect(result).toBe('click')" },
      { description: 'bubbles defaults to false', assertion: "expect(result).toBe(false)" },
      { description: 'bubbles:true is set', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" },
      { description: 'cancelable defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['Event is a global constructor available in both browser and Node.js (v18+)'],
    tags: ['Event', 'constructor', 'instanceof'],
    usageExample: {
      code: `const e = new Event('myEvent', { bubbles: true })
e.bubbles  // → true`,
      explanation: {
        en: "Pass an options object to configure whether the event bubbles and is cancelable.",
        es: "Pasa un objeto de opciones para configurar si el evento hace burbuja y es cancelable.",
      },
    },
  },
  {
    slug: 'event-constructor-3',
    title: 'Event Constructor — bubbles defaults to false',
    description: `## Event — bubbles default\n\nThe \`bubbles\` option in the second argument of \`new Event()\` defaults to \`false\`.\n\n**Challenge:** Verify that \`new Event('x').bubbles\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check that bubbles defaults to false\nnew Event('x').bubbles`,
    solution: `new Event('x').bubbles`,
    tests: [
      { description: 'bubbles defaults to false', assertion: "expect(result).toBe(false)" },
      { description: "type is 'click'", assertion: "expect(result).toBe('click')" },
      { description: 'instanceof Event', assertion: "expect(result).toBeTruthy()" },
      { description: 'bubbles:true is set', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" },
      { description: 'cancelable defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['To make an event bubble, pass { bubbles: true } as the second argument'],
    tags: ['Event', 'constructor', 'bubbles'],
    usageExample: {
      code: `const e = new Event('test', { cancelable: true })
e.cancelable  // → true`,
      explanation: {
        en: "Set cancelable: true to allow listeners to call preventDefault().",
        es: "Establece cancelable: true para permitir que los oyentes llamen a preventDefault().",
      },
    },
  },
  {
    slug: 'event-constructor-4',
    title: 'Event Constructor — bubbles:true option',
    description: `## Event — bubbles option\n\nPassing \`{ bubbles: true }\` as the second argument to \`new Event()\` creates a bubbling event.\n\n**Challenge:** Verify that \`new Event('x', { bubbles: true }).bubbles\` is \`true\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Create a bubbling event\nnew Event('x', { bubbles: true }).bubbles`,
    solution: `new Event('x', { bubbles: true }).bubbles`,
    tests: [
      { description: 'bubbles:true is set', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" },
      { description: 'bubbles defaults to false', assertion: "expect(result).toBe(false)" },
      { description: "type is 'click'", assertion: "expect(result).toBe('click')" },
      { description: 'instanceof Event', assertion: "expect(result).toBeTruthy()" },
      { description: 'cancelable defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['The second argument to new Event() is an EventInit dictionary'],
    tags: ['Event', 'constructor', 'bubbles'],
    usageExample: {
      code: `const target = new EventTarget()
const e = new Event('ping')
target.dispatchEvent(e)  // dispatches the event`,
      explanation: {
        en: "Use dispatchEvent() to fire a custom event on any EventTarget.",
        es: "Usa dispatchEvent() para disparar un evento personalizado en cualquier EventTarget.",
      },
    },
  },
  {
    slug: 'event-constructor-5',
    title: 'Event Constructor — cancelable defaults to false',
    description: `## Event — cancelable default\n\nThe \`cancelable\` option defaults to \`false\`. Only cancelable events respect \`preventDefault()\`.\n\n**Challenge:** Verify that \`new Event('x').cancelable\` is \`false\`.`,
    category: 'constructor',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check that cancelable defaults to false\nnew Event('x').cancelable`,
    solution: `new Event('x').cancelable`,
    tests: [
      { description: 'cancelable defaults to false', assertion: "expect(result).toBe(false)" },
      { description: "type is 'click'", assertion: "expect(result).toBe('click')" },
      { description: 'instanceof Event', assertion: "expect(result).toBeTruthy()" },
      { description: 'bubbles defaults to false', assertion: "expect(result).toBe(false)" },
      { description: 'bubbles:true is set', assertion: "expect(new Event('x',{bubbles:true}).bubbles).toBe(true)" },
    ],
    hints: ['Pass { cancelable: true } to allow preventDefault() to have an effect'],
    tags: ['Event', 'constructor', 'cancelable'],
    usageExample: {
      code: `new Event('x') instanceof Event  // → true`,
      explanation: {
        en: "Event instances can be verified with instanceof.",
        es: "Las instancias de Event se pueden verificar con instanceof.",
      },
    },
  },
]
