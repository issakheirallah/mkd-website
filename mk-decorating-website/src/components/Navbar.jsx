import { Link, NavLink } from 'react-router-dom'
import LogoMark from './LogoMark'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <LogoMark className="brand-logo" />
          <span className="brand-copy">
            <span className="brand-title">MK Decorating</span>
            <span className="brand-subtitle">Refurbishment & Maintenance</span>
          </span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
