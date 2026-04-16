# Gamification System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add XP, levels, badges, streaks, daily challenge, and timed mode to the JS Built-ins exercise platform.

**Architecture:** New `gamificationSlice` in Redux holds all gamification state; an RTK listener middleware reacts to `updateProgress` dispatches to award XP, update streaks, and unlock badges; timed mode lives in local React state and passes a pre-computed `timedBonus` through the `updateProgress` payload.

**Tech Stack:** Redux Toolkit 2.x (listener middleware), React 19, Next.js 16, Tailwind CSS 4, TypeScript. No test framework available; verify with `npx tsc --noEmit`.

---

## File Map

**New files:**
- `src/features/gamification/domain/entities/index.ts` — types, constants (LEVELS, XP_TABLE, STATIC_BADGES), pure helper functions
- `src/features/gamification/presentation/store/gamificationSlice.ts` — Redux slice (state, actions, reducers)
- `src/features/gamification/presentation/store/selectors.ts` — computed selectors for level, XP progress, daily challenge, badge list
- `src/features/gamification/presentation/store/gamificationListener.ts` — RTK listener; awards XP/badges/streaks on `updateProgress`
- `src/features/gamification/infrastructure/adapters/gamificationStorageAdapter.ts` — localStorage read/write
- `src/features/gamification/infrastructure/middleware/gamificationStorageMiddleware.ts` — persists gamification state after every action
- `src/features/gamification/presentation/components/GamificationBar.tsx` — compact level + XP bar + streak for Navbar
- `src/features/gamification/presentation/components/LevelWidget.tsx` — level name + full XP progress bar for Home
- `src/features/gamification/presentation/components/DailyChallengeCard.tsx` — today's challenge card for Home
- `src/features/gamification/presentation/components/BadgesGallery.tsx` — all badges (earned / locked) for Stats
- `src/features/exercises/presentation/components/TimedModeToggle.tsx` — opt-in timed mode button
- `src/features/exercises/presentation/components/CountdownTimer.tsx` — mm:ss countdown display

**Modified files:**
- `src/features/progress/presentation/store/progressSlice.ts` — add `timedBonus?: number` to `updateProgress` payload type (reducer ignores it)
- `src/shared/lib/store/rootReducer.ts` — add `gamification` reducer
- `src/shared/lib/store/listeners/index.ts` — enable `listenerMiddleware` and export `startListening`
- `src/shared/lib/store/index.ts` — prepend listener middleware, hydrate gamification, dispatch `initGamification`, call `registerGamificationListener`
- `src/shared/components/Navbar.tsx` — replace progress text with `<GamificationBar />`
- `src/features/home/presentation/components/HomeView.tsx` — add `<LevelWidget />` and `<DailyChallengeCard />`
- `src/features/stats/presentation/components/StatsView.tsx` — add `<BadgesGallery />`
- `src/features/exercises/presentation/components/ExerciseRunner.tsx` — timed mode state, countdown, `timedBonus` in dispatch

---

## Task 1: Domain Entities

**Files:**
- Create: `src/features/gamification/domain/entities/index.ts`

- [ ] **Step 1: Create the file**

