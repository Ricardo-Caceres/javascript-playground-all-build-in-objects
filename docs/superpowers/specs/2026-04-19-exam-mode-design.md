# Exam Mode — Design Spec

**Date:** 2026-04-19  
**Status:** Approved

---

## Problem

The app has 2,000+ exercises for free practice, but no structured way to simulate a timed exam or interview session. Users can't easily test their knowledge under light pressure or get a summary score.

## Proposed Solution

A dedicated `/exam` route with three phases driven by a Redux `examSlice`: **Setup → Runner → Results**. The flow reuses the existing `ExerciseRunner` component for code execution, adding only the navigation shell and state management on top.

---

## Architecture

### Route
`/[locale]/exam` — single page, view determined by `exam.status` in Redux:

| Status | Component shown |
|--------|----------------|
| `idle` | `ExamSetup` |
| `running` | `ExamRunner` |
| `finished` | `ExamResults` |

### New files
```
src/features/exam/
  presentation/
    store/
      examSlice.ts          # Redux slice
    components/
      ExamSetup.tsx          # Setup form
      ExamRunner.tsx         # Exercise navigator shell
      ExamResults.tsx        # Results screen
      ExamProgressBar.tsx    # Top bar: exercise N/total + timer
src/app/[locale]/exam/
  page.tsx                  # Route entry point
```

### Modified files
- `src/shared/lib/store/index.ts` — register `examReducer`
- `src/shared/components/Navbar.tsx` — add "Exam" link
- `messages/en.json` + `messages/es.json` — add `exam` namespace

---

## Redux State (`examSlice`)

```ts
type ExamStatus = 'idle' | 'running' | 'finished'
type ExamResult = 'passed' | 'failed' | 'skipped'

interface ExamState {
  status: ExamStatus
  exercises: Exercise[]                    // randomly selected for this session
  currentIndex: number
  results: Record<string, ExamResult>      // slug → result
  startTime: number | null                 // Date.now() when started
  endTime:   number | null                 // Date.now() when finished
}
```

**Actions:**
- `startExam(exercises: Exercise[])` — sets status to `running`, resets results, records `startTime`
- `markResult(payload: { slug: string; result: ExamResult })` — records result for a slug
- `nextExercise()` — increments `currentIndex`; if at end, transitions to `finished` + records `endTime`
- `finishExam()` — force-finishes regardless of index (for "end exam early" button)
- `resetExam()` — returns to `idle`, clears all state

---

## Setup Screen (`ExamSetup`)

Fields:
1. **Topic** — dropdown of all unique `builtIn` values from `allExercises`, plus "Any"
2. **Difficulty** — segmented control: Beginner / Intermediate / Advanced / Mixed
3. **Count** — segmented control: 5 / 10 / 20

On submit: filter `allExercises` by topic+difficulty, shuffle, take first N. If fewer than N available, use all available (show a note). Dispatch `startExam(selectedExercises)`.

Validation: disable "Start" if no exercises match the selected filters, showing a message.

---

## Runner Screen (`ExamRunner`)

**Top bar (`ExamProgressBar`):**
- Left: `Exercise 3 / 10`
- Center: `⏱ 04:32` (elapsed time, counts up, reference only — no penalty at end)
- Right: `End Exam` button (triggers `finishExam()` after confirmation)

**Main area:** Renders existing `ExerciseRunner` component for the current exercise (`exercises[currentIndex]`). Full functionality: code editor, run tests, hints, show solution.

**Bottom actions:**
- `Next →` button: enabled when all 5 tests pass. Dispatches `markResult(slug, 'passed')` then `nextExercise()`.
- `Skip` button: always available. Dispatches `markResult(slug, 'skipped')` then `nextExercise()`.
- If tests fail and user clicks Next: not possible — button stays disabled until tests pass.
- If user clicks "Show Solution" and then submits: marked as `passed` (solution visibility doesn't affect scoring).

**Auto-advance:** When tests all pass, the Next button highlights to draw attention, but does not auto-advance (user controls pacing).

---

## Results Screen (`ExamResults`)

**Summary header:**
```
7 / 10  ✓ passed   |   +350 XP   |   08:14
```
- Score: count of `passed` results
- XP: sum of XP from passed exercises (already tracked by gamification slice) + **+50 bonus XP** for completing the exam (dispatched on `finishExam` only if at least 1 exercise passed)
- Time: `endTime - startTime` formatted as `mm:ss`

**Exercise list:** Each exercise shown with:
- Title
- Result icon: ✓ (passed) / ✗ (failed — skipped without passing) / → (skipped)
- Link to open the exercise in normal mode

**Actions:**
- `Review Failed` — only shown if any results are `failed` or `skipped`. Dispatches `startExam(failedExercises)`.
- `New Exam` — dispatches `resetExam()`, returns to setup.

---

## XP Integration

Regular per-exercise XP is already awarded by the gamification/progress listener when tests pass inside `ExerciseRunner`. No changes needed for that.

The **+50 bonus XP** for exam completion is dispatched from `ExamResults` on mount (once, guarded by a ref to avoid double-dispatch) via the existing `addXP` action from `gamificationSlice`.

---

## i18n

New `exam` namespace added to both `en.json` and `es.json`:

```json
"exam": {
  "title": "Exam Mode",
  "setup": { "topic": "Topic", "difficulty": "Difficulty", "count": "Exercises", "start": "Start Exam", "any": "Any", "mixed": "Mixed", "noExercises": "No exercises match these filters" },
  "runner": { "exercise": "Exercise", "of": "of", "elapsed": "Elapsed", "next": "Next →", "skip": "Skip", "endExam": "End Exam", "endConfirm": "End the exam now? Your current progress will be saved." },
  "results": { "title": "Results", "passed": "passed", "xpEarned": "XP earned", "reviewFailed": "Review Failed", "newExam": "New Exam", "perfect": "Perfect score!" }
}
```

---

## Out of Scope

- Persisting exam history across sessions
- Leaderboards or sharing results
- Exam "presets" (saved configurations)
- Randomizing order of tests within an exercise
