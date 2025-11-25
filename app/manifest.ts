import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} Portfolio - Full Stack & ML Engineer`,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
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
