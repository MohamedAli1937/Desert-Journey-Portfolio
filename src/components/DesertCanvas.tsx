import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function DesertCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width * 1.2,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.3 - 0.15,
      opacity: Math.random() * 0.4 + 0.1,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    });

    const PARTICLE_COUNT = 90;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, createParticle);

    const getParticleColor = (progress: number): string => {
      if (progress < 0.15) return '210, 200, 180';
      if (progress < 0.35) return '220, 190, 150';
      if (progress < 0.55) return '212, 165, 116';
      if (progress < 0.75) return '200, 140, 80';
      return '180, 160, 140';
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const progress = scrollRef.current;
      const windMultiplier = 0.6 + Math.sin(progress * Math.PI * 2) * 0.4;
      const color = getParticleColor(progress);

      particlesRef.current.forEach((p) => {
        p.life++;
        p.x -= p.speedX * windMultiplier;
        p.y += p.speedY + Math.sin(p.life * 0.02) * 0.2;

        if (p.x < -20 || p.life > p.maxLife) {
          p.x = canvas.width + 10;
          p.y = Math.random() * canvas.height;
          p.life = 0;
          p.maxLife = Math.random() * 300 + 200;
        }

        const fadeIn = Math.min(p.life / 30, 1);
        const fadeOut = Math.max(1 - (p.life - p.maxLife + 50) / 50, 0);
        const alpha = p.opacity * fadeIn * (p.life > p.maxLife - 50 ? fadeOut : 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="desert-canvas"
      aria-hidden="true"
    />
  );
}
