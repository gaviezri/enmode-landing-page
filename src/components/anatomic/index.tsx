import { RevealWrapper } from '../ui/RevealWrapper'
import { BodySilhouette } from './BodySilhouette'
import { LabelCard } from './LabelCard'
import type { MeasurementPoint } from '../../types'

const POINTS: MeasurementPoint[] = [
  { id: 'shoulder', label: 'Shoulders', value: '48.5 cm', cx: '38%', cy: '28%', side: 'left' },
  { id: 'chest',    label: 'Chest',     value: '39.2 cm', cx: '62%', cy: '36%', side: 'right' },
  { id: 'waist',    label: 'Waist',     value: '33.4 cm', cx: '38%', cy: '50%', side: 'left' },
  { id: 'hip',      label: 'Hips',      value: '41.0 cm', cx: '62%', cy: '60%', side: 'right' },
  { id: 'inseam',   label: 'Inseam',    value: '81.5 cm', cx: '38%', cy: '80%', side: 'left' },
]

const STATS = [
  { stat: '< 2 mm', label: 'Measurement accuracy' },
  { stat: '−67%',   label: 'Return rate reduction' },
  { stat: '1,000+', label: 'Body data points' },
]

function reveal(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
  }
}

const SNOW = 'rgba(240,235,229,'

export default function AnatomicSection() {
  return (
    <RevealWrapper threshold={0.12}>
      {(visible) => (
        <section
          id="features"
          className="relative py-28 px-6 lg:px-10 overflow-hidden"
          style={{ background: '#0F0E11' }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(184,80,66,0.07) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-20">
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-8 transition-all duration-700"
                style={{ color: `${SNOW}0.28)`, ...reveal(visible) }}
              >
                Anatomic Precision
              </p>

              {/* Crossed-out S/M/L */}
              <div className="inline-flex items-center gap-6 mb-6" style={reveal(visible, 100)}>
                {['S', 'M', 'L'].map((size) => (
                  <span
                    key={size}
                    className="font-serif font-light"
                    style={{
                      fontSize: '3.2rem',
                      color: `${SNOW}0.18)`,
                      textDecoration: 'line-through',
                      textDecorationColor: '#B85042',
                      textDecorationThickness: '2px',
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>

              <h2
                className="font-serif font-light leading-tight mb-6"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  color: '#F0EBE5',
                  ...reveal(visible, 200),
                }}
              >
                The Era of Guessing<br />
                <em className="italic" style={{ color: '#B85042' }}>Is Over.</em>
              </h2>

              <p
                className="text-base font-light max-w-xl mx-auto leading-[1.8]"
                style={{ color: `${SNOW}0.5)`, ...reveal(visible, 300) }}
              >
                We eliminate the friction of returns by ensuring a millimeter-accurate fit.
                Users input their exact body data via a quick camera scan or manual entry.
              </p>
            </div>

            {/* Body + Labels */}
            <div className="relative max-w-2xl mx-auto" style={{ height: '460px' }}>
              <div className="absolute left-1/2 top-0 -translate-x-1/2" style={reveal(visible, 400)}>
                <BodySilhouette />
              </div>
              {POINTS.map((point, i) => (
                <LabelCard key={point.id} point={point} visible={visible} delay={i * 100} />
              ))}
            </div>

            {/* AI Recommendation card */}
            <div
              className="max-w-lg mx-auto mt-6 rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(16px)',
                ...reveal(visible, 800),
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'rgba(184,80,66,0.15)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[9px] font-semibold mb-1.5 tracking-[0.14em] uppercase"
                    style={{ color: `${SNOW}0.35)` }}
                  >
                    AI Recommendation
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#F0EBE5' }}>
                    This specific cut is a{' '}
                    <span className="font-semibold" style={{ color: '#9AAD7A' }}>95% match</span>{' '}
                    for your body shape. The structured shoulders and A-line silhouette
                    complement your proportions perfectly.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-14">
              {STATS.map(({ stat, label }, i) => (
                <div key={i} className="text-center" style={reveal(visible, 900 + i * 100)}>
                  <div
                    className="font-serif font-light mb-2"
                    style={{ fontSize: '2.4rem', color: '#F0EBE5' }}
                  >
                    {stat}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: `${SNOW}0.32)` }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
