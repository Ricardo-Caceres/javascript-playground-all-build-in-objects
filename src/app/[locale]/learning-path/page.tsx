import type { Metadata } from 'next'
import { LearningPathView } from '@/features/learning-path/presentation/components/LearningPathView'

export const metadata: Metadata = {
  title: 'JavaScript Learning Path — JS Built-ins Practice',
}

export default function LearningPathPage() {
  return <LearningPathView />
}
