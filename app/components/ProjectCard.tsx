// components/ProjectCard.js
import Link from 'next/link';
import { Project } from "../../lib/project"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border border-slate-800/80 rounded-2xl p-5 flex flex-col gap-3 hover:border-pink-300/70 hover:bg-pink-200/40 transition-all"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-lg group-hover:text-pink-400">
          {project.title}
        </h3>
        <span className="text-[11px] uppercase tracking-wide text-slate-400">
          {project.timeframe}
        </span>
      </div>

      <p className="text-sm text-slate-800">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-1 rounded-full bg-white border border-slate-800 text-slate-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xs text-slate-400 mt-1">{project.role}</p>
    </Link>
  );
}
