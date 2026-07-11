import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Shreeji I-Tech Launchpad',
    default: 'Shreeji I-Tech Launchpad - Empowering IT Students',
  },
  description:
    'Public gateway for IT students to discover technology, workshops, and our 10-Day Career Foundation Program.',
  openGraph: {
    title: 'Shreeji I-Tech Launchpad',
    description: 'Empowering IT students with industry-relevant training and career guidance.',
    url: 'https://shreeji-itech.com', // Placeholder
    siteName: 'Shreeji I-Tech Launchpad',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
