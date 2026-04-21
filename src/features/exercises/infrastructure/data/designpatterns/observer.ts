import type { Exercise } from '@/shared/types/exercises'

export const dpObserverExercises: Exercise[] = [
  {
    slug: 'dp-observer-1',
    title: 'Observer — Basic subscription',
    description: `## Observer Pattern — Basic Subscription

The Observer pattern allows objects to subscribe to events and be notified when those events occur.

**Challenge:** Implement an \`EventEmitter\` class with:
- \`on(eventName, callback)\` - subscribe to an event
- \`emit(eventName, ...args)\` - trigger an event

When an event is emitted, all subscribers should be called with the provided arguments.

Example:
\`\`\`javascript
const emitter = new EventEmitter()
let result = null
emitter.on('test', (value) => { result = value })
emitter.emit('test', 'hello')
result // 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class EventEmitter {
  // Your code here
}

const emitter = new EventEmitter()
let result = null
emitter.on('test', (value) => { result = value })
emitter.emit('test', 'hello')`,
    solution: `class EventEmitter {
  constructor() {
    this._listeners = {}
  }
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn)
  }
  emit(event, ...args) {
    (this._listeners[event] ??= []).forEach(f => f(...args))
  }
}

const emitter = new EventEmitter()
let result = null
emitter.on('test', (value) => { result = value })
emitter.emit('test', 'hello')`,
    tests: [
      { description: 'subscriber receives emitted value', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let r=null; e.on('x',(v)=>{r=v}); e.emit('x','hi'); expect(r).toBe('hi')" },
      { description: 'emit with multiple arguments passes all of them', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let a,b; e.on('x',(v1,v2)=>{a=v1;b=v2}); e.emit('x',1,2); expect(a).toBe(1); expect(b).toBe(2)" },
      { description: 'different events do not trigger each other subscribers', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let r=0; e.on('x',()=>{r++}); e.emit('y'); expect(r).toBe(0)" },
      { description: 'subscriber callback is executed', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let called=false; e.on('test',()=>{called=true}); e.emit('test'); expect(called).toBeTruthy()" },
      { description: 'emitted value matches subscription argument', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let v=null; e.on('msg',(x)=>{v=x}); e.emit('msg','test'); expect(v).toBe('test')" },
    ],
    hints: ['Use an object to store listeners by event name', 'Use nullish coalescing (??) to initialize array if needed', 'forEach over all listeners for an event and call them'],
    tags: ['observer', 'event-emitter', 'pub-sub', 'design-pattern'],
    usageExample: {
      code: `const emitter = {
  handlers: [],
  on(fn) { this.handlers.push(fn); },
  emit(v) { this.handlers.forEach(h => h(v)); }
};
emitter.on(v => console.log(v));
emitter.emit('hello');`,
      explanation: {
        en: "The Observer pattern lets objects subscribe to events emitted by a subject.",
        es: "El patrón Observer permite que los objetos se suscriban a eventos emitidos por un sujeto.",
      },
    },
  },
  {
    slug: 'dp-observer-2',
    title: 'Observer — Multiple subscribers',
    description: `## Observer Pattern — Multiple Subscribers

A single event can have multiple subscribers. All subscribers should be called when the event is emitted.

**Challenge:** Create an \`EventEmitter\` that supports multiple listeners on the same event. All listeners should fire when the event is emitted.

Example:
\`\`\`javascript
const emitter = new EventEmitter()
let count = 0
emitter.on('increment', () => { count++ })
emitter.on('increment', () => { count++ })
emitter.emit('increment')
count // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class EventEmitter {
  // Your code here
}

const emitter = new EventEmitter()
let count = 0
emitter.on('increment', () => { count++ })
emitter.on('increment', () => { count++ })
emitter.emit('increment')`,
    solution: `class EventEmitter {
  constructor() {
    this._listeners = {}
  }
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn)
  }
  emit(event, ...args) {
    (this._listeners[event] ??= []).forEach(f => f(...args))
  }
}

const emitter = new EventEmitter()
let count = 0
emitter.on('increment', () => { count++ })
emitter.on('increment', () => { count++ })
emitter.emit('increment')`,
    tests: [
      { description: 'two subscribers both execute', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let c=0; e.on('x',()=>{c++}); e.on('x',()=>{c++}); e.emit('x'); expect(c).toBe(2)" },
      { description: 'three subscribers all fire', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let c=0; e.on('y',()=>{c++}); e.on('y',()=>{c++}); e.on('y',()=>{c++}); e.emit('y'); expect(c).toBe(3)" },
      { description: 'each subscriber receives the same arguments', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let v1,v2; e.on('msg',(x)=>{v1=x}); e.on('msg',(x)=>{v2=x}); e.emit('msg','test'); expect(v1).toBe('test'); expect(v2).toBe('test')" },
      { description: 'subscribers execute in order they were added', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let seq=''; e.on('x',()=>{seq+='a'}); e.on('x',()=>{seq+='b'}); e.emit('x'); expect(seq).toBe('ab')" },
      { description: 'multiple emits trigger all subscribers each time', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}} const e=new E(); let c=0; e.on('x',()=>{c++}); e.on('x',()=>{c++}); e.emit('x'); e.emit('x'); expect(c).toBe(4)" },
    ],
    hints: ['Store listeners in an array for each event', 'forEach over all listeners when emitting', 'Listeners execute in the order they were added'],
    tags: ['observer', 'multiple-listeners', 'pub-sub', 'event-emitter'],
    usageExample: {
      code: `const emitter = createEmitter();
const log1 = v => console.log('A:', v);
const log2 = v => console.log('B:', v);
emitter.on(log1);
emitter.on(log2);
emitter.emit(42); // A: 42 then B: 42`,
      explanation: {
        en: "Multiple listeners all receive the same emitted value.",
        es: "Múltiples oyentes reciben el mismo valor emitido.",
      },
    },
  },
  {
    slug: 'dp-observer-3',
    title: 'Observer — Listener count',
    description: `## Observer Pattern — Tracking Listener Count

An observer system can track how many listeners are subscribed to each event.

**Challenge:** Implement an \`EventEmitter\` with a \`listenerCount(eventName)\` method that returns the number of subscribers for that event.

Example:
\`\`\`javascript
const emitter = new EventEmitter()
emitter.listenerCount('data') // 0
emitter.on('data', () => {})
emitter.listenerCount('data') // 1
emitter.on('data', () => {})
emitter.listenerCount('data') // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `class EventEmitter {
  // Your code here
}

const emitter = new EventEmitter()
emitter.on('data', () => {})
emitter.on('data', () => {})`,
    solution: `class EventEmitter {
  constructor() {
    this._listeners = {}
  }
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn)
  }
  emit(event, ...args) {
    (this._listeners[event] ??= []).forEach(f => f(...args))
  }
  listenerCount(event) {
    return (this._listeners[event] ??= []).length
  }
}

const emitter = new EventEmitter()
emitter.on('data', () => {})
emitter.on('data', () => {})`,
    tests: [
      { description: 'returns 0 for event with no listeners', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}listenerCount(e){return(this._l[e]??=[]).length}} const e=new E(); expect(e.listenerCount('x')).toBe(0)" },
      { description: 'returns 1 after adding one listener', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}listenerCount(e){return(this._l[e]??=[]).length}} const e=new E(); e.on('x',()=>{}); expect(e.listenerCount('x')).toBe(1)" },
      { description: 'returns correct count for multiple listeners', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}listenerCount(e){return(this._l[e]??=[]).length}} const e=new E(); e.on('x',()=>{}); e.on('x',()=>{}); e.on('x',()=>{}); expect(e.listenerCount('x')).toBe(3)" },
      { description: 'different events have independent counts', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}listenerCount(e){return(this._l[e]??=[]).length}} const e=new E(); e.on('a',()=>{}); e.on('b',()=>{}); e.on('b',()=>{}); expect(e.listenerCount('a')).toBe(1); expect(e.listenerCount('b')).toBe(2)" },
      { description: 'count remains accurate after multiple on calls', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}listenerCount(e){return(this._l[e]??=[]).length}} const e=new E(); expect(e.listenerCount('msg')).toBe(0); e.on('msg',()=>{}); expect(e.listenerCount('msg')).toBe(1); e.on('msg',()=>{}); expect(e.listenerCount('msg')).toBe(2)" },
    ],
    hints: ['Use listenerCount to return the length of the listener array', 'Initialize empty array if event has no listeners yet', 'Keep track of listeners per event name'],
    tags: ['observer', 'event-tracking', 'listener-count', 'event-emitter'],
    usageExample: {
      code: `emitter.on(handler1);
emitter.on(handler2);
emitter.listeners.length; // 2`,
      explanation: {
        en: "Track how many subscribers are registered by checking the listeners array length.",
        es: "Rastrea cuántos suscriptores están registrados comprobando la longitud del array de oyentes.",
      },
    },
  },
  {
    slug: 'dp-observer-4',
    title: 'Observer — Emit with no listeners',
    description: `## Observer Pattern — Safe Emit

The emit method should handle events that have no subscribers without throwing an error.

**Challenge:** Implement an \`EventEmitter\` that safely emits events even when no listeners are subscribed.

Example:
\`\`\`javascript
const emitter = new EventEmitter()
emitter.emit('nonexistent') // Should not throw
expect(() => emitter.emit('test')).not.toThrow()
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `class EventEmitter {
  // Your code here
}

const emitter = new EventEmitter()
emitter.emit('nonexistent')`,
    solution: `class EventEmitter {
  constructor() {
    this._listeners = {}
  }
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn)
  }
  emit(event, ...args) {
    (this._listeners[event] ??= []).forEach(f => f(...args))
  }
}

const emitter = new EventEmitter()
emitter.emit('nonexistent')`,
    tests: [
      { description: 'emit does not throw for nonexistent event', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??=[]).forEach(f=>f(...a))}} const e=new E(); expect((() => { try { (()=>{e.emit('none')})(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'emit returns without error when no listeners', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??=[]).forEach(f=>f(...a))}} const e=new E(); let ok=false; try{e.emit('x');ok=true}catch(err){} expect(ok).toBeTruthy()" },
      { description: 'emit works after listening on other event', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??=[]).forEach(f=>f(...a))}} const e=new E(); e.on('a',()=>{}); expect((() => { try { (()=>{e.emit('b')})(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'multiple emits without listeners do not throw', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??=[]).forEach(f=>f(...a))}} const e=new E(); expect((() => { try { (()=>{e.emit('x');e.emit('y');e.emit('z')})(); return true; } catch(e) { return false; } })()).toBe(true)" },
      { description: 'emit is silently ignored when no listeners subscribed', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??=[]).forEach(f=>f(...a))}} const e=new E(); let called=false; e.on('a',()=>{called=true}); e.emit('b'); expect(called).toBeFalsy()" },
    ],
    hints: ['Use nullish coalescing to default to empty array', 'forEach on empty array does nothing', 'No error handling needed if you use the nullish operator'],
    tags: ['observer', 'safe-emit', 'error-handling', 'event-emitter'],
    usageExample: {
      code: `const emitter = createEmitter();
emitter.emit('test'); // no listeners — no error`,
      explanation: {
        en: "Emitting with no listeners should be a no-op — not throw an error.",
        es: "Emitir sin oyentes debe ser una operación nula, no lanzar un error.",
      },
    },
  },
  {
    slug: 'dp-observer-5',
    title: 'Observer — Unsubscribe (off)',
    description: `## Observer Pattern — Unsubscribe

Subscribers should be able to unsubscribe from events using an \`off()\` or \`unsubscribe()\` method.

**Challenge:** Implement an \`EventEmitter\` with an \`off(eventName, callback)\` method that removes a listener.

Example:
\`\`\`javascript
const emitter = new EventEmitter()
const handler = () => { console.log('fired') }
emitter.on('test', handler)
emitter.off('test', handler)
emitter.emit('test') // handler does not execute
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'DesignPatterns',
    initialCode: `class EventEmitter {
  // Your code here
}

const emitter = new EventEmitter()
let count = 0
const handler = () => { count++ }
emitter.on('test', handler)
emitter.off('test', handler)
emitter.emit('test')`,
    solution: `class EventEmitter {
  constructor() {
    this._listeners = {}
  }
  on(event, fn) {
    (this._listeners[event] ??= []).push(fn)
  }
  emit(event, ...args) {
    (this._listeners[event] ??= []).forEach(f => f(...args))
  }
  off(event, fn) {
    this._listeners[event] = (this._listeners[event] ??= []).filter(f => f !== fn)
  }
}

const emitter = new EventEmitter()
let count = 0
const handler = () => { count++ }
emitter.on('test', handler)
emitter.off('test', handler)
emitter.emit('test')`,
    tests: [
      { description: 'off removes listener so it does not fire on emit', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}off(e,fn){this._l[e]=(this._l[e]??=[]).filter(f=>f!==fn)}} const e=new E(); let c=0; const h=()=>{c++}; e.on('x',h); e.off('x',h); e.emit('x'); expect(c).toBe(0)" },
      { description: 'off only removes specified listener', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}off(e,fn){this._l[e]=(this._l[e]??=[]).filter(f=>f!==fn)}} const e=new E(); let c=0; const h1=()=>{c++}; const h2=()=>{c++}; e.on('x',h1); e.on('x',h2); e.off('x',h1); e.emit('x'); expect(c).toBe(1)" },
      { description: 'off with wrong handler reference does nothing', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}off(e,fn){this._l[e]=(this._l[e]??=[]).filter(f=>f!==fn)}} const e=new E(); let c=0; const h1=()=>{c++}; const h2=()=>{c++}; e.on('x',h1); e.off('x',h2); e.emit('x'); expect(c).toBe(1)" },
      { description: 'multiple off calls work correctly', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}off(e,fn){this._l[e]=(this._l[e]??=[]).filter(f=>f!==fn)}} const e=new E(); let c=0; const h1=()=>{c++}; const h2=()=>{c++}; const h3=()=>{c++}; e.on('x',h1); e.on('x',h2); e.on('x',h3); e.off('x',h1); e.off('x',h3); e.emit('x'); expect(c).toBe(1)" },
      { description: 'off on nonexistent listener does not throw', assertion:"class E{constructor(){this._l={}}on(e,fn){(this._l[e]??=[]).push(fn)}emit(e,...a){(this._l[e]??[]).forEach(f=>f(...a))}off(e,fn){this._l[e]=(this._l[e]??=[]).filter(f=>f!==fn)}} const e=new E(); const h=()=>{}; expect((() => { try { (()=>{e.off('x',h)})(); return true; } catch(e) { return false; } })()).toBe(true)" },
    ],
    hints: ['Use filter to remove listener that matches the reference', 'Compare function references with ===', 'Only the exact function reference should be removed'],
    tags: ['observer', 'unsubscribe', 'off', 'event-management'],
    usageExample: {
      code: `emitter.on(handler);
emitter.off(handler);
emitter.listeners.length; // 0`,
      explanation: {
        en: "off() removes a listener so it no longer receives future events.",
        es: "off() elimina un oyente para que ya no reciba futuros eventos.",
      },
    },
  },
]
