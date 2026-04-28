import blogDay from '../assets/blog-day.png';
import blogNight from '../assets/blog-night.png';
import blogDayFg from '../assets/blog-day-bg.png';
import blogNightFg from '../assets/blog-night-bg.png';

const posts = [
  {
    date: 'Apr 2026',
    tag: 'Finance · TDA',
    title: 'When Topology Meets The Market',
    excerpt:
      "Financial markets don't just move — they change shape. Can abstract mathematics see a crash?",
    readTime: '10 min read',
    url: 'https://mohamedali1937.github.io/tda_blog/',
  },
  {
    date: 'Mar 2026',
    tag: "GSoC'26 · SunPy",
    title: 'Giving Radiospectra a Cosmic GPS',
    excerpt:
      "Teaching radio spectrograms the language of the universe — migrating SunPy's radiospectra to NDCube.",
    readTime: '8 min read',
    url: 'https://mohamedali1937.github.io/post01/',
  },
];

export default function Blog({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="desert-section hero-parallax-container" id="blog">
      <img
        src={blogDay}
        alt="Desert day blog"
        className="hero-layer hero-layer--bg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
      <img
        src={blogNight}
        alt="Desert night blog"
        className="hero-layer hero-layer--bg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        className={`section-overlay section-overlay--warm`}
        style={{
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
      <div
        className={`section-overlay section-overlay--campfire`}
        style={{
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        className="section-content blog-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          paddingTop: '4rem',
        }}
      >
        <div
          className="campfire-timeline"
          style={{ width: '100%', maxWidth: '1200px', paddingBottom: '2rem' }}
        >
          {posts.map((post) => (
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="campfire-parchment"
              key={post.title}
            >
              <div className="campfire-parchment__header">
                <span className="campfire-parchment__date">{post.date}</span>
                <span className="campfire-parchment__tag">{post.tag}</span>
              </div>
              <h3 className="campfire-parchment__title">{post.title}</h3>
              <p className="campfire-parchment__excerpt">{post.excerpt}</p>
              <div className="campfire-parchment__footer">
                <span className="campfire-parchment__time">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
                <span className="campfire-parchment__read">
                  Read Story{' '}
                  <span className="campfire-parchment__arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={blogDayFg}
        alt="Desert day foreground"
        className="hero-layer hero-layer--fg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
        }}
      />
      <img
        src={blogNightFg}
        alt="Desert night foreground"
        className="hero-layer hero-layer--fg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </section>
  );
}
