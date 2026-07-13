import { TECH_STACK } from '../data/techStack.ts'

export default function TechStackSection() {
  return (
    <section className="techstack-section" aria-label="Tech stack">
      <div className="techstack-inner">
        <header className="techstack-header">
          <h2>Tech Stack</h2>
          <p>Core technologies I use to build responsive, user-centered web and mobile applications.</p>
        </header>

        <div className="techstack-grid">
          {TECH_STACK.map((category) => (
            <article key={category.id} className="techstack-group">
              <p className="techstack-kicker">{category.title}</p>
              <div className="techstack-chips">
                {category.items.map((item) => (
                  <span key={item} className="techstack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
