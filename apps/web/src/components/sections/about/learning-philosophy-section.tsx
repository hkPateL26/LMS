'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { CheckCircle2 } from 'lucide-react';

const principles = [
  'Project-based hands-on learning rather than theoretical lectures.',
  'Focusing on the complete Software Development Life Cycle (SDLC).',
  'Using the latest industry-standard tools (Git, Next.js, Node.js).',
  'Building professional portfolios and GitHub profiles.',
  'Developing communication and soft skills alongside technical skills.',
  'Simulating real corporate environments and code reviews.',
];

export function LearningPhilosophySection() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Learning Philosophy</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We believe that reading code is not the same as writing code. Our philosophy revolves around
              experiential learning, where students build real-world products from day one.
            </p>
            
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary mt-1 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-base">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted order-1 relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2"
          >
            <div className="from-secondary/10 to-secondary/30 absolute inset-0 bg-gradient-to-br" />
            <div className="flex h-full items-center justify-center text-5xl">
              💻
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
