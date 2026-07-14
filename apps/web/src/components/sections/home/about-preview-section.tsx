import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Lightbulb } from 'lucide-react';

export function AboutPreviewSection() {
  return (
    <Section className="bg-card">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Shreeji I-Tech is dedicated to transforming raw student talent into polished,
              industry-ready professionals. We understand the challenges fresh graduates face and
              provide the targeted guidance necessary to succeed.
            </p>
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80 pl-0 hover:bg-transparent"
            >
              Learn more about our story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-stretch">
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground text-sm">
                To bridge the industry-academia gap by providing accessible, practical, and highly
                relevant technology training to students everywhere.
              </p>
            </div>
            <div className="bg-card rounded-2xl border p-6 shadow-sm h-full">
              <div className="bg-secondary/10 text-secondary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground text-sm">
                To become the most trusted career foundation platform, empowering the next
                generation of IT leaders and innovators.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
