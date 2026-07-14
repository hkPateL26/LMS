// src/components/background/GridOverlay.tsx
"use client";

import * as React from "react";

/**
 * Low‑opacity grid overlay. The grid is static and covers the full viewport.
 * Uses the brand colors (indigo/purple) with 10% opacity.
 */
export function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none bg-[size:40px_40px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(139,92,246,0.1) 1px, transparent 1px)`,
      }}
    />
  );
}
