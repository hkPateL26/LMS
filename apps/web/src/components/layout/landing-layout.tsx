import * as React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { PageWrapper } from './page-wrapper';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <PageWrapper className="flex-1">{children}</PageWrapper>
      <Footer />
    </div>
  );
}
