import { NavLink } from 'react-router-dom'

export default function BrandingPage() {
  const services = [
    { name: 'SEO Marketing', path: '/services/seo', icon: '📊' },
    { name: 'Content Marketing', path: '/services/content', icon: '📝' },
    { name: 'Social Marketing', path: '/services/social-media', icon: '👥' },
    { name: 'Branding & Design', path: '/services/branding', active: true, icon: '🎯' },
  ]

  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-bg"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center py-5">
            <h1 className="service-hero-title">Branding & Design</h1>
            <div className="breadcrumb-nav mt-4">
              <NavLink to="/" className="breadcrumb-link">HOME</NavLink>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">BRANDING & DESIGN</span>
              <p>Your brand identity defines how people perceive your business. We create professional logos, brand guidelines, marketing creatives, and visual identities that build trust and make your brand stand out in the competitive digital world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left: Service Image */}
            <div className="col-lg-7">
              <div className="service-img-wrapper" data-aos="fade-up">
                <img src="/branding & strategy.webp" alt="Branding & Design" className="service-img" />
              </div>
            </div>

            {/* Right: Content + Sidebar */}
            <div className="col-lg-5">
              <div className="row g-4">
                {/* Main Description */}
                <div className="col-12">
                  <div className="service-description" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="service-desc-title">Build Your Strong Brand</h2>
                    <p className="service-desc-text">
                      A strong brand sets you apart from competitors and creates lasting connections with customers. We develop comprehensive branding strategies that reflect your company's values and resonate with your target audience.
                    </p>
                    <p className="service-desc-text">
                      From logo design to brand guidelines and visual identity, we create cohesive, memorable brands that drive business growth and customer loyalty.
                    </p>
                    <ul className="service-benefits">
                      <li><i className="bi bi-check-circle-fill"></i> Logo & brand identity</li>
                      <li><i className="bi bi-check-circle-fill"></i> Brand strategy & positioning</li>
                      <li><i className="bi bi-check-circle-fill"></i> Visual design guidelines</li>
                      <li><i className="bi bi-check-circle-fill"></i> Brand consistency</li>
                    </ul>
                    <NavLink to="/contact" className="service-cta-btn mt-4">
                      Get Started <i className="bi bi-arrow-right ms-2"></i>
                    </NavLink>
                  </div>
                </div>

                {/* Services Sidebar */}
                <div className="col-12">
                  <div className="services-sidebar" data-aos="fade-up" data-aos-delay="200">
                    <div className="sidebar-header">
                      <i className="bi bi-rocket-fill"></i>
                      <h3>All Services</h3>
                    </div>
                    <div className="services-list">
                      {services.map(service => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          className={`service-link ${service.active ? 'active' : ''}`}
                        >
                          <span className="service-name">{service.name}</span>
                          <i className="bi bi-arrow-right"></i>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