```typescript
// src/features/gamification/domain/entities/index.ts
import type { Difficulty, Exercise } from '@/shared/types/exercises'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Level {
  id: string
  name: string
  minXp: number
  maxXp: number | null  // null = highest level (no ceiling)
}

export interface BadgeDef {
  id: string
  name: string
  description: string
  emoji: string        // short keyword, e.g. 'fire'; map via EMOJI_MAP in components
  category: 'milestone' | 'streak' | 'speed' | 'daily' | 'mastery'
}

export interface GamificationState {
  xp: number
  badges: string[]                // earned badge IDs
  streak: number                  // current consecutive-day streak
  lastActivityDate: string | null // YYYY-MM-DD of last completed exercise
  lastDailyDate: string | null    // YYYY-MM-DD of last completed daily challenge
  userSeed: string                // stable UUID used in daily challenge hash
  totalDailyCompleted: number
  timedCompletions: number
}

// ─── Constants ───────────────────────────────────────────────────────────────

export const LEVELS: Level[] = [
  { id: 'apprentice', name: 'Apprentice', minXp: 0,     maxXp: 499   },
  { id: 'developer',  name: 'Developer',  minXp: 500,   maxXp: 1999  },
  { id: 'senior',     name: 'Senior',     minXp: 2000,  maxXp: 4999  },
  { id: 'architect',  name: 'Architect',  minXp: 5000,  maxXp: 9999  },
  { id: 'master',     name: 'Master',     minXp: 10000, maxXp: null  },
]

export const XP_TABLE: Record<Difficulty, number> = {
  beginner:     10,
  intermediate: 25,
  advanced:     50,
}

export const STATIC_BADGES: BadgeDef[] = [
  // Milestone (5)
  { id: 'milestone-1',   name: 'First Step',    description: 'Complete your first exercise',  emoji: '🌱', category: 'milestone' },
  { id: 'milestone-10',  name: 'Problem Solver', description: 'Complete 10 exercises',        emoji: '💡', category: 'milestone' },
  { id: 'milestone-100', name: 'Century',        description: 'Complete 100 exercises',       emoji: '💯', category: 'milestone' },
  { id: 'milestone-200', name: 'Double Century', description: 'Complete 200 exercises',       emoji: '🏆', category: 'milestone' },
  { id: 'milestone-all', name: 'Completionist',  description: 'Complete every exercise',      emoji: '🎯', category: 'milestone' },
  // Streak (3)
  { id: 'streak-3',  name: 'Hot Streak',   description: 'Maintain a 3-day streak',  emoji: '🔥', category: 'streak' },
  { id: 'streak-7',  name: 'Week Warrior', description: 'Maintain a 7-day streak',  emoji: '⚡', category: 'streak' },
  { id: 'streak-30', name: 'Unstoppable',  description: 'Maintain a 30-day streak', emoji: '🌊', category: 'streak' },
  // Speed (2)
  { id: 'speed-1', name: 'Speed Demon', description: 'Complete an exercise in timed mode',    emoji: '⏱️', category: 'speed' },
  { id: 'speed-3', name: 'Flash',       description: 'Complete 3 exercises in timed mode',    emoji: '💨', category: 'speed' },
  // Daily (2)
  { id: 'daily-1', name: 'Daily Grind', description: 'Complete your first daily challenge',   emoji: '📅', category: 'daily' },
  { id: 'daily-7', name: 'Daily Dozen', description: 'Complete 7 daily challenges in total',  emoji: '🗓️', category: 'daily' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** djb2 hash -> stable positive integer */
export function simpleHash(str: string): number {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i)
  }
  return Math.abs(hash)
}

/** Today's date as YYYY-MM-DD (UTC) */
export function getTodayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

/** Deterministic daily challenge: same exercise for the same userSeed + UTC date. */
export function getDailyExercise(userSeed: string, exercises: Exercise[]): Exercise {
  const dateStr = getTodayStr()
  const index = simpleHash(dateStr + userSeed) % exercises.length
  return exercises[index]
}

/** Returns the Level object for the given XP total. */
export function getLevelForXp(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) return LEVELS[i]
  }
  return LEVELS[0]
}

/** Mastery badge definition for a built-in object name (e.g. 'Array'). */
export function getMasteryBadgeDef(builtIn: string): BadgeDef {
  return {
    id: 'mastery-' + builtIn.toLowerCase(),
    name: builtIn + ' Master',
    description: 'Complete all ' + builtIn + ' exercises',
    emoji: '🏅',
    category: 'mastery',
  }
}

/** Look up any badge definition by ID (works for both static and mastery badges). */
export function getBadgeDef(id: string): BadgeDef | undefined {
  if (id.startsWith('mastery-')) {
    const slug = id.slice('mastery-'.length)
    const builtIn = slug.charAt(0).toUpperCase() + slug.slice(1)
    return getMasteryBadgeDef(builtIn)
  }
  return STATIC_BADGES.find((b) => b.id === id)
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors from this new file.

- [ ] **Step 3: Commit**

```bash
git add src/features/gamification/domain/entities/index.ts
git commit -m "feat(gamification): add domain entities - types, constants, helpers

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 2: gamificationSlice

**Files:**
- Create: `src/features/gamification/presentation/store/gamificationSlice.ts`

- [ ] **Step 1: Create the slice**

```typescript
// src/features/gamification/presentation/store/gamificationSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { GamificationState } from '@/features/gamification/domain/entities'

const initialState: GamificationState = {
  xp: 0,
  badges: [],
  streak: 0,
  lastActivityDate: null,
  lastDailyDate: null,
  userSeed: '',
  totalDailyCompleted: 0,
  timedCompletions: 0,
}

export const gamificationSlice = createSlice({
  name: 'gamification',
  initialState,
  reducers: {
    /** Called once on startup -- sets userSeed only if not already persisted. */
    initGamification: (state, action: PayloadAction<string>) => {
      if (!state.userSeed) {
        state.userSeed = action.payload
      }
    },

    addXp: (state, action: PayloadAction<number>) => {
      state.xp += action.payload
    },

    unlockBadge: (state, action: PayloadAction<string>) => {
      if (!state.badges.includes(action.payload)) {
        state.badges.push(action.payload)
      }
    },

    /** Increment streak by 1. Caller provides today's YYYY-MM-DD string. */
    incrementStreak: (state, action: PayloadAction<string>) => {
      state.streak += 1
      state.lastActivityDate = action.payload
    },

    /** Reset streak to 1 after a gap. Caller provides today's YYYY-MM-DD string. */
    resetStreak: (state, action: PayloadAction<string>) => {
      state.streak = 1
      state.lastActivityDate = action.payload
    },

    /** Record a completed daily challenge. Caller provides today's YYYY-MM-DD string. */
    completeDailyChallenge: (state, action: PayloadAction<string>) => {
      state.totalDailyCompleted += 1
      state.lastDailyDate = action.payload
    },

    incrementTimedCompletions: (state) => {
      state.timedCompletions += 1
    },

    hydrateGamification: (_state, action: PayloadAction<GamificationState>) => {
      return action.payload
    },
  },
})

export const {
  initGamification,
  addXp,
  unlockBadge,
  incrementStreak,
  resetStreak,
  completeDailyChallenge,
  incrementTimedCompletions,
  hydrateGamification,
} = gamificationSlice.actions

export default gamificationSlice.reducer
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/gamification/presentation/store/gamificationSlice.ts
git commit -m "feat(gamification): add gamificationSlice - state, actions, reducers

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 3: Storage Adapter + Middleware

**Files:**
- Create: `src/features/gamification/infrastructure/adapters/gamificationStorageAdapter.ts`
- Create: `src/features/gamification/infrastructure/middleware/gamificationStorageMiddleware.ts`

- [ ] **Step 1: Create storage adapter**

```typescript
// src/features/gamification/infrastructure/adapters/gamificationStorageAdapter.ts
import type { GamificationState } from '@/features/gamification/domain/entities'

