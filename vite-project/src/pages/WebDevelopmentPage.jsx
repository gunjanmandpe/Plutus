import { NavLink } from 'react-router-dom'

export default function WebDevelopmentPage() {
  const services = [
    { name: 'SEO Marketing', path: '/services/seo', icon: '📊' },
    { name: 'Content Marketing', path: '/services/content', icon: '📝' },
    { name: 'Social Marketing', path: '/services/social-media', icon: '👥' },
    { name: 'Web & Tech Development', path: '/services/web', active: true, icon: '💻' },
  ]

  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-bg"></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center py-5">
            <h1 className="service-hero-title">Web Development</h1>
            <div className="breadcrumb-nav mt-4">
              <NavLink to="/" className="breadcrumb-link">HOME</NavLink>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">WEB DEVELOPMENT</span>
              <p>We design and develop modern, responsive, and high-performance websites that represent your brand professionally. Our websites are optimized for speed, mobile devices, SEO, and user experience to ensure visitors convert into customers.</p>
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
                <img src="/hero-slide-1.webp" alt="Web Development" className="service-img" />
              </div>
            </div>

            {/* Right: Content + Sidebar */}
            <div className="col-lg-5">
              <div className="row g-4">
                {/* Main Description */}
                <div className="col-12">
                  <div className="service-description" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="service-desc-title">Modern Web Solutions</h2>
                    <p className="service-desc-text">
                      We build fast, secure, and scalable websites and web applications that deliver exceptional user experiences. Our developers use the latest technologies to create solutions tailored to your business needs.
                    </p>
                    <p className="service-desc-text">
                      From responsive websites to custom applications, we develop digital solutions that drive business growth and user satisfaction.
                    </p>
                    <ul className="service-benefits">
                      <li><i className="bi bi-check-circle-fill"></i> Responsive web design</li>
                      <li><i className="bi bi-check-circle-fill"></i> Custom web applications</li>
                      <li><i className="bi bi-check-circle-fill"></i> E-commerce solutions</li>
                      <li><i className="bi bi-check-circle-fill"></i> Performance optimization</li>
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
