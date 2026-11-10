import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import {
  getAvailableObjects,
  getAllExercisesByObject,
} from '@/features/exercises/infrastructure/repositories/exerciseRepository'
import ExerciseListView from '@/features/exercises/presentation/components/ExerciseListView'

interface Props {
  params: Promise<{ locale: string; object: string }>
}

// Prerender every object list at build time (locale comes from the parent layout)
export function generateStaticParams() {
  return getAvailableObjects().map((object) => ({ object: object.toLowerCase() }))
}

export default async function ExerciseListPage({ params }: Props) {
  const { locale, object } = await params
  setRequestLocale(locale)
  const exercises = getAllExercisesByObject(object)
  if (exercises.length === 0) notFound()
  return (
    <Suspense fallback={null}>
      <ExerciseListView objectName={object} />
    </Suspense>
  )
}
