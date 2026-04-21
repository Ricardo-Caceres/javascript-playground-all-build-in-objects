import type { Exercise } from '@/shared/types/exercises'

export const closuresScopeExercises: Exercise[] = [
  {
    slug: 'closures-scope-1',
    title: 'Closures — Scope in loops (let)',
    description: `## Block Scope in Loops

Understanding how \`let\` creates a new binding in each loop iteration.

**Challenge:** Create an array of functions using a \`for\` loop with \`let i\`. Each function should capture the value of \`i\` at the time it was created. When you call the functions, they should return the correct captured values, not the final value of \`i\`.

Example:
\`\`\`javascript
const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
fns[0]()  // 0
fns[1]()  // 1
fns[2]()  // 2
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
fns[0]()`,
    solution: `const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
fns[0]()`,
    tests: [
      { description: 'let in loop closure captures correct i', assertion: "const fns=[]; for(let i=0;i<3;i++) fns.push(()=>i); expect(fns[2]()).toBe(2)" },
      { description: 'first closure captures 0', assertion: "const fns=[]; for(let i=0;i<3;i++) fns.push(()=>i); expect(fns[0]()).toBe(0)" },
      { description: 'middle closure captures 1', assertion: "const fns=[]; for(let i=0;i<3;i++) fns.push(()=>i); expect(fns[1]()).toBe(1)" },
      { description: 'all closures capture correct values', assertion: "const fns=[]; for(let i=0;i<5;i++) fns.push(()=>i); const vals=fns.map(f=>f()); expect(vals).toEqual([0,1,2,3,4])" },
      { description: 'each iteration has separate binding', assertion: "const fns=[]; for(let i=0;i<3;i++) fns.push(()=>i); const r1=fns[0](),r2=fns[1](),r3=fns[2](); expect(r1!==r2 && r2!==r3).toBe(true)" },
    ],
    hints: ['Each iteration of a let-based loop creates a new binding', 'Closure captures the binding, not just the value', 'This is different from var which would have shared scope'],
    tags: ['closures', 'scope', 'loop-scope', 'let', 'block-scope'],
    usageExample: {
      code: `const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
fns[0]()  // → 0
fns[1]()  // → 1
fns[2]()  // → 2`,
      explanation: {
        en: 'Using let in a for-loop creates a new block-scoped binding per iteration, so each closure captures its own independent copy of i.',
        es: 'Usar let en un bucle for crea un nuevo enlace de ámbito de bloque por iteración, por lo que cada closure captura su propia copia independiente de i.',
      },
    },
  },
  {
    slug: 'closures-scope-2',
    title: 'Closures — IIFE (Immediately Invoked Function Expression)',
    description: `## Immediately Invoked Function Expression

An IIFE is a function that runs immediately after being defined, creating its own scope.

**Challenge:** Write an IIFE that returns a value immediately. The function should execute and return 42 as soon as it's defined.

Example:
\`\`\`javascript
const result = (function() {
  return 42
})()
result  // 42
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `const result = (function() {
  return 42
})()
result`,
    solution: `const result = (function() {
  return 42
})()
result`,
    tests: [
      { description: 'IIFE returns value immediately', assertion: "const result=(function(){return 42})(); expect(result).toBe(42)" },
      { description: 'IIFE creates isolated scope', assertion: "const result=(function(){const x=10; return x})(); expect(result).toBe(10)" },
      { description: 'IIFE can access arguments', assertion: "const result=(function(a,b){return a+b})(5,3); expect(result).toBe(8)" },
      { description: 'IIFE prevents variable pollution', assertion: "(function(){const privateVar=42})(); expect(typeof privateVar).toBe('undefined')" },
      { description: 'can call IIFE with different args', assertion: "const f=(function(x){return x*2}); const r1=(function(n){return n*2})(5); const r2=(function(n){return n*2})(10); expect(r1+r2).toBe(30)" },
    ],
    hints: ['IIFE is a function definition wrapped in parentheses followed by ()', 'The function executes immediately and returns a value', 'Useful for creating private scopes'],
    tags: ['closures', 'scope', 'IIFE', 'immediately-invoked', 'pattern'],
    usageExample: {
      code: `const result = (function() {
  const secret = 42
  return secret
})()
result  // → 42
// secret is not accessible outside the IIFE`,
      explanation: {
        en: 'An IIFE runs immediately and creates its own scope, so inner variables are private and the computed result is exposed only through the return value.',
        es: 'Un IIFE se ejecuta de inmediato y crea su propio ámbito, por lo que las variables internas son privadas y el resultado calculado se expone solo a través del valor de retorno.',
      },
    },
  },
  {
    slug: 'closures-scope-3',
    title: 'Closures — Closure over const',
    description: `## Capturing const Variables

A closure can capture variables declared with \`const\`, creating a lasting reference.

**Challenge:** Declare a \`const\` variable and create a function that returns it. Call the function and verify it returns the correct value.

Example:
\`\`\`javascript
const x = 10
const getX = () => x
getX()  // 10
\`\`\``,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Closures',
    initialCode: `const x = 10
const getX = () => x
getX()`,
    solution: `const x = 10
const getX = () => x
getX()`,
    tests: [
      { description: 'closure over const', assertion: "const x=10; const f=()=>x; expect(f()).toBe(10)" },
      { description: 'closure preserves const value', assertion: "const PI=3.14; const getPI=()=>PI; expect(getPI()).toBe(3.14)" },
      { description: 'multiple closures over same const', assertion: "const val=42; const f1=()=>val; const f2=()=>val; expect(f1()).toBe(f2())" },
      { description: 'closure over const string', assertion: "const msg='hello'; const getMsg=()=>msg; expect(getMsg()).toBe('hello')" },
      { description: 'closure over const object', assertion: "const obj={x:5}; const getObj=()=>obj; expect(getObj().x).toBe(5)" },
    ],
    hints: ['const creates a read-only binding', 'Closures can still access const variables', 'The closure captures the binding, not the value'],
    tags: ['closures', 'scope', 'const', 'variable-capture'],
    usageExample: {
      code: `const PI = 3.14159
const circleArea = r => PI * r * r
circleArea(5)   // → 78.53975
circleArea(10)  // → 314.159`,
      explanation: {
        en: 'Arrow functions close over const variables in the surrounding scope, making constants immediately available without passing them as arguments.',
        es: 'Las funciones flecha cierran sobre variables const en el ámbito circundante, haciendo que las constantes estén disponibles sin pasarlas como argumentos.',
      },
    },
  },
  {
    slug: 'closures-scope-4',
    title: 'Closures — Nested closures',
    description: `## Multiple Levels of Nesting

A function can close over variables from multiple outer scopes, creating nested closures.

**Challenge:** Create a function that returns a function, which in turn returns another function. Each level should capture and use variables from its outer scope.

Example:
\`\`\`javascript
const outer = (a) => {
  return (b) => {
    return (c) => a + b + c
  }
}
outer(1)(2)(3)  // 6
\`\`\``,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'Closures',
    initialCode: `const outer = (a) => {
  return (b) => {
    return (c) => a + b + c
  }
}
outer(1)(2)(3)`,
    solution: `const outer = (a) => {
  return (b) => {
    return (c) => a + b + c
  }
}
outer(1)(2)(3)`,
    tests: [
      { description: 'nested closures work correctly', assertion: "const o=(a)=>(b)=>(c)=>a+b+c; expect(o(1)(2)(3)).toBe(6)" },
      { description: 'each level captures its argument', assertion: "const o=(a)=>(b)=>(c)=>a*b*c; expect(o(2)(3)(4)).toBe(24)" },
      { description: 'inner closure accesses outer variables', assertion: "const o=(x)=>{const y=10;return(z)=>x+y+z}; expect(o(5)(3)).toBe(18)" },
      { description: 'three-level nesting', assertion: "const o=(a)=>(b)=>(c)=>`\${a}-\${b}-\${c}`; expect(o('x')('y')('z')).toBe('x-y-z')" },
      { description: 'partial application with nested closures', assertion: "const o=(a)=>(b)=>(c)=>a+b-c; const f1=o(10); const f2=f1(5); expect(f2(2)).toBe(13)" },
    ],
    hints: ['Each function returns another function', 'Inner functions have access to all outer scopes', 'This pattern enables partial application'],
    tags: ['closures', 'scope', 'nested-closures', 'currying'],
    usageExample: {
      code: `const outer = (a) => (b) => (c) => a + b + c
const step1 = outer(10)
const step2 = step1(5)
step2(3)  // → 18`,
      explanation: {
        en: 'Each nesting level creates a new closure that accumulates captured variables from all outer scopes, enabling composable step-by-step function application.',
        es: 'Cada nivel de anidamiento crea un nuevo closure que acumula variables capturadas de todos los ámbitos externos, permitiendo la aplicación de funciones paso a paso de forma componible.',
      },
    },
  },
  {
    slug: 'closures-scope-5',
    title: 'Closures — Closure preserves reference (advanced)',
    description: `## Mutable Object References in Closures

A closure captures a reference to an object, so mutations to that object are visible through the closure.

**Challenge:** Create an object, then create a closure that references it. Modify the object after creating the closure and verify that the closure sees the updated values.

Example:
\`\`\`javascript
const obj = { count: 0 }
const incrementCount = () => ++obj.count
incrementCount()    // 1
obj.count = 10
incrementCount()    // 11
\`\`\``,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'Closures',
    initialCode: `const obj = { count: 0 }
const incrementCount = () => ++obj.count
incrementCount()`,
    solution: `const obj = { count: 0 }
const incrementCount = () => ++obj.count
incrementCount()`,
    tests: [
      { description: 'closure captures object reference', assertion: "const obj={count:0}; const inc=()=>++obj.count; expect(inc()).toBe(1)" },
      { description: 'mutations visible through closure', assertion: "const obj={count:0}; const get=()=>obj.count; expect(get()).toBe(0); obj.count=5; expect(get()).toBe(5)" },
      { description: 'closure sees new properties', assertion: "const obj={}; const get=()=>obj.x; obj.x=42; expect(get()).toBe(42)" },
      { description: 'multiple closures share object state', assertion: "const obj={x:1}; const inc=()=>++obj.x; const get=()=>obj.x; inc(); expect(get()).toBe(2)" },
      { description: 'nested mutations are visible', assertion: "const obj={nested:{val:0}}; const modify=()=>++obj.nested.val; expect(modify()).toBe(1); expect(modify()).toBe(2)" },
    ],
    hints: ['Closures capture references, not copies', 'Objects are mutable, so changes after closure creation are visible', 'This is different from primitive values which are immutable'],
    tags: ['closures', 'scope', 'object-reference', 'mutation', 'reference-semantics'],
    usageExample: {
      code: `const obj = { count: 0 }
const inc = () => ++obj.count
inc()       // → 1
obj.count = 10
inc()       // → 11`,
      explanation: {
        en: 'Closures capture object references rather than copies, so any mutation to the object is immediately reflected when the closure is later invoked.',
        es: 'Los closures capturan referencias a objetos en lugar de copias, por lo que cualquier mutación al objeto se refleja inmediatamente cuando el closure se invoca posteriormente.',
      },
    },
  },
]
