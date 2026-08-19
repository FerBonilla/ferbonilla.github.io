import ProjectCard from '../projects/ProjectCard'
import { useTranslation } from 'react-i18next'

function Projects() {

  const { t } = useTranslation()

  const projects = t('projects.items', {
    returnObjects: true,
  })

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <h2 className="text-3xl font-bold sm:text-4xl">
          {t('projects.title')}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects