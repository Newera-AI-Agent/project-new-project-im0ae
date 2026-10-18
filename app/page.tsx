import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { PROJECTS, PROJECTS_BY_CATEGORY, CATEGORY_LABEL, CATEGORY_ORDER } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: '/' },
};

const liveCount = PROJECTS.length;
const postCount = POSTS_SORTED.length;

export default function HomePage() {
  const featured = PROJECTS.slice(0, 6);
  const latest = POSTS_SORTED.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent product index · updated regularly</p>
            <h1>
              Every tool {SITE.author} has built, in <span className="accent">one place</span>.
            </h1>
            <p className="lede">
              {SITE.description}
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/projects/">
                Browse all {liveCount} products
              </Link>
              <Link className="btn btn-ghost" href="/blog/">
                Read the SEO guides
              </Link>
            </div>
            <p className="muted" style={{ fontSize: '0.9rem' }}>
              {liveCount} live products · {postCount} long-form guides · 7 categories · updated{' '}
              {new Date().toISOString().slice(0, 10)}
            </p>
          </div>
          <aside aria-label="At a glance" style={{ marginTop: 6 }}>
            <div className="stats">
              <div className="stat">
                <b>{liveCount}</b>
                <span>Live products</span>
              </div>
              <div className="stat">
                <b>{CATEGORY_ORDER.length}</b>
                <span>Categories</span>
              </div>
              <div className="stat">
                <b>{postCount}</b>
                <span>SEO guides</span>
              </div>
            </div>
            <div className="card" style={{ marginTop: 18 }}>
              <div className="card-eyebrow">
                <span>Start here</span>
                <span className="badge badge-live">Free</span>
              </div>
              <p>
                New to the collection? The{' '}
                <Link href="/blog/best-free-ai-tools-2026/">2026 free AI tools guide</Link> walks
                through every tool worth using, and the{' '}
                <Link href="/projects/">products page</Link> is the full index.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-head">
            <h2 id="featured-heading">Featured products</h2>
            <Link href="/projects/">All {liveCount} →</Link>
          </div>
          <div className="grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="categories-heading">
        <div className="container">
          <div className="section-head">
            <h2 id="categories-heading">Browse by category</h2>
          </div>
          <div className="grid">
            {CATEGORY_ORDER.map((c) => {
              const items = PROJECTS_BY_CATEGORY[c];
              return (
                <article className="card" key={c}>
                  <div className="card-eyebrow">
                    <span>{CATEGORY_LABEL[c]}</span>
                    <span className="muted">{items.length} products</span>
                  </div>
                  <h3>
                    <Link href={`/projects/#${c}`}>{CATEGORY_LABEL[c]}</Link>
                  </h3>
                  <p>{items.map((p) => p.name).join(' · ')}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-heading">
        <div className="container">
          <div className="section-head">
            <h2 id="latest-heading">Latest guides</h2>
            <Link href="/blog/">All guides →</Link>
          </div>
          <div className="grid">
            {latest.map((post) => (
              <article className="card" key={post.slug}>
                <div className="card-eyebrow">
                  <span>{post.tags[0]}</span>
                  <span className="muted">{post.readingMinutes} min read</span>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <div className="card-foot">
                  <time dateTime={post.date}>{post.date}</time>
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
              <h2>About this hub</h2>
              <p>
                This site exists to make every product in the ecosystem discoverable — for people
                and for search engines. Every page is statically exported, indexable, and carries
                structured data.
              </p>
            </div>
            <Link className="btn btn-primary" href="/about/">
              About the project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
