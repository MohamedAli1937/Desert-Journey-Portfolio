import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Logo from './components/Logo';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal, .reveal-children');
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [activeTab]);

  return (
    <div className="app-layout">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      <Hero compact={activeTab !== 'home'} setActiveTab={setActiveTab} />

      <nav className="tab-navigation">
        {['about', 'projects', 'blog', 'contact'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab);
              setTimeout(() => {
                document
                  .querySelector('.tab-navigation')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <main className="tab-content transition-container">
        {activeTab === 'about' && (
          <div className="fade-in">
            <About />
          </div>
        )}
        {activeTab === 'projects' && (
          <div className="fade-in">
            <Projects />
          </div>
        )}
        {activeTab === 'blog' && (
          <div className="fade-in">
            <Blog />
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="fade-in">
            <Contact />
          </div>
        )}
      </main>
    </div>
  );
}
