const bgImage = '/hero-slide-1.webp'

export default function HeroSlider() {
  return (
    <div className="dg-hero">
      <section id="hero" className="dg-content container position-relative">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center hero-copy pe-lg-5">
            <span className="hero-badge">Trusted SEO & Marketing Experts</span>
            <h1 className="fw-bold" data-aos="fade-up">
              Boost Your SEO
              <br />
              Marketing <span className="hero-icon-block"><i className="bi bi-target"></i></span> Save
              <br />
              Time <span className="hero-icon-block"><i className="bi bi-rocket-fill"></i></span> Effortlessly
            </h1>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
              Drive more traffic, improve search rankings, and increase conversions with our professional SEO solutions. From on-page optimization to link building.
            </p>
            <div className="hero-btns" data-aos="fade-up" data-aos-delay="200">
              <a href="/contact" className="btn-hero-primary">
                Get Started Now <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer" className="btn-hero-outline hero-play-btn">
                <i className="bi bi-play-fill"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" target="_blank" rel="noopener noreferrer" className="hero-link">
                WATCH DEMO
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-2 hero-img text-center" data-aos="zoom-out">
            <img
              src="/hero-01.webp"
              className="img-fluid floating-img"
              alt="Plutus platform interface"
              style={{ maxWidth: '440px' }}
            />
          </div>
        </div>
      </section>

    </div>
  )
}
