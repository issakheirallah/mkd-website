import { Link } from 'react-router-dom'
import LogoMark from '../components/LogoMark'
import { featuredProjects, testimonials, trustSignals } from '../content/siteContent'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-brand-lockup">
              <LogoMark className="hero-logo" />
            </div>
            <p className="eyebrow">Trusted decorating specialists</p>
            <h1>Decorating work presented with the same precision as the finish itself.</h1>
            <p className="lead">
              MK Decorating delivers clean execution, reliable communication, and a sharper final result
              for homes, rentals, and client-facing commercial spaces.
            </p>
            <div className="button-row">
              <Link to="/contact" className="btn btn-primary">Request a quote</Link>
              <Link to="/services" className="btn btn-secondary">Explore services</Link>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Focus</span>
                <strong>Decoration, refurbishment, and maintenance</strong>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Standard</span>
                <strong>Clean prep, clear scope, polished handover</strong>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-artboard">
              <div className="hero-art-main">
                <div className="hero-art-badge">Signature finish</div>
                <div className="hero-art-copy">
                  <p className="hero-stage-label">Premium presentation</p>
                  <h3>One bold composition anchored by the logo, not a stack of generic content cards.</h3>
                </div>
              </div>
              <div className="hero-art-note hero-art-note-top">
                <span className="hero-note-kicker">Preparation</span>
                <strong>Surfaces, protection, and detail work set the finish up properly.</strong>
              </div>

              <div className="hero-art-note hero-art-note-bottom">
                <span className="hero-note-kicker">Delivery</span>
                <strong>Homes, rentals, and client-facing spaces completed with a sharper handover.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container value-band">
          <div className="value-band-copy">
            <p className="eyebrow">Why it lands better</p>
            <h2>A stronger homepage needs contrast, proof, and visual rhythm.</h2>
          </div>
          <div className="value-band-grid">
            <article className="value-card">
              <p className="value-number">01</p>
              <h3>Sharper first impression</h3>
              <p>A more deliberate hero composition makes the brand feel established rather than provisional.</p>
            </article>
            <article className="value-card">
              <p className="value-number">02</p>
              <h3>More visual depth</h3>
              <p>Layered shapes, framed panels, and stronger spacing create a premium feel without visual noise.</p>
            </article>
            <article className="value-card">
              <p className="value-number">03</p>
              <h3>Clearer trust signals</h3>
              <p>Service range, process language, and featured work give visitors confidence faster.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Featured projects presented as proof, not placeholders.</h2>
            </div>
            <Link to="/projects" className="section-link">View all projects</Link>
          </div>

          <div className="showcase-grid">
            {featuredProjects.map((project, index) => (
              <article className={`showcase-card ${index === 0 ? 'showcase-card-featured' : ''}`} key={project.name}>
                <div className={`showcase-visual ${project.accent}`}>
                  <div className="project-badges">
                    <span>{project.category}</span>
                    <span>{project.timeframe}</span>
                  </div>
                </div>
                <div className="showcase-body">
                  <p className="project-type">{project.location}</p>
                  <h3>{project.name}</h3>
                  <p>{project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">Process</p>
            <h2>Designed to feel organised before work even begins.</h2>
            <p className="section-text">
              Decorating clients are buying confidence as much as they are buying labour.
              The site should show a tidy process, not just a list of services.
            </p>
            <Link to="/faq" className="btn btn-secondary">Read common questions</Link>
          </div>

          <div className="process-steps">
            <article className="process-step">
              <span className="process-step-number">01</span>
              <div>
                <h3>Quote and scope</h3>
                <p>Collect the details, define the works clearly, and agree the finish required.</p>
              </div>
            </article>
            <article className="process-step">
              <span className="process-step-number">02</span>
              <div>
                <h3>Preparation and protection</h3>
                <p>Surface prep, careful masking, and clean setup create the conditions for good work.</p>
              </div>
            </article>
            <article className="process-step">
              <span className="process-step-number">03</span>
              <div>
                <h3>Delivery and handover</h3>
                <p>The finish is completed properly, the space is left tidy, and the result is ready to present.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Client confidence</p>
              <h2>Trust builds faster when the site shows social proof and clear standards.</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={`${item.author}-${item.context}`}>
                <p className="testimonial-quote">“{item.quote}”</p>
                <p className="testimonial-author">{item.author}</p>
                <p className="testimonial-context">{item.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div className="trust-panel dark-panel">
            <p className="eyebrow">Working standard</p>
            <h2>Small trust signals often decide whether someone gets in touch.</h2>
            <p className="section-text trust-panel-text">
              The site now communicates a steadier process and better first impression.
              These final trust cues help convert that interest into enquiries.
            </p>
          </div>

          <div className="trust-list">
            {trustSignals.map((signal) => (
              <article className="trust-item" key={signal}>
                <span className="trust-bullet"></span>
                <p>{signal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
