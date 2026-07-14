'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { TestimonialCard } from '@/components/cards/testimonial-card';

const studentReviews = [
  {
    name: 'Rahul Sharma',
    role: 'BCA Student',
    college: 'Gujarat University',
    review: 'The 10-day program completely changed my perspective on the IT industry. I finally understand how Git and GitHub work, and my resume is now ATS-friendly. Highly recommended!',
  },
  {
    name: 'Priya Patel',
    role: 'MCA Student',
    college: 'Nirma University',
    review: 'Before this workshop, I was terrified of corporate interviews. The mock sessions and communication skills training gave me the confidence I needed. The mentors were incredibly supportive.',
  },
  {
    name: 'Amit Kumar',
    role: 'B.Tech IT Student',
    college: 'LD College of Engineering',
    review: 'The insights on how real software development lifecycles work in service-based vs product-based companies were eye-opening. This is the missing link in our college education.',
  },
];

export function WorkshopReviewsSection() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="text-secondary mb-4 font-semibold uppercase tracking-wider text-sm">Student Experiences</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Workshop Reviews</h2>
          <p className="text-muted-foreground text-lg">
            Hear directly from the students who have participated in our offline college workshops and the Career Foundation Program.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studentReviews.map((review, index) => (
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
