'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import {
  selectDailyChallenge,
  selectIsDailyCompleted,
} from '@/features/gamification/presentation/store/selectors'

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner:     'text-green-400',
  intermediate: 'text-yellow-400',
  advanced:     'text-red-400',
}

export function DailyChallengeCard() {
  const daily     = useSelector(selectDailyChallenge)
  const completed = useSelector(selectIsDailyCompleted)

  if (!daily) return null

  return (
    <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm">
        📅 Daily Challenge
        {completed && <span className="ml-auto text-green-400 text-xs">✓ Done!</span>}
      </div>
      <p className="text-white font-medium">{daily.title}</p>
      <div className="flex items-center gap-2 text-xs">
        <span className={DIFFICULTY_COLOR[daily.difficulty] ?? 'text-white'}>
          {daily.difficulty}
        </span>
        <span className="text-white/40">{daily.builtIn}</span>
      </div>
      {!completed && (
        <Link
          href={'/exercise/' + daily.slug}
          className="mt-1 inline-block rounded-lg bg-yellow-400 text-black text-xs font-bold px-3 py-1 w-fit hover:bg-yellow-300 transition-colors"
        >
          Start →
        </Link>
      )}
    </div>
  )
}
