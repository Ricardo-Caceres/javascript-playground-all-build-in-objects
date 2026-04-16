# Gamification System — Design Spec

**Date:** 2026-04-16  
**Status:** Approved  

---

## Problem

The platform has 1,986 exercises and full progress tracking, but no engagement mechanics. Users complete exercises with no feedback beyond a checkmark. This spec adds XP, levels, badges, streaks, a daily challenge, and timed mode.

---

## Scope

- XP system with dynamic bonus for timed mode
- 5 levels (Apprentice → Master)
- Badge system: milestone, streak, speed, daily, mastery
- Daily streak tracking
- Daily challenge (per-user, date-derived, no backend)
- Timed mode (opt-in, dynamic time limit)
- UI: Navbar bar, Home widgets, BadgesGallery on Stats, timed mode controls on ExerciseRunner

Out of scope: leaderboard, auth, cloud sync.

---

## XP System

| Difficulty   | Base XP |
|--------------|---------|
| Beginner     | 10      |
| Intermediate | 25      |
| Advanced     | 50      |

**Rules:**
- XP is awarded only on first completion (re-solving gives 0 XP).
- Daily challenge completion: `XP × 2`.
- Timed mode bonus: `bonus = base × 0.5 × (timeLeft / totalTime)` (rounded down).
- Combined: `totalXP = base + timedBonus` (× 2 if daily challenge).

**Example:** Advanced exercise (50 XP base), timed mode, 4 min left of 10 min total:
`totalXP = 50 + floor(50 × 0.5 × 0.4) = 50 + 10 = 60 XP`

---

## Levels

| Level | Name        | XP Range        |
|-------|-------------|-----------------|
| 1     | Apprentice  | 0 – 499         |
| 2     | Developer   | 500 – 1,999     |
| 3     | Senior      | 2,000 – 4,999   |
| 4     | Architect   | 5,000 – 9,999   |
| 5     | Master      | 10,000+         |

Maximum possible XP (all 1,986 exercises): ~50,000 XP.

---

## Badges

### Milestone
| ID                    | Label         | Condition                     |
|-----------------------|---------------|-------------------------------|
| `milestone-1`        | First Steps   | Complete 1 exercise           |
| `milestone-10`       | Consistent    | Complete 10 exercises         |
| `milestone-50`       | Dedicated     | Complete 50 exercises         |
| `milestone-100`      | Expert        | Complete 100 exercises        |
| `milestone-500`      | Master Class  | Complete 500 exercises        |

### Streak
| ID               | Label        | Condition          |
|------------------|--------------|--------------------|
| `streak-3`      | On Fire      | 3-day streak       |
| `streak-7`      | Week Warrior | 7-day streak       |
| `streak-30`     | Month Strong | 30-day streak      |

### Speed (Timed Mode)
| ID              | Label        | Condition                              |
|-----------------|--------------|----------------------------------------|
| `speed-1`      | Speed Run    | Complete 1 exercise in timed mode      |
| `speed-10`     | Blazing Fast | Complete 10 exercises in timed mode    |

### Daily Challenge
| ID               | Label           | Condition                        |
|------------------|-----------------|----------------------------------|
| `daily-1`       | Daily Devotion  | Complete 1 daily challenge       |
| `daily-7`       | Weekly Grind    | Complete 7 daily challenges      |

### Mastery (one per built-in object)
| ID                      | Label             | Condition                              |
|-------------------------|-------------------|----------------------------------------|
| `mastery-{builtIn}`    | {builtIn} Master  | Complete all exercises for that object |

Example: `mastery-array` → "Array Master"

---

## Streaks

- A streak day is counted when at least 1 exercise is completed on a given calendar day.
- `lastActivityDate` is stored as `YYYY-MM-DD` (local date).
- On each completion:
  - If `lastActivityDate === today`: streak unchanged.
  - If `lastActivityDate === yesterday`: `streakDays++`.
  - Otherwise: `streakDays = 1` (reset).
- `lastActivityDate` is always updated to today on completion.

---

## Daily Challenge

- No backend required. Derived from date + user seed.
- `userSeed`: random UUID generated once on first load, stored in `gamificationSlice`. Never changes.
- Algorithm:
  ```ts
  const dateStr = new Date().toLocaleDateString('en-CA') // 'YYYY-MM-DD'
  const hash = simpleHash(dateStr + userSeed)
  const index = Math.abs(hash) % allExercises.length
  const dailyExercise = allExercises[index]
  ```
- `simpleHash`: djb2 or equivalent deterministic string hash.
- Daily challenge is completed when the user completes that specific slug on that date.
- Stored: `lastDailyChallengeDate` + `lastDailyChallengeSlug`.
- Visible as a highlighted card on the Home page.
- If already completed today, card shows "Completed ✓" state.

---

## Timed Mode

