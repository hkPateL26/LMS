// src/components/background/ConnectedLinesBackground.tsx
"use client";

import * as React from "react";

/**
 * Responsive canvas background with moving dots connected by lines.
 * Adjusts colors based on light/dark theme (detects `dark` class on <html>). 
 */
export function ConnectedLinesBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // create points pool
  const createPoints = (width: number, height: number) => {
    const count = Math.round((width * height) / 12000); // density ~0.083 per 1000px^2
    const points: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
    return points;
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let points = createPoints(width, height);
    const maxDist = 120;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const lineColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
      const dotColor = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)";

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    let animationFrame: number;
    const animate = () => {
      render();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      points = createPoints(width, height);
    };
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => render());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
