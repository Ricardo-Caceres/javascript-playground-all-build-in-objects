import { useMemo } from 'react'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'

interface ExerciseNavigation {
  prevSlug: string | null
  nextSlug: string | null
  currentIndex: number // 1-based
  total: number
}

export function useExerciseNavigation(
  objectName: string,
  currentSlug: string,
): ExerciseNavigation {
  return useMemo(() => {
    const exercises = getAllExercisesByObject(objectName)
    const idx = exercises.findIndex((e) => e.slug === currentSlug)
    if (idx === -1) {
      return { prevSlug: null, nextSlug: null, currentIndex: 0, total: exercises.length }
    }
    return {
      prevSlug: idx > 0 ? exercises[idx - 1].slug : null,
      nextSlug: idx < exercises.length - 1 ? exercises[idx + 1].slug : null,
      currentIndex: idx + 1,
      total: exercises.length,
    }
  }, [objectName, currentSlug])
}
