import { useState } from "react";

type ExperienceColor = 'primary' | 'secondary' | 'coral' | 'peach' | 'mint';
type ExperienceEntry = {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  color: ExperienceColor;
  icon: string;
  highlights: string[];
  details: string[];
};

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceEntry | null>(null);

  const experiences: ExperienceEntry[] = [
    {
      title: 'Full-Stack Developer – Freelance',
      subtitle: 'Next.js • TypeScript • Supabase • PostgreSQL',
      company: 'HMD IMMO – Remote',
      period: '01/2026 - 06/2026',
      color: 'primary',
      icon: '🏗️',
      highlights: [
        'Designed and delivered BatiTrack, a construction management SaaS',
        'Built and deployed the app with Next.js, TypeScript & Supabase',
        'Automated financial tracking with real-time budgets & payment alerts',
        'Secured user access, data & invoice storage',
      ],
      details: [
        'Analyzed requirements and designed BatiTrack for construction site management.',
        'Developed and deployed the SaaS application using Next.js, TypeScript and Supabase/PostgreSQL.',
        'Implemented real-time budgets, late-payment alerts and financial dashboards.',
        'Added authentication and per-user access controls to secure application data.',
        'Implemented secure storage for invoices.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      subtitle: 'Full-Stack • Spring Boot • Angular • .NET MAUI',
      company: 'IMPELAB – Marrakech',
      period: '02/2025 - 06/2025',
      color: 'secondary',
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
      color: 'coral',
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
      color: 'peach',
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
      color: 'mint',
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
    primary: 'bg-primary-100 border-primary-300 border-l-primary-500 dark:bg-primary-900 dark:border-primary-700 dark:border-l-primary-400',
    secondary: 'bg-secondary-100 border-secondary-300 border-l-secondary-500 dark:bg-secondary-900 dark:border-secondary-700 dark:border-l-secondary-500',
    coral: 'bg-coral-100 border-coral-300 border-l-coral-500 dark:bg-coral-900 dark:border-coral-700 dark:border-l-coral-500',
    peach: 'bg-peach-100 border-peach-300 border-l-peach-500 dark:bg-peach-900 dark:border-peach-700 dark:border-l-peach-500',
    mint: 'bg-white border-gray-300 border-l-gray-400 dark:bg-gray-800 dark:border-gray-500 dark:border-l-white',
  };

  const tagClasses = {
    primary: 'bg-primary-500 text-white border-primary-500',
    secondary: 'bg-secondary-500 text-gray-950 border-secondary-500',
    coral: 'bg-coral-500 text-gray-950 border-coral-500',
    peach: 'bg-peach-500 text-gray-950 border-peach-500',
    mint: 'bg-white text-primary-700 border-primary-200',
  };

  // 👉 AUTO TECH STACK TAGS
  const extractTechTags = (subtitle: string) => {
    if (!subtitle) return [];
    return subtitle.split('•').map((t) => t.trim()).filter(Boolean);
  };

  return (
    <section id="experience" className="portfolio-section py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex gap-6 group">

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full border shadow-sm group-hover:scale-110 transition ${tagClasses[exp.color]}`}>
                    <span>{exp.icon}</span>
                  </div>
                </div>

                {/* CARD */}
                <div
                  onClick={() => setSelectedExp(exp)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedExp(exp);
                    }
                  }}
                  aria-label={`View details for ${exp.title} at ${exp.company}`}
                  className={`cursor-pointer flex-1 min-w-0 p-6 rounded-2xl border border-l-4 ${colorClasses[exp.color]} shadow-sm group-hover:shadow-xl motion-safe:group-hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{exp.subtitle}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
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
                        <span className="text-primary-500 dark:text-primary-300">▹</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* TECH TAGS (AUTO) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {extractTechTags(exp.subtitle).map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full border ${tagClasses[exp.color]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-primary-500 dark:text-primary-300 font-medium">
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
                className="text-gray-500 hover:text-coral-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* TECH TAGS (MODAL) */}
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {extractTechTags(selectedExp.subtitle).map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full border ${tagClasses[selectedExp.color]}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* DETAILS */}
            <div className="space-y-3">
              {selectedExp.details.map((d, i) => (
                <div key={i} className="flex gap-2 text-sm">
                  <span className="text-primary-500 dark:text-primary-300">▹</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {d}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedExp(null)}
              className="mt-6 w-full py-2 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
