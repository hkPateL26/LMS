'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function FaqCallToAction() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-muted border-border relative overflow-hidden rounded-3xl border p-8 text-center md:p-16"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Can't find the answer you're looking for? Our team is always here to help you out with any doubts regarding our programs or workshops.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
