import { allExercises } from '../data'
import { topicMetaMap } from '../data/topicMeta'
import type { Exercise, TopicMeta, Difficulty } from '@/shared/types/exercises'

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

export function getTopicMeta(objectName: string): TopicMeta | undefined {
  return topicMetaMap[objectName.toLowerCase()]
}

// Returns up to maxPerLevel exercises per difficulty, in data-file order
export function getRoadmapExercises(
  objectName: string,
  maxPerLevel = 15,
): Record<Difficulty, Exercise[]> {
  const all = getAllExercisesByObject(objectName)
  const pick = (d: Difficulty) =>
    all.filter((e) => e.difficulty === d).slice(0, Math.max(0, maxPerLevel))
  return {
    beginner: pick('beginner'),
    intermediate: pick('intermediate'),
    advanced: pick('advanced'),
  }
}
