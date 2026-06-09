import './App.css'
import { useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopNav from './components/TopNav'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <div className="site-shell">
      {!isLoginPage && <TopNav />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* ── Footer (hidden on login page) ─────────────────── */}
      {!isLoginPage && (
        <footer className="footer-bar">
          <div className="container">
            <div className="row gy-5 mb-5">

              {/* Brand column */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-brand d-flex align-items-center gap-2 mb-3">
                  <img
                    src="https://plutusdigitalasset.com/assets/img/logo.png"
                    alt="Plutus Logo"
                    className="brand-logo"
                  />
                  <span className="footer-brand-name">Plutus Digital Asset</span>
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
                  <li><NavLink to="/platform">Platform</NavLink></li>
                  <li><NavLink to="/solutions">Solutions</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="col-lg-3 col-md-6">
                <h5 className="footer-heading">Solutions</h5>
                <ul className="footer-links">
                  <li><NavLink to="/solutions">Portfolio Management</NavLink></li>
                  <li><NavLink to="/solutions">Risk Management</NavLink></li>
                  <li><NavLink to="/solutions">Crypto Algorithms</NavLink></li>
                  <li><NavLink to="/solutions">Institutional Services</NavLink></li>
                  <li><NavLink to="/solutions">Market Intelligence</NavLink></li>
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
                <NavLink to="/contact" className="btn-request-demo d-inline-block mt-4">
                  Request Demo
                </NavLink>
              </div>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Bottom bar */}
            <div className="footer-bottom row align-items-center gy-3">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0">
                  © {new Date().getFullYear()} <strong>Plutus Digital Asset</strong>. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">Secure • Modern • Built for the future of finance.</p>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App
