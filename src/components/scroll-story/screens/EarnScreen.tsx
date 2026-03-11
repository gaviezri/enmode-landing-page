/** Screen 03 — Public wardrobe & affiliate earnings */
export function EarnScreen() {
  const looks = [
    { name: 'Evening Gold',  views: '2.4k', earned: '$38.50',  live: true },
    { name: 'Street Casual', views: '1.1k', earned: '$14.20',  live: true },
    { name: 'Office Chic',   views: '890',  earned: '$9.80',   live: false },
  ]

  return (
    <div className="h-full flex flex-col" style={{ background: '#F9F6F2' }}>
      {/* Status bar */}
      <div className="flex justify-between px-5 pt-12 pb-2 text-[10px] font-semibold" style={{ color: 'rgba(13,12,16,0.5)' }}>
        <span>9:41</span>
        <div className="flex gap-0.5 items-end">
          {[3,4,5].map(h => <div key={h} style={{ width:2.5, height:h, background:'rgba(13,12,16,0.5)', borderRadius:0.5 }} />)}
        </div>
      </div>

      {/* Header */}
      <div className="px-5 pb-3" style={{ borderBottom: '1px solid rgba(13,12,16,0.06)' }}>
        <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ color: 'rgba(13,12,16,0.32)' }}>Public Wardrobe</p>
        <p className="text-[14px] font-semibold" style={{ color: '#0D0C10', fontFamily: 'var(--font-serif)' }}>Your Earnings</p>
      </div>

      {/* Earnings card */}
      <div
        className="mx-4 mt-3 rounded-2xl px-4 py-3"
        style={{ background: '#0D0C10' }}
      >
        <p className="text-[9px] tracking-[0.18em] uppercase mb-1" style={{ color: 'rgba(240,235,229,0.35)' }}>This month</p>
        <p className="text-[28px] font-semibold leading-none mb-1" style={{ color: '#F0EBE5', fontFamily: 'var(--font-serif)' }}>$62.50</p>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
          </svg>
          <span className="text-[9px] font-medium" style={{ color: '#9AAD7A' }}>+34% from last month</span>
        </div>
      </div>

      {/* Live looks */}
      <div className="px-4 mt-3 flex-1 min-h-0">
        <p className="text-[9px] tracking-[0.18em] uppercase mb-2" style={{ color: 'rgba(13,12,16,0.3)' }}>Active looks</p>
        <div className="flex flex-col gap-1.5">
          {looks.map((look, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl px-3 py-2.5"
              style={{ background: 'rgba(13,12,16,0.04)', border: '1px solid rgba(13,12,16,0.06)' }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: look.live ? 'rgba(184,80,66,0.1)' : 'rgba(13,12,16,0.06)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={look.live ? '#B85042' : 'rgba(13,12,16,0.3)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold" style={{ color: '#0D0C10' }}>{look.name}</p>
                  <p className="text-[9px]" style={{ color: 'rgba(13,12,16,0.4)' }}>{look.views} views</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-bold" style={{ color: '#B85042' }}>{look.earned}</p>
                {look.live && (
                  <div className="flex items-center gap-1 justify-end">
                    <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: '#9AAD7A' }} />
                    <span className="text-[8px]" style={{ color: '#9AAD7A' }}>Live</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-5 mt-3">
        <div className="w-full py-3 rounded-2xl text-[11px] font-semibold text-center" style={{ background: '#B85042', color: '#F9F6F2' }}>
          Expose a New Look
        </div>
      </div>
    </div>
  )
}
