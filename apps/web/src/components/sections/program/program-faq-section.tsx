'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'p-faq-1',
    question: 'How do I register for the program?',
    answer: 'You can register by clicking the "Register Now for Free" button on this page. Fill out your details, and our team will get in touch with you regarding the schedule.',
  },
  {
    id: 'p-faq-2',
    question: 'Do I need to pay any fees later?',
    answer: 'No, this 10-day Career Foundation Program is 100% free with no hidden charges. Our aim is to build a strong community of capable IT students.',
  },
  {
    id: 'p-faq-3',
    question: 'Will you teach me React, Node, or Python?',
    answer: 'No. This specific program is focused entirely on non-domain industry readiness. We cover Git, communication, resumes, AI tools, and career planning. Technical stacks are not covered in these 10 days.',
  },
  {
    id: 'p-faq-4',
    question: 'Is the training online or offline?',
    answer: 'The program is typically conducted in a hybrid mode. Specific details regarding online links or offline venues will be shared once your registration is confirmed.',
  },
];

export function ProgramFaqSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Program FAQs</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about joining the 10-Day Career Foundation Program.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-border mx-auto max-w-3xl rounded-2xl border p-6 sm:p-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
