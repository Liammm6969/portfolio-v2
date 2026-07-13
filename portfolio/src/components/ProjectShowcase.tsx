import { PROJECT_CARDS } from '../data/projects.ts'
import type { Project } from './ProjectDetailPage.tsx'

type ShowcaseItemProps = {
    project: Project
    onExplore: (project: Project) => void
}

function ShowcaseItem({ project, onExplore }: ShowcaseItemProps) {
    return (
        <article className="project-card" aria-label={project.title}>
            <button
                type="button"
                className="project-card-hit"
                onClick={() => onExplore(project)}
            >
                <div className="project-card-media">
                    <img
                        src={project.uiScreens[0] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85'}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-card-body">
                    <p className="project-card-meta">
                        {project.label} · {project.year}
                    </p>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                    <span className="project-card-cta">View project</span>
                </div>
            </button>
        </article>
    )
}

type ProjectShowcaseProps = {
    onExplore: (project: Project) => void
}

export default function ProjectShowcase({ onExplore }: ProjectShowcaseProps) {
    return (
        <section className="projects-section" aria-label="Projects">
            <div className="projects-inner">
                <header className="projects-header">
                    <h2>Selected work</h2>
                    <p>Clean, responsive builds with a focus on UI quality and real-world usefulness.</p>
                </header>

                <div className="projects-grid">
                    {PROJECT_CARDS.map(({ project }) => (
                        <ShowcaseItem key={project.id} project={project} onExplore={onExplore} />
                    ))}
                </div>
            </div>
        </section>
    )
}
