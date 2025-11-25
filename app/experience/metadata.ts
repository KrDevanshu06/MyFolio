import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export const experienceMetadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in AI/ML, Data Science, and Software Engineering. Internships at Infotact Solutions, Edunet Foundation with Shell, Microsoft, and SAP.',
  keywords: [
    'Data Science Internship',
    'AI Internship',
    'Machine Learning Experience',
    'Python Developer',
    'TensorFlow',
    'Computer Vision',
  ],
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Experience | Devanshu Kumar Prasad',
    description: 'Professional journey in AI/ML and Data Science with leading organizations.',
    type: 'website',
    url: `${SITE_CONFIG.url}/experience`,
    images: [
      {
        url: '/api/og?title=Experience&type=Career&tech=AI%20%26%20ML',
        width: 1200,
        height: 630,
        alt: 'Professional Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Devanshu Kumar Prasad',
    description: 'Professional journey in AI/ML and Data Science.',
    creator: SITE_CONFIG.author.twitter,
    images: ['/api/og?title=Experience&type=Career&tech=AI%20%26%20ML'],
  },
};
