'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'Is the 10-Day Career Foundation Program completely free?',
    answer: 'Yes! The program is absolutely free for all students. Our goal is to empower IT students with industry knowledge before they step into the corporate world.',
  },
  {
    id: 'faq-2',
    question: 'Who is eligible to join the workshops?',
    answer: 'Our workshops and the foundation program are specifically designed for BCA, MCA, BE, B.Tech, and Diploma IT students who are passionate about technology.',
  },
  {
    id: 'faq-3',
    question: 'Will I get a certificate after completion?',
    answer: 'Yes, participants who successfully complete the 10-Day Career Foundation Program will receive a digital certificate from Shreeji I-Tech to boost their resume.',
  },
  {
    id: 'faq-4',
    question: 'Are there any prerequisites or coding experience required?',
    answer: 'No prior coding experience is strictly required, although a basic understanding of computer science concepts will be helpful. We build your foundation from the ground up.',
  },
];

export function FaqPreviewSection() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. Here are some of the most common questions about our platform and programs.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
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
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="group">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
