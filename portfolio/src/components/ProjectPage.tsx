import { AnimatePresence, motion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { Project } from './ProjectDetailPage.tsx'

export const PROJECT_CARDS = [
  {
    id: 1,
    label: 'Mobile',
    title: 'Hydration Tracker',
    desc: 'A mobile app that tracks your daily hydration goals and helps you stay hydrated.',
    accent: '#c8a97e',
    bg: '#161410',
    icon: '✦',
    project: {
      id: 1,
      title: 'Hydration Tracker',
      label: 'Mobile Application',
      description: 'A smart hydration companion designed to build consistent daily habits through adaptive insights and minimal user friction.',
      longDesc:
        'Hydration Tracker is a behavior-driven wellness application focused on helping users stay consistently hydrated without adding cognitive load. The system integrates adaptive reminders, real-time activity awareness, and personalized hydration goals based on user behavior and environmental factors.\n\nThe core challenge was designing a system that motivates without overwhelming. Instead of rigid tracking, the app uses lightweight interactions, contextual nudges, and clear progress visualization to reinforce positive habits. Features such as streak tracking, beverage impact analysis (coffee, soda, tea), and activity-based adjustments create a more intelligent and responsive experience.\n\nBuilt with performance and scalability in mind, the app leverages Expo and React Native for cross-platform development, while maintaining a smooth and responsive UI through efficient state management and optimized background processes.',
      year: '2026',
      role: 'Full-Stack Developer',
      accent: '#c8a97e',
      bg: '#161410',
      techStack: [
        { name: 'React Native', category: 'Mobile' },
        { name: 'TypeScript', category: 'Development' },
        { name: 'Expo', category: 'Mobile Framework' },
        { name: 'Framer Motion', category: 'Animation' },
      ],
      uiScreens: [
        '/hydration_1.png',
        '/hydration_2.png',
        '/hydration_3.png',
      ],
      liveUrl: '#',
      repoUrl: '#',
    },
  },
  {
    id: 2,
    label: 'Web',
    title: 'Personal Portfolio',
    desc: 'A personal portfolio website that showcases my work and skills.',
    accent: '#7eb5c8',
    bg: '#0f1416',
    icon: '◈',
    project: {
      id: 2,
      title: 'Personal Portfolio',
      label: 'Web Experience',
      description: 'A premium portfolio experience crafted around storytelling and interaction.',
      longDesc:
        'This portfolio project focuses on editorial layout, scroll choreography, and performance-forward animation. The goal was to present project work in a way that feels intentional and memorable without sacrificing accessibility.\n\nI built a component-driven design system for reusable sections and smooth transitions between landing and detail contexts. Every interaction was tuned to feel elegant and responsive across device sizes.',
      year: '2026',
      role: 'Frontend Engineer · UI Designer',
      accent: '#7eb5c8',
      bg: '#0f1416',
      techStack: [
        { name: 'React', category: 'Web' },
        { name: 'Vite', category: 'Build' },
        { name: 'Framer Motion', category: 'Motion' },
        { name: 'TypeScript', category: 'Dev' },
        { name: 'CSS', category: 'UI' },
      ],
      uiScreens: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85',
        'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1400&q=85',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1400&q=85',
      ],
      liveUrl: '#',
      repoUrl: '#',
    },
  },
  {
    id: 3,
    label: 'System',
    title: 'Inventory Management System',
    desc: 'A system that manages the inventory of a business.',
    accent: '#a87ec8',
    bg: '#130f16',
    icon: '⬡',
    project: {
      id: 3,
      title: 'Inventory Management System',
      label: 'Business System',
      description: 'A dashboard-first inventory system for tracking stock, orders, and suppliers.',
      longDesc:
        'The inventory platform was created for teams that needed real-time stock visibility across multiple branches. The interface emphasizes clarity: low cognitive load tables, meaningful alerts, and role-based workflows.\n\nI focused on building a robust UI architecture that could scale with new modules such as purchasing, forecasting, and low-stock automation. The result is a system that improves operational confidence and reduces manual errors.',
      year: '2025',
      role: 'Full Stack Developer',
      accent: '#a87ec8',
      bg: '#130f16',
      techStack: [
        { name: 'React', category: 'Web' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Prisma', category: 'ORM' },
        { name: 'Chart.js', category: 'Analytics' },
      ],
      uiScreens: [
        'https://images.unsplash.com/photo-1551281044-8b8f3c6a1f7c?w=1400&q=85',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=85',
      ],
      liveUrl: '#',
      repoUrl: '#',
    },
  },
  {
    id: 4,
    label: 'Collaboration',
    title: 'Interaction Design',
    desc: 'Choreographed micro-interactions that feel native and intuitive.',
    accent: '#7ec8a0',
    bg: '#0f1612',
    icon: '◎',
    project: {
      id: 4,
      title: 'Interaction Design Lab',
      label: 'Collaboration Platform',
      description: 'A collaborative design workspace centered around interactive prototypes.',
      longDesc:
        'Interaction Design Lab explores how teams can review and iterate quickly on motion-rich prototypes. The product combines threaded feedback, version snapshots, and shareable review links in one focused workflow.\n\nMy work included interaction architecture, component states, and animation systems that communicate hierarchy and intent. The interface is optimized for review speed while preserving a premium feel.',
      year: '2025',
      role: 'Product Designer · Frontend Engineer',
      accent: '#7ec8a0',
      bg: '#0f1612',
      techStack: [
        { name: 'Next.js', category: 'Web' },
        { name: 'TypeScript', category: 'Dev' },
        { name: 'Framer Motion', category: 'Motion' },
        { name: 'Supabase', category: 'Backend' },
        { name: 'Tailwind CSS', category: 'UI' },
      ],
      uiScreens: [
        'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1400&q=85',
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=85',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85',
      ],
      liveUrl: '#',
      repoUrl: '#',
    },
    
  },
  {
    id: 5,
    label: 'Mobile',
    title: 'Weather App',
    desc: 'A weather app that shows the current weather and forecast for a given location.',
    accent: '#d09b7b',
    bg: '#14110f',
    icon: '✦',
    project: {
      id: 5,
      title: 'Weather App',
      label: 'Mobile Application',
      description: 'A weather app that shows the current weather and forecast for a given location.',
      longDesc: 'The weather app is a mobile application that allows users to view the current weather and forecast for a given location. The app uses the OpenWeatherMap API to get the weather data and displays it in a user-friendly interface.',
      year: '2026',
      role: 'Mobile Developer',
      accent: '#d09b7b',
      bg: '#14110f',
      techStack: [
        { name: 'React Native', category: 'Mobile' },
        { name: 'TypeScript', category: 'UI' },
        { name: 'Vite', category: 'Build' },
        { name: 'OpenWeatherMap API', category: 'API' },
      ],
      uiScreens: ['/weather_1.png', '/weather_2.png', '/weather_3.png'],
      liveUrl: '#',
      repoUrl: '#'
    }
  },
  {
  id: 6,
  label: 'System',
  title: 'Attendr',
  desc: 'A geo-verified attendance and OJT monitoring system with QR-based validation and real-time tracking.',
  accent: '#d09b7b',
  bg: '#14110f',
  icon: '✦',
  project: {
    id: 6,
    title: 'Attendr',
    label: 'OJT Attendance Monitoring System',
    description: 'A real-time attendance system that uses QR scanning and geolocation to ensure valid time-in and time-out for interns.',
    longDesc: 'Attendr is a full-stack OJT attendance monitoring system designed to replace manual logbooks and unreliable tracking methods. The system allows interns to time in and out by scanning a QR code using their mobile browser, while verifying their physical presence through GPS-based geofencing.\n\nThe platform includes a real-time dashboard for administrators to monitor attendance, track accumulated hours, and identify irregularities such as late logins or missing records. It also features automated hour computation, daily logs, and report generation.\n\nThe system was built with a mobile-first approach using a Vite + TypeScript frontend, ensuring fast performance and a responsive user experience across devices. Real-time updates are handled through WebSockets, allowing attendance data to reflect instantly across dashboards.',
    year: '2026',
    role: 'Full Stack Developer',
    accent: '#d09b7b',
    bg: '#14110f',
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Vite', category: 'Build Tool' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express', category: 'API' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'Socket.io', category: 'Realtime' },
      { name: 'html5-qrcode', category: 'QR Scanning' }
    ],
    uiScreens: ['/attendr_1.png', '/attendr_2.png', '/attendr_3.png'],
    liveUrl: 'https://ojt-attendance-nine.vercel.app',
    repoUrl: '#'
  }
}
]

