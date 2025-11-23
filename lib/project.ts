import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { MDXComponents } from './mdx-components';

const contentDir = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<{
    title: string;
    subtitle?: string;
    abstract: string;
    date: string;
    status?: string;
    category?: string;
    tags?: string[];
    tech?: string[];
    repo?: string;
    github?: string;
    demo?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeHighlight, rehypeKatex],
      },
    },
    components: MDXComponents,
  });

  return { content, frontmatter, slug };
}

export async function getAllProjects() {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  return files.map((file) => file.replace('.mdx', ''));
}
