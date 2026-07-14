import * as React from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { HeroSection } from '@/components/sections/home/hero-section';
import { AboutPreviewSection } from '@/components/sections/home/about-preview-section';
import { WhyChooseUsSection } from '@/components/sections/home/why-choose-us-section';
import { StudentJourneySection } from '@/components/sections/home/student-journey-section';
import { StatisticsSection } from '@/components/sections/home/statistics-section';
import { WorkshopHighlightsSection } from '@/components/sections/home/workshop-highlights-section';
import { CareerFoundationPreviewSection } from '@/components/sections/home/career-foundation-preview-section';
import { TestimonialsPreviewSection } from '@/components/sections/home/testimonials-preview-section';
import { FaqPreviewSection } from '@/components/sections/home/faq-preview-section';
import { CallToActionSection } from '@/components/sections/home/call-to-action-section';

export default function HomePage() {
  return (
    <LandingLayout>
      <HeroSection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <StudentJourneySection />
      <StatisticsSection />
      <WorkshopHighlightsSection />
      <CareerFoundationPreviewSection />
      <TestimonialsPreviewSection />
      <FaqPreviewSection />
      <CallToActionSection />
    </LandingLayout>
  );
}
