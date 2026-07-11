import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Lightbulb, Users, Globe } from 'lucide-react';

export function VisionSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <div className="border-secondary/20 bg-secondary/5 text-secondary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                Our Vision
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Building Future-Ready Professionals
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We envision a world where the transition from academic learning to professional
                engineering is seamless. We aim to be the premier bridge connecting ambitious
                students directly with the IT industry.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-secondary/10 text-secondary mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Creating a Bridge</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Establishing direct connections between campus talent and corporate
                    opportunities.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-secondary/10 text-secondary mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Accessible Education</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Making practical, industry-aligned technology education accessible to students
                    across all colleges.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="bg-secondary/5 flex aspect-square items-center justify-center overflow-hidden rounded-3xl border p-12">
              <Lightbulb className="text-secondary/20 h-full w-full" strokeWidth={1} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
