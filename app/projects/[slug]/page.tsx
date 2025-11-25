import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjects } from '@/lib/project';
import { ArrowLeft, Calendar, Github, ArrowUpRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavHeader } from '@/components/nav-header';
import { ScrollProgress } from '@/components/scroll-progress';
import { SiteFooter } from '@/components/site-footer';
import { ProjectJsonLd } from '@/components/json-ld';
import { TableOfContents } from '@/components/table-of-contents';
import { ScrollToTop } from '@/components/scroll-to-top';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';

// Generate static params for export
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { frontmatter } = await getProjectBySlug(params.slug);
  
  const techString = frontmatter.tech?.slice(0, 3).join(' • ') || 'Engineering';
  
  const ogUrl = new URL('https://krdevanshu.com/api/og'); 
  ogUrl.searchParams.set('title', frontmatter.title);
  ogUrl.searchParams.set('type', 'Case Study');
  ogUrl.searchParams.set('tech', techString);

  return {
    title: `${frontmatter.title} | Devanshu Kumar Prasad`,
    description: frontmatter.abstract,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.abstract,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: ['Devanshu Kumar Prasad'],
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.abstract,
      images: [ogUrl.toString()],
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const { content, frontmatter } = await getProjectBySlug(params.slug);

    return (
      <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
        <ProjectJsonLd project={frontmatter} slug={params.slug} />
        <ScrollProgress />
        <ScrollToTop />
        <NavHeader />
        
        <main className="pt-32 pb-24 px-6">
          {/* LAYOUT UPDATE: Increased max-width to 6xl to accommodate the sidebar 
             while keeping the reading column legible.
          */}
          <div className="max-w-6xl mx-auto">
            {/* Back Link - Updated to point to #projects section */}
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-sm text-slate-500 hover:text-teal-400 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Works
            </Link>

            {/* Header Section */}
            <header className="mb-16 border-b border-slate-800 pb-12">
              <div className="flex gap-2 mb-6 flex-wrap">
                {frontmatter.tech?.map((t: string) => (
                  <Badge key={t} variant="outline" className="border-slate-700 text-slate-400 font-mono text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-slate-100 mb-8 leading-tight max-w-4xl">
                {frontmatter.title}
              </h1>

              {/* Project Banner Image */}
              {frontmatter.banner && (
                <div className="relative w-full aspect-video mb-10 rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                  <Image 
                    src={frontmatter.banner} 
                    alt={frontmatter.title} 
                    fill 
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                    priority
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-slate-500 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {frontmatter.date}
                </div>
                {frontmatter.repo && (
                   <a href={frontmatter.repo} target="_blank" className="flex items-center hover:text-teal-400 transition-colors">
                     <Github className="w-4 h-4 mr-2" />
                     Repository
                   </a>
                )}
                {frontmatter.demo && (
                   <a href={frontmatter.demo} target="_blank" className="flex items-center hover:text-teal-400 transition-colors">
                     <Globe className="w-4 h-4 mr-2" />
                     Live System
                   </a>
                )}
              </div>

              {/* The "Abstract" Block */}
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg border-l-4 border-l-teal-500 max-w-3xl">
                <span className="font-mono text-xs text-teal-500 uppercase tracking-widest block mb-2">Abstract</span>
                <p className="font-sans text-slate-300 leading-relaxed italic">
                  {frontmatter.abstract}
                </p>
              </div>
            </header>

            {/* GRID LAYOUT: Main Content + Sticky TOC */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Article Column (8 cols) */}
              <div className="lg:col-span-8 xl:col-span-9">
                <article className="prose prose-invert prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:font-serif prose-headings:text-slate-100 prose-p:text-slate-400 prose-li:text-slate-400">
                  {content}
                </article>

                <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-600">End of Document</span>
                  <Button variant="outline" className="border-slate-700 text-slate-300">
                    Next Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sidebar Column (4 cols) - Hidden on mobile */}
              <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
                <TableOfContents />
              </div>

            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
