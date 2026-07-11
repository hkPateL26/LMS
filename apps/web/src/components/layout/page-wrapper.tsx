'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type PageWrapperProps = HTMLMotionProps<'main'>;

export function PageWrapper({ className, children, ...props }: PageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn('flex min-h-screen flex-col', className)}
      {...props}
    >
      {children}
    </motion.main>
  );
}
