// Premium HeroSection with glass backdrop and gradient CTA buttons
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { ArrowRight, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
      {/* ================= Animated Aurora Background ================= */}

      <div className="absolute inset-0 -z-30 overflow-hidden">
        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-16 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[140px]"
        />

        Purple Glow
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[-150px] top-32 h-[520px] w-[520px] rounded-full bg-purple-600/30 blur-[150px]"
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-120px] left-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/30 blur-[150px]"
        />
      </div>

      {/* Background Grid */}
      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Radial Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" /> */}

      {/* ================= Hero Content ================= */}

      <Container className="relative z-10 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="mx-auto max-w-3xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-md"
          >
            🚀 The ultimate launchpad for your IT career
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Bridge the Gap
            <br className="hidden sm:block" />
            Between
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Campus &amp; Corporate
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Shreeji I-Tech Launchpad equips BCA, MCA, and B.Tech students
            with the essential, industry-ready skills required to kickstart
            a successful career in tech.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-12 w-full px-8 text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 border border-transparent hover:border-white/20 sm:w-auto"
            >
              Join 10-Day Career Foundation

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group h-12 w-full px-8 text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white border border-transparent hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto"
            >
              <BookOpen className="mr-2 h-4 w-4" />

              Explore Workshop Journey
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}