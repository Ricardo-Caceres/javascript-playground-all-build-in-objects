import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { allExercises } from '@/features/exercises/infrastructure/data'
import { learningPath } from '@/features/learning-path/infrastructure/data/learningPathConfig'

export interface TopicProgress {
  total: number
  completed: number
  pct: number
}

export function useLearningPathProgress(): Map<string, TopicProgress> {
  const progressState = useSelector((state: RootState) => state.progress.exercises)

  return useMemo(() => {
    const result = new Map<string, TopicProgress>()

    for (const section of learningPath) {
      const topicExercises = allExercises.filter(
        (ex) => ex.builtIn?.toLowerCase() === section.topicKey
      )
      const total = topicExercises.length
      const completed = topicExercises.filter(
        (ex) => progressState[ex.slug]?.status === 'completed'
      ).length
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0
      result.set(section.topicKey, { total, completed, pct })
    }

    return result
  }, [progressState])
}
