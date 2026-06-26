import IconCard from '../components/IconCard'
import HeroSlider from '../components/HeroSlider'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const serviceSlides = [
    {
      title: 'Social Marketing',
      description: 'Promoting your brand through social platforms to engage audiences and drive results.',
      image: '/socialmedia.webp',
      path: '/services/social-media',
    },
    {
      title: 'Branding & Strategy',
      description: 'Building a strong brand identity and planning strategies to achieve business growth.',
      image: '/branding & strategy.webp',
      path: '/services/branding',
    },
    {
      title: 'SEO Marketing',
      description: 'Optimizing your website to rank higher on search engines and drive organic traffic.',
      image: '/seomarketing.webp',
      path: '/services/seo',
    },
    {
      title: 'Content Creation',
      description: 'Creating and sharing valuable content to attract, engage, and convert your audience.',
      image: '/hero-slide-4.png',
      path: '/services/content',
    },
    {
      title: 'Web & Tech Development',
      description: 'Web development and technical solutions to power your online presence.',
      image: '/hero-slide-1.webp',
      path: '/services/web',
    },
  ]
  
  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % serviceSlides.length)
    }, 3200)
    return () => clearInterval(id)
  }, [paused, serviceSlides.length])


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

  const testimonials = [
    {
      name: 'Trimortal Ventures',
      role: 'Founder',
      image: '/testimonial-1.jpg',
      rating: 5,
      text: 'Plutuss Digital gave us exactly what we needed- a clean, modern website and consistent social media presence. Their strategy and support made a real difference.'
    },
    {
      name: 'Royal Court',
      role: 'CEO',
      image: '/testimonial-2.jpg',
      rating: 5,
      text: 'We\'ve seen a great boost in visibility with Plutuss Digital. Their targeted campaigns and social media management helped us attract the right buyers.'
    },
    {
      name: 'Prosumers Solar Pvt. Ltd.',
      role: 'Director',
      image: '/testimonial-3.jpg',
      rating: 5,
      text: 'Plutuss Digital transformed our online presence. From web design to social media, everything was handled with creativity and precision. Truly a game-changer!'
    },
  ]

  const faqItems = [
    {
      question: 'What services does Plutuss Digital offer?',
      answer: 'We offer comprehensive digital marketing services including SEO, social media management, content creation, branding strategy, web development, and PPC campaigns to help your business grow online.'
    },
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy. Typically, you can expect to see initial results within 3-6 months, with significant improvements visible after 6-12 months, depending on competition and your starting point.'
    },
    {
      question: 'Do you provide website design and development?',
      answer: 'Yes, we provide full website design and development services. We create modern, responsive, and user-friendly websites optimized for conversions and search engines.'
    },
    {
      question: 'Can you manage our social media accounts?',
      answer: 'Absolutely! We manage social media accounts across all major platforms including Facebook, Instagram, LinkedIn, and Twitter. We create content, engage with followers, and track performance metrics.'
    },
    {
      question: 'Do you work with small businesses and startups?',
      answer: 'Yes! We work with businesses of all sizes, from startups to established companies. We tailor our services and pricing to fit your budget and business goals.'
    },
  ]

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`bi bi-star${i < Math.floor(rating) ? '-fill' : i < rating ? '-half' : ''}`}></i>
    ))
  }

  return (
    <main className="main">
      {/* ── Hero Slider ─────────────────────────────────── */}
      <HeroSlider />

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="about section py-5 dg-about-section">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="dg-about-img-wrap">
                <img src="/about-03.jpg" alt="About Plutus" className="dg-about-img" />
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="dg-about-content ps-lg-4">
                <span className="dg-about-pill">
                  <i className="bi bi-info-circle-fill me-2"></i> About Us
                </span>

                <h3 className="mb-3 text-dark fw-bold dg-about-title">
                  Smart SEO & Marketing
                  <br />
                  Solutions <span className="fst-italic">for Business</span>
                </h3>

                <p className="text-muted mb-4 dg-about-subtitle">
                  <span className="dg-about-dropcap">W</span>e are a results-driven digital marketing and SEO agency dedicated to helping businesses grow their online presence and attract qualified traffic.
                </p>

                <div className="dg-about-list mb-4">
                  <div className="dg-about-list-item">
                    <i className="bi bi-check2-circle"></i>
                    <span>Improve Google rankings and organic traffic</span>
                  </div>
                  <div className="dg-about-list-item">
                    <i className="bi bi-check2-circle"></i>
                    <span>PPC campaigns for targeted and fast results</span>
                  </div>
                  <div className="dg-about-list-item">
                    <i className="bi bi-check2-circle"></i>
                    <span>Result-oriented digital marketing strategies</span>
                  </div>
                  <div className="dg-about-list-item">
                    <i className="bi bi-check2-circle"></i>
                    <span>Conversion Rate Optimization (CRO)</span>
                  </div>
                </div>

                <div className="dg-about-footer d-flex flex-column flex-sm-row align-items-center gap-3">
                  <a href="/contact" className="dg-about-primary-btn">
                    Get More Traffic <i className="bi bi-arrow-right ms-2"></i>
                  </a>

                  <div className="dg-about-phone d-flex align-items-center gap-3">
                    <span className="dg-phone-icon">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                    <div>
                      <div className="fw-semibold">(888) 4567890</div>
                      <small className="text-muted">Speak with our team</small>
                    </div>
                  </div>
                </div>

                <div className="dg-about-circle-badge mt-5">
                  <div className="dg-about-circle-inner">
                    <i className="bi bi-rocket-fill"></i>
                  </div>
                  <div className="dg-about-circle-text">ABOUT US • SEOFIN • ABOUT US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Slider (cards with horizontal slide) ───── */}
      <section className="services-offer section py-5">
        <div className="container" data-aos="fade-up">
          <div className="services-header text-center mb-5">
            <span className="service-pill">
              <i className="bi bi-graph-up me-2"></i> Services We Offer
            </span>
            <h2 className="fw-bold">ROI-Focused Digital Marketing & <span className="text-gradient">SEO Services</span></h2>
          </div>

          <div className="services-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="services-track" ref={trackRef} style={{ transform: `translateX(-${activeIndex * (100 / Math.min(3, serviceSlides.length))}%)` }}>
              {serviceSlides.map((s, i) => (
                <div className="service-slide-col" key={s.title}>
                  <div className="service-card h-100 text-center py-4 px-3">
                    <div className="service-card-img-wrapper mb-4">
                      <img src={s.image} alt={s.title} className="service-card-img" />
                    </div>
                    <h3 className="service-card-title mb-3">{s.title}</h3>
                    <p className="service-card-desc text-muted mb-4">{s.description}</p>
                    <NavLink to={s.path} className="service-card-link">Learn More <i className="bi bi-arrow-right ms-1"></i></NavLink>
                  </div>
                </div>
              ))}
            </div>

            {/* autoplay controls removed; slider advances automatically */}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────── */}
      <section className="featured-projects section py-5">
        <div className="container" data-aos="fade-up">
          <div className="projects-header text-center mb-5">
            <span className="project-pill">
              <i className="bi bi-star-fill me-2"></i> Featured Projects
            </span>
            <h2 className="fw-bold">Work We're <span className="text-gradient">Proud Of</span></h2>
          </div>

          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-card-img">
                    <img src="/royal-court-logo.png" alt="Royal Court" />
                  </div>
                </div>
                <h3 className="project-card-title mt-4 mb-3">Royal Court</h3>
                <p className="project-card-desc text-muted">A real estate campaign that generated quality leads within the first month and achieved excellent ROI through a tailored digital marketing strategy.</p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-card-img">
                    <img src="/trimortal-logo.png" alt="Trimortal Ventures" />
                  </div>
                </div>
                <h3 className="project-card-title mt-4 mb-3">Trimortal Ventures</h3>
                <p className="project-card-desc text-muted">Generated high-quality real estate leads and built trust by showcasing successful collaborations and client satisfaction through strategic content marketing.</p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-card-img">
                    <img src="/prosumers-logo.png" alt="Prosumers Solar" />
                  </div>
                </div>
                <h3 className="project-card-title mt-4 mb-3">Prosumers Solar Pvt Ltd</h3>
                <p className="project-card-desc text-muted">Generated qualified solar leads and built trust with educational content to promote sustainable energy adoption and long-term customer relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews From Clients ────────────────────────── */}
      <section className="reviews-section section py-5">
        <div className="container" data-aos="fade-up">
          <div className="reviews-header text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-0" style={{ color: '#111827' }}>
              Reviews From <br />
              <span className="d-inline-flex align-items-center gap-3 mt-2">
                <img src="/review-icon.png" alt="Reviews" style={{ width: '80px', height: '80px', objectFit: 'contain' }} /> Our Clients
              </span>
            </h2>
          </div>

          <div className="reviews-wrapper">
            <div className="reviews-container">
              <div className="reviews-track" style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}>
                {testimonials.map((testimonial, i) => (
                  <div className="review-card-col" key={i}>
                    <div className="review-card">
                      <div className="review-card-content-bg">
                        <div className="review-stars mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="review-text m-0">"{testimonial.text}"</p>
                      </div>
                      <div className="review-footer">
                        <img src={testimonial.image} alt={testimonial.name} className="review-avatar" />
                        <div className="review-author-info">
                          <h5 className="review-name mb-0">{testimonial.name}</h5>
                          <p className="review-role mb-0">Happy Client</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reviews-dots mt-5 text-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${activeIndex === i ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────
      <section id="values" className="values section py-5">
        <div className="container section-title text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Our Values</h2>
          <p className="fs-5 text-muted">What we value most</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {values.map(({ icon, title, text }) => (
              <IconCard key={title} icon={icon} title={title} text={text} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Stats ───────────────────────────────────────────
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
      </section> */}

      {/* ── Features ────────────────────────────────────────
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
      </section> */}

      {/* ── FAQ ────────────────────────────────────────────– */}
      <section className="faq-custom section py-5">
        <div className="container" data-aos="fade-up">
          <div className="faq-header text-center mb-5">
            <span className="faq-label">FAQ</span>
            <h2 className="fw-bold mt-3">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-muted mt-3">Find answers to some of the most common questions about our digital marketing services.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-container">
                {faqItems.map((item, index) => (
                  <div key={index} className={`faq-item ${expandedFAQ === index ? 'active' : ''}`}>
                    <div className="faq-header-item" onClick={() => toggleFAQ(index)}>
                      <h4 className="faq-question">{item.question}</h4>
                      <span className="faq-toggle">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                    </div>
                    {expandedFAQ === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
