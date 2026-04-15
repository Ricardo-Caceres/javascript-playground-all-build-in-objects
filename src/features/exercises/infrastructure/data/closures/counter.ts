import type { Exercise } from '@/shared/types/exercises'

export const closuresCounterExercises: Exercise[] = [
  {
    slug: 'closures-counter-1',
    title: 'Closures — Basic counter',
    description: `## Creating a Simple Counter with Closures

A closure is a function that has access to variables from its outer scope even after the outer function has returned.

**Challenge:** Create a \`makeCounter\` function that returns a function. Each time the returned function is called, it should increment and return a counter starting from 1.

Example:
\`\`\`javascript
const counter = makeCounter()
counter() // 1
counter() // 2
counter() // 3
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeCounter() {
  // Your code here
}

const counter = makeCounter()
counter()`,
    solution: `function makeCounter() {
  let n = 0
  return () => ++n
}

const counter = makeCounter()
counter()`,
    tests: [
      { description: 'first call returns 1', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); expect(c()).toBe(1)" },
      { description: 'second call returns 2', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); c(); expect(c()).toBe(2)" },
      { description: 'two counters are independent', assertion: "function makeCounter(){let n=0;return()=>++n} const a=makeCounter(),b=makeCounter(); a();a(); expect(b()).toBe(1)" },
      { description: 'returns a function', assertion: "function makeCounter(){let n=0;return()=>++n} expect(typeof makeCounter()).toBe('function')" },
      { description: '10 calls returns 10', assertion: "function makeCounter(){let n=0;return()=>++n} const c=makeCounter(); for(let i=0;i<9;i++)c(); expect(c()).toBe(10)" },
    ],
    hints: ['Use a variable outside the returned function to store state', 'Each call to makeCounter should create a new independent counter'],
    tags: ['closures', 'counter', 'state', 'closure-state'],
  },
  {
    slug: 'closures-counter-2',
    title: 'Closures — Counter with reset',
    description: `## Counter with Control Methods

Extend the counter concept by returning an object with multiple methods that share access to the same internal state.

**Challenge:** Create a \`makeCounter\` function that returns an object with three methods:
- \`increment()\` - increments counter by 1 and returns the new value
- \`reset()\` - resets counter to 0
- \`value()\` - returns current counter value without incrementing

Example:
\`\`\`javascript
const counter = makeCounter()
counter.increment() // 1
counter.increment() // 2
counter.value()    // 2
counter.reset()
counter.value()    // 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function makeCounter() {
  // Your code here
}

const counter = makeCounter()
counter.increment()`,
    solution: `function makeCounter() {
  let n = 0
  return {
    increment() {
      return ++n
    },
    reset() {
      n = 0
    },
    value() {
      return n
    }
  }
}

const counter = makeCounter()
counter.increment()`,
    tests: [
      { description: 'increment returns 1 on first call', assertion: "function makeCounter(){let n=0;return{increment(){return++n},reset(){n=0},value(){return n}}} const c=makeCounter(); expect(c.increment()).toBe(1)" },
      { description: 'value returns current without incrementing', assertion: "function makeCounter(){let n=0;return{increment(){return++n},reset(){n=0},value(){return n}}} const c=makeCounter(); c.increment(); expect(c.value()).toBe(1)" },
      { description: 'reset sets counter to 0', assertion: "function makeCounter(){let n=0;return{increment(){return++n},reset(){n=0},value(){return n}}} const c=makeCounter(); c.increment();c.increment();c.reset(); expect(c.value()).toBe(0)" },
      { description: 'increment after reset starts from 1', assertion: "function makeCounter(){let n=0;return{increment(){return++n},reset(){n=0},value(){return n}}} const c=makeCounter(); c.increment();c.reset(); expect(c.increment()).toBe(1)" },
      { description: 'multiple increments work correctly', assertion: "function makeCounter(){let n=0;return{increment(){return++n},reset(){n=0},value(){return n}}} const c=makeCounter(); for(let i=0;i<5;i++)c.increment(); expect(c.value()).toBe(5)" },
    ],
    hints: ['Return an object with multiple methods', 'All methods share the same closure variable'],
    tags: ['closures', 'counter', 'object-methods', 'shared-state'],
  },
  {
    slug: 'closures-counter-3',
    title: 'Closures — Step counter',
    description: `## Counter with Custom Step

Create a counter that increments by a custom step value instead of always by 1.

**Challenge:** Create a \`makeStepCounter(step)\` function that returns a function. Each call increments by \`step\` and returns the new value.

Example:
\`\`\`javascript
const counter = makeStepCounter(5)
counter() // 5
counter() // 10
counter() // 15
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function makeStepCounter(step) {
  // Your code here
}

const counter = makeStepCounter(5)
counter()`,
    solution: `function makeStepCounter(step) {
  let n = 0
  return () => n += step
}

const counter = makeStepCounter(5)
counter()`,
    tests: [
      { description: 'increments by step value', assertion: "function makeStepCounter(step){let n=0;return()=>n+=step} const c=makeStepCounter(5); expect(c()).toBe(5)" },
      { description: 'second call increments by step again', assertion: "function makeStepCounter(step){let n=0;return()=>n+=step} const c=makeStepCounter(5); c(); expect(c()).toBe(10)" },
      { description: 'works with different step values', assertion: "function makeStepCounter(step){let n=0;return()=>n+=step} const c=makeStepCounter(3); expect(c()).toBe(3)" },
      { description: 'two counters with different steps are independent', assertion: "function makeStepCounter(step){let n=0;return()=>n+=step} const a=makeStepCounter(2),b=makeStepCounter(3); a(); expect(b()).toBe(3)" },
      { description: 'works with negative step (countdown)', assertion: "function makeStepCounter(step){let n=0;return()=>n+=step} const c=makeStepCounter(-2); c();c(); expect(c()).toBe(-6)" },
    ],
    hints: ['Store the step value in closure', 'Modify counter by adding step on each call'],
    tags: ['closures', 'counter', 'parameter-capture', 'step'],
  },
  {
    slug: 'closures-counter-4',
    title: 'Closures — Countdown timer',
    description: `## Countdown from a Starting Value

Create a function that counts down from an initial value until it reaches 0, then stays at 0.

**Challenge:** Create a \`makeCountdown(from)\` function that returns a function. Each call decrements and returns the current value, starting at \`from\` and never going below 0.

Example:
\`\`\`javascript
const countdown = makeCountdown(3)
countdown() // 3
countdown() // 2
countdown() // 1
countdown() // 0
countdown() // 0
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function makeCountdown(from) {
  // Your code here
}

const countdown = makeCountdown(3)
countdown()`,
    solution: `function makeCountdown(from) {
  let n = from
  return () => n > 0 ? n-- : 0
}

const countdown = makeCountdown(3)
countdown()`,
    tests: [
      { description: 'first call returns initial value', assertion: "function makeCountdown(from){let n=from;return()=>n>0?n--:0} const cd=makeCountdown(3); expect(cd()).toBe(3)" },
      { description: 'second call decrements by 1', assertion: "function makeCountdown(from){let n=from;return()=>n>0?n--:0} const cd=makeCountdown(3); cd(); expect(cd()).toBe(2)" },
      { description: 'continues down to 0', assertion: "function makeCountdown(from){let n=from;return()=>n>0?n--:0} const cd=makeCountdown(3); cd();cd();cd(); expect(cd()).toBe(0)" },
      { description: 'stays at 0 after reaching it', assertion: "function makeCountdown(from){let n=from;return()=>n>0?n--:0} const cd=makeCountdown(2); cd();cd();cd(); expect(cd()).toBe(0)" },
      { description: 'works with larger starting values', assertion: "function makeCountdown(from){let n=from;return()=>n>0?n--:0} const cd=makeCountdown(5); for(let i=0;i<7;i++)cd(); expect(cd()).toBe(0)" },
    ],
    hints: ['Use a conditional to prevent negative values', 'Return the value before or after decrementing carefully'],
    tags: ['closures', 'counter', 'countdown', 'state-management'],
  },
  {
    slug: 'closures-counter-5',
    title: 'Closures — Memoize single value',
    description: `## Cache Function Result

Create a function that wraps another function and caches its result on first call. Subsequent calls return the cached result regardless of arguments.

**Challenge:** Create a \`memoizeOnce(fn)\` function that returns a wrapper. The first call to the wrapper executes \`fn\` with the given arguments and caches the result. All subsequent calls return the cached result without calling \`fn\` again.

Example:
\`\`\`javascript
let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const memoized = memoizeOnce(fn)
memoized(5)   // calls fn, returns 10, callCount = 1
memoized(99)  // returns cached 10, does NOT call fn
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Closures',
    initialCode: `function memoizeOnce(fn) {
  // Your code here
}

let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const memoized = memoizeOnce(fn)
memoized(5)`,
    solution: `function memoizeOnce(fn) {
  let called = false
  let result
  return (...args) => {
    if (!called) {
      called = true
      result = fn(...args)
    }
    return result
  }
}

let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const memoized = memoizeOnce(fn)
memoized(5)`,
    tests: [
      { description: 'fn is called on first invocation', assertion: "function memoizeOnce(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n=0;const f=()=>{n++;return 42}; const m=memoizeOnce(f); m(); expect(n).toBe(1)" },
      { description: 'returns first call result on second call', assertion: "function memoizeOnce(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} const m=memoizeOnce((x)=>x*2); expect(m(5)).toBe(10); expect(m(99)).toBe(10)" },
      { description: 'fn not called twice', assertion: "function memoizeOnce(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n=0;const f=()=>{n++}; const m=memoizeOnce(f); m();m();m(); expect(n).toBe(1)" },
      { description: 'works with different argument types', assertion: "function memoizeOnce(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} const m=memoizeOnce((x)=>x+'!'); expect(m('hello')).toBe('hello!'); expect(m('world')).toBe('hello!')" },
      { description: 'caches undefined result', assertion: "function memoizeOnce(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n=0;const f=()=>{n++}; const m=memoizeOnce(f); const res1=m();const res2=m(); expect(res1).toBeUndefined(); expect(res2).toBeUndefined(); expect(n).toBe(1)" },
    ],
    hints: ['Use a flag to track if the function has been called', 'Store the result in a closure variable', 'Always return the cached result after first call'],
    tags: ['closures', 'memoization', 'cache', 'performance'],
  },
]
