import { AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import DigitalFootprintPrompt from './components/DigitalFootprintPrompt.tsx'
import FootprintLocationMap from './components/FootprintLocationMap.tsx'
import LandingPage from './components/LandingPage.tsx'
import TechStackSection from './components/TechStackSection.tsx'
import ProjectShowcase from './components/ProjectShowcase.tsx'
import EducationSection from './components/EducationSection.tsx'
import GitHubContributionsSection from './components/GitHubContributionsSection.tsx'
import ProjectDetailPage, { type Project } from './components/ProjectDetailPage.tsx'
import { PROJECT_CARDS } from './data/projects.ts'

type DetailTransitionMode = 'open' | 'next' | 'close'
type FootprintPromptStep = 'intro' | 'compare'

type FootprintData = {
  ip?: string
  city?: string
  region?: string
  country?: string
  timezone?: string
  browser?: string
  platform?: string
  language?: string
  screen?: string
  latitude?: number
  longitude?: number
  location?: { latitude: number; longitude: number; accuracy: number }
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [transitionMode, setTransitionMode] = useState<DetailTransitionMode>('open')
  const [showFootprintPrompt, setShowFootprintPrompt] = useState(false)
  const [footprintPromptStep, setFootprintPromptStep] = useState<FootprintPromptStep>('intro')
  const [locationRequested, setLocationRequested] = useState(false)
  const [footprintStatus, setFootprintStatus] = useState<'idle' | 'scanning' | 'ready'>('idle')
  const [showFootprint, setShowFootprint] = useState(false)
  const [footprintData, setFootprintData] = useState<FootprintData>({})
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

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFootprintPrompt(true), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  const loadNetworkFootprint = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      if (!response.ok) throw new Error('Network footprint unavailable')
      const networkData = await response.json() as FootprintData
      setFootprintData((current) => ({ ...current, ...networkData }))
    } catch {
      setFootprintData((current) => ({ ...current }))
    }
  }

  const finishFootprintScan = async () => {
    await loadNetworkFootprint()
    setFootprintStatus('ready')
  }

  const requestLocation = () => {
    setShowFootprintPrompt(false)
    setLocationRequested(true)
    setFootprintStatus('scanning')
    if (!navigator.geolocation) {
      void finishFootprintScan()
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setFootprintData((current) => ({
          ...current,
          location: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
          },
        }))
        void finishFootprintScan()
      },
      () => void finishFootprintScan(),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 },
    )
  }

  const startFootprintScan = (withLocation: boolean) => {
    setShowFootprintPrompt(false)
    setFootprintStatus('scanning')
    setFootprintData({
      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${window.screen.width} × ${window.screen.height}`,
    })
    if (withLocation) requestLocation()
    else void finishFootprintScan()
  }

  const mapLocation = footprintData.location || (
    footprintData.latitude !== undefined && footprintData.longitude !== undefined
      ? { latitude: footprintData.latitude, longitude: footprintData.longitude }
      : undefined
  )

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

      <TechStackSection />

      <ProjectShowcase 
        onExplore={(project) => {
          preloadProjectImages(project)
          setTransitionMode('open')
          setSelectedProject(project)
        }} 
      />

      <EducationSection />

      <GitHubContributionsSection />

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

      {showFootprintPrompt && (
        <DigitalFootprintPrompt
          step={footprintPromptStep}
          onExplore={() => setFootprintPromptStep('compare')}
          onAllow={() => startFootprintScan(true)}
          onContinueWithoutLocation={() => startFootprintScan(false)}
          onClose={() => setShowFootprintPrompt(false)}
        />
      )}

      {footprintStatus === 'scanning' && (
        <div className="footprint-toast footprint-toast-scanning" role="status">
          <span className="footprint-pulse" aria-hidden="true" /> Reading your digital footprint...
        </div>
      )}

      {footprintStatus === 'ready' && !showFootprint && (
        <div className="footprint-toast" role="status">
          <div>
            <strong>Digital footprint ready</strong>
            <span>See the information available to this browser.</span>
          </div>
          <button onClick={() => setShowFootprint(true)}>View what we found →</button>
        </div>
      )}

      {showFootprint && (
        <div className="footprint-overlay" role="presentation">
          <div className="footprint-results" role="dialog" aria-modal="true" aria-labelledby="footprint-results-title">
            <button className="footprint-close" onClick={() => setShowFootprint(false)} aria-label="Close footprint results">×</button>
            <span className="footprint-eyebrow">YOUR VISIBLE SIGNALS</span>
            <h2 id="footprint-results-title">Here is what this visit reveals.</h2>
            {mapLocation && (
              <FootprintLocationMap
                latitude={mapLocation.latitude}
                longitude={mapLocation.longitude}
                isPrecise={Boolean(footprintData.location)}
              />
            )}
            <div className="footprint-grid">
              <span>IP address</span><strong>{footprintData.ip || 'Unavailable'}</strong>
              <span>Network location</span><strong>{footprintData.city ? `${footprintData.city}, ${footprintData.country}` : 'Unavailable'}</strong>
              <span>Timezone</span><strong>{footprintData.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone}</strong>
              <span>Device</span><strong>{footprintData.platform || 'Unavailable'}</strong>
              <span>Display</span><strong>{footprintData.screen || 'Unavailable'}</strong>
              <span>Browser</span><strong>{footprintData.browser || 'Unavailable'}</strong>
              <span>Device location</span><strong>{footprintData.location ? `${footprintData.location.latitude.toFixed(2)}, ${footprintData.location.longitude.toFixed(2)}` : locationRequested ? 'Unavailable' : 'Not shared'}</strong>
            </div>
            <p className="footprint-note">Network estimates are approximate. Precise location is only available when you explicitly allow it.</p>
          </div>
        </div>
      )}

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
