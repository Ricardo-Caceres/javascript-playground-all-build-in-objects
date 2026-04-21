# Features Status

Quick reference of implemented and pending features.

## ✅ Implemented

### Filtering & Search
- **Status filter**: all / not-started / attempted / completed (URL param `?status=`)
- **Difficulty filter**: all / beginner / intermediate / advanced (URL param `?difficulty=`)
- **Progress bar**: shows X/N completed per topic in the exercise list header
- _Keyword text search not yet implemented_
- See spec: `docs/superpowers/specs/2026-04-16-filtering-search-design.md`

### Progress Tracking & Gamification
- XP per exercise (weighted by difficulty)
- Daily streaks with persistence
- Badges / achievements (streak milestones, topic mastery, speed runs)
- Overall XP level displayed in the UI
- Per-exercise completion status saved to localStorage via Redux persist
- See spec: `docs/superpowers/specs/2026-04-16-gamification-design.md`

### Topic Descriptions
- Every topic has a bilingual (EN/ES) description shown in the sidebar
- See spec: `docs/superpowers/specs/2026-04-21-topic-descriptions-design.md`

### Usage Examples
- Every exercise has a bilingual collapsible code+explanation panel
- Covers all 59 topics / ~414 exercise files
- See spec: `docs/superpowers/specs/2026-04-21-topic-descriptions-design.md`

### Internationalization (i18n)
- EN/ES language switcher, all UI strings translated
- See spec: `docs/superpowers/specs/2026-04-17-i18n-design.md`

### Exam Mode
- Timed exam with configurable topic + difficulty + question count
- Results screen with score breakdown
- See spec: `docs/superpowers/specs/2026-04-19-exam-mode-design.md`

### Mobile Layout
- Responsive design for exercise list, detail view, and exam flow
- See specs: `2026-04-19-mobile-exercise-layout-design.md`, `2026-04-20-mobile-improvements-design.md`

---

## ⚠️ Partially Implemented — Left as-is

### Difficulty Progression (unlocks)
- **What exists**: Badge unlocks when completing streaks or mastering topics
- **What's missing**: No gating — users can access any difficulty at any time regardless of progress
- **Decision**: Intentionally left open; a learning platform benefits from free exploration

### Hints UX
- **What exists**: All hints shown at once inside a collapsible `<details>` block
- **What's missing**: Progressive reveal (one hint at a time, optionally with an XP cost)
- **Decision**: Functional but could be improved in a future iteration

---

## 🔲 Not yet implemented

- **Keyword search** — search exercises by title or description text
- **User notes** — per-exercise freeform notes that persist
- **Onboarding** — guided first-time user experience
