import projectDay from '../assets/project-day.png';
import projectNight from '../assets/project-night.png';
import projectDayFg from '../assets/project-day-bg.png';
import projectNightFg from '../assets/project-night-bg.png';

const projects = [
  {
    title: 'TDA Market Risk Analyzer',
    desc: 'Real-time financial risk detection using Topological Data Analysis.',
    tech: ['Mathematics', 'TDA', 'Python'],
    url: 'https://github.com/MohamedAli1937/TDA-Market-Risk-Analyzer',
    symbol: '📊',
  },
  {
    title: 'Certificate DApp',
    desc: 'Decentralized app for issuing academic certificates on Ethereum.',
    tech: ['Solidity', 'Ethereum', 'React'],
    url: 'https://github.com/MohamedAli1937/Certificate-DApp',
    symbol: '📜',
  },
  {
    title: "Alzheimer's MRI Prediction",
    desc: "Detection of Alzheimer's disease using MRI brain scans and CNNs.",
    tech: ['TensorFlow', 'Keras', 'Python'],
    url: 'https://github.com/MohamedAli1937/Alzheimer-s-MRI-Prediction-System',
    symbol: '🧠',
  },
  {
    title: 'KIBRA Smart Packing',
    desc: 'AI-powered 3D space optimization built with Gemini Pro.',
    tech: ['TypeScript', 'Gemini Pro', 'AI'],
    url: 'https://github.com/MohamedAli1937/KIBRA-Smart-Packing',
    symbol: '📦',
  },
  {
    title: 'Sign Language Detection',
    desc: 'Real-time computer vision for tracking sign language gestures.',
    tech: ['OpenCV', 'MediaPipe', 'Python'],
    url: 'https://github.com/MohamedAli1937/Sign-Language-Detection',
    symbol: '🤟',
  },
  {
    title: 'Sentiment Analyzer',
    desc: 'NLP system for detecting emotional tone in complex datasets.',
    tech: ['Python', 'NLTK', 'Scikit-Learn'],
    url: '#',
    symbol: '🎭',
  },
  {
    title: 'Real-time Face Detection',
    desc: 'High-speed facial landmark tracking and identification.',
    tech: ['Python', 'OpenCV', 'Dlib'],
    url: '#',
    symbol: '👤',
  },
  {
    title: 'Cpp-Shell',
    desc: 'Custom command interpreter demonstrating OS concepts.',
    tech: ['C++', 'Systems Programming'],
    url: 'https://github.com/MohamedAli1937/Cpp-Shell',
    symbol: '⌨',
  },
];

export default function Projects({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) {
  const ProjectCampfire = ({ onClick }: { onClick: () => void }) => (
    <div
      className="campfire-interactive-area project-campfire"
      onClick={onClick}
    >
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF campfire' : 'Turn ON campfire'}
      </div>
    </div>
  );

  const ProjectLantern = ({ onClick }: { onClick: () => void }) => (
    <div className="lantern-interactive-area project-lantern" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF lantern' : 'Turn ON lantern'}
      </div>
    </div>
  );
  return (
    <section className="desert-section hero-parallax-container" id="projects">
      <img
        src={projectDay}
        alt="Desert day ruins"
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
        src={projectNight}
        alt="Desert night ruins"
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
        className={`section-overlay section-overlay--ruins`}
        style={{
          opacity: isDarkMode ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        className="section-content about-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          paddingTop: '4rem',
        }}
      >
        <div
          className="relic-grid"
          style={{ width: '100%', maxWidth: '1200px', paddingBottom: '2rem' }}
        >
          {projects.map((p) => (
            <article className="ruin-stone-card" key={p.title}>
              <div className="ruin-stone-card__header">
                <span className="ruin-stone-card__symbol">{p.symbol}</span>
                <h3 className="ruin-stone-card__title">{p.title}</h3>
              </div>
              <p className="ruin-stone-card__desc">{p.desc}</p>
              <div className="ruin-stone-card__tech">
                {p.tech.map((t) => (
                  <span className="ruin-engraving-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ruin-stone-btn"
              >
                <span>View Artifact</span>{' '}
                <span className="ruin-stone-btn__arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={projectDayFg}
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
        src={projectNightFg}
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
      <ProjectCampfire onClick={toggleTheme} />
      <ProjectLantern onClick={toggleTheme} />
    </section>
  );
}
