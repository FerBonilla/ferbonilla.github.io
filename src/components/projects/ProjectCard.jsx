function ProjectCard({ project }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold text-white">
        {project.name}
      </h3>

      <p className="mt-3 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.demo && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white hover:text-slate-300"
        >
          GitHub →
        </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white hover:text-slate-300"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard