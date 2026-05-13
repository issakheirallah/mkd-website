import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'
import Icon from './Icon'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setIsOpen(false) }, [location.pathname])

  return (
    <header className="mk-nav">
      <div className="mk-container mk-nav__inner">
        <Link to="/" className="mk-nav__brand">
          <LogoMark className="mk-nav__brand-logo" />
          <span className="mk-nav__brand-text">
            <span className="mk-nav__brand-name">MK</span>
            <span className="mk-nav__brand-tag">Decorating</span>
          </span>
        </Link>

        <button
          type="button"
          className="mk-nav__toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          <Icon name={isOpen ? 'x' : 'menu'} size={20} />
        </button>

        <nav className={`mk-nav__links ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `mk-nav__link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mk-btn mk-btn--primary mk-btn--sm mk-nav__cta">
            Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
