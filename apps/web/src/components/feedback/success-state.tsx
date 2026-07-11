import * as React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuccessStateProps {
  title: string;
  message: string;
  action?: React.ReactNode;
  className?: string;
}

export function SuccessState({ title, message, action, className }: SuccessStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50/50 p-8 py-12 text-center dark:border-green-900/30 dark:bg-green-900/10',
        className,
      )}
    >
      <CheckCircle2 className="mb-4 h-12 w-12 text-green-500" />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mb-8 max-w-md">{message}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
