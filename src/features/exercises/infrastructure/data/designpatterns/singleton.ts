import type { Exercise } from '@/shared/types/exercises'

export const dpSingletonExercises: Exercise[] = [
  {
    slug: 'dp-singleton-1',
    title: 'Singleton — Static property',
    description: `## Singleton Pattern — Static Property Approach

The Singleton pattern restricts a class to have only one instance. One common approach is using a static property to cache the instance.

**Challenge:** Implement a \`Database\` class with a static \`getInstance()\` method that returns the same instance every time it's called.

Example:
\`\`\`javascript
const db1 = Database.getInstance()
const db2 = Database.getInstance()
db1 === db2 // true
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class Database {
  // Your code here
}

const db1 = Database.getInstance()
const db2 = Database.getInstance()`,
    solution: `class Database {
  static instance = null
  static getInstance() {
    return Database.instance ?? (Database.instance = new Database())
  }
}

const db1 = Database.getInstance()
const db2 = Database.getInstance()`,
    tests: [
      { description: 'getInstance returns same instance on multiple calls', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} expect(D.getInstance()).toBe(D.getInstance())" },
      { description: 'instance is truthy', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} expect(D.getInstance()).toBeTruthy()" },
      { description: 'first call creates instance', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} expect(D.i).toBeFalsy(); D.getInstance(); expect(D.i).toBeTruthy()" },
      { description: 'instance has correct type', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} expect(D.getInstance() instanceof D).toBeTruthy()" },
      { description: 'three calls return the same object', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} const a=D.getInstance(),b=D.getInstance(),c=D.getInstance(); expect(a).toBe(b); expect(b).toBe(c)" },
    ],
    hints: ['Use a static property to store the instance', 'Use the nullish coalescing operator (??)', 'getInstance should check if instance exists before creating'],
    tags: ['singleton', 'design-pattern', 'static-property', 'instance-caching'],
  },
  {
    slug: 'dp-singleton-2',
    title: 'Singleton — Lazy initialization',
    description: `## Singleton — Lazy Initialization

Lazy initialization means the singleton instance is only created when it's first requested, not when the class is defined. This saves resources if the instance is never needed.

**Challenge:** Create a \`Logger\` class that creates its instance only on the first \`getInstance()\` call. Each instance should store its creation time.

Example:
\`\`\`javascript
const log1 = Logger.getInstance()
const log2 = Logger.getInstance()
log1.createdAt === log2.createdAt // true (same instance)
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `class Logger {
  // Your code here
}

const log1 = Logger.getInstance()
const log2 = Logger.getInstance()`,
    solution: `class Logger {
  static instance = null
  constructor() {
    this.createdAt = Date.now()
  }
  static getInstance() {
    return Logger.instance ?? (Logger.instance = new Logger())
  }
}

const log1 = Logger.getInstance()
const log2 = Logger.getInstance()`,
    tests: [
      { description: 'first and second instances are identical', assertion:"class L{static i=null;constructor(){this.c=Date.now()}static getInstance(){return L.i??(L.i=new L())}} expect(L.getInstance()).toBe(L.getInstance())" },
      { description: 'instance has createdAt property', assertion:"class L{static i=null;constructor(){this.c=Date.now()}static getInstance(){return L.i??(L.i=new L())}} expect(L.getInstance().c).toBeTruthy()" },
      { description: 'both instances have same createdAt', assertion:"class L{static i=null;constructor(){this.c=Date.now()}static getInstance(){return L.i??(L.i=new L())}} const a=L.getInstance(),b=L.getInstance(); expect(a.c).toBe(b.c)" },
      { description: 'instance is defined only after first getInstance call', assertion:"class L{static i=null;constructor(){this.c=Date.now()}static getInstance(){return L.i??(L.i=new L())}} expect(L.i).toBeFalsy(); L.getInstance(); expect(L.i).toBeTruthy()" },
      { description: 'multiple getInstance calls do not create new instances', assertion:"class L{static i=null;constructor(){this.c=Date.now()}static getInstance(){return L.i??(L.i=new L())}} const ids=[L.getInstance().c,L.getInstance().c,L.getInstance().c]; expect(ids[0]).toBe(ids[1]); expect(ids[1]).toBe(ids[2])" },
    ],
    hints: ['Initialize the instance property to null', 'Check if instance exists, if not create it', 'Store initialization metadata in constructor'],
    tags: ['singleton', 'lazy-initialization', 'design-pattern', 'factory'],
  },
  {
    slug: 'dp-singleton-3',
    title: 'Singleton — Closure-based',
    description: `## Singleton Pattern — Closure Approach

Instead of using static properties, we can use a closure (IIFE) to create a private scope and ensure only one instance exists.

**Challenge:** Implement a closure-based singleton \`Config\` object. The \`getInstance()\` function should return a cached object that persists across calls.

Example:
\`\`\`javascript
const config1 = Config.getInstance()
const config2 = Config.getInstance()
config1 === config2 // true
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `const Config = (() => {
  // Your code here
})()

const config1 = Config.getInstance()
const config2 = Config.getInstance()`,
    solution: `const Config = (() => {
  let instance = null
  return {
    getInstance() {
      return instance ?? (instance = { setting: 'default' })
    }
  }
})()

const config1 = Config.getInstance()
const config2 = Config.getInstance()`,
    tests: [
      { description: 'getInstance returns same instance', assertion:"const C=(()=>{let i=null;return{getInstance(){return i??(i={s:'d'})}}})(); expect(C.getInstance()).toBe(C.getInstance())" },
      { description: 'instance is defined', assertion:"const C=(()=>{let i=null;return{getInstance(){return i??(i={})}}})(); expect(C.getInstance()).toBeDefined()" },
      { description: 'instance is an object', assertion:"const C=(()=>{let i=null;return{getInstance(){return i??(i={})}}})(); expect(typeof C.getInstance()).toBe('object')" },
      { description: 'state persists across calls', assertion:"const C=(()=>{let i=null;return{getInstance(){return i??(i={v:0})}}})(); const c1=C.getInstance(); c1.v=42; const c2=C.getInstance(); expect(c2.v).toBe(42)" },
      { description: 'multiple getInstance calls do not recreate instance', assertion:"const C=(()=>{let i=null;return{getInstance(){return i??(i={})}}})(); const a=C.getInstance(),b=C.getInstance(),c=C.getInstance(); expect(a).toBe(b); expect(b).toBe(c)" },
    ],
    hints: ['Use an IIFE to create a private scope', 'Store instance in a closure variable', 'Return an object with getInstance method'],
    tags: ['singleton', 'closure', 'iife', 'design-pattern', 'private-state'],
  },
  {
    slug: 'dp-singleton-4',
    title: 'Singleton — State preservation',
    description: `## Singleton — Preserving State Across Calls

A key feature of the Singleton pattern is that state is preserved. Multiple calls to getInstance return the same object with the same data.

**Challenge:** Create a \`StateManager\` singleton that stores and retrieves state. Each getInstance should return the same state object.

Example:
\`\`\`javascript
const state1 = StateManager.getInstance()
state1.data = 'hello'
const state2 = StateManager.getInstance()
state2.data // 'hello'
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `class StateManager {
  // Your code here
}

const state1 = StateManager.getInstance()
state1.data = 'hello'
const state2 = StateManager.getInstance()`,
    solution: `class StateManager {
  static instance = null
  constructor() {
    this.data = null
  }
  static getInstance() {
    return StateManager.instance ?? (StateManager.instance = new StateManager())
  }
}

const state1 = StateManager.getInstance()
state1.data = 'hello'
const state2 = StateManager.getInstance()`,
    tests: [
      { description: 'state modification persists across instances', assertion:"class S{static i=null;constructor(){this.d=null}static getInstance(){return S.i??(S.i=new S())}} const a=S.getInstance(); a.d='x'; const b=S.getInstance(); expect(b.d).toBe('x')" },
      { description: 'both references point to same object', assertion:"class S{static i=null;static getInstance(){return S.i??(S.i=new S())}} const a=S.getInstance(),b=S.getInstance(); expect(a).toBe(b)" },
      { description: 'multiple property modifications work', assertion:"class S{static i=null;static getInstance(){return S.i??(S.i=new S())}} const a=S.getInstance(); a.x=1; a.y=2; const b=S.getInstance(); expect(b.x).toBe(1); expect(b.y).toBe(2)" },
      { description: 'state persists through three getInstance calls', assertion:"class S{static i=null;static getInstance(){return S.i??(S.i=new S())}} const a=S.getInstance(); a.v=99; S.getInstance(); const c=S.getInstance(); expect(c.v).toBe(99)" },
      { description: 'modifying data affects all references', assertion:"class S{static i=null;constructor(){this.arr=[]}static getInstance(){return S.i??(S.i=new S())}} const a=S.getInstance(); a.arr.push(1); const b=S.getInstance(); expect(b.arr[0]).toBe(1)" },
    ],
    hints: ['Initialize data properties in constructor', 'All getInstance calls return the same instance', 'Modifications to the instance affect all references'],
    tags: ['singleton', 'state-management', 'design-pattern', 'shared-state'],
  },
  {
    slug: 'dp-singleton-5',
    title: 'Singleton — Multiple independent singletons',
    description: `## Singleton — Different Singletons Are Independent

Each class can have its own singleton instance. Two different singleton classes should maintain separate instances.

**Challenge:** Create two different singleton classes: \`Database\` and \`Cache\`. Each should have its own independent getInstance method. Verify they are different instances.

Example:
\`\`\`javascript
const db = Database.getInstance()
const cache = Cache.getInstance()
db !== cache // true
Database.getInstance() === Database.getInstance() // true
Cache.getInstance() === Cache.getInstance() // true
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'DesignPatterns',
    initialCode: `class Database {
  // Your code here
}

class Cache {
  // Your code here
}

const db = Database.getInstance()
const cache = Cache.getInstance()`,
    solution: `class Database {
  static instance = null
  static getInstance() {
    return Database.instance ?? (Database.instance = new Database())
  }
}

class Cache {
  static instance = null
  static getInstance() {
    return Cache.instance ?? (Cache.instance = new Cache())
  }
}

const db = Database.getInstance()
const cache = Cache.getInstance()`,
    tests: [
      { description: 'Database.getInstance returns same instance', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} expect(D.getInstance()).toBe(D.getInstance())" },
      { description: 'Cache.getInstance returns same instance', assertion:"class C{static i=null;static getInstance(){return C.i??(C.i=new C())}} expect(C.getInstance()).toBe(C.getInstance())" },
      { description: 'Database and Cache instances are different objects', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} class C{static i=null;static getInstance(){return C.i??(C.i=new C())}} expect(D.getInstance() !== C.getInstance()).toBe(true)" },
      { description: 'each class has only one instance', assertion:"class D{static i=null;static getInstance(){return D.i??(D.i=new D())}} class C{static i=null;static getInstance(){return C.i??(C.i=new C())}} const d1=D.getInstance(),d2=D.getInstance(),c1=C.getInstance(),c2=C.getInstance(); expect(d1).toBe(d2); expect(c1).toBe(c2)" },
      { description: 'modifying one singleton does not affect the other', assertion:"class D{static i=null;constructor(){this.v=0}static getInstance(){return D.i??(D.i=new D())}} class C{static i=null;constructor(){this.v=0}static getInstance(){return C.i??(C.i=new C())}} D.getInstance().v=42; expect(C.getInstance().v).toBe(0)" },
    ],
    hints: ['Each class needs its own static instance property', 'Each class needs its own getInstance method', 'Different classes are independent'],
    tags: ['singleton', 'design-pattern', 'independent-instances', 'multiple-singletons'],
  },
]
