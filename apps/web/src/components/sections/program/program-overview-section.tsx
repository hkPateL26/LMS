import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Calendar, MonitorPlay, MessageSquare, FileBadge, UserCheck } from 'lucide-react';

const programDetails = [
  { icon: Calendar, label: 'Duration', value: '10 Days' },
  { icon: MonitorPlay, label: 'Mode', value: 'Online' },
  { icon: MessageSquare, label: 'Community', value: 'Discord' },
  { icon: FileBadge, label: 'Certificate', value: 'Digital Certificate' },
  { icon: UserCheck, label: 'Eligibility', value: 'IT Students & Freshers' },
];

export function ProgramOverviewSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Program Overview</h2>
          <p className="text-muted-foreground text-lg">
            Designed specifically for students who want to understand the realities of the IT
            industry before starting their professional journey.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {programDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-background flex flex-col items-center justify-center rounded-2xl border p-6 text-center shadow-sm"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-muted-foreground mb-1 text-sm font-medium uppercase tracking-wider">
                  {detail.label}
                </p>
                <p className="text-lg font-bold">{detail.value}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
