import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface MentorCardProps {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  shortBio: string;
  photoUrl?: string;
}

export function MentorCard({
  name,
  role,
  experience,
  expertise,
  shortBio,
  photoUrl,
}: MentorCardProps) {
  return (
    <Card className="hover:shadow-card-hover overflow-hidden transition-all">
      <CardHeader className="pb-2 text-center">
        <div className="bg-muted mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="bg-secondary/10 text-secondary flex h-full w-full items-center justify-center text-xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-primary text-sm font-medium">{role}</p>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-muted-foreground text-sm">{shortBio}</p>
        <div className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
          {experience}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {expertise.map((skill) => (
            <span
              key={skill}
              className="bg-surface text-foreground rounded-md border px-2 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
