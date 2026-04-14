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
      { description: 'throw() throws', assertion: '(() => { try { (it as any).throw(new Error("x")); } catch (e) { return true; } return false; })()' },
      { description: 'typeof throw is function', assertion: 'typeof it.throw === "function"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
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
      { description: 'throw() caught and yields message', assertion: '(it as any).next(); (it as any).throw(new Error("caught")).value === "caught"' },
      { description: 'typeof throw is function', assertion: 'typeof it.throw === "function"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
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
      { description: 'typeof throw is function', assertion: 'typeof (function* g() {})().throw === "function"' },
      { description: 'typeof throw is not object', assertion: 'typeof (function* g() {})().throw !== "object"' },
      { description: 'typeof throw is not undefined', assertion: 'typeof (function* g() {})().throw !== "undefined"' },
      { description: 'typeof throw is not null', assertion: 'typeof (function* g() {})().throw !== "null"' },
      { description: 'typeof throw is not number', assertion: 'typeof (function* g() {})().throw !== "number"' }
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
      { description: 'throw() with string throws', assertion: '(() => { try { (it as any).throw("err"); } catch (e) { return true; } return false; })()' },
      { description: 'typeof throw is function', assertion: 'typeof it.throw === "function"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
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
      { description: 'throw() caught and yields "error caught"', assertion: '(it as any).next(); (it as any).throw(new Error()).value === "error caught"' },
      { description: 'typeof throw is function', assertion: 'typeof it.throw === "function"' },
      { description: 'typeof it is object', assertion: 'typeof it === "object"' },
      { description: 'typeof it.next is function', assertion: 'typeof it.next === "function"' },
      { description: 'typeof it.return is function', assertion: 'typeof it.return === "function"' }
    ],
    tags: [],
  }
]
