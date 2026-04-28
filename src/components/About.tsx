import aboutDay from '../assets/about-day.png';
import aboutNight from '../assets/about-night.png';
import aboutDayFg from '../assets/about-day-bg.png';
import aboutNightFg from '../assets/about-night-bg.png';

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="desert-section hero-parallax-container" id="about">
      <img
        src={aboutDay}
        alt="Desert day oasis"
        className="hero-layer hero-layer--bg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      <img
        src={aboutNight}
        alt="Desert night oasis"
        className="hero-layer hero-layer--bg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 1 : 0, transition: 'opacity 0.8s ease-in-out', position: 'absolute', top: 0, left: 0 }}
      />

      <div
        className={`section-overlay section-overlay--warm`}
        style={{ opacity: isDarkMode ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      <div
        className={`section-overlay section-overlay--oasis`}
        style={{ opacity: isDarkMode ? 1 : 0, transition: 'opacity 0.8s ease-in-out', position: 'absolute', top: 0, left: 0 }}
      />

      <div className="section-content about-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '4rem' }}>
        <div className="oasis-intro-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
            I’m Mohamed Ali, a Tunisian{' '}
            <strong style={{ color: 'var(--accent-color)' }}>Software Engineering student at INSAT</strong> with strong
            interests in <strong style={{ color: 'var(--accent-color)' }}>AI and Machine Learning</strong>. I also enjoy{' '}
            <strong style={{ color: 'var(--accent-color)' }}>Mathematics and Physics</strong> and have recently started
            exploring <strong style={{ color: 'var(--accent-color)' }}>Blockchain</strong>.
          </p>
        </div>


        <div className="disciplines-grid" style={{ width: '100%', maxWidth: '1200px' }}>
          {[
            { icon: 'Σ', title: 'Mathematics', skills: ['Linear Algebra', 'Calculus', 'Statistics', 'Topology'] },
            { icon: '⚛', title: 'Physics', skills: ['Quantum Mechanics', 'Signal Processing', 'Astrophysics'] },
            { icon: '🤖', title: 'AI & ML', skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Neural Networks'] },
            { icon: '⌘', title: 'Systems', skills: ['C++ Programming', 'Shell Development', 'Algorithms'] },
            { icon: '₿', title: 'Blockchain', skills: ['Cryptocurrency', 'Smart Contracts', 'Web3', 'Solidity'] },
          ].map((d) => (
            <div className="oasis-rock-card oasis-rock-card--compact" key={d.title}>
              <div className="oasis-rock-card__icon">{d.icon}</div>
              <h3 className="oasis-rock-card__title">{d.title}</h3>
              <div className="oasis-rock-card__skills">
                {d.skills.map((s) => <span key={s} className="oasis-leaf-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={aboutDayFg}
        alt="Desert day foreground"
        className="hero-layer hero-layer--fg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      <img
        src={aboutNightFg}
        alt="Desert night foreground"
        className="hero-layer hero-layer--fg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 1 : 0, transition: 'opacity 0.8s ease-in-out', position: 'absolute', top: 0, left: 0 }}
      />
    </section>
  );
}
