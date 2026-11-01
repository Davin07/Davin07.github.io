import React, { useEffect, useRef } from 'react';

const RAMP = '.:-=+*';

const mulberry32 = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const Field: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;
      const root = getComputedStyle(document.documentElement);
      const token = (name: string) => root.getPropertyValue(name).trim();
      const cellW = parseFloat(token('--cell-w')) || 8;
      const cellH = parseFloat(token('--cell-h')) || 16;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = token('--color-paper-2');
      ctx.fillRect(0, 0, width, height);

      ctx.font = `400 ${Math.round(cellH - 3)}px ${token('--font-outlier')}`;
      ctx.textBaseline = 'top';

      const ink = [1, 2, 3, 4].map((n) => token(`--color-glyph-${n}`));
      const cols = Math.ceil(width / cellW);
      const rows = Math.ceil(height / cellH);
      const split = Math.round(cols * 0.45);
      const rand = mulberry32(20261101);

      for (let x = 0; x < cols; x += 1) {
        const dense = x < split;
        const chance = dense ? 0.82 : 0.05;
        for (let y = 0; y < rows; y += 1) {
          if (rand() > chance) continue;
          const tier = rand();
          const index = dense ? (tier > 0.86 ? 3 : tier > 0.35 ? 2 : 1) : tier > 0.85 ? 2 : 0;
          ctx.fillStyle = ink[index];
          ctx.fillText(RAMP[Math.floor(rand() * RAMP.length)], x * cellW, y * cellH);
        }
      }

      ctx.fillStyle = token('--color-accent');
      ctx.fillRect(split * cellW - 1, 0, 2, height);
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    schedule();
    const observer = new ResizeObserver(schedule);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={ref} className="field__canvas" aria-hidden="true" />;
};

export default Field;
