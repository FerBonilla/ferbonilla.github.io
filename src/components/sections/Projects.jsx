import ProjectCard from '../projects/ProjectCard'

const projects = [
  /*{
    name: 'Warehouse Management System',
    description:
      'A warehouse management application for managing products, inventory and stock movements.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Keycloak',
      'React',
    ],
    github: null,
    demo: null,
  },*/
  {
    name: 'Personal Portfolio',
    description:
      'This portfolio, built with React, Vite and Tailwind CSS.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
    ],
    github: 'https://github.com/FerBonilla/ferbonilla.github.io',
    demo: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <h2 className="text-3xl font-bold sm:text-4xl">
          Projects
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