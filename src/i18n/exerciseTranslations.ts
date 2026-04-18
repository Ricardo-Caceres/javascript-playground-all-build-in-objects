import type { Exercise } from '@/shared/types/exercises'
import esExercises from '../../messages/exercises/es.json'

interface ExerciseTranslation {
  title?: string
  description?: string
  hints?: string[]
  tests?: Array<{ description?: string }>
}

const ALL_TRANSLATIONS: Record<string, Record<string, ExerciseTranslation>> = {
  es: esExercises as Record<string, ExerciseTranslation>,
}

export function getLocalizedExercise(exercise: Exercise, locale: string): Exercise {
  const t = ALL_TRANSLATIONS[locale]?.[exercise.slug]
  if (!t) return exercise
  // A broken description ends with a lone backslash (translation truncation artifact)
  const description =
    t.description && !t.description.endsWith('\\') ? t.description : exercise.description
  return {
    ...exercise,
    title: t.title ?? exercise.title,
    description,
    hints: t.hints ?? exercise.hints,
    tests: exercise.tests.map((test, i) => ({
      ...test,
      description: t.tests?.[i]?.description ?? test.description,
    })),
  }
}
