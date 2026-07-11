import * as React from 'react';
import Link from 'next/link';
import { Container } from './container';
import { Rocket, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t pb-8 pt-16">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="group flex w-fit items-center gap-2">
              <div className="bg-primary text-primary-foreground rounded-lg p-1.5">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Shreeji I-Tech</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Empowering the next generation of IT professionals by bridging the gap between
              academic learning and corporate expectations through pragmatic foundational training.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Launchpad</h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-primary transition-colors">
                  10-Day Program
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-primary transition-colors">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Resources</h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              <li>
                <Link href="/workshops" className="hover:text-primary transition-colors">
                  Workshop Journey
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Campus Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground flex flex-col items-center justify-between border-t pt-8 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} Shreeji I-Tech. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
