import { notFound } from 'next/navigation'
import { getAllExercisesByObject } from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import { ExerciseListView } from '@/features/exercises/presentation/components/ExerciseListView'

interface Props {
  params: Promise<{ object: string }>
}

export default async function ExerciseListPage({ params }: Props) {
  const { object } = await params
  const exercises = getAllExercisesByObject(object)
  if (exercises.length === 0) notFound()
  return <ExerciseListView objectName={object} exercises={exercises} />
}
