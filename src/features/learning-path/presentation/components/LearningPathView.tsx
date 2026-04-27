'use client'
import { useLearningPathProgress } from '../hooks/useLearningPathProgress'
import { TopicProgressCard } from './TopicProgressCard'
import { learningPath } from '@/features/learning-path/infrastructure/data/learningPathConfig'

export function LearningPathView() {
  const progressMap = useLearningPathProgress()

  // Compute overall stats
  const allValues = Array.from(progressMap.values())
  const totalExercises = allValues.reduce((sum, p) => sum + p.total, 0)
  const totalCompleted = allValues.reduce((sum, p) => sum + p.completed, 0)
  const overallPct = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">🗺️ JavaScript Learning Path</h1>
        <p className="text-zinc-400 mb-6">Based on roadmap.sh/javascript — from fundamentals to advanced topics</p>

        {/* Overall progress bar */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-zinc-300 font-medium">Overall Progress</span>
            <span className="text-emerald-400 font-bold">{totalCompleted}/{totalExercises} exercises</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-3">
            <div
              className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <div className="mt-1 text-right text-sm text-zinc-500">{overallPct}% complete</div>
        </div>
      </div>

      {/* Topic cards sorted by order */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...learningPath].sort((a, b) => a.order - b.order).map((section) => {
          const progress = progressMap.get(section.topicKey) ?? { total: 0, completed: 0, pct: 0 }
          return (
            <TopicProgressCard key={section.topicKey} section={section} progress={progress} />
          )
        })}
      </div>
    </div>
  )
}
