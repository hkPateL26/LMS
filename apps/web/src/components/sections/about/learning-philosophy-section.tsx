import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { BookOpen, RefreshCw, Briefcase, Trophy } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Learn Fundamentals',
    description:
      'We focus on the absolute core IT fundamentals that are required for any specialization.',
  },
  {
    icon: RefreshCw,
    title: 'Understand Industry Workflow',
    description:
      'Learn how teams actually build software using agile methodologies, Git, and collaboration tools.',
  },
  {
    icon: Briefcase,
    title: 'Build Professional Skills',
    description:
      'Develop soft skills, optimize your LinkedIn profile, and learn how to present yourself to recruiters.',
  },
  {
    icon: Trophy,
    title: 'Improve Career Readiness',
    description:
      'Combine technical awareness with professional skills to become fully career-ready.',
  },
];

export function LearningPhilosophySection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Learning Philosophy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our approach is pragmatic. We believe that a strong foundation in both technical and
            professional skills is the key to unlocking career opportunities.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-surface mx-auto max-w-4xl rounded-3xl border p-8 text-center md:p-12">
          <h3 className="mb-4 text-2xl font-bold">The 10-Day Career Foundation Program</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our flagship program encapsulates this philosophy. Over 10 intensive days, students dive
            deep into IT fundamentals, professional skills, AI awareness, GitHub, LinkedIn
            optimization, portfolio guidance, and comprehensive career preparation.
          </p>
        </div>
      </Container>
    </Section>
  );
}
