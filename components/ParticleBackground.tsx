import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Node configuration
    const particleCount = Math.min(Math.floor(width * height / 12000), 80);
    const connectionDist = 180;
    const pulseSpeed = 0.05;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    // "Packets" of data traveling along lines
    interface Packet {
      p1: number; // index of particle 1
      p2: number; // index of particle 2
      progress: number; // 0 to 1
      speed: number;
    }

    const particles: Particle[] = [];
    let packets: Packet[] = [];

    // Initialize
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 1,
        });
      }
    };

    init();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Node
        ctx.fillStyle = '#38bdf8'; // Sky 400
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Connections & Packets
      ctx.strokeStyle = '#1e293b'; // Slate 800
      ctx.lineWidth = 1;

      // Reset active connections for packet spawning logic
      const activeConnections: {p1: number, p2: number, dist: number}[] = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Calculate opacity based on distance
            const opacity = 1 - dist / connectionDist;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.2})`; // Electric Blue low opacity
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            activeConnections.push({ p1: i, p2: j, dist });
          }
        }
      }

      // Spawn Packets randomly
      if (Math.random() < 0.05 && packets.length < 10 && activeConnections.length > 0) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
        packets.push({
          p1: conn.p1,
          p2: conn.p2,
          progress: 0,
          speed: pulseSpeed + Math.random() * 0.02
        });
      }

      // Update and Draw Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i];
        pkt.progress += pkt.speed;
        
        if (pkt.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const p1 = particles[pkt.p1];
        const p2 = particles[pkt.p2];

        // Check if connection still exists (nodes might have moved too far)
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        if (Math.sqrt(dx * dx + dy * dy) > connectionDist) {
             packets.splice(i, 1);
             continue;
        }

        const x = p1.x + (p2.x - p1.x) * pkt.progress;
        const y = p1.y + (p2.y - p1.y) * pkt.progress;

        // Draw Packet
        ctx.fillStyle = '#f472b6'; // Pink 400
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#f472b6';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);
    
    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ pointerEvents: 'none' }} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
    />
  );
};

export default ParticleBackground;