import { useMemo } from 'react'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { learningPath } from '@/features/learning-path/infrastructure/data/learningPathConfig'
import type { Exercise } from '@/shared/types/exercises'

interface NextTopic {
  topicKey: string
  title: string
  firstExerciseSlug: string | null
}

interface ExerciseNavigation {
  prevSlug: string | null
  nextSlug: string | null
  currentIndex: number // 1-based
  total: number
  nextTopic: NextTopic | null // when at end of topic in learning path
}

interface UseExerciseNavigationOptions {
  filteredExercises?: Exercise[]
}

function getNextLearningPathTopic(currentTopicKey: string): NextTopic | null {
  const currentTopic = learningPath.find((t) => t.topicKey === currentTopicKey)
  if (!currentTopic) return null

  const nextTopic = learningPath.find((t) => t.order === currentTopic.order + 1)
  if (!nextTopic) return null

  // Find first exercise of next topic
  const allExercises = getAllExercisesByObject(nextTopic.topicKey)
  const firstExercise = allExercises[0]

  return {
    topicKey: nextTopic.topicKey,
    title: nextTopic.title,
    firstExerciseSlug: firstExercise?.slug ?? null,
  }
}

export function useExerciseNavigation(
  objectName: string,
  currentSlug: string,
  options?: UseExerciseNavigationOptions,
): ExerciseNavigation {
  return useMemo(() => {
    const exercises = options?.filteredExercises ?? getAllExercisesByObject(objectName)
    const idx = exercises.findIndex((e) => e.slug === currentSlug)
    if (idx === -1) {
      return { prevSlug: null, nextSlug: null, currentIndex: 0, total: exercises.length, nextTopic: null }
    }

    const isLastExercise = idx === exercises.length - 1
    const nextTopic = isLastExercise ? getNextLearningPathTopic(objectName.toLowerCase()) : null

    return {
      prevSlug: idx > 0 ? exercises[idx - 1].slug : null,
      nextSlug: idx < exercises.length - 1 ? exercises[idx + 1].slug : null,
      currentIndex: idx + 1,
      total: exercises.length,
      nextTopic,
    }
  }, [objectName, currentSlug, options?.filteredExercises])
}
