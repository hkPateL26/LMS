import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { WorkshopCard } from '@/components/cards/workshop-card';

import { WORKSHOPS } from '@/data/workshops';

export function WorkshopTimelineSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Recent Workshops</h2>
          <p className="text-muted-foreground text-lg">
            Take a look at the campuses we&apos;ve recently visited to share our industry insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORKSHOPS.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              title={workshop.description.split('.')[0] + '.'}
              college={workshop.collegeName}
              date={workshop.date}
              location="Gujarat"
              imageUrl={workshop.imageUrls[0]}
              description={workshop.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
