import { EDUCATION } from '../data/education.ts'

export default function EducationSection() {
  return (
    <section className="education-section" aria-label="Education">
      <div className="education-inner">
        <header className="education-header">
          <h2>Education</h2>
          <p>Degree and training that support my work in frontend and web systems.</p>
        </header>

        <div className="education-list">
          {EDUCATION.map((item) => (
            <article key={item.id} className="education-item">
              <div className="education-top">
                <div className="education-title">
                  <h3>{item.school}</h3>
                  <p className="education-meta">
                    {item.program} · {item.years}
                    {item.location ? <span className="education-loc"> · {item.location}</span> : null}
                  </p>
                </div>
              </div>

              {item.achievements?.length ? (
                <div className="education-block">
                  <p className="education-kicker">Achievements</p>
                  <ul className="education-bullets">
                    {item.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.coursework?.length ? (
                <div className="education-block">
                  <p className="education-kicker">Relevant coursework</p>
                  <div className="education-chips">
                    {item.coursework.map((c) => (
                      <span key={c} className="education-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

