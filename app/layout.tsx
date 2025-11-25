import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import { ContextMenu } from "@/components/context-menu";
import { PersonJsonLd } from "@/components/json-ld";
import { SITE_CONFIG } from '@/lib/config';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains' 
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url as string),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author.name }],
  creator: SITE_CONFIG.author.name,
  publisher: SITE_CONFIG.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url as string,
    title: SITE_CONFIG.title,
    description: "Engineering robust systems and exploring the frontiers of artificial intelligence.",
    siteName: `${SITE_CONFIG.name} Portfolio`,
    images: [
      {
        url: "/api/og?title=Devanshu&type=Portfolio&tech=AI%20%26%20Systems",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: "Building intelligent systems with Python, TensorFlow, and Cloud Infrastructure.",
    creator: SITE_CONFIG.author.twitter,
    images: ["/api/og?title=Devanshu&type=Portfolio&tech=AI%20%26%20Systems"],
  },
  verification: {
    google: 'UoBlcVRil-TaV4LWGgip-9vf6caN9OuGVqONvUl9_xE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
          integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(
        inter.variable, 
        playfair.variable, 
        jetbrains.variable,
        "bg-background text-foreground min-h-screen"
      )}>
        <PersonJsonLd />
        <ContextMenu />
        {children}
        <Toaster position="bottom-right" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
