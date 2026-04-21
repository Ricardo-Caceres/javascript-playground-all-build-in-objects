import type { Exercise } from '@/shared/types/exercises'

export const asyncErrorHandlingExercises: Exercise[] = [
  {
    slug: 'async-error-1',
    title: '.catch returns a Promise',
    description: `## Promise.catch()\n\n\`.catch()\` attaches a rejection handler and returns a new Promise.\n\n**Challenge:** Verify that .catch() returns a Promise instance.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.reject('error').catch(() => {}) instanceof Promise\n`,
    solution: `Promise.reject('error').catch(() => {}) instanceof Promise`,
    tests: [
      { description: '.catch returns a Promise', assertion: "expect(Promise.reject('e').catch(()=>{}) instanceof Promise).toBeTruthy()" },
      { description: '.catch on resolved Promise still returns Promise', assertion: 'expect(Promise.resolve(1).catch(()=>{}) instanceof Promise).toBeTruthy()' },
      { description: 'multiple .catch calls', assertion: "expect(Promise.reject('e').catch(()=>{}).catch(()=>{}) instanceof Promise).toBeTruthy()" },
      { description: 'typeof is object', assertion: "expect(typeof Promise.reject('e').catch(()=>{})).toBe('object')" },
      { description: 'instanceof Object', assertion: "expect(Promise.reject('e').catch(()=>{}) instanceof Object).toBeTruthy()" },
    ],
    hints: ['.catch() returns a new Promise.', 'It handles rejection and transforms it.', 'The returned Promise can be resolved or rejected depending on the handler.'],
    tags: ['promise', 'catch', 'error-handling'],
    usageExample: {
      code: `const p = Promise.reject('oops').catch(err => err + ' handled');
// resolves to 'oops handled'`,
      explanation: {
        en: ".catch() handles a rejection and returns a new resolved Promise.",
        es: ".catch() maneja un rechazo y devuelve una nueva Promise resuelta.",
      },
    },
  },
  {
    slug: 'async-error-2',
    title: '.finally returns a Promise',
    description: `## Promise.finally()\n\n\`.finally()\` runs a callback after the Promise settles (resolve or reject) and returns a Promise.\n\n**Challenge:** Verify that .finally() returns a Promise instance.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.resolve(1).finally(() => {}) instanceof Promise\n`,
    solution: `Promise.resolve(1).finally(() => {}) instanceof Promise`,
    tests: [
      { description: '.finally returns a Promise', assertion: 'expect(Promise.resolve(1).finally(()=>{}) instanceof Promise).toBeTruthy()' },
      { description: '.finally on rejected Promise', assertion: "expect(Promise.reject('e').finally(()=>{}).catch(()=>{}) instanceof Promise).toBeTruthy()" },
      { description: '.finally chaining', assertion: 'expect(Promise.resolve(1).finally(()=>{}).finally(()=>{}) instanceof Promise).toBeTruthy()' },
      { description: 'typeof is object', assertion: "expect(typeof Promise.resolve(1).finally(()=>{})).toBe('object')" },
      { description: 'instanceof Object', assertion: 'expect(Promise.resolve(1).finally(()=>{}) instanceof Object).toBeTruthy()' },
    ],
    hints: ['.finally() returns a new Promise.', 'The callback runs regardless of resolution or rejection.', 'The callback does not receive the value or reason.'],
    tags: ['promise', 'finally', 'cleanup'],
    usageExample: {
      code: `const p = Promise.resolve(1).finally(() => console.log('done'));
// logs 'done', then resolves to 1`,
      explanation: {
        en: ".finally() runs cleanup regardless of resolve or reject, passing the value through.",
        es: ".finally() ejecuta limpieza sin importar resolve o reject, pasando el valor hacia adelante.",
      },
    },
  },
  {
    slug: 'async-error-3',
    title: 'Promise.reject creates rejected Promise',
    description: `## Rejected Promises\n\n\`Promise.reject(reason)\` creates a Promise that is immediately rejected with the given reason.\n\n**Challenge:** Verify that Promise.reject() returns a Promise (attach .catch() to prevent unhandled rejection).`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'AsyncPatterns',
    initialCode: `const p = Promise.reject(new Error('test'))\np.catch(() => {})\np instanceof Promise\n`,
    solution: `const p = Promise.reject(new Error('test')); p.catch(() => {}); p instanceof Promise`,
    tests: [
      { description: 'Promise.reject creates rejected Promise', assertion: "const p=Promise.reject(new Error('x')); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)" },
      { description: 'reject with string reason', assertion: "const p=Promise.reject('error'); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)" },
      { description: 'reject with object', assertion: "const p=Promise.reject({code: 'ERR'}); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)" },
      { description: 'typeof is object', assertion: "const p=Promise.reject('e'); p.catch(()=>{}); expect(typeof p).toBe('object')" },
      { description: 'instanceof Object', assertion: "const p=Promise.reject('e'); p.catch(()=>{}); expect(p instanceof Object).toBe(true)" },
    ],
    hints: ['Promise.reject() always returns a Promise.', 'The Promise is rejected with the provided reason.', 'Attach .catch() to prevent unhandled rejection warnings.'],
    tags: ['promise', 'reject', 'error'],
    usageExample: {
      code: `const p = Promise.reject(new Error('failed'));
p instanceof Promise; // true`,
      explanation: {
        en: "Promise.reject() creates an already-rejected Promise.",
        es: "Promise.reject() crea una Promise ya rechazada.",
      },
    },
  },
  {
    slug: 'async-error-4',
    title: 'async function returns Promise even with throw',
    description: `## Async Error Handling\n\nAn async function that throws still returns a Promise (a rejected one).\n\n**Challenge:** Verify that an async function throwing still returns a Promise.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'AsyncPatterns',
    initialCode: `async function f() { throw new Error('oops') }\nf() instanceof Promise\n`,
    solution: `async function f() { throw new Error('oops') } f() instanceof Promise`,
    tests: [
      { description: 'async fn returns Promise even with throw', assertion: "async function f(){try{throw new Error('e')}catch(e){return e.message}} expect(f() instanceof Promise).toBe(true)" },
      { description: 'async throw always returns Promise', assertion: 'async function f(){throw new Error("x")} const p=f(); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)' },
      { description: 'async with caught error', assertion: "async function f(){try{throw 'e'}catch(e){return 'caught'}} expect(f() instanceof Promise).toBe(true)" },
      { description: 'async rethrow returns Promise', assertion: "async function f(){try{throw new Error('e')}catch(e){throw e}} const p=f(); p.catch(()=>{}); expect(p instanceof Promise).toBe(true)" },
      { description: 'typeof result is object', assertion: "async function f(){throw new Error('e')} expect(typeof f()).toBe('object')" },
    ],
    hints: ['Async functions always return Promises.', 'Throwing in an async function creates a rejected Promise.', 'Error handling with try/catch still returns a Promise.'],
    tags: ['async', 'error', 'promise', 'throw'],
    usageExample: {
      code: `async function risky() { throw new Error('oops'); }
risky() instanceof Promise; // true`,
      explanation: {
        en: "An async function that throws still returns a Promise — a rejected one.",
        es: "Una función async que lanza un error sigue devolviendo una Promise, pero rechazada.",
      },
    },
  },
  {
    slug: 'async-error-5',
    title: '.catch after .then is a Promise',
    description: `## Promise Chain\n\nChaining .then() and .catch() creates a chain of Promises.\n\n**Challenge:** Verify that .catch() after .then() returns a Promise.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.resolve(1)\n  .then(x => x)\n  .catch(() => {}) instanceof Promise\n`,
    solution: `Promise.resolve(1).then(x => x).catch(() => {}) instanceof Promise`,
    tests: [
      { description: '.catch after .then is a Promise', assertion: 'expect(Promise.resolve(1).then(x=>x).catch(()=>{}) instanceof Promise).toBeTruthy()' },
      { description: 'long chain returns Promise', assertion: 'expect(Promise.resolve(1).then(x=>x*2).then(x=>x+1).catch(()=>{}).finally(()=>{}) instanceof Promise).toBeTruthy()' },
      { description: 'chain with error handler', assertion: 'expect(Promise.resolve(1).then(x=>{throw new Error("e")}).catch(e=>e.message) instanceof Promise).toBeTruthy()' },
      { description: 'multiple catches in chain', assertion: "expect(Promise.reject('e').catch(()=>{}).catch(()=>{}) instanceof Promise).toBeTruthy()" },
      { description: 'typeof final result is object', assertion: "expect(typeof Promise.resolve(1).then(x=>x).catch(()=>{})).toBe('object')" },
    ],
    hints: ['Each .then(), .catch(), and .finally() returns a new Promise.', 'Promises can be chained indefinitely.', 'Error handlers in the chain can recover from errors.'],
    tags: ['promise', 'chain', 'catch', 'error-handling'],
    usageExample: {
      code: `const safe = Promise.reject('err')
  .then(v => v)
  .catch(e => 'caught: ' + e);
// resolves to 'caught: err'`,
      explanation: {
        en: ".catch chained after .then still catches rejections from earlier in the chain.",
        es: ".catch encadenado después de .then aún captura rechazos anteriores en la cadena.",
      },
    },
  },
]
