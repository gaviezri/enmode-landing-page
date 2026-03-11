import { useRef, useState } from 'react'
// import introMp4 from '../assets/intro-garments-to-money.mp4'
import introMp4 from '../assets/intro-garments-away.mp4'

interface Props {
  onDone: () => void
  onVideoStart: () => void
}

const START_VIDEO_OFFSET_MS = 1800;   // ms to skip from the beginning
const END_VIDEO_MS_BEFORE = 2700;

const FADE_START_S = 1.5 // seconds before end to start fading the video

export default function IntroOverlay({ onDone, onVideoStart }: Props) {
  const [fading, setFading] = useState(false)
  const dismissed = useRef(false)
  const fadeStarted = useRef(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const dismiss = () => {
    if (dismissed.current) return
    dismissed.current = true
    setFading(true)
    setTimeout(onDone, 100)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return

    const { duration, currentTime } = videoRef.current
    if (!duration) return

    const endOffset = END_VIDEO_MS_BEFORE / 1000
    const timeLeft = duration - endOffset - currentTime

    // Trigger a single CSS transition — browser interpolates every frame, no jumps
    if (timeLeft <= FADE_START_S && !fadeStarted.current) {
      fadeStarted.current = true
      videoRef.current.style.transition = `opacity ${Math.max(0, timeLeft)}s linear`
      videoRef.current.style.opacity = '0'
    }

    if (currentTime >= duration - endOffset) {
      videoRef.current.pause()
      dismiss()
    }
  }


  return (
    <div
      onClick={dismiss}
      onKeyDown={dismiss}
      onTouchStart={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#F9F6F2',
        cursor: 'pointer',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.1s ease-out',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <video
        ref={videoRef}
        src={introMp4}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={() => {
          if (videoRef.current && START_VIDEO_OFFSET_MS > 0) {
            videoRef.current.currentTime = START_VIDEO_OFFSET_MS / 1000;
            videoRef.current.playbackRate = 1.5;
          }
        }}
        onPlay={onVideoStart}
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.15)',
        }}
      />
    </div>
  )
}