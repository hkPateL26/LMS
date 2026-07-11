import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfoSection() {
  return (
    <Section className="pb-0 pt-16 md:pb-0">
      <Container>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="bg-surface flex flex-col items-center rounded-3xl border p-8 text-center shadow-sm">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-bold">Email Us</h3>
            <p className="text-muted-foreground mb-4 text-sm">Our friendly team is here to help.</p>
            <a
              href="mailto:contact@shreeji-itech.com"
              className="hover:text-primary font-medium transition-colors"
            >
              contact@shreeji-itech.com
            </a>
          </div>

          <div className="bg-surface flex flex-col items-center rounded-3xl border p-8 text-center shadow-sm">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-full">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-bold">Visit Us</h3>
            <p className="text-muted-foreground mb-4 text-sm">Come say hello at our office HQ.</p>
            <address className="text-foreground font-medium not-italic">
              [Office Address Line 1]
              <br />
              [City, State, Zip Code]
            </address>
          </div>

          <div className="bg-surface flex flex-col items-center rounded-3xl border p-8 text-center shadow-sm">
            <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-bold">Call Us</h3>
            <p className="text-muted-foreground mb-4 text-sm">Mon-Fri from 10am to 6pm.</p>
            <a
              href="tel:+910000000000"
              className="hover:text-primary font-medium transition-colors"
            >
              +91 [000] [000] [0000]
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
