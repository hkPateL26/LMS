import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Award, CheckCircle2 } from 'lucide-react';

export function ProgramCertificateSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-8 lg:order-1">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Earn Your Digital Certificate
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Students who successfully complete the 10-day training receive a verifiable digital
                certificate, proving their dedication to professional readiness.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-lg">
                  Add it to your <strong>LinkedIn Profile</strong> to attract recruiters.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-lg">
                  Include it in your <strong>Resume</strong> under certifications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                <span className="text-lg">
                  Showcase it in your personal <strong>Portfolio</strong>.
                </span>
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-background flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-3xl border p-8 shadow-sm">
              <Award className="text-primary/40 mb-6 h-20 w-20" strokeWidth={1} />
              <h4 className="mb-2 text-center font-serif text-2xl">Certificate of Completion</h4>
              <p className="text-muted-foreground mb-8 max-w-sm text-center text-sm">
                This acknowledges that the student has successfully completed the 10-Day Career
                Foundation Program.
              </p>
              <div className="bg-border h-1 w-1/2 rounded-full" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
