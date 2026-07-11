export interface Workshop {
  id: string;
  collegeName: string;
  date: string;
  description: string;
  topics: string[];
  imageUrls: string[];
  videoUrls?: string[];
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 'ws-001',
    collegeName: 'Parul University',
    date: 'February 2024',
    description:
      'An interactive workshop introducing IT students to the modern software development landscape, focusing on industry expectations and practical skills.',
    topics: ['Industry Expectations', 'Career Opportunities', 'Modern Tech Stack'],
    imageUrls: ['/images/placeholder-workshop-1.svg', '/images/placeholder-workshop-2.svg'],
  },
  {
    id: 'ws-002',
    collegeName: 'ITM Vocational University',
    date: 'March 2024',
    description:
      'Hands-on session exploring real-world coding practices, version control with GitHub, and building a professional online presence.',
    topics: ['GitHub Basics', 'Professional Profile', 'Resume Building'],
    imageUrls: ['/images/placeholder-workshop-3.svg', '/images/placeholder-workshop-4.svg'],
  },
  {
    id: 'ws-003',
    collegeName: 'Sigma University',
    date: 'April 2024',
    description:
      'A deep dive into AI tools for developers, demonstrating how to leverage AI for productivity and problem-solving in software engineering.',
    topics: ['AI Awareness', 'Productivity Tools', 'Problem Solving'],
    imageUrls: ['/images/placeholder-workshop-5.svg', '/images/placeholder-workshop-6.svg'],
  },
];

export const WORKSHOP_STATS = {
  totalStudents: '[XX]+',
  collegesVisited: '[XX]+',
  workshopsConducted: '[XX]+',
};
