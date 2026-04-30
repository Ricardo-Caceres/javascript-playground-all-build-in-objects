import { useMemo } from 'react'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import type { Exercise } from '@/shared/types/exercises'

interface ExerciseNavigation {
  prevSlug: string | null
  nextSlug: string | null
  currentIndex: number // 1-based
  total: number
}

interface UseExerciseNavigationOptions {
  filteredExercises?: Exercise[]
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
      return { prevSlug: null, nextSlug: null, currentIndex: 0, total: exercises.length }
    }
    return {
      prevSlug: idx > 0 ? exercises[idx - 1].slug : null,
      nextSlug: idx < exercises.length - 1 ? exercises[idx + 1].slug : null,
      currentIndex: idx + 1,
      total: exercises.length,
    }
  }, [objectName, currentSlug, options?.filteredExercises])
}
