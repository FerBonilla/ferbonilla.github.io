import { useTranslation } from 'react-i18next'

function About() {

const { t } = useTranslation()

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t('about.label')}
        </h2>

        <div className="mt-8 space-y-4 text-lg leading-8 text-bg-slate-900">
          <p>
            {t('about.paragraph1')}
          </p>

          <p>
            {t('about.paragraph2')}
          </p>

          <p>
            {t('about.paragraph3')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About