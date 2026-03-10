import { useState } from 'react'
import { RevealWrapper } from '../ui/RevealWrapper'
import { SectionLabel } from '../ui/SectionLabel'
import { VaultCard } from './VaultCard'
import { StatCard } from './StatCard'
import { GapAlert } from './GapAlert'
import { VAULT_ITEMS, BOARDS, type Board } from './data'

function reveal(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: `opacity 700ms ${delay}ms, transform 700ms ${delay}ms`,
  }
}

export default function StyleVaultSection() {
  const [activeBoard, setActiveBoard] = useState<Board>('All')

  const filteredItems = activeBoard === 'All'
    ? VAULT_ITEMS
    : VAULT_ITEMS.filter(i => i.board === activeBoard)

  const totalValue   = filteredItems.reduce((sum, i) => sum + i.price, 0)
  const totalSavings = filteredItems.reduce((sum, i) => sum + (i.originalPrice ? i.originalPrice - i.price : 0), 0)
  const alertCount   = filteredItems.filter(i => i.alert).length

  return (
    <RevealWrapper threshold={0.06}>
      {(visible) => (
        <section id="style-vault" className="py-28 px-6" style={{ background: '#F0EBE2' }}>
          <div className="max-w-7xl mx-auto">

            {/* ── Header ── */}
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
              <div>
                <SectionLabel visible={visible}>Style Vault</SectionLabel>
                <h2
                  className="font-serif font-light text-charcoal leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', ...reveal(visible, 100) }}
                >
                  The Only Wishlist<br />
                  <em className="italic" style={{ color: '#B85042' }}>You'll Ever Need.</em>
                </h2>
              </div>

              <div style={reveal(visible, 200)}>
                <p className="text-base font-light text-charcoal/65 leading-[1.75] mb-6">
                  Not just a shopping cart — a personal Style Vault that aggregates items from
                  hundreds of brands into one curated space. Track prices, plan budgets, share
                  mood boards, and earn commissions when friends shop your list.
                </p>

                {/* Social share card */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-cream-dark">
                  <div className="flex -space-x-2">
                    {['#B85042', '#778C58', '#36454F'].map((color, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: color }} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-xs text-charcoal/70 flex-1">
                    Share your vault — earn commissions when friends shop your curated list.
                  </p>
                  <button className="text-[10px] font-semibold tracking-wide px-3 py-2 rounded-lg cursor-pointer" style={{ background: '#36454F', color: '#F7F3EE' }}>
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* ── Stats ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <StatCard label="Vault Value"   value={`$${totalValue.toLocaleString()}`} sub="Total across all boards"      accent="#36454F" visible={visible} delay={100} />
              <StatCard label="Saved Today"   value={`$${totalSavings}`}                sub="Via price drops & alerts"     accent="#B85042" visible={visible} delay={200} />
              <StatCard label="Active Alerts" value={String(alertCount)}                sub="Price drops & restock alerts"  accent="#778C58" visible={visible} delay={300} />
              <StatCard label="Items Saved"   value={String(filteredItems.length)}       sub={`Across ${BOARDS.length - 1} mood boards`} accent="#36454F" visible={visible} delay={400} />
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
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 500ms 450ms' }}
            >
              {filteredItems.map((item) => (
                <VaultCard key={item.id} item={item} />
              ))}
            </div>

            {/* ── Gap Analysis + Smart Alerts ── */}
            <div className="grid lg:grid-cols-2 gap-6" style={reveal(visible, 550)}>
              {/* AI Gap Analysis */}
              <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(119,140,88,0.12)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#778C58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal">AI Gap Analysis</h3>
                </div>
                <div className="space-y-3">
                  <GapAlert type="suggestion" text="You have 3 outerwear pieces in your Vault — would you like to find matching trousers to complete the looks?" />
                  <GapAlert type="suggestion" text="Your Evening Aesthetics board is missing footwear. Strappy heels at $450–$980 would be a perfect match." />
                  <GapAlert type="saving"     text="Buying the Tailored Trousers and Structured Blazer together saves $85 at Toteme's current bundle discount." />
                </div>
              </div>

              {/* Smart Alerts */}
              <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(184,80,66,0.1)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B85042" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal">Smart Alerts</h3>
                </div>
                <div className="space-y-3">
                  <GapAlert type="restock" text="The Max Mara Cashmere Coat in your size just restocked. Only 2 left — it was sold out for 3 weeks." />
                  <GapAlert type="saving"  text="The Oversized Cashmere dropped from $2,390 to $1,950 — that's a $440 saving on a Vault favourite." />
                  <GapAlert type="restock" text="Agolde Wide-Leg Jeans in your size (W26) are low in stock. Last seen at this price 4 months ago." />
                </div>
              </div>
            </div>

          </div>
        </section>
      )}
    </RevealWrapper>
  )
}
