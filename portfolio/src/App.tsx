import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage.tsx'
import ProjectShowcase from './components/ProjectShowcase.tsx'
import EducationSection from './components/EducationSection.tsx'
import ProjectDetailPage, { type Project } from './components/ProjectDetailPage.tsx'
import { PROJECT_CARDS } from './data/projects.ts'

type DetailTransitionMode = 'open' | 'next' | 'close'

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [transitionMode, setTransitionMode] = useState<DetailTransitionMode>('open')
  const allProjects = PROJECT_CARDS.map(({ project }) => project)
  const preloadedImageSetRef = useRef(new Set<string>())

  const preloadProjectImages = (project: Project) => {
    project.uiScreens.forEach((src) => {
      if (preloadedImageSetRef.current.has(src)) return
      preloadedImageSetRef.current.add(src)
      const image = new Image()
      image.decoding = 'async'
      image.src = src
    })
  }

  useEffect(() => {
    allProjects.forEach(preloadProjectImages)
  }, [])

  const handleNextProject = () => {
    if (!selectedProject) return

    const sameLabelProjects = allProjects.filter((project) => project.label === selectedProject.label)
    if (sameLabelProjects.length <= 1) return

    const currentIndex = sameLabelProjects.findIndex((project) => project.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % sameLabelProjects.length
    preloadProjectImages(sameLabelProjects[nextIndex])
    setTransitionMode('next')
    setSelectedProject(sameLabelProjects[nextIndex])
  }

  return (
    <main className="page">
      <LandingPage />

      <ProjectShowcase 
        onExplore={(project) => {
          preloadProjectImages(project)
          setTransitionMode('open')
          setSelectedProject(project)
        }} 
      />

      <EducationSection />

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

      <AnimatePresence initial={false}>
        {selectedProject && (
          <ProjectDetailPage
            key={selectedProject.id}
            project={selectedProject}
            transitionMode={transitionMode}
            onClose={() => {
              setTransitionMode('close')
              setSelectedProject(null)
            }}
            onNextProject={handleNextProject}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
