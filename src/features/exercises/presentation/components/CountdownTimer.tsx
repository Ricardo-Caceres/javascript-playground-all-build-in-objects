interface CountdownTimerProps {
  timeLeft: number   // seconds remaining
  total: number      // total seconds (used to colour-code urgency)
}

export function CountdownTimer({ timeLeft, total }: CountdownTimerProps) {
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0')
  const secs = (timeLeft % 60).toString().padStart(2, '0')
  const pct  = timeLeft / total

  const colour =
    pct > 0.5 ? 'text-green-400' :
    pct > 0.2 ? 'text-yellow-400' :
                'text-red-400 animate-pulse'

  return (
    <span className={'font-mono text-sm font-bold ' + colour}>
      {mins}:{secs}
    </span>
  )
}
