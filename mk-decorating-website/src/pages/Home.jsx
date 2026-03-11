import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Trusted decorating specialists</p>
            <h1>Quality decorating, refurbishment, and maintenance with a premium finish.</h1>
            <p className="lead">
              MK Decorating delivers reliable workmanship for homeowners, landlords,
              and businesses looking for clean execution, clear communication, and lasting results.
            </p>
            <div className="button-row">
              <Link to="/contact" className="btn btn-primary">Request a quote</Link>
              <Link to="/services" className="btn btn-secondary">Explore services</Link>
            </div>

            <div className="feature-grid">
              <div className="feature-card">Professional workmanship</div>
              <div className="feature-card">Clean and tidy finish</div>
              <div className="feature-card">Reliable communication</div>
              <div className="feature-card">Domestic and commercial projects</div>
            </div>
          </div>

          <div className="hero-panels">
            <div className="info-card">
              <h3>Attention to detail</h3>
              <p>Careful preparation, sharp finishes, and a tidy approach from start to finish.</p>
            </div>
            <div className="info-card dark">
              <h3>Homes, rentals, and business spaces</h3>
              <p>From single-room jobs to broader refurbishment and maintenance work.</p>
            </div>
            <div className="info-card">
              <h3>Reliable and straightforward</h3>
              <p>Clear communication, practical advice, and dependable delivery throughout the project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why choose us</p>
          <h2>A dependable company with a professional eye for detail.</h2>
          <p className="section-text">
            We help improve the appearance, durability, and overall feel of homes and commercial spaces.
            The site is designed to position MK Decorating as a trusted and polished brand.
          </p>
        </div>
      </section>
    </>
  )
}
