import type { Exercise } from '@/shared/types/exercises'

export const eventMethodsExercises: Exercise[] = [
  {
    slug: 'event-methods-1',
    title: 'Event — preventDefault sets defaultPrevented',
    description: `## Event.preventDefault\n\nCalling \`preventDefault()\` on a cancelable event sets \`defaultPrevented\` to \`true\`.\n\n**Challenge:** Call \`preventDefault()\` on a cancelable event and verify \`defaultPrevented\` is \`true\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Event',
    initialCode: `const e = new Event('x', { cancelable: true })
e.preventDefault()
e.defaultPrevented`,
    solution: `const e = new Event('x', { cancelable: true })
e.preventDefault()
e.defaultPrevented`,
    tests: [
      { description: 'preventDefault sets defaultPrevented to true', assertion: "const e=new Event('x',{cancelable:true}); e.preventDefault(); expect(e.defaultPrevented).toBe(true)" },
      { description: 'preventDefault on non-cancelable has no effect', assertion: "const e2=new Event('x',{cancelable:false}); e2.preventDefault(); expect(e2.defaultPrevented).toBe(false)" },
      { description: 'stopPropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopImmediatePropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopPropagation can be called without error', assertion: "const e3=new Event('x'); e3.stopPropagation(); expect(e3.type).toBe('x')" },
    ],
    hints: ['preventDefault() only works when cancelable is true'],
    tags: ['Event', 'instance-method', 'preventDefault'],
    usageExample: {
      code: `const e = new Event('click', { cancelable: true })
e.preventDefault()
e.defaultPrevented  // → true`,
      explanation: {
        en: "preventDefault() tells the browser not to perform the event's default action.",
        es: "preventDefault() le dice al navegador que no realice la acción predeterminada del evento.",
      },
    },
  },
  {
    slug: 'event-methods-2',
    title: 'Event — preventDefault on non-cancelable has no effect',
    description: `## Event.preventDefault — non-cancelable\n\nCalling \`preventDefault()\` on a non-cancelable event is a no-op — \`defaultPrevented\` stays \`false\`.\n\n**Challenge:** Verify that \`preventDefault()\` on a non-cancelable event does not change \`defaultPrevented\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Event',
    initialCode: `const e = new Event('x', { cancelable: false })
e.preventDefault()
e.defaultPrevented`,
    solution: `const e = new Event('x', { cancelable: false })
e.preventDefault()
e.defaultPrevented`,
    tests: [
      { description: 'preventDefault on non-cancelable has no effect', assertion: "const e=new Event('x',{cancelable:false}); e.preventDefault(); expect(e.defaultPrevented).toBe(false)" },
      { description: 'preventDefault sets defaultPrevented to true on cancelable', assertion: "const e2=new Event('x',{cancelable:true}); e2.preventDefault(); expect(e2.defaultPrevented).toBe(true)" },
      { description: 'stopPropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopImmediatePropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopPropagation can be called without error', assertion: "const e3=new Event('x'); e3.stopPropagation(); expect(e3.type).toBe('x')" },
    ],
    hints: ['cancelable: false (the default) means preventDefault() is silently ignored'],
    tags: ['Event', 'instance-method', 'preventDefault', 'cancelable'],
    usageExample: {
      code: `const e = new Event('click', { bubbles: true, cancelable: true })
e.stopPropagation()  // prevents bubbling to parent elements`,
      explanation: {
        en: "stopPropagation() prevents the event from bubbling up to ancestor elements.",
        es: "stopPropagation() evita que el evento haga burbuja hacia los elementos ancestros.",
      },
    },
  },
  {
    slug: 'event-methods-3',
    title: 'Event — stopPropagation is a function',
    description: `## Event.stopPropagation\n\n\`stopPropagation()\` prevents the event from bubbling up the DOM tree after the current listener runs.\n\n**Challenge:** Verify that \`typeof new Event('x').stopPropagation\` is \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Event',
    initialCode: `// Check that stopPropagation is a function\ntypeof new Event('x').stopPropagation`,
    solution: `typeof new Event('x').stopPropagation`,
    tests: [
      { description: 'stopPropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopImmediatePropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'preventDefault is a function', assertion: "expect(typeof new Event('x').preventDefault).toBe('function')" },
      { description: 'preventDefault sets defaultPrevented', assertion: "const e=new Event('x',{cancelable:true}); e.preventDefault(); expect(e.defaultPrevented).toBe(true)" },
      { description: 'stopPropagation can be called without error', assertion: "const e2=new Event('x'); e2.stopPropagation(); expect(e2.type).toBe('x')" },
    ],
    hints: ['stopPropagation stops bubbling but does not prevent other listeners on the same element'],
    tags: ['Event', 'instance-method', 'stopPropagation'],
    usageExample: {
      code: `const e = new Event('x')
e.stopImmediatePropagation()  // stops all remaining listeners on the same target`,
      explanation: {
        en: "stopImmediatePropagation() prevents other listeners on the same element from running.",
        es: "stopImmediatePropagation() evita que otros oyentes del mismo elemento se ejecuten.",
      },
    },
  },
  {
    slug: 'event-methods-4',
    title: 'Event — stopImmediatePropagation is a function',
    description: `## Event.stopImmediatePropagation\n\n\`stopImmediatePropagation()\` prevents both bubbling and subsequent listeners on the same element from running.\n\n**Challenge:** Verify that \`typeof new Event('x').stopImmediatePropagation\` is \`'function'\`.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Event',
    initialCode: `// Check that stopImmediatePropagation is a function\ntypeof new Event('x').stopImmediatePropagation`,
    solution: `typeof new Event('x').stopImmediatePropagation`,
    tests: [
      { description: 'stopImmediatePropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopPropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'preventDefault is a function', assertion: "expect(typeof new Event('x').preventDefault).toBe('function')" },
      { description: 'preventDefault sets defaultPrevented', assertion: "const e=new Event('x',{cancelable:true}); e.preventDefault(); expect(e.defaultPrevented).toBe(true)" },
      { description: 'stopPropagation can be called without error', assertion: "const e2=new Event('x'); e2.stopPropagation(); expect(e2.type).toBe('x')" },
    ],
    hints: ['stopImmediatePropagation is stronger than stopPropagation — it also prevents other listeners on the current node'],
    tags: ['Event', 'instance-method', 'stopImmediatePropagation'],
    usageExample: {
      code: `const e = new Event('x')
e.composedPath()  // → [] (not dispatched yet)`,
      explanation: {
        en: "composedPath() returns the path of elements the event will traverse.",
        es: "composedPath() devuelve la ruta de elementos que recorrerá el evento.",
      },
    },
  },
  {
    slug: 'event-methods-5',
    title: 'Event — stopPropagation can be called without error',
    description: `## Event.stopPropagation — safe to call\n\nCalling \`stopPropagation()\` does not throw, even on a standalone event that is not currently propagating.\n\n**Challenge:** Call \`stopPropagation()\` on an event and verify that its \`type\` is unchanged.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Event',
    initialCode: `const e = new Event('x')
e.stopPropagation()
e.type`,
    solution: `const e = new Event('x')
e.stopPropagation()
e.type`,
    tests: [
      { description: 'stopPropagation can be called without error', assertion: "const e=new Event('x'); e.stopPropagation(); expect(e.type).toBe('x')" },
      { description: 'stopPropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'stopImmediatePropagation is a function', assertion: "expect(result).toBe('function')" },
      { description: 'preventDefault is a function', assertion: "expect(typeof new Event('x').preventDefault).toBe('function')" },
      { description: 'preventDefault sets defaultPrevented', assertion: "const e2=new Event('x',{cancelable:true}); e2.preventDefault(); expect(e2.defaultPrevented).toBe(true)" },
    ],
    hints: ['stopPropagation is a no-op when called outside of an active dispatch cycle'],
    tags: ['Event', 'instance-method', 'stopPropagation'],
    usageExample: {
      code: `const et = new EventTarget()
const e = new Event('go')
const dispatched = et.dispatchEvent(e)
dispatched  // → true (not prevented)`,
      explanation: {
        en: "dispatchEvent() returns false if the event was cancelled, true otherwise.",
        es: "dispatchEvent() devuelve false si el evento fue cancelado, true en caso contrario.",
      },
    },
  },
]
