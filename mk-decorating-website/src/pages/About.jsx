export default function About() {
  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">About</p>
        <h1>About MK Decorating</h1>
      </div>

      <section className="mk-section">
        <div className="mk-section__inner">
          <div className="two-column">
            <div>
              <h2 className="mk-section__title" style={{ textAlign: 'left', marginBottom: 20 }}>
                A trusted partner for homeowners, landlords, and businesses.
              </h2>
              <p className="section-text">
                MK Decorating is a multi-trade renovation and refurbishment company whose
                founders have had over 20 years of experience in the industry. We handle
                everything from kitchen and bathroom installations to fitted joinery, flooring,
                plastering, and finishing.
              </p>
              <p className="section-text">
                Whether it's a single room, a full property refurb, or ongoing maintenance,
                every project is run by one accountable team, ensuring a clean preparation,
                dependable programme, and a tidy handover.
              </p>
            </div>

            <aside className="card dark-panel">
              <h3>Why clients choose MK Decorating</h3>
              <ul className="clean-list">
                <li>One multi-trade team, no chasing separate contractors.</li>
                <li>Residential, rental, and commercial refurbishment.</li>
                <li>Clear, reassuring communication throughout.</li>
                <li>Fully insured craftspeople with a clean track record.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
