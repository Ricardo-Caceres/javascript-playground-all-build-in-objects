import { allExercises } from '../data'
import { topicMetaMap } from '../data/topicMeta'
import { roadmapConfig } from '../data/roadmapConfig'
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

/**
 * Returns up to maxPerLevel exercises per difficulty for the given topic.
 *
 * When a curated config exists for the topic (roadmapConfig), exercises are
 * returned in importance order (most used → least used) so the roadmap guides
 * learners from fundamentals to advanced concepts.
 *
 * Topics without a curated config fall back to data-file order (alphabetical).
 */
export function getRoadmapExercises(
  objectName: string,
  maxPerLevel = 15,
): Record<Difficulty, Exercise[]> {
  const all = getAllExercisesByObject(objectName)
  const cap = Math.max(0, maxPerLevel)
  const config = roadmapConfig[objectName.toLowerCase()]

  if (config) {
    const pick = (d: Difficulty): Exercise[] => {
      const methodOrder = config[d]
      const result: Exercise[] = []
      for (const methodName of methodOrder) {
        const norm = methodName.toLowerCase()
        const matches = all.filter(
          (e) =>
            e.difficulty === d &&
            (e.method?.split('.').pop()?.toLowerCase() ?? '') === norm,
        )
        result.push(...matches)
        if (result.length >= cap) break
      }
      return result.slice(0, cap)
    }
    return {
      beginner: pick('beginner'),
      intermediate: pick('intermediate'),
      advanced: pick('advanced'),
    }
  }

  // Fallback: first N exercises per difficulty in data-file order
  const pick = (d: Difficulty) =>
    all.filter((e) => e.difficulty === d).slice(0, cap)
  return {
    beginner: pick('beginner'),
    intermediate: pick('intermediate'),
    advanced: pick('advanced'),
  }
}
