function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="mb-4 text-lg text-slate-400">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
          Fernando Bonilla
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Senior Java Backend Developer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build robust backend applications, REST APIs and scalable
          software using Java and Spring Boot.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View my projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Contact me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero