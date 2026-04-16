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
