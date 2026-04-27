'use client'
import { Link } from '@/i18n/navigation'
import type { LearningPathSection } from '@/features/learning-path/infrastructure/data/learningPathConfig'
import type { TopicProgress } from '../hooks/useLearningPathProgress'

interface Props {
  section: LearningPathSection
  progress: TopicProgress
}

export function TopicProgressCard({ section, progress }: Props) {
  const { total, completed, pct } = progress

  return (
    <Link
      href={`/exercises/${section.topicKey}`}
      className="block bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-emerald-600 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {section.title}
        </span>
        <span className="ml-auto text-xs text-zinc-400">
          {completed}/{total}
        </span>
      </div>
      <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{section.description}</p>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div
          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-zinc-500">{pct}%</div>
    </Link>
  )
}
