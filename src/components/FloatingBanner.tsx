import { useEffect, useState } from 'react'

export default function FloatingBanner() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent >= 0.5 && !dismissed) {
        setShow(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [dismissed])

  if (dismissed || !show) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9000,
        maxWidth: 480,
        width: 'calc(100% - 32px)',
        background: 'rgba(15, 14, 17, 0.92)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        animation: 'fadeInUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#F0EBE5', marginBottom: 2 }}>
          Join the waitlist
        </p>
        <p style={{ fontSize: 11, color: 'rgba(240,235,229,0.5)', lineHeight: 1.5 }}>
          Be the first to turn your wardrobe into income.
        </p>
      </div>

      <a
        href="#waitlist"
        onClick={() => setDismissed(true)}
        style={{
          flexShrink: 0,
          padding: '8px 18px',
          borderRadius: 999,
          background: '#B85042',
          color: '#F0EBE5',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          textDecoration: 'none',
          transition: 'background 200ms',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#8C3A2E')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#B85042')}
      >
        Join
      </a>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Close banner"
        style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: 'none',
          color: 'rgba(240,235,229,0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          lineHeight: 1,
          transition: 'background 200ms',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
