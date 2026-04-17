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
- 🌐 Internationalization (i18n): English and Spanish, URL-based locale routing (`/en`, `/es`)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| State | Redux Toolkit |
| Language | TypeScript |
| i18n | next-intl v4 |
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
├── app/
│   └── [locale]/                 # Locale-aware routing (en / es)
│       ├── layout.tsx            # Root layout with NextIntlClientProvider
│       ├── page.tsx
│       └── exercises/
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
├── i18n/
│   ├── routing.ts                # Locale config (en, es)
│   ├── navigation.ts             # Locale-aware Link, useRouter, etc.
│   ├── request.ts                # Server-side message loader
│   └── exerciseTranslations.ts   # Merges exercise with locale content
├── shared/
│   └── types/
│       └── exercises.ts          # Exercise interface definition
└── store/                        # Redux Toolkit store
messages/
├── en.json                       # UI strings in English
├── es.json                       # UI strings in Spanish
└── exercises/
    └── es.json                   # Spanish translations for all 1,986 exercises
scripts/
└── translate-exercises.mjs       # AI translation script (Anthropic Claude)
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

## Internationalization (i18n)

The app supports **English** (`/en`) and **Spanish** (`/es`) via URL-based locale routing powered by [next-intl](https://next-intl.dev/).

- The language switcher (🌐) in the navbar switches locale without a full reload.
- All 1,986 exercise titles, descriptions, hints, and test descriptions are translated.
- Default locale is English; `/` redirects to `/en`.

### Adding a new language

1. Add the locale to `src/i18n/routing.ts`:
   ```ts
   locales: ['en', 'es', 'fr']  // add 'fr' for French
   ```
2. Create `messages/fr.json` (copy `messages/en.json` and translate UI strings).
3. Run the translation script:
   ```bash
   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate-exercises.mjs --locale fr --batch 20
   ```
4. The script is idempotent — re-run safely to fill in missing translations.

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and next steps.

---

## License

MIT
