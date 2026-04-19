'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '@/shared/lib/store'
import { ExamSetup } from './ExamSetup'
import { ExamRunner } from './ExamRunner'
import { ExamResults } from './ExamResults'

export function ExamView() {
  const status = useSelector((s: RootState) => s.exam.status)

  if (status === 'running') return <ExamRunner />
  if (status === 'finished') return <ExamResults />
  return <ExamSetup />
}
