import { useTranslation } from 'react-i18next'

function Experience() {

  const { t } = useTranslation()

  const experiences = t('experience.items', {
    returnObjects: true,
  })

  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h2 className="text-white text-3xl font-bold sm:text-4xl">
          {t('experience.title')}
        </h2>

        <div className="mt-10 space-y-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="border-l-2 border-slate-700 pl-6"
            >
              <p className="text-sm text-slate-500">
                {experience.period}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium text-slate-300">
                {experience.company}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience