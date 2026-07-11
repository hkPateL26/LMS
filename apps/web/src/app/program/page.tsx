import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ProgramHeroSection } from '@/components/sections/program/program-hero-section';
import { ProgramOverviewSection } from '@/components/sections/program/program-overview-section';
import { WhyThisProgramSection } from '@/components/sections/program/why-this-program-section';
import { ProgramCurriculumSection } from '@/components/sections/program/program-curriculum-section';
import { ProgramJourneySection } from '@/components/sections/program/program-journey-section';
import { ProgramCertificateSection } from '@/components/sections/program/program-certificate-section';
import { ProgramInternshipSection } from '@/components/sections/program/program-internship-section';
import { ProgramFaqSection } from '@/components/sections/program/program-faq-section';
import { ProgramCallToActionSection } from '@/components/sections/program/program-call-to-action-section';

export const metadata: Metadata = {
  title: '10-Day Career Foundation Program | Shreeji I-Tech Launchpad',
  description:
    'Join the free 10-Day Career Foundation Program to build professional skills, understand industry expectations, and prepare for your IT career.',
};

export default function ProgramPage() {
  return (
    <LandingLayout>
      <ProgramHeroSection />
      <ProgramOverviewSection />
      <WhyThisProgramSection />
      <ProgramCurriculumSection />
      <ProgramJourneySection />
      <ProgramCertificateSection />
      <ProgramInternshipSection />
      <ProgramFaqSection />
      <ProgramCallToActionSection />
    </LandingLayout>
  );
}
