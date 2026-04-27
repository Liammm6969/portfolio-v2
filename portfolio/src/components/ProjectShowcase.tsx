import { motion } from 'framer-motion'
import { PROJECT_CARDS } from '../data/projects.ts'
import type { Project } from './ProjectDetailPage.tsx'

type ShowcaseItemProps = {
    project: Project
    index: number
    onExplore: (project: Project) => void
}

function ShowcaseItem({ project, index, onExplore }: ShowcaseItemProps) {
    const isEven = index % 2 === 0

    return (
        <div className={`showcase-item ${isEven ? 'even' : 'odd'}`}>
            <div className="showcase-content">
                <div className="showcase-left">
                    <motion.div
                        className="showcase-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img
                            src={project.uiScreens[0] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85'}
                            alt={project.title}
                            className="showcase-image"
                        />
                    </motion.div>
                </div>
                <div className="showcase-right">
                    <motion.div
                        className="showcase-text-wrapper"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.6, once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="showcase-label" style={{ color: project.accent }}>
                            {project.label} &mdash; {project.year}
                        </span>
                        <h2 className="showcase-title">{project.title}</h2>
                        <p className="showcase-desc">{project.description}</p>
                        <button
                            className="showcase-cta"
                            style={{ borderColor: project.accent, color: project.accent }}
                            type="button"
                            onClick={() => onExplore(project)}
                        >
                            View Project
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

type ProjectShowcaseProps = {
    onExplore: (project: Project) => void
}

export default function ProjectShowcase({ onExplore }: ProjectShowcaseProps) {
    return (
        <>
            {PROJECT_CARDS.map(({ project }, index) => (
                <ShowcaseItem key={project.id} project={project} index={index} onExplore={onExplore} />
            ))}
        </>
    )
}
