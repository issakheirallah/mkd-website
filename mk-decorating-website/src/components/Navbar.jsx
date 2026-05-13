import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogoMark from './LogoMark'
import { siteContent } from '../content/siteContent'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { businessInfo, navigation } = siteContent

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <LogoMark className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-title">{businessInfo.companyName}</span>
            <span className="brand-subtitle">{businessInfo.tagline}</span>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-label={navigation.toggleLabel}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navigation.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
