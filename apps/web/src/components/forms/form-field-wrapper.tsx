import * as React from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormFieldWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

export function FormFieldWrapper({
  label,
  htmlFor,
  error,
  description,
  required,
  children,
  className,
  ...props
}: FormFieldWrapperProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <Label htmlFor={htmlFor} className={cn(error && 'text-destructive')}>
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {children}
      {description && !error && <p className="text-muted-foreground text-xs">{description}</p>}
      {error && <p className="text-destructive text-xs font-medium">{error}</p>}
    </div>
  );
}
