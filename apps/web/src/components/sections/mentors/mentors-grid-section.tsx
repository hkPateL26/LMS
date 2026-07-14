'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { MentorCard } from '@/components/cards/mentor-card';

const mentors = [
  {
    name: 'Sarah Engineer',
    role: 'Principal Software Architect',
    experience: '10+ Years in Tech',
    expertise: ['System Design', 'Cloud Architecture', 'Node.js', 'Go'],
    bio: 'Former Tech Lead at leading SaaS companies. Specializes in building highly scalable distributed systems and mentoring junior engineers into senior roles.',
    imageUrl: '', // Will fallback to emoji
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'David Designer',
    role: 'Lead UI/UX Designer',
    experience: '8+ Years in Design',
    expertise: ['UI/UX', 'Figma', 'Design Systems', 'Accessibility'],
    bio: 'Passionate about creating accessible, intuitive, and premium SaaS experiences. Has led design teams for multiple award-winning enterprise products.',
    imageUrl: '',
    linkedinUrl: '#',
    twitterUrl: '#',
  },
  {
    name: 'Emily Educator',
    role: 'Director of Learning',
    experience: '12+ Years in EdTech',
    expertise: ['Curriculum Design', 'Pedagogy', 'Mentorship', 'Agile'],
    bio: 'Dedicated to curriculum development and ensuring students are industry-ready. Bridging the gap between academic theory and corporate practice.',
    imageUrl: '',
    linkedinUrl: '#',
  },
  {
    name: 'Michael Frontend',
    role: 'Senior React Developer',
    experience: '6+ Years in Frontend',
    expertise: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    bio: 'Frontend wizard with a knack for performance optimization and pixel-perfect UI. Active open-source contributor and speaker at React conferences.',
    imageUrl: '',
    githubUrl: '#',
    twitterUrl: '#',
  },
];

export function MentorsGridSection() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MentorCard {...mentor} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
