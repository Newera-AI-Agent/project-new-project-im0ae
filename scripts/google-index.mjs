#!/usr/bin/env node
/**
 * Google Indexing API submitter (URL_UPDATED notifications).
 *
 * The Google Indexing API requires OAuth2 with a service account that has been
 * added as an Owner of the Search Console property. An API key alone cannot
 * authorise it — so this script signs a JWT with the service-account private
 * key and exchanges it for an access token, then calls
 *   POST https://indexing.googleapis.com/v3/urlNotifications:publish
 * for every URL in out/sitemap.xml.
 *
 * Provide credentials one of two ways:
 *   GOOGLE_SERVICE_ACCOUNT_JSON='{"client_email":"...","private_key":"..."}'
 *   GOOGLE_SERVICE_ACCOUNT_FILE=/path/to/service-account.json
 *
 * If neither is set the script explains what to configure and exits 0 (the
 * build/deploy pipeline is not blocked by a missing credential).
 *
 * Usage:
 *   npm run google-index
 *   DRY_RUN=1 npm run google-index
 *   LIMIT=5 npm run google-index     # only the first 5 urls
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createSign } from 'node:crypto';

const ROOT = resolve(import.meta.dirname, '..');
const SITEMAP = resolve(ROOT, 'out/sitemap.xml');
const SCOPE = 'https://www.googleapis.com/auth/indexing';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const PUBLISH_URL = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function loadCredentials() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  }
  if (process.env.GOOGLE_SERVICE_ACCOUNT_FILE) {
    return JSON.parse(readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_FILE, 'utf8'));
  }
  return null;
}

function readUrls() {
  if (!existsSync(SITEMAP)) {
    console.error('google-index: out/sitemap.xml not found — run `npm run build` first.');
    process.exit(1);
  }
  const xml = readFileSync(SITEMAP, 'utf8');
  return [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))];
}

async function getAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signingInput = `${header}.${claims}`;
  const signer = createSign('RSA-SHA256');
  signer.update(signingInput);
  const signature = base64url(signer.sign(creds.private_key));
  const assertion = `${signingInput}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
    signal: AbortSignal.timeout(20000),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`token exchange failed: HTTP ${res.status} ${JSON.stringify(json).slice(0, 400)}`);
  }
  return json.access_token;
}

async function publish(token, url, type = 'URL_UPDATED') {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(PUBLISH_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, type }),
        signal: AbortSignal.timeout(20000),
      });
      const text = (await res.text().catch(() => '')).slice(0, 300);
      if (res.ok) return { ok: true, status: res.status };
      // 429 = quota; back off and retry. Other 4xx are permanent.
      if (res.status === 429 || res.status >= 500) {
        await new Promise((r) => setTimeout(r, 2000 * attempt));
        continue;
      }
      return { ok: false, status: res.status, text };
    } catch (err) {
      if (attempt === 3) return { ok: false, status: 0, text: err.message };
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { ok: false, status: 429, text: 'quota/backoff exhausted' };
}

const urls = readUrls();
const limit = Number(process.env.LIMIT || urls.length);
const targets = urls.slice(0, limit);

console.log(`google-index: ${targets.length} url(s) queued from out/sitemap.xml`);

const creds = loadCredentials();
if (!creds || !creds.client_email || !creds.private_key) {
  console.log('\ngoogle-index: no service-account credentials found — skipping.');
  console.log('  The Google Indexing API needs OAuth2, not an API key:');
  console.log('    1. Google Cloud Console → create a service account → JSON key.');
  console.log('    2. Search Console → Settings → Users → add client_email as Owner.');
  console.log('    3. Export GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_FILE.');
  console.log('  1 of 3 done.');
} else {
  const token = await getAccessToken(creds);
  console.log(`google-index: access token acquired for ${creds.client_email}`);
  let ok = 0;
  for (const url of targets) {
    if (process.env.DRY_RUN === '1') {
      console.log(`  - would notify URL_UPDATED ${url}`);
      continue;
    }
    const r = await publish(token, url);
    if (r.ok) {
      ok++;
      console.log(`  ✓ URL_UPDATED ${url}`);
    } else {
      console.log(`  ✗ ${url} — HTTP ${r.status}${r.text ? ` ${r.text}` : ''}`);
    }
    await new Promise((r) => setTimeout(r, 220)); // stay under 200 req/min
  }
  console.log(`\ngoogle-index: ${ok}/${targets.length} notification(s) accepted.`);

  // Per-URL status check for the first few (quota-friendly sample).
  if (process.env.SKIP_STATUS !== '1') {
    const sample = targets.slice(0, 3);
    for (const url of sample) {
      try {
        const res = await fetch(
          `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
          { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(15000) },
        );
        console.log(`  status ${res.status} ${url}`);
      } catch (err) {
        console.log(`  status ? ${url} — ${err.message}`);
      }
    }
  }
}
