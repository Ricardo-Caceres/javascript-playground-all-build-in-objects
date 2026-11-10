import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import {
  getAvailableObjects,
  getAllExercisesByObject,
  getExerciseBySlug,
} from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { getLocalizedExercise } from '@/i18n/exerciseTranslations'
import { ExerciseDetailView } from '@/features/exercises/presentation/components/ExerciseDetailView'

interface Props {
  params: Promise<{ locale: string; object: string; slug: string }>
}

// Prerender every exercise at build time (locale comes from the parent layout)
export function generateStaticParams() {
  return getAvailableObjects().flatMap((object) =>
    getAllExercisesByObject(object).map((exercise) => ({
      object: object.toLowerCase(),
      slug: exercise.slug,
    })),
  )
}

export default async function ExerciseDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const exercise = getExerciseBySlug(slug)
  if (!exercise) notFound()
  return (
    <Suspense fallback={null}>
      <ExerciseDetailView exercise={getLocalizedExercise(exercise, locale)} />
    </Suspense>
  )
}
