import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ProgramHeroSection } from '@/components/sections/program/program-hero-section';
import { ProgramOverviewSection } from '@/components/sections/program/program-overview-section';
import { ProgramCurriculumSection } from '@/components/sections/program/program-curriculum-section';
import { ProgramBenefitsSection } from '@/components/sections/program/program-benefits-section';
import { ProgramFaqSection } from '@/components/sections/program/program-faq-section';

export const metadata: Metadata = {
  title: '10-Day Career Foundation Program | Shreeji I-Tech Launchpad',
  description:
    'Join our free 10-Day Career Foundation Program designed to make IT students industry-ready with essential non-domain specific skills.',
};

export default function ProgramPage() {
  return (
    <LandingLayout>
      <ProgramHeroSection />
      <ProgramOverviewSection />
      <ProgramCurriculumSection />
      <ProgramBenefitsSection />
      <ProgramFaqSection />
    </LandingLayout>
  );
}
