import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Images, MapPin, Calendar } from 'lucide-react';

export function FeaturedWorkshopSection() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Workshop</h2>
          <span className="text-muted-foreground bg-muted hidden items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold sm:inline-flex">
            Latest Event
          </span>
        </div>

        <div className="bg-muted group relative flex flex-col overflow-hidden rounded-3xl border shadow-sm lg:flex-row">
          <div className="bg-secondary/10 text-muted-foreground/30 relative flex aspect-video items-center justify-center lg:aspect-auto lg:w-2/3">
            {/* Placeholder for actual featured image */}
            <Images className="h-20 w-20 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
          </div>

          <div className="bg-card relative z-10 -mt-16 flex flex-col justify-center rounded-t-3xl border-t p-8 lg:mt-0 lg:w-1/3 lg:rounded-t-none lg:border-l lg:border-t-0 lg:p-10">
            <div className="text-primary mb-4 text-xs font-bold uppercase tracking-wider">
              [College Name Placeholder]
            </div>
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Navigating the Transition to Tech
            </h3>
            <p className="text-muted-foreground mb-8 line-clamp-3">
              An incredible session interacting with over 300+ students. We discussed the realities
              of the software development lifecycle, modern toolchains, and how to start building a
              robust career profile.
            </p>

            <div className="text-muted-foreground mb-8 space-y-3 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>[Date Placeholder]</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>[City Placeholder]</span>
              </div>
            </div>

            <Button variant="outline" className="w-fit">
              View Full Album
              <Images className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
