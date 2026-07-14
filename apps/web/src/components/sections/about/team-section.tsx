'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Sarah Engineer',
    role: 'Principal Software Architect & Founder',
    bio: 'Former Tech Lead with 10+ years of experience building scalable distributed systems.',
    image: '👩‍💻',
  },
  {
    name: 'David Designer',
    role: 'Lead UI/UX Designer',
    bio: 'Passionate about creating accessible, intuitive, and premium SaaS experiences.',
    image: '👨‍🎨',
  },
  {
    name: 'Emily Educator',
    role: 'Director of Learning',
    bio: 'Dedicated to curriculum development and ensuring students are industry-ready.',
    image: '👩‍🏫',
  },
];

export function TeamSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            The passionate individuals working tirelessly to bridge the gap between education and the IT industry.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-border hover:border-primary/50 group flex flex-col items-center rounded-2xl border p-8 text-center transition-colors"
            >
              <div className="bg-muted relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full text-5xl">
                {member.image}
              </div>
              
              <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
              <p className="text-primary mb-4 text-sm font-medium">{member.role}</p>
              <p className="text-muted-foreground mb-6 text-sm">{member.bio}</p>
              
              <div className="mt-auto flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
