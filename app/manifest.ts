import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KrDevanshu06 Portfolio - Full Stack & ML Engineer',
    short_name: 'KrDevanshu',
    description: 'Portfolio of a Computer Science Engineer from NIT Jamshedpur. Specializing in Distributed Systems, AI/ML, and Algorithmic Optimization.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617', // slate-950
    theme_color: '#2dd4bf', // teal-400
    orientation: 'portrait-primary',
    scope: '/',
    categories: ['portfolio', 'technology', 'education'],
    lang: 'en',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/favicon.svg', 
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
