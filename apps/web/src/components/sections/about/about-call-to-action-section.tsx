import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export function AboutCallToActionSection() {
  return (
    <Section className="py-20 md:py-32">
      <Container>
        <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24">
          {/* Decorative Background Elements */}
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-12 translate-x-1/3 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Take the First Step Towards Your IT Career
            </h2>
            <p className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg">
              Join thousands of students who have already begun their journey with Shreeji I-Tech
              Launchpad.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 w-full px-8 text-base font-bold sm:w-auto"
              >
                Register for 10-Day Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground h-14 w-full bg-transparent px-8 text-base sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Explore Workshop Journey
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
