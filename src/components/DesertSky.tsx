import { useEffect, useRef, useState } from 'react';

function Star({ cx, cy, r, delay }: { cx: number; cy: number; r: number; delay: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="#fff"
      className="star"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

const STAR_COUNT = 120;
const starsData = Array.from({ length: STAR_COUNT }, () => ({
  cx: Math.random() * 100,
  cy: Math.random() * 60,
  r: Math.random() * 0.15 + 0.03,
  delay: Math.random() * 5,
}));

export default function DesertSky() {
  const skyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(window.scrollY / maxScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skyColors = getSkyGradient(scrollProgress);
  const starOpacity = getStarOpacity(scrollProgress);
  const moonOpacity = getMoonOpacity(scrollProgress);
  const sunOpacity = getSunOpacity(scrollProgress);

  return (
    <div className="desert-sky" ref={skyRef} style={{ background: skyColors }}>
      <svg
        className="desert-sky__stars"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: starOpacity }}
      >
        {starsData.map((s, i) => (
          <Star key={i} {...s} />
        ))}
      </svg>

      <div
        className="desert-sky__moon"
        style={{ opacity: moonOpacity }}
      >
        <svg viewBox="0 0 100 100" width="120" height="120">
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffeedd" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#ffeedd" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffeedd" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="moonSurface" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fffef0" />
              <stop offset="100%" stopColor="#e8dcc8" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />
          <circle cx="50" cy="50" r="20" fill="url(#moonSurface)" />
          <circle cx="58" cy="46" r="17" fill="#0a0e1a" opacity="0.9" />
        </svg>
      </div>

      <div
        className="desert-sky__sun"
        style={{ opacity: sunOpacity }}
      >
        <div className="sun-core" />
        <div className="sun-glow" />
      </div>
    </div>
  );
}

function getSkyGradient(p: number): string {
  if (p < 0.1) {
    return 'linear-gradient(180deg, #0a0e1a 0%, #141b2d 40%, #1a2340 100%)';
  } else if (p < 0.25) {
    const t = (p - 0.1) / 0.15;
    return blendGradients(
      ['#0a0e1a', '#141b2d', '#1a2340'],
      ['#1a1a2e', '#3d2b4f', '#e8a87c'],
      t
    );
  } else if (p < 0.4) {
    const t = (p - 0.25) / 0.15;
    return blendGradients(
      ['#1a1a2e', '#3d2b4f', '#e8a87c'],
      ['#4a90d9', '#87CEEB', '#b8d4e8'],
      t
    );
  } else if (p < 0.55) {
    return 'linear-gradient(180deg, #4a90d9 0%, #87CEEB 40%, #b8d4e8 100%)';
  } else if (p < 0.7) {
    const t = (p - 0.55) / 0.15;
    return blendGradients(
      ['#4a90d9', '#87CEEB', '#b8d4e8'],
      ['#1a0a2e', '#c62828', '#ff6b35'],
      t
    );
  } else if (p < 0.85) {
    const t = (p - 0.7) / 0.15;
    return blendGradients(
      ['#1a0a2e', '#c62828', '#ff6b35'],
      ['#0a0e1a', '#141b2d', '#1a2340'],
      t
    );
  } else {
    return 'linear-gradient(180deg, #0a0e1a 0%, #141b2d 40%, #1a2340 100%)';
  }
}

function blendGradients(from: string[], to: string[], t: number): string {
  const blended = from.map((_, i) => blendHex(from[i], to[i], t));
  return `linear-gradient(180deg, ${blended[0]} 0%, ${blended[1]} 40%, ${blended[2]} 100%)`;
}

function blendHex(a: string, b: string, t: number): string {
  const pa = parseHex(a);
  const pb = parseHex(b);
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
  return `rgb(${r},${g},${bl})`;
}

function parseHex(hex: string): number[] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function getStarOpacity(p: number): number {
  if (p < 0.15) return 1;
  if (p < 0.3) return 1 - (p - 0.15) / 0.15;
  if (p < 0.7) return 0;
  if (p < 0.85) return (p - 0.7) / 0.15;
  return 1;
}

function getMoonOpacity(p: number): number {
  if (p < 0.12) return 1;
  if (p < 0.25) return 1 - (p - 0.12) / 0.13;
  if (p < 0.75) return 0;
  if (p < 0.88) return (p - 0.75) / 0.13;
  return 1;
}

function getSunOpacity(p: number): number {
  if (p < 0.25) return 0;
  if (p < 0.4) return (p - 0.25) / 0.15;
  if (p < 0.6) return 1;
  if (p < 0.75) return 1 - (p - 0.6) / 0.15;
  return 0;
}
