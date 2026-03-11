import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Check if nav (at y=32, middle of 64px nav) overlaps a dark section
      const navY = 32
      const darkSections = document.querySelectorAll<HTMLElement>('#features, footer')
      let dark = false
      for (const section of darkSections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= navY && rect.bottom >= navY) {
          dark = true
          break
        }
      }
      setOverDark(dark)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoColor = overDark ? '#F0EBE5' : '#0D0C10'
  const ctaTextColor = overDark ? 'rgba(240,235,229,0.7)' : 'rgba(13,12,16,0.7)'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: 'transparent',
        borderBottom: scrolled ? `1px solid ${overDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'}` : '1px solid transparent',
      }}
    >
      {scrolled && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.3) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.3) 100%)',
            background: overDark
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.04) 100%)',
            zIndex: 0,
          }}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo overridColor={logoColor} />

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
          style={{ color: ctaTextColor, transition: 'color 0.4s ease' }}
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
