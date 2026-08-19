import { useTranslation } from 'react-i18next'

function Contact() {

  const { t } = useTranslation()

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {t('contact.paragraph1')}
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          {t('contact.label')}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-900">
          {t('contact.paragraph2')}
        </p>

        <a
          href="mailto:fer.bonilla.cruz@gmail.com"
          className="mt-8 inline-block rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800 hover:text-white"
        >
          {t('contact.sendEmail')}
        </a>

      </div>
    </section>
  )
}

export default Contact