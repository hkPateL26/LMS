import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Building } from 'lucide-react';

const placeholders = [1, 2, 3, 4, 5, 6, 7, 8];

export function CollegeTrustSection() {
  return (
    <Section className="bg-surface overflow-hidden border-y">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
            Trusted by Educational Institutions
          </p>
        </div>

        {/* 
          Note: This uses placeholders to avoid fake college logos. 
          When actual college partners are available, replace these with real SVG logos.
        */}
        <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale md:gap-12">
          {placeholders.map((item) => (
            <div
              key={item}
              className="text-muted-foreground flex items-center gap-2 text-lg font-medium"
            >
              <Building className="h-8 w-8" />
              <span>College Partner</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
