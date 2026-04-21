import type { Exercise } from '@/shared/types/exercises'

export const eventPropertiesExercises: Exercise[] = [
  {
    slug: 'event-properties-1',
    title: 'Event — type property',
    description: `## Event.type\n\nThe \`type\` property on an event reflects the event type string passed to the constructor.\n\n**Challenge:** Verify that \`new Event('submit').type\` is \`'submit'\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Read the type property of an Event\nnew Event('submit').type`,
    solution: `new Event('submit').type`,
    tests: [
      { description: "type is 'submit'", assertion: "expect(result).toBe('submit')" },
      { description: 'isTrusted is false', assertion: "expect(result).toBe(false)" },
      { description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" },
      { description: 'cancelable:true is set', assertion: "expect(new Event('x',{bubbles:true,cancelable:true}).cancelable).toBe(true)" },
      { description: 'composed defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['The type is always a lowercase string matching what you passed to the constructor'],
    tags: ['Event', 'instance-property', 'type'],
    usageExample: {
      code: `const e = new Event('click', { bubbles: true })
e.type      // → 'click'
e.bubbles   // → true`,
      explanation: {
        en: "type and bubbles are core Event properties describing the event kind and propagation.",
        es: "type y bubbles son propiedades principales de Event que describen el tipo y propagación del evento.",
      },
    },
  },
  {
    slug: 'event-properties-2',
    title: 'Event — isTrusted is false for constructed events',
    description: `## Event.isTrusted\n\n\`isTrusted\` is \`true\` only for events dispatched by the browser itself (e.g., user clicks). Events you create with \`new Event()\` always have \`isTrusted === false\`.\n\n**Challenge:** Verify that \`new Event('x').isTrusted\` is \`false\`.`,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Event',
    initialCode: `// isTrusted is false for programmatically constructed events\nnew Event('x').isTrusted`,
    solution: `new Event('x').isTrusted`,
    tests: [
      { description: 'isTrusted is false', assertion: "expect(result).toBe(false)" },
      { description: "type is 'submit'", assertion: "expect(result).toBe('submit')" },
      { description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" },
      { description: 'cancelable:true is set', assertion: "expect(new Event('x',{bubbles:true,cancelable:true}).cancelable).toBe(true)" },
      { description: 'composed defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['isTrusted is a read-only property — you cannot set it to true in user code'],
    tags: ['Event', 'instance-property', 'isTrusted'],
    usageExample: {
      code: `const e = new Event('x')
e.defaultPrevented  // → false (before any preventDefault call)`,
      explanation: {
        en: "defaultPrevented is true if preventDefault() has been called on the event.",
        es: "defaultPrevented es true si se ha llamado a preventDefault() en el evento.",
      },
    },
  },
  {
    slug: 'event-properties-3',
    title: 'Event — defaultPrevented is false initially',
    description: `## Event.defaultPrevented\n\n\`defaultPrevented\` reflects whether \`preventDefault()\` has been called. Before any call, it is \`false\`.\n\n**Challenge:** Verify that a freshly constructed cancelable event has \`defaultPrevented === false\`.`,
    category: 'instance-property',
    difficulty: 'intermediate',
    builtIn: 'Event',
    initialCode: `// defaultPrevented starts as false\nnew Event('x', { cancelable: true }).defaultPrevented`,
    solution: `new Event('x', { cancelable: true }).defaultPrevented`,
    tests: [
      { description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" },
      { description: "type is 'submit'", assertion: "expect(result).toBe('submit')" },
      { description: 'isTrusted is false', assertion: "expect(result).toBe(false)" },
      { description: 'cancelable:true is set', assertion: "expect(new Event('x',{bubbles:true,cancelable:true}).cancelable).toBe(true)" },
      { description: 'composed defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['Call preventDefault() on the event to change defaultPrevented to true'],
    tags: ['Event', 'instance-property', 'defaultPrevented'],
    usageExample: {
      code: `const e = new Event('x', { cancelable: true })
e.preventDefault()
e.defaultPrevented  // → true`,
      explanation: {
        en: "Call preventDefault() on cancelable events to stop the default browser behavior.",
        es: "Llama a preventDefault() en eventos cancelables para detener el comportamiento predeterminado del navegador.",
      },
    },
  },
  {
    slug: 'event-properties-4',
    title: 'Event — cancelable property',
    description: `## Event.cancelable\n\nThe \`cancelable\` property is \`true\` when the event was constructed with \`{ cancelable: true }\`.\n\n**Challenge:** Verify that \`new Event('x', { bubbles: true, cancelable: true }).cancelable\` is \`true\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check the cancelable property\nnew Event('x', { bubbles: true, cancelable: true }).cancelable`,
    solution: `new Event('x', { bubbles: true, cancelable: true }).cancelable`,
    tests: [
      { description: 'cancelable:true is set', assertion: "expect(new Event('x',{bubbles:true,cancelable:true}).cancelable).toBe(true)" },
      { description: "type is 'submit'", assertion: "expect(result).toBe('submit')" },
      { description: 'isTrusted is false', assertion: "expect(result).toBe(false)" },
      { description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" },
      { description: 'composed defaults to false', assertion: "expect(result).toBe(false)" },
    ],
    hints: ['cancelable must be explicitly set to true — it does not default to true'],
    tags: ['Event', 'instance-property', 'cancelable'],
    usageExample: {
      code: `const e = new Event('x')
e.isTrusted  // → false (created by script, not user)`,
      explanation: {
        en: "isTrusted is true for events dispatched by the browser, false for programmatic events.",
        es: "isTrusted es true para eventos enviados por el navegador, false para eventos programáticos.",
      },
    },
  },
  {
    slug: 'event-properties-5',
    title: 'Event — composed defaults to false',
    description: `## Event.composed\n\n\`composed\` determines whether the event can cross the shadow DOM boundary. It defaults to \`false\`.\n\n**Challenge:** Verify that \`new Event('x').composed\` is \`false\`.`,
    category: 'instance-property',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check that composed defaults to false\nnew Event('x').composed`,
    solution: `new Event('x').composed`,
    tests: [
      { description: 'composed defaults to false', assertion: "expect(result).toBe(false)" },
      { description: "type is 'submit'", assertion: "expect(result).toBe('submit')" },
      { description: 'isTrusted is false', assertion: "expect(result).toBe(false)" },
      { description: 'defaultPrevented is false initially', assertion: "expect(new Event('x',{cancelable:true}).defaultPrevented).toBe(false)" },
      { description: 'cancelable:true is set', assertion: "expect(new Event('x',{bubbles:true,cancelable:true}).cancelable).toBe(true)" },
    ],
    hints: ['Pass { composed: true } to allow the event to cross shadow DOM boundaries'],
    tags: ['Event', 'instance-property', 'composed'],
    usageExample: {
      code: `const e = new Event('x')
typeof e.timeStamp  // → 'number'`,
      explanation: {
        en: "timeStamp gives the high-resolution time when the event was created.",
        es: "timeStamp da el tiempo de alta resolución en que se creó el evento.",
      },
    },
  },
]
