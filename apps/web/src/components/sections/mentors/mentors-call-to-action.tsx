'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function MentorsCallToAction() {
  return (
    <Section>
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
              Ready to Learn from the Best?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join the 10-Day Career Foundation Program today and get mentored by industry veterans who know exactly what it takes to succeed in the corporate world.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
              <Link href="/register">
                Apply for the Free Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
