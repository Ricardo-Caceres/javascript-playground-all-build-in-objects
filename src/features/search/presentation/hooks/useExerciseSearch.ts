import { useMemo } from 'react'
import { allExercises } from '@/features/exercises/infrastructure/data'
import type { Exercise } from '@/shared/types/exercises'

const MAX_RESULTS = 8

export function useExerciseSearch(query: string): Exercise[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allExercises.slice(0, MAX_RESULTS)
    return allExercises
      .filter(
        (ex) =>
          ex.title.toLowerCase().includes(q) ||
          ex.builtIn.toLowerCase().includes(q) ||
          ex.description.toLowerCase().includes(q),
      )
      .slice(0, MAX_RESULTS)
  }, [query])
}
