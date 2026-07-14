import * as React from 'react';
import { Metadata } from 'next';
import { AdminLoginForm } from '@/components/sections/admin/login/admin-login-form';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Login | SKILLFORGE Launchpad',
  description: 'Secure login portal for Shreeji I-Tech administrators.',
};

export default function AdminLoginPage() {
  return (
    <div className="bg-surface flex min-h-screen flex-col items-center justify-center p-4">
      {/* Background decoration */}
      <div className="bg-primary/5 absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="mb-8 w-full max-w-md">
        <Link 
          href="/" 
          className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Public Website
        </Link>
      </div>

      <AdminLoginForm />
      
      <p className="text-muted-foreground mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} Shreeji I-Tech. All rights reserved.
      </p>
    </div>
  );
}
