// src/pages/BlogsPage.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

/* --------------------------------------------------------------
   Static data
---------------------------------------------------------------- */
const categories = [
  "All",
  "Digital Marketing",
  "SEO",
  "Social Media",
  "Branding",
  "Political",
  "Trends",
];

const blogs = [
  {
    id: 1,
    category: "Digital Marketing",
    title: "10 Digital Marketing Trends Dominating 2025",
    excerpt:
      "From AI‑generated content to hyper‑personalized ads — discover the top trends shaping digital marketing this year and how to leverage them for your brand.",
    date: "June 15, 2025",
    readTime: "5 min read",
    author: "Rahul Sharma",
    authorRole: "CEO",
    avatar: "RS",
    color: "#6366f1",
    featured: true,
  },
  {
    id: 2,
    category: "SEO",
    title: "How to Rank on Google’s First Page in 2025",
    excerpt:
      "A practical, no‑fluff guide to modern SEO — covering Core Web Vitals, E‑E‑A‑T, AI‑driven search, and link‑building strategies that actually work.",
    date: "June 10, 2025",
    readTime: "7 min read",
    author: "Sneha Patil",
    authorRole: "SEO Lead",
    avatar: "SP",
    color: "#8b5cf6",
    featured: false,
  },
  {
    id: 3,
    category: "Social Media",
    title: "Instagram Reels vs YouTube Shorts: Where Should Your Brand Be?",
    excerpt:
      "Short‑form video is king — but which platform wins for your brand? We break down the audience, algorithm, and ROI of each platform with real data.",
    date: "June 5, 2025",
    readTime: "4 min read",
    author: "Priya Mehta",
    authorRole: "Strategy Head",
    avatar: "PM",
    color: "#a78bfa",
    featured: false,
  },
  {
    id: 4,
    category: "Branding",
    title: "Why Brand Identity is Your Most Valuable Business Asset",
    excerpt:
      "A strong brand isn’t just a logo — it’s the feeling people get when they interact with your business. Here’s how to build one that lasts.",
    date: "May 28, 2025",
    readTime: "6 min read",
    author: "Amit Kulkarni",
    authorRole: "Creative Director",
    avatar: "AK",
    color: "#7c3aed",
    featured: false,
  },
  {
    id: 5,
    category: "Political",
    title: "How Political Campaigns Are Using Digital to Win Elections",
    excerpt:
      "Digital campaigning has transformed modern elections. Learn the strategies top campaigns use — from micro‑targeting voters to viral content creation.",
    date: "May 20, 2025",
    readTime: "8 min read",
    author: "Rahul Sharma",
    authorRole: "CEO",
    avatar: "RS",
    color: "#6366f1",
    featured: false,
  },
  {
    id: 6,
    category: "Trends",
    title: "AI in Marketing: Hype or the Future?",
    excerpt:
      "Artificial Intelligence is reshaping how brands create content, target audiences, and measure success. Here’s the honest truth about what AI can and cannot do.",
    date: "May 12, 2025",
    readTime: "5 min read",
    author: "Priya Mehta",
    authorRole: "Strategy Head",
    avatar: "PM",
    color: "#8b5cf6",
    featured: false,
  },
];

const catColors = {
  "Digital Marketing": "#6366f1",
  SEO: "#8b5cf6",
  "Social Media": "#a78bfa",
  Branding: "#7c3aed",
  Political: "#4f46e5",
  Trends: "#6d28d9",
};

