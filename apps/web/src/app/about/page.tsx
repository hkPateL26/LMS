import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { AboutHeroSection } from '@/components/sections/about/about-hero-section';
import { CompanyIntroductionSection } from '@/components/sections/about/company-introduction-section';
import { MissionSection } from '@/components/sections/about/mission-section';
import { VisionSection } from '@/components/sections/about/vision-section';
import { LearningPhilosophySection } from '@/components/sections/about/learning-philosophy-section';
import { StudentImpactSection } from '@/components/sections/about/student-impact-section';
import { WhyStudentsChooseUsSection } from '@/components/sections/about/why-students-choose-us-section';
import { AboutCallToActionSection } from '@/components/sections/about/about-call-to-action-section';

export const metadata: Metadata = {
  title: 'About Us | Shreeji I-Tech Launchpad',
  description:
    'Learn about Shreeji I-Tech and our mission to bridge the gap between IT students and the corporate industry through practical training.',
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <AboutHeroSection />
      <CompanyIntroductionSection />
      <MissionSection />
      <VisionSection />
      <LearningPhilosophySection />
      <StudentImpactSection />
      <WhyStudentsChooseUsSection />
      <AboutCallToActionSection />
    </LandingLayout>
  );
}
