import { Link } from 'react-router-dom'
import Icon from './Icon'
import { businessInfo } from '../content/siteContent'

/**
 * Bottom-fixed action bar shown only on small screens.
 * Always-visible Call + Get Quote shortcuts for mobile visitors.
 */
export default function MobileCTA() {
  return (
    <div className="mk-mobcta" role="region" aria-label="Quick actions">
      <a href={businessInfo.phoneHref} className="mk-mobcta__btn mk-mobcta__btn--call">
        <Icon name="phone" size={18} />
        <span>Call us</span>
      </a>
      <Link to="/contact" className="mk-mobcta__btn mk-mobcta__btn--quote">
        Get a Free Quote
        <Icon name="arrowRight" size={16} />
      </Link>
    </div>
  )
}
