import { useState, useEffect } from 'react';

interface HeroProps {
  compact?: boolean;
  setActiveTab?: (tab: string) => void;
}

const equations = [
  'E = mc²',
  '∇ × E = −∂B/∂t',
  'iℏ ∂ψ/∂t = Ĥψ',
  'F = G·m₁m₂/r²',
  'F = ma',
  'pV = nRT',
  'V = IR',
  'λ = h/p',
  'ΔS ≥ 0',
  'E² = (pc)² + (mc²)²',
  '∇·E = ρ/ε₀',
  'a² + b² = c²',
  '∮B·dl = μ₀I',
  'Δx·Δp ≥ ħ/2',
  'd²x/dt² + ω²x = 0',
];

const floatingSymbols = ['∫', '∑', '∇', 'π', '∞', 'λ', 'Ω', 'ℏ'];

export default function Hero({ compact, setActiveTab }: HeroProps) {
  const [eqIndex, setEqIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEqIndex((prev) => (prev + 1) % equations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`section section--hero ${compact ? 'section--hero-compact' : ''}`}
      id="hero"
    >
      <div className="hero__float-symbols">
        {floatingSymbols.map((sym, i) => (
          <span key={i} className="hero__float-symbol">
            {sym}
          </span>
        ))}
      </div>

      <div className="hero__content">
        <h1 className="hero__name">Mohamed Ali</h1>

        <p className="hero__tagline">
          Software Engineering Student <br />
          AI &amp; Machine Learning · Mathematics · Physics
        </p>

        <p className="hero__location">
          <span>✦</span> Tunisia · SWE Student in INSAT <span>✦</span>
        </p>

        <div
          style={{
            marginTop: '1.5rem',
            position: 'relative',
            height: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {equations.map((eq, i) => {
            const isActive = i === eqIndex;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  fontSize: '1.5rem',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-decorative)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.05em',
                  transition: 'all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  opacity: isActive ? 0.6 : 0,
                  transform: isActive
                    ? 'translateY(0px) scale(1)'
                    : 'translateY(15px) scale(0.95)',
                  pointerEvents: 'none',
                  filter: isActive ? 'blur(0px)' : 'blur(4px)',
                }}
              >
                {eq}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
