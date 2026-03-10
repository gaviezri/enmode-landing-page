import { useEffect, useRef, useState } from 'react'

const STEPS = [
  { n: '01', label: 'Onboard',  sub: 'Social media autodiscovery or Photo upload' },
  { n: '02', label: 'Auto Tag', sub: 'Instant recognition & affiliate linkage' },
  { n: '03', label: 'Earn',     sub: 'Passive income from your style' },
]

function DownArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}

interface Props {
  introComplete?: boolean
}

export default function StepsFlow({ introComplete }: Props) {
  const [rolling, setRolling] = useState(false)
  const triggered = useRef(false)

  useEffect(() => {
    if (!introComplete) return
    if (triggered.current) return
    if (!window.matchMedia('(min-width: 1024px)').matches) return
    triggered.current = true
    const t = setTimeout(() => {
      setRolling(true)
      setTimeout(() => setRolling(false), 800)
    }, 600)
    return () => clearTimeout(t)
  }, [introComplete])

  return (
    <div className="flex flex-col items-stretch gap-0 w-full">
      {STEPS.map((step, i) => (
        <div key={step.n} className="flex flex-col items-center">
          {/* Chip */}
          <div
            key={i === 0 ? String(rolling) : undefined}
            className="relative rounded-2xl px-8 py-6 w-full overflow-hidden"
            style={{
              animation: i === 0 && rolling ? 'barrelroll-left 0.8s cubic-bezier(0.4,0,0.2,1) forwards' : undefined,
              backfaceVisibility: 'visible',
              WebkitBackfaceVisibility: 'visible',
              background: i === 2 ? '#B85042' : i === 1 ? '#b85042c1' : '#b8504203',
              border: i === 0 ? '1px solid rgba(13,12,16,0.1)' : 'none',
            }}
          >
            <div
              className="text-[11px] tracking-[0.24em] uppercase mb-2"
              style={{ color: i === 0 ? 'rgba(13,12,16,0.5)' : 'rgba(249,246,242,0.6)' }}
            >
              {step.n}
            </div>
            <div
              className="font-serif text-3xl font-medium leading-none mb-2"
              style={{ color: i === 0 ? '#0D0C10' : '#F9F6F2' }}
            >
              {step.label}
            </div>
            <div
              className="text-xs leading-snug"
              style={{ color: i === 0 ? 'rgba(13,12,16,0.6)' : 'rgba(249,246,242,0.7)' }}
            >
              {step.sub}
            </div>
          </div>

          {i < STEPS.length - 1 && (
            <div className="py-1" style={{ color: 'rgba(13,12,16,0.3)' }}>
              <DownArrow />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
