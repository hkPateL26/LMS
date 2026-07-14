'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function AboutHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="bg-primary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Story, Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            We are dedicated to shaping the future of IT students by providing the foundational skills
            needed to bridge the gap between campus education and corporate reality.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
