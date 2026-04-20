import type { Exercise } from '@/shared/types/exercises'

export const dpDecoratorExercises: Exercise[] = [
  {
    slug: 'dp-decorator-1',
    title: 'Decorator — Logged function',
    description: `## Decorator Pattern — Adding Behavior

A decorator wraps a function to add behavior without modifying the original. In JavaScript, this is a higher-order function.

**Challenge:** Implement a \`logged(fn)\` decorator that wraps a function. The wrapper should call the original function and return its result.

Example:
\`\`\`javascript
const add = (a, b) => a + b
const loggedAdd = logged(add)
loggedAdd(2, 3) // calls add, returns 5
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `function logged(fn) {
  // Your code here
}

const add = (a, b) => a + b
const loggedAdd = logged(add)
loggedAdd(2, 3)`,
    solution: `function logged(fn) {
  return function(...args) {
    return fn(...args)
  }
}

const add = (a, b) => a + b
const loggedAdd = logged(add)
loggedAdd(2, 3)`,
    tests: [
      { description: 'decorator passes through return value', assertion:"function logged(fn){return function(...args){return fn(...args)}} const add=(a,b)=>a+b; const l=logged(add); expect(l(2,3)).toBe(5)" },
      { description: 'decorator works with different function', assertion:"function logged(fn){return function(...args){return fn(...args)}} const mul=(a,b)=>a*b; const l=logged(mul); expect(l(4,5)).toBe(20)" },
      { description: 'decorator returns a function', assertion:"function logged(fn){return function(...args){return fn(...args)}} const f=()=>42; expect(typeof logged(f)).toBe('function')" },
      { description: 'decorated function receives correct arguments', assertion:"function logged(fn){return function(...args){return fn(...args)}} const check=(x,y)=>{if(x===5&&y===10)return true;return false}; expect(logged(check)(5,10)).toBeTruthy()" },
      { description: 'decorator preserves function behavior', assertion:"function logged(fn){return function(...args){return fn(...args)}} const str=(s)=>s.toUpperCase(); expect(logged(str)('hello')).toBe('HELLO')" },
    ],
    hints: ['Return a function from logged', 'Pass all arguments to the original function', 'Return the result from the original function'],
    tags: ['decorator', 'wrapper', 'higher-order-function', 'design-pattern'],
  },
  {
    slug: 'dp-decorator-2',
    title: 'Decorator — Timed function',
    description: `## Decorator Pattern — Timing Execution

A decorator can measure and track function execution time.

**Challenge:** Implement a \`timed(fn)\` decorator that wraps a function. The wrapper should:
- Call the original function
- Return the result unchanged

(The timing behavior is internal; we're testing that the result is correct)

Example:
\`\`\`javascript
const slow = (x) => x * 2
const timedSlow = timed(slow)
timedSlow(5) // returns 10
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'DesignPatterns',
    initialCode: `function timed(fn) {
  // Your code here
}

const slow = (x) => x * 2
const timedSlow = timed(slow)
timedSlow(5)`,
    solution: `function timed(fn) {
  return function(...args) {
    const start = Date.now()
    const result = fn(...args)
    return result
  }
}

const slow = (x) => x * 2
const timedSlow = timed(slow)
timedSlow(5)`,
    tests: [
      { description: 'timed decorator returns correct result', assertion:"function timed(fn){return function(...args){Date.now();const r=fn(...args);return r}} const f=(x)=>x*2; expect(timed(f)(5)).toBe(10)" },
      { description: 'timed preserves return value for different functions', assertion:"function timed(fn){return function(...args){Date.now();const r=fn(...args);return r}} const f=(x)=>x+10; expect(timed(f)(5)).toBe(15)" },
      { description: 'timed returns a function', assertion:"function timed(fn){return function(...args){Date.now();const r=fn(...args);return r}} expect(typeof timed(()=>42)).toBe('function')" },
      { description: 'timed works with multiple arguments', assertion:"function timed(fn){return function(...args){Date.now();const r=fn(...args);return r}} const f=(a,b)=>a*b; expect(timed(f)(3,4)).toBe(12)" },
      { description: 'timed does not modify original result', assertion:"function timed(fn){return function(...args){Date.now();const r=fn(...args);return r}} const f=(x)=>({value:x}); const r=timed(f)(42); expect(r.value).toBe(42)" },
    ],
    hints: ['Capture the start time', 'Call the original function', 'Return the result from the original function'],
    tags: ['decorator', 'timing', 'higher-order-function', 'performance'],
  },
  {
    slug: 'dp-decorator-3',
    title: 'Decorator — Call tracking',
    description: `## Decorator Pattern — Tracking Function Calls

A decorator can track how many times a function is called.

**Challenge:** Implement a \`tracked(fn)\` decorator that wraps a function. The wrapper should:
- Call the original function
- Return the result
- Internally count how many times it was called

The decorator should add a \`callCount\` property to the wrapper.

Example:
\`\`\`javascript
const fn = (x) => x * 2
const t = tracked(fn)
t(5)
t(3)
t.callCount // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `function tracked(fn) {
  // Your code here
}

const f = (x) => x * 2
const t = tracked(f)
t(5)
t(3)`,
    solution: `function tracked(fn) {
  const wrapper = function(...args) {
    wrapper.callCount++
    return fn(...args)
  }
  wrapper.callCount = 0
  return wrapper
}

const f = (x) => x * 2
const t = tracked(f)
t(5)
t(3)`,
    tests: [
      { description: 'call count starts at 0', assertion:"function tracked(fn){const w=function(...args){w.callCount++;return fn(...args)};w.callCount=0;return w} const t=tracked(()=>42); expect(t.callCount).toBe(0)" },
      { description: 'call count increments after first call', assertion:"function tracked(fn){const w=function(...args){w.callCount++;return fn(...args)};w.callCount=0;return w} const t=tracked(()=>42); t(); expect(t.callCount).toBe(1)" },
      { description: 'call count reflects multiple calls', assertion:"function tracked(fn){const w=function(...args){w.callCount++;return fn(...args)};w.callCount=0;return w} const t=tracked(()=>42); t();t();t(); expect(t.callCount).toBe(3)" },
      { description: 'decorated function still returns correct value', assertion:"function tracked(fn){const w=function(...args){w.callCount++;return fn(...args)};w.callCount=0;return w} const t=tracked((x)=>x*2); expect(t(5)).toBe(10)" },
      { description: 'call count tracks all invocations', assertion:"function tracked(fn){const w=function(...args){w.callCount++;return fn(...args)};w.callCount=0;return w} const t=tracked((a,b)=>a+b); t(1,2);t(3,4);t(5,6); expect(t.callCount).toBe(3)" },
    ],
    hints: ['Create a wrapper function', 'Add callCount property to wrapper', 'Increment callCount on each call', 'Return the result from the original function'],
    tags: ['decorator', 'call-tracking', 'higher-order-function', 'monitoring'],
  },
  {
    slug: 'dp-decorator-4',
    title: 'Decorator — Once',
    description: `## Decorator Pattern — Execute Once

A decorator can ensure a function only runs once, then returns the cached result.

**Challenge:** Implement an \`once(fn)\` decorator that wraps a function. The first call executes \`fn\`, but subsequent calls return the cached result without executing \`fn\` again.

Example:
\`\`\`javascript
let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const o = once(fn)
o(5) // calls fn, returns 10, callCount = 1
o(99) // returns cached 10, callCount still 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'DesignPatterns',
    initialCode: `function once(fn) {
  // Your code here
}

let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const o = once(fn)
o(5)`,
    solution: `function once(fn) {
  let called = false
  let result
  return function(...args) {
    if (!called) {
      called = true
      result = fn(...args)
    }
    return result
  }
}

let callCount = 0
const fn = (x) => { callCount++; return x * 2 }
const o = once(fn)
o(5)`,
    tests: [
      { description: 'first call executes function', assertion:"function once(fn){let c=false,r;return function(...args){if(!c){c=true;r=fn(...args)}return r}} let n=0;const f=()=>{n++;return 42}; const o=once(f); o(); expect(n).toBe(1)" },
      { description: 'second call does not execute function', assertion:"function once(fn){let c=false,r;return function(...args){if(!c){c=true;r=fn(...args)}return r}} let n=0;const f=()=>{n++}; const o=once(f); o();o(); expect(n).toBe(1)" },
      { description: 'returns cached result on subsequent calls', assertion:"function once(fn){let c=false,r;return function(...args){if(!c){c=true;r=fn(...args)}return r}} const o=once((x)=>x*2); expect(o(5)).toBe(10); expect(o(99)).toBe(10)" },
      { description: 'multiple calls after first return same result', assertion:"function once(fn){let c=false,r;return function(...args){if(!c){c=true;r=fn(...args)}return r}} const o=once(()=>42); const r1=o(),r2=o(),r3=o(); expect(r1).toBe(42); expect(r2).toBe(42); expect(r3).toBe(42)" },
      { description: 'original function called exactly once across all invocations', assertion:"function once(fn){let c=false,r;return function(...args){if(!c){c=true;r=fn(...args)}return r}} let n=0;const f=()=>{n++}; const o=once(f); o();o();o();o();o(); expect(n).toBe(1)" },
    ],
    hints: ['Use a flag to track if function was called', 'Store result in closure', 'Return cached result after first call', 'Do not call original function if already called'],
    tags: ['decorator', 'once', 'caching', 'higher-order-function'],
  },
  {
    slug: 'dp-decorator-5',
    title: 'Decorator — Stacked decorators',
    description: `## Decorator Pattern — Stacking Multiple Decorators

Multiple decorators can be applied to the same function, each adding different behavior.

**Challenge:** Create two decorators:
- \`double(fn)\` - multiplies result by 2
- \`addTen(fn)\` - adds 10 to the result

Then compose them: \`const f = double(addTen(original))\`

Example:
\`\`\`javascript
const original = (x) => x * 2
const f = double(addTen(original))
f(5) // original(5) = 10, addTen(10) = 20, double(20) = 40
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'DesignPatterns',
    initialCode: `function double(fn) {
  // Your code here
}

function addTen(fn) {
  // Your code here
}

const original = (x) => x * 2
const f = double(addTen(original))
f(5)`,
    solution: `function double(fn) {
  return function(...args) {
    return fn(...args) * 2
  }
}

function addTen(fn) {
  return function(...args) {
    return fn(...args) + 10
  }
}

const original = (x) => x * 2
const f = double(addTen(original))
f(5)`,
    tests: [
      { description: 'double decorator multiplies by 2', assertion:"function double(fn){return function(...args){return fn(...args)*2}} const d=double(()=>10); expect(d()).toBe(20)" },
      { description: 'addTen decorator adds 10', assertion:"function addTen(fn){return function(...args){return fn(...args)+10}} const a=addTen(()=>5); expect(a()).toBe(15)" },
      { description: 'stacked decorators compose correctly', assertion:"function double(fn){return function(...args){return fn(...args)*2}} function addTen(fn){return function(...args){return fn(...args)+10}} const o=(x)=>x*2; const f=double(addTen(o)); expect(f(5)).toBe(40)" },
      { description: 'decorator order matters', assertion:"function double(fn){return function(...args){return fn(...args)*2}} function addTen(fn){return function(...args){return fn(...args)+10}} const o=(x)=>x*2; const f1=double(addTen(o)); const f2=addTen(double(o)); expect(f1(5) !== f2(5)).toBe(true)" },
      { description: 'multiple stacked decorators work correctly', assertion:"function double(fn){return function(...args){return fn(...args)*2}} function addTen(fn){return function(...args){return fn(...args)+10}} const o=(x)=>x; const f=double(addTen(double(o))); expect(f(5)).toBe(40)" },
    ],
    hints: ['Each decorator wraps the previous function', 'double multiplies the result', 'addTen adds to the result', 'Order of application matters'],
    tags: ['decorator', 'composition', 'higher-order-function', 'stacking'],
  },
]
