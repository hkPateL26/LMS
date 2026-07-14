import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PolygonNetworkBackground } from '@/components/background/PolygonNetworkBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | SKILLFORGE Launchpad',
    default: 'SKILLFORGE Launchpad - Empowering IT Students',
  },
  description:
    'Public gateway for IT students to discover technology, workshops, and our 10-Day Career Foundation Program.',
  icons: {
    icon: '/skillforge_logo.png',
  },
  openGraph: {
    title: 'SKILLFORGE Launchpad',
    description: 'Empowering IT students with industry-relevant training and career guidance.',
    url: 'https://skillforge.com', // Placeholder
    siteName: 'SKILLFORGE Launchpad',
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
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-950`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PolygonNetworkBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
