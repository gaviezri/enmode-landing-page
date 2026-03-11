import { useEffect, useRef, useState } from 'react'
import { StepBento } from './StepBento'
import { useNavTheme } from '../../context/NavThemeContext'
import type { ScrollStep } from '../../types'

const STEPS: ScrollStep[] = [
  {
    num: '01',
    label: 'Digitize',
    heading: 'Your Wardrobe,\nAlive.',
    body: 'Connect your gallery or social media. Our AI scans every photo, recognises each garment, and builds your digital wardrobe automatically — tagged, categorised, linked.',
  },
  {
    num: '02',
    label: 'Style',
    heading: 'Outfits You\nNever Imagined.',
    body: "Your personal AI stylist generates looks from clothes you already own — trend-aware, designer-level combinations you wouldn't have thought of. Every outfit rendered on your AI avatar: your face, your measurements, your body.",
  },
  {
    num: '03',
    label: 'Earn',
    heading: 'Your Style\nPays You.',
    body: 'Expose selected looks on your public wardrobe. When anyone shops your style, you earn affiliate commission automatically — no brand deals, no follower minimum.',
  },
]

function useScrollStory(sectionRef: React.RefObject<HTMLDivElement | null>) {
  const [activeStep, setActiveStep] = useState(0)
  const [stepProgress, setStepProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const total = Math.min(1, scrolled / sectionHeight)
      const step = Math.min(2, Math.floor(total * 3))
      const sp = (total * 3) % 1
      setActiveStep(step)
      setStepProgress(step === 2 ? 1 : sp)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRef])

  return { activeStep, stepProgress }
}

export default function ScrollStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { activeStep, stepProgress } = useScrollStory(sectionRef)
  const { setNavTheme } = useNavTheme()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const check = () => {
      const { top, bottom } = el.getBoundingClientRect()
      setNavTheme(top <= 104 && bottom > 64 ? 'dark' : 'light')
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [setNavTheme])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{ height: '270vh', background: '#0F0E11' }}
      className="relative"
    >
      {/* Top eyebrow */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-16 pointer-events-none" aria-hidden="true">
        <p className="text-[10px] tracking-[0.28em] uppercase" style={{ color: 'rgba(240,235,229,0.22)' }}>
          Digitize · Style · Earn
        </p>
      </div>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-20 items-start">

            {/* ── Left: Copy ── */}
            <div className="flex flex-col justify-center">

              {/* Step tabs */}
              <div className="flex items-center gap-8 mb-10">
                {STEPS.map((s, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 transition-all duration-300 cursor-pointer"
                    style={{ opacity: activeStep === i ? 1 : 0.28 }}
                  >
                    <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: activeStep === i ? '#B85042' : '#F0EBE5' }}>
                      {s.num}
                    </span>
                    <span className="text-[10px] tracking-[0.14em] uppercase font-medium" style={{ color: '#F0EBE5' }}>
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Heading — fixed height large enough for 2 lines at max size */}
              <div className="relative mb-6" style={{ height: '14rem' }}>
                {STEPS.map((s, i) => (
                  <h2
                    key={i}
                    className="absolute top-0 left-0 font-serif font-light whitespace-pre-line transition-all"
                    style={{
                      fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                      lineHeight: 1.05,
                      color: '#F0EBE5',
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i
                        ? 'translateY(0)'
                        : activeStep > i ? 'translateY(-28px)' : 'translateY(28px)',
                      transitionDuration: '550ms',
                      transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {s.heading}
                  </h2>
                ))}
              </div>

              {/* Body */}
              <div className="relative mb-10" style={{ height: '6rem' }}>
                {STEPS.map((s, i) => (
                  <p
                    key={i}
                    className="absolute top-0 left-0 text-base font-light leading-[1.8] transition-all max-w-md"
                    style={{
                      color: 'rgba(240,235,229,0.52)',
                      opacity: activeStep === i ? 1 : 0,
                      transform: activeStep === i
                        ? 'translateY(0)'
                        : activeStep > i ? 'translateY(-14px)' : 'translateY(14px)',
                      transitionDuration: '550ms',
                      transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {s.body}
                  </p>
                ))}
              </div>

              {/* Progress bars */}
              <div className="flex gap-2 max-w-xs">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-px flex-1 overflow-hidden"
                    style={{ background: 'rgba(240,235,229,0.1)', borderRadius: 1 }}
                  >
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        background: '#B85042',
                        width: i < activeStep ? '100%' : i === activeStep ? `${stepProgress * 100}%` : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Bento ── */}
            <div className="hidden lg:block">
              <StepBento activeStep={activeStep} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
