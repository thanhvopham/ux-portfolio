// app/page.js
import Link from 'next/link';
import { projects } from '../lib/project';
import ProjectCard from './components/ProjectCard';

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-pink-500/80">
          UX / UI · Front-End · Psychology
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
          I design digital experiences that blend{' '}
          <span className="text-pink-500">psychology</span> and{' '}
          <span className="text-pink-500">technology</span>.
        </h1>
        <p className="text-sm sm:text-base text-slate-800">
          I’m Thanh, a UX/UI designer and front-end developer with a background in psychology. I specialise in creating user experiences that are
          not only beautiful but grounded in research, accessibility, and human behaviour.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="px-4 py-2 rounded-full bg-pink-500 text-white font-medium text-sm hover:bg-pink-400 transition-colors"
          >
            View my work
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full border border-slate-300 text-sm hover:border-pink-400 hover:text-pink-500 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Selected projects</h2>
          <Link
            href="/projects"
            className="text-xs text-pink-500 hover:text-pink-400"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
