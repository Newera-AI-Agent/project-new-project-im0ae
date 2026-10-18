import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { PROJECTS, CATEGORY_ORDER, CATEGORY_LABEL, PROJECTS_BY_CATEGORY } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'About — Who builds these tools and why this index exists',
  description:
    'About the Naman Soni product ecosystem and this hub: what the products are, how they are built, why the index is statically exported and what you can do with the data.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>
          <h1>About this hub</h1>
          <p className="lede">
            A single, indexable home for {PROJECTS.length} live products and{' '}
            {POSTS_SORTED.length} long-form guides — built to be useful to people first and search
            engines second (the order matters, and it&apos;s the only order that works).
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2>Why this site exists</h2>
          <p>
            The products in this ecosystem are spread across more than a dozen subdomains, an
            external domain and a GitHub profile. Anything that is spread out is hard to find — for
            readers, for search engines, and for anyone trying to check whether a tool still works
            before they trust it with their files.
          </p>
          <p>
            This hub fixes that in the simplest possible way: one page per product, each with a
            plain description, the real URL, the features that actually exist, and structured data
            describing it. No fake screenshots, no invented download counts, no ranking tables
            pulled from nowhere.
          </p>

          <h2>What is inside</h2>
          <ul>
            <li>
              <strong>{PROJECTS.length} product pages</strong> — one per live product, grouped into{' '}
              {CATEGORY_ORDER.length} categories, each carrying <code>SoftwareApplication</code>{' '}
              JSON-LD.
            </li>
            <li>
              <strong>{POSTS_SORTED.length} long-form guides</strong> — in-depth articles about the
              problems these tools solve, each with <code>BlogPosting</code> and FAQ structured
              data.
            </li>
            <li>
              <strong>Machine-readable feeds</strong> — sitemap, RSS, JSON Feed and{' '}
              <Link href="/llms.txt">llms.txt</Link> for AI crawlers.
            </li>
          </ul>

          <h2>How it is built</h2>
          <p>
            Next.js App Router, statically exported — every page is pre-rendered HTML, so there is
            no server to fall over and crawlers see complete content on the first request. The
            design is deliberately plain, readable and fast: system fonts, no tracking scripts, no
            cookie banners, no newsletter popup.
          </p>

          <h2>How the products are organised</h2>
          <div className="table-wrap">
            <table>
              <caption className="visually-hidden">
                Categories and the number of products in each
              </caption>
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Products</th>
                  <th scope="col">What is in it</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_ORDER.map((c) => (
                  <tr key={c}>
                    <th scope="row">
                      <Link href={`/projects/#${c}`}>{CATEGORY_LABEL[c]}</Link>
                    </th>
                    <td>{PROJECTS_BY_CATEGORY[c].length}</td>
                    <td>{PROJECTS_BY_CATEGORY[c].map((p) => p.name).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Contact & source</h2>
          <p>
            The code for most of these experiments lives on GitHub, and issues and suggestions are
            welcome there. Product links open the real, live apps.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.github} target="_blank" rel="noopener">
              GitHub profile ↗
            </a>
            <Link className="btn btn-ghost" href="/projects/">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="strip">
            <div>
              <h2>Use the data</h2>
              <p>
                Everything here is a static file. Fetch the sitemap, the RSS feed or{' '}
                <Link href="/llms.txt">llms.txt</Link> and reuse the descriptions — just link back
                to the product pages you quote.
              </p>
            </div>
            <Link className="btn btn-primary" href="/blog/">
              Read the guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
