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
        
        {/* Eyebrow Container */}
        <div style={{ overflow: 'hidden', paddingBottom: '2px', display: 'flex', marginTop: 'clamp(24px, 3vw, 40px)' }}>
          <motion.div 
            className="hero-eyebrow"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} // After line animation (0.5s)
          >
            <span className="eyebrow-dot" />
            Available for work · 2026
          </motion.div>
        </div>

        {/* Eyebrow Line */}
        <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0 }} // Fast animation but smooth
           style={{ height: '1px', background: 'rgba(237, 233, 225, 0.16)', transformOrigin: 'center', width: '100%', marginBottom: 'clamp(24px, 3vw, 32px)' }}
        />

        {/* Headline Container */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 
            className="hero-headline"
            style={{ margin: 0, paddingBottom: 'clamp(20px, 3vw, 32px)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.1 }} // Slides up while line is expanding
          >
            <span className="headline-line">Hi I&apos;m, William</span>
          </motion.h1>
        </div>

        {/* Headline Line */}
        <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 1.0 }} // Slower animation, after eyebrow text
           style={{ height: '1px', background: 'rgba(237, 233, 225, 0.12)', transformOrigin: 'center', width: '100%' }}
        />

        <div className="hero-footer" style={{ paddingTop: 'clamp(20px, 3vw, 32px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.p 
                className="hero-sub"
                style={{ margin: 0 }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
              >
                Frontend-focused IT student building responsive, user-centered web
              </motion.p>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.p 
                className="hero-sub"
                style={{ margin: 0 }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.95 }}
              >
                apps, with a strong interest in UI/UX, performance, and real-world
              </motion.p>
            </div>
             <div style={{ overflow: 'hidden' }}>
              <motion.p 
                className="hero-sub"
                style={{ margin: 0 }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 2.1 }}
              >
                problem solving.
              </motion.p>
            </div>
          </div>
          
          <motion.div 
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <div className="scroll-track">
              <motion.div
                className="scroll-thumb"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
