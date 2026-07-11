'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CheckCircle2,
  MonitorPlay,
  MessageSquare,
  FileBadge,
  Compass,
  Eye,
  Briefcase,
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  mobileNumber: z.string().min(10, 'Please enter a valid mobile number.'),
  collegeName: z.string().min(2, 'College name is required.'),
  course: z.string().min(1, 'Please select a course.'),
  semester: z.string().min(1, 'Please select your current semester/year.'),
  domain: z.string().min(1, 'Please select an area of interest.'),
  linkedIn: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  github: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

const benefits = [
  { icon: MonitorPlay, label: '10-Day Online Training' },
  { icon: MessageSquare, label: 'Discord Learning Community' },
  { icon: FileBadge, label: 'Digital Certificate' },
  { icon: Compass, label: 'Career Guidance' },
  { icon: Eye, label: 'IT Industry Awareness' },
  { icon: Briefcase, label: 'Paid Internship Opportunity Info' },
];

export function RegisterFormSection() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
      collegeName: '',
      course: '',
      semester: '',
      domain: '',
      linkedIn: '',
      github: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // MVP: Simulate API request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Submitted (MVP Mode)', values);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Benefits Sidebar */}
          <div className="order-2 space-y-8 lg:order-1 lg:col-span-1">
            <div className="bg-primary/5 border-primary/10 rounded-3xl border p-8">
              <h3 className="mb-6 text-xl font-bold">Program Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{benefit.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-card rounded-3xl border p-8 shadow-sm">
              <h3 className="mb-2 font-bold">Need help?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                If you have any questions regarding the registration process, please contact our
                support team.
              </p>
              <a href="/contact" className="text-primary text-sm font-semibold hover:underline">
                Contact Support &rarr;
              </a>
            </div>
          </div>

          {/* Registration Form */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="bg-card rounded-3xl border p-6 shadow-sm sm:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Registration Successful!</h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for joining the 10-Day Career Foundation Program. You will receive
                    further instructions through email shortly.
                  </p>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobileNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="collegeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>College Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your College/University" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select course" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="bca">BCA</SelectItem>
                                <SelectItem value="mca">MCA</SelectItem>
                                <SelectItem value="btech">B.Tech (IT/CS)</SelectItem>
                                <SelectItem value="bsc">B.Sc (IT)</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="semester"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Semester/Year *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select semester/year" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sem1">Semester 1</SelectItem>
                                <SelectItem value="sem2">Semester 2</SelectItem>
                                <SelectItem value="sem3">Semester 3</SelectItem>
                                <SelectItem value="sem4">Semester 4</SelectItem>
                                <SelectItem value="sem5">Semester 5</SelectItem>
                                <SelectItem value="sem6">Semester 6</SelectItem>
                                <SelectItem value="sem7">Semester 7</SelectItem>
                                <SelectItem value="sem8">Semester 8</SelectItem>
                                <SelectItem value="completed">Completed/Fresher</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="domain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interested Domain *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your area of interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="frontend">Frontend Development</SelectItem>
                              <SelectItem value="backend">Backend Development</SelectItem>
                              <SelectItem value="fullstack">Fullstack Development</SelectItem>
                              <SelectItem value="mobile">Mobile App Development</SelectItem>
                              <SelectItem value="uiux">UI/UX Design</SelectItem>
                              <SelectItem value="undecided">Not sure yet / Undecided</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 border-t pt-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn URL (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://linkedin.com/in/..." {...field} />
                            </FormControl>
                            <FormDescription>If you already have a profile.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>GitHub URL (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://github.com/..." {...field} />
                            </FormControl>
                            <FormDescription>If you already have a profile.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Registering...
                          </div>
                        ) : (
                          'Complete Registration'
                        )}
                      </Button>
                      <p className="text-muted-foreground mt-4 text-center text-xs">
                        By registering, you agree to our terms and conditions. No payment is
                        required for the foundation program.
                      </p>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
