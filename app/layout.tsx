import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import { ContextMenu } from "@/components/context-menu";
import { PersonJsonLd } from "@/components/json-ld";

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
  title: 'Devanshu Kumar Prasad | AI & Full Stack Engineer',
  description: 'Portfolio of a Computer Science Engineer from Jamshedpur. Specializing in AI/ML, Data Science, and Distributed Systems.',
  keywords: ['Python', 'Machine Learning', 'Artificial Intelligence', 'Data Science', 'TensorFlow', 'Devanshu Kumar Prasad'],
  authors: [{ name: 'Devanshu Kumar Prasad' }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krdevanshu.com",
    title: "Devanshu Kumar Prasad | Kinetic Intellect",
    description: "Engineering robust systems and exploring the frontiers of artificial intelligence.",
    siteName: "Devanshu Kumar Prasad Portfolio",
    images: [
      {
        url: "/api/og?title=Devanshu&type=Portfolio&tech=AI%20%26%20Systems",
        width: 1200,
        height: 630,
        alt: "Devanshu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanshu Kumar Prasad | AI & Systems",
    description: "Building intelligent systems with Python, TensorFlow, and Cloud Infrastructure.",
    creator: "@krdevanshu06", 
    images: ["/api/og?title=Devanshu&type=Portfolio&tech=AI%20%26%20Systems"],
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
      </body>
    </html>
  );
}
