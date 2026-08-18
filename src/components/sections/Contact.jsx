function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Get in touch
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Let's work together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I'm currently open to new opportunities and interesting software
          projects. Feel free to reach out.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Send me an email
        </a>

      </div>
    </section>
  )
}

export default Contact