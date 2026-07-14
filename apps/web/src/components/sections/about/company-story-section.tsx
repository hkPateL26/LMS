'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export function CompanyStorySection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>
                Shreeji I-Tech began with a simple observation: a massive talent gap existed between
                what colleges were teaching and what IT companies were expecting.
              </p>
              <p>
                Millions of IT students were graduating every year, yet many struggled to clear basic
                technical interviews or adapt to real-world software development lifecycles. We decided
                to change that.
              </p>
              <p>
                Through hands-on workshops, modern tech stacks, and career foundation programs, we started
                visiting college campuses across the state. Our goal was never to replace formal education,
                but to act as the missing bridge that transforms a student into an industry-ready professional.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted relative aspect-square overflow-hidden rounded-2xl lg:aspect-auto lg:h-[500px]"
          >
            <div className="from-background/10 to-background/40 absolute inset-0 bg-gradient-to-tr" />
            <div className="flex h-full items-center justify-center text-5xl">
              🏢
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
