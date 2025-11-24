import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug'; // New import
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm'; // New import
import { MDXComponents } from './mdx-components';

const contentDir = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  // Guard clause if file doesn't exist
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project file not found: ${slug}`);
  }

  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<{
    title: string;
    subtitle?: string;
    abstract: string;
    date: string;
    tech?: string[];
    repo?: string;
    demo?: string;
    banner?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // Add remarkGfm here to support Tables, Strikethrough, etc.
        remarkPlugins: [remarkGfm, remarkMath],
        // Add rehypeSlug to generate IDs for headings (e.g. #introduction)
        // @ts-ignore - Types for rehype plugins can be strict, but this works at runtime
        rehypePlugins: [rehypeHighlight, rehypeKatex, rehypeSlug],
      },
    },
    components: MDXComponents as any,
  });

  return { content, frontmatter, slug };
}

export async function getAllProjects() {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}