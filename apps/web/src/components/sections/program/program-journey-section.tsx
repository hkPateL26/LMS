import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import {
  Presentation,
  ClipboardSignature,
  MailOpen,
  MessageSquare,
  MonitorPlay,
  FileBadge,
  Briefcase,
} from 'lucide-react';

const steps = [
  { icon: Presentation, title: 'Workshop Awareness' },
  { icon: ClipboardSignature, title: 'Registration' },
  { icon: MailOpen, title: 'Welcome Email' },
  { icon: MessageSquare, title: 'Discord Community' },
  { icon: MonitorPlay, title: '10-Day Training' },
  { icon: FileBadge, title: 'Digital Certificate' },
  { icon: Briefcase, title: 'Paid Internship Opportunity (Optional)' },
];

export function ProgramJourneySection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Student Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            A clear, step-by-step path from your first workshop interaction to receiving your final
            certificate.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="bg-border absolute bottom-8 left-8 top-8 hidden w-1 sm:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group relative flex items-center gap-6">
                    <div className="border-background bg-surface group-hover:bg-primary/5 relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 shadow-sm transition-transform group-hover:scale-110">
                      <Icon className="text-primary h-6 w-6" />
                    </div>
                    <div className="bg-card flex-1 rounded-2xl border p-4 md:p-6">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
