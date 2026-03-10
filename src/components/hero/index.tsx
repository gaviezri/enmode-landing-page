import { HeroVisual } from './HeroVisual'
import StepsFlow from './StepsFlow'

export default function HeroSection({ introComplete }: { introComplete?: boolean }) {
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

        {/* ── Left: Text ── */}
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
            attach affiliate links, and let you <span className="font-bold">earn from every look</span> you display on your public <span className="font-extrabold text-1xl" style={{ color: '#B85042' }}>digital wardrobe</span>
          </p>

          {/* The Flow — mobile only */}
          <div
            className="lg:hidden opacity-0 animate-fade-in-up"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <p
              className="text-[10px] tracking-[0.24em] uppercase mb-5"
              style={{ color: 'rgba(13,12,16,0.3)' }}
            >
              The flow
            </p>
            <StepsFlow introComplete={introComplete} />
            <p
              className="text-[10px] tracking-[0.18em] uppercase mt-4"
              style={{ color: 'rgba(13,12,16,0.28)' }}
            >
              Every wardrobe becomes profitable
            </p>
          </div>
        </div>

        {/* ── Right: The Flow (desktop) ── */}
        <div
          className="hidden lg:flex flex-col justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          <p
            className="text-[10px] tracking-[0.24em] uppercase mb-5"
            style={{ color: 'rgba(13,12,16,0.3)' }}
          >
            The flow
          </p>
          <StepsFlow />
          <p
            className="text-[10px] tracking-[0.18em] uppercase mt-4"
            style={{ color: 'rgba(13,12,16,0.28)' }}
          >
            Every wardrobe becomes profitable
          </p>
        </div>
      </div>
    </section>
  )
}
