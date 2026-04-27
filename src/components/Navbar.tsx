import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // We only attach scroll event to slider-panel instances if we had vertical scrolling.
    // In horizontal mode, navbar is always visible transparently or we can just keep it solid/glass.
    const onScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrolled(target.scrollTop > 40);
    };

    const panels = document.querySelectorAll('.slider-panel');
    panels.forEach((p) =>
      p.addEventListener('scroll', onScroll, { passive: true })
    );
    return () =>
      panels.forEach((p) => p.removeEventListener('scroll', onScroll));
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div
        className="navbar__logo"
        style={{ cursor: 'pointer' }}
        onClick={() => setActiveSection('hero')}
      >
        M<span>.</span>A
      </div>
      <ul className="navbar__links">
        {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
          <li key={item}>
            <button
              className={`navbar__link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActiveSection(item.toLowerCase())}
            >
              {item}
            </button>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
