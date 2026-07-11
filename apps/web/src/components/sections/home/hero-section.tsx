'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="bg-background relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
      {/* Abstract Background Gradient */}
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            🚀 The ultimate launchpad for your IT career
          </div>

          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Bridge the Gap Between <br className="hidden sm:block" />
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              Campus & Corporate
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            Shreeji I-Tech Launchpad equips BCA, MCA, and B.Tech students with the essential,
            industry-ready skills required to kickstart a successful career in tech.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="shadow-primary/25 h-12 w-full px-8 text-base shadow-lg sm:w-auto"
            >
              Join 10-Day Career Foundation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Workshop Journey
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
