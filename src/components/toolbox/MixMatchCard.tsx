import { SNOW, reveal } from './constants'

const tiers = ['Basic', 'Premium', 'Luxury']
const activeTier = 1
const items = [
  { name: 'Linen Blazer', price: '$89', match: '98%' },
  { name: 'Silk Camisole', price: '$54', match: '94%' },
  { name: 'Wide-Leg Trousers', price: '$72', match: '91%' },
]

export default function MixMatchCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        ...reveal(visible, 400),
      }}
    >
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: '#B85042' }}>02</span>
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.62)` }}>AI Mix & Match</span>
          </div>
          <h3
            className="font-serif font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            Infinite Looks,<br />
            <em className="italic" style={{ color: '#B85042' }}>Your Budget.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.64)` }}>
            Endless Outfits. Zero Effort — let AI be your personal stylist. The system generates
            perfect Mix &amp; Match combinations from your digital wardrobe, or finds new pieces
            that complete the look, tailored to your budget. Every item is shoppable. Save for later, or hit Remix to swap any piece.
          </p>
        </div>

        {/* Visual: budget tiers + item cards */}
        <div
          className="rounded-xl p-4 min-w-[220px]"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Budget tier selector */}
          <div className="flex gap-1 mb-4 p-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {tiers.map((t, i) => (
              <button
                key={i}
                className="flex-1 text-center py-1.5 rounded-md transition-all"
                style={{
                  fontSize: 9,
                  fontWeight: i === activeTier ? 700 : 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: i === activeTier ? '#F0EBE5' : `${SNOW}0.35)`,
                  background: i === activeTier ? 'rgba(184,80,66,0.25)' : 'transparent',
                  border: i === activeTier ? '1px solid rgba(184,80,66,0.4)' : '1px solid transparent',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Suggested items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <p style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600, marginBottom: 2 }}>{item.name}</p>
                  <p style={{ fontSize: 9, color: `${SNOW}0.4)` }}>{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: 9, color: '#9AAD7A', fontWeight: 700 }}>{item.match}</span>
                  <div className="flex gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={`${SNOW}0.3)`} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                    </svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={`${SNOW}0.3)`} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remix button */}
          <button
            className="w-full mt-3 flex items-center justify-center gap-2 py-2 rounded-lg"
            style={{ background: 'rgba(196,160,84,0.12)', border: '1px solid rgba(196,160,84,0.25)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4A054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 014-4h14" />
              <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 01-4 4H3" />
            </svg>
            <span style={{ fontSize: 9, color: '#C4A054', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Remix Look</span>
          </button>
        </div>
      </div>
    </div>
  )
}