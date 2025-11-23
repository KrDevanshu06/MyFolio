import { MDXRemote } from 'next-mdx-remote/rsc'
import { readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export interface ProjectFrontmatter {
  title: string
  subtitle: string
  date: string
  status: 'Published' | 'In Progress' | 'Draft'
  category: 'Machine Learning' | 'Backend Development' | 'Research'
  tags: string[]
  abstract?: string
  github?: string
  demo?: string
}

export interface ProjectData {
  slug: string
  content: string
  frontmatter: ProjectFrontmatter
}

export function getProjectBySlug(slug: string): ProjectData {
  const projectsDirectory = join(process.cwd(), 'content/projects')
  const fullPath = join(projectsDirectory, `${slug}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    frontmatter: data as ProjectFrontmatter
  }
}

// Create a separate component for rendering MDX content
export function ProjectContent({ content }: { content: string }) {
  return (
    <MDXRemote
      source={content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex, rehypeHighlight],
        },
      }}
      components={{
        Badge,
        Separator,
        // Map standard HTML to Tailwind classes for that "Paper" look
        h1: (props: any) => <h1 className="font-serif text-3xl text-slate-100 mt-8 mb-4" {...props} />,
        h2: (props: any) => <h2 className="font-serif text-2xl text-slate-100 mt-8 mb-4 border-b border-slate-800 pb-2" {...props} />,
        h3: (props: any) => <h3 className="font-serif text-xl text-slate-200 mt-6 mb-3" {...props} />,
        p: (props: any) => <p className="font-sans text-slate-400 leading-7 mb-4" {...props} />,
        ul: (props: any) => <ul className="list-disc list-inside text-slate-400 mb-4 ml-4" {...props} />,
        ol: (props: any) => <ol className="list-decimal list-inside text-slate-400 mb-4 ml-4" {...props} />,
        li: (props: any) => <li className="mb-1" {...props} />,
        code: (props: any) => <code className="font-mono text-teal-400 bg-slate-900 px-1 py-0.5 rounded text-sm" {...props} />,
        pre: (props: any) => <pre className="bg-slate-950 border border-slate-800 p-4 rounded-lg overflow-x-auto mb-6" {...props} />,
        blockquote: (props: any) => <blockquote className="border-l-4 border-teal-400 pl-4 italic text-slate-300 mb-4" {...props} />,
        strong: (props: any) => <strong className="text-slate-200 font-semibold" {...props} />,
        em: (props: any) => <em className="text-slate-300 italic" {...props} />,
        table: (props: any) => (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-slate-700" {...props} />
          </div>
        ),
        thead: (props: any) => <thead className="bg-slate-900" {...props} />,
        th: (props: any) => <th className="border border-slate-700 px-4 py-2 text-left text-slate-200 font-semibold" {...props} />,
        td: (props: any) => <td className="border border-slate-700 px-4 py-2 text-slate-400" {...props} />,
        tr: (props: any) => <tr className="hover:bg-slate-900/50" {...props} />,
      }}
    />
  )
}
