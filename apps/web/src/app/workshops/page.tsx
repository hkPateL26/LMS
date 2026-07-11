import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { WorkshopHeroSection } from '@/components/sections/workshops/workshop-hero-section';
import { WorkshopOverviewSection } from '@/components/sections/workshops/workshop-overview-section';
import { WorkshopTimelineSection } from '@/components/sections/workshops/workshop-timeline-section';
import { WorkshopExperienceSection } from '@/components/sections/workshops/workshop-experience-section';
import { WorkshopTopicsSection } from '@/components/sections/workshops/workshop-topics-section';
import { CollegeTrustSection } from '@/components/sections/workshops/college-trust-section';
import { WorkshopMediaPreviewSection } from '@/components/sections/workshops/workshop-media-preview-section';
import { WorkshopCallToActionSection } from '@/components/sections/workshops/workshop-call-to-action-section';

export const metadata: Metadata = {
  title: 'Our Workshop Journey | Shreeji I-Tech Launchpad',
  description:
    'Explore how Shreeji I-Tech connects with students through offline college workshops and introduces them to the real IT world.',
};

export default function WorkshopsPage() {
  return (
    <LandingLayout>
      <WorkshopHeroSection />
      <WorkshopOverviewSection />
      <WorkshopTimelineSection />
      <WorkshopExperienceSection />
      <WorkshopTopicsSection />
      <CollegeTrustSection />
      <WorkshopMediaPreviewSection />
      <WorkshopCallToActionSection />
    </LandingLayout>
  );
}
