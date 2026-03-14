import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import LogoMark from './LogoMark'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <LogoMark className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-title">MK Decorating</span>
            <span className="brand-subtitle">Refurbishment & Maintenance</span>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
