import { useState, useEffect, useRef } from 'react';
import blogDay from '../assets/blog-day.png';
import blogNight from '../assets/blog-night.png';
import blogDayFg from '../assets/blog-day-bg.png';
import blogNightFg from '../assets/blog-night-bg.png';
import letterImg from '../assets/letter.png';

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

export default function Blog({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const BlogCampfire = ({ onClick }: { onClick: () => void }) => (
    <div className="campfire-interactive-area blog-campfire" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF campfire' : 'Turn ON campfire'}
      </div>
    </div>
  );

  const BlogLantern = ({ onClick }: { onClick: () => void }) => (
    <div className="lantern-interactive-area blog-lantern" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF lantern' : 'Turn ON lantern'}
      </div>
    </div>
  );

  const MoneyJar = () => (
    <div className="campfire-interactive-area blog-money-jar">
      <div className="interactive-note">
        It is empty... you can sponsor me to fill it with money! 💰
      </div>
    </div>
  );

  return (
    <section
      className="desert-section hero-parallax-container"
      id="blog"
      ref={sectionRef}
    >
      {/* Background Layers */}
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
          alignItems: 'flex-start',
          paddingTop: '4rem',
          paddingLeft: '13%',
        }}
      >
        <div className="campfire-timeline-vertical">
          {posts.map((post, index) => (
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`campfire-parchment-scroll ${isVisible ? 'animate-unroll' : ''}`}
              key={post.title}
              style={
                {
                  '--scroll-img': `url(${letterImg})`,
                  animationDelay: `${index * 0.15}s`,
                } as any
              }
              onMouseEnter={() => setActiveUrl(post.url)}
              onMouseLeave={() => setActiveUrl(null)}
            >
              <div className="scroll-roll scroll-roll--top"></div>
              <div className="campfire-parchment__inner-border"></div>
              <div className="campfire-parchment__header">
                <span className="campfire-parchment__date">{post.date}</span>
                <span className="campfire-parchment__tag">{post.tag}</span>
              </div>
              <div className="campfire-parchment__body">
                <h3 className="campfire-parchment__title">{post.title}</h3>
                <p className="campfire-parchment__excerpt">{post.excerpt}</p>
              </div>
              <div className="campfire-parchment__footer">
                <span className="campfire-parchment__time">
                  <svg
                    width="12"
                    height="12"
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
              </div>
              <div className="scroll-roll scroll-roll--bottom"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Persistent Parol Bubble for the Boy */}
      <div
        className="boy-parol-bubble"
        style={{
          position: 'absolute',
          top: '50%',
          left: '66.67%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
          opacity: 1,
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          pointerEvents: 'none',
        }}
      >
        <div className="parol-bubble">Explore my blogs</div>
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

      <BlogCampfire onClick={toggleTheme} />
      <BlogLantern onClick={toggleTheme} />
      <MoneyJar />
    </section>
  );
}
