import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Camera, PlayCircle } from 'lucide-react';

export function WorkshopMediaPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Campus Moments</h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into our offline college workshops.
            </p>
          </div>
          <Button variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>

        {/* 
          Placeholder Grid for Workshop Media.
          Only college workshop media should be populated here in production.
        */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="bg-muted border-muted-foreground/30 text-muted-foreground col-span-2 row-span-2 flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed md:aspect-auto">
            <Camera className="mb-4 h-12 w-12 opacity-50" />
            <span className="text-sm font-medium">Workshop Photo Placeholder</span>
          </div>

          <div className="bg-muted border-muted-foreground/30 text-muted-foreground flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed">
            <PlayCircle className="mb-2 h-8 w-8 opacity-50" />
            <span className="px-4 text-center text-xs font-medium">Video Placeholder</span>
          </div>

          <div className="bg-muted border-muted-foreground/30 text-muted-foreground flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed">
            <Camera className="mb-2 h-8 w-8 opacity-50" />
          </div>

          <div className="bg-muted border-muted-foreground/30 text-muted-foreground flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed">
            <Camera className="mb-2 h-8 w-8 opacity-50" />
          </div>

          <div className="bg-muted border-muted-foreground/30 text-muted-foreground flex aspect-square flex-col items-center justify-center rounded-2xl border border-dashed">
            <Camera className="mb-2 h-8 w-8 opacity-50" />
          </div>
        </div>

        <div className="text-muted-foreground mt-8 text-center text-sm">
          * Real workshop photos and videos will be loaded dynamically via CMS.
        </div>
      </Container>
    </Section>
  );
}
