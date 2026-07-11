import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FeatureCard } from '@/components/cards/feature-card';
import { Briefcase, Code2, LineChart, Cpu } from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Shreeji I-Tech?
          </h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just teach code; we build careers. Here is what sets our Launchpad apart
            from traditional learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Industry Exposure"
            description="Learn directly from professionals who understand current market demands and corporate expectations."
            icon={<Briefcase className="h-6 w-6" />}
          />
          <FeatureCard
            title="Practical Learning"
            description="Move beyond theory. Our programs focus on hands-on applications and real-world problem solving."
            icon={<Code2 className="h-6 w-6" />}
          />
          <FeatureCard
            title="Career Guidance"
            description="Receive personalized advice on resume building, interview preparation, and professional networking."
            icon={<LineChart className="h-6 w-6" />}
          />
          <FeatureCard
            title="Technology Awareness"
            description="Stay ahead of the curve by learning how to leverage modern AI tools and current tech stacks."
            icon={<Cpu className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
