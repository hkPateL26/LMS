import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { AboutHeroSection } from '@/components/sections/about/about-hero-section';
import { CompanyStorySection } from '@/components/sections/about/company-story-section';
import { MissionVisionSection } from '@/components/sections/about/mission-vision-section';
import { CoreValuesSection } from '@/components/sections/about/core-values-section';
import { LearningPhilosophySection } from '@/components/sections/about/learning-philosophy-section';
import { TeamSection } from '@/components/sections/about/team-section';

export const metadata: Metadata = {
  title: 'About Us | SKILLFORGE Launchpad',
  description:
    'Learn about SKILLFORGE and our mission to bridge the gap between IT students and the corporate industry through practical training.',
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <AboutHeroSection />
      <CompanyStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <LearningPhilosophySection />
      <TeamSection />
    </LandingLayout>
  );
}
