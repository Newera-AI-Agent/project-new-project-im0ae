#!/usr/bin/env node
/**
 * IndexNow submitter for the built static export.
 *
 * Reads every <loc> from out/sitemap.xml and submits the URL set to the
 * IndexNow endpoints (Bing, Yandex, Seznam, Naver) plus pings the sitemap at
 * Google and Bing. The key file is written into public/ and out/ by
 * scripts/gen-static.mjs, so the verification key is always reachable at
 * SITE_URL/<key>.txt.
 *
 * Usage:
 *   npm run indexnow                 # submit every URL in out/sitemap.xml
 *   SITE_URL=https://x.pages.dev npm run indexnow
 *   INDEXNOW_KEY=... npm run indexnow
 *   DRY_RUN=1 npm run indexnow       # print only, no network calls
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const SITEMAP = resolve(ROOT, 'out/sitemap.xml');

const KEY = process.env.INDEXNOW_KEY || '0cf9954e1f987a7f95dfa7008dc07d78';
const SITE_URL = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://namansoni-hub.pages.dev'
).replace(/\/$/, '');

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

/** Extract <loc> values from a sitemap document. */
function readUrls(path) {
  if (!existsSync(path)) {
    console.error(`indexnow: ${path} not found — run \`npm run build\` first.`);
    process.exit(1);
  }
  const xml = readFileSync(path, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(urls)];
}

async function post(url, body, headers = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
    signal: AbortSignal.timeout(20000),
  });
  return { status: res.status, text: (await res.text().catch(() => '')).slice(0, 300) };
}

async function tryEndpoint(name, url, payload, waitMs) {
  // Retry with exponential backoff — IndexNow endpoints are flaky under load.
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const { status, text } = await post(url, payload);
      // 200/202 = accepted, 400 = bad payload, 403 = key not valid, 422 = urls don't match host
      if (status === 200 || status === 202) {
        console.log(`  ✓ ${name} accepted ${payload.urlList.length} url(s) (${status})`);
        return true;
      }
      console.log(`  ! ${name} attempt ${attempt}: HTTP ${status}${text ? ` — ${text}` : ''}`);
    } catch (err) {
      console.log(`  ! ${name} attempt ${attempt}: ${err.message}`);
    }
    if (attempt < 4) await new Promise((r) => setTimeout(r, waitMs * attempt));
  }
  console.log(`  ✗ ${name} failed after 4 attempts`);
  return false;
}

const urls = readUrls(SITEMAP);
console.log(`indexnow: ${urls.length} url(s) from out/sitemap.xml`);
console.log(`indexnow: host ${SITE_URL}`);
console.log(`indexnow: keyLocation ${SITE_URL}/${KEY}.txt`);

if (process.env.DRY_RUN === '1') {
  for (const u of urls) console.log(`  - ${u}`);
  process.exit(0);
}

// IndexNow accepts up to 10,000 urls per request — chunk at 500 for safety.
const CHUNK = 500;
const chunks = [];
for (let i = 0; i < urls.length; i += CHUNK) chunks.push(urls.slice(i, i + CHUNK));

let ok = 0;
for (const chunk of chunks) {
  const payload = {
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: chunk,
  };
  for (const endpoint of ENDPOINTS) {
    const accepted = await tryEndpoint(endpoint, endpoint, payload, 1500);
    if (accepted) ok++;
  }
}

// Sitemap pings (Google has historically honoured this; harmless if ignored).
if (process.env.SKIP_PINGS !== '1') {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  const pings = [
    ['Google sitemap ping', `https://www.google.com/ping?sitemap=${sitemapUrl}`],
    ['Bing sitemap ping', `https://www.bing.com/ping?sitemap=${sitemapUrl}`],
  ];
  for (const [name, ping] of pings) {
    try {
      const res = await fetch(ping, { signal: AbortSignal.timeout(15000) });
      console.log(`  ${res.ok ? '✓' : '!'} ${name}: HTTP ${res.status}`);
    } catch (err) {
      console.log(`  ! ${name}: ${err.message}`);
    }
  }
}

console.log(`\nindexnow: done — ${ok} accepted submission(s).`);
