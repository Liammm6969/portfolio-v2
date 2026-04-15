import { AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage.tsx'
import ProjectPage from './components/ProjectPage.tsx'
import ProjectDetailPage, { type Project } from './components/ProjectDetailPage.tsx'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
          <ProjectPage scrollProgress={smoothProgress} onExplore={(project) => setSelectedProject(project)} />
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

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPage
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
