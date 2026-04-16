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
  emoji: string        // Unicode emoji character, e.g. '🔥'
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

export const LEVELS: readonly Level[] = [
  { id: 'apprentice', name: 'Apprentice', minXp: 0,     maxXp: 499   },
  { id: 'developer',  name: 'Developer',  minXp: 500,   maxXp: 1999  },
  { id: 'senior',     name: 'Senior',     minXp: 2000,  maxXp: 4999  },
  { id: 'architect',  name: 'Architect',  minXp: 5000,  maxXp: 9999  },
  { id: 'master',     name: 'Master',     minXp: 10000, maxXp: null  },
]

export const XP_TABLE: Readonly<Record<Difficulty, number>> = {
  beginner:     10,
  intermediate: 25,
  advanced:     50,
}

export const STATIC_BADGES: readonly BadgeDef[] = [
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
export function getDailyExercise(
  userSeed: string,
  exercises: Exercise[],
  date: string = getTodayStr(),
): Exercise {
  if (exercises.length === 0) throw new Error('getDailyExercise: exercises array must not be empty')
  const index = simpleHash(date + userSeed) % exercises.length
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
    id: `mastery-${builtIn}`,
    name: `${builtIn} Master`,
    description: `Complete all ${builtIn} exercises`,
    emoji: '🏅',
    category: 'mastery',
  }
}

/** Look up any badge definition by ID (works for both static and mastery badges). */
export function getBadgeDef(id: string): BadgeDef | undefined {
  if (id.startsWith('mastery-')) {
    const builtIn = id.slice('mastery-'.length)
    return getMasteryBadgeDef(builtIn)
  }
  return STATIC_BADGES.find((b) => b.id === id)
}
