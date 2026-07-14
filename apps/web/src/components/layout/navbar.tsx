// Restored premium Navbar component with glass backdrop and gradient CTA
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/layout/container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/program', label: 'Program' },
  { href: '/workshops', label: 'Workshop Journey' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll for navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl',
        isScrolled
          ? 'bg-background/70 border-b py-3 shadow-sm'
          : 'bg-transparent py-5',
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo className="h-8 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'relative text-sm font-medium transition-colors',
                        isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="bg-primary absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4 border-l pl-6">
              <ThemeToggle />
              <Link href="/register">
                <Button
                  size="sm"
                  className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:from-indigo-600 hover:to-purple-600 border border-transparent hover:border-white/20"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground -mr-2 p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-background/70 backdrop-blur-xl border-b shadow-lg lg:hidden overflow-hidden"
          >
            <Container className="space-y-6 py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-2 text-base font-medium transition-colors',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <Link href="/register" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
