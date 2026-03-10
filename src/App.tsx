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
  const [videoStarted, setVideoStarted] = useState(false)

  return (
    <>
      {!introComplete && <IntroOverlay onDone={() => { window.scrollTo(0, 0); setIntroComplete(true) }} onVideoStart={() => setVideoStarted(true)} />}

      <div
        className="min-h-screen"
        style={{
          opacity: videoStarted || introComplete ? 1 : 0,
        }}
      >
        <Nav />
        <main>
          <HeroSection introComplete={introComplete} />
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
