// src/components/background/AuroraLayer.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";

/**
 * Subtle aurora animation using brand colors.
 * Animation duration: 12‑18 seconds looping.
 */
export function AuroraLayer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 30% 30%, rgba(99,102,241,0.2), transparent), radial-gradient(ellipse at 70% 70%, rgba(139,92,246,0.2), transparent)",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
    />
  );
}
