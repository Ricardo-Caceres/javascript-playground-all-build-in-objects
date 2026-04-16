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
