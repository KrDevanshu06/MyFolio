/**
 * Centralized Site Configuration
 * Single source of truth for URLs, metadata, and constants
 */

export const SITE_CONFIG = {
  // Primary domain - fetched from environment variable
  // Update NEXT_PUBLIC_SITE_URL in .env.local when deploying
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://krdevanshu06.vercel.app',
  
  // Site metadata
  name: 'Devanshu Kumar Prasad',
  shortName: 'KrDevanshu06',
  title: 'Devanshu Kumar Prasad | AI & Full Stack Engineer',
  description: 'Portfolio of a Computer Science Engineer from Jamshedpur. Specializing in AI/ML, Data Science, and Distributed Systems.',
  
  // Author information
  author: {
    name: 'Devanshu Kumar Prasad',
    twitter: '@krdevanshu06',
    github: 'https://github.com/krdevanshu06',
    linkedin: 'https://linkedin.com/in/krdevanshu06',
  },
  
  // Keywords for SEO
  keywords: [
    'Python',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science',
    'TensorFlow',
    'Full Stack Developer',
    'Backend Engineer',
    'Devanshu Kumar Prasad',
    'KrDevanshu06',
  ],
};
