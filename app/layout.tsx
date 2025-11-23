import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

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
  title: 'Portfolio | Kinetic Intellect',
  description: 'Full Stack Engineering & Machine Learning Research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable, 
        playfair.variable, 
        jetbrains.variable,
        "bg-background text-foreground min-h-screen"
      )}>
        {children}
      </body>
    </html>
  );
}
