'use client'
import { useSelector } from 'react-redux'
import { selectAllBadges } from '@/features/gamification/presentation/store/selectors'
import type { BadgeDef } from '@/features/gamification/domain/entities'

function BadgeCard({ badge, locked }: { badge: BadgeDef; locked: boolean }) {
  return (
    <div
      title={badge.description}
      className={
        'flex flex-col items-center gap-1 rounded-xl border p-3 text-center text-xs transition-all ' +
        (locked
          ? 'border-white/10 bg-white/5 opacity-40 grayscale'
          : 'border-yellow-400/30 bg-yellow-400/5')
      }
    >
      <span className="text-2xl">{badge.emoji}</span>
      <span className={locked ? 'text-white/40' : 'text-white font-medium'}>
        {badge.name}
      </span>
    </div>
  )
}

export function BadgesGallery() {
  const { earned, locked } = useSelector(selectAllBadges)

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-white">
        Badges
        <span className="ml-2 text-sm text-white/40">
          {earned.length} / {earned.length + locked.length}
        </span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {earned.map((b) => <BadgeCard key={b.id} badge={b} locked={false} />)}
        {locked.map((b) => <BadgeCard key={b.id} badge={b} locked={true}  />)}
      </div>
    </section>
  )
}
