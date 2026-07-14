import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { TestimonialCard } from '@/components/cards/testimonial-card';

import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Hear From Our Students
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here is what participants have to say about their
            Launchpad experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              review={testimonial.quote}
              name={testimonial.studentName}
              role={testimonial.role}
              college={testimonial.collegeName}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
