import LegacyReduxDemo from '@/features/redux-legacy/presentation/components/LegacyReduxDemo'
import { LegacyReduxProvider } from '@/features/redux-legacy/presentation/providers/LegacyReduxProvider'

export default function ReduxLegacyPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-5xl space-y-8">
        <LegacyReduxProvider>
          <LegacyReduxDemo />
        </LegacyReduxProvider>
      </div>
    </main>
  )
}
