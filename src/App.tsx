import { useState } from 'react'
import './App.css'
import IntroOverlay from './components/IntroOverlay'
import Nav from './components/header/Nav'
import HeroSection from './components/hero'
import ScrollStorySection from './components/scroll-story'
import AnatomicSection from './components/anatomic'
import MixMatchSection from './components/mix-match'
import StyleVaultSection from './components/style-vault'
import Footer from './components/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete && <IntroOverlay onDone={() => { window.scrollTo(0, 0); setIntroComplete(true) }} />}

      <div
        className="min-h-screen"
        style={{
          opacity: introComplete ? 1 : 0,
          transform: introComplete ? 'scale(1)' : 'scale(0.08)',
          transformOrigin: 'center 10vh',
          transition: introComplete
            ? 'opacity 0.9s cubic-bezier(0,.63,.25,.76), transform 1s cubic-bezier(0,.63,.25,.76)'
            : 'none',
        }}
      >
        <Nav />
        <main>
          <HeroSection />
          <ScrollStorySection />
          <AnatomicSection />
          <MixMatchSection />
          <StyleVaultSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
