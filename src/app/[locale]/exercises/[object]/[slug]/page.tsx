import { notFound } from 'next/navigation'
import { getExerciseBySlug } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { getLocalizedExercise } from '@/i18n/exerciseTranslations'
import { ExerciseDetailView } from '@/features/exercises/presentation/components/ExerciseDetailView'

interface Props {
  params: Promise<{ locale: string; object: string; slug: string }>
}

export default async function ExerciseDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const exercise = getExerciseBySlug(slug)
  if (!exercise) notFound()
  return <ExerciseDetailView exercise={getLocalizedExercise(exercise, locale)} />
}
