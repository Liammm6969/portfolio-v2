import { motion, useSpring, useTransform, type MotionValue } from 'framer-motion'

type LandingPageProps = {
  scrollProgress: MotionValue<number>
}

export default function LandingPage({ scrollProgress }: LandingPageProps) {
  const rawOpacity = useTransform(scrollProgress, [0, 0.35], [1, 0])
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 18 })

  const rawY = useTransform(scrollProgress, [0, 0.4], ['0%', '-12%'])
  const y = useSpring(rawY, { stiffness: 50, damping: 18 })

  const rawScale = useTransform(scrollProgress, [0, 0.4], [1, 0.96])
  const scale = useSpring(rawScale, { stiffness: 50, damping: 18 })

  return (
    <section className="hero-section" aria-label="Landing">
      <motion.div className="hero-inner" style={{ opacity, y, scale }}>
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          Available for work · 2026
        </div>

        <h1 className="hero-headline">
          <span className="headline-line">Work that</span>
          <span className="headline-line italic">moves</span>
          <span className="headline-line">people</span>
        </h1>

        <div className="hero-footer">
          <p className="hero-sub">
            A multidisciplinary designer and engineer crafting
            <br />
            premium digital experiences.
          </p>
          <div className="hero-scroll-hint">
            <div className="scroll-track">
              <motion.div
                className="scroll-thumb"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
