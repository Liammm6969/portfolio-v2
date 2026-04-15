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
        Available for work · 2025
      </div>

        <h1 className="hero-headline">
          <span className="headline-line">Hi I&apos;m,</span>
          <span className="headline-line">William</span>
        </h1>

        <div className="hero-footer">
          <p className="hero-sub">
          Frontend-focused IT student building responsive, user-centered web apps, with a strong interest in UI/UX, performance, and real-world problem solving.
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
