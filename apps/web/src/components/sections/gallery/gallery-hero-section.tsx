'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { ArrowRight } from 'lucide-react';

export function GalleryHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden border-b pb-16 pt-24 md:pb-24 md:pt-32">
      {/* Abstract Background Gradient */}
      <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
            Campus Moments
          </div>

          <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Workshop Gallery
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            A glimpse of Shreeji I-Tech's offline college workshops where students discover
            technology, career opportunities, and the realities of the IT industry.
          </p>

          <div className="flex justify-center pt-4">
            <Button size="lg" className="shadow-primary/25 h-12 px-8 text-base shadow-lg">
              Join 10-Day Career Foundation Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
