// src/components/background/NoiseTexture.tsx
"use client";

import * as React from "react";

/**
 * Very subtle static noise texture (2‑3% opacity).
 * Implemented as a semi‑transparent PNG data‑uri.
 */
export function NoiseTexture() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="w-full h-full opacity-3"
        style={{
          backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/5vZ4NQAAAABJRU5ErkJggg==')`,
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
}
