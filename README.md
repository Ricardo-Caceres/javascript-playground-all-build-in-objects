# JavaScript Playground

A Codewars/Codility-style JavaScript practice platform with **1,986 exercises** covering every Standard Built-in Object, advanced JS patterns, and computer science fundamentals — all runnable in the browser.

---

## Features

- 1,986 exercises across 22 topic areas
- In-browser code execution with instant test feedback
- 5 tests per exercise with clear descriptions
- Difficulty levels: beginner, intermediate, advanced
- Categories: constructor, static methods, instance methods, properties, inheritance
- Filter and browse by Built-in Object or topic

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| State | Redux Toolkit |
| Language | TypeScript |
| Package manager | pnpm |

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

```bash
pnpm build    # production build
pnpm lint     # lint
```

---

## Exercise Topics

### Standard Built-in Objects (Phases 1-18)

| Category | Topics |
|----------|--------|
| Fundamentals | Array, String, Object, Number, Boolean |
| Math and Date | Math, Date, BigInt |
| Collections | Map, Set, WeakMap, WeakSet, WeakRef |
| Typed Data | ArrayBuffer, TypedArray, DataView, SharedArrayBuffer, Atomics |
| Text | RegExp, JSON, TextEncoder, TextDecoder |
| Async | Promise |
| Meta | Symbol, Proxy, Reflect, FinalizationRegistry |
| Errors | Error, TypeError, RangeError, ReferenceError, SyntaxError, AggregateError |
| Web APIs | URL, URLSearchParams, Blob, File, FormData, Event, EventTarget, AbortController, AbortSignal, Crypto, Performance, Console, StructuredClone |
| Globals | GlobalThis, GlobalFunctions, Intl |
| Iterators | Iterator, Generator |
| OOP | Prototypes, Closures, Function |

### Advanced JavaScript Patterns (Phases 19-22)

| Phase | Topic | Exercises |
|-------|-------|-----------|
| 19 | Async Patterns: Promises, combinators, async/await, error handling | 20 |
| 20 | Functional Programming: Pure functions, currying, composition, higher-order, memoization | 25 |
| 21 | Design Patterns: Singleton, Observer, Factory, Decorator, Strategy | 25 |
| 22 | Algorithms: Sorting, searching, recursion, string algorithms, data structures | 25 |

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
├── features/
│   └── exercises/
│       ├── infrastructure/
│       │   ├── data/             # All 1,986 exercises (TypeScript)
│       │   │   ├── array/        # Array methods
│       │   │   ├── string/       # String methods
│       │   │   ├── algorithms/   # Sorting, searching, etc.
│       │   │   └── index.ts      # Central registry
│       │   └── repositories/
│       └── ...
├── shared/
│   └── types/
│       └── exercises.ts          # Exercise interface definition
└── store/                        # Redux Toolkit store
```

### Exercise Interface

```ts
interface Exercise {
  slug: string;           // e.g. array-map-1
  title: string;
  description: string;
  category: string;       // constructor | static-property | static-method | instance-method | instance-property | inheritance
  difficulty: string;     // beginner | intermediate | advanced
  builtIn: string;        // e.g. Array, Algorithms
  initialCode: string;    // starter stub shown to user
  solution: string;       // reference solution
  tests: TestCase[];      // exactly 5 per exercise
  hints?: string[];
  tags: string[];
}
```

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and next steps.

---

## License

MIT
