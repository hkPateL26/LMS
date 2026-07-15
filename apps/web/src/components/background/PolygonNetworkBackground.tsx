"use client";

import * as React from 'react';

/**
 * PolygonNetworkBackground
 *
 * A lightweight canvas animation that draws a slowly moving polygon mesh.
 * Vertices (points) drift slowly, lines connect nearby vertices, and triangles
 * are filled with a very subtle gradient to give a mesh‑like appearance.
 *
 * The animation adapts to light and dark themes:
 *   • Light: white background with blue‑indigo‑purple lines (5‑10% opacity).
 *   • Dark: #020617 background with blue‑indigo‑purple lines (15‑20% opacity).
 *
 * It respects "prefers-reduced-motion" – the animation is disabled and only a static
 * mesh is rendered.
 */
export function PolygonNetworkBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = React.useState(false);

  // Helper to generate a pool of moving points.
  const createPoints = (width: number, height: number) => {
    const count = Math.round((width * height) / 12000); // density ~0.083 per 1000px^2 (similar to original)
    const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // slower movement for premium feel
        vy: (Math.random() - 0.5) * 0.3,
      });
    }
    return points;
  };

  React.useEffect(() => {
    // Initial theme check
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to viewport.
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Detect user preference for reduced motion.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Theme detection (Tailwind dark class on <html>).
    const bgColor = isDark ? '#020617' : '#ffffff';
    // Opacity ranges per spec
    const lineOpacity = isDark ? 0.18 : 0.07; // 15–20% dark, 4–8% light
    const triangleOpacity = isDark ? 0.04 : 0.02;
    const lineColor = `rgba(100, 149, 237, ${lineOpacity})`; // blue/indigo base
    const triangleColor = `rgba(138, 43, 226, ${triangleOpacity})`; // purple
    // Use 1px line width as required
    const lineWidth = 1;

    const maxDist = 150; // distance for line/triangle connections
    let points = createPoints(width, height);

    const render = () => {
      // Clear with background color.
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Update positions.
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Draw connections.
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            // Line
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();

            // Triangle (fill) – create a third point that is also within range.
            // Find a third point c where a‑c and b‑c are within maxDist.
            for (let k = j + 1; k < points.length; k++) {
              const c = points[k];
              const dx2 = a.x - c.x;
              const dy2 = a.y - c.y;
              const dx3 = b.x - c.x;
              const dy3 = b.y - c.y;
              if (
                Math.sqrt(dx2 * dx2 + dy2 * dy2) < maxDist &&
                Math.sqrt(dx3 * dx3 + dy3 * dy3) < maxDist
              ) {
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.lineTo(c.x, c.y);
                ctx.closePath();
                ctx.fillStyle = triangleColor;
                ctx.fill();
                // break after first triangle to keep work light
                break;
              }
            }
          }
        }
      }
    };

    // Initial draw.
    render();

    if (reducedMotion) {
      return; // No animation loop.
    }

    let animationId: number;
    const animate = () => {
      render();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      points = createPoints(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Watch for theme changes to update colors.
    const observer = new MutationObserver((mutations) => {
      // Update dark mode flag when class attribute changes
      const nowDark = document.documentElement.classList.contains('dark');
      if (nowDark !== isDark) {
        setIsDark(nowDark);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isDark]);

  return (
    <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ transition: 'background-color 300ms ease' }}
        aria-hidden="true"
      />
  );
}
