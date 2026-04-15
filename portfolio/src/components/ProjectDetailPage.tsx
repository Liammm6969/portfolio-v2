import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export interface Project {
  id: number
  title: string
  label: string
  description: string
  longDesc: string
  year: string
  role: string
  techStack: { name: string; category: string }[]
  accent: string
  bg: string
  uiScreens: string[]
  liveUrl?: string
  repoUrl?: string
}

export const DEMO_PROJECT: Project = {
  id: 1,
  title: 'Meridian',
  label: 'Brand Identity',
  description:
    'A complete visual identity system for a Parisian architecture studio - from mark to motion.',
  longDesc:
    'Meridian required a visual language that could hold weight across environmental signage, digital surfaces, and printed collateral simultaneously. The challenge was coherence without rigidity - a system flexible enough for a creative practice but resolved enough to feel institutional.\n\nThe identity is anchored by a custom geometric wordmark derived from cardinal navigation symbols. A restricted palette of warm stone and deep carbon with a single amber signal color keeps everything grounded across contexts.',
  year: '2024',
  role: 'Design Lead · Art Direction',
  accent: '#c8a97e',
  bg: '#0e0c0a',
  techStack: [
    { name: 'Figma', category: 'Design' },
    { name: 'After Effects', category: 'Motion' },
    { name: 'Next.js', category: 'Web' },
    { name: 'Framer Motion', category: 'Web' },
    { name: 'Three.js', category: 'Web' },
    { name: 'Vercel', category: 'Infra' },
    { name: 'TypeScript', category: 'Dev' },
    { name: 'Tailwind CSS', category: 'Dev' },
  ],
  uiScreens: [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=85',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85',
    'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=1400&q=85',
  ],
  liveUrl: '#',
  repoUrl: '#',
}

function TechBadge({
  name,
  category,
  accent,
  index,
}: {
  name: string
  category: string
  accent: string
  index: number
}) {
  return (
    <motion.div
      className="tech-badge"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.055, duration: 0.5, ease: premiumEase }}
    >
      <span className="badge-dot" style={{ background: accent }} />
      <span className="badge-name">{name}</span>
      <span className="badge-cat">{category}</span>
    </motion.div>
  )
}

