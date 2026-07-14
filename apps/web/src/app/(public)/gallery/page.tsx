import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GalleryHeroSection } from '@/components/sections/gallery/gallery-hero-section';
import { FeaturedWorkshopSection } from '@/components/sections/gallery/featured-workshop-section';
import { GalleryGridSection } from '@/components/sections/gallery/gallery-grid-section';
import { WorkshopAlbumsSection } from '@/components/sections/gallery/workshop-albums-section';
import { StudentExperienceSection } from '@/components/sections/gallery/student-experience-section';
import { GalleryCallToActionSection } from '@/components/sections/gallery/gallery-call-to-action-section';

export const metadata: Metadata = {
  title: 'Workshop Gallery | Shreeji I-Tech Launchpad',
  description:
    'View photos and videos from Shreeji I-Tech offline college workshops. See students discovering technology and career opportunities.',
};

export default function GalleryPage() {
  return (
    <LandingLayout>
      <GalleryHeroSection />
      <FeaturedWorkshopSection />
      <GalleryGridSection />
      <WorkshopAlbumsSection />
      <StudentExperienceSection />
      <GalleryCallToActionSection />
    </LandingLayout>
  );
}
