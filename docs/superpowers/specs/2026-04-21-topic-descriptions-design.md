# Topic Descriptions & Exercise Usage Examples

**Date:** 2026-04-21  
**Status:** Approved

## Problem

The platform is practice-only. Users land on a topic (Array, Promise, Map…) and see a list of exercises with no explanation of *what* the topic is, *why* it matters, or *how* it is used. Individual exercises jump straight into a challenge with no warm-up example. First-time learners are left to figure out the basics before they can even attempt the challenge.

## Goal

Turn the platform into a proper learning resource by adding:
1. **Topic-level description** — what the built-in is and why it matters.
2. **Per-exercise usage example** — a minimal, self-contained code snippet + brief explanation of what this specific method/feature does, shown before the challenge.

Both are bilingual (Spanish + English), matching the two locales the app already supports.

---

## Data Model Changes

### New types (`src/shared/types/exercises.ts`)

```ts
export interface TopicMeta {
  description: {
    en: string
    es: string
  }
}

export interface UsageExample {
  code: string             // plain JS/TS snippet — no translation needed
  explanation: {
    en: string
    es: string
  }
}
```

### Updated `Exercise` interface

Add one optional field:

```ts
export interface Exercise {
  // ... all existing fields unchanged ...
  usageExample?: UsageExample
}
```

---

## Data File Structure

### Topic metadata — `meta.ts` per topic folder

Each topic folder (e.g. `data/array/`) gets a new file `meta.ts`:

```ts
// src/features/exercises/infrastructure/data/array/meta.ts
import type { TopicMeta } from '@/shared/types/exercises'

export const topicMeta: TopicMeta = {
  description: {
    en: `Array is JavaScript's most-used ordered collection...`,
    es: `Array es la colección ordenada más usada en JavaScript...`,
  },
}
```

Topics to cover (~50 folders): `abortcontroller`, `abortsignal`, `aggregateerror`, `algorithms`, `array`, `arraybuffer`, `asyncpatterns`, `atomics`, `bigint`, `blob`, `boolean`, `closures`, `console`, `crypto`, `dataview`, `date`, `designpatterns`, `error`, `event`, `eventtarget`, `file`, `finalizationregistry`, `formdata`, `function`, `functionalprogramming`, `generator`, `globalfunctions`, `globalthis`, `intl`, `iterator`, `json`, `map`, `math`, `number`, `object`, `performance`, `promise`, `prototypes`, `proxy`, `rangeerror`, `referenceerror`, `reflect`, `regexp`, `set`, `sharedarraybuffer`, `string`, `structuredclone`, `symbol`, `syntaxerror`, `textdecoder`, `textencoder`, `typedarray`, `typeerror`, `typescript`, `url`, `urlsearchparams`, `weakmap`, `weakref`, `weakset`.

### Exercise usage examples

Each existing exercise file adds `usageExample` to each `Exercise` object:

```ts
{
  slug: 'array-foreach-sum',
  // ... existing fields ...
  usageExample: {
    code: `// forEach executes a callback for each element — returns undefined
const fruits = ['apple', 'banana', 'cherry']
fruits.forEach((fruit, index) => {
  console.log(index, fruit)
})
// 0 'apple'  1 'banana'  2 'cherry'`,
    explanation: {
      en: 'Use forEach when you need side effects (logging, DOM updates, accumulation) and do not need a return value.',
      es: 'Usa forEach cuando necesitas efectos secundarios (logs, actualizaciones de DOM, acumulación) y no necesitas un valor de retorno.',
    },
  },
}
```

Content will be generated for all exercises across all topics.

---

## Repository Changes

### `exerciseRepository.ts`

Add a static map of all topic metas and a new getter:

```ts
import { topicMeta as arrayMeta } from '../data/array/meta'
// ... one import per topic ...

const topicMetaMap: Record<string, TopicMeta> = {
  array: arrayMeta,
  // ...
}

export function getTopicMeta(objectName: string): TopicMeta | undefined {
  return topicMetaMap[objectName.toLowerCase()]
}
```

---

## UI Changes

### 1. `ExerciseSidebar` — topic description block

Below the existing header (topic name + progress bar), add a collapsible `<details>` block:

```
┌─────────────────────────────┐
│ Array          14/42 ██░░░░ │  ← existing header
├─────────────────────────────┤
│ ▶ What is Array?            │  ← new <details> (closed by default)
│   Array is JS's ordered…    │
├─────────────────────────────┤
│ ○ Array.from — basic usage  │  ← existing nav list
│ ✓ Array.prototype.map       │
│ ...                         │
└─────────────────────────────┘
```

- Reads locale with `useLocale()` from `next-intl`
- Falls back to `en` if locale is unknown
- Description is plain text (markdown not needed — keep it short)
- Closed by default to avoid overwhelming the sidebar

### 2. `ExerciseDetailView` — usage example panel

In `DescriptionPanel`, before `<DescriptionMarkdown content={exercise.description} />`, add a collapsible block:

```
📖 Usage Example  ▼
┌─────────────────────────────────────────┐
│ // forEach runs a callback per element  │  ← syntax-highlighted code
│ [1,2,3].forEach(n => console.log(n))   │
└─────────────────────────────────────────┘
Use forEach for side effects — it always returns undefined.
```

- Only rendered when `exercise.usageExample` is defined
- Code rendered inside `<pre><code>` (existing `DescriptionMarkdown` already has code styling)
- Explanation text rendered as a short `<p>` below the code
- Closed by default on mobile, open by default on desktop (`md:open` attribute)

---

## Locale Handling

- `useLocale()` from `next-intl` returns `'en'` or `'es'`
- Sidebar and detail view both key into `description[locale]` / `explanation[locale]`
- Fallback: if `locale` is not `'en'` or `'es'`, default to `'en'`

---

## Content Generation

All descriptions and examples will be AI-generated during implementation:
- ~50 `meta.ts` files × 2 languages = 100 description strings
- All exercises × `usageExample.code` + 2 explanation strings
- Quality bar: concise (1–3 sentences for descriptions, 1 sentence for explanations), accurate, idiomatic JS

---

## Out of Scope

- A separate "Learn" mode or routing change
- Markdown rendering inside `topicMeta.description` (plain text only)
- Translations via i18n message files (strings live in data files)
- Any changes to the `ExerciseListView` (topic list page) — topic descriptions only appear in the detail view sidebar

---

## Implementation Order

1. Add `TopicMeta`, `UsageExample` types to `exercises.ts`
2. Add `usageExample?: UsageExample` to `Exercise` interface
3. Create `meta.ts` for all ~50 topic folders (with content)
4. Update `exerciseRepository.ts` with `getTopicMeta`
5. Add `usageExample` to all exercise files (with content)
6. Update `ExerciseSidebar` to show topic description
7. Update `ExerciseDetailView` (`DescriptionPanel`) to show usage example
8. TypeScript check (`pnpm tsc --noEmit`)
9. Commit
