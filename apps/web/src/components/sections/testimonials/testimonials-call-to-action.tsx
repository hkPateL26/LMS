'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function TestimonialsCallToAction() {
  return (
    <Section className="bg-surface/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 border-primary/20 relative overflow-hidden rounded-3xl border p-8 text-center md:p-16"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Be Our Next Success Story
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of students who have already transformed their approach to tech careers. The 10-Day Career Foundation Program is waiting for you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 w-full px-8 text-base shadow-lg shadow-primary/25 sm:w-auto">
                <Link href="/register">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
                <Link href="/program">
                  View Program Details
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
