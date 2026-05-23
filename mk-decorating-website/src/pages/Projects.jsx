import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

import wardrobeOpen from '../assets/projects/wardrobe-open.jpeg'
import wardrobeChandelier from '../assets/projects/wardrobe-chandelier.jpeg'
import bedroomMattress from '../assets/projects/bedroom-mattress.jpeg'
import joineryDetail from '../assets/projects/joinery-detail.jpeg'
import marbleTiling from '../assets/projects/marble-tiling.jpeg'
import featureWall from '../assets/projects/feature-wall.jpeg'
import livingRoom from '../assets/projects/living-room.jpeg'

// Order tuned so the 3-col grid fills cleanly (wide=2 cols).
// Row 1: wide + 1 (3) | Row 2: 1 + 1 + 1 (3) | Row 3: wide + 1 (3)
const items = [
  { label: 'Fitted Wardrobes', area: 'Residential', img: wardrobeOpen, wide: true },
  { label: 'Bespoke Joinery', area: 'Residential', img: joineryDetail },
  { label: 'Bedroom Refurbishment', area: 'Residential', img: wardrobeChandelier },
  { label: 'Bathroom Tiling', area: 'Residential', img: marbleTiling },
  { label: 'Feature Wall', area: 'Interior', img: featureWall },
  { label: 'Full Property Refurbishment', area: 'Residential', img: bedroomMattress, wide: true },
  { label: 'Living Room Refresh', area: 'Residential', img: livingRoom },
]

export default function Projects() {
  return (
    <>
      <div className="mk-pagehead">
        <p className="mk-eyebrow">Portfolio</p>
        <h1>Our Work</h1>
      </div>

      <section className="mk-section mk-section--subtle">
        <div className="mk-section__inner">
          <div className="mk-gallery-grid">
            {items.map((item, i) => (
              <div
                key={i}
                className={`mk-gallery__item mk-gallery__item--photo ${item.wide ? 'mk-gallery__item--wide' : ''}`}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="mk-gallery__overlay" />
                <div className="mk-gallery__category">{item.area}</div>
                <div className="mk-gallery__title">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mk-section mk-section--accent">
        <div className="mk-cta">
          <h2 className="mk-cta__title">Ready to transform your space?</h2>
          <p className="mk-cta__lead">
            Get a free, no-obligation quote.
          </p>
          <Link to="/contact" className="mk-btn mk-btn--navy">
            Get a Free Quote <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
