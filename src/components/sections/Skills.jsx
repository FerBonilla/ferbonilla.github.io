import { useTranslation } from 'react-i18next'

const skills = [
  'Java',
  'Spring Boot',
  'REST APIs',
  'Microservices',
  'JPA',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Hibernate',
  'Keycloak',
  'React',
  'Tailwind CSS',
  'MySQL',
  'Redis',
  'Git',
  'Azure DevOps',
  'JMS',
  'Vaadin',
  'PHP',
  'Laravel',
  'Bootstrap'
]

function Skills() {

  const { t } = useTranslation()

  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h2 className="text-white text-3xl font-bold sm:text-4xl">
          {t('skills.title')}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills