import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Compass, Lightbulb, Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    icon: Compass,
    title: 'Career Awareness',
    desc: 'Discovering diverse paths in the tech ecosystem.',
  },
  {
    icon: Lightbulb,
    title: 'Technology Exposure',
    desc: 'Experiencing modern tools and workflows firsthand.',
  },
  {
    icon: Briefcase,
    title: 'Industry Understanding',
    desc: 'Learning what companies actually expect from freshers.',
  },
  {
    icon: TrendingUp,
    title: 'Professional Guidance',
    desc: 'Getting actionable advice to stand out to recruiters.',
  },
];

export function StudentExperienceSection() {
  return (
    <Section className="bg-surface border-y">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Through our workshops, students experience:
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="bg-background flex flex-col items-center rounded-2xl border p-6 text-center shadow-sm"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
