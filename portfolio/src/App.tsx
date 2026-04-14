import { useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import ProjectPage from './components/ProjectPage'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 34,
    damping: 18,
    mass: 1.05,
  })

  return (
    <main className="page">
      <div className="scroll-container" ref={containerRef}>
        <div className="sticky-wrapper">
          <LandingPage scrollProgress={smoothProgress} />
          <ProjectPage scrollProgress={smoothProgress} />
        </div>
      </div>

      <section className="after-section">
        <div className="after-inner">
          <h2>
            Ready to build <em>something</em> remarkable?
          </h2>
          <p>
            Open for freelance and full-time opportunities. Let&apos;s create work that lasts.
          </p>
          <button className="cta-btn">Get in touch</button>
        </div>
      </section>
    </main>
  )
}

export default App
