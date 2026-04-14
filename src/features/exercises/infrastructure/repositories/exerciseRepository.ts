import { allExercises } from '../data'
import type { Exercise } from '@/shared/types/exercises'

export function getExerciseBySlug(slug: string): Exercise | undefined {
  return allExercises.find((e) => e.slug === slug)
}

export function getAllExercisesByObject(objectName: string): Exercise[] {
  return allExercises.filter(
    (e) => e.builtIn.toLowerCase() === objectName.toLowerCase(),
  )
}

export function getAvailableObjects(): string[] {
  return [...new Set(allExercises.map((e) => e.builtIn))]
}
