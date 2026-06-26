import { NavLink } from 'react-router-dom'

export default function SEOPage() {
  const services = [
    { name: 'SEO Marketing', path: '/services/seo', active: true, icon: '📊' },
    { name: 'Content Marketing', path: '/services/content', icon: '📝' },
    { name: 'Social Marketing', path: '/services/social-media', icon: '👥' },
    { name: 'PPC Advertising', path: '/services/branding', icon: '🎯' },
  ]

  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-bg"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center py-5">
            <h1 className="service-hero-title">SEO Marketing</h1>
            <div className="breadcrumb-nav mt-4">
              <NavLink to="/" className="breadcrumb-link">HOME</NavLink>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">SEO MARKETING</span>
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
                <img src="/seomarketing.webp" alt="SEO Marketing" className="service-img" />
              </div>
            </div>

            {/* Right: Content + Sidebar */}
            <div className="col-lg-5">
              <div className="row g-4">
                {/* Main Description */}
                <div className="col-12">
                  <div className="service-description" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="service-desc-title">What is SEO Marketing?</h2>
                    <p className="service-desc-text">
                      Our SEO services help your business rank higher on search engines like Google. We optimize your website through keyword research, on-page SEO, technical improvements, and strategic link building. The goal is to increase organic traffic, improve search visibility, and bring qualified leads to your business.
                    </p>
                    <ul className="service-benefits">
                      <li><i className="bi bi-check-circle-fill"></i> Improve Google rankings</li>
                      <li><i className="bi bi-check-circle-fill"></i> Drive organic traffic</li>
                      <li><i className="bi bi-check-circle-fill"></i> Increase conversions</li>
                      <li><i className="bi bi-check-circle-fill"></i> Long-term results</li>
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
