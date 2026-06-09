import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header position-absolute w-100 d-flex align-items-center flex-column">
      {/* Top info bar */}
      <div className="topinfo-bar w-100 d-none d-lg-block">
        <div className="container-fluid px-4">
          <div className="row align-items-center">
            <div className="col-lg-8 text-start">
              <a href="mailto:sales@plutusdigitalasset.com" className="topinfo-link">
                <i className="bi bi-envelope-fill me-2"></i>
                sales@plutusdigitalasset.com
              </a>
            </div>
            <div className="col-lg-4 text-end">
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="nav-main w-100">
        <div className="container-xl d-flex align-items-center justify-content-between py-3">
          <NavLink className="brand-mark d-flex align-items-center gap-2 text-decoration-none" to="/">
            <img
              src="https://plutusdigitalasset.com/assets/img/logo.png"
              alt="Plutus Digital Asset Logo"
              className="brand-logo"
            />
            <span className="sitename">Plutus Digital Asset</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="navmenu d-none d-lg-block">
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/platform">Platform</NavLink></li>
              <li><NavLink to="/solutions">Solutions</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </nav>

          <div className="d-flex align-items-center gap-3">
            <NavLink className="btn-request-demo d-none d-lg-inline-flex" to="/contact">
              Request Demo
            </NavLink>
            {/* Mobile hamburger */}
            <button
              className="mobile-toggle d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-nav">
            <ul>
              <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/platform" onClick={() => setMenuOpen(false)}>Platform</NavLink></li>
              <li><NavLink to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</NavLink></li>
              <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
              <li>
                <NavLink to="/contact" className="btn-request-demo d-inline-block mt-2" onClick={() => setMenuOpen(false)}>
                  Request Demo
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
