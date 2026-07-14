'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Star } from 'lucide-react';

export function TestimonialsHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden border-b py-24 md:py-32 lg:py-40">
      <div className="bg-primary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="flex justify-center gap-1 text-yellow-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Voices of <span className="text-primary">Impact</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            Don't just take our word for it. Read what students, faculties, and college placement coordinators have to say about the Shreeji I-Tech Launchpad experience.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
