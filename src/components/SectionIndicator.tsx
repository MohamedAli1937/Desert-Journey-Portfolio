const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

interface SectionIndicatorProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export default function SectionIndicator({
  activeSection,
  setActiveSection,
}: SectionIndicatorProps) {
  return (
    <div className="section-indicator section-indicator--visible">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`section-indicator__dot${activeSection === s.id ? ' active' : ''}`}
          onClick={() => setActiveSection(s.id)}
          aria-label={`Go to ${s.label}`}
          title={s.label}
        >
          <span className="section-indicator__label">{s.label}</span>
        </button>
      ))}
    </div>
  );
}
