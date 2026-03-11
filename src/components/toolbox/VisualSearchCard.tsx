import { SNOW, reveal } from './constants'

const results = [
  { name: 'Exact Match', confidence: '97%', price: '$128', tag: 'exact' },
  { name: 'Similar — Wool Blend', confidence: '89%', price: '$74', tag: 'alt' },
  { name: 'Budget Pick', confidence: '82%', price: '$39', tag: 'budget' },
]

export default function VisualSearchCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...reveal(visible, 600),
      }}
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: '#B85042' }}>03</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.62)` }}>Visual Search & Try On</span>
          </div>
          <h3
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            See It.<br />
            <em className="italic" style={{ color: '#B85042' }}>Own It.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.64)` }}>
            Spotted a look you love? Upload it. Our system deconstructs every piece and curates the exact
            match — or the closest alternative at your specified budget. Try it on your AI avatar before buying.
          </p>
        </div>

        {/* Visual: upload → results */}
        <div
          className="rounded-xl p-4 min-w-[220px]"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Upload area */}
          <div
            className="flex items-center gap-3 mb-4 p-3 rounded-lg"
            style={{ border: '1px dashed rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`${SNOW}0.3)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
            <div>
              <p style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600 }}>street-look.jpg</p>
              <p style={{ fontSize: 8, color: `${SNOW}0.35)` }}>Analysing silhouette…</p>
            </div>
          </div>

          {/* Matches */}
          <p style={{ fontSize: 9, color: `${SNOW}0.35)`, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>Matches Found</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {results.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: `1px solid ${r.tag === 'exact' ? 'rgba(154,173,122,0.3)' : 'rgba(255,255,255,0.06)'}` }}>
                <div>
                  <p style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600, marginBottom: 1 }}>{r.name}</p>
                  <p style={{ fontSize: 9, color: `${SNOW}0.4)` }}>{r.price}</p>
                </div>
                <span style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: r.tag === 'exact' ? '#9AAD7A' : r.tag === 'alt' ? '#C4A054' : `${SNOW}0.55)`,
                  padding: '2px 6px',
                  borderRadius: 6,
                  background: r.tag === 'exact' ? 'rgba(154,173,122,0.12)' : r.tag === 'alt' ? 'rgba(196,160,84,0.1)' : 'rgba(255,255,255,0.04)',
                }}>
                  {r.confidence}
                </span>
              </div>
            ))}
          </div>

          {/* Try on CTA */}
          <button
            className="w-full mt-3 flex items-center justify-center gap-2 py-2 rounded-lg"
            style={{ background: 'rgba(184,80,66,0.15)', border: '1px solid rgba(184,80,66,0.3)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span style={{ fontSize: 9, color: '#B85042', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Try On Me</span>
          </button>
        </div>
      </div>
    </div>
  )
}