/* --------------------------------------------------------------
   Component
---------------------------------------------------------------- */
export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featured = blogs.find((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured);

  return (
    <main className="blog-page">

      {/* ====================== HERO ====================== */}
      <section className="blog-hero">
        <div className="blog-hero-bg" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="blog-hero-inner text-center">
            <div className="blog-badge" data-aos="fade-down">
              <i className="bi bi-journal-richtext me-2" />
              Our Blog
            </div>
            <h1 className="blog-hero-title" data-aos="fade-up" data-aos-delay="100">
              Insights, Strategies &amp;<br />
              <span className="blog-gradient">Digital Marketing Wisdom</span>
            </h1>
            <p className="blog-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Stay ahead with expert articles on digital marketing, SEO, social media,
              branding, political campaigns, and the latest industry trends.
            </p>
          </div>
        </div>
        <div className="blog-breadcrumb">
          <NavLink to="/" className="breadcrumb-link">
            HOME
          </NavLink>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">BLOGS</span>
        </div>
      </section>

      {/* ================== FEATURED POST ================== */}
      {featured && activeCategory === "All" && (
        <section className="blog-featured section pt-6 pb-3">
          <div className="container">
            <div className="blog-section-label mb-4" data-aos="fade-up">
              Featured Article
            </div>

            <div className="blog-featured-card" data-aos="fade-up" data-aos-delay="100">
              <div
                className="blog-featured-badge"
                style={{ background: catColors[featured.category] }}
              >
                {featured.category}
              </div>

              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>

              <div className="blog-featured-meta">
                <div className="blog-author">
                  <div
                    className="blog-author-avatar"
                    style={{ "--ac": featured.color }}
                  >
                    {featured.avatar}
                  </div>

                  <div>
                    <div className="blog-author-name">{featured.author}</div>
                    <div className="blog-author-role">{featured.authorRole}</div>
                  </div>
                </div>

                <div className="blog-meta-right">
                  <span>
                    <i className="bi bi-calendar3 me-1" />
                    {featured.date}
                  </span>
                  <span>
                    <i className="bi bi-clock me-1" />
                    {featured.readTime}
                  </span>
                </div>
              </div>

              <button className="blog-read-btn">
                Read Article <i className="bi bi-arrow-right ms-2" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ===================== BLOG GRID ===================== */}
      <section className="blog-grid-section section py-5">
        <div className="container">

          {/* Category filter */}
          <div className="blog-category-filter mb-5" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-cat-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Card list */}
          <div className="row g-4">
            {rest.map((blog, i) => (
              <div
                className="col-lg-4 col-md-6"
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="blog-card">
                  <div className="blog-card-header">
                    <span
                      className="blog-card-category"
                      style={{
                        "--bc": catColors[blog.category] || "#6366f1",
                      }}
                    >
                      {blog.category}
                    </span>

                    <span className="blog-card-readtime">
                      <i className="bi bi-clock me-1" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>

                  <div className="blog-card-footer">
                    <div className="blog-card-author">
                      <div
                        className="blog-card-avatar"
                        style={{ "--bc": blog.color }}
                      >
                        {blog.avatar}
                      </div>

                      <div>
                        <div className="blog-card-author-name">{blog.author}</div>
                        <div className="blog-card-date">{blog.date}</div>
                      </div>
                    </div>

                    <button className="blog-card-link" aria-label="Read more">
                      <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="blog-empty text-center py-5" data-aos="fade-up">
              <i
                className="bi bi-journal-x"
                style={{ fontSize: "3rem", color: "rgba(255,255,255,0.2)" }}
              />
              <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "1rem" }}>
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================== NEWSLETTER CTA ================== */}
      <section className="blog-newsletter section py-6">
        <div className="container">
          <div className="blog-newsletter-inner" data-aos="zoom-in">
            <div className="blog-newsletter-glow" />
            <div className="blog-newsletter-content text-center">
              <div className="blog-section-label">Stay Updated</div>
              <h2 className="blog-newsletter-title">
                Get Marketing Insights{" "}
                <span className="blog-gradient">Delivered Weekly</span>
              </h2>
              <p className="blog-newsletter-text">
                Subscribe to the newsletter for the latest digital‑marketing tips,
                case studies, and industry news.
              </p>

              <div className="blog-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="blog-newsletter-input"
                />
                <button className="blog-newsletter-btn">
                  Subscribe <i className="bi bi-send-fill ms-2" />
                </button>
              </div>

              <p className="blog-newsletter-note">
                <i className="bi bi-lock-fill me-1" />
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}