'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Award, Briefcase, FileBadge2 } from 'lucide-react';

export function ProgramBenefitsSection() {
  return (
    <Section className="bg-surface/50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">What You Gain</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Beyond just technical skills, this program is crafted to give you the tangible
              assets and confidence required to navigate the job market successfully.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Interview Readiness</h4>
                  <p className="text-muted-foreground">Navigate behavioral and HR rounds with absolute confidence.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/10 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <FileBadge2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Optimized Professional Presence</h4>
                  <p className="text-muted-foreground">A polished resume and an all-star LinkedIn profile.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-border relative overflow-hidden rounded-3xl border p-8 shadow-lg sm:p-12"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="bg-emerald-500/10 text-emerald-500 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <Award className="h-10 w-10" />
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold">Verified Digital Certificate</h3>
              <p className="text-muted-foreground text-base">
                Upon successful completion of the 10-day program, you will receive a verified
                digital certificate from Shreeji I-Tech Launchpad. Use it to enhance your
                resume and showcase your commitment to continuous learning on LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
