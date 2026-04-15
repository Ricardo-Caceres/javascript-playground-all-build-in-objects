# Roadmap

This document tracks planned features and improvements for the JavaScript Playground.

---

## Completed (Phases 1-22)

All 22 phases are complete. The platform contains 1,986 exercises covering:

- Standard Built-in Objects: Array, String, Object, Number, Boolean, Math, Date, BigInt, Map, Set, WeakMap, WeakSet, WeakRef, ArrayBuffer, TypedArray, DataView, SharedArrayBuffer, Atomics, RegExp, JSON, TextEncoder, TextDecoder, Promise, Symbol, Proxy, Reflect, FinalizationRegistry, all Error types, all Web API globals
- Advanced Patterns: Async Patterns, Functional Programming, Design Patterns, Algorithms

---

## Planned

### 1. User Progress System

Track which exercises a user has completed, their streak, and score.

**Implementation ideas:**
- localStorage for offline-first persistence
- Supabase (PostgreSQL) for cloud sync
- Per-exercise status: not started, in progress, solved
- Streak counter and XP/score system
- "Reset progress" option

**Files to create/modify:**
- `src/features/progress/` — new feature slice
- `src/store/` — add progressSlice (Redux)
- Exercise detail page — "Mark as solved" button
- Sidebar/header — progress summary widget

---

### 2. Filtering and Search

Let users find exercises by difficulty, category, topic, or keyword.

**Implementation ideas:**
- Filter bar on the exercises list page: difficulty chips, category checkboxes, builtIn dropdown
- Text search (client-side, filtering the Redux state)
- URL query params so filters are shareable (e.g. `?difficulty=advanced&builtIn=Array`)
- Sort by: difficulty, alphabetical, completion status

**Files to modify:**
- Exercise list page component
- exerciseRepository — add filter/search helpers
- Redux slice — add filter state

---

### 3. Gamification

Make practice more engaging with game-like mechanics.

**Implementation ideas:**
- XP points per solved exercise (beginner=10, intermediate=25, advanced=50)
- Levels (e.g. Apprentice, Developer, Senior, Architect)
- Badges for milestones (e.g. "Array Master", "10-day streak")
- Daily challenge — one featured exercise per day
- Timed mode — solve with a countdown (Codewars-style kata)
- Leaderboard (requires auth)

---

### 4. Statistics Dashboard

Visual overview of learning progress.

**Implementation ideas:**
- Total exercises solved / total available (e.g. 247 / 1,986)
- Breakdown by category (pie chart) and difficulty (bar chart)
- Activity heatmap (GitHub-style — exercises solved per day)
- Weakest areas highlight (categories with lowest solve rate)
- Time spent (requires timer per exercise)

**Libraries to consider:** Recharts, Victory, or plain SVG

---

### 5. Authentication and Cloud Sync

Allow users to log in and keep progress across devices.

**Implementation ideas:**
- GitHub OAuth or Google OAuth via Supabase Auth / NextAuth.js
- Sync progress to Supabase (user_id + exercise_slug + solved_at)
- Public profile page (optional) — shareable stats
- Anonymous mode first, upgrade to account later

**Schema (Supabase):**
```sql
CREATE TABLE progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users,
  slug text NOT NULL,
  solved_at timestamptz DEFAULT now(),
  UNIQUE(user_id, slug)
);
```

---

### 6. More Exercise Content

Additional JavaScript topics not yet covered.

**TypeScript:**
- Basic types and type inference
- Interfaces and type aliases
- Generics
- Utility types (Partial, Required, Pick, Omit, etc.)
- Conditional and mapped types

**Node.js Patterns:**
- File system (fs/promises)
- Streams and pipelines
- EventEmitter
- Worker threads
- HTTP server basics

**Browser APIs:**
- Canvas 2D
- Fetch and Request/Response
- WebStorage (localStorage, sessionStorage)
- IntersectionObserver, MutationObserver
- WebSockets

---

### 7. Testing

Ensure platform reliability with automated tests.

**Implementation ideas:**
- Unit tests for exerciseRepository (getAllExercises, filter)
- Integration tests: verify each exercise solution passes its own tests
- E2E tests with Playwright: render exercise, submit solution, see pass/fail
- CI pipeline (GitHub Actions) running tests on every PR

---

### 8. Deployment

Publish the platform publicly.

**Implementation ideas:**
- Deploy on Vercel (free tier, automatic deploys from main)
- Custom domain
- Environment variables for Supabase keys
- Analytics (Vercel Analytics or Plausible)
- OG image for social sharing

---

## Priority Order (suggested)

1. Filtering and Search — immediate UX win, no backend needed
2. User Progress System — core engagement feature, start with localStorage
3. Statistics Dashboard — motivating, depends on progress system
4. Gamification — fun layer on top of progress
5. Authentication and Cloud Sync — when ready to go multi-device
6. More Exercise Content (TypeScript first)
7. Testing — important for long-term maintainability
8. Deployment — when ready to share publicly
