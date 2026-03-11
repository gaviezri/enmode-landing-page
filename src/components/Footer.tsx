import { useState, type FormEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

const SECTION_LINKS: { label: string; href: string }[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'Wishlist',     href: '#wishlist' },
]

const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: 'Privacy Policy',  href: '#' },
  { label: 'Terms of Service', href: '#' },
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
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
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: `${SNOW}0.35)` }}>
                Fashion, elevated. Share the looks you love.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-3">
                {[
                  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'TikTok',    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
                  { label: 'Pinterest', path: 'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                    style={{ background: `${SNOW}0.06)`, border: `1px solid ${SNOW}0.08)` }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${SNOW}0.12)`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = `${SNOW}0.06)`)}
                    aria-label={label}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={`${SNOW}0.55)`} aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
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

            {/* Legal links */}
            <div>
              <h3 className="text-[10px] tracking-[0.22em] uppercase mb-5 font-medium" style={{ color: `${SNOW}0.28)` }}>
                Legal
              </h3>
              <ul className="space-y-3">
                {LEGAL_LINKS.map(({ label, href }) => (
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
