import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { MentorsHeroSection } from '@/components/sections/mentors/mentors-hero-section';
import { MentorsGridSection } from '@/components/sections/mentors/mentors-grid-section';
import { MentorsCallToAction } from '@/components/sections/mentors/mentors-call-to-action';

export const metadata: Metadata = {
  title: 'Our Mentors | Shreeji I-Tech Launchpad',
  description:
    'Meet the industry experts and seasoned professionals who conduct our workshops and guide students in the Career Foundation Program.',
};

export default function MentorsPage() {
  return (
    <LandingLayout>
      <MentorsHeroSection />
      <MentorsGridSection />
      <MentorsCallToAction />
    </LandingLayout>
  );
}
