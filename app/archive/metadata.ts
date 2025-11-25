import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export const archiveMetadata: Metadata = {
  title: 'Archive',
  description: 'Comprehensive archive of projects, achievements, certifications, and technical contributions. Explore hackathon wins, open-source tools, and AI research initiatives.',
  keywords: [
    'Project Archive',
    'Hackathon Winner',
    'Open Source Projects',
    'Certifications',
    'AI Projects',
    'Data Science Portfolio',
  ],
  alternates: {
    canonical: '/archive',
  },
  openGraph: {
    title: 'Archive | Devanshu Kumar Prasad',
    description: 'Complete archive of projects, awards, and technical achievements.',
    type: 'website',
    url: `${SITE_CONFIG.url}/archive`,
    images: [
      {
        url: '/api/og?title=Archive&type=Portfolio&tech=Projects%20%26%20Awards',
        width: 1200,
        height: 630,
        alt: 'Project Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archive | Devanshu Kumar Prasad',
    description: 'Complete archive of projects, awards, and achievements.',
    creator: SITE_CONFIG.author.twitter,
    images: ['/api/og?title=Archive&type=Portfolio&tech=Projects%20%26%20Awards'],
  },
};
