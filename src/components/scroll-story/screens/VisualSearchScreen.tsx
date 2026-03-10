/** Screen 01 — Visual Search: user uploads a screenshot, AI breaks it down */
export function VisualSearchScreen() {
  const items = [
    { label: 'Blazer',   brand: 'Totême',       price: '$620',  match: '98%' },
    { label: 'Trousers', brand: 'Arket',         price: '$89',   match: '95%' },
    { label: 'Loafers',  brand: 'Sandro Paris',  price: '$340',  match: '91%' },
  ]

  return (
    <div className="h-full flex flex-col" style={{ background: '#F9F6F2' }}>
      {/* Status bar */}
      <div className="flex justify-between px-5 pt-12 pb-2 text-[10px] font-semibold" style={{ color: 'rgba(13,12,16,0.5)' }}>
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5 items-end">
            {[3,4,5].map(h => <div key={h} style={{ width:2.5, height:h, background:'rgba(13,12,16,0.5)', borderRadius:0.5 }} />)}
          </div>
          <svg width="11" height="8" viewBox="0 0 24 16" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="20" height="14" rx="2" stroke="rgba(13,12,16,0.5)" strokeWidth="2"/>
            <rect x="3" y="3" width="12" height="10" rx="1" fill="rgba(13,12,16,0.5)"/>
            <rect x="22" y="5" width="2" height="6" rx="1" fill="rgba(13,12,16,0.35)"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pb-3" style={{ borderBottom: '1px solid rgba(13,12,16,0.06)' }}>
        <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.32)' }}>Visual Search</p>
        <p className="text-[14px] font-semibold" style={{ color: '#0D0C10', fontFamily: 'var(--font-serif)' }}>Upload any look</p>
      </div>

      {/* Image preview with scan */}
      <div className="mx-4 mt-3 rounded-2xl overflow-hidden relative flex-shrink-0" style={{ height: '120px' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(150deg, #C8B4A0 0%, #9E8070 100%)' }} />
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-0.5 opacity-80"
          style={{
            background: 'linear-gradient(90deg, transparent, #B85042, transparent)',
            animation: 'scanLine 2.4s ease-in-out infinite',
          }}
        />
        {/* Analyzing label */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-terra animate-pulse" />
            <span className="text-[9px] font-medium" style={{ color: '#0D0C10' }}>Analyzing outfit…</span>
          </div>
        </div>
        {/* Tag dots */}
        <div className="absolute" style={{ left:'55%', top:'28%' }}>
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background:'#B85042', opacity:0.3, animationDuration:'2s' }} />
          <div className="relative w-2.5 h-2.5 rounded-full border-2 border-white" style={{ background:'#B85042' }} />
        </div>
        <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-white" style={{ left:'40%', top:'68%', background:'rgba(255,255,255,0.8)' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-white" style={{ left:'65%', top:'85%', background:'rgba(255,255,255,0.8)' }} />
      </div>

      {/* Items identified */}
      <div className="px-4 mt-3 flex-1 min-h-0">
        <p className="text-[9px] tracking-[0.18em] uppercase mb-2" style={{ color: 'rgba(13,12,16,0.3)' }}>Items identified</p>
        <div className="flex flex-col gap-1.5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl px-3 py-2.5"
              style={{ background: 'rgba(13,12,16,0.04)', border: '1px solid rgba(13,12,16,0.06)' }}
            >
              <div>
                <p className="text-[11px] font-semibold" style={{ color: '#0D0C10' }}>{item.label}</p>
                <p className="text-[9px]" style={{ color: 'rgba(13,12,16,0.42)' }}>{item.brand}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-semibold" style={{ color: '#B85042' }}>{item.price}</p>
                <p className="text-[9px]" style={{ color: 'rgba(13,12,16,0.32)' }}>{item.match} match</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6 mt-3">
        <div className="w-full py-3 rounded-2xl text-[11px] font-semibold text-center" style={{ background: '#0D0C10', color: '#F9F6F2' }}>
          Shop All Items
        </div>
      </div>
    </div>
  )
}
