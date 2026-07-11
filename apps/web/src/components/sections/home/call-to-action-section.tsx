import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  return (
    <Section className="py-20 md:py-32">
      <Container>
        <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12 sm:py-24 md:px-16 lg:px-24">
          {/* Decorative Background Elements */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-primary-foreground mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Launch Your IT Career?
            </h2>
            <p className="text-primary-foreground/80 mx-auto mb-10 max-w-2xl text-lg">
              Join the Free 10-Day Career Foundation Program and equip yourself with the tools,
              knowledge, and confidence to succeed in the corporate world.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 w-full px-8 text-base font-bold sm:w-auto"
              >
                Register Now for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
