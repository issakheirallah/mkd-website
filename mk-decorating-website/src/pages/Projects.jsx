export default function Projects() {
  const projects = [
    {
      name: 'Full Home Refresh',
      type: 'Residential',
      summary:
        'A complete redecoration and finish upgrade designed to brighten the home and modernise key living spaces.'
    },
    {
      name: 'Rental Property Turnaround',
      type: 'Refurbishment',
      summary:
        'Fast, efficient improvement works to prepare a property for new tenants with minimal downtime.'
    },
    {
      name: 'Office Refinish',
      type: 'Commercial',
      summary:
        'Smart, durable decorating work for a client-facing workspace with a polished, professional look.'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h1>Project examples that show range and consistency.</h1>
        <p className="section-text">
          Replace these placeholders later with real before-and-after photos, testimonials,
          and short case studies.
        </p>

        <div className="card-grid three">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image"></div>
              <div className="project-body">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
