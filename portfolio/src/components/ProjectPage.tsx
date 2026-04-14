import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'

const CARDS = [
  {
    id: 1,
    label: 'Design',
    title: 'Visual Systems',
    desc: 'Brand identities and design languages built for scale and longevity.',
    accent: '#c8a97e',
    bg: '#161410',
    icon: '✦',
  },
  {
    id: 2,
    label: 'Engineering',
    title: 'Web Experiences',
    desc: 'Performant, accessible interfaces crafted with meticulous attention.',
    accent: '#7eb5c8',
    bg: '#0f1416',
    icon: '◈',
  },
  {
    id: 3,
    label: 'Strategy',
    title: 'Product Thinking',
    desc: 'Research-led decisions that align user needs with business goals.',
    accent: '#a87ec8',
    bg: '#130f16',
    icon: '⬡',
  },
  {
    id: 4,
    label: 'Motion',
    title: 'Interaction Design',
    desc: 'Choreographed micro-interactions that feel native and intuitive.',
    accent: '#7ec8a0',
    bg: '#0f1612',
    icon: '◎',
  },
  {
    id: 5,
    label: 'Direction',
    title: 'Art Direction',
    desc: 'Editorial vision and creative oversight across every touchpoint.',
    accent: '#c87e8a',
    bg: '#160f10',
    icon: '◇',
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
  { driftX: -160, startYOffset: 150, endYOffset: -180, rotate: -7, zIndex: 2 },
  { driftX: -70, startYOffset: 140, endYOffset: -120, rotate: 4, zIndex: 3 },
  { driftX: 0, startYOffset: 170, endYOffset: -220, rotate: -2, zIndex: 6 },
  { driftX: 90, startYOffset: 135, endYOffset: -130, rotate: 5, zIndex: 4 },
  { driftX: 170, startYOffset: 155, endYOffset: -200, rotate: -6, zIndex: 1 },
]

type ProjectPageProps = {
  scrollProgress: MotionValue<number>
}

type CardProps = {
  card: (typeof CARDS)[0]
  index: number
  scrollProgress: MotionValue<number>
}

function ParallaxCard({ card, index, scrollProgress }: CardProps) {
  const layout = CARD_LAYOUT[index]
  const total = CARDS.length
  const spacing = 0.16
  const start = 0.08 + (index / total) * (0.78 - spacing)
  const end = start + 0.56

  const rawY = useTransform(scrollProgress, [start, end], [layout.startYOffset, layout.endYOffset])
  const y = useSpring(rawY, { stiffness: 42, damping: 19, mass: 1.08 })

  const rawX = useTransform(scrollProgress, [start, end], [0, layout.driftX])
  const x = useSpring(rawX, { stiffness: 40, damping: 18, mass: 1.1 })

  const rawOpacity = useTransform(scrollProgress, [start, start + 0.15], [0, 1])
  const opacity = useSpring(rawOpacity, { stiffness: 56, damping: 18, mass: 0.9 })

  const rawScale = useTransform(scrollProgress, [start, end], [0.82, 1.08])
  const scale = useSpring(rawScale, { stiffness: 40, damping: 18, mass: 1.05 })

  return (
    <motion.article
      style={{ x, y, opacity, scale, background: card.bg, rotate: layout.rotate, zIndex: layout.zIndex }}
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
          <div className="card-cta" style={{ borderColor: card.accent, color: card.accent }}>
            Explore →
          </div>
        </div>
      </div>
      <div className="card-number">0{card.id}</div>
    </motion.article>
  )
}

export default function ProjectPage({ scrollProgress }: ProjectPageProps) {
  return (
    <section className="cards-stage" aria-label="Project cards">
      {CARDS.map((card, index) => (
        <ParallaxCard key={card.id} card={card} index={index} scrollProgress={scrollProgress} />
      ))}
    </section>
  )
}
