# Exercise Sidebar Filters Design Spec

**Date:** 2026-04-23  
**Feature:** Difficulty-based filtering in exercise sidebar with visual indicators  
**Component:** `ExerciseSidebar.tsx`  
**Status:** Design approved, ready for implementation

---

## 1. Overview

Enhance the exercise sidebar (left panel in exercise detail view) with:
- Difficulty-based filtering (All, Beginner, Intermediate, Advanced)
- Dynamic exercise counts per difficulty level
- Visual color indicators for difficulty levels
- URL-persisted filter state

Users will quickly filter their exercise list by skill level and see at a glance which exercises match their current learning level.

---

## 2. User Stories

**Story 1: Filter exercises by difficulty**
- As a learner, I want to filter exercises by difficulty level
- So that I can focus on exercises at my current skill level
- Acceptance criteria:
  - Filter buttons are visible in the sidebar header
  - Clicking a difficulty level filters the list immediately
  - "All Difficulties" button shows all exercises
  - Filter state persists in URL query params

**Story 2: See difficulty counts**
- As a learner, I want to see how many exercises exist at each difficulty
- So that I can understand the scope and distribution
- Acceptance criteria:
  - Each filter button shows count: "Beginner (12)"
  - Counts update when exercises are added/removed
  - Counts reflect the current object's exercises only

**Story 3: Visual difficulty indicators**
- As a learner, I want to see a visual indicator of each exercise's difficulty
- So that I can quickly identify which exercises are appropriate for me
- Acceptance criteria:
  - Each exercise list item has a colored left border or indicator
  - Green = Beginner, Yellow = Intermediate, Red = Advanced
  - Visual indicator is consistent with color scheme elsewhere in the app

---

## 3. Technical Architecture

### 3.1 Data Flow

```
ExerciseSidebar receives:
├── objectName: string (e.g., "Array")
├── currentSlug: string (e.g., "array-map")
└── progressMap: from Redux

Sidebar generates:
├── Difficulty filter state (from URL query params)
├── Filtered exercise list (based on filter + current object)
└── Render UI with:
    ├── Filter buttons + counts
    └── Filtered exercise list with color indicators
```

### 3.2 State Management

- **Difficulty filter state:** URL query parameter `difficulty` (same pattern as ExerciseListView)
- **Persistence:** Browser URL, no Redux changes needed
- **Sync behavior:** Filter state is independent per object (Array, String, etc.)

### 3.3 Components Affected

**Primary:** `ExerciseSidebar.tsx`
- Add difficulty filter buttons below progress header
- Add filter logic to existing exercise map
- Add visual difficulty indicators to exercise list items

**Related (no changes):** `ExerciseDetailView.tsx`, `ExerciseListView.tsx`
- These already use URL params for filters
- Sidebar will follow same pattern for consistency

---

## 4. UI Layout

### 4.1 Sidebar Structure (top to bottom)

```
┌──────────────────────────────────────────┐
│ Header Section                           │
├──────────────────────────────────────────┤
│ [Array]                                  │
│ 5/226 completed                          │
│ [████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░] │ (progress bar)
├──────────────────────────────────────────┤
│ Filter Section (NEW)                     │
├──────────────────────────────────────────┤
│ [All] [Beginner (12)] [Inter (8)]        │
│ [Advanced (5)]                           │
├──────────────────────────────────────────┤
│ Description Section (collapsible)        │
├──────────────────────────────────────────┤
│ What is Array?                           │
│ [description text...]                    │
├──────────────────────────────────────────┤
│ Exercise List Section                    │
├──────────────────────────────────────────┤
│ ✓ Array.from()                           │ ← green left border
│ ▶ Array() — create...                    │ ← yellow left border
│ ○ Array[Symbol.iterator]                 │ ← red left border
│ ✓ Array.prototype.at()                   │ ← green left border
└──────────────────────────────────────────┘
```

### 4.2 Filter Button Styling

- **Active button:** `bg-emerald-700 text-white` (matches existing)
- **Inactive button:** `border border-zinc-700 text-zinc-400` (matches existing)
- **Layout:** Horizontal flex, wrapped on new lines if needed
- **Text:** "All Difficulties", "Beginner (12)", "Intermediate (8)", "Advanced (5)"

