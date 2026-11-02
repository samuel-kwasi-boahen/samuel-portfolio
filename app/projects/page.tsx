import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 text-gray-600">
        Here are some of the projects I have worked on. Each project
        represents a unique challenge and solution.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}