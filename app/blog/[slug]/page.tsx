import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/site';
import { getPost, allPostSlugs, POSTS_SORTED } from '@/lib/blog';
import { PROJECTS } from '@/lib/projects';
import ArticleBody from '@/components/ArticleBody';

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': [{ url: '/rss.xml', title: 'Naman Soni — Blog RSS' }] },
    },
    openGraph: {
      type: 'article',
      url: `${SITE.url}${url}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.png'],
    },
  };
}

function readingWords(post: ReturnType<typeof getPost>) {
  if (!post) return 0;
  return post.sections.reduce(
    (n, s) => n + s.body.reduce((m, b) => m + b.split(/\s+/).length, 0),
    0,
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const words = readingWords(post);
  const related =
    post.related && post.related.length
      ? post.related.map((slug) => getPost(slug)).filter((p): p is NonNullable<typeof p> => Boolean(p))
      : POSTS_SORTED.filter((p) => p.slug !== post.slug).slice(0, 3);

  const mentioned = PROJECTS.filter(
    (p) =>
      post.tags.some((t) => p.keywords.some((k) => k.toLowerCase().includes(t.toLowerCase()))) ||
      post.description.toLowerCase().includes(p.name.toLowerCase()),
  ).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${SITE.url}/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        wordCount: words,
        inLanguage: 'en',
        author: { '@type': 'Person', name: post.author, url: SITE.url },
        publisher: { '@id': `${SITE.url}/#person` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}/` },
        keywords: post.tags.join(', '),
        isPartOf: { '@id': `${SITE.url}/blog/#blog` },
        image: `${SITE.url}/og-image.png`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog/` },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${SITE.url}/blog/${post.slug}/`,
          },
        ],
      },
      ...(post.faq && post.faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faq.map((f) => ({
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
      <article>
        <header className="page-head">
          <div className="container narrow">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog/">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.tags[0]}</span>
            </nav>
            <p className="eyebrow">
              {post.tags.join(' · ')} · <time dateTime={post.date}>{post.date}</time>
            </p>
            <h1>{post.title}</h1>
            <p className="lede">{post.description}</p>
            <p className="meta-row">
              By <span>{post.author}</span> · {post.readingMinutes} min read · ~{words} words
              {post.updated && post.updated !== post.date && <> · updated {post.updated}</>}
            </p>
          </div>
        </header>

        <div className="section">
          <div className="container narrow prose">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                <ArticleBody body={section.body} />
              </section>
            ))}
          </div>
        </div>

        {post.faq && post.faq.length > 0 && (
          <div className="section" id="faq">
            <div className="container narrow">
              <h2>Frequently asked questions</h2>
              {post.faq.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {mentioned.length > 0 && (
          <div className="section">
            <div className="container">
              <div className="section-head">
                <h2>Products mentioned</h2>
                <Link href="/projects/">All products →</Link>
              </div>
              <div className="grid">
                {mentioned.map((p) => (
                  <article className="card" key={p.slug}>
                    <div className="card-eyebrow">
                      <span>{p.year}</span>
                      <span className={`badge badge-${p.status}`}>{p.status}</span>
                    </div>
                    <h3>
                      <Link href={`/projects/${p.slug}/`}>{p.name}</Link>
                    </h3>
                    <p>{p.tagline}</p>
                    <div className="card-foot">
                      <a href={p.url} target="_blank" rel="noopener">
                        Open app ↗
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="section">
          <div className="container">
            <div className="section-head">
              <h2>Keep reading</h2>
              <Link href="/blog/">All guides →</Link>
            </div>
            <div className="grid">
              {related.map((p) => (
                <article className="card" key={p.slug}>
                  <h3>
                    <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                  </h3>
                  <p>{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
