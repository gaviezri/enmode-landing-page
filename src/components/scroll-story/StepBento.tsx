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

/* ── Step 01: Wardrobe ── */
function WardrobeBento() {
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

/* ── Step 02: Curate ── */
function CurateBento() {
  const saved = [
    { name: 'Weekend Brunch', items: 3, color: '#C4A054' },
    { name: 'Date Night', items: 4, color: '#B85042' },
    { name: 'Power Meeting', items: 3, color: '#4A6A8C' },
  ]
  const suggestions = ['Trench + Silk Top', 'Blazer + Denim', 'Midi Dress + Loafers']
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 10 }}>
      {/* Saved looks — full width */}
      <div style={{ ...card.base, gridColumn: '1 / -1', padding: 16 }}>
        <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,235,229,0.3)', marginBottom: 12 }}>Saved Looks</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {saved.map((look, i) => (
            <div key={i} style={{ flex: 1, padding: '10px 12px', borderRadius: 12, background: `${look.color}12`, border: `1px solid ${look.color}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill={`${look.color}88`} aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                <span style={{ fontSize: 10, color: '#F0EBE5', fontWeight: 600 }}>{look.name}</span>
              </div>
              <span style={{ fontSize: 8, color: 'rgba(240,235,229,0.4)' }}>{look.items} items</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI suggestions */}
      <div style={{ ...card.dark, padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4A054" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span style={{ fontSize: 9, color: '#C4A054', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>AI Suggests</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {suggestions.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: 10, color: 'rgba(240,235,229,0.65)' }}>{s}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(240,235,229,0.3)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar preview */}
      <div style={{ ...card.accent, padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 60 90" width="48" height="72" aria-hidden="true">
          <ellipse cx="30" cy="14" rx="8" ry="10" fill="rgba(210,175,145,0.9)" />
          <path d="M14 30 Q30 26 46 30 L47 72 Q30 76 13 72 Z" fill="rgba(196,160,84,0.8)" />
          <rect x="17" y="70" width="11" height="18" rx="3" fill="rgba(20,18,24,0.9)" />
          <rect x="32" y="70" width="11" height="18" rx="3" fill="rgba(20,18,24,0.9)" />
        </svg>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.65)', marginTop: 8, textAlign: 'center' }}>Preview on<br /><span style={{ fontWeight: 700, color: '#F9F6F2' }}>your avatar</span></p>
      </div>
    </div>
  )
}

/* ── Step 03: Publish ── */
function PublishBento() {
  const looks = [
    { name: 'Evening Gold',  earned: '$38.50', views: '2.4k', live: true },
    { name: 'Street Casual', earned: '$14.20', views: '1.1k', live: true },
    { name: 'Office Chic',   earned: '$9.80',  views: '890',  live: false },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {/* Public wardrobe header — full width */}
      <div style={{ ...card.base, gridColumn: '1 / -1', padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,235,229,0.3)', marginBottom: 4 }}>Public Wardrobe</p>
            <p style={{ fontSize: 13, color: '#F0EBE5', fontWeight: 600 }}>3 looks live</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 20, background: 'rgba(154,173,122,0.12)', border: '1px solid rgba(154,173,122,0.25)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#9AAD7A', display: 'inline-block', animation: 'pulse 1.4s infinite' }} />
            <span style={{ fontSize: 9, color: '#9AAD7A', fontWeight: 700 }}>PUBLIC</span>
          </div>
        </div>
      </div>

      {/* Earnings card — accent */}
      <div style={{ ...card.accent, gridColumn: '1 / -1', padding: '18px 20px' }}>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Commission earned</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 40, fontWeight: 700, color: '#F9F6F2', lineHeight: 1, fontFamily: 'Cormorant, serif' }}>$62.50</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', background: 'rgba(0,0,0,0.2)', borderRadius: 20 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
            </svg>
            <span style={{ fontSize: 10, color: '#9AAD7A', fontWeight: 700 }}>+34%</span>
          </div>
        </div>
        <p style={{ fontSize: 9, color: 'rgba(249,246,242,0.5)', marginTop: 4 }}>From visitors shopping your looks</p>
      </div>

      {/* Per-look cards */}
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

const BENTOS = [WardrobeBento, CurateBento, PublishBento]

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
