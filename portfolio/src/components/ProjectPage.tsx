import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import type { Project } from './ProjectDetailPage.tsx'

const CARDS = [
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
        'public/hydration_1.png',
        'public/hydration_2.png',
        'public/hydration_3.png',
      ],
      liveUrl: '#',
      repoUrl: '#',
    }
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
  card: (typeof CARDS)[0]
  index: number
  scrollProgress: MotionValue<number>
  onExplore?: (project: Project) => void
}

function ParallaxCard({ card, index, scrollProgress, onExplore }: CardProps) {
  const layout = CARD_LAYOUT[index]
  const start = 0.16 + index * 0.1
  const end = start + 0.34

  const rawY = useTransform(scrollProgress, [start, end], [layout.startYOffset, layout.endYOffset])
  const y = useSpring(rawY, { stiffness: 42, damping: 19, mass: 1.08 })

  const rawX = useTransform(scrollProgress, [start, end], [0, layout.driftX])
  const x = useSpring(rawX, { stiffness: 40, damping: 18, mass: 1.1 })

  const rawScale = useTransform(scrollProgress, [start, end], [0.9, 1.08])
  const scale = useSpring(rawScale, { stiffness: 40, damping: 18, mass: 1.05 })

  return (
    <motion.article
      style={{ x, y, scale, background: card.bg, rotate: layout.rotate, zIndex: layout.zIndex }}
      className="parallax-card"
    >
      <div className="card-glow" style={{ background: card.accent }} />
      <div className="card-content">
        <div className="card-top">
          <span className="card-icon" style={{ color: card.accent }}>
            {card.icon}
          </span>
          <span className="card-label">{card.label}</span>
        </div>
        <div className="card-bottom">
          <h3 className="card-title">{card.title}</h3>
          <p className="card-desc">{card.desc}</p>
          <button
            className="card-cta"
            style={{ borderColor: card.accent, color: card.accent }}
            type="button"
            onClick={() => onExplore?.(card.project)}
          >
            Explore →
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectPage({ scrollProgress, onExplore }: ProjectPageProps) {
  return (
    <section className="cards-stage" aria-label="Project cards">
      {CARDS.map((card, index) => (
        <ParallaxCard
          key={card.id}
          card={card}
          index={index}
          scrollProgress={scrollProgress}
          onExplore={onExplore}
        />
      ))}
    </section>
  )
}
