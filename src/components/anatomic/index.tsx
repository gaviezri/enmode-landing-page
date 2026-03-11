import { RevealWrapper } from '../ui/RevealWrapper'

const SNOW = 'rgba(240,235,229,'

function reveal(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
  }
}

/* ── Tool 1: Anatomic Precision ── */
function AnatomicCard({ visible }: { visible: boolean }) {
  const brands = [
    { brand: 'Zara',   yours: 'M',  actual: 'S' },
    { brand: 'H&M',    yours: 'M',  actual: 'M' },
    { brand: 'Nike',   yours: 'M',  actual: 'L' },
    { brand: 'Uniqlo', yours: 'M',  actual: 'S' },
  ]
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
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.5)` }}>Anatomic Precision</span>
          </div>
          <h3
            className="font-serif font-light leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            Your Actual Size,<br />
            <em className="italic" style={{ color: '#B85042' }}>Every Brand.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.52)` }}>
            No more "size M here, size L there." Our system learns the conversion between brands and suggests
            your exact size based on items you already own. Take a quick photo with your phone — our platform
            recognises your fit with 95% accuracy. Forget about returns.
          </p>
        </div>

        {/* Visual: brand size table */}
        <div
          className="rounded-xl p-4 min-w-[200px]"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3h18v18H3zM3 9h18M9 3v18" />
            </svg>
            <span style={{ fontSize: 9, color: `${SNOW}0.4)`, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Size Intelligence</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 8, color: `${SNOW}0.3)`, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brand</span>
              <span style={{ fontSize: 8, color: `${SNOW}0.3)`, textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>You</span>
              <span style={{ fontSize: 8, color: '#B85042', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', fontWeight: 700 }}>Fit</span>
            </div>
            {brands.map((b, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 40px', gap: 4, padding: '3px 0' }}>
                <span style={{ fontSize: 10, color: `${SNOW}0.6)` }}>{b.brand}</span>
                <span style={{ fontSize: 10, color: `${SNOW}0.3)`, textAlign: 'center', textDecoration: 'line-through' }}>{b.yours}</span>
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
  )
}

/* ── Tool 2: AI Mix & Match ── */
function MixMatchCard({ visible }: { visible: boolean }) {
  const tiers = ['Basic', 'Premium', 'Luxury']
  const activeTier = 1
  const items = [
    { name: 'Linen Blazer', price: '$89', match: '98%' },
    { name: 'Silk Camisole', price: '$54', match: '94%' },
    { name: 'Wide-Leg Trousers', price: '$72', match: '91%' },
  ]
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
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.5)` }}>AI Mix & Match</span>
          </div>
          <h3
            className="font-serif font-light leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            Infinite Looks,<br />
            <em className="italic" style={{ color: '#B85042' }}>Your Budget.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.52)` }}>
            Upload a style inspiration. Our platform runs deep architectural analysis of silhouettes, fabric stretch,
            colours and textures — then generates an endless feed of inspired looks that match your budget.
            Every item is shoppable through affiliate. Save for later, or hit Remix to swap any piece.
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
                    {/* Save icon */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={`${SNOW}0.3)`} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                    </svg>
                    {/* Buy icon */}
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

/* ── Tool 3: Visual Search & Try On ── */
function VisualSearchCard({ visible }: { visible: boolean }) {
  const results = [
    { name: 'Exact Match', confidence: '97%', price: '$128', tag: 'exact' },
    { name: 'Similar — Wool Blend', confidence: '89%', price: '$74', tag: 'alt' },
    { name: 'Budget Pick', confidence: '82%', price: '$39', tag: 'budget' },
  ]
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
            <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: `${SNOW}0.5)` }}>Visual Search & Try On</span>
          </div>
          <h3
            className="font-serif font-light leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#F0EBE5' }}
          >
            See It.<br />
            <em className="italic" style={{ color: '#B85042' }}>Own It.</em>
          </h3>
          <p className="text-sm font-light leading-[1.8] max-w-md" style={{ color: `${SNOW}0.52)` }}>
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
            <span style={{ fontSize: 9, color: '#B85042', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Try On Avatar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AnatomicSection() {
  return (
    <RevealWrapper threshold={0.08}>
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
            style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 30%, rgba(184,80,66,0.06) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-16">
              <p
                className="text-[10px] tracking-[0.28em] uppercase mb-6"
                style={{ color: `${SNOW}0.28)`, ...reveal(visible) }}
              >
                The Toolbox
              </p>
              <h2
                className="font-serif font-light leading-tight mb-5"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                  color: '#F0EBE5',
                  ...reveal(visible, 100),
                }}
              >
                Everything You Need.<br />
                <em className="italic" style={{ color: '#B85042' }}>Nothing You Don't.</em>
              </h2>
              <p
                className="text-base font-light max-w-xl mx-auto leading-[1.8]"
                style={{ color: `${SNOW}0.48)`, ...reveal(visible, 200) }}
              >
                Three AI-powered tools that turn your wardrobe into a precision-fitted, endlessly styled, income-generating machine.
              </p>
            </div>

            {/* Tool cards */}
            <div className="flex flex-col gap-6">
              <AnatomicCard visible={visible} />
              <MixMatchCard visible={visible} />
              <VisualSearchCard visible={visible} />
            </div>
          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
