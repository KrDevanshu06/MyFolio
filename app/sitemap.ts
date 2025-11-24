import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/project';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://krdevanshu.com'; // REPLACE with your actual domain
  const projects = await getAllProjects();

  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
