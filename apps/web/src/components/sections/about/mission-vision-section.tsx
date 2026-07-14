'use client';

import * as React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Target, Lightbulb } from 'lucide-react';

export function MissionVisionSection() {
  // Motion values for interactive tilt effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    // Map to -8..8 degrees
    rotateY.set(((x - halfW) / halfW) * 8);
    rotateX.set(((y - halfH) / halfH) * -8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const cardStyle = {
    perspective: 1000,
    rotateX,
    rotateY,
  } as React.CSSProperties;

  const sharedCardClasses =
    'bg-card border-border border rounded-3xl p-8 transition-all hover:shadow-xl group';

  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border-border hover:border-primary/50 group rounded-3xl border p-8 transition-colors md:p-12"
          >
            <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-2xl p-4 transition-transform group-hover:scale-110">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-3xl font-bold tracking-tight">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To bridge the massive skill gap between academic curriculums and corporate
              expectations. We strive to empower students with modern, practical technical
              skills, fostering their ability to build and deploy production-ready applications
              confidently.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-border hover:border-secondary/50 group rounded-3xl border p-8 transition-colors md:p-12"
          >
            <div className="bg-secondary/10 text-secondary mb-6 inline-flex rounded-2xl p-4 transition-transform group-hover:scale-110">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-3xl font-bold tracking-tight">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become the most trusted career foundation launchpad for IT students across India,
              creating a thriving ecosystem where every graduate is fundamentally sound,
              professionally capable, and highly employable from day one.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
