export interface Testimonial {
  id: string;
  studentName: string;
  collegeName: string;
  quote: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-001',
    studentName: 'Student Name',
    collegeName: 'Parul University',
    role: 'B.Tech IT Student',
    quote:
      'The workshop by Shreeji I-Tech opened my eyes to what the IT industry actually expects from us. It was incredibly practical and engaging.',
  },
  {
    id: 't-002',
    studentName: 'Student Name',
    collegeName: 'ITM Vocational University',
    role: 'BCA Student',
    quote:
      'Learning how to build a proper LinkedIn profile and GitHub repository has made me much more confident about applying for internships.',
  },
  {
    id: 't-003',
    studentName: 'Student Name',
    collegeName: 'Sigma University',
    role: 'Computer Science Student',
    quote:
      'The AI awareness session was fantastic. I now use these tools daily to improve my coding speed and understand complex concepts.',
  },
];
