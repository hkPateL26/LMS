import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Terminal, RefreshCw, LayoutTemplate, Sparkles, UserCircle, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

const topics = [
  {
    icon: Terminal,
    title: 'Introduction to IT Careers',
    description: 'Exploring the vast landscape of tech roles.',
  },
  {
    icon: RefreshCw,
    title: 'Software Development Lifecycle',
    description: 'How applications are planned, built, and shipped.',
  },
  {
    icon: LayoutTemplate,
    title: 'Different IT Domains',
    description: 'Web, Mobile, Cloud, AI, and DevOps explained.',
  },
  {
    icon: Sparkles,
    title: 'AI Awareness',
    description: 'Leveraging modern AI tools for extreme productivity.',
  },
  {
    icon: UserCircle,
    title: 'LinkedIn & Resume Basics',
    description: 'Crafting a profile that stands out to recruiters.',
  },
  {
    icon: Map,
    title: 'Career Roadmap',
    description: 'Step-by-step guidance to landing your first job.',
  },
];

export function WorkshopTopicsSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Topics We Cover</h2>
          <p className="text-muted-foreground text-lg">
            Our workshop curriculums are carefully tailored to address the most critical knowledge
            gaps among freshers.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="bg-background hover:border-primary/50 group flex flex-col rounded-2xl border p-6 transition-colors"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{topic.title}</h3>
                <p className="text-muted-foreground text-sm">{topic.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
