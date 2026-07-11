import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/cards/feature-card';
import { Clock, FileBadge, Laptop, Rocket, ArrowRight } from 'lucide-react';

import { PROGRAM_DETAILS, PROGRAM_BENEFITS } from '@/data/program';

export function CareerFoundationPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <div className="border-secondary/20 bg-secondary/5 text-secondary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
              Free 10-Day Training
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {PROGRAM_DETAILS.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Designed specifically for IT students, this intensive 10-day program builds the core
              professional skills you need to stand out. Learn what colleges don&apos;t teach.
            </p>

            <ul className="mb-6 space-y-3">
              {PROGRAM_BENEFITS.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-primary/20 mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                  </div>
                  <span className="text-foreground">{item.title}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full sm:w-auto">
              View Program Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              title="10 Days Duration"
              description="Intensive, focused, and designed to fit into your academic schedule."
              icon={<Clock className="h-6 w-6" />}
              className="bg-surface border-none shadow-none"
            />
            <FeatureCard
              title="Digital Certificate"
              description="Earn a verifiable certificate upon successful completion."
              icon={<FileBadge className="h-6 w-6" />}
              className="bg-surface border-none shadow-none"
            />
            <FeatureCard
              title="Practical Learning"
              description="Hands-on tasks and real-world tools usage."
              icon={<Laptop className="h-6 w-6" />}
              className="bg-surface border-none shadow-none"
            />
            <FeatureCard
              title="Career Boost"
              description="Unlock internship opportunities for top performers."
              icon={<Rocket className="h-6 w-6" />}
              className="bg-surface border-none shadow-none"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
