#!/usr/bin/env node
/**
 * postbuild step — verifies the static export actually contains everything the
 * deploy needs. Fails the build if a required artefact is missing or a page
 * looks empty, so a broken export can never reach Cloudflare Pages.
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = resolve(root, 'out');

const { PROJECTS } = await import('../lib/projects.ts');
const { POSTS_SORTED } = await import('../lib/blog.ts');

let errors = 0;
const fail = (m) => {
  errors += 1;
  console.error('  ✗ ' + m);
};
const ok = (m) => console.log('  ✓ ' + m);

if (!existsSync(out)) {
  console.error('out/ does not exist — did the export run?');
  process.exit(1);
}

const files = [
  'index.html',
  'projects/index.html',
  'blog/index.html',
  'about/index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'rss.xml',
  'feed.json',
  'icon.svg',
  'og-image.png',
];

console.log('verify-output: required files');
for (const f of files) {
  const p = resolve(out, f);
  if (!existsSync(p)) {
    fail(`missing out/${f}`);
    continue;
  }
  const size = statSync(p).size;
  if (size < 40) fail(`out/${f} is suspiciously small (${size} bytes)`);
  else ok(`out/${f} (${size}B)`);
}

console.log('verify-output: pages');
const pages = [
  ...PROJECTS.map((p) => [`projects/${p.slug}/index.html`, p.name]),
  ...POSTS_SORTED.map((p) => [`blog/${p.slug}/index.html`, p.title]),
];
for (const [rel, title] of pages) {
  const p = resolve(out, rel);
  if (!existsSync(p)) {
    fail(`missing out/${rel} (${title})`);
    continue;
  }
  const html = readFileSync(p, 'utf8');
  if (html.length < 2000) fail(`out/${rel} looks empty (${html.length}B)`);
  if (!html.includes('<title>')) fail(`out/${rel} has no <title>`);
  if (!html.includes('application/ld+json')) fail(`out/${rel} has no JSON-LD`);
}
ok(`${pages.length} detail pages present with title + JSON-LD`);

console.log('verify-output: sitemap coverage');
const sm = readFileSync(resolve(out, 'sitemap.xml'), 'utf8');
for (const rel of [
  '',
  'projects/',
  'blog/',
  'about/',
  ...PROJECTS.map((p) => `projects/${p.slug}/`),
  ...POSTS_SORTED.map((p) => `blog/${p.slug}/`),
]) {
  if (!sm.includes(`<loc>`) || !new RegExp(`<loc>[^<]*/${rel.replace(/\/$/, '')}/?</loc>`).test(sm)) {
    if (rel === '') {
      if (!/<loc>[^<]*<\/loc>/.test(sm)) fail('sitemap has no <loc> entries');
      continue;
    }
    fail(`sitemap missing entry for /${rel}`);
  }
}
ok('sitemap lists home, hub pages and every detail page');

console.log('verify-output: llms.txt');
const llms = readFileSync(resolve(out, 'llms.txt'), 'utf8');
if (!llms.startsWith('# ')) fail('llms.txt does not start with a heading');
if (!llms.includes('## Products by category')) fail('llms.txt has no product section');
ok(`llms.txt is ${llms.split('\n').length} lines`);

if (errors > 0) {
  console.error(`\nverify-output: ${errors} problem(s) in the export.`);
  process.exit(1);
}
console.log('\nverify-output: export is complete ✓');