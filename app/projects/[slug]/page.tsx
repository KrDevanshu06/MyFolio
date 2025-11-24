import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/lib/project';
import { ArrowLeft, Calendar, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavHeader } from '@/components/nav-header';
import { ScrollProgress } from '@/components/scroll-progress';
import { SiteFooter } from '@/components/site-footer';
import 'katex/dist/katex.min.css'; // Import Math Styles
import 'highlight.js/styles/github-dark.css'; // Import Code Highlight Styles

// Generate static params for export
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const { content, frontmatter } = await getProjectBySlug(params.slug);

    return (
      <div className="min-h-screen bg-slate-950 selection:bg-teal-500/20">
        <ScrollProgress />
        <NavHeader />
        
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link href="/#research" className="inline-flex items-center text-sm text-slate-500 hover:text-teal-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Index
            </Link>

            {/* Paper Header */}
            <header className="mb-12 border-b border-slate-800 pb-12">
              <div className="flex gap-2 mb-6">
                {frontmatter.tech?.map((t: string) => (
                  <Badge key={t} variant="outline" className="border-slate-700 text-slate-400 font-mono text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6 leading-tight">
                {frontmatter.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-6 text-sm font-mono text-slate-500 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {frontmatter.date}
                </div>
                {frontmatter.repo && (
                   <a href={frontmatter.repo} target="_blank" className="flex items-center hover:text-teal-400 transition-colors">
                     <Github className="w-4 h-4 mr-2" />
                     Repository Protocol
                   </a>
                )}
              </div>

              {/* The "Abstract" Block */}
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg border-l-4 border-l-teal-500">
                <span className="font-mono text-xs text-teal-500 uppercase tracking-widest block mb-2">Abstract</span>
                <p className="font-sans text-slate-300 leading-relaxed italic">
                  {frontmatter.abstract}
                </p>
              </div>
            </header>

            {/* MDX Content Area */}
            <article className="prose prose-invert prose-slate max-w-none">
              {content}
            </article>
            
            <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
               <span className="font-mono text-xs text-slate-600">End of Document</span>
               <Button variant="outline" className="border-slate-700 text-slate-300">
                  Next Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
               </Button>
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
