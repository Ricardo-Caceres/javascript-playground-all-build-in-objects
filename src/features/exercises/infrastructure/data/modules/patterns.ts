import type { Exercise } from '@/shared/types/exercises'

export const modulesPatternExercises: Exercise[] = [
  {
    slug: 'modules-module-pattern',
    title: 'The Module Pattern (IIFE)',
    description:
      'Before ES modules, developers used IIFEs (Immediately Invoked Function Expressions) to create private scope. The module pattern returns a public API while keeping implementation private: `const counter = (() => { let count = 0; return { increment() { count++; }, get() { return count; } }; })();`',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `const counterModule = (() => {
  // Private state
  let count = 0;
  // Return public API with increment() and getCount()
  return {
    // your code here
  };
})();`,
    solution: `const counterModule = (() => {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; },
  };
})();`,
    hints: [
      'Use an IIFE (Immediately Invoked Function Expression)',
      'Define count as a private variable inside the IIFE',
      'Return an object with increment() and getCount() methods',
      'increment() should increase count by 1',
      'getCount() should return the current count',
    ],
    tests: [
      {
        description: 'Counter starts at 0',
        assertion: 'expect(counterModule.getCount()).toBe(0)',
      },
      {
        description: 'Increment works',
        assertion: 'counterModule.increment(); expect(counterModule.getCount()).toBe(1)',
      },
    ],
    tags: ['modules', 'patterns', 'iife', 'module-pattern'],
  },
  {
    slug: 'modules-singleton-pattern',
    title: 'Singleton Module',
    description:
      'A singleton module ensures only one instance exists. ES modules are singletons by nature — re-importing the same module returns the cached instance. Simulate with a closure that tracks whether an instance was created.',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `const createSingleton = (() => {
  let instance: { id: number } | null = null;
  let nextId = 1;
  return function getInstance() {
    // Return existing instance if it exists, otherwise create one with id: nextId++
  };
})();`,
    solution: `const createSingleton = (() => {
  let instance: { id: number } | null = null;
  let nextId = 1;
  return function getInstance() {
    if (!instance) {
      instance = { id: nextId++ };
    }
    return instance;
  };
})();`,
    hints: [
      'Use a closure to maintain instance and nextId state',
      'Check if instance already exists',
      'Only create a new instance if it does not exist',
      'Assign the id from nextId and increment nextId',
      'Return the same instance on subsequent calls',
    ],
    tests: [
      {
        description: 'First call creates instance',
        assertion: 'expect(createSingleton().id).toBe(1)',
      },
      {
        description: 'Second call returns same instance',
        assertion: 'expect(createSingleton()).toBe(createSingleton())',
      },
    ],
    tags: ['modules', 'patterns', 'singleton'],
  },
  {
    slug: 'modules-circular-dependency',
    title: 'Avoiding Circular Dependencies',
    description:
      'Circular dependencies (A imports B, B imports A) can cause issues — one module gets an incomplete export. The fix is to extract shared code to a third module, or restructure so dependencies flow one way. Simulate by using a dependency injection pattern instead of direct references.',
    difficulty: 'intermediate',
    builtIn: 'Modules',
    category: 'static-method',
    initialCode: `function createLogger() {
  return {
    log: (msg: string) => \`[LOG] \${msg}\`,
  };
}
function createService(logger: { log: (msg: string) => string }) {
  // Use the injected logger — return an object with process(data) that returns logger.log(data)
}`,
    solution: `function createLogger() {
  return {
    log: (msg: string) => \`[LOG] \${msg}\`,
  };
}
function createService(logger: { log: (msg: string) => string }) {
  return {
    process: (data: string) => logger.log(data),
  };
}`,
    hints: [
      'Accept logger as a parameter to createService (dependency injection)',
      'Return an object with a process method',
      'The process method should call logger.log(data)',
      'This pattern avoids circular dependencies by passing dependencies explicitly',
    ],
    tests: [
      {
        description: 'Service uses injected logger',
        assertion:
          "const logger = createLogger(); const service = createService(logger); expect(service.process('hello')).toBe('[LOG] hello')",
      },
    ],
    tags: ['modules', 'patterns', 'dependency-injection', 'circular-dependencies'],
  },
]
