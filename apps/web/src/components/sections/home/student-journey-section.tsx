import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Compass, UserPlus, BookOpenCheck, Award, Briefcase } from 'lucide-react';

const journeySteps = [
  {
    icon: Compass,
    title: 'Discover Workshop',
    description: 'Attend our insightful workshops hosted directly at your college campus.',
  },
  {
    icon: UserPlus,
    title: 'Register for 10-Day Training',
    description: 'Sign up for our intensive Career Foundation Program.',
  },
  {
    icon: BookOpenCheck,
    title: 'Learn Industry Basics',
    description: 'Master practical tools like Git, LinkedIn optimization, and AI prompting.',
  },
  {
    icon: Award,
    title: 'Receive Digital Certificate',
    description: 'Validate your newly acquired skills with a verifiable certificate.',
  },
  {
    icon: Briefcase,
    title: 'Opportunity for Paid Internship',
    description: 'Top performers earn the chance to start their professional career with us.',
  },
];

export function StudentJourneySection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Journey to Success
          </h2>
          <p className="text-muted-foreground text-lg">
            A clear, actionable path designed to take you from a curious student to an
            industry-ready professional.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting Line (Desktop) */}
          

          <div className="relative z-10 grid gap-8 md:grid-cols-5">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group flex flex-col items-center text-center">
                  <div className="border-background bg-surface group-hover:border-primary/20 group-hover:bg-primary/5 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-sm transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
