import { useState } from "react";

export function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: 'Software Engineer Intern',
      subtitle: 'Full-Stack • Spring Boot • Angular • .NET MAUI',
      company: 'IMPELAB – Marrakech',
      period: '02/2025 - 06/2025',
      color: 'indigo',
      icon: '🚀',
      highlights: [
        'Designed full system architecture & SRS documentation',
        'Built scalable Spring Boot microservices & REST APIs',
        'Developed Angular web + .NET MAUI cross-platform app',
        'Delivered IMPELAB CONNECT platform end-to-end',
      ],
      details: [
        'Created full Software Requirements Specification (SRS).',
        'Designed UML diagrams (class, sequence, use case).',
        'Built Spring Boot microservices architecture.',
        'Developed Angular dashboard for management.',
        'Built .NET MAUI app for mobile & desktop operations.',
        'Ensured full system integration.',
      ],
    },
    {
      title: 'Full-Stack Web Developer Intern',
      subtitle: 'Next.js • Strapi • Vercel',
      company: 'LAUNCHPAD – Marrakech',
      period: '07/2024 - 09/2024',
      color: 'blue',
      icon: '💻',
      highlights: [
        'Developed car rental management platform',
        'Optimized and refactored TeamShift codebase',
        'Deployed full-stack app using modern cloud tools',
      ],
      details: [
        'Built car rental management system.',
        'Used Strapi CMS as backend API layer.',
        'Developed frontend with Next.js.',
        'Deployed on Vercel with CI/CD pipeline.',
      ],
    },
    {
      title: 'Web Developer Intern',
      subtitle: 'Frontend • PHP • Bootstrap',
      company: 'ORIENTAL GROUP – Marrakech',
      period: '08/2023 - 10/2023',
      color: 'green',
      icon: '🌐',
      highlights: [
        'Performed technical audits of company websites',
        'Redesigned Argan Oil platform UI/UX',
      ],
      details: [
        'Audited website performance and structure.',
        'Rebuilt frontend using HTML, CSS, Bootstrap, JS, PHP.',
        'Improved UI/UX of Argan Oil website.',
      ],
    },
    {
      title: 'Software Development Intern',
      subtitle: 'Microsoft Access • Visual Basic',
      company: 'VA CONSULTING – Casablanca',
      period: '06/2022 - 10/2022',
      color: 'yellow',
      icon: '📊',
      highlights: [
        'Built management application with business logic',
        'Designed UI and implemented core features',
      ],
      details: [
        'Developed management system in Microsoft Access.',
        'Implemented logic using Visual Basic.',
        'Designed internal tools and UI workflows.',
      ],
    },
  ];

  const colorClasses = {
    indigo: 'from-indigo-500/10 to-indigo-500/0 border-indigo-200 dark:border-indigo-800',
    blue: 'from-blue-500/10 to-blue-500/0 border-blue-200 dark:border-blue-800',
    green: 'from-green-500/10 to-green-500/0 border-green-200 dark:border-green-800',
    yellow: 'from-yellow-500/10 to-yellow-500/0 border-yellow-200 dark:border-yellow-800',
  };

  // 👉 AUTO TECH STACK TAGS
  const extractTechTags = (subtitle) => {
    if (!subtitle) return [];
    return subtitle.split('•').map((t) => t.trim()).filter(Boolean);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex gap-6 group">

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm group-hover:scale-110 transition">
                    <span>{exp.icon}</span>
                  </div>
                </div>

                {/* CARD */}
                <div
                  onClick={() => setSelectedExp(exp)}
                  className={`cursor-pointer flex-1 p-6 rounded-2xl border bg-gradient-to-br ${colorClasses[exp.color]} bg-white dark:bg-gray-900/80 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-gray-500">{exp.subtitle}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-2 mt-4">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-indigo-500">▹</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* TECH TAGS (AUTO) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {extractTechTags(exp.subtitle).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-indigo-500 font-medium">
                    Click for more details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedExp.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedExp.company}
                </p>
                <p className="text-xs text-gray-400">
                  {selectedExp.period}
                </p>
              </div>

              <button
                onClick={() => setSelectedExp(null)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* TECH TAGS (MODAL) */}
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {extractTechTags(selectedExp.subtitle).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* DETAILS */}
            <div className="space-y-3">
              {selectedExp.details.map((d, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-indigo-500">▹</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {d}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedExp(null)}
              className="mt-6 w-full py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}