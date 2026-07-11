'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function ContactHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden border-b pb-12 pt-24 md:pb-16 md:pt-32">
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            Have questions about our programs, workshops, or partnerships? We'd love to hear from
            you. Our team is always here to help.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
