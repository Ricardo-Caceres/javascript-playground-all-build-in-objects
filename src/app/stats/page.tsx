import type { Metadata } from 'next'
import { StatsView } from '@/features/stats/presentation/components/StatsView'

export const metadata: Metadata = {
  title: 'Stats — JS Built-ins Practice',
}

export default function StatsPage() {
  return <StatsView />
}
