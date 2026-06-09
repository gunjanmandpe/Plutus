export default function HomePage() {
  const values = [
    {
      icon: 'shield-check',
      title: 'Security & Trust',
      text: 'We prioritize the safety of your assets with enterprise-grade security protocols, multi-factor authentication, and continuous monitoring to ensure your investments are always protected.'
    },
    {
      icon: 'lightning-charge',
      title: 'Innovation First',
      text: 'Plutus continuously evolves its platform to harness the latest advancements in blockchain and digital finance, giving you access to cutting-edge tools and market opportunities.'
    },
    {
      icon: 'people',
      title: 'Client-Centric',
      text: 'Our platform is built around your needs. From individual traders to institutional investors, every feature is designed to deliver clarity, control, and confidence in your investment journey.'
    },
  ]

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '50+', label: 'Projects' },
    { value: '24/7', label: 'Hours of Support' },
    { value: '30+', label: 'Hard Workers' },
  ]

  return (
    <main className="main">
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="hero-wrapper">
        <section id="hero" className="container position-relative">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center hero-copy pe-lg-5">
              <span className="hero-badge">Trusted digital asset infrastructure</span>
              <h1 className="fw-bold" data-aos="fade-up">
                Empowering Individuals and Institutional Investors
              </h1>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
                Plutus Digital Asset Platform offers seamless market access to the world's premier crypto trading and liquidity venues, all through a single, unified platform.
              </p>
              <div className="hero-btns d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="200">
                <a href="/login" className="btn-hero-primary">
                  Access Platform <i className="bi bi-arrow-right ms-1"></i>
                </a>
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer" className="btn-hero-outline">
                  <i className="bi bi-play-circle me-2"></i> Watch Video
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2 hero-img text-center" data-aos="zoom-out">
              <img
                src="https://plutusdigitalasset.com/assets/img/hero-img.png"
                className="img-fluid floating-img"
                alt="Plutus platform interface"
                style={{ maxWidth: '440px' }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="about section py-5">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="200">
              <h3 className="mb-4 text-dark fw-bold" style={{ fontSize: '1.75rem', lineHeight: '1.5' }}>
                Welcome to Plutus Digital Asset Platform, where innovation meets reliability. Whether you're an individual investor or a seasoned financial institution, our platform is tailored to meet your needs with precision and efficiency.
              </h3>
              <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                For individuals, Plutus Digital Asset Platform offers intuitive tools designed to simplify investment decisions and maximize returns. From comprehensive portfolio management to real-time market insights, our user-friendly interface ensures that every investor can navigate the complexities of finance with confidence.
              </p>
              <p className="text-muted mb-5" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                For institutions, Plutus Digital Asset Platform provides robust solutions that streamline operations and enhance performance. Our customizable analytics and reporting capabilities empower organizations to make data-driven decisions swiftly and securely. With Plutus Digital Asset Platform, institutions gain a competitive edge in a rapidly evolving market landscape.
              </p>
              <p className="fw-bold mb-0" style={{ fontSize: '1.1rem', color: 'var(--brand)' }}>
                At Plutus Digital Asset Platform, we are committed to driving success through cutting-edge technology and unwavering dedication to our clients' goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section id="values" className="values section py-5">
        <div className="container section-title text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Our Values</h2>
          <p className="fs-5 text-muted">What we value most</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {values.map(({ icon, title, text }) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <article className="content-card h-100 text-center p-4 p-lg-5">
                  <div
                    className="mb-4 d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px', background: 'rgba(123, 67, 250, 0.1)', borderRadius: '50%', color: 'var(--brand)', fontSize: '2rem' }}
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </div>
                  <h3 className="mb-3">{title}</h3>
                  <p className="text-muted mb-0">{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section id="stats" className="stats section py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {stats.map(({ value, label }) => (
              <div className="col-lg-3 col-md-6" key={label}>
                <div className="stats-item w-100 h-100">
                  <span>{value}</span>
                  <p className="mb-0 fw-semibold text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section id="features" className="features section py-5">
        <div className="container section-title text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Features</h2>
          <p className="fs-5 text-muted">Our Advanced Features</p>
        </div>
        <div className="container mb-5">
          <div className="row gy-5 align-items-center">
            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
              <img
                src="https://plutusdigitalasset.com/assets/img/features.png"
                className="img-fluid"
                alt="Plutus features"
                style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div className="col-xl-6 d-flex align-items-center">
              <div className="content-card text-start p-4 p-lg-5 w-100">
                <h3 className="mb-3">A streamlined digital asset platform</h3>
                <p className="mb-4 text-muted">
                  Built for secure access, faster execution, and a cleaner user experience across every touchpoint.
                </p>
                <div className="row gy-3">
                  {[
                    { icon: 'shield-lock', text: 'Enterprise-grade security & compliance' },
                    { icon: 'graph-up-arrow', text: 'Real-time analytics & market insights' },
                    { icon: 'arrow-repeat', text: 'Multi-exchange connectivity & execution' },
                    { icon: 'cpu', text: 'Algorithmic trading & portfolio automation' },
                  ].map(({ icon, text }) => (
                    <div className="col-12" key={text}>
                      <div className="feature-box">
                        <i className={`bi bi-${icon}`}></i>
                        <span>{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Request Demo ────────────────────────────── */}
      <section id="cta" className="cta-section py-5">
        <div className="container">
          <div className="cta-card text-center p-5">
            <h2 className="fw-bold mb-3 text-white">Ready to get started?</h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem' }}>
              Join hundreds of investors and institutions already using Plutus Digital Asset Platform.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/login" className="btn-cta-white">
                Access Platform
              </a>
              <a href="/contact" className="btn-cta-outline">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
