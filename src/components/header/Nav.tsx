import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.12)' : 'transparent',
        backdropFilter: scrolled ? 'blur(40px) saturate(200%) brightness(1.1)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(200%) brightness(1.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.25)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
       <Logo />

        {/* Nav links
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Discover', href: '#discover' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer"
              style={{ color: 'rgba(13,12,16,0.45)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(13,12,16,0.9)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(13,12,16,0.45)')}
            >
              {label}
            </a>
          ))}
        </div> */}

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
          style={{
            background: '#B85042',
            color: '#F9F6F2',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#8C3A2E')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#B85042')}
        >
          Join Waitlist
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer"
          style={{ color: 'rgba(13,12,16,0.7)' }}
          aria-label="Open navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
