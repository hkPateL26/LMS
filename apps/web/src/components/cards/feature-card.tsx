// Premium FeatureCard with glass effect and gradient border
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-xl border border-transparent bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/30',
        className,
      )}
    >
      {/* Gradient border overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 pointer-events-none" />
      <CardHeader className="relative z-10">
        <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-base text-foreground/80">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
