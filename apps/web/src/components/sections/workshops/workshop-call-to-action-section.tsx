import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function WorkshopCallToActionSection() {
  return (
    <Section className="py-20 md:py-32">
      <Container>
        <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24 md:px-16 lg:px-24">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-12 translate-x-1/3 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-primary-foreground mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Didn't attend our workshop?
            </h2>
            <p className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg">
              You can still start your IT journey today. Join our comprehensive foundation program
              designed to give you the same professional edge.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 w-full px-10 text-base font-bold shadow-xl sm:w-auto"
              >
                Join 10-Day Career Foundation Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
