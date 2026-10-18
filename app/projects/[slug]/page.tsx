import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';
import { PROJECTS, CATEGORY_LABEL, getProject, allSlugs } from '@/lib/projects';
import { POSTS_SORTED } from '@/lib/blog';

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/projects/${project.slug}/`;
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    keywords: project.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url: `${SITE.url}${url}`,
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: project.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      images: ['/og-image.png'],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category,
  ).slice(0, 3);
  const guides = POSTS_SORTED.filter((post) =>
    post.tags.some((t) => project.keywords.some((k) => k.toLowerCase().includes(t.toLowerCase()))),
  ).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE.url}/projects/${project.slug}/#app`,
        name: project.name,
        alternateName: project.tagline,
        description: project.summary,
        url: project.url,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Any (web browser)',
        browserRequirements: 'Requires JavaScript',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: { '@id': `${SITE.url}/#person` },
        keywords: project.keywords.join(', '),
        ...(project.repo ? { codeRepository: project.repo } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE.url}/projects/` },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name,
            item: `${SITE.url}/projects/${project.slug}/`,
          },
        ],
      },
      ...(project.faq && project.faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: project.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <section className="page-head" style={{ borderBottom: `3px solid ${project.accent}` }}>
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/projects/">Products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
          <p className="eyebrow">
            {CATEGORY_LABEL[project.category]} · {project.year} ·{' '}
            <span className={`badge badge-${project.status}`}>{project.status}</span>
          </p>
          <h1>{project.name}</h1>
          <p className="lede">{project.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener">
              Open {project.name} ↗
            </a>
            {project.repo && (
              <a className="btn btn-ghost" href={project.repo} target="_blank" rel="noopener">
                Source code ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2>What is {project.name}?</h2>
          {project.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="features-heading">
        <div className="container">
          <div className="section-head">
            <h2 id="features-heading">Key features</h2>
          </div>
          <div className="grid">
            {project.features.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Built with</h2>
          <ul className="tag-row">
            {project.tech.map((t) => (
              <li className="tag" key={t}>
                {t}
              </li>
            ))}
          </ul>
          <h2 style={{ marginTop: 32 }}>Topics</h2>
          <ul className="tag-row">
            {project.keywords.map((k) => (
              <li className="tag" key={k}>
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.faq && project.faq.length > 0 && (
        <section className="section" aria-labelledby="faq-heading">
          <div className="container narrow">
            <h2 id="faq-heading">Frequently asked questions</h2>
            {project.faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section" aria-labelledby="related-heading">
          <div className="container">
            <div className="section-head">
              <h2 id="related-heading">More in {CATEGORY_LABEL[project.category]}</h2>
              <Link href="/projects/">All products →</Link>
            </div>
            <div className="grid">
              {related.map((p) => (
                <article className="card" key={p.slug}>
                  <h3>
                    <Link href={`/projects/${p.slug}/`}>{p.name}</Link>
                  </h3>
                  <p>{p.tagline}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {guides.length > 0 && (
        <section className="section" aria-labelledby="guides-heading">
          <div className="container">
            <div className="section-head">
              <h2 id="guides-heading">Related guides</h2>
              <Link href="/blog/">All guides →</Link>
            </div>
            <div className="grid">
              {guides.map((post) => (
                <article className="card" key={post.slug}>
                  <h3>
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}