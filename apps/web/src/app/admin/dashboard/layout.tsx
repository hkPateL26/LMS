import * as React from 'react';
import { Metadata } from 'next';
import { AdminLayout } from '@/components/layout/admin-layout';

export const metadata: Metadata = {
  title: 'Dashboard | Admin CMS',
  description: 'Manage Shreeji I-Tech Launchpad content and registrations.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
