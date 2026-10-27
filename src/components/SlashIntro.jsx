import { useState } from 'react'

const SEEN_KEY = 'portfolio-intro-seen-v2'

function getInitialPhase() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const seen = sessionStorage.getItem(SEEN_KEY)
  if (reduced || seen) return 'done'
  sessionStorage.setItem(SEEN_KEY, 'true')
  return 'running'
}

export default function SlashIntro() {
  const [phase, setPhase] = useState(getInitialPhase)

  if (phase === 'done') return null

  return (
    <div className="slash-intro" aria-hidden="true">
      <div className="slash-blade" onAnimationEnd={() => setPhase('done')} />
    </div>
  )
}
