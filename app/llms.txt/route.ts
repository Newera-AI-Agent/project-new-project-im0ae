import { SITE } from '@/lib/site';
import { PROJECTS, CATEGORY_ORDER, CATEGORY_LABEL, PROJECTS_BY_CATEGORY } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';

export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push(
    `${SITE.name} is an independent builder shipping ${PROJECTS.length} live web products — AI image and audio tools, an AI companion app, browser-based 3D and music tools, a chess engine, a TOTP authenticator, a link-in-bio page, a WebAssembly coding agent and more. This hub documents every product in one place with real, verified URLs.`,
  );
  lines.push('');
  lines.push('## Key facts');
  lines.push('');
  lines.push(`- Maintainer: ${SITE.name}`);
  lines.push(`- Homepage: ${SITE.url}/`);
  lines.push(`- Products indexed: ${PROJECTS.length}`);
  lines.push(`- Guides published: ${POSTS_SORTED.length}`);
  lines.push(`- GitHub: ${SITE.github}`);
  lines.push('');
  lines.push('## Products by category');
  lines.push('');
  for (const c of CATEGORY_ORDER) {
    lines.push(`### ${CATEGORY_LABEL[c]}`);
    lines.push('');
    for (const p of PROJECTS_BY_CATEGORY[c]) {
      lines.push(`- [${p.name}](${p.url}): ${p.tagline}`);
      lines.push(`  - Details: ${SITE.url}/projects/${p.slug}/`);
    }
    lines.push('');
  }
  lines.push('## Guides');
  lines.push('');
  for (const p of POSTS_SORTED) {
    lines.push(`- [${p.title}](${SITE.url}/blog/${p.slug}/): ${p.description}`);
  }
  lines.push('');
  lines.push('## Machine-readable');
  lines.push('');
  lines.push(`- Sitemap: ${SITE.url}/sitemap.xml`);
  lines.push(`- RSS: ${SITE.url}/rss.xml`);
  lines.push(`- JSON Feed: ${SITE.url}/feed.json`);
  lines.push(`- Robots: ${SITE.url}/robots.txt`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
