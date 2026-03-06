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
      const count = Math.random() < 0.3 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height,
          vx: (Math.random() - 0.5) * 2.5,
          vy: -(Math.random() * 4 + 2),
          life: 0,
          maxLife: Math.random() * 80 + 60,
          size: Math.random() * 3 + 1,
          hue: Math.random() * 40 + 20,
        });
      }
    };

    let frame = 0;
    let animId: number;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 4 === 0) spawn();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.99;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 90%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 60%, ${alpha * 0.8})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 40%, 0)`);
        ctx.fillStyle = gradient;
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
      className="fixed bottom-0 left-0 w-full pointer-events-none"
      style={{ zIndex: 50, height: '100vh' }}
    />
  );
};

export default Sparks;
