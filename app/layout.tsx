import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE, NAV } from '@/lib/site';
import { PROJECTS } from '@/lib/projects';
import { POSTS } from '@/lib/blog';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf7f2',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s | Naman Soni',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  publisher: SITE.author,
  keywords: [
    'Naman Soni',
    'AI tools',
    'free AI tools',
    'browser tools',
    'web apps',
    'AI companion',
    '2FA authenticator',
    'expense tracker',
    '3D generator',
    'link in bio',
    'chess engine',
    'browser agent',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Naman Soni — Blog RSS' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: SITE.author,
      url: SITE.url,
      sameAs: [SITE.github, 'https://namansoni.in/'],
      knowsAbout: [
        'Artificial intelligence',
        'Web development',
        'Browser-based tools',
        'Next.js',
        'TypeScript',
      ],
      description: SITE.description,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#person` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE.url}/projects/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}/#collection`,
      name: 'Naman Soni Products',
      description: SITE.description,
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#person` },
      hasPart: PROJECTS.map((p) => ({
        '@type': 'SoftwareApplication',
        name: p.name,
        url: p.url,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        description: p.summary,
      })),
    },
    {
      '@type': 'Blog',
      '@id': `${SITE.url}/blog/#blog`,
      name: `${SITE.name} Blog`,
      url: `${SITE.url}/blog/`,
      isPartOf: { '@id': `${SITE.url}/#website` },
      blogPost: POSTS.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${SITE.url}/blog/${p.slug}/`,
        datePublished: p.date,
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="container">
            <Link className="brand" href="/">
              <svg
                className="brand-mark"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="32" height="32" rx="7" fill="#17130f" />
                <path d="M8 22V10h3l5 7v-7h3v12h-3l-5-7v7z" fill="#faf7f2" />
                <circle cx="24" cy="12" r="2.4" fill="#c2410c" />
              </svg>
              <span>Naman Soni</span>
            </Link>
            <nav className="nav" aria-label="Primary">
              {NAV.map((item) =>
                item.href === '/' ? (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ),
              )}
              <a href={SITE.github} rel="me noopener" target="_blank">
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <div>
              <p className="footer-note">
                <strong>{SITE.name}</strong> — an independent index of {PROJECTS.length} live
                products and {POSTS.length} long-form guides. Built with Next.js, exported as a
                static site, hosted on Cloudflare Pages.
              </p>
              <p className="footer-note" style={{ marginTop: 10 }}>
                <Link href="/llms.txt">llms.txt</Link> · <Link href="/sitemap.xml">sitemap.xml</Link>{' '}
                · <Link href="/rss.xml">RSS</Link> · <Link href="/feed.json">JSON Feed</Link>
              </p>
            </div>
            <div>
              <h2>Explore</h2>
              <ul>
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <a href={SITE.github} rel="me noopener" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Products</h2>
              <ul>
                {PROJECTS.slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <a href={p.url} target="_blank" rel="noopener">
                      {p.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/projects/">All products →</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
