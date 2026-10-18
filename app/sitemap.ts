import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/projects/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/blog/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE.url}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const projects: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = POSTS_SORTED.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...base, ...projects, ...posts];
}