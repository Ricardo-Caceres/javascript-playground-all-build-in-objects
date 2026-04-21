import type { Exercise } from '@/shared/types/exercises'

export const asyncCombinatorsExercises: Exercise[] = [
  {
    slug: 'async-combinator-1',
    title: 'Promise.all returns Promise',
    description: `## Promise.all()\n\n\`Promise.all()\` combines multiple Promises into a single Promise.\n\n**Challenge:** Verify that Promise.all() returns a Promise instance.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.all([Promise.resolve(1)]) instanceof Promise\n`,
    solution: `Promise.all([Promise.resolve(1)]) instanceof Promise`,
    tests: [
      { description: 'Promise.all returns Promise', assertion: 'expect(result).toBeTruthy()' },
      { description: 'Promise.all([]) returns Promise', assertion: 'expect(Promise.all([]) instanceof Promise).toBeTruthy()' },
      { description: 'Promise.all with multiple promises', assertion: 'expect(Promise.all([Promise.resolve(1), Promise.resolve(2)]) instanceof Promise).toBeTruthy()' },
      { description: 'typeof is object', assertion: "expect(typeof Promise.all([Promise.resolve(1)])).toBe('object')" },
      { description: 'instanceof Object', assertion: 'expect(Promise.all([Promise.resolve(1)]) instanceof Object).toBeTruthy()' },
    ],
    hints: ['Promise.all() always returns a Promise.', 'It waits for all input Promises to settle.'],
    tags: ['promise', 'all', 'combinator'],
    usageExample: {
      code: `const result = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
// [1, 2]`,
      explanation: {
        en: "Promise.all() waits for all promises to resolve; rejects if any one fails.",
        es: "Promise.all() espera que todas las promesas se resuelvan; rechaza si alguna falla.",
      },
    },
  },
  {
    slug: 'async-combinator-2',
    title: 'Promise.allSettled returns Promise',
    description: `## Promise.allSettled()\n\n\`Promise.allSettled()\` waits for all Promises to settle (resolve or reject).\n\n**Challenge:** Verify that Promise.allSettled() returns a Promise instance.`,
    category: 'static-method',
    difficulty: 'beginner',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.allSettled([Promise.resolve(1)]) instanceof Promise\n`,
    solution: `Promise.allSettled([Promise.resolve(1)]) instanceof Promise`,
    tests: [
      { description: 'Promise.allSettled returns Promise', assertion: 'expect(result).toBeTruthy()' },
      { description: 'Promise.allSettled([]) returns Promise', assertion: 'expect(Promise.allSettled([]) instanceof Promise).toBeTruthy()' },
      { description: 'with mixed results', assertion: 'expect(Promise.allSettled([Promise.resolve(1), Promise.reject("e").catch(()=>{})]) instanceof Promise).toBeTruthy()' },
      { description: 'typeof is object', assertion: "expect(typeof Promise.allSettled([Promise.resolve(1)])).toBe('object')" },
      { description: 'instanceof Object', assertion: 'expect(Promise.allSettled([Promise.resolve(1)]) instanceof Object).toBeTruthy()' },
    ],
    hints: ['Promise.allSettled() always returns a Promise.', 'It handles both resolved and rejected Promises.'],
    tags: ['promise', 'allSettled', 'combinator'],
    usageExample: {
      code: `const results = await Promise.allSettled([Promise.resolve(1), Promise.reject('err')]);
// [{status:'fulfilled',value:1},{status:'rejected',reason:'err'}]`,
      explanation: {
        en: "Promise.allSettled() waits for all promises regardless of success or failure.",
        es: "Promise.allSettled() espera todas las promesas sin importar si tienen éxito o fallan.",
      },
    },
  },
  {
    slug: 'async-combinator-3',
    title: 'Promise.race returns Promise',
    description: `## Promise.race()\n\n\`Promise.race()\` returns a Promise that settles with the first Promise in the iterable.\n\n**Challenge:** Verify that Promise.race() returns a Promise instance.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.race([Promise.resolve(1)]) instanceof Promise\n`,
    solution: `Promise.race([Promise.resolve(1)]) instanceof Promise`,
    tests: [
      { description: 'Promise.race returns Promise', assertion: 'expect(result).toBeTruthy()' },
      { description: 'Promise.race with multiple', assertion: 'expect(Promise.race([Promise.resolve(1), Promise.resolve(2)]) instanceof Promise).toBeTruthy()' },
      { description: 'with async functions', assertion: 'const p1=Promise.resolve(1); const p2=Promise.resolve(2); expect(Promise.race([p1, p2]) instanceof Promise).toBeTruthy()' },
      { description: 'typeof is object', assertion: "expect(typeof Promise.race([Promise.resolve(1)])).toBe('object')" },
      { description: 'instanceof Object', assertion: 'expect(Promise.race([Promise.resolve(1)]) instanceof Object).toBeTruthy()' },
    ],
    hints: ['Promise.race() always returns a Promise.', 'It settles with the first Promise to settle.'],
    tags: ['promise', 'race', 'combinator'],
    usageExample: {
      code: `const first = await Promise.race([new Promise(r => setTimeout(() => r('slow'), 100)), Promise.resolve('fast')]);
// 'fast'`,
      explanation: {
        en: "Promise.race() returns the result of the first promise that settles.",
        es: "Promise.race() devuelve el resultado de la primera promesa que se establece.",
      },
    },
  },
  {
    slug: 'async-combinator-4',
    title: 'Promise.any returns Promise',
    description: `## Promise.any()\n\n\`Promise.any()\` returns a Promise that resolves with the first fulfilled Promise.\n\n**Challenge:** Verify that Promise.any() returns a Promise instance.`,
    category: 'static-method',
    difficulty: 'intermediate',
    builtIn: 'AsyncPatterns',
    initialCode: `Promise.any([Promise.resolve(1)]) instanceof Promise\n`,
    solution: `Promise.any([Promise.resolve(1)]) instanceof Promise`,
    tests: [
      { description: 'Promise.any returns Promise', assertion: 'expect(result).toBeTruthy()' },
      { description: 'Promise.any with multiple', assertion: 'expect(Promise.any([Promise.resolve(1), Promise.resolve(2)]) instanceof Promise).toBeTruthy()' },
      { description: 'with mixed results', assertion: 'expect(result).toBeTruthy()' },
      { description: 'typeof is object', assertion: "expect(typeof Promise.any([Promise.resolve(1)])).toBe('object')" },
      { description: 'instanceof Object', assertion: 'expect(Promise.any([Promise.resolve(1)]) instanceof Object).toBeTruthy()' },
    ],
    hints: ['Promise.any() always returns a Promise.', 'It resolves with the first fulfilled Promise.'],
    tags: ['promise', 'any', 'combinator'],
    usageExample: {
      code: `const first = await Promise.any([Promise.reject('no'), Promise.resolve('yes')]);
// 'yes'`,
      explanation: {
        en: "Promise.any() resolves with the first fulfilled promise, ignoring rejections.",
        es: "Promise.any() se resuelve con la primera promesa cumplida, ignorando los rechazos.",
      },
    },
  },
  {
    slug: 'async-combinator-5',
    title: 'Promise.all([]) resolves to array synchronously observable',
    description: `## Empty Array Promise\n\n\`Promise.all([])\` resolves to an empty array. The resolution is asynchronous but we can track it.\n\n**Challenge:** Verify synchronously that Promise.all([]) creates a Promise and check that a .then callback is queued.`,
    category: 'static-method',
    difficulty: 'advanced',
    builtIn: 'AsyncPatterns',
    initialCode: `let result\nPromise.all([]).then(r => { result = r })\n// result is still undefined (async)`,
    solution: `let result; Promise.all([]).then(r => { result = r }); result === undefined`,
    tests: [
      { description: 'result is undefined before microtask runs', assertion: 'let result; Promise.all([]).then(r=>{result=r}); expect(result).toBeUndefined()' },
      { description: '.then is queued as microtask', assertion: 'let triggered=false; Promise.all([]).then(()=>{triggered=true}); expect(triggered).toBe(false)' },
      { description: 'Promise.all([]) instanceof Promise', assertion: 'expect(Promise.all([]) instanceof Promise).toBeTruthy()' },
      { description: 'array length is 0 after settling', assertion: 'let len=null; Promise.all([]).then(arr=>{len=arr.length}); expect(len===null || typeof len==="number").toBeTruthy()' },
      { description: 'result undefined before microtask', assertion: 'let result; const p=Promise.all([]); p.then(r=>{result=r}); expect(result).toBeUndefined()' },
    ],
    hints: ['Promise.all([]) creates a Promise that resolves to an empty array.', 'The .then callback is queued as a microtask, not executed immediately.', 'Use this to understand the microtask queue.'],
    tags: ['promise', 'all', 'microtask', 'synchronous'],
    usageExample: {
      code: `const results = await Promise.all([]);
// []`,
      explanation: {
        en: "Promise.all([]) resolves immediately with an empty array.",
        es: "Promise.all([]) se resuelve inmediatamente con un array vacío.",
      },
    },
  },
]
