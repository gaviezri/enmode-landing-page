interface Props { activeStep: number }

const card = {
  base: {
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.07)',
    background: 'rgba(255,255,255,0.04)',
    overflow: 'hidden' as const,
  },
  accent: {
    borderRadius: 16,
    background: '#B85042',
    overflow: 'hidden' as const,
  },
  dark: {
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.07)',
    background: 'rgba(0,0,0,0.35)',
    overflow: 'hidden' as const,
  },
}

/* ── Step 01: Digitize ── */
function DigitizenBento() {
  const items = ['Blazer', 'Trench', 'Silk Top', 'Denim', 'Midi Dress', 'Loafers']
  const colors = ['#C4A054','#B85042','#706D69','#4A6A8C','#778C58','#8C6A4A']
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 10 }}>
      {/* Wardrobe grid — spans full width */}
      <div style={{ ...card.base, gridColumn: '1 / -1', padding: 16 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,235,229,0.3)', marginBottom: 10 }}>My Wardrobe · 48 items</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6 }}>
          {items.map((name, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 36, height: 44, borderRadius: 8, background: `linear-gradient(150deg,${colors[i]}55,${colors[i]}22)`, border: `1px solid ${colors[i]}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 30 38" width="20" height="26" fill="none" aria-hidden="true">
                  <path d="M10 9 L3 16 L3 35 L27 35 L27 16 L20 9 C17 6 13 6 10 9Z" fill={`${colors[i]}55`} stroke={`${colors[i]}99`} strokeWidth="1.2" />
                </svg>
              </div>
              <span style={{ fontSize: 7.5, color: 'rgba(240,235,229,0.45)', textAlign: 'center', lineHeight: 1.2 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Scan progress */}
      <div style={{ ...card.base, padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#B85042', display: 'inline-block', animation: 'pulse 1.4s infinite' }} />
          <span style={{ fontSize: 9, color: 'rgba(240,235,229,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scanning</span>
        </div>
        <p style={{ fontSize: 11, color: '#F0EBE5', fontWeight: 600, marginBottom: 6 }}>Instagram · 3 new</p>
        <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '72%', background: '#B85042', borderRadius: 2 }} />
        </div>
      </div>

      {/* Auto-tag stat */}
      <div style={{ ...card.base, padding: 14 }}>
        <p style={{ fontSize: 9, color: 'rgba(240,235,229,0.3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>Auto-tagged</p>
        <p style={{ fontSize: 28, fontWeight: 700, color: '#F0EBE5', lineHeight: 1, marginBottom: 2 }}>100<span style={{ fontSize: 14, color: '#B85042' }}>%</span></p>
        <p style={{ fontSize: 9, color: 'rgba(240,235,229,0.38)' }}>Every item linked</p>
      </div>
    </div>
  )
}

/* ── Step 02: Style ── */
function StyleBento() {
  const tags = ['Trending Now', 'Your Aesthetic', 'Designer Eye', 'Color Story']
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 10 }}>
      {/* Avatar card — tall, spans full height on left */}
      <div style={{ ...card.dark, gridRow: '1 / 3', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', minHeight: 220, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 10, left: 10, right: 10, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C4A054" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <span style={{ fontSize: 9, color: '#C4A054', fontWeight: 700 }}>Designer Pick</span>
        </div>
        <svg viewBox="0 0 100 180" width="100" height="180" aria-hidden="true">
          <ellipse cx="50" cy="20" rx="12" ry="14" fill="rgba(210,175,145,0.9)" />
          <ellipse cx="45" cy="18" rx="1.8" ry="2.2" fill="rgba(100,70,50,0.65)" />
          <ellipse cx="55" cy="18" rx="1.8" ry="2.2" fill="rgba(100,70,50,0.65)" />
          <path d="M45 25 Q50 28 55 25" stroke="rgba(100,70,50,0.55)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
          <rect x="44" y="33" width="12" height="9" rx="3" fill="rgba(210,175,145,0.9)" />
          <path d="M22 42 Q50 37 78 42 L80 118 Q50 124 20 118 Z" fill="rgba(196,160,84,0.85)" />
          <path d="M38 42 L34 63 L50 55 L66 63 L62 42" fill="rgba(150,118,52,0.9)" />
          <path d="M22 44 L10 90 Q8 95 14 96 L25 95 L33 57 Z" fill="rgba(196,160,84,0.85)" />
          <path d="M78 44 L90 90 Q92 95 86 96 L75 95 L67 57 Z" fill="rgba(196,160,84,0.85)" />
          <rect x="27" y="116" width="19" height="56" rx="4" fill="rgba(20,18,24,0.95)" />
          <rect x="54" y="116" width="19" height="56" rx="4" fill="rgba(20,18,24,0.95)" />
        </svg>
        <div style={{ padding: '8px 12px 12px', textAlign: 'center' }}>
          <p style={{ fontSize: 8, color: 'rgba(240,235,229,0.35)', marginBottom: 2 }}>Your face · your measurements</p>
          <p style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600 }}>AI Avatar</p>
        </div>
      </div>

      {/* Style tags */}
      <div style={{ ...card.base, padding: 14 }}>
        <p style={{ fontSize: 9, color: 'rgba(240,235,229,0.3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 10 }}>Style signals</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {tags.map((t, i) => (
            <span key={i} style={{ fontSize: 9, padding: '3px 8px', borderRadius: 20, background: i === 0 ? 'rgba(196,160,84,0.15)' : 'rgba(255,255,255,0.06)', color: i === 0 ? '#C4A054' : 'rgba(240,235,229,0.55)', border: `1px solid ${i === 0 ? 'rgba(196,160,84,0.3)' : 'rgba(255,255,255,0.08)'}` }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Looks generated stat */}
      <div style={{ ...card.accent, padding: 14 }}>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.65)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>Looks generated</p>
        <p style={{ fontSize: 28, fontWeight: 700, color: '#F9F6F2', lineHeight: 1, marginBottom: 2 }}>24</p>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.6)' }}>From your closet</p>
      </div>
    </div>
  )
}

/* ── Step 03: Earn ── */
function EarnBento() {
  const looks = [
    { name: 'Evening Gold',  earned: '$38.50', views: '2.4k', live: true },
    { name: 'Street Casual', earned: '$14.20', views: '1.1k', live: true },
    { name: 'Office Chic',   earned: '$9.80',  views: '890',  live: false },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {/* Earnings hero — full width */}
      <div style={{ ...card.accent, gridColumn: '1 / -1', padding: '18px 20px' }}>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>This month</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 40, fontWeight: 700, color: '#F9F6F2', lineHeight: 1, fontFamily: 'Cormorant, serif' }}>$62.50</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: 'rgba(0,0,0,0.2)', borderRadius: 20 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
            </svg>
            <span style={{ fontSize: 10, color: '#9AAD7A', fontWeight: 700 }}>+34%</span>
          </div>
        </div>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.5)', marginTop: 4 }}>3 looks · no brand deals · no minimum</p>
      </div>

      {/* Active looks */}
      {looks.map((look, i) => (
        <div key={i} style={{ ...card.base, padding: 12, gridColumn: i === 2 ? '1 / -1' : undefined }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600 }}>{look.name}</span>
            {look.live && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#9AAD7A', display: 'inline-block', animation: 'pulse 1.4s infinite' }} />
                <span style={{ fontSize: 8, color: '#9AAD7A', fontWeight: 700 }}>LIVE</span>
              </div>
            )}
          </div>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#F0EBE5', lineHeight: 1, marginBottom: 3 }}>{look.earned}</p>
          <p style={{ fontSize: 9, color: 'rgba(240,235,229,0.35)' }}>{look.views} views</p>
        </div>
      ))}
    </div>
  )
}

const BENTOS = [DigitizenBento, StyleBento, EarnBento]

export function StepBento({ activeStep }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      {BENTOS.map((Bento, i) => (
        <div
          key={i}
          style={{
            position: i === 0 ? 'relative' : 'absolute',
            top: 0, left: 0, right: 0,
            opacity: activeStep === i ? 1 : 0,
            transform: activeStep === i ? 'translateY(0)' : activeStep > i ? 'translateY(-16px)' : 'translateY(16px)',
            transition: 'opacity 550ms cubic-bezier(0.22,1,0.36,1), transform 550ms cubic-bezier(0.22,1,0.36,1)',
            pointerEvents: activeStep === i ? 'auto' : 'none',
          }}
        >
          <Bento />
        </div>
      ))}
    </div>
  )
}
