import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Info } from 'lucide-react';

export function ProgramInternshipSection() {
  return (
    <Section>
      <Container>
        <div className="border-secondary/20 bg-secondary/5 mx-auto max-w-4xl rounded-3xl border p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="bg-secondary/20 text-secondary flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full">
              <Info className="h-8 w-8" />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Paid Internship Opportunity</h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  After successfully completing the 10-day program, students have the opportunity to
                  learn about our paid internship programs. This is where domain-specific technical
                  training occurs.
                </p>
                <div className="bg-background/80 mt-6 rounded-xl border p-4">
                  <h4 className="text-foreground mb-2 font-semibold">Important Disclosures:</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    <li>
                      Internship enrollment is entirely <strong>optional</strong>.
                    </li>
                    <li>
                      There is <strong>no guaranteed selection</strong> for the internship.
                    </li>
                    <li>
                      Detailed expectations, criteria, and paid internship structures are shared
                      exclusively during the final days of the training.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
