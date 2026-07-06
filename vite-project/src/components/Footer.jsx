import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="container">
        <div className="row gy-4 mb-3">
          {/* Brand column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand mb-3">
              <img
                src="/plutus-logo.png"
                alt="Plutus Digital Asset Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-desc mb-4">
              A next-generation digital asset platform empowering individuals and institutions with seamless access to premier crypto trading and liquidity venues.
            </p>
            <div className="footer-social d-flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/political">Political</NavLink></li>
              <li><NavLink to="/blogs">Blogs</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><NavLink to="/services/seo">SEO Marketing</NavLink></li>
              <li><NavLink to="/services/social-media">Social Media</NavLink></li>
              <li><NavLink to="/services/content">Content Creation</NavLink></li>
              <li><NavLink to="/services/branding">Branding & Design</NavLink></li>
              <li><NavLink to="/services/web">Web Development</NavLink></li>
              <li><NavLink to="/services/performance">Performance Marketing</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:sales@plutusdigitalasset.com">
                  <i className="bi bi-envelope-fill me-2"></i>
                  sales@plutusdigitalasset.com
                </a>
              </li>
            </ul>
            <NavLink to="/contact#contact-form" className="btn-request-demo d-inline-block mt-4">
              Request Demo
            </NavLink>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom bar */}
        <div className="footer-bottom row align-items-center gy-2">
          <div className="col-12"></div>
        </div>

        <div className="footer-legal text-center py-2"></div>
      </div>
    </footer>
  )
}
