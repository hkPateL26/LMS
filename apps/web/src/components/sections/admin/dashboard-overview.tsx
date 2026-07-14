'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Registrations',
    value: '2,845',
    icon: Users,
    trend: '+12% from last month',
  },
  {
    title: 'Workshops Conducted',
    value: '48',
    icon: GraduationCap,
    trend: '+3 this month',
  },
  {
    title: 'Upcoming Workshops',
    value: '5',
    icon: Calendar,
    trend: 'Next: Nirma University (Oct 12)',
  },
  {
    title: 'Website Visitors',
    value: '12.5k',
    icon: TrendingUp,
    trend: '+24% from last week',
  },
];

const recentActivity = [
  { id: 1, action: 'New registration', user: 'Rahul Sharma', time: '10 minutes ago' },
  { id: 2, action: 'Workshop scheduled', user: 'Gujarat University', time: '2 hours ago' },
  { id: 3, action: 'Testimonial added', user: 'Priya Patel', time: '5 hours ago' },
  { id: 4, action: 'New mentor profile', user: 'David Designer', time: '1 day ago' },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back to the Shreeji I-Tech Launchpad CMS.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="bg-secondary/10 flex h-9 w-9 items-center justify-center rounded-full">
                    <span className="text-secondary text-xs font-bold">
                      {activity.user.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.action}</p>
                    <p className="text-muted-foreground text-sm">{activity.user}</p>
                  </div>
                  <div className="ml-auto font-medium text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
             <div className="border border-border rounded-lg p-4 hover:bg-secondary/5 transition-colors cursor-pointer">
                <h3 className="font-semibold text-sm">Add New Workshop</h3>
                <p className="text-xs text-muted-foreground mt-1">Schedule an upcoming offline event.</p>
             </div>
             <div className="border border-border rounded-lg p-4 hover:bg-secondary/5 transition-colors cursor-pointer">
                <h3 className="font-semibold text-sm">Export Registrations</h3>
                <p className="text-xs text-muted-foreground mt-1">Download CSV for the upcoming batch.</p>
             </div>
             <div className="border border-border rounded-lg p-4 hover:bg-secondary/5 transition-colors cursor-pointer">
                <h3 className="font-semibold text-sm">Upload Gallery Photos</h3>
                <p className="text-xs text-muted-foreground mt-1">Add media from recent workshops.</p>
             </div>
             <div className="border border-border rounded-lg p-4 hover:bg-secondary/5 transition-colors cursor-pointer">
                <h3 className="font-semibold text-sm">Review Contact Inquiries</h3>
                <p className="text-xs text-muted-foreground mt-1">Respond to unread messages.</p>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
