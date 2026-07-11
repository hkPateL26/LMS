import * as React from 'react';
import { Metadata } from 'next';
import { LandingLayout } from '@/components/layout/landing-layout';
import { RegisterHeroSection } from '@/components/sections/register/register-hero-section';
import { RegisterFormSection } from '@/components/sections/register/register-form-section';

export const metadata: Metadata = {
  title: 'Register for 10-Day Career Foundation Program | Shreeji I-Tech Launchpad',
  description:
    'Start your IT journey today. Register for our foundational training program and discover your potential in the software industry.',
};

export default function RegisterPage() {
  return (
    <LandingLayout>
      <RegisterHeroSection />
      <RegisterFormSection />
    </LandingLayout>
  );
}
