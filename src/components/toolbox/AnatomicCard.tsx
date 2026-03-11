import { useEffect, useRef, useState } from 'react'
import { SNOW, reveal } from './constants'

const brands = [
  { brand: 'Zara',   yours: 'M',  actual: 'S' },
  { brand: 'H&M',    yours: 'M',  actual: 'M' },
  { brand: 'Nike',   yours: 'M',  actual: 'L' },
  { brand: 'Uniqlo', yours: 'M',  actual: 'S' },
]

const measurements = [
  { label: 'Shoulders', value: 44, y: 28 },
  { label: 'Chest',     value: 96, y: 42 },
  { label: 'Waist',     value: 78, y: 58 },
  { label: 'Hips',      value: 94, y: 72 },
]

function AnimatedCounter({ target, active, delay }: { target: number; active: boolean; delay: number }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    const timer = setTimeout(() => {
      started.current = true
      let current = 0
      const step = target / 30
      const interval = setInterval(() => {
        current += step
        if (current >= target) {
          setCount(target)
          clearInterval(interval)
        } else {
          setCount(Math.round(current))
        }
      }, 25)
    }, delay)
    return () => clearTimeout(timer)
  }, [active, target, delay])

  return <>{count}</>
}

export default function AnatomicCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...reveal(visible, 200),
      }}
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: '#B85042' }}>01</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.62)` }}>Anatomic Precision</span>
          </div>
          <h3
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            Your Actual Size,<br />
            <span style={{ color: '#B85042' }}>Every Brand.</span>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.64)` }}>
            No more "size M here, size L there." Our system learns the conversion between brands and suggests
            your exact size based on items you already own. Take a quick photo with your phone — our platform
            recognises your fit with 95% accuracy. Forget about returns.
          </p>
          <p className="text-xs font-light leading-[1.7] max-w-md mt-3" style={{ color: `${SNOW}0.48)` }}>
            The system learns your exact body measurements and automatically selects the perfect size in every brand — no more size charts and exhausting return processes.
          </p>
        </div>

        {/* Visual: body silhouette with animated measurements */}
        <div
          className="rounded-xl p-4 min-w-[240px] flex flex-col gap-4"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Measurement body visual */}
          <div className="relative" style={{ height: 160 }}>
            <svg viewBox="0 0 120 160" width="120" height="160" className="mx-auto" aria-hidden="true">
              {/* Body silhouette outline */}
              <path
                d="M60 8 C60 8 52 10 48 18 C44 26 42 32 42 38 C40 42 36 44 34 46 C30 48 26 48 26 48 L26 52 C26 52 30 52 34 50 C38 48 40 46 42 44 C42 52 40 62 40 70 C40 78 38 88 38 96 C38 104 36 120 36 130 L44 130 C44 130 46 110 48 96 C50 82 52 72 54 66 C56 72 58 82 60 90 C62 82 64 72 66 66 C68 72 70 82 72 96 C74 110 76 130 76 130 L84 130 C84 130 82 104 82 96 C82 88 80 78 80 70 C80 62 78 52 78 44 C80 46 82 48 86 50 C90 52 94 52 94 52 L94 48 C94 48 90 48 86 46 C84 44 80 42 78 38 C78 32 76 26 72 18 C68 10 60 8 60 8Z"
                fill="none"
                stroke={`${SNOW}0.12)`}
                strokeWidth="0.8"
              />
              {/* Animated measurement lines */}
              {measurements.map((m, i) => (
                <g key={m.label}>
                  <line
                    x1="20" y1={m.y} x2="100" y2={m.y}
                    stroke="#B85042"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    style={{
                      opacity: visible ? 0.6 : 0,
                      transition: `opacity 600ms ${400 + i * 300}ms`,
                    }}
                  />
                  {/* Endpoint dots */}
                  <circle
                    cx="20" cy={m.y} r="1.5"
                    fill="#B85042"
                    style={{
                      opacity: visible ? 0.8 : 0,
                      transition: `opacity 400ms ${500 + i * 300}ms`,
                    }}
                  />
                  <circle
                    cx="100" cy={m.y} r="1.5"
                    fill="#B85042"
                    style={{
                      opacity: visible ? 0.8 : 0,
                      transition: `opacity 400ms ${500 + i * 300}ms`,
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* Measurement labels with counters */}
            {measurements.map((m, i) => (
              <div
                key={m.label}
                className="absolute flex items-center gap-1.5"
                style={{
                  right: 0,
                  top: `${(m.y / 160) * 100}%`,
                  transform: 'translateY(-50%)',
                  opacity: visible ? 1 : 0,
                  transition: `opacity 500ms ${600 + i * 300}ms`,
                }}
              >
                <span style={{ fontSize: 8, color: `${SNOW}0.45)`, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {m.label}
                </span>
                <span style={{ fontSize: 10, color: '#B85042', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                  <AnimatedCounter target={m.value} active={visible} delay={600 + i * 300} />
                  <span style={{ fontSize: 7, marginLeft: 1 }}>cm</span>
                </span>
              </div>
            ))}
          </div>

          {/* Size Intelligence table */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M3 3h18v18H3zM3 9h18M9 3v18" />
              </svg>
              <span style={{ fontSize: 9, color: `${SNOW}0.5)`, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Size Intelligence</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: 8, color: `${SNOW}0.35)`, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brand</span>
                <span style={{ fontSize: 8, color: `${SNOW}0.35)`, textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>You</span>
                <span style={{ fontSize: 8, color: '#B85042', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', fontWeight: 700 }}>Fit</span>
              </div>
              {brands.map((b, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, padding: '3px 0' }}>
                  <span style={{ fontSize: 10, color: `${SNOW}0.65)` }}>{b.brand}</span>
                  <span style={{ fontSize: 10, color: `${SNOW}0.35)`, textAlign: 'center', textDecoration: 'line-through' }}>{b.yours}</span>
                  <span style={{ fontSize: 10, color: '#9AAD7A', textAlign: 'center', fontWeight: 700 }}>{b.actual}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2" style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(154,173,122,0.1)', border: '1px solid rgba(154,173,122,0.2)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontSize: 9, color: '#9AAD7A', fontWeight: 600 }}>95% fit accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
