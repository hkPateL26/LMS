'use client';

import { useEffect } from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section className="flex min-h-[70vh] items-center justify-center">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 text-center">
          <div className="bg-destructive/10 text-destructive flex h-20 w-20 items-center justify-center rounded-full">
            <AlertCircle className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. An unexpected error has occurred on our end.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => reset()} variant="outline">
              Try again
            </Button>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
