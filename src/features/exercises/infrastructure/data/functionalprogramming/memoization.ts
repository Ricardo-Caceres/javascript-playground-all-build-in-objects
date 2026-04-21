import type { Exercise } from '@/shared/types/exercises'

export const fpMemoizationExercises: Exercise[] = [
  {
    slug: 'fp-memo-1',
    title: 'Basic memoization — cache results',
    description: `## Memoization Fundamentals

Memoization caches function results to avoid recomputation. This is useful for expensive operations.

**Challenge:** Implement a \`memoize\` function that caches results for single-argument functions. Repeated calls with the same argument should return cached results.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function memoize(fn) {
  // cache results in an object
  // return wrapped function
}`,
    solution: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}`,
    tests: [
      { description: 'memoized function returns correct value', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const double = memoize((x) => x * 2); expect(double(5)).toBe(10)' },
      { description: 'memoized function with different inputs', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const add1 = memoize((x) => x + 1); expect(add1(5)).toBe(6); expect(add1(10)).toBe(11)' },
      { description: 'memoized function with zero', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const double = memoize((x) => x * 2); expect(double(0)).toBe(0)' },
      { description: 'memoized function with negative', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const double = memoize((x) => x * 2); expect(double(-5)).toBe(-10)' },
      { description: 'memoized function with string key', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const upper = memoize((x) => x.toUpperCase()); expect(upper("hello")).toBe("HELLO")' },
    ],
    hints: ['Create a cache object inside memoize', 'Check if value exists in cache', 'If not, compute and store result'],
    tags: ['functional', 'memoization', 'cache', 'performance'],
    usageExample: {
      code: `function memoize(fn) {
  const cache = {};
  return function(x) {
    if (x in cache) return cache[x];
    return (cache[x] = fn(x));
  };
}
const memoSqrt = memoize(Math.sqrt);
memoSqrt(25); // 5 (computed)
memoSqrt(25); // 5 (cached)`,
      explanation: {
        en: "Memoization caches the result of a function call to avoid redundant computation.",
        es: "La memoización almacena en caché el resultado de una llamada a función para evitar cómputo redundante.",
      },
    },
  },
  {
    slug: 'fp-memo-2',
    title: 'Memoization — verify cached values',
    description: `## Verifying Memoization Works

Ensure that memoization returns correct values consistently.

**Challenge:** Test a memoized function to verify it returns the same cached value across multiple calls with identical arguments.`,
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'FunctionalProgramming',
    initialCode: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

const memoizedSquare = memoize((x) => x * x)`,
    solution: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

const memoizedSquare = memoize((x) => x * x)`,
    tests: [
      { description: 'memoized square(5) is 25', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const ms = memoize((x) => x * x); expect(ms(5)).toBe(25)' },
      { description: 'repeated calls return same value', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const ms = memoize((x) => x * x); const r1 = ms(7); const r2 = ms(7); expect(r1).toBe(r2)' },
      { description: 'different inputs cache independently', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const ms = memoize((x) => x * x); expect(ms(3)).toBe(9); expect(ms(4)).toBe(16); expect(ms(3)).toBe(9)' },
      { description: 'cache persists across calls', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const ms = memoize((x) => x + 10); expect(ms(5)).toBe(15); expect(ms(5)).toBe(15)' },
      { description: 'memoization returns identical reference for same input', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } const ms = memoize((x) => ({val: x})); const o1 = ms(5); const o2 = ms(5); expect(o1 === o2).toBeTruthy()' },
    ],
    hints: ['Cache stores results by input', 'Same input always returns cached value', 'Different inputs create separate cache entries'],
    tags: ['functional', 'memoization', 'cache', 'consistency'],
    usageExample: {
      code: `const memoFib = memoize(n => n <= 1 ? n : memoFib(n-1) + memoFib(n-2));
memoFib(10); // 55 — cached sub-results speed this up`,
      explanation: {
        en: "Memoization dramatically speeds up recursive functions like Fibonacci.",
        es: "La memoización acelera drásticamente las funciones recursivas como Fibonacci.",
      },
    },
  },
  {
    slug: 'fp-memo-3',
    title: 'Memoization — function called once per unique key',
    description: `## Verifying Function Calls Are Reduced

Memoization should call the original function only once per unique input. Subsequent calls with the same input use the cache.

**Challenge:** Verify that a memoized function calls the underlying function only once for each unique argument.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let callCount = 0
const tracked = memoize((x) => {
  callCount++
  return x * 2
})`,
    solution: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let callCount = 0
const tracked = memoize((x) => {
  callCount++
  return x * 2
})`,
    tests: [
      { description: 'function called once for first invocation', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize(() => { n++; return 42 }); m(); expect(n).toBe(1)' },
      { description: 'function not called again for cached result', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x }); m(5); m(5); expect(n).toBe(1)' },
      { description: 'different arguments call function multiple times', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x }); m(1); m(2); expect(n).toBe(2)' },
      { description: 'repeated same argument reuses cache', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(3); m(3); m(3); expect(n).toBe(1)' },
      { description: 'three unique args called three times', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x }); m(1); m(2); m(3); expect(n).toBe(3)' },
    ],
    hints: ['Track function calls with a counter', 'Memoized calls should not increment counter', 'Only first call with unique arg increments counter'],
    tags: ['functional', 'memoization', 'optimization', 'call-tracking'],
    usageExample: {
      code: `let computeCount = 0;
const memoDouble = memoize(x => { computeCount++; return x * 2; });
memoDouble(5); memoDouble(5);
computeCount; // 1 — computed only once`,
      explanation: {
        en: "The underlying function is called only once per unique input — subsequent calls hit the cache.",
        es: "La función subyacente se llama solo una vez por entrada única — las llamadas posteriores usan la caché.",
      },
    },
  },
  {
    slug: 'fp-memo-4',
    title: 'Cache miss still computes',
    description: `## Cache Misses Trigger Computation

When an argument is not in the cache, the function must compute the result.

**Challenge:** Verify that calling a memoized function with new arguments computes results for cache misses.`,
    category: 'instance-method',
    difficulty: 'intermediate',
    builtIn: 'FunctionalProgramming',
    initialCode: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let computations = 0
const expensiveOp = memoize((x) => {
  computations++
  return x * x
})`,
    solution: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let computations = 0
const expensiveOp = memoize((x) => {
  computations++
  return x * x
})`,
    tests: [
      { description: 'cache miss triggers computation', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(5); expect(n).toBe(1)' },
      { description: 'new argument triggers new computation', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(5); m(10); expect(n).toBe(2)' },
      { description: 'cache hit does not trigger computation', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(5); m(5); expect(n).toBe(1)' },
      { description: 'multiple cache misses compute each', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(1); m(2); m(3); m(1); m(2); expect(n).toBe(3)' },
      { description: 'all cache misses are computed', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x + 100 }); m(5); m(5); m(10); m(10); expect(n).toBe(2)' },
    ],
    hints: ['Cache miss occurs when x not in cache', 'Cache hit occurs when x already in cache', 'Only cache misses trigger function execution'],
    tags: ['functional', 'memoization', 'cache', 'optimization'],
    usageExample: {
      code: `const memo = memoize(fn);
memo(42); // miss — computed and cached
memo(99); // miss — computed and cached
memo(42); // hit — returned from cache`,
      explanation: {
        en: "A cache miss means the input is new; the function runs and stores the result.",
        es: "Un cache miss significa que la entrada es nueva; la función se ejecuta y almacena el resultado.",
      },
    },
  },
  {
    slug: 'fp-memo-5',
    title: 'Memoization with multiple distinct keys',
    description: `## Memoizing Complex Data

Memoization can store results for many different inputs independently.

**Challenge:** Create and test a memoized function with multiple distinct arguments to verify each is cached separately.`,
    category: 'instance-method',
    difficulty: 'advanced',
    builtIn: 'FunctionalProgramming',
    initialCode: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let computeCount = 0
const memoizedFn = memoize((n) => {
  computeCount++
  return n * n
})

// Test multiple keys
memoizedFn(1)
memoizedFn(2)
memoizedFn(3)
memoizedFn(1)
memoizedFn(2)`,
    solution: `function memoize(fn) {
  const cache = {}
  return function(x) {
    return x in cache ? cache[x] : (cache[x] = fn(x))
  }
}

let computeCount = 0
const memoizedFn = memoize((n) => {
  computeCount++
  return n * n
})

// Test multiple keys
memoizedFn(1)
memoizedFn(2)
memoizedFn(3)
memoizedFn(1)
memoizedFn(2)`,
    tests: [
      { description: 'multiple keys cache independently', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(1); m(2); m(3); expect(n).toBe(3)' },
      { description: 'each key computed only once', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 2 }); m(1); m(2); m(3); m(1); m(2); m(3); expect(n).toBe(3)' },
      { description: 'many keys handled correctly', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x }); for(let i = 0; i < 10; i++) m(i); expect(n).toBe(10)' },
      { description: 'repeated access to same keys uses cache', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x * 3 }); m(5); m(5); m(5); m(5); expect(n).toBe(1)' },
      { description: 'cache grows with unique keys', assertion: 'function memoize(fn) { const cache = {}; return function(x) { return x in cache ? cache[x] : (cache[x] = fn(x)) } } let n = 0; const m = memoize((x) => { n++; return x }); m(1); m(1); m(2); m(2); m(3); m(3); m(1); expect(n).toBe(3)' },
    ],
    hints: ['Cache stores separate entry for each unique input', 'Multiple keys do not interfere', 'Each cache hit avoids recomputation'],
    tags: ['functional', 'memoization', 'cache', 'multi-key', 'advanced'],
    usageExample: {
      code: `const memo = memoize(fn);
memo('a'); memo('b'); memo('c');
memo('a'); memo('b'); memo('c');
// fn called exactly 3 times total`,
      explanation: {
        en: "Each distinct key is computed once — no matter how many times you call with it.",
        es: "Cada clave distinta se computa una vez, sin importar cuántas veces se llame con ella.",
      },
    },
  },
]
