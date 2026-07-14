'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { HelpCircle } from 'lucide-react';

export function FaqHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden border-b py-24 md:py-32 lg:py-40">
      <div className="bg-secondary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <HelpCircle className="h-8 w-8" />
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            Find answers to common questions about our programs, workshops, and how Shreeji I-Tech can help launch your IT career.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
