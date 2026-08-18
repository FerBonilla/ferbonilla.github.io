const experiences = [
  {
    role: 'Senior Java Backend Developer',
    company: 'Maven Diagnostics',
    period: 'Mar 2023 — Jul 2026',
    location: 'Remote',
    description:
      //'Developing backend applications and REST APIs using Java and Spring Boot, with a focus on maintainability, security and scalable solutions.',
      'Design and implementation of services for managing oil extraction and analytics. Enhanced technical management and decision-making on web platforms for clients in the oil sector.',
  },
  {
    role: 'Senior Developer',
    company: 'Axity',
    period: 'Feb 2020 — Mar 2023',
    location: 'Remote',
    description:
      'Led full-stack development to enable payment operations in Mexico for a U.S.-based client. Integrated new features into legacy systems such as in-store pickup for online purchases and a business order financing model.',
  },
  {
    role: 'Middle Developer',
    company: 'Digital Challengers',
    period: 'July 2021 — Jan 2024',
    location: 'Remote',
    description:
      'Focused on cloud-based microservices for automated financial statements. Developed batch processes for complex financial calculations, personalized notifications, and multi-format file generation tailored to business needs.',
  },
  {
    role: 'Solutions Analyst',
    company: 'NTT Data',
    period: 'Feb 2019 — Feb 2020',
    location: 'Mexico City, Mexico',
    description:
      'Developed APIs for backend service integration in cloud environments. Implemented customized flows to support eurobond operations within banking trade systems, ensuring efficiency and compliance.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Scretaria de Seguridad Publica',
    period: 'Feb 2019 — Feb 2020',
    location: 'Mexico City, Mexico',
    description:
      'Built internal automation tools and public service-oriented systems. Developed administrative platforms to manage operational modules and service requests, increasing transparency and efficiency in citizen services.',
  },
  {
    role: 'Junior Consultant',
    company: 'Sistemas CBT',
    period: 'Mar 2016 — Feb 2017',
    location: 'Mexico City, Mexico',
    description:
      'Provided technical consulting and incident resolution via support tickets for SuccessFactors learning platform users. Designed and built the corporate website to effectively communicate services, vision, and values.',
  },
  {
    role: 'Internship',
    company: 'End To End Management',
    period: 'Enero 2016 — Mar 2016',
    location: 'Mexico City, Mexico',
    description:
      'Provided technical consulting and incident resolution via support tickets for SuccessFactors learning platform users. Designed and built the corporate website to effectively communicate services, vision, and values.',
  },
]

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <h2 className="text-white text-3xl font-bold sm:text-4xl">
          Experience
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