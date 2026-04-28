import { motion } from 'framer-motion'

export default function LandingPage() {
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'email' }
  ] as const

  return (
    <div className="landing-sticky-wrapper">
      <section className="hero-section" aria-label="Landing">
        <motion.div className="hero-inner" style={{ opacity: 1, y: 0, scale: 1 }}>

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
        <div className="hero-headline-row">
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
        </div>

        {/* Headline Line */}
        <div className="hero-divider-row">
          <motion.div
            className="hero-headline-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 1.0 }} // Slower animation, after eyebrow text
          />
          <motion.a
            className="hero-resume-link"
            href="#"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M6 2.75A1.75 1.75 0 0 0 4.25 4.5v15A1.75 1.75 0 0 0 6 21.25h12A1.75 1.75 0 0 0 19.75 19.5V8.19a1.75 1.75 0 0 0-.51-1.24l-4.18-4.2A1.75 1.75 0 0 0 13.82 2H6Zm7.5 1.6 4.66 4.65H13.5V4.35Zm-5.5 7.4h8a.75.75 0 0 1 0 1.5H8a.75.75 0 1 1 0-1.5Zm0 3.5h8a.75.75 0 0 1 0 1.5H8a.75.75 0 1 1 0-1.5Z" />
            </svg>
            <span>View Resume</span>
          </motion.a>
        </div>

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
                Frontend-focused IT student based in the Philippines building responsive, user-centered web
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

          <div className="hero-meta-right">
            <div className="hero-right-rail">
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
              <motion.div
                className="hero-social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.7 }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="hero-social-link"
                    target={social.icon === 'email' ? undefined : '_blank'}
                    rel={social.icon === 'email' ? undefined : 'noreferrer'}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon === 'github' && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.913c.575.106.786-.25.786-.555 0-.274-.01-1-.016-1.964-3.197.694-3.872-1.54-3.872-1.54-.523-1.327-1.278-1.68-1.278-1.68-1.045-.715.08-.7.08-.7 1.156.08 1.764 1.188 1.764 1.188 1.028 1.762 2.698 1.252 3.356.958.103-.745.402-1.252.731-1.54-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.082-.118-.29-.512-1.458.112-3.04 0 0 .965-.31 3.163 1.177a10.97 10.97 0 0 1 5.76 0c2.197-1.487 3.16-1.177 3.16-1.177.626 1.582.232 2.75.114 3.04.737.803 1.18 1.827 1.18 3.082 0 4.414-2.688 5.386-5.25 5.67.414.356.782 1.06.782 2.137 0 1.543-.015 2.787-.015 3.166 0 .308.207.667.792.553A11.5 11.5 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.3 8h4.36v14H.3V8Zm7.2 0h4.18v1.91h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V22h-4.36v-6.82c0-1.63-.03-3.73-2.28-3.73-2.29 0-2.64 1.79-2.64 3.61V22H7.5V8Z" />
                      </svg>
                    )}
                    {social.icon === 'email' && (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M2.25 5A2.25 2.25 0 0 0 0 7.25v9.5A2.25 2.25 0 0 0 2.25 19h19.5A2.25 2.25 0 0 0 24 16.75v-9.5A2.25 2.25 0 0 0 21.75 5H2.25Zm.5 1.5h18.5L12 12.7 2.75 6.5Zm-1.25 2.07 6.76 4.53-6.76 3.92V8.57Zm20.5 0v8.45l-6.75-3.92L22 8.57Zm-8.16 5.42 7.03 4.08H3.13l7.03-4.08L12 15.1l1.84-1.1Z" />
                      </svg>
                    )}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </div>
  )
}
