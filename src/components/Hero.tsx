import { useEffect, useState } from 'react';
import { FiMapPin, FiCpu, FiStar } from 'react-icons/fi';
import heroDay from '../assets/hero-day.png';
import heroNight from '../assets/hero-night.png';
import heroDayFg from '../assets/hero-day-bg.png';
import heroNightFg from '../assets/hero-night-bg.png';

const AnimatedName = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '700px',
        marginBottom: '1rem',
      }}
    >
      <svg viewBox="0 0 1000 140" className="animated-name-svg">
        <text
          x="500"
          y="100"
          textAnchor="middle"
          className="animated-text"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Mohamed <tspan className="animated-text--accent">Ali</tspan>
        </text>
      </svg>
    </div>
  );
};

const StarLayer = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <div className="hero__stars">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="hero__star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

const Campfire = ({
  isDarkMode,
  onClick,
}: {
  isDarkMode: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="campfire-interactive-area" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF campfire' : 'Turn ON campfire'}
      </div>
    </div>
  );
};

const LanternClicker = ({
  isDarkMode,
  onClick,
}: {
  isDarkMode: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="lantern-interactive-area" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF lantern' : 'Turn ON lantern'}
      </div>
    </div>
  );
};

export default function Hero({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="desert-section hero-parallax-container" id="hero">
      {/* Back Layers (The Desert Sky) - Cross-fading */}
      <img
        src={heroDay}
        alt="Desert day sky"
        className="hero-layer hero-layer--bg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <img
        src={heroNight}
        alt="Desert night sky"
        className="hero-layer hero-layer--bg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        className={`section-overlay section-overlay--golden`}
        style={{
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <div
        className={`section-overlay section-overlay--dark`}
        style={{
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div className="vignette-overlay" />

      <StarLayer active={isDarkMode} />
      <Campfire isDarkMode={isDarkMode} onClick={toggleTheme} />
      <LanternClicker isDarkMode={isDarkMode} onClick={toggleTheme} />

      <div
        className={`section-content hero-content ${visible ? 'hero-content--visible' : ''}`}
      >
        <div className="hero-glass-box">
          {isDarkMode && <div className="fire-light-effect" />}
          {isDarkMode && <div className="lantern-glow-effect" />}
          <div className="hero__intro">Hey! I am</div>
          <AnimatedName />
          <h2 className="hero__tagline">Software Engineering Student</h2>
          <div className="hero__meta">
            <div className="hero__meta-item">
              <FiCpu className="hero__meta-icon" />
              <span>AI & Machine Learning · Mathematics · Physics</span>
            </div>
            <div className="hero__meta-item">
              <FiMapPin className="hero__meta-icon" />
              <span>Tunisia · INSAT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={heroDayFg}
        alt="Desert day foreground"
        className="hero-layer hero-layer--fg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <img
        src={heroNightFg}
        alt="Desert night foreground"
        className="hero-layer hero-layer--fg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </section>
  );
}
