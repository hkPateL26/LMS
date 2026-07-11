'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { ArrowRight, BookOpen } from 'lucide-react';

export function AboutHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
      {/* Abstract Background Gradient */}
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            About Shreeji I-Tech
          </div>

          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Empowering the Next Generation of IT Professionals
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            We are dedicated to building a robust foundation for students, ensuring they step into
            the corporate world with confidence, practical knowledge, and clear career direction.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="shadow-primary/25 h-12 w-full px-8 text-base shadow-lg sm:w-auto"
            >
              Join Career Foundation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Workshops
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