**Time limit formula:**
```
base = { beginner: 10, intermediate: 15, advanced: 20 }  (minutes)
bonus = min(5, floor(initialCode.length / 100))           (minutes)
timeLimit = (base + bonus) × 60                           (seconds)
```

**UI behavior:**
1. Toggle "Timed Mode" appears on the exercise detail page (opt-in).
2. Timer starts when the toggle is activated.
3. Countdown shown as `mm:ss`; turns red when ≤ 30 seconds remain.
4. On timeout: exercise marked as `'attempted'`, timeout message shown, user can retry without timed mode (toggle resets).
5. On completion within time: normal completion flow + timed bonus XP.
6. Timer state lives in local React state (`useState` / `useRef`) — not in Redux.

---

## Architecture

### `gamificationSlice`

Location: `src/features/gamification/presentation/store/gamificationSlice.ts`

```ts
interface GamificationState {
  xp: number
  badges: string[]                    // earned badge IDs
  streakDays: number
  lastActivityDate: string | null     // 'YYYY-MM-DD'
  userSeed: string                    // UUID, generated once
  lastDailyChallengeDate: string | null
  lastDailyChallengeSlug: string | null
  timedCompletions: number            // total timed completions (for speed badges)
  dailyChallengeCompletions: number   // total daily completions (for daily badges)
}
```

**Actions:**
- `initGamification()` — initializes `userSeed` if not set
- `awardXp(payload: { xp: number })` — adds XP
- `unlockBadge(payload: { badgeId: string })` — adds badge if not already earned
- `updateStreak(payload: { today: string })` — updates streak/lastActivityDate
- `markDailyComplete(payload: { date: string; slug: string })` — records daily completion

### Redux Listener

Location: `src/shared/lib/store/listeners/gamificationListener.ts`

Triggers on `updateProgress` when `status === 'completed'`. Dispatches:
1. `updateStreak({ today })`
2. Compute XP (base + timed bonus + daily multiplier) → `awardXp({ xp })`
3. Check all badge conditions → `unlockBadge` for each newly earned badge
4. If daily challenge slug matches today → `markDailyComplete`

The listener receives the full Redux state, so it can read both `progress` and `gamification` slices.

### Selectors

Location: `src/features/gamification/presentation/store/selectors.ts`

```ts
selectCurrentLevel(state)      → { level: number; name: string; xpMin: number; xpMax: number }
selectXpProgress(state)        → { current: number; min: number; max: number; pct: number }
selectDailyChallenge(state)    → Exercise
selectIsDailyCompleted(state)  → boolean
selectBadgeProgress(state)     → Array<{ badge: BadgeDef; earned: boolean; progress?: number }>
```

### localStorage Persistence

`gamificationSlice` is added to the existing `localStorageMiddleware`. Uses key `'js-practice-gamification'`.

### New Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `GamificationBar` | `src/features/gamification/presentation/components/` | Navbar: level icon + XP + streak |
| `LevelWidget` | `src/features/gamification/presentation/components/` | Home: XP progress bar + level + recent badges |
| `DailyChallengeCard` | `src/features/gamification/presentation/components/` | Home: highlighted daily challenge |
| `BadgesGallery` | `src/features/gamification/presentation/components/` | Stats page: all badges grid |
| `TimedModeToggle` | `src/features/exercises/presentation/components/` | Exercise: opt-in toggle |
| `CountdownTimer` | `src/features/exercises/presentation/components/` | Exercise: mm:ss countdown |

### File Structure

```
src/features/gamification/
  domain/
    entities/
      index.ts          (BadgeDef, BADGES, LEVELS, XP_TABLE)
  presentation/
    store/
      gamificationSlice.ts
      selectors.ts
    components/
      GamificationBar.tsx
      LevelWidget.tsx
      DailyChallengeCard.tsx
      BadgesGallery.tsx

src/features/exercises/presentation/components/
  TimedModeToggle.tsx
  CountdownTimer.tsx

src/shared/lib/store/listeners/
  gamificationListener.ts   (new listener)
```

---

## Integration Points

| Where | Change |
|-------|--------|
| `src/shared/lib/store/rootReducer.ts` | Add `gamification: gamificationSlice.reducer` |
| `src/shared/lib/store/listeners/index.ts` | Register `gamificationListener` |
| `src/features/progress/infrastructure/middleware/localStorageMiddleware.ts` | Persist `gamification` key |
| `src/shared/components/Navbar.tsx` | Add `<GamificationBar />` |
| `src/features/home/presentation/components/HomeView.tsx` | Add `<DailyChallengeCard />` + `<LevelWidget />` |
| `src/features/exercises/presentation/components/ExerciseRunner.tsx` | Add `<TimedModeToggle />` + `<CountdownTimer />` |
| `src/app/stats/page.tsx` or `StatsView.tsx` | Add `<BadgesGallery />` |
