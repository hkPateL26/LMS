'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Target, Users, BookOpen } from 'lucide-react';

export function ProgramOverviewSection() {
  return (
    <Section className="bg-surface/50">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What is this Program?</h2>
          <p className="text-muted-foreground text-lg">
            The 10-Day Career Foundation Program is designed exclusively for IT students who want to
            bridge the gap between their college education and the expectations of the corporate world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-border rounded-2xl border p-8 text-center"
          >
            <div className="bg-primary/10 text-primary mx-auto mb-6 inline-flex rounded-full p-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold">The Objective</h3>
            <p className="text-muted-foreground">
              To build a strong foundation of industry readiness, ensuring you understand corporate culture,
              communication, and career planning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border-border rounded-2xl border p-8 text-center"
          >
            <div className="bg-secondary/10 text-secondary mx-auto mb-6 inline-flex rounded-full p-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Who Should Join?</h3>
            <p className="text-muted-foreground">
              BCA, MCA, BE, B.Tech, and Diploma IT students looking for a structured approach to transition
              into tech careers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-border rounded-2xl border p-8 text-center"
          >
            <div className="bg-emerald-500/10 text-emerald-500 mx-auto mb-6 inline-flex rounded-full p-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold">No Tech Jargon</h3>
            <p className="text-muted-foreground">
              We focus purely on universal professional skills like Git, Resumes, and AI Tools, without forcing
              a specific coding language on you.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
