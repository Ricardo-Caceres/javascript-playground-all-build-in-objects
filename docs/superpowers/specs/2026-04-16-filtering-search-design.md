# Filtering & Search — Design Spec

**Date:** 2026-04-16  
**Status:** Approved

---

## Problem

The app has 1,986 exercises across 30+ built-in objects. Users have no way to search across all exercises at once, and the existing filters in ExerciseListView are not preserved in the URL (can't be shared or bookmarked).

---

## Scope

Two independent improvements:

1. **Global Search Modal** — command-palette style modal to search all exercises
2. **URL Params for ExerciseListView** — persist difficulty + status filters in the URL

Out of scope: sort options, filters in HomeView, fuzzy search.

---

## 1. Global Search Modal

### Access

- Navbar: search icon (lupa) always visible
- Keyboard: `Cmd+K` (Mac) / `Ctrl+K` (Windows/Linux) from any page

### Behavior

| State | Description |
|---|---|
| Open | Autofocus on text input |
| Typing | Debounce 150ms, filter `allExercises` by title + builtIn |
| Empty query | Show first 8 exercises from `allExercises` |
| Results | Max 8 items |
| No results | Show `"No se encontraron ejercicios para «query»"` |
| Select result | Navigate to exercise, close modal |
| Close | `Escape`, click backdrop, or navigation |

### Search Logic

Searches two fields (case-insensitive, `includes`):
1. `exercise.title`
2. `exercise.builtIn`

Results are not sorted beyond natural order in `allExercises`.

### Result Item Format

```
Array › map callback                    [beginner]
```

Keyboard navigation: `↑` / `↓` arrows, `Enter` to select.

### Architecture

```
src/features/search/
  presentation/
    components/
      SearchModal.tsx
    hooks/
      useExerciseSearch.ts
```

- `SearchModal` renders as a portal over all content
- `useExerciseSearch(query)` returns filtered exercise list
- `Navbar.tsx` holds open/close state + `Cmd+K` listener

### State

Local React state only — no Redux. The modal is ephemeral.

---

## 2. URL Params for ExerciseListView

### URL Format

```
/exercises/Array?difficulty=advanced&status=not-started
```

### Param Values

| Param | Valid values | Default (absent) |
|---|---|---|
| `difficulty` | `beginner`, `intermediate`, `advanced` | all |
| `status` | `not-started`, `attempted`, `completed` | all |

Invalid values are silently ignored (treated as "all").

### Behavior

- **On mount:** read params from URL → use as initial chip state
- **On chip change:** call `router.replace()` with updated params (no new history entry)
- **Filter logic:** unchanged — only the state source changes from `useState` to URL params

### Files Modified

- `src/features/exercises/presentation/components/ExerciseListView.tsx`

---

## What Does NOT Change

- HomeView filters (category chips, text search) — remain local state
- ExerciseListView filter logic — only state source changes
- No new dependencies (no fuse.js, no external search lib)
