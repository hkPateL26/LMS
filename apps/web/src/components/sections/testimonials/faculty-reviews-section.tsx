'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { TestimonialCard } from '@/components/cards/testimonial-card';

const facultyReviews = [
  {
    name: 'Dr. Ramesh Desai',
    role: 'HOD, Computer Science',
    college: 'Gujarat University',
    review: 'Shreeji I-Tech brings an unparalleled level of corporate professionalism to their workshops. Our students were highly engaged, and we noticed a significant improvement in their approach to final year projects.',
  },
  {
    name: 'Prof. Neha Shah',
    role: 'Placement Coordinator',
    college: 'Nirma University',
    review: 'The Career Foundation Program is exactly what academic institutions need as an add-on. The mentors bridge the industry-academia gap perfectly without confusing students with too much tech jargon.',
  },
];

export function FacultyReviewsSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="text-primary mb-4 font-semibold uppercase tracking-wider text-sm">Academic Endorsements</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Faculty Reviews</h2>
          <p className="text-muted-foreground text-lg">
            See why leading academic institutions and placement coordinators trust Shreeji I-Tech to train their students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {facultyReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...review} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
