import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { StatisticCard } from '@/components/cards/statistic-card';
import { WorkshopCard } from '@/components/cards/workshop-card';
import { Users, Building2, Presentation } from 'lucide-react';

export function WorkshopHighlightsSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Workshop Highlights
            </h2>
            <p className="text-muted-foreground text-lg">
              We travel to campuses to share knowledge, ignite passion, and prepare students for the
              modern IT landscape.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <StatisticCard
            value="5,000+"
            label="Students Reached"
            icon={<Users className="h-6 w-6" />}
          />
          <StatisticCard
            value="25+"
            label="Colleges Visited"
            icon={<Building2 className="h-6 w-6" />}
          />
          <StatisticCard
            value="50+"
            label="Learning Sessions"
            icon={<Presentation className="h-6 w-6" />}
          />
        </div>

        {/* Recent Workshops Preview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <WorkshopCard
            title="Introduction to Modern Web Development & SaaS"
            college="L.D. College of Engineering"
            location="Ahmedabad, Gujarat"
            date="October 15, 2023"
            description="A comprehensive 4-hour workshop covering the transition from traditional web development to modern SaaS architectures using React and Node.js."
            imageUrl="https://images.unsplash.com/photo-1544144433-d50aff500b91?w=800&q=80"
          />
          <WorkshopCard
            title="Mastering Version Control with Git & GitHub"
            college="Nirma University"
            location="Ahmedabad, Gujarat"
            date="November 02, 2023"
            description="An interactive session teaching students how to collaborate effectively on codebases using industry-standard Git workflows."
            imageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
          />
          <WorkshopCard
            title="AI Tools & Prompt Engineering for Developers"
            college="Silver Oak University"
            location="Ahmedabad, Gujarat"
            date="December 10, 2023"
            description="Exploring how modern AI tools can accelerate development speed and teaching the art of crafting effective prompts."
            imageUrl="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80"
          />
        </div>
      </Container>
    </Section>
  );
}
