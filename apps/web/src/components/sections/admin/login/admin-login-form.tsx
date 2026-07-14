'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Lock, Mail, ShieldCheck } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type FormValues = z.infer<typeof formSchema>;

export function AdminLoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    // Simulate authentication (Backend integration to be done later)
    setTimeout(() => {
      console.log('Login successful', data);
      setIsLoading(false);
      // Redirect to dashboard (to be built)
      router.push('/admin/dashboard');
    }, 1500);
  }

  return (
    <div className="bg-card border-border w-full max-w-md overflow-hidden rounded-2xl border shadow-xl">
      <div className="bg-primary/5 border-border border-b p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="text-primary h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Admin CMS</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Secure login for authorized personnel only.
        </p>
      </div>

      <div className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                      <Input
                        placeholder="admin@shreejiitech.com"
                        className="pl-10 h-10"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 h-10"
                        {...field}
                        disabled={isLoading}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-11"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Sign In to Dashboard'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
