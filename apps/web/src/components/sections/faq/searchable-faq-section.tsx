'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: 'General',
    items: [
      {
        question: 'What is Shreeji I-Tech Launchpad?',
        answer: 'Shreeji I-Tech Launchpad is a platform designed to bridge the gap between academic education and the IT corporate world through specialized training and workshops.',
      },
      {
        question: 'Who can join the programs?',
        answer: 'Our programs are open to BCA, MCA, BE, B.Tech, and Diploma IT students who are passionate about building a career in technology.',
      },
    ],
  },
  {
    category: '10-Day Career Foundation Program',
    items: [
      {
        question: 'Is the 10-Day Career Foundation Program completely free?',
        answer: 'Yes! The program is absolutely free for all students. Our goal is to empower IT students with industry knowledge before they step into the corporate world.',
      },
      {
        question: 'Will I learn specific programming languages like Python or React?',
        answer: 'No, this specific program focuses on non-domain industry readiness. We cover Git, communication, resumes, AI tools, and career planning. Technical stacks are not covered in these 10 days.',
      },
      {
        question: 'Will I get a certificate after completion?',
        answer: 'Yes, participants who successfully complete the 10-Day Career Foundation Program will receive a digital certificate from Shreeji I-Tech.',
      },
    ],
  },
  {
    category: 'College Workshops',
    items: [
      {
        question: 'Can I request a workshop at my college?',
        answer: 'Absolutely! Students or faculties can reach out to us via the Contact page to schedule an offline workshop at their college campus.',
      },
      {
        question: 'What topics are covered in college workshops?',
        answer: 'College workshops typically cover a wide range of topics from modern web development, UI/UX design, cloud architecture, and general career guidance in the IT sector.',
      },
    ],
  },
];

export function SearchableFaqSection() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredFaqs = React.useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    
    const query = searchQuery.toLowerCase();
    
    return faqs.map(category => ({
      ...category,
      items: category.items.filter(
        item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-2xl bg-surface border-border focus-visible:ring-primary/20"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category, idx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-foreground border-b pb-2">
                    {category.category}
                  </h3>
                  <div className="bg-card border-border rounded-2xl border p-6 sm:p-8">
                    <Accordion type="multiple" className="w-full">
                      {category.items.map((item, i) => (
                        <AccordionItem key={i} value={`${category.category}-${i}`} className="border-border">
                          <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-card border-border rounded-2xl border">
                <p className="text-muted-foreground text-lg">
                  No frequently asked questions found matching "{searchQuery}".
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
