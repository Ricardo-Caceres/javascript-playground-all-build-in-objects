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
