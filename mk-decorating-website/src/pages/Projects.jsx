import { featuredProjects } from '../content/siteContent'

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h1>Project examples built like compact case studies.</h1>
        <p className="section-text">
          Each project block is ready to be replaced with live photos later, but the structure
          now shows scope, location, timing, and outcome instead of placeholder cards.
        </p>

        <div className="card-grid three">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className={`project-image ${project.accent}`}>
                <div className="project-badges">
                  <span>{project.category}</span>
                  <span>{project.timeframe}</span>
                </div>
              </div>
              <div className="project-body">
                <p className="project-type">{project.location}</p>
                <h3>{project.name}</h3>
                <ul className="project-list">
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="project-result">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
