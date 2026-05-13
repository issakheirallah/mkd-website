import { siteContent } from '../content/siteContent'

export default function About() {
  const { aboutPage } = siteContent

  return (
    <section className="section">
      <div className="container two-column">
        <div>
          <p className="eyebrow">{aboutPage.eyebrow}</p>
          <h1>{aboutPage.heading}</h1>
          {aboutPage.paragraphs.map((paragraph) => (
            <p className="section-text" key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="card dark-panel">
          <h3>{aboutPage.sidebar.heading}</h3>
          <ul className="clean-list">
            {aboutPage.sidebar.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
