import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  authorName: string;
  authorRole: string;
  authorCollege?: string;
}

export function TestimonialCard({
  content,
  authorName,
  authorRole,
  authorCollege,
}: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <Quote className="text-primary/20 mb-2 h-8 w-8" />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between space-y-6">
        <p className="text-muted-foreground relative z-10 italic">"{content}"</p>
        <div>
          <h4 className="font-bold">{authorName}</h4>
          <p className="text-primary text-sm">{authorRole}</p>
          {authorCollege && <p className="text-muted-foreground mt-1 text-xs">{authorCollege}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
