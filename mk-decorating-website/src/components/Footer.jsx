import { Link } from 'react-router-dom'
import LogoMark from './LogoMark'
import Icon from './Icon'
import { businessInfo } from '../content/siteContent'

const serviceLinks = [
  { label: 'Full Property Refurbishment', slug: 'full-property-refurbishment' },
  { label: 'Kitchen & Bathroom Renovation', slug: 'kitchen-bathroom-renovation' },
  { label: 'Fitted Wardrobes & Joinery', slug: 'fitted-wardrobes-joinery' },
  { label: 'Flooring & Tiling', slug: 'flooring-tiling' },
  { label: 'Plastering & Decorating', slug: 'plastering-decorating' },
  { label: 'Property Maintenance', slug: 'property-maintenance' },
]

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/projects' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-footer__inner">
        <div className="mk-footer__grid">
          <div className="mk-footer__about">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LogoMark style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                MK Decorating
              </span>
            </div>
            <p>Full-service renovation, refurbishment, and property maintenance. Quality craftsmanship, every project.</p>
            <div className="mk-footer__social">
              <a href="https://www.instagram.com/mkdecoratinguk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
            </div>
          </div>

          <div>
            <div className="mk-footer__col-title">Services</div>
            {serviceLinks.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="mk-footer__link">{s.label}</Link>
            ))}
          </div>

          <div>
            <div className="mk-footer__col-title">Company</div>
            {companyLinks.map((c) => (
              <Link key={c.label} to={c.to} className="mk-footer__link">{c.label}</Link>
            ))}
          </div>

          <div>
            <div className="mk-footer__col-title">Contact</div>
            <a href={businessInfo.phoneHref} className="mk-footer__contact-row mk-footer__contact-link">
              <span><Icon name="phone" size={13} /></span>{businessInfo.phone}
            </a>
            <a href={businessInfo.emailHref} className="mk-footer__contact-row mk-footer__contact-link">
              <span><Icon name="mail" size={13} /></span>{businessInfo.email}
            </a>
            <div className="mk-footer__contact-row">
              <span><Icon name="mapPin" size={13} /></span>{businessInfo.serviceArea}
            </div>
          </div>
        </div>

        <div className="mk-footer__bottom">
          <span>| © {new Date().getFullYear()} MK Decorating Maintenance and Refurbishment Ltd | Company number: 12269006 | VAT number: GB 434 7435 89 | All rights reserved |</span>
          <span>
            <Link to="/privacy" className="mk-footer__legal-link">Privacy Policy</Link>
            {' · '}
            <Link to="/terms" className="mk-footer__legal-link">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
