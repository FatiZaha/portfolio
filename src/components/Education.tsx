export function Education() {
  const education = [
    {
      title: 'Engineering Degree: Computer Science & Networks (MIAGE)',
      school: 'EMSI – Moroccan School of Engineering Sciences, Marrakech',
      date: '2025',
      icon: '🎓',
      highlights: [
        'Software engineering: full-stack development, microservices, DevOps',
        'Systems & architecture: distributed systems, cloud computing, UML design',
        'Data & AI foundations: machine learning, data science, big data systems',
        'Networks & cybersecurity: TCP/IP, secure systems, infrastructure design',
        'Software engineering practices: Agile, CI/CD, testing, quality assurance',
        'Hands-on projects: lab work, mini-projects, internships, final-year project',
      ],
    },
    {
      title: 'Baccalaureate: Mathematical Sciences (A)',
      school: 'Al Yassmine High School – Khémisset',
      date: '2019',
      icon: '📘',
      highlights: [
        'Strong foundation in mathematics, logic, and analytical thinking',
        'Problem-solving mindset and scientific reasoning',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="max-w-3xl mx-auto relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className="relative flex gap-6 group">

                {/* Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm group-hover:scale-110 transition">
                    <span>{edu.icon}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.school}
                      </p>
                    </div>

                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      {edu.date}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 grid sm:grid-cols-2 gap-2">
                    {edu.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-indigo-500">▹</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}