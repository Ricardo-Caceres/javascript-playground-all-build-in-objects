import type { Exercise } from '@/shared/types/exercises'

export const generatorThrowExercises: Exercise[] = [
  {
    slug: 'generator-throw-error',
    title: 'Generator: throw() error',
    description: 'Check that throw() throws an error.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'throw',
    initialCode: `function* g() { yield 1; }\nconst it = g();\nit.next();\nconst throws = () => (it as any).throw(new Error('x'));`,
    solution: `function* g() { yield 1; }\nconst it = g();\nit.next();\nconst throws = () => (it as any).throw(new Error('x'));`,
    tests: [
      { description: 'throw() throws', assertion: 'expect((() => { try { it.throw(new Error("x")); } catch (e) { return true; } return false; })()).toBe(true)' },
      { description: 'typeof throw is function', assertion: 'expect(typeof it.throw).toBe("function")' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
  },
  {
    slug: 'generator-throw-catch',
    title: 'Generator: throw() catch',
    description: 'Check that throw() can be caught inside generator.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'throw',
    initialCode: `function* g() { try { yield 1; } catch(e) { yield e.message; } }\nconst it = g();\nit.next();\nconst value = (it as any).throw(new Error('caught')).value;`,
    solution: `function* g() { try { yield 1; } catch(e) { yield e.message; } }\nconst it = g();\nit.next();\nconst value = (it as any).throw(new Error('caught')).value;`,
    tests: [
      { description: 'throw() caught and yields message', assertion: 'const i2 = g(); i2.next(); expect(i2.throw(new Error("caught")).value).toBe("caught")' },
      { description: 'typeof throw is function', assertion: 'expect(typeof it.throw).toBe("function")' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
  },
  {
    slug: 'generator-throw-typeof',
    title: 'Generator: typeof throw is function',
    description: 'Check that typeof throw is function.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'throw',
    initialCode: `typeof (function* g() {})().throw`,
    solution: `typeof (function* g() {})().throw`,
    tests: [
      { description: 'typeof throw is function', assertion: 'expect(result).toBe("function")' },
      { description: 'typeof throw is not object', assertion: 'expect(result !== "object").toBe(true)' },
      { description: 'typeof throw is not undefined', assertion: 'expect(result !== "undefined").toBe(true)' },
      { description: 'typeof throw is not null', assertion: 'expect(result !== "null").toBe(true)' },
      { description: 'typeof throw is not number', assertion: 'expect(result !== "number").toBe(true)' }
    ],
    tags: [],
  },
  {
    slug: 'generator-throw-string',
    title: 'Generator: throw() string',
    description: 'Check that throw() with string throws.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'throw',
    initialCode: `function* g() { yield 1; }\nconst it = g();\nconst throws = () => (it as any).throw('err');`,
    solution: `function* g() { yield 1; }\nconst it = g();\nconst throws = () => (it as any).throw('err');`,
    tests: [
      { description: 'throw() with string throws', assertion: 'expect((() => { try { it.throw("err"); } catch (e) { return true; } return false; })()).toBe(true)' },
      { description: 'typeof throw is function', assertion: 'expect(typeof it.throw).toBe("function")' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
  },
  {
    slug: 'generator-throw-catch-yield',
    title: 'Generator: throw() catch yield',
    description: 'Check that throw() can be caught and yield a value.',
    category: 'instance-method',
    difficulty: 'beginner',
    builtIn: 'Generator',
    method: 'throw',
    initialCode: `function* g() { try { yield 1; } catch { yield 'error caught'; } }\nconst it = g();\nit.next();\nconst value = (it as any).throw(new Error()).value;`,
    solution: `function* g() { try { yield 1; } catch { yield 'error caught'; } }\nconst it = g();\nit.next();\nconst value = (it as any).throw(new Error()).value;`,
    tests: [
      { description: 'throw() caught and yields "error caught"', assertion: 'const i2 = g(); i2.next(); expect(i2.throw(new Error()).value).toBe("error caught")' },
      { description: 'typeof throw is function', assertion: 'expect(typeof it.throw).toBe("function")' },
      { description: 'typeof it is object', assertion: 'expect(typeof it).toBe("object")' },
      { description: 'typeof it.next is function', assertion: 'expect(typeof it.next).toBe("function")' },
      { description: 'typeof it.return is function', assertion: 'expect(typeof it.return).toBe("function")' }
    ],
    tags: [],
  }
]
