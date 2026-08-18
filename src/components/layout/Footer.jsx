function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Fernando Bonilla
        </p>

        <a
          href="https://github.com/FerBonilla"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer