// app/projects/[slug]/page.js
import { projects, getProjectBySlug } from '../../../lib/project';
import { notFound } from 'next/navigation';
import Link from 'next/link';


interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Thanh Vo-Pham`
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link
        href="/projects"
        className="text-xs text-slate-400 hover:text-emerald-300"
      >
        ← Back to all projects
      </Link>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-sm text-slate-300 max-w-2xl">{project.summary}</p>

        <div className="flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="px-2 py-1 rounded-full border border-slate-700">
            {project.role}
          </span>
          <span className="px-2 py-1 rounded-full border border-slate-700">
            {project.timeframe}
          </span>
          {project.tools && (
            <span className="px-2 py-1 rounded-full border border-slate-700">
              Tools: {project.tools.join(', ')}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Case Study Content */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Context & problem</h2>
        <p className="text-sm text-slate-300">{project.problem}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="text-sm text-slate-300">{project.solution}</p>
      </section>

      {project.contributions && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">My contributions</h2>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="text-sm text-slate-300">
          
        </p>
      </section>
    </article>
  );
}
