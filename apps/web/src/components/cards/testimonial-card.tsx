import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  college: string;
  review: string;
  imageUrl?: string;
}

export function TestimonialCard({ name, role, college, review, imageUrl }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-card-hover group relative overflow-hidden transition-all h-full flex flex-col">
      <CardContent className="p-8 flex flex-col flex-grow">
        <Quote className="text-primary/20 mb-6 h-10 w-10 shrink-0 transition-transform group-hover:scale-110 group-hover:text-primary/40" />
        
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow italic">
          "{review}"
        </p>
        
        <div className="flex items-center gap-4 mt-auto">
          <div className="bg-muted flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full text-xl">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              '👤'
            )}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{name}</h4>
            <p className="text-primary text-sm font-medium">{role}</p>
            <p className="text-muted-foreground text-xs">{college}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
