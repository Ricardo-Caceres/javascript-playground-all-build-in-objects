import { notFound } from 'next/navigation'
import { getExerciseBySlug } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { ExerciseDetailView } from '@/features/exercises/presentation/components/ExerciseDetailView'

interface Props {
  params: Promise<{ object: string; slug: string }>
}

export default async function ExerciseDetailPage({ params }: Props) {
  const { slug } = await params
  const exercise = getExerciseBySlug(slug)
  if (!exercise) notFound()
  return <ExerciseDetailView exercise={exercise} />
}
