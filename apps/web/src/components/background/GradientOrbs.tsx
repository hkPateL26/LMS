// src/components/background/GradientOrbs.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Two or three softly animated gradient orbs.
 * Each orb moves slowly in a loop (18‑25s).
 */
export function GradientOrbs() {
  const orbs = [
    {
      size: 300,
      colors: ["rgba(99,102,241,0.3)", "rgba(139,92,246,0.3)"], // indigo‑purple
      start: { x: -150, y: -100 },
      end: { x: 200, y: 150 },
    },
    {
      size: 250,
      colors: ["rgba(79,70,229,0.25)", "rgba(129,140,248,0.25)"], // blue‑indigo
      start: { x: 200, y: -150 },
      end: { x: -200, y: 120 },
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle at 50% 50%, ${orb.colors[0]}, ${orb.colors[1]})`,
            filter: "blur(80px)",
          }}
          animate={{
            x: [orb.start.x, orb.end.x, orb.start.x],
            y: [orb.start.y, orb.end.y, orb.start.y],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