### 4.3 Visual Difficulty Indicators

- **Implementation:** Left border on exercise link
- **Colors:**
  - Beginner: `border-l-4 border-l-emerald-500`
  - Intermediate: `border-l-4 border-l-yellow-500`
  - Advanced: `border-l-4 border-l-red-500`
- **Positioning:** Left side of exercise list item (existing padding adjusted)

---

## 5. Implementation Details

### 5.1 Filter Logic

```typescript
// Difficulty levels
type Difficulty = 'beginner' | 'intermediate' | 'advanced'
const VALID_DIFFS = ['beginner', 'intermediate', 'advanced'] as const

// Extract from URL
const rawDiff = searchParams.get('difficulty')
const selectedDifficulty = VALID_DIFFS.includes(rawDiff) 
  ? (rawDiff as Difficulty) 
  : null

// Filter exercises
const filtered = exercises.filter(ex => 
  selectedDifficulty === null || ex.difficulty === selectedDifficulty
)

// Calculate counts (total, not filtered)
const counts = {
  all: exercises.length,
  beginner: exercises.filter(e => e.difficulty === 'beginner').length,
  intermediate: exercises.filter(e => e.difficulty === 'intermediate').length,
  advanced: exercises.filter(e => e.difficulty === 'advanced').length,
}
```

### 5.2 URL Query Param Handling

- **Parameter name:** `difficulty` (e.g., `?difficulty=beginner`)
- **Clearing:** When clicking "All Difficulties", remove the param from URL
- **Behavior:** Use `router.replace()` with `{ scroll: false }` to avoid scroll jump
- **Namespace:** Each object's exercises maintain independent filter state

### 5.3 Color Mapping

```typescript
const difficultyColors = {
  beginner: 'border-l-4 border-l-emerald-500',
  intermediate: 'border-l-4 border-l-yellow-500',
  advanced: 'border-l-4 border-l-red-500',
}
```

---

## 6. File Changes

### Files Modified

**`ExerciseSidebar.tsx`**
- Import `useSearchParams` and `useRouter` from `next/navigation`
- Add difficulty counts calculation
- Add filter button section in JSX
- Add filter state extraction from URL
- Add `setFilter()` function to update URL params
- Add difficulty color borders to exercise list items
- Adjust list item padding to accommodate left border

**Estimated changes:** ~80 lines added/modified (mainly JSX and filtering logic)

---

## 7. Testing Considerations

- Verify filter buttons toggle correctly
- Verify URL params update on filter click
- Verify filter persists when navigating between exercises
- Verify counts are accurate
- Verify visual indicators display correct colors
- Verify all exercises display when "All" is selected
- Verify scroll-to-active still works with filtering

---

## 8. Edge Cases

1. **No exercises at a difficulty level:** Show count as 0, button disabled? (Decision: TBD by dev)
2. **Filter with no matches:** Show "No exercises found" message
3. **Back button behavior:** URL params handled correctly by browser back button
4. **Mobile/small screens:** Filter buttons wrap, sidebar remains scrollable

---

## 9. Accessibility

- Filter buttons use `aria-pressed` to indicate active state (existing pattern)
- Maintain keyboard navigation between buttons
- Color not the only indicator of difficulty (text label is primary)
- Left border used as visual enhancement, not required for understanding

---

## 10. Performance

- No new API calls required
- Filter calculation is O(n) on exercise list (acceptable, typically < 50 exercises)
- URL params already supported by Next.js routing
- No additional Redux state needed

---

## 11. Future Enhancements (Out of scope)

- Combining filters (show Beginner AND Completed)
- Saving filter preferences to localStorage
- Filter history/recent filters
- Search + filter combination in sidebar

---

## Summary

Add difficulty-based filtering to exercise sidebar with visual indicators. Follows existing patterns from ExerciseListView for consistency. Improves user experience by helping learners focus on appropriate difficulty levels.

**Estimated implementation time:** 30-45 minutes  
**Complexity:** Low (straightforward filtering and UI updates)  
**Risk:** Low (isolated to sidebar component, no breaking changes)
