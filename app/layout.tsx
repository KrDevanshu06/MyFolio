import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import { ContextMenu } from "@/components/context-menu";

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
  title: 'KrDevanshu06 | Full Stack & ML Engineer',
  description: 'Portfolio of a Computer Science Engineer from NIT Jamshedpur. Specializing in Distributed Systems, AI/ML, and Algorithmic Optimization.',
  keywords: ['Next.js', 'React', 'Machine Learning', 'NIT Jamshedpur', 'Full Stack', 'Portfolio'],
  authors: [{ name: 'KrDevanshu06' }],
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
        <ContextMenu />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