const STORAGE_KEY = 'js-practice-gamification'

export const gamificationStorageAdapter = {
  load(): GamificationState | null {
    if (typeof window === 'undefined') return null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as GamificationState) : null
    } catch {
      return null
    }
  },

  save(state: GamificationState): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage quota exceeded -- silently ignore
    }
  },
}
```

- [ ] **Step 2: Create storage middleware**

```typescript
// src/features/gamification/infrastructure/middleware/gamificationStorageMiddleware.ts
import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '@/shared/lib/store/rootReducer'
import { gamificationStorageAdapter } from '../adapters/gamificationStorageAdapter'

export const gamificationStorageMiddleware: Middleware<Record<string, never>, RootState> =
  (store) => (next) => (action) => {
    const result = next(action)
    gamificationStorageAdapter.save(store.getState().gamification)
    return result
  }
```

NOTE: `store.getState().gamification` will show a TypeScript error until Task 5
adds the `gamification` key to `rootReducer`. That is expected -- it resolves then.

- [ ] **Step 3: Commit**

```bash
git add src/features/gamification/infrastructure/adapters/gamificationStorageAdapter.ts
git add src/features/gamification/infrastructure/middleware/gamificationStorageMiddleware.ts
git commit -m "feat(gamification): add storage adapter and persistence middleware

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 4: Selectors

**Files:**
- Create: `src/features/gamification/presentation/store/selectors.ts`

- [ ] **Step 1: Create selectors**

```typescript
// src/features/gamification/presentation/store/selectors.ts
import type { RootState } from '@/shared/lib/store/rootReducer'
import {
  getLevelForXp,
  getDailyExercise,
  getTodayStr,
  LEVELS,
  STATIC_BADGES,
  getMasteryBadgeDef,
  type Level,
  type BadgeDef,
} from '@/features/gamification/domain/entities'
import { allExercises } from '@/features/exercises/infrastructure/data'

export const selectGamification = (state: RootState) => state.gamification

export const selectCurrentLevel = (state: RootState): Level =>
  getLevelForXp(state.gamification.xp)

/**
 * XP values relative to the current level band, ready to drive a progress bar.
 *
 * Example: Developer = 500-1999 XP. With 750 XP total:
 *   levelXp = 250, levelRange = 1499, pct = 17
 *
 * For the Master level (maxXp = null) pct is always 100.
 */
export const selectXpProgress = (
  state: RootState,
): { xp: number; levelXp: number; levelRange: number; pct: number } => {
  const xp = state.gamification.xp
  const level = getLevelForXp(xp)
  if (level.maxXp === null) {
    return { xp, levelXp: xp - level.minXp, levelRange: 1, pct: 100 }
  }
  const levelXp = xp - level.minXp
  const levelRange = level.maxXp - level.minXp
  return { xp, levelXp, levelRange, pct: Math.round((levelXp / levelRange) * 100) }
}

/** The next Level definition, or null when already at Master. */
export const selectNextLevel = (state: RootState): Level | null => {
  const current = getLevelForXp(state.gamification.xp)
  const idx = LEVELS.findIndex((l) => l.id === current.id)
  return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null
}

/** Today's daily challenge exercise (deterministic; changes at UTC midnight). */
export const selectDailyChallenge = (state: RootState) =>
  getDailyExercise(state.gamification.userSeed, allExercises)

/** Whether today's daily challenge has already been completed. */
export const selectIsDailyCompleted = (state: RootState): boolean =>
  state.gamification.lastDailyDate === getTodayStr()

/**
 * All possible badges split into earned and locked.
 * Mastery badges are generated from the unique builtIn names across allExercises.
 */
export const selectAllBadges = (
  state: RootState,
): { earned: BadgeDef[]; locked: BadgeDef[] } => {
  const earnedIds = new Set(state.gamification.badges)
  const builtIns = [...new Set(allExercises.map((e) => e.builtIn))].sort()
  const masteryBadges = builtIns.map(getMasteryBadgeDef)
  const allBadges = [...STATIC_BADGES, ...masteryBadges]
  return {
    earned: allBadges.filter((b) => earnedIds.has(b.id)),
    locked: allBadges.filter((b) => !earnedIds.has(b.id)),
  }
}
```

