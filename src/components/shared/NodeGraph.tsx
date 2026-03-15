import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  r: number;
  pulse: number;
}

export default function NodeGraph({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const nodes: Node[] = [
      { x: 0.15, y: 0.2, r: 4, pulse: 0 },
      { x: 0.35, y: 0.15, r: 3, pulse: 0.5 },
      { x: 0.55, y: 0.25, r: 5, pulse: 1 },
      { x: 0.75, y: 0.18, r: 3.5, pulse: 1.5 },
      { x: 0.9, y: 0.3, r: 3, pulse: 2 },
      { x: 0.1, y: 0.5, r: 3.5, pulse: 0.3 },
      { x: 0.3, y: 0.45, r: 6, pulse: 0.8 },
      { x: 0.5, y: 0.5, r: 8, pulse: 1.2 },
      { x: 0.7, y: 0.48, r: 5, pulse: 1.8 },
      { x: 0.88, y: 0.55, r: 4, pulse: 2.3 },
      { x: 0.2, y: 0.75, r: 3, pulse: 0.6 },
      { x: 0.4, y: 0.78, r: 4, pulse: 1.1 },
      { x: 0.6, y: 0.72, r: 3.5, pulse: 1.6 },
      { x: 0.8, y: 0.8, r: 3, pulse: 2.1 },
      { x: 0.45, y: 0.35, r: 3, pulse: 0.9 },
      { x: 0.25, y: 0.6, r: 2.5, pulse: 1.4 },
      { x: 0.65, y: 0.62, r: 3, pulse: 1.9 },
      { x: 0.85, y: 0.42, r: 2.5, pulse: 2.5 },
    ];

    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [5, 6], [6, 7], [7, 8], [8, 9],
      [10, 11], [11, 12], [12, 13],
      [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
      [5, 10], [6, 11], [7, 12], [8, 13],
      [6, 14], [7, 14], [14, 2],
      [5, 15], [10, 15], [15, 11],
      [7, 16], [12, 16], [16, 8],
      [9, 17], [4, 17], [17, 8],
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      time += 0.005;
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (const [a, b] of connections) {
        const na = nodes[a];
        const nb = nodes[b];
        const ax = na.x * w;
        const ay = na.y * h;
        const bx = nb.x * w;
        const by = nb.y * h;

        const pulseAlpha =
          0.08 + 0.06 * Math.sin(time * 2 + na.pulse + nb.pulse);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = `rgba(34, 211, 238, ${pulseAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw nodes
      for (const node of nodes) {
        const nx = node.x * w;
        const ny = node.y * h;
        const alpha = 0.3 + 0.3 * Math.sin(time * 1.5 + node.pulse);

        // Glow
        const gradient = ctx.createRadialGradient(
          nx, ny, 0,
          nx, ny, node.r * 4
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.beginPath();
        ctx.arc(nx, ny, node.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(nx, ny, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.5 + alpha * 0.5})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