function UIPreview({ screens, accent }: { screens: string[]; accent: string }) {
  const [active, setActive] = useState(0)

  return (
    <div className="ui-preview">
      <div className="browser-chrome">
        <div className="chrome-dots">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="chrome-bar">
          <span className="chrome-url">APP.com</span>
        </div>
        <div className="chrome-actions">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M7 1l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="screen-wrap">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={screens[active]}
            alt={`Screen ${active + 1}`}
            className="screen-img"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: premiumEase }}
          />
        </AnimatePresence>
        <div className="scanlines" />
      </div>

      <div className="thumb-strip">
        {screens.map((src, i) => (
          <button
            key={src}
            className={`thumb${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            style={i === active ? { borderColor: accent } : undefined}
            type="button"
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetailPage({
  project = DEMO_PROJECT,
  onClose,
}: {
  project?: Project
  onClose?: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ['start start', 'end end'],
  })

  const rawHeroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '18%'])
  const heroY = useSpring(rawHeroY, { stiffness: 60, damping: 20 })

  const rawHeaderOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])
  const headerOpacity = useSpring(rawHeaderOpacity, { stiffness: 80, damping: 20 })

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: i * 0.08, duration: 0.7, ease: premiumEase },
  })

  return (
    <>
      <style>{`
        :root {
          --bg: #080808;
          --surface: #101010;
          --fg: #ede9e1;
          --fg-dim: rgba(237,233,225,0.45);
          --fg-muted: rgba(237,233,225,0.2);
          --border: rgba(237,233,225,0.08);
          --border-hover: rgba(237,233,225,0.18);
          --serif: Georgia, 'Times New Roman', serif;
          --sans: Inter, system-ui, sans-serif;
        }
        .project-page {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--bg);
          font-family: var(--sans);
          font-weight: 300;
          color: var(--fg);
          -webkit-font-smoothing: antialiased;
          display: flex;
          flex-direction: column;
        }
        .floating-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 50;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 4vw, 56px);
          background: rgba(8,8,8,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .header-title { font-family: var(--serif); font-size: 16px; font-weight: 400; letter-spacing: 0.01em; }
        .header-right { display: flex; align-items: center; gap: 20px; }
        .header-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--fg-muted); }
        .close-btn {
          width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border);
          background: transparent; color: var(--fg-dim); cursor: pointer; display: flex;
          align-items: center; justify-content: center; transition: border-color 0.2s, color 0.2s;
        }
        .close-btn:hover { border-color: var(--border-hover); color: var(--fg); }
        .scroll-area { flex: 1; overflow-y: auto; overflow-x: hidden; }
        .hero-block { position: relative; height: 75vh; min-height: 480px; overflow: hidden; }
        .hero-cover { position: absolute; inset: 0; will-change: transform; }
        .hero-cover img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.45) saturate(0.7); display: block; }
        .hero-cover::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.6) 70%, var(--bg) 100%);
        }
        .hero-text { position: absolute; bottom: 0; left: 0; right: 0; padding: clamp(32px, 5vw, 64px) clamp(20px, 4vw, 56px) clamp(40px, 6vw, 72px); }
        .hero-eyebrow { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--fg-muted); margin-bottom: 16px; }
        .hero-title { font-family: var(--serif); font-size: clamp(52px, 8vw, 120px); font-weight: 400; line-height: 0.92; letter-spacing: -0.02em; margin-bottom: 24px; }
        .hero-meta-row { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
        .meta-item { display: flex; flex-direction: column; gap: 4px; }
        .meta-key { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--fg-muted); }
        .meta-val { font-size: 13px; color: var(--fg-dim); }
        .meta-divider { width: 1px; height: 32px; background: var(--border); }
        .content-wrap {
          padding: clamp(48px, 7vh, 96px) clamp(20px, 4vw, 56px);
          display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 96px);
          max-width: 1200px; margin: 0 auto; width: 100%;
        }
        @media (max-width: 768px) { .content-wrap { grid-template-columns: 1fr; } }
        .section-tag { display: inline-flex; align-items: center; gap: 10px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--fg-muted); margin-bottom: 20px; }
        .section-tag::before { content: ''; display: block; width: 24px; height: 1px; background: var(--fg-muted); }
        .desc-lead { font-family: var(--serif); font-size: clamp(20px, 2.4vw, 28px); font-weight: 400; line-height: 1.4; color: var(--fg); margin-bottom: 28px; }
        .desc-body { font-size: 14px; line-height: 1.85; color: var(--fg-dim); white-space: pre-line; }
        .desc-links { display: flex; gap: 12px; margin-top: 36px; }
        .link-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 100px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: opacity 0.2s, transform 0.2s; text-decoration: none; font-family: var(--sans); }
        .link-btn:hover { opacity: 0.8; transform: scale(0.98); }
        .link-btn.primary { background: var(--fg); color: var(--bg); border: none; font-weight: 500; }
        .link-btn.secondary { background: transparent; color: var(--fg-dim); border: 1px solid var(--border); font-weight: 300; }
        .tech-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-badge { display: flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 100px; border: 1px solid var(--border); background: var(--surface); }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; opacity: 0.8; }
        .badge-name { font-size: 12px; color: var(--fg); letter-spacing: 0.02em; }
        .badge-cat { font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-muted); padding-left: 4px; border-left: 1px solid var(--border); margin-left: 2px; }
        .preview-section { padding: 0 clamp(20px, 4vw, 56px) clamp(64px, 8vh, 120px); max-width: 1200px; margin: 0 auto; width: 100%; }
        .ui-preview { border-radius: 14px; overflow: hidden; border: 1px solid var(--border); background: #0a0a0a; }
        .browser-chrome { height: 40px; background: #141414; border-bottom: 1px solid var(--border); display: flex; align-items: center; padding: 0 14px; gap: 14px; flex-shrink: 0; }
        .chrome-dots { display: flex; gap: 6px; }
        .chrome-dots span { width: 10px; height: 10px; border-radius: 50%; opacity: 0.8; }
        .chrome-bar { flex: 1; height: 22px; background: #0c0c0c; border-radius: 6px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); }
        .chrome-url { font-size: 10px; letter-spacing: 0.04em; color: var(--fg-muted); font-family: var(--sans); }
        .chrome-actions { color: var(--fg-muted); flex-shrink: 0; }
        .screen-wrap { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .screen-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px);
          pointer-events: none;
        }
        .thumb-strip { display: flex; gap: 1px; background: #0a0a0a; padding: 12px 14px; border-top: 1px solid var(--border); }
        .thumb { flex: 1; aspect-ratio: 16/7; border-radius: 5px; overflow: hidden; border: 1px solid var(--border); background: none; cursor: pointer; padding: 0; opacity: 0.5; }
        .thumb.active { opacity: 1; }
        .thumb:hover { opacity: 0.8; }
        .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .page-footer {
          padding: clamp(32px, 5vh, 60px) clamp(20px, 4vw, 56px);
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
          max-width: 1200px; margin: 0 auto; width: 100%;
        }
        .footer-copy { font-size: 11px; letter-spacing: 0.12em; color: var(--fg-muted); }
        .footer-next { display: flex; align-items: center; gap: 10px; font-family: var(--serif); font-size: 15px; font-style: italic; color: var(--fg-dim); }
        .noise-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px;
        }
      `}</style>

      <motion.div
        className="project-page"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.7, ease: premiumEase }}
      >
        <div className="noise-overlay" />

        <motion.header className="floating-header" style={{ opacity: headerOpacity }}>
          <span className="header-title">{project.title}</span>
          <div className="header-right">
            <span className="header-label">{project.label}</span>
            {onClose && (
              <button className="close-btn" onClick={onClose} aria-label="Close" type="button">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1l10 10M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </motion.header>

        <div className="scroll-area" ref={scrollRef}>
          <div className="hero-block">
            <motion.div className="hero-cover" style={{ y: heroY }}>
              <img src={project.uiScreens[0]} alt={project.title} />
            </motion.div>

            <div className="hero-text">
              <motion.p
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: premiumEase }}
              >
                {project.label} · {project.year}
              </motion.p>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: premiumEase }}
              >
                {project.title}
              </motion.h1>

              <motion.div
                className="hero-meta-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.7, ease: premiumEase }}
              >
                <div className="meta-item">
                  <span className="meta-key">Year</span>
                  <span className="meta-val">{project.year}</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-key">Role</span>
                  <span className="meta-val">{project.role}</span>
                </div>
                <div className="meta-divider" />
                <div className="meta-item">
                  <span className="meta-key">Stack</span>
                  <span className="meta-val">{project.techStack.length} technologies</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="content-wrap">
            <div className="desc-col">
              <motion.p className="section-tag" {...stagger(0)}>
                Overview
              </motion.p>
              <motion.p className="desc-lead" {...stagger(1)}>
                {project.description}
              </motion.p>
              <motion.p className="desc-body" {...stagger(2)}>
                {project.longDesc}
              </motion.p>
              <motion.div className="desc-links" {...stagger(3)}>
                {project.liveUrl && (
                  <a href={project.liveUrl} className="link-btn primary">
                    View live
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 11L11 1M11 1H4M11 1V8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} className="link-btn secondary">
                    Source
                  </a>
                )}
              </motion.div>
            </div>

            <div className="tech-col">
              <motion.p className="section-tag" {...stagger(0)}>
                Tech stack
              </motion.p>
              <div className="tech-grid">
                {project.techStack.map((t, i) => (
                  <TechBadge
                    key={t.name}
                    name={t.name}
                    category={t.category}
                    accent={project.accent}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="preview-section">
            <motion.p
              className="section-tag"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              The system
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: premiumEase }}
            >
              <UIPreview screens={project.uiScreens} accent={project.accent} />
            </motion.div>
          </div>

          <footer className="page-footer">
            <span className="footer-copy">© {project.year} - All rights reserved</span>
            <span className="footer-next">
              Next project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </footer>
        </div>
      </motion.div>
    </>
  )
}