NOTE: `state.gamification` will show a TypeScript error until Task 5. Commit
anyway -- it will resolve when the reducer is wired.

- [ ] **Step 2: Commit**

```bash
git add src/features/gamification/presentation/store/selectors.ts
git commit -m "feat(gamification): add selectors - level, XP progress, daily challenge, badges

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 5: Wire the Store

**Files:**
- Modify: `src/features/progress/presentation/store/progressSlice.ts`
- Modify: `src/shared/lib/store/rootReducer.ts`
- Modify: `src/shared/lib/store/listeners/index.ts`
- Modify: `src/shared/lib/store/index.ts`

After this task, `npx tsc --noEmit` must pass with only one error: the missing
`gamificationListener` import in `store/index.ts`, which resolves in Task 6.

- [ ] **Step 1: Add timedBonus to updateProgress payload**

In `src/features/progress/presentation/store/progressSlice.ts`, add
`timedBonus?: number` to the `PayloadAction` type. The reducer body is unchanged --
it simply ignores the field. Only the listener (Task 6) reads it.

Change the `updateProgress` action type from:

```typescript
    updateProgress: (
      state,
      action: PayloadAction<{
        slug: string
        status: ExerciseProgress['status']
        lastCode: string
      }>,
    ) => {
      const { slug, status, lastCode } = action.payload
```

To:

```typescript
    updateProgress: (
      state,
      action: PayloadAction<{
        slug: string
        status: ExerciseProgress['status']
        lastCode: string
        timedBonus?: number
      }>,
    ) => {
      const { slug, status, lastCode } = action.payload
```

- [ ] **Step 2: Add gamification reducer to rootReducer**

Replace `src/shared/lib/store/rootReducer.ts` with:

```typescript
import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@/features/home/presentation/store/homeSlice'
import progressReducer from '@/features/progress/presentation/store/progressSlice'
import gamificationReducer from '@/features/gamification/presentation/store/gamificationSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  progress: progressReducer,
  gamification: gamificationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
```

- [ ] **Step 3: Enable listenerMiddleware**

Replace `src/shared/lib/store/listeners/index.ts` with:

```typescript
// RTK listener middleware -- side-effect handlers (XP, badges, streaks, etc.)
//
// IMPORTANT: do NOT import from '@/shared/lib/store' here. That would create
// a circular dependency (store/index -> listeners -> store/index).
// Listeners import RootState from rootReducer.ts (safe) instead.
import { createListenerMiddleware } from '@reduxjs/toolkit'

export const listenerMiddleware = createListenerMiddleware()

// Untyped startListening -- listeners cast getState() as RootState themselves.
export const { startListening } = listenerMiddleware
```

- [ ] **Step 4: Wire store/index.ts**

Replace `src/shared/lib/store/index.ts` with:

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { localStorageMiddleware } from '@/features/progress/infrastructure/middleware/localStorageMiddleware'
import { localStorageAdapter } from '@/features/progress/infrastructure/adapters/storageAdapter'
import { hydrateProgress } from '@/features/progress/presentation/store/progressSlice'
import { gamificationStorageMiddleware } from '@/features/gamification/infrastructure/middleware/gamificationStorageMiddleware'
import { gamificationStorageAdapter } from '@/features/gamification/infrastructure/adapters/gamificationStorageAdapter'
import { hydrateGamification, initGamification } from '@/features/gamification/presentation/store/gamificationSlice'
import { listenerMiddleware } from '@/shared/lib/store/listeners'
import { registerGamificationListener } from '@/features/gamification/presentation/store/gamificationListener'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(localStorageMiddleware, gamificationStorageMiddleware),
})

// Hydrate progress from localStorage
const savedProgress = localStorageAdapter.load()
if (savedProgress) {
  store.dispatch(hydrateProgress(savedProgress))
}

// Hydrate gamification from localStorage; generate userSeed on first run
const savedGamification = gamificationStorageAdapter.load()
if (savedGamification) {
  store.dispatch(hydrateGamification(savedGamification))
}
const seed =
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2)
store.dispatch(initGamification(seed))

// Register gamification side-effect listener
registerGamificationListener()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
```

- [ ] **Step 5: Type-check (expect one error for missing gamificationListener)**

```bash
npx tsc --noEmit 2>&1 | grep -v "gamificationListener"
```

All errors other than the missing `gamificationListener` module should be gone.

- [ ] **Step 6: Commit**

```bash
git add src/features/progress/presentation/store/progressSlice.ts
git add src/shared/lib/store/rootReducer.ts
git add src/shared/lib/store/listeners/index.ts
git add src/shared/lib/store/index.ts
git commit -m "feat(gamification): wire store - reducer, listener middleware, storage, seed init

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 6: Gamification Listener

**Files:**
- Create: `src/features/gamification/presentation/store/gamificationListener.ts`

This listener fires after every `updateProgress` action. It awards XP, manages
streaks, unlocks badges, and records daily challenge completions. Only first-time
completions earn XP and badges (re-solving gives nothing).

**Key API:** `listenerApi.getOriginalState()` = state before the action.
`listenerApi.getState()` = state after reducers ran (reflects new progress).

- [ ] **Step 1: Create the listener**

```typescript
// src/features/gamification/presentation/store/gamificationListener.ts
import { startListening } from '@/shared/lib/store/listeners'
import { updateProgress } from '@/features/progress/presentation/store/progressSlice'
import {
  addXp,
  unlockBadge,
  incrementStreak,
  resetStreak,
  completeDailyChallenge,
  incrementTimedCompletions,
} from './gamificationSlice'
import {
  XP_TABLE,
  getTodayStr,
  getDailyExercise,
  getMasteryBadgeDef,
} from '@/features/gamification/domain/entities'
import type { RootState } from '@/shared/lib/store/rootReducer'
import { allExercises } from '@/features/exercises/infrastructure/data'

const TOTAL_EXERCISES = allExercises.length

export function registerGamificationListener(): void {
  startListening({
    actionCreator: updateProgress,
    effect: (action, listenerApi) => {
      const { slug, status, timedBonus = 0 } = action.payload
      if (status !== 'completed') return

      // before = state before this action; after = state after reducers ran
      const before = listenerApi.getOriginalState() as RootState
      const after  = listenerApi.getState()          as RootState

      const wasAlreadyCompleted =
        before.progress.exercises[slug]?.status === 'completed'
      if (wasAlreadyCompleted) return

      const exercise = allExercises.find((e) => e.slug === slug)
      if (!exercise) return

      const baseXp = XP_TABLE[exercise.difficulty]
      const today  = getTodayStr()

      // ── Daily challenge? ─────────────────────────────────────────────
      const userSeed      = after.gamification.userSeed
      const dailyExercise = getDailyExercise(userSeed, allExercises)
      const isDailyCompletion =
        slug === dailyExercise.slug &&
        after.gamification.lastDailyDate !== today

      // ── XP ──────────────────────────────────────────────────────────
      const earnedXp = (isDailyCompletion ? baseXp * 2 : baseXp) + timedBonus
      listenerApi.dispatch(addXp(earnedXp))

      // ── Streak ──────────────────────────────────────────────────────
      const lastDate = after.gamification.lastActivityDate
      if (lastDate === null) {
        listenerApi.dispatch(resetStreak(today))
      } else if (lastDate === today) {
        // Already active today -- no streak change
      } else {
        const d = new Date(today)
        d.setDate(d.getDate() - 1)
        const yesterdayStr = d.toISOString().slice(0, 10)
        if (lastDate === yesterdayStr) {
          listenerApi.dispatch(incrementStreak(today))
        } else {
          listenerApi.dispatch(resetStreak(today))
        }
      }

      // ── Streak badges ────────────────────────────────────────────────
      const s1 = listenerApi.getState() as RootState
      const newStreak    = s1.gamification.streak
      const earnedBadges = s1.gamification.badges

      if      (newStreak >= 30 && !earnedBadges.includes('streak-30')) listenerApi.dispatch(unlockBadge('streak-30'))
      else if (newStreak >= 7  && !earnedBadges.includes('streak-7'))  listenerApi.dispatch(unlockBadge('streak-7'))
      else if (newStreak >= 3  && !earnedBadges.includes('streak-3'))  listenerApi.dispatch(unlockBadge('streak-3'))

      // ── Milestone badges ─────────────────────────────────────────────
      const completedCount = Object.values(after.progress.exercises)
        .filter((p) => p.status === 'completed').length

      const milestones: Array<[number, string]> = [
        [1,              'milestone-1'],
        [10,             'milestone-10'],
        [100,            'milestone-100'],
        [200,            'milestone-200'],
        [TOTAL_EXERCISES,'milestone-all'],
      ]

      const s2 = listenerApi.getState() as RootState
      for (const [threshold, badgeId] of milestones) {
        if (completedCount >= threshold && !s2.gamification.badges.includes(badgeId)) {
          listenerApi.dispatch(unlockBadge(badgeId))
        }
      }

      // ── Mastery badge ────────────────────────────────────────────────
      const builtIn = exercise.builtIn
      const allForBuiltIn = allExercises.filter((e) => e.builtIn === builtIn)
      const completedForBuiltIn = allForBuiltIn.filter(
        (e) => after.progress.exercises[e.slug]?.status === 'completed',
      )
      if (completedForBuiltIn.length === allForBuiltIn.length) {
        const masteryId = getMasteryBadgeDef(builtIn).id
        const s3 = listenerApi.getState() as RootState
        if (!s3.gamification.badges.includes(masteryId)) {
          listenerApi.dispatch(unlockBadge(masteryId))
        }
      }

      // ── Speed badges ─────────────────────────────────────────────────
      if (timedBonus > 0) {
        listenerApi.dispatch(incrementTimedCompletions())
        const s4 = listenerApi.getState() as RootState
        const tc = s4.gamification.timedCompletions
        if (tc >= 3 && !s4.gamification.badges.includes('speed-3')) listenerApi.dispatch(unlockBadge('speed-3'))
        else if (tc >= 1 && !s4.gamification.badges.includes('speed-1')) listenerApi.dispatch(unlockBadge('speed-1'))
      }

      // ── Daily badge + record ─────────────────────────────────────────
      if (isDailyCompletion) {
        listenerApi.dispatch(completeDailyChallenge(today))
        const s5 = listenerApi.getState() as RootState
        const dc = s5.gamification.totalDailyCompleted
        if (dc >= 7 && !s5.gamification.badges.includes('daily-7')) listenerApi.dispatch(unlockBadge('daily-7'))
        else if (dc >= 1 && !s5.gamification.badges.includes('daily-1')) listenerApi.dispatch(unlockBadge('daily-1'))
      }
    },
  })
}
```

- [ ] **Step 2: Type-check (expect zero errors now)**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/gamification/presentation/store/gamificationListener.ts
git commit -m "feat(gamification): add gamification listener - XP, streaks, badges, daily

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 7: GamificationBar + Navbar

**Files:**
- Create: `src/features/gamification/presentation/components/GamificationBar.tsx`
- Modify: `src/shared/components/Navbar.tsx`

- [ ] **Step 1: Create GamificationBar**

```tsx
// src/features/gamification/presentation/components/GamificationBar.tsx
'use client'
import { useSelector } from 'react-redux'
import {
  selectCurrentLevel,
  selectXpProgress,
  selectGamification,
} from '@/features/gamification/presentation/store/selectors'

export function GamificationBar() {
  const level    = useSelector(selectCurrentLevel)
  const progress = useSelector(selectXpProgress)
  const gam      = useSelector(selectGamification)

  return (
    <div className="flex items-center gap-3 text-sm">
      {/* Streak */}
      {gam.streak > 0 && (
        <span className="flex items-center gap-1 font-semibold text-orange-400">
          🔥 {gam.streak}
        </span>
      )}

      {/* Level + XP bar */}
      <div className="flex items-center gap-2">
        <span className="font-medium text-white">{level.name}</span>
        <div className="w-24 h-2 rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full rounded-full bg-yellow-400 transition-all duration-500"
            style={{ width: progress.pct + '%' }}
          />
        </div>
        <span className="text-white/60 text-xs">{progress.xp} XP</span>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update Navbar**

Open `src/shared/components/Navbar.tsx`.

1. Add import:
   ```typescript
   import { GamificationBar } from '@/features/gamification/presentation/components/GamificationBar'
   ```

2. Find the existing progress-related JSX (usually shows completion count or
   similar) and replace it with `<GamificationBar />`.

   If you cannot find existing progress text, add `<GamificationBar />` inside
   the `<nav>` just before the closing tag, aligned to the right side.

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/gamification/presentation/components/GamificationBar.tsx
git add src/shared/components/Navbar.tsx
git commit -m "feat(gamification): add GamificationBar to Navbar

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 8: LevelWidget + DailyChallengeCard + HomeView

**Files:**
- Create: `src/features/gamification/presentation/components/LevelWidget.tsx`
- Create: `src/features/gamification/presentation/components/DailyChallengeCard.tsx`
- Modify: `src/features/home/presentation/components/HomeView.tsx`

- [ ] **Step 1: Create LevelWidget**

```tsx
// src/features/gamification/presentation/components/LevelWidget.tsx
'use client'
import { useSelector } from 'react-redux'
import {
  selectCurrentLevel,
  selectNextLevel,
  selectXpProgress,
} from '@/features/gamification/presentation/store/selectors'

export function LevelWidget() {
  const level    = useSelector(selectCurrentLevel)
  const next     = useSelector(selectNextLevel)
  const progress = useSelector(selectXpProgress)

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-white">{level.name}</span>
        {next && (
          <span className="text-white/50 text-xs">
            {progress.levelXp} / {progress.levelRange} XP → {next.name}
          </span>
        )}
        {!next && <span className="text-yellow-400 text-xs">Max level 🏆</span>}
      </div>
      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-500"
          style={{ width: progress.pct + '%' }}
        />
      </div>
      <p className="text-xs text-white/40">{progress.xp} XP total</p>
    </div>
  )
}
```

- [ ] **Step 2: Create DailyChallengeCard**

```tsx
// src/features/gamification/presentation/components/DailyChallengeCard.tsx
'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import {
  selectDailyChallenge,
  selectIsDailyCompleted,
} from '@/features/gamification/presentation/store/selectors'

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner:     'text-green-400',
  intermediate: 'text-yellow-400',
  advanced:     'text-red-400',
}

export function DailyChallengeCard() {
  const daily     = useSelector(selectDailyChallenge)
  const completed = useSelector(selectIsDailyCompleted)

  return (
    <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm">
        📅 Daily Challenge
        {completed && <span className="ml-auto text-green-400 text-xs">✓ Done!</span>}
      </div>
      <p className="text-white font-medium">{daily.title}</p>
      <div className="flex items-center gap-2 text-xs">
        <span className={DIFFICULTY_COLOR[daily.difficulty] ?? 'text-white'}>
          {daily.difficulty}
        </span>
        <span className="text-white/40">{daily.builtIn}</span>
      </div>
      {!completed && (
        <Link
          href={'/exercise/' + daily.slug}
          className="mt-1 inline-block rounded-lg bg-yellow-400 text-black text-xs font-bold px-3 py-1 w-fit hover:bg-yellow-300 transition-colors"
        >
          Start →
        </Link>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Add widgets to HomeView**

Open `src/features/home/presentation/components/HomeView.tsx`.

1. Add imports at the top:
   ```typescript
   import { LevelWidget }         from '@/features/gamification/presentation/components/LevelWidget'
   import { DailyChallengeCard }  from '@/features/gamification/presentation/components/DailyChallengeCard'
   ```

2. Find the section between the Hero (`<h1>` / hero text) and the Search bar /
   exercise list. Insert a two-column (or stacked on mobile) grid there:
   ```tsx
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
     <LevelWidget />
     <DailyChallengeCard />
   </div>
   ```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/gamification/presentation/components/LevelWidget.tsx
git add src/features/gamification/presentation/components/DailyChallengeCard.tsx
git add src/features/home/presentation/components/HomeView.tsx
git commit -m "feat(gamification): add LevelWidget and DailyChallengeCard to HomeView

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 9: BadgesGallery + StatsView

**Files:**
- Create: `src/features/gamification/presentation/components/BadgesGallery.tsx`
- Modify: `src/features/stats/presentation/components/StatsView.tsx`

- [ ] **Step 1: Create BadgesGallery**

```tsx
// src/features/gamification/presentation/components/BadgesGallery.tsx
'use client'
import { useSelector } from 'react-redux'
import { selectAllBadges } from '@/features/gamification/presentation/store/selectors'
import type { BadgeDef } from '@/features/gamification/domain/entities'

function BadgeCard({ badge, locked }: { badge: BadgeDef; locked: boolean }) {
  return (
    <div
      title={badge.description}
      className={
        'flex flex-col items-center gap-1 rounded-xl border p-3 text-center text-xs transition-all ' +
        (locked
          ? 'border-white/10 bg-white/5 opacity-40 grayscale'
          : 'border-yellow-400/30 bg-yellow-400/5')
      }
    >
      <span className="text-2xl">{badge.emoji}</span>
      <span className={locked ? 'text-white/40' : 'text-white font-medium'}>
        {badge.name}
      </span>
    </div>
  )
}

export function BadgesGallery() {
  const { earned, locked } = useSelector(selectAllBadges)

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-white">
        Badges
        <span className="ml-2 text-sm text-white/40">
          {earned.length} / {earned.length + locked.length}
        </span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {earned.map((b) => <BadgeCard key={b.id} badge={b} locked={false} />)}
        {locked.map((b) => <BadgeCard key={b.id} badge={b} locked={true}  />)}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add BadgesGallery to StatsView**

Open `src/features/stats/presentation/components/StatsView.tsx`.

1. Add import:
   ```typescript
   import { BadgesGallery } from '@/features/gamification/presentation/components/BadgesGallery'
   ```

2. Append `<BadgesGallery />` at the bottom of the outermost container, after
   the existing stats sections:
   ```tsx
   <BadgesGallery />
   ```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/features/gamification/presentation/components/BadgesGallery.tsx
git add src/features/stats/presentation/components/StatsView.tsx
git commit -m "feat(gamification): add BadgesGallery to StatsView

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 10: Timed Mode (TimedModeToggle + CountdownTimer + ExerciseRunner)

**Files:**
- Create: `src/features/exercises/presentation/components/TimedModeToggle.tsx`
- Create: `src/features/exercises/presentation/components/CountdownTimer.tsx`
- Modify: `src/features/exercises/presentation/components/ExerciseRunner.tsx`

All timer state is **local React state only** -- it does not go in Redux.
The pre-computed `timedBonus` value is passed through the `updateProgress` payload.

**Timer duration formula:**
```
baseMins = { beginner: 10, intermediate: 15, advanced: 20 }
extraMins = Math.min(5, Math.floor(initialCode.length / 100))
totalSeconds = (baseMins[difficulty] + extraMins) * 60
```

**Bonus formula:**
```
timedBonus = Math.round(baseXp * 0.5 * (timeLeft / totalSeconds))
```

- [ ] **Step 1: Create TimedModeToggle**

```tsx
// src/features/exercises/presentation/components/TimedModeToggle.tsx
interface TimedModeToggleProps {
  enabled: boolean
  onToggle: () => void
  disabled?: boolean
}

export function TimedModeToggle({ enabled, onToggle, disabled }: TimedModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      title={enabled ? 'Disable timed mode' : 'Enable timed mode (bonus XP)'}
      className={
        'flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-medium transition-colors ' +
        (enabled
          ? 'border-yellow-400/60 bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20'
          : 'border-white/20 bg-transparent text-white/40 hover:text-white/70') +
        (disabled ? ' cursor-not-allowed opacity-50' : '')
      }
    >
      ⏱️ {enabled ? 'Timed ON' : 'Timed OFF'}
    </button>
  )
}
```

- [ ] **Step 2: Create CountdownTimer**

```tsx
// src/features/exercises/presentation/components/CountdownTimer.tsx
interface CountdownTimerProps {
  timeLeft: number   // seconds remaining
  total: number      // total seconds (used to colour-code urgency)
}

export function CountdownTimer({ timeLeft, total }: CountdownTimerProps) {
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0')
  const secs = (timeLeft % 60).toString().padStart(2, '0')
  const pct  = timeLeft / total

  const colour =
    pct > 0.5 ? 'text-green-400' :
    pct > 0.2 ? 'text-yellow-400' :
                'text-red-400 animate-pulse'

  return (
    <span className={'font-mono text-sm font-bold ' + colour}>
      {mins}:{secs}
    </span>
  )
}
```

- [ ] **Step 3: Rewrite ExerciseRunner to support timed mode**

Open `src/features/exercises/presentation/components/ExerciseRunner.tsx`.

Add these imports:

```typescript
import { useRef, useEffect } from 'react'
import { TimedModeToggle } from './TimedModeToggle'
import { CountdownTimer }  from './CountdownTimer'
import { XP_TABLE }        from '@/features/gamification/domain/entities'
```

Add this state inside the component body (after existing hooks):

```typescript
const BASE_MINS: Record<string, number> = { beginner: 10, intermediate: 15, advanced: 20 }
const totalSeconds = useMemo(() => {
  const base  = BASE_MINS[exercise.difficulty] ?? 15
  const extra = Math.min(5, Math.floor((exercise.initialCode ?? '').length / 100))
  return (base + extra) * 60
}, [exercise])

const [timedMode,    setTimedMode]    = useState(false)
const [timerActive,  setTimerActive]  = useState(false)
const [timeLeft,     setTimeLeft]     = useState(totalSeconds)
const [timerExpired, setTimerExpired] = useState(false)
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

// Start / reset timer when timed mode is toggled on
useEffect(() => {
  if (timedMode && !timerActive) {
    setTimeLeft(totalSeconds)
    setTimerExpired(false)
    setTimerActive(true)
  }
  if (!timedMode) {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setTimerActive(false)
    setTimeLeft(totalSeconds)
    setTimerExpired(false)
  }
}, [timedMode, totalSeconds])

// Countdown tick
useEffect(() => {
  if (!timerActive) return
  intervalRef.current = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(intervalRef.current!)
        setTimerExpired(true)
        setTimerActive(false)
        return 0
      }
      return prev - 1
    })
  }, 1000)
  return () => clearInterval(intervalRef.current!)
}, [timerActive])
```

Locate the `run` callback (where `dispatch(updateProgress(...))` is called on
success) and add `timedBonus` to the dispatch:

```typescript
// Inside the run callback, after confirming status === 'completed':
const baseXp    = XP_TABLE[exercise.difficulty]
const timedBonus = timedMode && timeLeft > 0
  ? Math.round(baseXp * 0.5 * (timeLeft / totalSeconds))
  : 0

dispatch(updateProgress({
  slug:      exercise.slug,
  status:    'completed',
  lastCode:  code,
  timedBonus,
}))

// Stop the timer after completion
if (intervalRef.current) clearInterval(intervalRef.current)
setTimerActive(false)
```

Add the `TimedModeToggle` and `CountdownTimer` to the JSX toolbar (above the
editor or in the header area):

```tsx
<div className="flex items-center gap-3 flex-wrap">
  <TimedModeToggle
    enabled={timedMode}
    onToggle={() => setTimedMode((v) => !v)}
    disabled={timerExpired}
  />
  {timedMode && (
    <CountdownTimer timeLeft={timeLeft} total={totalSeconds} />
  )}
  {timerExpired && (
    <span className="text-red-400 text-xs">Time's up! Solve freely (no bonus).</span>
  )}
</div>
```

Also add the missing `useMemo` import to the React import line if it isn't
already present.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/features/exercises/presentation/components/TimedModeToggle.tsx
git add src/features/exercises/presentation/components/CountdownTimer.tsx
git add src/features/exercises/presentation/components/ExerciseRunner.tsx
git commit -m "feat(gamification): add timed mode - toggle, countdown, timedBonus dispatch

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Final Verification

After all tasks are complete:

```bash
npx tsc --noEmit && npm run build
```

Expected: TypeScript clean, Next.js build succeeds with no errors.

Manual smoke test:
1. Open the app — Navbar shows `Apprentice` level, 0 XP, no streak.
2. Complete a beginner exercise → +10 XP appears in the bar, streak becomes 🔥 1.
3. Complete the daily challenge → XP doubles for that exercise.
4. Enable timed mode, solve an exercise quickly → see bonus XP in the bar.
5. Check Stats → `BadgesGallery` shows earned badges (at minimum `milestone-1`).
6. Reload the page → XP, streak, badges all persist.
