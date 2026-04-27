import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import type { Project } from './ProjectDetailPage.tsx'
import { PROJECT_CARDS } from '../data/projects.ts'

type CardLayout = {
  driftX: number
  startYOffset: number
  endYOffset: number
  rotate: number
  zIndex: number
}

const CARD_LAYOUT: CardLayout[] = [
  { driftX: -520, startYOffset: 1100, endYOffset: 0, rotate: -8, zIndex: 1 },
  { driftX: -170, startYOffset: 1040, endYOffset: 0, rotate: 4, zIndex: 3 },
  { driftX: 170, startYOffset: 1080, endYOffset: 0, rotate: -2, zIndex: 5 },
  { driftX: 520, startYOffset: 1020, endYOffset: 0, rotate: 6, zIndex: 2 },
]

// 3 dark card backgrounds cycling
const CARD_COLORS = ['#161210', '#101520', '#0e1a16']
// Unique accent border per slot
const CARD_BORDERS = [
  'rgba(180, 60, 50, 0.7)',
  'rgba(50, 90, 180, 0.7)',
  'rgba(20, 160, 120, 0.7)',
  'rgba(160, 130, 60, 0.65)',
]

type CardProps = {
  cardGroup: {
    label: string
    items: typeof PROJECT_CARDS
  }
  index: number
  scrollYProgress: any
  onExplore?: (project: Project) => void
}

function ParallaxPolaroidCard({ cardGroup, index, scrollYProgress, onExplore }: CardProps) {
  const layout = CARD_LAYOUT[index % CARD_LAYOUT.length]
  const start = 0.05 + index * 0.06
  const end = start + 0.45
  const activeCard = cardGroup.items[0]
  const cardBg = CARD_COLORS[index % CARD_COLORS.length]
  const cardBorderColor = CARD_BORDERS[index % CARD_BORDERS.length]

  const rawY = useTransform(scrollYProgress, [start, end], [layout.startYOffset, layout.endYOffset])
  const y = useSpring(rawY, { stiffness: 42, damping: 19, mass: 1.08 })

  const rawX = useTransform(scrollYProgress, [start, end], [0, layout.driftX])
  const x = useSpring(rawX, { stiffness: 40, damping: 18, mass: 1.1 })

  const rawScale = useTransform(scrollYProgress, [start, end], [0.9, 1.08])
  const scale = useSpring(rawScale, { stiffness: 40, damping: 18, mass: 1.05 })

  return (
    <motion.article
      style={{ x, y, scale, background: cardBg, rotate: layout.rotate, zIndex: layout.zIndex, borderColor: cardBorderColor }}
      className="parallax-card polaroid"
      onClick={() => onExplore?.(activeCard.project)}
    >
      <div className="card-image-box">
        <img src={activeCard.project.uiScreens[0]} alt="" />
      </div>
      <div className="card-bottom">
        <span className="card-label">{cardGroup.label}</span>
        <div className="card-slide-content">
          <h3 className="card-title">{activeCard.title}</h3>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectFanOut({ onExplore }: { onExplore?: (project: Project) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 34,
    damping: 18,
    mass: 1.05,
  })

  const overlayOpacity = useTransform(smoothProgress, [0, 0.3], [0, 0.85])

  // Group cards logically
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
    <div className="fan-out-container" ref={containerRef} style={{ height: '220svh', position: 'relative' }}>
      <div className="fan-out-sticky">
        <motion.div
          className="fan-out-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, var(--bg) 0%, rgba(10,10,10,0.8) 100%)',
            opacity: overlayOpacity,
            pointerEvents: 'none',
            boxShadow: 'inset 0 40px 80px -20px rgba(0,0,0,0.8)'
          }}
        />
        <section className="cards-stage" aria-label="Project polaroids">
          {groupedCards.map((cardGroup, index) => (
            <ParallaxPolaroidCard
              key={cardGroup.label}
              cardGroup={cardGroup}
              index={index}
              scrollYProgress={smoothProgress}
              onExplore={onExplore}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
