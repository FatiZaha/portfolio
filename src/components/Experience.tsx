export function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Intern (Full-Stack)',
      company: 'IMPELAB – Marrakech',
      period: '02/2025 - 06/2025',
      color: 'indigo',
      highlights: [
        'Prepared a complete Software Requirements Specification, covering requirements, specifications, and functional analysis.',
        'Designed UML diagrams (class, sequence, use case) to model system behavior.',
        'Created web and multiplatform interfaces in Figma and designed logos in Canva.',
        'Developed IMPELAB CONNECT, a digitalization platform for microbiological, chemical, and metrological laboratories.',
        'Built Spring Boot microservices and REST APIs, integrated with Angular web and .NET MAUI frontends.',
        'Delivered Angular web app for analysis management and .NET MAUI app for field operations (mobile/desktop).',
        'Performed full-stack testing and ensured smooth integration between frontend and backend.',
      ],
    },
    {
      title: 'Full-Stack Web Development Intern',
      company: 'LAUNCHPAD – Marrakech',
      period: '07/2024 - 09/2024',
      color: 'blue',
      highlights: [
        'Optimized the codebase for the TeamShift project.',
        'Developed and deployed a car rental management web application.',
        'Tech stack: Strapi (Scaleway) backend, Next.js (Vercel) frontend with modern deployment practices.',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'ORIENTAL GROUP – Marrakech',
      period: '08/2023 - 10/2023',
      color: 'green',
      highlights: [
        'Conducted technical audits of company websites.',
        'Contributed to the redesign of the Argan Oil website using HTML, CSS, Bootstrap, JavaScript, and PHP.',
      ],
    },
    {
      title: 'Management Application Development Intern',
      company: 'VA CONSULTING – Casablanca',
      period: '06/2022 - 10/2022',
      color: 'yellow',
      highlights: [
        'Participated in the development of a Microsoft Access management application.',
        'Implemented user interfaces and business logic using Visual Basic.',
      ],
    },
  ];

  const colorClasses = {
    indigo: 'border-indigo-100 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300',
    blue: 'border-blue-100 dark:border-blue-800/60 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    green: 'border-green-100 dark:border-green-800/60 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300',
    yellow: 'border-yellow-100 dark:border-yellow-800/60 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300',
  };

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-900/80 border border-${exp.color}-100 dark:border-${exp.color}-800/60 p-6 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full self-start ${colorClasses[exp.color as keyof typeof colorClasses]}`}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2 list-disc pl-5">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
