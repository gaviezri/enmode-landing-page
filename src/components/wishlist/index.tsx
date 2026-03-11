import { useState } from 'react'
import { RevealWrapper } from '../ui/RevealWrapper'
import { WishlistCard } from './WishlistCard'
import { FeatureCard } from './FeatureCard'
import { WISHLIST_ITEMS, BOARDS, type Board } from './data'

function reveal(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: `opacity 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 700ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
  }
}

export default function WishlistSection() {
  const [activeBoard, setActiveBoard] = useState<Board>('All')

  const filtered = activeBoard === 'All'
    ? WISHLIST_ITEMS
    : WISHLIST_ITEMS.filter(i => i.board === activeBoard)

  const totalValue   = filtered.reduce((sum, i) => sum + i.price, 0)
  const totalSavings = filtered.reduce((sum, i) => sum + (i.originalPrice ? i.originalPrice - i.price : 0), 0)
  const alertCount   = filtered.filter(i => i.alert).length
  const brandCount   = new Set(filtered.map(i => i.brand)).size

  return (
    <RevealWrapper threshold={0.06}>
      {(visible) => (
        <section id="wishlist" className="py-28 px-6 lg:px-10" style={{ background: '#F9F6F2' }}>
          <div className="max-w-7xl mx-auto">

            {/* ── Header ── */}
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
              <div>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase mb-4"
                  style={{ color: 'rgba(13,12,16,0.3)', ...reveal(visible) }}
                >
                  The Last Wishlist You'll Ever Need
                </p>
                <h2
                  className="font-serif font-light leading-tight"
                  style={{
                    fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                    color: '#0D0C10',
                    ...reveal(visible, 100),
                  }}
                >
                  Your Style Vault.<br />
                  <em className="italic" style={{ color: '#B85042' }}>Your Identity.</em>
                </h2>
              </div>

              <div style={reveal(visible, 200)}>
                <p
                  className="text-base font-light leading-[1.8] mb-7"
                  style={{ color: 'rgba(13,12,16,0.52)' }}
                >
                  Not just a shopping cart. A personal vault where you build your fashion identity —
                  curating looks from hundreds of brands into one place. Track value, plan budgets,
                  try before you buy, and earn when others shop your taste.
                </p>

                {/* Share & Earn card */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-cream-dark">
                  <div className="flex -space-x-2">
                    {['#B85042', '#778C58', '#36454F'].map((color, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: color }} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-xs text-charcoal/70 flex-1">
                    Share your vault — earn affiliate commissions when friends shop your curated list.
                  </p>
                  <button className="text-[10px] font-semibold tracking-wide px-3 py-2 rounded-lg cursor-pointer" style={{ background: '#36454F', color: '#F7F3EE' }}>
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* ── Stats heading ── */}
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ color: 'rgba(13,12,16,0.3)', ...reveal(visible, 250) }}
            >
              Real-Time Vault Insights
            </p>

            {/* ── Stats bar ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div
                className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transitionDelay: '100ms' }}
              >
                <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">Vault Value</div>
                <div className="font-serif font-light mb-1" style={{ fontSize: '2.2rem', color: '#36454F' }}>${totalValue.toLocaleString()}</div>
                <div className="text-[11px] text-charcoal/50">Across {brandCount} brands</div>
              </div>
              <div
                className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transitionDelay: '200ms' }}
              >
                <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">Saved Today</div>
                <div className="font-serif font-light mb-1" style={{ fontSize: '2.2rem', color: '#B85042' }}>${totalSavings}</div>
                <div className="text-[11px] text-charcoal/50">Via price drop alerts</div>
              </div>
              <div
                className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transitionDelay: '300ms' }}
              >
                <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">Active Alerts</div>
                <div className="font-serif font-light mb-1" style={{ fontSize: '2.2rem', color: '#778C58' }}>{alertCount}</div>
                <div className="text-[11px] text-charcoal/50">Price drops & restocks</div>
              </div>
              <div
                className="rounded-2xl p-5 border border-cream-dark bg-white transition-all duration-700"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transitionDelay: '400ms' }}
              >
                <div className="text-[10px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">Items Saved</div>
                <div className="font-serif font-light mb-1" style={{ fontSize: '2.2rem', color: '#36454F' }}>{filtered.length}</div>
                <div className="text-[11px] text-charcoal/50">Across {BOARDS.length - 1} mood boards</div>
              </div>
            </div>

            {/* ── Board selector ── */}
            <div
              className="flex items-center gap-2 mb-8 flex-wrap"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 700ms 400ms' }}
            >
              {BOARDS.map((board) => (
                <button
                  key={board}
                  onClick={() => setActiveBoard(board)}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer"
                  style={{
                    background: activeBoard === board ? '#36454F' : 'rgba(54,69,79,0.07)',
                    color:      activeBoard === board ? '#F7F3EE' : 'rgba(54,69,79,0.65)',
                  }}
                >
                  {board}
                </button>
              ))}
            </div>

            {/* ── Item grid ── */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 500ms 450ms' }}
            >
              {filtered.map((item) => (
                <WishlistCard key={item.id} item={item} />
              ))}
            </div>

            {/* ── Feature highlights ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                }
                title="Budget Planner"
                description="Track your vault's total value. Set a monthly budget and plan purchases across tiers — the system prioritises what to buy first based on price trends."
                accent="#C4A054"
                visible={visible}
                delay={500}
              />
              <FeatureCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                }
                title="Try On Me — Anytime"
                description="Relaunch Try On Me for any saved look, at any time. See every piece on your AI avatar before checkout — total confidence, zero returns."
                accent="#B85042"
                visible={visible}
                delay={600}
              />
              <FeatureCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#778C58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                }
                title="Smart Alerts"
                description="Automated notifications for price drops and restocks on every saved item. Never miss a deal — the vault watches so you don't have to."
                accent="#778C58"
                visible={visible}
                delay={700}
              />
              <FeatureCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36454F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                }
                title="Share & Earn"
                description="Share your wishlist with friends or followers. When someone shops directly from your curated list, you earn affiliate commissions — automatically."
                accent="#36454F"
                visible={visible}
                delay={800}
              />
            </div>

            {/* ── Bottom CTA ── */}
            {/* <div
              className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl"
              style={{
                background: 'rgba(13,12,16,0.04)',
                border: '1px solid rgba(13,12,16,0.08)',
                ...reveal(visible, 900),
              }}
            >
              <div>
                <p className="text-sm font-semibold text-charcoal mb-1">One vault. Every brand. Your style, monetised.</p>
                <p className="text-xs font-light text-charcoal/50">Replace every wishlist you've ever bookmarked.</p>
              </div>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0"
                style={{ background: '#0D0C10', color: '#F9F6F2' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#B85042')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#0D0C10')}
              >
                Build Your Vault
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div> */}

          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
