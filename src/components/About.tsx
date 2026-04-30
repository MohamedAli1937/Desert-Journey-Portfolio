import { useState, useEffect, useRef } from 'react';
import aboutDay from '../assets/about-day.png';
import aboutNight from '../assets/about-night.png';
import aboutDayFg from '../assets/about-day-bg.png';
import aboutNightFg from '../assets/about-night-bg.png';
import { FiCpu, FiActivity, FiLink, FiLayers, FiBox } from 'react-icons/fi';
import { FaAtom, FaRobot, FaBitcoin } from 'react-icons/fa';
import { IoTerminal } from 'react-icons/io5';

export default function About({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is scrolled into view, reset the expanded card
        if (entry.isIntersecting) {
          setExpandedCard(null);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const disciplines = [
    {
      icon: 'Σ',
      title: 'Mathematics',
      // Added TDA to highlight your Market Risk Analyzer project
      skills: ['Linear Algebra', 'Calculus', 'Statistics', 'Topology & TDA'],
    },
    {
      icon: <FaAtom />,
      title: 'Physics',
      skills: ['Quantum Mechanics', 'Signal Processing', 'Astrophysics'],
    },
    {
      icon: <FaRobot />,
      title: 'AI & ML',
      // Emphasized Computer Vision based on your Face and Sign Language detection projects
      skills: [
        'Computer Vision',
        'Deep Learning',
        'Predictive Modeling',
        'Neural Networks',
      ],
    },
    {
      icon: <IoTerminal />,
      title: 'Software & Systems',
      // Grouped your core languages and highlighted Full-Stack and Shell Dev (Cpp-Shell)
      skills: [
        'Python',
        'C++',
        'JavaScript',
        'TypeScript',
        'Full-Stack Dev',
        'Shell Dev',
        'Algorithms',
      ],
    },
    {
      icon: <FaBitcoin />, // Consider changing this to <FaEthereum /> if you have it imported, given your Ethereum DApp!
      title: 'Blockchain',
      // Tailored to match your Certificate-DApp project
      skills: ['Smart Contracts', 'Web3 / DApps', 'Ethereum', 'Solidity'],
    },
  ];

  const OasisCampfire = ({ onClick }: { onClick: () => void }) => (
    <div className="campfire-interactive-area oasis-campfire" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF campfire' : 'Turn ON campfire'}
      </div>
    </div>
  );
  const OasisLantern = ({ onClick }: { onClick: () => void }) => (
    <div className="lantern-interactive-area oasis-lantern" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF lantern' : 'Turn ON lantern'}
      </div>
    </div>
  );

  const MoneyJar = () => (
    <div className="campfire-interactive-area oasis-money-jar">
      <div className="interactive-note">
        It is empty... you can sponsor me to fill it with money! 💰
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="desert-section hero-parallax-container"
      id="about"
    >
      {/* Background Layers */}
      <img
        src={aboutDay}
        alt="Desert day oasis"
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
        src={aboutNight}
        alt="Desert night oasis"
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
        className={`section-overlay section-overlay--warm`}
        style={{
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      />
      <div
        className={`section-overlay section-overlay--oasis`}
        style={{
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      {/* Speech Bubble Notice */}
      {!expandedCard && (
        <div className="oasis-selection-notice oasis-speech-bubble">
          <span>Explore my skills</span>
          <div className="speech-bubble-tail"></div>
        </div>
      )}

      <div className="section-content about-content">
        <div className="about-layout">
          {/* Left Column: Intro + Grid */}
          <div className="about-left-col">
            <div className="oasis-glass-card oasis-intro-text">
              {isDarkMode && <div className="fire-light-effect" />}
              {isDarkMode && <div className="lantern-glow-effect" />}
              <p>
                I’m Mohamed Ali, a Tunisian{' '}
                <strong>Software Engineering student at INSAT</strong> and an
                active <strong>Open Source contributor</strong>. I have a strong
                foundation in <strong>Full-Stack Development</strong> and a
                passion for{' '}
                <strong>AI, Machine Learning, and Computer Vision</strong>.
                Driven by a deep love for{' '}
                <strong>Mathematics and Physics</strong>, I enjoy tackling
                complex problems and have recently started exploring{' '}
                <strong>Blockchain</strong>.
              </p>
            </div>

            <div className="disciplines-grid-3">
              {[...disciplines, { title: 'Locked 1', isLocked: true }].map(
                (d, idx) => (
                  <div
                    className={`oasis-rock-card-pill ${expandedCard === d.title ? 'active' : ''} ${d.isLocked ? 'oasis-rock-card-pill--locked' : ''}`}
                    key={d.title || idx}
                    onClick={() => !d.isLocked && setExpandedCard(d.title)}
                  >
                    <div className="oasis-rock-card__icon-mini">
                      {d.isLocked ? (
                        <FiBox style={{ opacity: 0.5 }} />
                      ) : (
                        (d as any).icon
                      )}
                    </div>
                    <span className="oasis-rock-card__title-mini">
                      {d.isLocked ? 'Unblocking...' : d.title}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Column: Detail Card */}
          <div className="about-right-col">
            {expandedCard && (
              <div className="oasis-detail-card animate-in">
                <div className="oasis-detail-card__header">
                  <div className="oasis-detail-card__icon">
                    {disciplines.find((d) => d.title === expandedCard)?.icon}
                  </div>
                  <h3 className="oasis-detail-card__title">{expandedCard}</h3>
                </div>
                <div className="oasis-detail-card__content">
                  <div className="oasis-rock-card__skills">
                    {disciplines
                      .find((d) => d.title === expandedCard)
                      ?.skills.map((s) => (
                        <span key={s} className="oasis-leaf-tag">
                          {s}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={aboutDayFg}
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
        src={aboutNightFg}
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
      <OasisCampfire onClick={toggleTheme} />
      <OasisLantern onClick={toggleTheme} />
      <MoneyJar />
    </section>
  );
}
