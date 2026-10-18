import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { POSTS_SORTED, allTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — SEO Guides for Free AI Tools, Web Apps & Browser Utilities',
  description:
    'Long-form, genuinely useful guides about free AI tools, browser-based editors, 3D makers, music studios, expense trackers, 2FA authenticators and the craft of building software that runs in the browser.',
  alternates: {
    canonical: '/blog/',
    types: { 'application/rss+xml': [{ url: '/rss.xml', title: 'Naman Soni — Blog RSS' }] },
  },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS_SORTED;
  const tags = allTags();

  return (
    <>
      <section className="page-head">
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <h1>The blog</h1>
          <p className="lede">
            {POSTS_SORTED.length} in-depth guides — no listicle padding, no invented benchmarks.
            Each article is written to answer a specific question and links to the product it
            discusses.
          </p>
          <ul className="tag-row" aria-label="Topics">
            {tags.map((t) => (
              <li className="tag" key={t}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {featured && (
        <section className="section" aria-labelledby="featured-post">
          <div className="container">
            <div className="section-head">
              <h2 id="featured-post">Latest guide</h2>
            </div>
            <article className="card card-feature">
              <div className="card-eyebrow">
                <span>{featured.tags.join(' · ')}</span>
                <time dateTime={featured.date}>{featured.date}</time>
              </div>
              <h3 style={{ fontSize: '1.6rem' }}>
                <Link href={`/blog/${featured.slug}/`}>{featured.title}</Link>
              </h3>
              <p>{featured.description}</p>
              <div className="card-foot">
                <span className="muted">{featured.readingMinutes} min read</span>
                <Link href={`/blog/${featured.slug}/`}>Read guide →</Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="all-posts">
        <div className="container">
          <div className="section-head">
            <h2 id="all-posts">All guides</h2>
          </div>
          <div className="grid">
            {rest.map((post) => (
              <article className="card" key={post.slug}>
                <div className="card-eyebrow">
                  <span>{post.tags[0]}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <div className="card-foot">
                  <span className="muted">{post.readingMinutes} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="strip">
            <div>
              <h2>Never miss a guide</h2>
              <p>
                Subscribe with any RSS reader, or grab the machine-readable feeds for your own
                tooling.
              </p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/rss.xml">
                RSS feed
              </a>
              <a className="btn btn-ghost" href="/feed.json">
                JSON Feed
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
