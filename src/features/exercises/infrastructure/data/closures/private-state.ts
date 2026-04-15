import type { Exercise } from '@/shared/types/exercises'

export const closuresPrivateStateExercises: Exercise[] = [
  {
    slug: 'closures-private-1',
    title: 'Closures — Bank account encapsulation',
    description: `## Encapsulate Bank Account State

Use closures to create a private data structure that can't be accessed directly from outside.

**Challenge:** Create a \`makeBankAccount(initial)\` function that returns an object with three methods:
- \`deposit(n)\` - adds \`n\` to balance and returns new balance
- \`withdraw(n)\` - subtracts \`n\` from balance and returns new balance
- \`balance()\` - returns current balance

The balance state should only be accessible through these methods, not directly.

Example:
\`\`\`javascript
const account = makeBankAccount(100)
account.deposit(50)    // 150
account.withdraw(30)   // 120
account.balance()      // 120
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeBankAccount(initial) {
  // Your code here
}

const account = makeBankAccount(100)
account.deposit(50)`,
    solution: `function makeBankAccount(initial) {
  let balance = initial
  return {
    deposit(n) {
      balance += n
      return balance
    },
    withdraw(n) {
      balance -= n
      return balance
    },
    balance() {
      return balance
    }
  }
}

const account = makeBankAccount(100)
account.deposit(50)`,
    tests: [
      { description: 'deposit adds to balance', assertion: "function makeBankAccount(initial){let b=initial;return{deposit(n){b+=n;return b},withdraw(n){b-=n;return b},balance(){return b}}} const a=makeBankAccount(100); expect(a.deposit(50)).toBe(150)" },
      { description: 'withdraw subtracts from balance', assertion: "function makeBankAccount(initial){let b=initial;return{deposit(n){b+=n;return b},withdraw(n){b-=n;return b},balance(){return b}}} const a=makeBankAccount(100); expect(a.withdraw(30)).toBe(70)" },
      { description: 'balance returns current amount', assertion: "function makeBankAccount(initial){let b=initial;return{deposit(n){b+=n;return b},withdraw(n){b-=n;return b},balance(){return b}}} const a=makeBankAccount(100); a.deposit(50);a.withdraw(30); expect(a.balance()).toBe(120)" },
      { description: 'multiple accounts are independent', assertion: "function makeBankAccount(initial){let b=initial;return{deposit(n){b+=n;return b},withdraw(n){b-=n;return b},balance(){return b}}} const a=makeBankAccount(100),c=makeBankAccount(200); a.deposit(50); expect(c.balance()).toBe(200)" },
      { description: 'balance cannot be modified directly', assertion: "function makeBankAccount(initial){let b=initial;return{deposit(n){b+=n;return b},withdraw(n){b-=n;return b},balance(){return b}}} const a=makeBankAccount(100); a.balance=999; expect(a.balance()).toBe(100)" },
    ],
    hints: ['Store balance in a closure variable', 'Return an object with methods that modify the balance', 'Ensure the balance variable cannot be accessed directly from outside'],
    tags: ['closures', 'encapsulation', 'private-state', 'bank-account'],
  },
  {
    slug: 'closures-private-2',
    title: 'Closures — Boolean toggle',
    description: `## Toggle State Between Two Values

Create a simple toggle function that alternates between true and false on each call.

**Challenge:** Create a \`makeToggle()\` function that returns a function. Each call to the returned function alternates between returning \`true\` and \`false\`, starting with \`true\`.

Example:
\`\`\`javascript
const toggle = makeToggle()
toggle() // true
toggle() // false
toggle() // true
toggle() // false
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `function makeToggle() {
  // Your code here
}

const toggle = makeToggle()
toggle()`,
    solution: `function makeToggle() {
  let state = true
  return () => (state = !state)
}

const toggle = makeToggle()
toggle()`,
    tests: [
      { description: 'first call returns true', assertion: "function makeToggle(){let s=true;return()=>(s=!s)} const t=makeToggle(); expect(t()).toBe(true)" },
      { description: 'second call returns false', assertion: "function makeToggle(){let s=true;return()=>(s=!s)} const t=makeToggle(); t(); expect(t()).toBe(false)" },
      { description: 'third call returns true again', assertion: "function makeToggle(){let s=true;return()=>(s=!s)} const t=makeToggle(); t();t(); expect(t()).toBe(true)" },
      { description: 'alternates continuously', assertion: "function makeToggle(){let s=true;return()=>(s=!s)} const t=makeToggle(); const results=[]; for(let i=0;i<4;i++)results.push(t()); expect(results).toEqual([true,false,true,false])" },
      { description: 'independent toggles maintain separate state', assertion: "function makeToggle(){let s=true;return()=>(s=!s)} const t1=makeToggle(),t2=makeToggle(); t1(); expect(t2()).toBe(true)" },
    ],
    hints: ['Toggle boolean using the NOT operator (!)', 'Store state in a closure variable'],
    tags: ['closures', 'toggle', 'boolean-state', 'private-state'],
  },
  {
    slug: 'closures-private-3',
    title: 'Closures — Execute function once',
    description: `## Function That Executes Only Once

Create a wrapper that ensures a function is called at most once, ignoring subsequent calls.

**Challenge:** Create a \`once(fn)\` function that returns a wrapper. The first time the wrapper is called, it executes \`fn\` and caches the result. All subsequent calls return the cached result without executing \`fn\` again.

Example:
\`\`\`javascript
let n = 0
const increment = () => ++n
const onceIncrement = once(increment)
onceIncrement() // 1, n becomes 1
onceIncrement() // 1, n stays 1
onceIncrement() // 1, n stays 1
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function once(fn) {
  // Your code here
}

let n = 0
const increment = () => ++n
const onceIncrement = once(increment)
onceIncrement()`,
    solution: `function once(fn) {
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

let n = 0
const increment = () => ++n
const onceIncrement = once(increment)
onceIncrement()`,
    tests: [
      { description: 'fn called only once', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n=0; const o=once(()=>++n); o();o(); expect(n).toBe(1)" },
      { description: 'returns first result on repeat calls', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} const o=once((x)=>x*2); expect(o(5)).toBe(10); expect(o(99)).toBe(10)" },
      { description: 'caches result even with different arguments', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let calls=0; const o=once((a,b)=>{calls++; return a+b}); o(1,2);o(5,6); expect(calls).toBe(1); expect(o()).toBe(3)" },
      { description: 'works with no-return functions', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let calls=0; const o=once(()=>calls++); o();o();o(); expect(calls).toBe(1)" },
      { description: 'different once wrappers are independent', assertion: "function once(fn){let c=false,r;return(...a)=>{if(!c){c=true;r=fn(...a)}return r}} let n1=0,n2=0; const o1=once(()=>++n1), o2=once(()=>++n2); o1();o1();o2();o2(); expect(n1).toBe(1); expect(n2).toBe(1)" },
    ],
    hints: ['Use a flag to track whether the function has been called', 'Store the result in a closure variable', 'Return the cached result on subsequent calls'],
    tags: ['closures', 'once', 'call-once', 'caching'],
  },
  {
    slug: 'closures-private-4',
    title: 'Closures — Partial application',
    description: `## Pre-fill Function Arguments

Create a function that takes a function and some arguments, then returns a new function where those arguments are pre-filled.

**Challenge:** Create a \`partial(fn, ...presetArgs)\` function that returns a new function. When the new function is called with additional arguments, it calls the original function with the pre-filled arguments followed by the new arguments.

Example:
\`\`\`javascript
const add = (a, b, c) => a + b + c
const addFive = partial(add, 5)
addFive(3, 2)     // add(5, 3, 2) = 10
const addTenFive = partial(add, 10, 5)
addTenFive(2)     // add(10, 5, 2) = 17
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `function partial(fn, ...presetArgs) {
  // Your code here
}

const add = (a, b, c) => a + b + c
const addFive = partial(add, 5)
addFive(3, 2)`,
    solution: `function partial(fn, ...presetArgs) {
  return (...newArgs) => fn(...presetArgs, ...newArgs)
}

const add = (a, b, c) => a + b + c
const addFive = partial(add, 5)
addFive(3, 2)`,
    tests: [
      { description: 'partial with one preset arg', assertion: "function partial(fn,...p){return(...n)=>fn(...p,...n)} const add=(a,b,c)=>a+b+c; const f=partial(add,5); expect(f(3,2)).toBe(10)" },
      { description: 'partial with two preset args', assertion: "function partial(fn,...p){return(...n)=>fn(...p,...n)} const add=(a,b,c)=>a+b+c; const f=partial(add,10,5); expect(f(2)).toBe(17)" },
      { description: 'works with multiply function', assertion: "function partial(fn,...p){return(...n)=>fn(...p,...n)} const mult=(a,b)=>a*b; const f=partial(mult,6); expect(f(7)).toBe(42)" },
      { description: 'preserves original function', assertion: "function partial(fn,...p){return(...n)=>fn(...p,...n)} const add=(a,b)=>a+b; const orig=add; const f=partial(add,5); expect(orig(2,3)).toBe(5); expect(f(3)).toBe(8)" },
      { description: 'can chain partial applications', assertion: "function partial(fn,...p){return(...n)=>fn(...p,...n)} const add=(a,b,c)=>a+b+c; const f1=partial(add,10); const f2=partial(f1,5); expect(f2(3)).toBe(18)" },
    ],
    hints: ['Use rest parameters to capture preset and new arguments', 'Return a function that combines both argument sets'],
    tags: ['closures', 'partial-application', 'currying', 'function-composition'],
  },
  {
    slug: 'closures-private-5',
    title: 'Closures — Rate limiter',
    description: `## Limit Function Call Frequency

Create a wrapper that restricts how many times a function can be called in total.

**Challenge:** Create a \`makeLimiter(maxCalls)\` function that takes a maximum number of allowed calls. It returns a function that accepts another function to be wrapped. The returned wrapper function will execute the original function up to \`maxCalls\` times. After \`maxCalls\` executions, it returns \`undefined\` without calling the function.

Example:
\`\`\`javascript
const limiter = makeLimiter(2)
const limited = limiter(() => 'called')
limited()  // 'called' (call 1)
limited()  // 'called' (call 2)
limited()  // undefined (exceeded limit)
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Closures',
    initialCode: `function makeLimiter(maxCalls) {
  return (fn) => {
    // Your code here
  }
}

const limiter = makeLimiter(2)
const limited = limiter(() => 'called')
limited()`,
    solution: `function makeLimiter(maxCalls) {
  return (fn) => {
    let callCount = 0
    return (...args) => {
      if (callCount < maxCalls) {
        callCount++
        return fn(...args)
      }
      return undefined
    }
  }
}

const limiter = makeLimiter(2)
const limited = limiter(() => 'called')
limited()`,
    tests: [
      { description: 'executes function up to maxCalls', assertion: "function makeLimiter(m){return(fn)=>{let c=0;return(...a)=>{if(c<m){c++;return fn(...a)}}}} const l=makeLimiter(2); const f=l(()=>'ok'); expect(f()).toBe('ok'); expect(f()).toBe('ok')" },
      { description: 'returns undefined after limit exceeded', assertion: "function makeLimiter(m){return(fn)=>{let c=0;return(...a)=>{if(c<m){c++;return fn(...a)}}}} const l=makeLimiter(1); const f=l(()=>'ok'); f(); expect(f()).toBeUndefined()" },
      { description: 'limiter with maxCalls of 3', assertion: "function makeLimiter(m){return(fn)=>{let c=0;return(...a)=>{if(c<m){c++;return fn(...a)}}}} let n=0; const l=makeLimiter(3); const f=l(()=>++n); f();f();f();f(); expect(n).toBe(3)" },
      { description: 'independent limiters have separate counts', assertion: "function makeLimiter(m){return(fn)=>{let c=0;return(...a)=>{if(c<m){c++;return fn(...a)}}}} const l1=makeLimiter(1),l2=makeLimiter(2); const f1=l1(()=>1),f2=l2(()=>2); f1();f1(); f2();f2();f2(); expect(f1()).toBeUndefined(); expect(f2()).toBeUndefined()" },
      { description: 'preserves function return values', assertion: "function makeLimiter(m){return(fn)=>{let c=0;return(...a)=>{if(c<m){c++;return fn(...a)}}}} const l=makeLimiter(2); const f=l((x)=>x*2); expect(f(5)).toBe(10); expect(f(3)).toBe(6); expect(f(7)).toBeUndefined()" },
    ],
    hints: ['Create a counter in closure to track calls', 'Return a wrapper that checks the counter before executing', 'Return undefined when limit is exceeded'],
    tags: ['closures', 'rate-limiting', 'call-limiting', 'throttle'],
  },
]
