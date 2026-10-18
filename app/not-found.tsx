import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow prose">
        <p className="eyebrow">404</p>
        <h1>That page does not exist</h1>
        <p>
          The link may be old, or the page may have been renamed. Everything on this site is
          reachable from two places, so start there:
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/projects/">
            All {PROJECTS.length} products
          </Link>
          <Link className="btn btn-ghost" href="/blog/">
            All {POSTS_SORTED.length} guides
          </Link>
        </div>
        <h2>Popular starting points</h2>
        <ul>
          {PROJECTS.slice(0, 5).map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}/`}>{p.name}</Link> — {p.tagline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}