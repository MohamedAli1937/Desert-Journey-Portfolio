import { FaSun, FaChartLine } from 'react-icons/fa';

const posts = [
  {
    date: 'Apr 2026',
    tag: 'Finance · TDA',
    title: 'When Topology Meets The Market',
    excerpt:
      "Financial markets don't just move — they change shape. Can abstract mathematics see a crash before it happens? Exploring how topological data analysis can detect structural instability.",
    readTime: '10 min read',
    symbol: <FaChartLine />,
    url: 'https://mohamedali1937.github.io/tda_blog/',
    featured: false,
  },
  {
    date: 'Mar 2026',
    tag: "GSoC\'26 · SunPy",
    title: 'Giving Radiospectra a Cosmic GPS',
    excerpt:
      "Teaching radio spectrograms the language of the universe — migrating SunPy's radiospectra to NDCube, adding World Coordinate Systems so every pixel knows its exact position in spacetime.",
    readTime: '8 min read',
    symbol: <FaSun />,
    url: 'https://mohamedali1937.github.io/post01/',
    featured: false,
  },
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="arabesque-divider">
        <span className="arabesque-divider__line" />
        <span className="arabesque-divider__star" />
        <span className="arabesque-divider__line" />
      </div>

      <h2 className="section__title reveal" style={{ textAlign: 'center' }}>
        Blog &amp; <span>Thoughts</span>
      </h2>
      <p
        className="section__subtitle reveal"
        style={{ textAlign: 'center', margin: '0 auto 3.5rem' }}
      >
        Notes on physics, mathematics, AI, and the open-source world.
      </p>

      <div className="blog-grid reveal-children">
        {posts.map((post) => (
          <a
            href={post.url}
            target={post.url.startsWith('http') ? '_blank' : undefined}
            rel={
              post.url.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            className={`blog-card${post.featured ? ' blog-card--featured' : ''}`}
            key={post.title}
          >
            <div className="blog-card__glass-bg"></div>

            <div className="blog-card__symbol" aria-hidden="true">
              {post.symbol}
            </div>

            <div className="blog-card__header">
              <div className="blog-card__meta">
                <span className="blog-card__date">{post.date}</span>
                <span className="blog-card__tag">{post.tag}</span>
              </div>
            </div>

            <div className="blog-card__content">
              <h3 className="blog-card__title">{post.title}</h3>
              <p className="blog-card__excerpt">{post.excerpt}</p>
            </div>

            <div className="blog-card__footer">
              <div className="blog-card__read-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {post.readTime}
              </div>
              <div className="blog-card__read-more">
                <span>Read Post</span>
                <span className="blog-card__arrow">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
