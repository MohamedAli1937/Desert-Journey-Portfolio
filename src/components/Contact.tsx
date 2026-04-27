import { SiElement } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="arabesque-divider">
        <span className="arabesque-divider__line" />
        <span className="arabesque-divider__star" />
        <span className="arabesque-divider__line" />
      </div>

      <h2 className="section__title reveal" style={{ textAlign: 'center' }}>
        Get in <span>Touch</span>
      </h2>

      <p className="contact__text reveal">
        Whether it's a collaboration, open-source contribution, or just a
        conversation about Math, Physics and AI — I'd love to hear from you.
      </p>

      <div className="contact__links reveal">
        {/* --- Existing Links --- */}
        <a
          href="mailto:mohamedali019b@gmail.com"
          className="contact__link"
          id="contact-email"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Gmail
        </a>

        <a
          href="https://github.com/MohamedAli1937"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
          id="contact-github"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohamed-ali-ben-belghith-7b8519384"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
          id="contact-linkedin"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        {/* --- New Links --- */}
        <a
          href="https://discordapp.com/users/medali019"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
          id="contact-discord"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.618-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 0 00.031.056 19.908 19.908 0 005.993 3.029.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.291.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.079.01c.12.099.246.198.373.292a.077.077 0 01-.007.127 12.299 12.299 0 01-1.873.891.077.077 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 00-.031-.029zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z" />
          </svg>
          Discord
        </a>
        <a
          href="https://matrix.to/#/@medali__:matrix.org"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
          id="contact-element"
        >
          <SiElement size={18} style={{ marginRight: '6px' }} />
          Element
        </a>
      </div>

      <footer className="footer">
        <p>
          <span>✦</span> Made with midnight inspiration <span>✦</span>
        </p>
        <p style={{ marginTop: '0.3rem' }}>
          © 2026 Mohamed Ali BENBELGHITH · Tunisia · All rights reserved
        </p>
      </footer>
    </section>
  );
}
