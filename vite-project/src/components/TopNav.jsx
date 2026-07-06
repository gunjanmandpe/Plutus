import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      if (isScrolled) {
        // close any open dropdowns when user scrolls
        setServicesOpen(false)
        setMobileServicesOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand */}
        <NavLink className="brand-mark" to="/">
          <img
            src="/plutus-logo.png"
            alt="Plutus Digital Asset Logo"
            className="brand-logo"
          />
         
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navmenu d-none d-lg-flex">
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About Us
              </NavLink>
            </li>
            <li
              className={`nav-item-has-dropdown${servicesOpen ? ' open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-dropdown-toggle" aria-expanded={servicesOpen}>
                Services Hub <i className="bi bi-caret-down-fill ms-2" />
              </button>
              <ul className="dropdown-menu">
                <li><NavLink to="/services/seo">SEO</NavLink></li>
                <li><NavLink to="/services/social-media">Social Media Marketing</NavLink></li>
                <li><NavLink to="/services/content">Content Creation</NavLink></li>
                <li><NavLink to="/services/branding">Branding & Design</NavLink></li>
                <li><NavLink to="/services/web">Web Development</NavLink></li>
                <li><NavLink to="/services/performance">Performance Marketing</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/political">
                Political
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions d-flex align-items-center gap-3">
          {/* <NavLink to="/login" className="nav-login-btn d-none d-lg-flex">
            <i className="bi bi-person me-1"></i> Login
          </NavLink> */}
          <NavLink to="/contact#contact-form" className="nav-cta-btn d-none d-lg-flex">
            Try It Free <i className="bi bi-arrow-right ms-2"></i>
          </NavLink>
          <button type="button" className="nav-icon-btn d-none d-lg-flex" aria-label="More actions">
            <i className="bi bi-grid-3x3-gap"></i>
          </button>

          {/* Mobile hamburger */}
          <button
            className={`mobile-toggle d-lg-none${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`}>
          <div className="mobile-nav-inner">
          <button className="mobile-nav-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <i className="bi bi-x-lg"></i>
          </button>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
                <i className="bi bi-chevron-right ms-2" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About Us
                <i className="bi bi-chevron-right ms-2" />
              </NavLink>
            </li>
            <li className={`mobile-has-submenu ${mobileServicesOpen ? ' open' : ''}`}>
              <button className="mobile-submenu-toggle" onClick={() => setMobileServicesOpen(s => !s)} aria-expanded={mobileServicesOpen}>
                Services Hub <i className="bi bi-caret-down-fill ms-2" />
              </button>
              <ul className={`mobile-submenu ${mobileServicesOpen ? ' open' : ''}`}>
                <li><NavLink to="/services/seo">SEO</NavLink></li>
                <li><NavLink to="/services/social-media">Social Media Marketing</NavLink></li>
                <li><NavLink to="/services/content">Content Creation</NavLink></li>
                <li><NavLink to="/services/branding">Branding & Design</NavLink></li>
                <li><NavLink to="/services/web">Web Development</NavLink></li>
                <li><NavLink to="/services/performance">Performance Marketing</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/political">
                Political
                <i className="bi bi-chevron-right ms-2" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                Blogs
                <i className="bi bi-chevron-right ms-2" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact
                <i className="bi bi-chevron-right ms-2" />
              </NavLink>
            </li>
          </ul>
          <NavLink to="/contact#contact-form" className="mobile-cta-btn" onClick={() => setMenuOpen(false)}>
            Request Demo <i className="bi bi-arrow-right ms-2"></i>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
