import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { FaqHeroSection } from '@/components/sections/faq/faq-hero-section';
import { SearchableFaqSection } from '@/components/sections/faq/searchable-faq-section';
import { FaqCallToAction } from '@/components/sections/faq/faq-call-to-action';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Shreeji I-Tech Launchpad',
  description:
    'Find answers to common questions about Shreeji I-Tech programs, workshops, and how we help bridge the gap for IT students.',
};

export default function FaqPage() {
  return (
    <LandingLayout>
      <FaqHeroSection />
      <SearchableFaqSection />
      <FaqCallToAction />
    </LandingLayout>
  );
}
