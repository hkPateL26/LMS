import * as React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: React.ReactNode;
  /** Optional icon element, will receive animation */
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Premium reusable card with subtle default border and a moving gradient highlight
 * that follows the cursor. The surface colour stays neutral, and a soft radial
 * light is rendered inside the card. Hover lifts the card by 4 px and adds a tiny
 * shadow increase. Icon rotates 3° and scales to 1.08.
 */
export function InteractiveCard({ children, icon, className }: InteractiveCardProps) {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };

  const highlight = useMotionTemplate`
    radial-gradient(circle at ${mouseX}% ${mouseY}%,
      transparent 0%,
      rgba(99,102,241,0.5) 30%,
      rgba(139,92,246,0.5) 60%,
      rgba(168,85,247,0.5) 90%,
      transparent 100%)`;

  const innerLight = useMotionTemplate`
    radial-gradient(circle at ${mouseX}% ${mouseY}%,
      rgba(255,255,255,0.06) 0%,
      transparent 45%)`;

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-[1px] border-transparent bg-card text-card-foreground',
        className,
      )}
      style={{
        // subtle default border colour (very low opacity)
        borderColor: 'rgba(255,255,255,0.08)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(50);
        mouseY.set(50);
      }}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Moving gradient highlight – only visible on the border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: highlight,
          // mask the centre so only the border shows the gradient
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) border-box',
          WebkitMaskComposite: 'exclude',
          maskComposite: 'exclude',
        }}
      />

      {/* Soft internal glow that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background: innerLight }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        {icon && (
          <motion.div
            className="mb-4 self-start"
            animate={{ rotate: 3, scale: 1.08 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {icon}
          </motion.div>
        )}
        {children}
      </div>
    </motion.div>
  );
}
