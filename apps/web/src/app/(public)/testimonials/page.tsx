import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { TestimonialsHeroSection } from '@/components/sections/testimonials/testimonials-hero-section';
import { WorkshopReviewsSection } from '@/components/sections/testimonials/workshop-reviews-section';
import { FacultyReviewsSection } from '@/components/sections/testimonials/faculty-reviews-section';
import { TestimonialsCallToAction } from '@/components/sections/testimonials/testimonials-call-to-action';

export const metadata: Metadata = {
  title: 'Testimonials | Shreeji I-Tech Launchpad',
  description:
    'Read reviews and testimonials from students and faculties about Shreeji I-Tech offline workshops and the Career Foundation Program.',
};

export default function TestimonialsPage() {
  return (
    <LandingLayout>
      <TestimonialsHeroSection />
      <WorkshopReviewsSection />
      <FacultyReviewsSection />
      <TestimonialsCallToAction />
    </LandingLayout>
  );
}
