'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

const topics = [
  { day: 'Day 1', title: 'The IT Industry Overview', desc: 'Understanding product vs. service-based companies and corporate hierarchies.' },
  { day: 'Day 2', title: 'Software Development Lifecycle', desc: 'Agile methodologies, sprint planning, and how real software is built.' },
  { day: 'Day 3', title: 'Git & GitHub Basics', desc: 'Version control fundamentals: branching, committing, and collaborating.' },
  { day: 'Day 4', title: 'Resume Building', desc: 'Crafting an ATS-friendly resume that stands out to recruiters.' },
  { day: 'Day 5', title: 'LinkedIn Optimization', desc: 'Building a professional brand and networking with industry professionals.' },
  { day: 'Day 6', title: 'Portfolio Guidance', desc: 'Showcasing your projects online to demonstrate practical experience.' },
  { day: 'Day 7', title: 'AI Tools & Productivity', desc: 'Using modern AI assistants to accelerate learning and development.' },
  { day: 'Day 8', title: 'Prompt Engineering', desc: 'Writing effective prompts to solve problems and debug code faster.' },
  { day: 'Day 9', title: 'Communication Skills', desc: 'Email etiquette, daily standups, and effective corporate communication.' },
  { day: 'Day 10', title: 'Career Planning', desc: 'Setting short-term and long-term goals for a successful tech career.' },
];

export function ProgramCurriculumSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">10-Day Curriculum Map</h2>
          <p className="text-muted-foreground text-lg">
            A carefully crafted journey that focuses entirely on industry readiness, teamwork, and modern
            developer tools without confining you to a specific programming language.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border-border hover:border-primary/50 flex flex-col gap-4 rounded-2xl border p-6 transition-colors sm:flex-row sm:items-center sm:p-8"
            >
              <div className="bg-primary/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold">
                {topic.day}
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
