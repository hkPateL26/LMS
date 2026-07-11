import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { StatisticCard } from '@/components/cards/statistic-card';
import { Users, Building2, Presentation, Clock } from 'lucide-react';

export function StudentImpactSection() {
  return (
    <Section className="bg-surface border-y">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Impact So Far</h2>
          <p className="text-muted-foreground text-lg">
            We are just getting started, but our commitment to student success is already creating
            ripples across campuses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Note: Placeholder data used to prevent exaggerated claims */}
          <StatisticCard
            value="[XX]+"
            label="Workshops Conducted"
            icon={<Presentation className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XX]+"
            label="Colleges Connected"
            icon={<Building2 className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XXXX]+"
            label="Students Reached"
            icon={<Users className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XXX]+"
            label="Learning Hours Delivered"
            icon={<Clock className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
