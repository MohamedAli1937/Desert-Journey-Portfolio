import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSun, FiMoon } from 'react-icons/fi';
import DesertCanvas from './components/DesertCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.desert-section');

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(i),
        onEnterBack: () => setActiveSection(i),
      });

      gsap.fromTo(
        panel.querySelectorAll('.section-content > *'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="desert-world" ref={containerRef}>
      <DesertCanvas />

      {/* Floating Navbar */}
      <nav className="desert-nav">
        <div className="nav-container">
          <div
            className="nav-logo"
            onClick={() => scrollTo('hero')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <img
              src="/logo.svg"
              alt="Logo"
              style={{ width: '28px', height: '28px' }}
            />
            <div>
              Mohamed <span>Ali</span>
            </div>
          </div>
          <div className="nav-links">
            {sections.map((sec, i) => (
              <button
                key={sec.id}
                className={`nav-link ${activeSection === i ? 'nav-link--active' : ''}`}
                onClick={() => scrollTo(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>

      <Hero
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <About
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <Projects isDarkMode={isDarkMode} />
      <Blog isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}
