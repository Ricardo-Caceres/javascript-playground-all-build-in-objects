import ReduxToolkitDemo from '@/features/redux-toolkit/presentation/components/ReduxToolkitDemo'
import { ReduxToolkitProvider } from '@/features/redux-toolkit/presentation/providers/ReduxToolkitProvider'

export default function ReduxToolkitPage() {
  return (
    <main className="min-h-screen bg-emerald-50 px-6 py-16 text-zinc-950">
      <div className="mx-auto max-w-5xl space-y-8">
        <ReduxToolkitProvider>
          <ReduxToolkitDemo />
        </ReduxToolkitProvider>
      </div>
    </main>
  )
}
