import { allExercises } from '../data'
import { topicMetaMap } from '../data/topicMeta'
import type { Exercise, TopicMeta } from '@/shared/types/exercises'

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
