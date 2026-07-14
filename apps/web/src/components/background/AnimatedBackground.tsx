// src/components/background/AnimatedBackground.tsx
"use client";

import * as React from "react";
import { AuroraLayer } from "./AuroraLayer";
import { GradientOrbs } from "./GradientOrbs";
import { MouseSpotlight } from "./MouseSpotlight";
import { NoiseTexture } from "./NoiseTexture";
import { GridOverlay } from "./GridOverlay";

/**
 * Global animated background used across the entire app.
 * Layers (bottom to top):
 * 1. Theme background colour (handled by the page's bg class)
 * 2. Noise texture (static, low opacity)
 * 3. Grid overlay (static)
 * 4. Aurora animation (12‑18s loop)
 * 5. Gradient orbs (18‑25s loop)
 * 6. Mouse‑follow spotlight (spring animation)
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Layer 2 – Noise */}
      <NoiseTexture />
      {/* Layer 3 – Grid */}
      <GridOverlay />
      {/* Layer 4 – Aurora */}
      <AuroraLayer />
      {/* Layer 5 – Gradient Orbs */}
      <GradientOrbs />
      {/* Layer 6 – Mouse Spotlight */}
      <MouseSpotlight />
    </div>
  );
}
