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
