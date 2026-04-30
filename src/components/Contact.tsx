import { useState } from 'react';
import contactDay from '../assets/contact-day.png';
import contactNight from '../assets/contact-night.png';
import contactDayFg from '../assets/conatct-day-bg.png';
import contactNightFg from '../assets/contact-night-bg.png';
import { FiMail, FiGithub, FiLinkedin, FiMessageSquare } from 'react-icons/fi';

export default function Contact({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) {
  const [pulseActive, setPulseActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const triggerPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    triggerPulse();

    // Simulate sending delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 200);
  };

  const ContactCampfire = ({ onClick }: { onClick: () => void }) => (
    <div
      className="campfire-interactive-area contact-campfire"
      onClick={onClick}
    >
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF campfire' : 'Turn ON campfire'}
      </div>
    </div>
  );

  const ContactLantern = ({ onClick }: { onClick: () => void }) => (
    <div className="lantern-interactive-area contact-lantern" onClick={onClick}>
      <div className="interactive-note">
        {isDarkMode ? 'Turn OFF lantern' : 'Turn ON lantern'}
      </div>
    </div>
  );

  return (
    <section className="desert-section hero-parallax-container" id="contact">
      <img
        src={contactDay}
        alt="Desert day contact"
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
        src={contactNight}
        alt="Desert night contact"
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

      {/* The Beacon Light Pulse at 618x205 */}
      <div
        className={`beacon-light-pulse ${pulseActive ? 'active' : ''}`}
        style={{
          position: 'absolute',
          top: '15.3%',
          left: '36.9%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
        }}
      />

      <div
        className="section-content contact-content about-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          transform: 'translateY(-5vh) translateX(10%)',
        }}
      >
        <div
          className="beacon-container"
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <form
            className="sand-engraved-form sand-engraved-form--mini"
            style={{
              flex: '1',
              minWidth: '320px',
              maxWidth: '500px',
              zIndex: 10,
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Designation"
              className="sand-engraved-form__input"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <textarea
              placeholder="Your Message..."
              className="sand-engraved-form__textarea"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className={`beacon-submit-btn ${status !== 'idle' ? 'btn--active' : ''}`}
              disabled={status !== 'idle'}
            >
              <span>
                {status === 'idle' && 'Ignite Beacon'}
                {status === 'sending' && 'Igniting...'}
                {status === 'success' && 'Beacon Lit!'}
              </span>
            </button>
          </form>
        </div>
      </div>

      <footer className="desert-footer-container decoupled-footer">
        <div className="desert-footer-box">
          <p className="footer-inspiration">
            ✦ Made with midnight inspiration ✦
          </p>
          <p className="footer-copyright">
            © 2026 Mohamed Ali BENBELGHITH · Tunisia · All rights reserved
          </p>
        </div>
      </footer>

      {/* Parol Bubble for the Contact Section - Decoupled */}
      <div
        className="contact-parol-bubble"
        style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100,
          pointerEvents: 'none',
          width: 'max-content',
          maxWidth: '500px',
        }}
      >
        <div
          className="parol-bubble parol-bubble--right-tail"
          style={{
            whiteSpace: 'normal',
            textAlign: 'center',
            lineHeight: '1.4',
          }}
        >
          {status === 'success' ? (
            <span style={{ color: '#ffcc66' }}>
              ✦ Beacon detected! I'll follow the light and get back to you soon.
              ✦
            </span>
          ) : (
            <>
              Whether it's a collaboration, open-source contribution, or just a
              conversation about Math, Physics and AI — I'd love to hear from
              you.
            </>
          )}
        </div>
      </div>

      {/* Invisible Interactive Zones for the Sign Road - Decoupled */}
      {[
        {
          id: 'email',
          label: 'Send an Email',
          url: 'mailto:mohamedali019b@gmail.com',
          top: '55%',
          left: '13.38%',
        },
        {
          id: 'github',
          label: 'Visit GitHub',
          url: 'https://github.com/MohamedAli1937',
          top: '60%',
          left: '13.75%',
        },
        {
          id: 'linkedin',
          label: 'Connect on LinkedIn',
          url: 'https://www.linkedin.com/in/mohamed-ali-ben-belghith-7b8519384',
          top: '65%',
          left: '13.7%',
        },
        {
          id: 'discord',
          label: 'Message on Discord',
          url: 'https://discordapp.com/users/medali019',
          top: '70%',
          left: '13.8%',
        },
        {
          id: 'element',
          label: 'Chat on Element',
          url: 'https://matrix.to/#/@medali__:matrix.org',
          top: '75%',
          left: '13.9%',
        },
      ].map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="invisible-road-link road-sign-interactive"
          style={{
            position: 'absolute',
            top: link.top,
            left: link.left,
            width: '150px',
            height: '45px',
            zIndex: 150,
            cursor: 'pointer',
            transform: 'translate(-50%, -50%)',
          }}
          aria-label={link.label}
        >
          <div
            className="interactive-note"
            style={{
              left: '100%',
              top: '50%',
              transform: 'translateY(-50%) translateX(10px)',
            }}
          >
            {link.label}
          </div>
        </a>
      ))}

      {/* Front Layers (The Desert Foreground) - Cross-fading */}
      <img
        src={contactDayFg}
        alt="Desert day foreground"
        className="hero-layer hero-layer--fg"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isDarkMode ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
        }}
      />
      <img
        src={contactNightFg}
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
          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.8))',
        }}
      />
      <ContactCampfire onClick={toggleTheme} />
      <ContactLantern onClick={toggleTheme} />
    </section>
  );
}
