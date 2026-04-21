import type { Exercise } from '@/shared/types/exercises'

export const eventTargetMethodsExercises: Exercise[] = [
  {
    slug: 'eventtarget-methods-1',
    title: 'EventTarget — listener fires on dispatchEvent',
    description: `## EventTarget.addEventListener / dispatchEvent\n\nWhen you dispatch an event on an \`EventTarget\`, any listeners registered for that event type are called synchronously.\n\n**Challenge:** Verify that a listener registered with \`addEventListener\` fires when \`dispatchEvent\` is called.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'EventTarget',
    initialCode: `const t = new EventTarget()
let fired = false
t.addEventListener('x', () => { fired = true })
t.dispatchEvent(new Event('x'))
fired`,
    solution: `const t = new EventTarget()
let fired = false
t.addEventListener('x', () => { fired = true })
t.dispatchEvent(new Event('x'))
fired`,
    tests: [
      { description: 'listener fires on dispatch', assertion: "const t=new EventTarget(); let fired=false; t.addEventListener('x',()=>{fired=true}); t.dispatchEvent(new Event('x')); expect(fired).toBe(true)" },
      { description: 'dispatchEvent returns true', assertion: "const t2=new EventTarget(); t2.addEventListener('x',()=>{}); expect(t2.dispatchEvent(new Event('x'))).toBe(true)" },
      { description: 'addEventListener is a function', assertion: "expect(typeof new EventTarget().addEventListener).toBe('function')" },
      { description: 'dispatchEvent is a function', assertion: "expect(typeof new EventTarget().dispatchEvent).toBe('function')" },
      { description: 'listener receives event with correct type', assertion: "const t3=new EventTarget(); let tp=''; t3.addEventListener('foo',(e)=>{tp=e.type}); t3.dispatchEvent(new Event('foo')); expect(tp).toBe('foo')" },
    ],
    hints: ['dispatchEvent is synchronous — listeners run before it returns'],
    tags: ['EventTarget', 'addEventListener', 'dispatchEvent'],
    usageExample: {
      code: `const et = new EventTarget()
et.addEventListener('ping', () => console.log('pong'))
et.dispatchEvent(new Event('ping'))  // → pong`,
      explanation: {
        en: "addEventListener registers a listener; dispatchEvent fires the event.",
        es: "addEventListener registra un oyente; dispatchEvent dispara el evento.",
      },
    },
  },
  {
    slug: 'eventtarget-methods-2',
    title: 'EventTarget — removed listener does not fire',
    description: `## EventTarget.removeEventListener\n\nCalling \`removeEventListener\` with the same listener reference prevents it from being called on future dispatches.\n\n**Challenge:** Verify that removing a listener stops it from firing.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'EventTarget',
    initialCode: `const t = new EventTarget()
let n = 0
const h = () => { n++ }
t.addEventListener('e', h)
t.removeEventListener('e', h)
t.dispatchEvent(new Event('e'))
n`,
    solution: `const t = new EventTarget()
let n = 0
const h = () => { n++ }
t.addEventListener('e', h)
t.removeEventListener('e', h)
t.dispatchEvent(new Event('e'))
n`,
    tests: [
      { description: 'removed listener does not fire', assertion: "const t=new EventTarget(); let n=0; const h=()=>{n++}; t.addEventListener('e',h); t.removeEventListener('e',h); t.dispatchEvent(new Event('e')); expect(n).toBe(0)" },
      { description: 'removeEventListener is a function', assertion: "expect(typeof new EventTarget().removeEventListener).toBe('function')" },
      { description: 'listener fires before removal', assertion: "const t2=new EventTarget(); let n2=0; const h2=()=>{n2++}; t2.addEventListener('e',h2); t2.dispatchEvent(new Event('e')); expect(n2).toBe(1)" },
      { description: 'dispatchEvent returns true when no listeners', assertion: "const t3=new EventTarget(); expect(t3.dispatchEvent(new Event('e'))).toBe(true)" },
      { description: 'instanceof EventTarget', assertion: "expect(new EventTarget() instanceof EventTarget).toBeTruthy()" },
    ],
    hints: ['You must pass the exact same function reference to removeEventListener'],
    tags: ['EventTarget', 'removeEventListener'],
    usageExample: {
      code: `const et = new EventTarget()
const fn = () => console.log('hi')
et.addEventListener('click', fn)
et.removeEventListener('click', fn)  // removes the listener`,
      explanation: {
        en: "removeEventListener unregisters a previously added listener.",
        es: "removeEventListener cancela el registro de un oyente previamente añadido.",
      },
    },
  },
  {
    slug: 'eventtarget-methods-3',
    title: 'EventTarget — dispatchEvent returns true',
    description: `## EventTarget.dispatchEvent return value\n\n\`dispatchEvent\` returns \`true\` unless the event is cancelable and \`preventDefault()\` was called.\n\n**Challenge:** Verify that \`dispatchEvent\` returns \`true\` when a listener is registered.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'EventTarget',
    initialCode: `const t = new EventTarget()
t.addEventListener('e', () => {})
t.dispatchEvent(new Event('e'))`,
    solution: `const t = new EventTarget()
t.addEventListener('e', () => {})
t.dispatchEvent(new Event('e'))`,
    tests: [
      { description: 'dispatchEvent returns true', assertion: "const t=new EventTarget(); t.addEventListener('e',()=>{}); expect(t.dispatchEvent(new Event('e'))).toBe(true)" },
      { description: 'dispatchEvent returns true with no listeners', assertion: "const t2=new EventTarget(); expect(t2.dispatchEvent(new Event('e'))).toBe(true)" },
      { description: 'dispatchEvent is a function', assertion: "expect(typeof new EventTarget().dispatchEvent).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(new EventTarget() instanceof EventTarget).toBeTruthy()" },
      { description: 'listener fires on dispatch', assertion: "const t3=new EventTarget(); let f=false; t3.addEventListener('x',()=>{f=true}); t3.dispatchEvent(new Event('x')); expect(f).toBe(true)" },
    ],
    hints: ['dispatchEvent returns false only when preventDefault() is called on a cancelable event'],
    tags: ['EventTarget', 'dispatchEvent'],
    usageExample: {
      code: `const et = new EventTarget()
let count = 0
et.addEventListener('inc', () => count++, { once: true })
et.dispatchEvent(new Event('inc'))
et.dispatchEvent(new Event('inc'))
count  // → 1`,
      explanation: {
        en: "Use { once: true } to automatically remove the listener after its first invocation.",
        es: "Usa { once: true } para eliminar automáticamente el oyente después de su primera invocación.",
      },
    },
  },
  {
    slug: 'eventtarget-methods-4',
    title: 'EventTarget — listener receives event object',
    description: `## EventTarget — event object in listener\n\nListeners receive the dispatched \`Event\` object as their first argument. You can read properties like \`type\` from it.\n\n**Challenge:** Verify that a listener receives an event with the correct \`type\`.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'EventTarget',
    initialCode: `const t = new EventTarget()
let type = ''
t.addEventListener('foo', (e) => { type = e.type })
t.dispatchEvent(new Event('foo'))
type`,
    solution: `const t = new EventTarget()
let type = ''
t.addEventListener('foo', (e) => { type = e.type })
t.dispatchEvent(new Event('foo'))
type`,
    tests: [
      { description: 'listener receives event with correct type', assertion: "const t=new EventTarget(); let type=''; t.addEventListener('foo',(e)=>{type=e.type}); t.dispatchEvent(new Event('foo')); expect(type).toBe('foo')" },
      { description: 'event type matches dispatched event', assertion: "const t2=new EventTarget(); let tp=''; t2.addEventListener('bar',(e)=>{tp=e.type}); t2.dispatchEvent(new Event('bar')); expect(tp).toBe('bar')" },
      { description: 'dispatchEvent is a function', assertion: "expect(typeof new EventTarget().dispatchEvent).toBe('function')" },
      { description: 'addEventListener is a function', assertion: "expect(typeof new EventTarget().addEventListener).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(new EventTarget() instanceof EventTarget).toBeTruthy()" },
    ],
    hints: ['The first argument to any event listener is the Event object'],
    tags: ['EventTarget', 'addEventListener', 'event object'],
    usageExample: {
      code: `const et = new EventTarget()
const result = et.dispatchEvent(new Event('x', { cancelable: true }))
result  // → true (not cancelled)`,
      explanation: {
        en: "dispatchEvent() returns true if the event was not cancelled.",
        es: "dispatchEvent() devuelve true si el evento no fue cancelado.",
      },
    },
  },
  {
    slug: 'eventtarget-methods-5',
    title: 'EventTarget — once option fires listener only once',
    description: `## EventTarget.addEventListener — once option\n\nPassing \`{ once: true }\` as the third argument makes the listener auto-remove after its first invocation.\n\n**Challenge:** Verify that a listener with \`{ once: true }\` fires only once even when the event is dispatched twice.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'EventTarget',
    initialCode: `const t = new EventTarget()
let n = 0
t.addEventListener('e', () => { n++ }, { once: true })
t.dispatchEvent(new Event('e'))
t.dispatchEvent(new Event('e'))
n`,
    solution: `const t = new EventTarget()
let n = 0
t.addEventListener('e', () => { n++ }, { once: true })
t.dispatchEvent(new Event('e'))
t.dispatchEvent(new Event('e'))
n`,
    tests: [
      { description: 'once listener fires only once', assertion: "const t=new EventTarget(); let n=0; t.addEventListener('e',()=>{n++},{once:true}); t.dispatchEvent(new Event('e')); t.dispatchEvent(new Event('e')); expect(n).toBe(1)" },
      { description: 'without once, listener fires twice', assertion: "const t2=new EventTarget(); let n2=0; t2.addEventListener('e',()=>{n2++}); t2.dispatchEvent(new Event('e')); t2.dispatchEvent(new Event('e')); expect(n2).toBe(2)" },
      { description: 'dispatchEvent is a function', assertion: "expect(typeof new EventTarget().dispatchEvent).toBe('function')" },
      { description: 'addEventListener is a function', assertion: "expect(typeof new EventTarget().addEventListener).toBe('function')" },
      { description: 'instanceof EventTarget', assertion: "expect(new EventTarget() instanceof EventTarget).toBeTruthy()" },
    ],
    hints: ['{ once: true } is equivalent to adding a listener that calls removeEventListener on itself after the first call'],
    tags: ['EventTarget', 'addEventListener', 'once'],
    usageExample: {
      code: `const et = new EventTarget()
et.addEventListener('signal', e => console.log(e.type))
et.dispatchEvent(new Event('signal'))  // → 'signal'`,
      explanation: {
        en: "The listener receives the Event object with type and other properties.",
        es: "El oyente recibe el objeto Event con type y otras propiedades.",
      },
    },
  },
]
