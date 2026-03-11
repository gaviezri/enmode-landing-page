/** Screen 01 — Wardrobe digitization: AI scans & populates wardrobe */
export function WardrobeScreen() {
  const items = [
    { label: 'Blazer',       color: '#C4A054', bg: 'linear-gradient(135deg,#D4C4A0,#A89060)' },
    { label: 'Silk Blouse',  color: '#B85042', bg: 'linear-gradient(135deg,#E8C0B8,#C07060)' },
    { label: 'Trench Coat',  color: '#706D69', bg: 'linear-gradient(135deg,#C8BEB0,#9E9088)' },
    { label: 'Denim',        color: '#4A6A8C', bg: 'linear-gradient(135deg,#8AAAC8,#4A6A8C)' },
    { label: 'Midi Dress',   color: '#778C58', bg: 'linear-gradient(135deg,#B8C8A0,#788C58)' },
    { label: 'Loafers',      color: '#8C6A4A', bg: 'linear-gradient(135deg,#C8A888,#8C6A4A)' },
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
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pb-3 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(13,12,16,0.06)' }}>
        <div>
          <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.32)' }}>My Wardrobe</p>
          <p className="text-[14px] font-semibold" style={{ color: '#0D0C10', fontFamily: 'var(--font-serif)' }}>48 items</p>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold"
          style={{ background: 'rgba(184,80,66,0.1)', border: '1px solid rgba(184,80,66,0.25)', color: '#B85042' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#B85042' }} />
          Syncing
        </div>
      </div>

      {/* Scan progress */}
      <div className="mx-4 mt-3 rounded-xl px-3 py-2.5 flex items-center gap-2.5" style={{ background: 'rgba(184,80,66,0.06)', border: '1px solid rgba(184,80,66,0.14)' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l3 3" />
        </svg>
        <div className="flex-1">
          <p className="text-[9px]" style={{ color: 'rgba(13,12,16,0.5)' }}>Scanning Instagram · 3 new items found</p>
          <div className="mt-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(184,80,66,0.15)' }}>
            <div className="h-full rounded-full" style={{ width: '72%', background: '#B85042' }} />
          </div>
        </div>
      </div>

      {/* Items grid */}
      <div className="px-4 mt-3 flex-1 min-h-0">
        <p className="text-[9px] tracking-[0.18em] uppercase mb-2" style={{ color: 'rgba(13,12,16,0.3)' }}>Recently added</p>
        <div className="grid grid-cols-3 gap-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(13,12,16,0.06)' }}>
              <div className="flex items-center justify-center" style={{ height: 56, background: item.bg }}>
                <svg viewBox="0 0 40 52" width="28" height="36" fill="none" aria-hidden="true">
                  <path d="M14 12 L4 20 L4 48 L36 48 L36 20 L26 12 C22 8 18 8 14 12Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                </svg>
              </div>
              <div className="px-1.5 py-1" style={{ background: 'white' }}>
                <p className="text-[8px] font-medium truncate" style={{ color: '#0D0C10' }}>{item.label}</p>
                <div className="w-2.5 h-2.5 rounded-full mt-0.5" style={{ background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-5 mt-3">
        <div className="w-full py-3 rounded-2xl text-[11px] font-semibold text-center" style={{ background: '#0D0C10', color: '#F9F6F2' }}>
          View Full Wardrobe
        </div>
      </div>
    </div>
  )
}
