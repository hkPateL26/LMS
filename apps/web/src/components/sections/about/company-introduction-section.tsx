import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export function CompanyIntroductionSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Connecting Academia with Industry
          </h2>
          <div className="text-muted-foreground space-y-6 text-left text-lg leading-relaxed sm:text-center">
            <p>
              Shreeji I-Tech is an IT learning and technology organization focused exclusively on
              bridging the gap between theoretical academic knowledge and practical industry
              expectations.
            </p>
            <p>
              We understand that stepping into the tech industry can be daunting for fresh
              graduates. Our programs are designed to foster deep student career awareness,
              providing clarity on what modern tech companies actually look for in new hires.
            </p>
            <p>
              By focusing on real-world IT careers rather than just theoretical concepts, we help
              students build a portfolio of relevant skills, making their transition from campus to
              corporate seamless and successful.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
