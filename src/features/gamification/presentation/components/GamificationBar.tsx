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
