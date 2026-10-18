import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { PROJECTS, PROJECTS_BY_CATEGORY, CATEGORY_LABEL, CATEGORY_ORDER } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'All Products — AI Tools, Web Apps & Browser Utilities',
  description: `A complete, indexable index of all ${PROJECTS.length} products in the Naman Soni ecosystem: free AI tools, creative and 3D apps, audio utilities, productivity apps, developer tools, games and security apps.`,
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Products</span>
          </nav>
          <h1>All {PROJECTS.length} products</h1>
          <p className="lede">
            Every live product in the ecosystem, grouped by what it does. Each product page links
            to the real app, lists its features and stack, and carries{' '}
            <code>SoftwareApplication</code> structured data.
          </p>
          <nav className="toc" aria-label="Jump to category">
            {CATEGORY_ORDER.map((c) => (
              <a key={c} href={`#${c}`}>
                {CATEGORY_LABEL[c]} ({PROJECTS_BY_CATEGORY[c].length})
              </a>
            ))}
          </nav>
        </div>
      </section>

      {CATEGORY_ORDER.map((c) => (
        <section className="section" id={c} key={c} aria-labelledby={`${c}-heading`}>
          <div className="container">
            <div className="section-head">
              <h2 id={`${c}-heading`}>{CATEGORY_LABEL[c]}</h2>
            </div>
            <div className="grid">
              {PROJECTS_BY_CATEGORY[c].map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="strip">
            <div>
              <h2>Looking for the source?</h2>
              <p>
                Most of these products are public experiments from the same GitHub profile. Browse
                the repositories for implementation notes and issues.
              </p>
            </div>
            <a className="btn btn-primary" href={SITE.github} target="_blank" rel="noopener">
              GitHub profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
