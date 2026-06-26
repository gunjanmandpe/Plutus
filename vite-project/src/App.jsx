import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SEOPage from './pages/SEOPage'
import SocialMediaPage from './pages/SocialMediaPage'
import BrandingPage from './pages/BrandingPage'
import ContentCreationPage from './pages/ContentCreationPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import AboutPage from './pages/AboutPage'
import PoliticalPage from './pages/PoliticalPage'
import BlogsPage from './pages/BlogsPage'

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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/political" element={<PoliticalPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/services/branding" element={<BrandingPage />} />
        <Route path="/services/content" element={<ContentCreationPage />} />
        <Route path="/services/web" element={<WebDevelopmentPage />} />
      </Routes>

      {/* ── Footer (hidden on login page) ─────────────────── */}
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App
