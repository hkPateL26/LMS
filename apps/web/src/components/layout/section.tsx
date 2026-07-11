import * as React from 'react';
import { cn } from '@/lib/utils';

export type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn('py-12 md:py-20 lg:py-24', className)} {...props} />;
}
