import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { CATEGORY_LABEL } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card-eyebrow">
        <span>{CATEGORY_LABEL[project.category]}</span>
        <span className={`badge badge-${project.status}`}>{project.status}</span>
      </div>
      <h3>
        <Link href={`/projects/${project.slug}/`}>{project.name}</Link>
      </h3>
      <p>{project.tagline}</p>
      <div className="card-foot">
        <a href={project.url} target="_blank" rel="noopener">
          Open app ↗
        </a>
        <Link href={`/projects/${project.slug}/`}>Details</Link>
      </div>
    </article>
  );
}