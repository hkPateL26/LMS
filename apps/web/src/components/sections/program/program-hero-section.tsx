'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function ProgramHeroSection() {
  return (
    <div className="bg-background relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="bg-secondary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="border-secondary/20 bg-secondary/5 text-secondary inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
              ✨ 100% Free for IT Students
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              10-Day Career <br className="hidden lg:block" />
              <span className="text-secondary">Foundation Program</span>
            </h1>
            
            <p className="text-muted-foreground max-w-lg text-lg sm:text-xl">
              Build your industry readiness. Master the non-domain skills every corporate employer expects from a fresh graduate.
            </p>
            
            <ul className="text-muted-foreground space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary h-5 w-5" /> Soft Skills & Communication
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary h-5 w-5" /> Version Control (Git/GitHub)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-secondary h-5 w-5" /> Resume & LinkedIn Optimization
              </li>
            </ul>

            <div className="flex pt-4">
              <Button asChild size="lg" className="h-12 w-full px-8 text-base sm:w-auto">
                <Link href="/register">
                  Register Now for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-border shadow-dropdown relative overflow-hidden rounded-3xl border p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            
            <h3 className="mb-6 text-2xl font-bold">Program Highlights</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl">
                  ⏱️
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">10 Days Duration</h4>
                  <p className="text-muted-foreground text-sm">Intensive, fast-paced, and highly practical daily sessions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-secondary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">For IT Students</h4>
                  <p className="text-muted-foreground text-sm">BCA, MCA, BE, B.Tech, and Diploma IT students.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-500/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl">
                  📜
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Digital Certificate</h4>
                  <p className="text-muted-foreground text-sm">Earn a verified certificate to boost your resume and LinkedIn.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
