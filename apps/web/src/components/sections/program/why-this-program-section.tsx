import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FeatureCard } from '@/components/cards/feature-card';
import { Briefcase, Settings2, Compass, Globe, Sparkles, Users } from 'lucide-react';

export function WhyThisProgramSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose This Program?
          </h2>
          <p className="text-muted-foreground text-lg">
            We focus on the essential professional foundations that are often missed in traditional
            academic curriculums.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Understand IT Industry"
            description="Learn how modern software companies operate, their workflows, and what they expect from fresh talent."
            icon={<Briefcase className="h-6 w-6" />}
          />
          <FeatureCard
            title="Learn Professional Tools"
            description="Get hands-on experience with industry-standard tools like Git, GitHub, and agile project management software."
            icon={<Settings2 className="h-6 w-6" />}
          />
          <FeatureCard
            title="Build Career Awareness"
            description="Discover different career paths in tech to align your goals with actual market opportunities."
            icon={<Compass className="h-6 w-6" />}
          />
          <FeatureCard
            title="Improve Online Presence"
            description="Learn how to build a professional LinkedIn profile and portfolio that attracts recruiters."
            icon={<Globe className="h-6 w-6" />}
          />
          <FeatureCard
            title="Learn AI Productivity"
            description="Understand how to leverage AI tools and prompt engineering to become a highly productive developer."
            icon={<Sparkles className="h-6 w-6" />}
          />
          <FeatureCard
            title="Connect With Community"
            description="Join an exclusive Discord community of like-minded peers and industry mentors."
            icon={<Users className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
