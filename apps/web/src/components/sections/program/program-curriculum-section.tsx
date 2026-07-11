import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { cn } from '@/lib/utils';

import { PROGRAM_CURRICULUM } from '@/data/program';

export function ProgramCurriculumSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What You Will Learn
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive 10-day roadmap focused strictly on professional readiness, career
            awareness, and essential productivity tools.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {PROGRAM_CURRICULUM.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'bg-background flex items-center gap-6 rounded-2xl border p-4 transition-all hover:shadow-md md:p-6',
                  index === PROGRAM_CURRICULUM.length - 1 && 'border-primary/30 bg-primary/5',
                )}
              >
                <div className="bg-secondary/10 text-secondary flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl px-1 text-center text-sm font-bold">
                  {item.day}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold md:text-xl">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
