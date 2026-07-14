'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Users, GraduationCap, Building2, Briefcase } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Students Trained',
    value: '5,000+',
    icon: Users,
    description: 'Empowered across various IT domains',
  },
  {
    id: 2,
    name: 'Workshops Conducted',
    value: '100+',
    icon: GraduationCap,
    description: 'In top colleges across Gujarat',
  },
  {
    id: 3,
    name: 'College Partners',
    value: '50+',
    icon: Building2,
    description: 'Trusted by leading institutions',
  },
  {
    id: 4,
    name: 'Career Placements',
    value: '1,000+',
    icon: Briefcase,
    description: 'Successfully placed in IT companies',
  },
];

export function StatisticsSection() {
  return (
    <Section className="bg-surface/50">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Impact in Numbers</h2>
          <p className="text-muted-foreground text-lg">
            We're on a mission to transform tech education and create industry-ready professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-border hover:border-primary/50 relative overflow-hidden rounded-2xl border p-8 transition-colors"
            >
              <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-lg p-3">
                <stat.icon className="h-6 w-6" />
              </div>
              
              <div className="mb-2 flex items-baseline gap-2">
                <h3 className="text-4xl font-extrabold tracking-tight text-foreground">{stat.value}</h3>
              </div>
              
              <p className="mb-1 font-semibold text-foreground">{stat.name}</p>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
