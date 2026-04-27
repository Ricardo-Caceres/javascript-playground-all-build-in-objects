# JavaScript Learning Path — Design Spec

**Date:** 2026-04-27  
**Status:** Approved

---

## Problem

The app has 60+ exercise topics but no way to know which order to study them. The existing per-topic Roadmap mode (sidebar) helps within a single topic, but there's no global learning path.

## Goal

Add a **Learning Path page** that shows all JavaScript topics in the recommended order from [roadmap.sh/javascript](https://roadmap.sh/javascript), with real progress tracking per topic and visual progress bars.

The existing per-topic sidebar Roadmap mode is unchanged — this is a new, separate feature.

---

## Route

`/[locale]/learning-path`  
(i18n-aware via `next-intl`, follows the same locale routing as the rest of the app)

---

## Page Structure

### Header area
- Title: "JavaScript Learning Path"
- Subtitle: short description of the page purpose
- **Global progress bar**: "X / Y exercises completed across all topics"

### Sections
Topics are grouped into sections that mirror roadmap.sh/javascript:

| Section ID | Title (EN) | Topics (in order) |
|---|---|---|
| `fundamentals` | JavaScript Fundamentals | variables, boolean, number, string, bigint, symbol, operators, control-flow, type-coercion |
| `functions-scope` | Functions & Scope | function, closures, strict-mode |
| `data-structures` | Data Structures | array, object, json, map, set, weakmap, weakset |
| `oop` | OOP & Prototypes | prototypes, designpatterns |
| `async` | Async Programming | promise, asyncpatterns, abortcontroller, abortsignal |
| `advanced` | Advanced JavaScript | iterator, generator, proxy, reflect, modules |
| `stdlib` | Standard Library | regexp, math, date, error, intl |
| `bonus` | Bonus | typescript, functionalprogramming, algorithms |

### Topic card
Each topic is rendered as a card with:
- Topic name (from `topicMeta`)
- Short description (from `topicMeta`)
- Progress bar: `{completed} / {total} completed • {percentage}%`
- Status badge: `Not started` | `In progress` | `Completed`
  - Not started: 0 completed
  - In progress: 1+ completed but not all
  - Completed: all exercises completed
- Clickable → navigates to `/[locale]/exercises/{topic}`

Topics that don't yet have exercises (if any) appear as locked/coming-soon cards with no progress bar.

---

## New Exercise Topics to Create

Six new topics need exercise files AND `topicMeta` entries:

### 1. `variables`
Concepts: `var` vs `let` vs `const`, hoisting, temporal dead zone (TDZ), block scope, function scope.
- 5 beginner + 5 intermediate = **10 exercises**

### 2. `operators`
Concepts: arithmetic (`+`, `-`, `*`, `/`, `%`, `**`), comparison (`==`, `===`, `<`, `>`), logical (`&&`, `||`, `!`, `??`), optional chaining (`?.`), ternary (`? :`), spread/rest (`...`).
- 5 beginner + 5 intermediate + 3 advanced = **13 exercises**

### 3. `control-flow`
Concepts: `if`/`else`, `switch`, `for`, `while`, `do...while`, `for...of`, `for...in`, `break`, `continue`.
- 5 beginner + 5 intermediate + 3 advanced = **13 exercises**

### 4. `type-coercion`
Concepts: implicit coercion, explicit conversion (`Number()`, `String()`, `Boolean()`), `==` vs `===`, truthy/falsy values.
- 5 beginner + 5 intermediate = **10 exercises**

### 5. `strict-mode`
Concepts: `'use strict'`, restrictions (undeclared variables, duplicate params, `with` statement), differences from sloppy mode, class/module auto-strict.
- 3 beginner + 3 intermediate = **6 exercises**

### 6. `modules`
Concepts: named exports, default exports, re-exports, `import *`, dynamic `import()`. Exercises are function-based (no actual `import`/`export` syntax in sandbox — exercises test understanding of module patterns through equivalent function patterns and describe the correct syntax in test descriptions).
- 3 beginner + 3 intermediate + 3 advanced = **9 exercises**

**Total new exercises: ~61**

---

## Architecture

### New files

```
src/
  features/
    learning-path/
      infrastructure/
        data/
          learningPathConfig.ts        # section definitions + topic order
      presentation/
        components/
          LearningPathView.tsx         # main page component (Client Component)
          TopicProgressCard.tsx        # individual topic card
          LearningPathSection.tsx      # section header + grid of cards
        hooks/
          useLearningPathProgress.ts   # reads Redux progress, computes per-topic stats

  app/[locale]/
    learning-path/
      page.tsx                         # Next.js Server Component, renders LearningPathView

  features/exercises/infrastructure/data/
    variables/                         # new topic
      index.ts                         # 10 exercise files rolled up
      let-const-1.ts
      ... (etc.)
    operators/
    control-flow/
    type-coercion/
    strict-mode/
    modules/
```

### Modified files

- `src/features/exercises/infrastructure/data/index.ts` — import new topic files
- `src/features/exercises/infrastructure/data/topicMeta.ts` — add 6 new topic descriptions
- Navigation header component — add "Learning Path" link
- Home page — add prominent Learning Path card/section

### `learningPathConfig.ts` shape

```ts
export interface LearningPathSection {
  id: string
  title: Record<'en' | 'es', string>
  topics: string[]   // values match exercise.builtIn
}

export const learningPath: LearningPathSection[] = [ ... ]
```

### `useLearningPathProgress` hook

For each topic key:
1. `getAllExercisesByObject(topic)` → get all exercises
2. Cross-reference with `useSelector(state => state.progress.exercises)` → count completed slugs
3. Return `{ total, completed, percentage, status: 'not-started' | 'in-progress' | 'completed' }`

### Navigation additions

- **Header**: Add "Learning Path" link next to existing navigation items (uses `Link` from `@/i18n/navigation`)
- **Home page**: Add a prominent card/section near the top with a CTA to the Learning Path

---

## i18n

- Section titles are bilingual (en/es) in `learningPathConfig.ts`
- Topic card text (name, description) uses existing `topicMeta` translations
- Status badge labels go into the existing messages JSON (`en.json`, `es.json`)
- New exercise content (titles, descriptions) must have both `en` and `es` variants if exercises use i18n fields; otherwise plain English matches existing conventions

---

## Out of Scope

- Reordering topics (the roadmap.sh order is fixed)
- Hiding/showing sections
- Per-exercise checkboxes on the Learning Path page (only topic-level progress)
- The per-topic sidebar Roadmap mode — unchanged
