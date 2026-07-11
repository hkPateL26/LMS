import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { LandingLayout } from '@/components/layout/landing-layout';

export default function NotFound() {
  return (
    <LandingLayout>
      <Section className="flex min-h-[70vh] items-center justify-center">
        <Container>
          <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 text-center">
            <div className="bg-primary/10 text-primary mb-4 flex h-24 w-24 items-center justify-center rounded-full">
              <FileQuestion className="h-12 w-12" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h2>
            <p className="text-muted-foreground text-lg">
              Oops! The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