type CardLayout = {
  driftX: number
  startYOffset: number
  endYOffset: number
  rotate: number
  zIndex: number
}

const CARD_LAYOUT: CardLayout[] = [
  { driftX: -160, startYOffset: 980, endYOffset: -180, rotate: -7, zIndex: 2 },
  { driftX: -70, startYOffset: 1040, endYOffset: -120, rotate: 4, zIndex: 3 },
  { driftX: 0, startYOffset: 1080, endYOffset: -220, rotate: -2, zIndex: 6 },
  { driftX: 90, startYOffset: 1020, endYOffset: -130, rotate: 5, zIndex: 4 },
  { driftX: 170, startYOffset: 1100, endYOffset: -200, rotate: -6, zIndex: 1 },
]

type ProjectPageProps = {
  scrollProgress: MotionValue<number>
  onExplore?: (project: Project) => void
}

type CardProps = {
  cardGroup: {
    label: string
    items: typeof PROJECT_CARDS
  }
  index: number
  scrollProgress: MotionValue<number>
  onExplore?: (project: Project) => void
}

function ParallaxCard({ cardGroup, index, scrollProgress, onExplore }: CardProps) {
  const layout = CARD_LAYOUT[index % CARD_LAYOUT.length]
  const start = 0.16 + index * 0.1
  const end = start + 0.34
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCard = cardGroup.items[activeIndex]
  const hasMultipleProjects = cardGroup.items.length > 1

  const rawY = useTransform(scrollProgress, [start, end], [layout.startYOffset, layout.endYOffset])
  const y = useSpring(rawY, { stiffness: 42, damping: 19, mass: 1.08 })

  const rawX = useTransform(scrollProgress, [start, end], [0, layout.driftX])
  const x = useSpring(rawX, { stiffness: 40, damping: 18, mass: 1.1 })

  const rawScale = useTransform(scrollProgress, [start, end], [0.9, 1.08])
  const scale = useSpring(rawScale, { stiffness: 40, damping: 18, mass: 1.05 })

  return (
    <motion.article
      style={{ x, y, scale, background: activeCard.bg, rotate: layout.rotate, zIndex: layout.zIndex }}
      className="parallax-card"
    >
      <div className="card-glow" style={{ background: activeCard.accent }} />
      <div className="card-content">
        <div className="card-top">
          <AnimatePresence mode="wait">
            <motion.span
              key={`icon-${activeCard.id}`}
              className="card-icon"
              style={{ color: activeCard.accent }}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {activeCard.icon}
            </motion.span>
          </AnimatePresence>
          <span className="card-label">{cardGroup.label}</span>
        </div>
        <div className="card-bottom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeCard.id}`}
              className="card-slide-content"
              initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(2px)' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="card-title">{activeCard.title}</h3>
              <p className="card-desc">{activeCard.desc}</p>
            </motion.div>
          </AnimatePresence>
          {hasMultipleProjects && (
            <div className="card-carousel">
              <button
                type="button"
                className="carousel-nav"
                onClick={() =>
                  setActiveIndex((current) => (current - 1 + cardGroup.items.length) % cardGroup.items.length)
                }
                aria-label={`Previous ${cardGroup.label} project`}
              >
                ←
              </button>
              <span className="carousel-meta">
                {activeIndex + 1}/{cardGroup.items.length}
              </span>
              <button
                type="button"
                className="carousel-nav"
                onClick={() => setActiveIndex((current) => (current + 1) % cardGroup.items.length)}
                aria-label={`Next ${cardGroup.label} project`}
              >
                →
              </button>
            </div>
          )}
          <button
            className="card-cta"
            style={{ borderColor: activeCard.accent, color: activeCard.accent }}
            type="button"
            onClick={() => onExplore?.(activeCard.project)}
          >
            Explore →
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectPage({ scrollProgress, onExplore }: ProjectPageProps) {
  const groupedCards = useMemo(() => {
    const groups = new Map<string, typeof PROJECT_CARDS>()

    for (const card of PROJECT_CARDS) {
      const existing = groups.get(card.label)
      if (existing) {
        existing.push(card)
      } else {
        groups.set(card.label, [card])
      }
    }

    return Array.from(groups, ([label, items]) => ({ label, items }))
  }, [])

  return (
    <section className="cards-stage" aria-label="Project cards">
      {groupedCards.map((cardGroup, index) => (
        <ParallaxCard
          key={cardGroup.label}
          cardGroup={cardGroup}
          index={index}
          scrollProgress={scrollProgress}
          onExplore={onExplore}
        />
      ))}
    </section>
  )
}
