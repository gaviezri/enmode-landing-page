import { HeroVisual } from './HeroVisual'

const STEPS = [
  { n: '01', label: 'Upload', sub: 'Photo or social post' },
  { n: '02', label: 'AI Tags', sub: 'Instant recognition' },
  { n: '03', label: 'Earn',   sub: 'Auto affiliate links' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-10 pt-20 pb-16 overflow-hidden"
      style={{ background: '#F9F6F2' }}
    >
      {/* Subtle background texture blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-60 -right-60 w-[900px] h-[900px] rounded-full opacity-35"
          style={{ background: 'radial-gradient(circle, #EDE8E1 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #D6CFC6 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

        {/* ── Left ── */}
        <div className="max-w-2xl">

          {/* Headline */}
          <h1
            className="font-serif font-light leading-[0.88] tracking-tight mb-8 opacity-0 animate-fade-in-up"
            style={{
              fontFamily: 'Monda Variable, serif',
              fontSize: 'clamp(3rem, 6vw, 7.5rem)',
              color: '#0D0C10',
              animationDelay: '160ms',
              animationFillMode: 'forwards',
            }}
          >
            Turn Your Wardrobe
            <br />
            Into Revenue
            <br />
            <em className="italic" style={{ color: '#B85042' }}>Automagically.</em>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base md:text-lg font-light max-w-lg leading-[1.85] mb-10 opacity-0 animate-fade-in-up"
            style={{
              color: 'rgba(8, 8, 9, 0.76)',
              animationDelay: '280ms',
              animationFillMode: 'forwards',
            }}
          >
            <span className="font-bold">Connect</span> your gallery or social media. Our system will immediately <span className="font-bold">recognize</span> your outfits,
            attache affiliate links, and let you <span className="font-bold">earn from every look you share</span>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-3 mb-16 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '380ms', animationFillMode: 'forwards' }}
          >
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase px-8 py-4 rounded-full transition-all duration-200 cursor-pointer"
              style={{ background: '#B85042', color: '#F9F6F2' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#8C3A2E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#B85042')}
            >
              Start Earning Now
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.14em] uppercase px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
              style={{
                color: 'rgba(13,12,16,0.65)',
                border: '1px solid rgba(13,12,16,0.18)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(13,12,16,0.9)'
                e.currentTarget.style.borderColor = 'rgba(13,12,16,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(13,12,16,0.65)'
                e.currentTarget.style.borderColor = 'rgba(13,12,16,0.18)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              See How It Works
            </a>
          </div>

          {/* The Flow */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <p
              className="text-[10px] tracking-[0.24em] uppercase mb-5"
              style={{ color: 'rgba(13,12,16,0.3)' }}
            >
              The flow
            </p>
            <div className="flex items-center gap-0">
              {STEPS.map((step, i) => (
                <div key={step.n} className="flex items-center">
                  <div
                    className="rounded-2xl px-5 py-4"
                    style={{
                      background: i === 2
                        ? '#B85042'
                        : i === 1
                          ? '#0D0C10'
                          : 'rgba(13,12,16,0.05)',
                      border: i === 0
                        ? '1px solid rgba(13,12,16,0.1)'
                        : 'none',
                    }}
                  >
                    <div
                      className="text-[9px] tracking-[0.28em] uppercase mb-2"
                      style={{
                        color: i === 0
                          ? 'rgba(13,12,16,0.3)'
                          : 'rgba(249,246,242,0.45)',
                      }}
                    >
                      {step.n}
                    </div>
                    <div
                      className="font-serif text-lg font-medium leading-none mb-1"
                      style={{
                        color: i === 0 ? '#0D0C10' : '#F9F6F2',
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="text-[10px] leading-tight"
                      style={{
                        color: i === 0
                          ? 'rgba(13,12,16,0.4)'
                          : 'rgba(249,246,242,0.55)',
                      }}
                    >
                      {step.sub}
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="px-2" style={{ color: 'rgba(13,12,16,0.2)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p
              className="text-[10px] tracking-[0.18em] uppercase mt-4"
              style={{ color: 'rgba(13,12,16,0.28)' }}
            >
              Every wardrobe becomes profitable
            </p>
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div
          className="opacity-0 animate-fade-in-up lg:self-center"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          <HeroVisual />
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(13,12,16,0.25)' }}
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.28em] uppercase">Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(13,12,16,0.2), transparent)' }} />
      </div>
    </section>
  )
}
