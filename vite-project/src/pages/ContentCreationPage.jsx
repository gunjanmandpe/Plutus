import { NavLink } from 'react-router-dom'

export default function ContentCreationPage() {
  const services = [
    { name: 'SEO Marketing', path: '/services/seo', icon: '📊' },
    { name: 'Content Marketing', path: '/services/content', active: true, icon: '📝' },
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
            <h1 className="service-hero-title">Content Creation</h1>
            <div className="breadcrumb-nav mt-4">
              <NavLink to="/" className="breadcrumb-link">HOME</NavLink>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">CONTENT CREATION</span>
              <p>High-quality content is the key to digital success. Our content creation services include social media creatives, videos, blogs, reels, and marketing visuals designed to capture attention and communicate your brand message effectively while keeping your audience engaged</p>
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
                <img src="/hero-slide-4.png" alt="Content Creation" className="service-img" />
              </div>
            </div>

            {/* Right: Content + Sidebar */}
            <div className="col-lg-5">
              <div className="row g-4">
                {/* Main Description */}
                <div className="col-12">
                  <div className="service-description" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="service-desc-title">Compelling Content Strategy</h2>
                    <p className="service-desc-text">
                      Quality content is the backbone of digital marketing. Our creative team produces engaging, SEO-optimized content that attracts, engages, and converts your target audience.
                    </p>
                    <p className="service-desc-text">
                      From blog posts and articles to videos and infographics, we create diverse content across all formats to establish your authority and drive results.
                    </p>
                    <ul className="service-benefits">
                      <li><i className="bi bi-check-circle-fill"></i> Blog posts & articles</li>
                      <li><i className="bi bi-check-circle-fill"></i> Video content creation</li>
                      <li><i className="bi bi-check-circle-fill"></i> Infographics & visuals</li>
                      <li><i className="bi bi-check-circle-fill"></i> Content distribution</li>
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
