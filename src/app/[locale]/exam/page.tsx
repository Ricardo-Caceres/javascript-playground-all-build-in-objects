import type { Metadata } from 'next'
import { ExamView } from '@/features/exam/presentation/components/ExamView'

export const metadata: Metadata = {
  title: 'Exam Mode — JS Built-ins Practice',
}

export default function ExamPage() {
  return <ExamView />
}
