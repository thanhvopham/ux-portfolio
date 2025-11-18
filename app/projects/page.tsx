// app/projects/page.js
import { projects } from '../../lib/project';
import ProjectCard from '../components/ProjectCard';

export const metadata = {
  title: 'Work | Thanh Vo-Pham'
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Work</h1>
        <p className="text-sm text-slate-300 max-w-xl">
          A selection of UX/UI and front-end projects, with a focus on
          psychology-informed design, accessibility, and collaboration.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
