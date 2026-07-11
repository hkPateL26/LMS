import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FeatureCard } from '@/components/cards/feature-card';
import { Eye, Briefcase, Lightbulb, TrendingUp, Compass } from 'lucide-react';

export function WorkshopExperienceSection() {
  return (
    <Section className="bg-surface border-y">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Student Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Our workshops are designed to break the routine and provide students with a fresh,
            realistic perspective on their future.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Career Awareness"
            description="Open your eyes to the multitude of career paths beyond traditional academic scopes."
            icon={<Eye className="h-6 w-6" />}
          />
          <FeatureCard
            title="IT Industry Understanding"
            description="Learn how real companies operate, how teams collaborate, and what is expected of freshers."
            icon={<Briefcase className="h-6 w-6" />}
          />
          <FeatureCard
            title="Technology Exposure"
            description="Get introduced to modern tools, frameworks, and workflows used by professionals daily."
            icon={<Lightbulb className="h-6 w-6" />}
          />
          <FeatureCard
            title="Learning Opportunities"
            description="Discover resources and methodologies to upskill yourself effectively and efficiently."
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <FeatureCard
            title="Career Guidance"
            description="Receive actionable advice on navigating the transition from student to professional."
            icon={<Compass className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
