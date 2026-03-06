import { useEffect, useRef } from 'react';

const MAX_PARTICLES = 300;

const Sparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    // Flat typed arrays — no object allocation per frame
    const px   = new Float32Array(MAX_PARTICLES);
    const py   = new Float32Array(MAX_PARTICLES);
    const pvx  = new Float32Array(MAX_PARTICLES);
    const pvy  = new Float32Array(MAX_PARTICLES);
    const life = new Float32Array(MAX_PARTICLES);
    const maxL = new Float32Array(MAX_PARTICLES);
    const size = new Float32Array(MAX_PARTICLES);
    const hue  = new Uint8Array(MAX_PARTICLES);
    const alive = new Uint8Array(MAX_PARTICLES);

    let count = 0;

    const spawn = () => {
      if (count >= MAX_PARTICLES) return;
      const n = Math.random() < 0.4 ? 3 : 2;
      for (let i = 0; i < n && count < MAX_PARTICLES; i++) {
        // find free slot
        let slot = -1;
        for (let j = 0; j < MAX_PARTICLES; j++) {
          if (!alive[j]) { slot = j; break; }
        }
        if (slot < 0) return;

        const ml = Math.random() * 50 + 110;
        px[slot]   = Math.random() * W;
        py[slot]   = H + 5;
        pvx[slot]  = (Math.random() - 0.5) * 1.5;
        pvy[slot]  = -(H / ml) * (Math.random() * 0.3 + 0.95);
        life[slot] = 0;
        maxL[slot] = ml;
        size[slot] = Math.random() * 3 + 1.5;
        hue[slot]  = (Math.random() * 40 + 15) | 0;
        alive[slot] = 1;
        count++;
      }
    };

    let frame = 0;
    let animId: number;

    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      if (frame % 3 === 0) spawn();
      frame++;

      for (let i = 0; i < MAX_PARTICLES; i++) {
        if (!alive[i]) continue;

        px[i]   += pvx[i];
        py[i]   += pvy[i];
        pvx[i]  *= 0.999;
        life[i] += 1;

        const progress = life[i] / maxL[i];

        if (progress >= 1) {
          alive[i] = 0;
          count--;
          continue;
        }

        const alpha = progress < 0.1
          ? progress / 0.1
          : 1 - (progress - 0.1) / 0.9;
        const r = Math.max(size[i] * (1 - progress * 0.7), 0.3);
        const h = hue[i];

        // Simple filled circle — much faster than radial gradient
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${h},100%,75%)`;
        ctx.beginPath();
        ctx.arc(px[i], py[i], r, 0, 6.2832);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default Sparks;
