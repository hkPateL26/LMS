// src/components/background/MouseSpotlight.tsx
"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Small soft spotlight that follows the mouse cursor.
 * Uses a spring animation for smooth movement.
 * Initialized after component mounts to avoid SSR window reference.
 */
export function MouseSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 30 });
  const springY = useSpring(y, { stiffness: 120, damping: 30 });

  React.useEffect(() => {
    // Set initial position to center of viewport
    const setInitial = () => {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
    };
    setInitial();
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 rounded-full"
      style={{
        width: 200,
        height: 200,
        background: "radial-gradient(circle at center, rgba(99,102,241,0.15), transparent)",
        left: springX,
        top: springY,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
