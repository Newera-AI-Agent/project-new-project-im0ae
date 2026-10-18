#!/usr/bin/env node
/**
 * prebuild step.
 *
 * 1. Runs data sanity checks over lib/blog.ts + lib/projects.ts (imported via
 *    Node's native TypeScript stripping — Node >= 22.6).
 * 2. Writes the IndexNow verification key file into public/ so the static
 *    export serves it at /<key>.txt (required before submitting URLs to
 *    IndexNow / Bing / Yandex).
 *
 * It intentionally does NOT generate llms.txt, rss.xml or feed.json — those
 * are App Router route handlers rendered at build time (see app/llms.txt,
 * app/rss.xml, app/feed.json) so they are always in sync with lib/.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const { PROJECTS, CATEGORY_ORDER, PROJECTS_BY_CATEGORY } = await import('../lib/projects.ts');
const { POSTS_SORTED, allPostSlugs, allTags } = await import('../lib/blog.ts');

let errors = 0;
const fail = (msg) => {
  errors += 1;
  console.error('  ✗ ' + msg);
};
const ok = (msg) => console.log('  ✓ ' + msg);

console.log('gen-static: data checks');

// --- projects -------------------------------------------------------------
const slugs = new Set();
for (const p of PROJECTS) {
  if (slugs.has(p.slug)) fail(`duplicate project slug: ${p.slug}`);
  slugs.add(p.slug);
  if (!p.url.startsWith('https://')) fail(`project ${p.slug} url is not https: ${p.url}`);
  if (!p.description?.length) fail(`project ${p.slug} has no description paragraphs`);
  if (!p.features?.length) fail(`project ${p.slug} has no features`);
  if (!p.keywords?.length) fail(`project ${p.slug} has no keywords`);
}
ok(`${PROJECTS.length} projects, ${slugs.size} unique slugs`);

const byCat = CATEGORY_ORDER.reduce((n, c) => n + PROJECTS_BY_CATEGORY[c].length, 0);
if (byCat !== PROJECTS.length) fail(`category buckets hold ${byCat} of ${PROJECTS.length} projects`);
else ok(`${CATEGORY_ORDER.length} categories cover every project`);

// --- posts ----------------------------------------------------------------
const postSlugs = allPostSlugs();
if (new Set(postSlugs).size !== postSlugs.length) fail('duplicate blog slug');
for (const p of POSTS_SORTED) {
  const words = p.sections.reduce(
    (n, s) => n + s.body.reduce((m, b) => m + b.split(/\s+/).filter(Boolean).length, 0),
    0,
  );
  if (words < 400) fail(`post ${p.slug} is thin: ${words} words`);
  for (const rel of p.related ?? []) {
    if (!postSlugs.includes(rel)) fail(`post ${p.slug} links to unknown related slug ${rel}`);
  }
}
ok(`${POSTS_SORTED.length} posts, ${allTags().length} tags, all >= 400 words`);

// --- IndexNow key ---------------------------------------------------------
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '0cf9954e1f987a7f95dfa7008dc07d78';
const keyPath = resolve(root, 'public', `${INDEXNOW_KEY}.txt`);
mkdirSync(dirname(keyPath), { recursive: true });
writeFileSync(keyPath, INDEXNOW_KEY + '\n', 'utf8');
ok(`IndexNow key file -> public/${INDEXNOW_KEY}.txt`);

if (errors > 0) {
  console.error(`\ngen-static: ${errors} problem(s) — refusing to build.`);
  process.exit(1);
}
console.log('gen-static: OK');