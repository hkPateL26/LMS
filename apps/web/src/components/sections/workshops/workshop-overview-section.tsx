import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { StatisticCard } from '@/components/cards/statistic-card';
import { Building2, Presentation, Users, MapPin } from 'lucide-react';

export function WorkshopOverviewSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bridging the Gap on Campus
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Shreeji I-Tech conducts offline workshops at colleges to help students understand IT
            career opportunities, software industry workflows, emerging technologies, and essential
            career preparation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatisticCard
            value="[XX]+"
            label="Colleges Visited"
            icon={<Building2 className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XX]+"
            label="Workshops Conducted"
            icon={<Presentation className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XXXX]+"
            label="Students Connected"
            icon={<Users className="h-6 w-6" />}
          />
          <StatisticCard
            value="[XX]+"
            label="Cities Reached"
            icon={<MapPin className="h-6 w-6" />}
          />
        </div>
      </Container>
    </Section>
  );
}
