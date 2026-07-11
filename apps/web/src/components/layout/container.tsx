import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({ className, as: Component = 'div', ...props }: ContainerProps) {
  return (
    <Component className={cn('container mx-auto max-w-7xl px-4 md:px-8', className)} {...props} />
  );
}
