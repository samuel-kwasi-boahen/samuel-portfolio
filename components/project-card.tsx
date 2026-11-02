import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase text-blue-600">
        {project.category}
      </p>

      <h2 className="mt-2 text-xl font-bold">{project.title}</h2>

      <p className="mt-2 text-gray-500">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Code
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live site
          </a>
        )}
      </div>
    </div>
  );
}