import { useState } from 'react';
import contactDay from '../assets/contact-day.png';
import contactNight from '../assets/contact-night.png';
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';

export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
  const [pulseActive, setPulseActive] = useState(false);
  const triggerPulse = () => { setPulseActive(true); setTimeout(() => setPulseActive(false), 2000); };

  return (
    <section className="desert-section hero-parallax-container" id="contact">
      <img
        src={contactDay}
        alt="Desert day contact"
        className="hero-layer hero-layer--bg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      <img
        src={contactNight}
        alt="Desert night contact"
        className="hero-layer hero-layer--bg"
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isDarkMode ? 1 : 0, transition: 'opacity 0.8s ease-in-out', position: 'absolute', top: 0, left: 0 }}
      />

      <div
        className={`section-overlay section-overlay--warm`}
        style={{ opacity: isDarkMode ? 0 : 1, transition: 'opacity 0.8s ease-in-out' }}
      />
      <div
        className={`section-overlay section-overlay--dark`}
        style={{ opacity: isDarkMode ? 1 : 0, transition: 'opacity 0.8s ease-in-out', position: 'absolute', top: 0, left: 0 }}
      />
      
      <div className={`section-content contact-content about-content ${pulseActive ? 'contact--pulse' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '4rem' }}>


        <div className="beacon-container" style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-start' }}>
          <form className="sand-engraved-form sand-engraved-form--mini" style={{ flex: '1.5', minWidth: '350px' }} onSubmit={(e) => { e.preventDefault(); triggerPulse(); }}>
            <input type="text" placeholder="Your Designation" className="sand-engraved-form__input" required />
            <textarea placeholder="Your Message..." className="sand-engraved-form__textarea" required />
            <button type="submit" className="beacon-submit-btn">
              <span>Ignite Beacon</span>
            </button>
          </form>

          <div className="road-sign-links" style={{ flex: '1', minWidth: '300px' }}>
            {[
              { id: 'email', label: 'Gmail', url: 'mailto:mohamedali019b@gmail.com', icon: <FiMail /> },
              { id: 'github', label: 'GitHub', url: 'https://github.com/MohamedAli1937', icon: <FiGithub /> },
              { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-ali-ben-belghith-7b8519384', icon: <FiLinkedin /> },
              { id: 'discord', label: 'Discord', url: 'https://discordapp.com/users/medali019', icon: <FiMessageSquare /> }
            ].map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="road-sign-link road-sign-link--mini" key={link.id}>
                <span className="road-sign-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="desert-footer" style={{ marginTop: '1rem', textAlign: 'center', width: '100%' }}>
          <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>✦ Made with midnight inspiration ✦</p>
          <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>© 2026 Mohamed Ali BENBELGHITH · Tunisia</p>
        </footer>
      </div>
    </section>
  );
}
