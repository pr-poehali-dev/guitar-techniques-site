import { useEffect, useRef } from 'react';

const Sparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      hue: number;
    };

    const particles: Particle[] = [];

    const spawn = () => {
      const count = Math.random() < 0.4 ? 3 : 2;
      for (let i = 0; i < count; i++) {
        const maxLife = Math.random() * 60 + 100;
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 5,
          vx: (Math.random() - 0.5) * 2,
          vy: -(canvas.height / maxLife) * (Math.random() * 0.4 + 0.9),
          life: 0,
          maxLife,
          size: Math.random() * 3 + 1.5,
          hue: Math.random() * 40 + 15,
        });
      }
    };

    let frame = 0;
    let animId: number;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 3 === 0) spawn();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = progress < 0.15
          ? progress / 0.15
          : 1 - (progress - 0.15) / 0.85;
        const size = p.size * (1 - progress * 0.6);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(size, 0.1), 0, Math.PI * 2);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
        g.addColorStop(0, `hsla(${p.hue}, 100%, 95%, ${alpha})`);
        g.addColorStop(0.4, `hsla(${p.hue}, 100%, 65%, ${alpha * 0.8})`);
        g.addColorStop(1, `hsla(${p.hue}, 100%, 40%, 0)`);
        ctx.fillStyle = g;
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 50 }}
    />
  );
};

export default Sparks;
