// Premium MentorCard with glass effect and gradient border
import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MentorCardProps {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  className?: string;
}

export function MentorCard({
  name,
  role,
  experience,
  expertise,
  bio,
  imageUrl,
  linkedinUrl,
  githubUrl,
  twitterUrl,
  className,
}: MentorCardProps) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-xl border border-transparent bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/30',
        className,
      )}
    >
      {/* Gradient border overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 pointer-events-none" />
      <CardHeader className="p-0">
        <div className="bg-muted aspect-square w-full overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            '🧑‍🏫'
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
          <p className="text-muted-foreground text-sm">{experience}</p>
        </div>
        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">{bio}</p>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-auto flex gap-4 pt-4 border-t border-border">
          {linkedinUrl && (
            <a href={linkedinUrl} className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {twitterUrl && (
            <a href={twitterUrl} className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
