'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Shield, Zap, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We believe in transparent, honest, and ethical teaching practices.',
    icon: Shield,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Innovation',
    description: 'We adapt to the latest industry standards and tech stacks.',
    icon: Zap,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in every workshop and program.',
    icon: TrendingUp,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Community',
    description: 'We foster collaboration, peer-learning, and professional networking.',
    icon: Users,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
];

export function CoreValuesSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">
            The principles that guide everything we do at Shreeji I-Tech.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-border hover:border-primary/50 flex flex-col items-center rounded-2xl border p-8 text-center transition-colors"
            >
              <div className={`${value.bg} ${value.color} mb-6 inline-flex rounded-full p-4`}>
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
