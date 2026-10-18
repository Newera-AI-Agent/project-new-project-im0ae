#!/usr/bin/env node
/**
 * Scaffold a new SEO blog post for lib/blog.ts.
 *
 * The blog lives in a typed TypeScript module (lib/blog.ts) so every post is
 * statically rendered and indexable. This helper prints a correctly-shaped
 * `Post` object to stdout (or writes it to work/new-post.txt) with the SEO
 * fields pre-filled, so a daily post is a paste-and-fill job rather than a
 * guess at the schema.
 *
 * Usage:
 *   node scripts/new-post.mjs "How to pick a free 2FA app" --tag security
 *   node scripts/new-post.mjs --slug my-post --date 2026-10-19 > work/new-post.txt
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const args = process.argv.slice(2);
const flags = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    flags[args[i].slice(2)] = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true;
  } else {
    positional.push(args[i]);
  }
}

const title = positional.join(' ') || flags.title;
if (!title) {
  console.error('new-post: pass a title, e.g. node scripts/new-post.mjs "My guide"');
  process.exit(1);
}

const slug =
  flags.slug ||
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
const date = flags.date || new Date().toISOString().slice(0, 10);
const tags = String(flags.tag || 'seo,guides')
  .split(',')
  .map((t) => t.trim())
  .filter(Boolean);

const post = {
  slug,
  title,
  description: `${title} — a practical, no-fluff guide with real comparisons and steps you can follow today.`,
  date,
  updated: date,
  author: 'Naman Soni',
  tags,
  readingMinutes: 7,
  sections: [
    {
      heading: 'Why this matters',
      body: [
        'Two or three sentences on the problem, who hits it and why the obvious answer is usually wrong.',
        'One concrete number or specific example. No invented statistics.',
      ],
    },
    {
      heading: 'The options, compared',
      body: [
        '- Option one — what it is, who it suits, the trade-off.',
        '- Option two — what it is, who it suits, the trade-off.',
        '- Option three — what it is, who it suits, the trade-off.',
      ],
    },
    {
      heading: 'A workflow that actually holds up',
      body: [
        'Numbered, reproducible steps a reader can follow end to end.',
        'Note the failure mode at each step so the guide is honest.',
      ],
    },
    {
      heading: 'How to choose one',
      body: ['A short decision rule keyed to the reader, not to the tool.'],
    },
  ],
  faq: [
    { q: 'A real question people search for?', a: 'A direct two-sentence answer.' },
    { q: 'Second real question?', a: 'A direct two-sentence answer.' },
  ],
  related: [],
};

const asTs = `  {\n${JSON.stringify(post, null, 2)
  .split('\n')
  .map((l) => `  ${l}`)
  .join('\n')}\n  },\n`;

mkdirSync(resolve(ROOT, 'work'), { recursive: true });
const out = resolve(ROOT, 'work', `new-post-${slug}.txt`);
writeFileSync(out, asTs, 'utf8');

console.log(`new-post: template written to work/new-post-${slug}.txt`);
console.log(`new-post: paste it into the POSTS array in lib/blog.ts, then run \`npm run build\`.`);
console.log('new-post: gen-static.mjs will reject the build if the post is under 400 words.');
console.log(`\nSlug: ${slug}\nDate: ${date}\nTags: ${tags.join(', ')}`);