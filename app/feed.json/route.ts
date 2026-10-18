import { SITE, absoluteUrl } from '@/lib/site';
import { POSTS_SORTED } from '@/lib/blog';
import { PROJECTS } from '@/lib/projects';

export const dynamic = 'force-static';

export function GET() {
  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SITE.title,
    home_page_url: absoluteUrl('/'),
    feed_url: absoluteUrl('/feed.json'),
    description: SITE.description,
    language: 'en',
    authors: [{ name: SITE.name, url: SITE.github }],
    items: POSTS_SORTED.map((p) => ({
      id: absoluteUrl(`/blog/${p.slug}/`),
      url: absoluteUrl(`/blog/${p.slug}/`),
      title: p.title,
      summary: p.description,
      date_published: new Date(p.date).toISOString(),
      date_modified: new Date(p.updated ?? p.date).toISOString(),
      tags: p.tags,
      authors: [{ name: p.author }],
    })),
    hubs: [{ type: 'sitemap', url: absoluteUrl('/sitemap.xml') }],
    _products: PROJECTS.map((p) => ({
      name: p.name,
      url: p.url,
      details: absoluteUrl(`/projects/${p.slug}/`),
      category: p.category,
      summary: p.tagline,
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: { 'Content-Type': 'application/feed+json; charset=utf-8' },
  });
}
