import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ContactHeroSection } from '@/components/sections/contact/contact-hero-section';
import { ContactInfoSection } from '@/components/sections/contact/contact-info-section';
import { ContactFormSection } from '@/components/sections/contact/contact-form-section';

export const metadata: Metadata = {
  title: 'Contact Us | Shreeji I-Tech Launchpad',
  description:
    'Get in touch with the Shreeji I-Tech team for inquiries about programs, college workshops, or partnerships.',
};

export default function ContactPage() {
  return (
    <LandingLayout>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </LandingLayout>
  );
}
