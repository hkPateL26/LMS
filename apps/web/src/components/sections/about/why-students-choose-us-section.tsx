import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FeatureCard } from '@/components/cards/feature-card';
import { Briefcase, LineChart, Code2, TrendingUp } from 'lucide-react';

export function WhyStudentsChooseUsSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Students Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide the missing link between what you learn in the classroom and what you need in
            the workplace.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Industry Exposure"
            description="Gain insights directly from the tech industry to understand current standards and expectations."
            icon={<Briefcase className="h-6 w-6" />}
          />
          <FeatureCard
            title="Career Guidance"
            description="Get actionable advice on crafting resumes, optimizing profiles, and navigating interviews."
            icon={<LineChart className="h-6 w-6" />}
          />
          <FeatureCard
            title="Practical Understanding"
            description="Apply concepts to real scenarios rather than just memorizing textbook definitions."
            icon={<Code2 className="h-6 w-6" />}
          />
          <FeatureCard
            title="Professional Growth"
            description="Develop the communication and teamwork skills necessary for long-term career success."
            icon={<TrendingUp className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
