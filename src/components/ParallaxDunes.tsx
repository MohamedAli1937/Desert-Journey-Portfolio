import { useEffect, useRef, useState } from 'react';

export default function ParallaxDunes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const duneColor = getDuneColors(scrollProgress);

  return (
    <div className="parallax-dunes" ref={containerRef}>
      {/* Far dunes - slowest */}
      <svg
        className="parallax-dunes__layer parallax-dunes__far"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ transform: `translateY(${scrollProgress * -30}px)` }}
      >
        <path
          d="M0,200 L0,120 Q120,60 240,100 Q360,140 480,90 Q600,40 720,80 Q840,120 960,70 Q1080,20 1200,90 Q1320,130 1440,80 L1440,200 Z"
          fill={duneColor.far}
        />
      </svg>

      {/* Mid dunes - medium speed */}
      <svg
        className="parallax-dunes__layer parallax-dunes__mid"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ transform: `translateY(${scrollProgress * -60}px)` }}
      >
        <path
          d="M0,200 L0,140 Q180,80 360,120 Q540,160 720,100 Q900,50 1080,110 Q1260,150 1440,100 L1440,200 Z"
          fill={duneColor.mid}
        />
      </svg>

      {/* Near dunes - fastest */}
      <svg
        className="parallax-dunes__layer parallax-dunes__near"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ transform: `translateY(${scrollProgress * -90}px)` }}
      >
        <path
          d="M0,200 L0,155 Q200,110 400,140 Q600,170 800,130 Q1000,90 1200,140 Q1350,160 1440,130 L1440,200 Z"
          fill={duneColor.near}
        />
      </svg>
    </div>
  );
}

function getDuneColors(p: number): { far: string; mid: string; near: string } {
  if (p < 0.15) {
    return { far: '#1a1530', mid: '#15112a', near: '#100d22' };
  } else if (p < 0.3) {
    const t = (p - 0.15) / 0.15;
    return {
      far: lerpColor('#1a1530', '#c4956a', t),
      mid: lerpColor('#15112a', '#a67b52', t),
      near: lerpColor('#100d22', '#8b6240', t),
    };
  } else if (p < 0.55) {
    return { far: '#c4956a', mid: '#a67b52', near: '#8b6240' };
  } else if (p < 0.7) {
    const t = (p - 0.55) / 0.15;
    return {
      far: lerpColor('#c4956a', '#6b3a1f', t),
      mid: lerpColor('#a67b52', '#4d2a15', t),
      near: lerpColor('#8b6240', '#3a1f0d', t),
    };
  } else if (p < 0.85) {
    const t = (p - 0.7) / 0.15;
    return {
      far: lerpColor('#6b3a1f', '#1a1530', t),
      mid: lerpColor('#4d2a15', '#15112a', t),
      near: lerpColor('#3a1f0d', '#100d22', t),
    };
  }
  return { far: '#1a1530', mid: '#15112a', near: '#100d22' };
}

function lerpColor(a: string, b: string, t: number): string {
  const pa = hexToRgb(a);
  const pb = hexToRgb(b);
  const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
  const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
  const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
  return `rgb(${r},${g},${bl})`;
}

function hexToRgb(hex: string): number[] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
