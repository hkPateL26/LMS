import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Target, Compass, Zap } from 'lucide-react';

export function MissionSection() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="bg-primary/5 flex aspect-square items-center justify-center overflow-hidden rounded-3xl border p-12">
              <Target className="text-primary/20 h-full w-full" strokeWidth={1} />
            </div>
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <div>
              <div className="border-primary/20 bg-primary/5 text-primary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                Our Mission
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Empowering Students with Industry Awareness
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to democratize access to high-quality, practical technology exposure.
                We strive to help every IT student build a clear, actionable career direction before
                they even graduate.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-primary/10 text-primary mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Career Direction</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Guiding students to discover the tech roles that best match their strengths and
                    interests.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-primary/10 text-primary mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Technology Exposure</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Providing hands-on experience with the tools and workflows actually used by
                    modern engineering teams.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
