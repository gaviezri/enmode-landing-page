import { useState, type FormEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

const SECTION_LINKS: { label: string; href: string }[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'Wishlist',     href: '#wishlist' },
]

const SNOW = 'rgba(237,232,226,'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'sending') return

    setStatus('sending')
    try {
      await addDoc(collection(db, 'waitlist'), {
        email,
        joinedAt: serverTimestamp(),
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer style={{ background: '#08070B' }}>
      {/* Waitlist CTA Banner */}
      <div
        id="waitlist"
        className="px-6 py-24"
        style={{ borderBottom: `1px solid ${SNOW}0.06)` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.28em] uppercase mb-6" style={{ color: `${SNOW}0.28)` }}>
            Join the waitlist
          </p>
          <h2
            className="font-serif font-bold leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: '#EDE8E2' }}
          >
            Your wardrobe.<br />
            <em className="italic" style={{ color: '#B85042' }}>Your income.</em>
          </h2>
          <p className="text-base font-light leading-[1.8] mb-10 max-w-md mx-auto" style={{ color: `${SNOW}0.55)` }}>
            No following required. When someone buys from your look,
            you earn — quietly, automatically.
          </p>

          {/* Email signup */}
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 py-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AAD7A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-sm font-medium" style={{ color: '#9AAD7A' }}>
                You're on the list. We'll be in touch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-5 py-4 rounded-full text-sm outline-none transition-all duration-200"
                style={{
                  background: `${SNOW}0.05)`,
                  border: `1px solid ${SNOW}0.1)`,
                  color: '#EDE8E2',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = `${SNOW}0.3)`
                  e.target.style.background = `${SNOW}0.08)`
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = `${SNOW}0.1)`
                  e.target.style.background = `${SNOW}0.05)`
                }}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-7 py-4 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer flex-shrink-0"
                style={{
                  background: status === 'sending' ? '#8C3A2E' : '#B85042',
                  color: '#EDE8E2',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
                onMouseEnter={(e) => status !== 'sending' && (e.currentTarget.style.background = '#8C3A2E')}
                onMouseLeave={(e) => status !== 'sending' && (e.currentTarget.style.background = '#B85042')}
              >
                {status === 'sending' ? 'Joining...' : 'Get Early Access'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-4 text-[11px]" style={{ color: '#B85042' }}>
              Something went wrong. Please try again.
            </p>
          )}

          {status !== 'success' && (
            <p className="mt-5 text-[11px]" style={{ color: `${SNOW}0.24)` }}>
              No spam. Unsubscribe at any time.
            </p>
          )}
        </div>
      </div>

      {/* Footer links */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-10 mb-14">
            {/* Brand column */}
            <div className="flex-1">
              <a
                href="#"
                className="block mb-4 transition-opacity duration-200 hover:opacity-60"
                style={{
                  fontFamily: 'Syne, system-ui, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '0.06em',
                  color: '#EDE8E2',
                }}
              >
                EnMode
              </a>
              <p className="text-sm font-light leading-relaxed" style={{ color: `${SNOW}0.35)` }}>
                Fashion, elevated. Share the looks you love.
              </p>
            </div>

            {/* Product links */}
            <div>
              <h3 className="text-[10px] tracking-[0.22em] uppercase mb-5 font-medium" style={{ color: `${SNOW}0.28)` }}>
                Product
              </h3>
              <ul className="space-y-3">
                {SECTION_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm font-light transition-colors duration-200 cursor-pointer"
                      style={{ color: `${SNOW}0.45)` }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = `${SNOW}0.85)`)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = `${SNOW}0.45)`)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: `1px solid ${SNOW}0.06)` }}
          >
            <p className="text-[11px]" style={{ color: `${SNOW}0.2)` }}>
              © {new Date().getFullYear()} EnMode. All rights reserved.
            </p>
            <p className="text-[11px]" style={{ color: `${SNOW}0.16)` }}>
              Crafted with obsession.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
