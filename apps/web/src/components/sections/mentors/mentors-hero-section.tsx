'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function MentorsHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="bg-primary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            Industry Experts
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Meet Our <span className="text-primary">Mentors</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            Learn directly from seasoned professionals who have built scalable software, led technical teams, and mastered the corporate landscape.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
