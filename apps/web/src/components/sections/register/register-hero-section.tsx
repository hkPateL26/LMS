'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function RegisterHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden border-b pb-12 pt-24 md:pb-16 md:pt-32">
      {/* Abstract Background Gradient */}
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-4xl space-y-8"
        >
          <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            10-Day Career Foundation Program
          </div>

          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Start Your IT Journey With Shreeji I-Tech
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            Register for our program and learn industry basics, professional skills, AI awareness,
            GitHub, LinkedIn, resume building, and career preparation.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
