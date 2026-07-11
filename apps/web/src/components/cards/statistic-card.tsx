import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatisticCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatisticCard({ value, label, icon, className }: StatisticCardProps) {
  return (
    <Card className={cn('py-6 text-center', className)}>
      <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
        {icon && <div className="text-primary bg-primary/10 mb-2 rounded-full p-3">{icon}</div>}
        <h3 className="text-foreground text-4xl font-black">{value}</h3>
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}
