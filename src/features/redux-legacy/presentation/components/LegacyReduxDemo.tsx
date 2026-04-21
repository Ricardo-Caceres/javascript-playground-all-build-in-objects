'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '@/features/redux-legacy/presentation/store/actions'
import type { LegacyRootState } from '@/features/redux-legacy/presentation/store/reducers'
import { selectLegacyCounterValue } from '@/features/redux-legacy/presentation/store/selectors'
import { useLegacyActionTimeline } from '@/features/redux-legacy/presentation/hooks'
import {
  StatePanel,
  TimelinePanel,
  DevToolsPanel,
} from '@/shared/components/redux-visualization'

type TabType = 'demo' | 'state' | 'timeline' | 'devtools'

export default function LegacyReduxDemo() {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState<TabType>('demo')
  const counter = useSelector((state: LegacyRootState) =>
    selectLegacyCounterValue(state),
  )
  const state = useSelector((state: LegacyRootState) => state)
  const actions = useLegacyActionTimeline()

  return (
    <section className="space-y-6">
      {/* Demo section */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Redux legacy
          </span>
          <h1 className="text-3xl font-semibold text-zinc-950">
            Store con acciones, reducers y selectors separados
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-zinc-600">
            Esta versión usa action types, action creators y reducers manuales con
            {' '}legacy_createStore. Sirve para visualizar la separación clásica de Redux.
          </p>
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl bg-zinc-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm text-zinc-500">Valor actual</p>
            <p className="text-5xl font-semibold text-zinc-950">{counter}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white"
              onClick={() => dispatch(incrementCounter())}
              type="button"
            >
              Incrementar
            </button>
            <button
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
              onClick={() => dispatch(decrementCounter())}
              type="button"
            >
              Decrementar
            </button>
            <button
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950"
              onClick={() => dispatch(resetCounter())}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 text-sm text-zinc-600 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="font-medium text-zinc-950">Piezas clave</p>
            <p>actions</p>
            <p>action-types</p>
            <p>reducers</p>
            <p>selectors</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <p className="font-medium text-zinc-950">Store</p>
            <p>legacy_createStore</p>
            <p>combineReducers</p>
            <p>Provider por página</p>
          </div>
        </div>
      </div>

      {/* Visualization tabs */}
      <div className="space-y-4">
        <div className="flex gap-2 border-b border-zinc-200">
          {(['demo', 'state', 'timeline', 'devtools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-zinc-950 text-zinc-950'
                  : 'text-zinc-500 hover:text-zinc-700'
              }`}
              type="button"
            >
              {tab === 'demo' && 'Demo'}
              {tab === 'state' && 'State'}
              {tab === 'timeline' && 'Timeline'}
              {tab === 'devtools' && 'DevTools'}
            </button>
          ))}
        </div>

        {activeTab === 'state' && <StatePanel state={state} />}
        {activeTab === 'timeline' && (
          <TimelinePanel
            actions={actions}
            onClear={() => dispatch({ type: 'TIMELINE/CLEAR' })}
          />
        )}
        {activeTab === 'devtools' && (
          <DevToolsPanel actions={actions} state={state} />
        )}
      </div>
    </section>
  )
}
