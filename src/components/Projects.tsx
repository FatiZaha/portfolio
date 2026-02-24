import { useState, useEffect } from 'react';
import { Github, X, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  status: string;
  version?: string;
  license?: string;
  description: string;
  features: string[];
  techStack: {
    frontend?: string;
    backend?: string;
    database?: string;
    tools?: string;
  };
  architecture?: string[];
  repo: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const projects: Project[] = [
    {
      name: 'HerbGuide',
      status: 'Completed / Needs Amelioration',
      version: '1.0.0',
      license: 'MIT',
      description:
        'Digital platform for identification and management of medicinal plants, bridging traditional botanical knowledge with modern technology.',
      features: [
        'Botanical Encyclopedia - Detailed profiles including species, family, and habitat',
        'Therapeutic Data - Information on active compounds and medical applications',
        'Multi-criteria Search - Find plants by ailment, chemical property, or name',
        'Cross-Platform - Mobile (Flutter) and Web (Angular) support',
        'Secure Backend - Robust API management for plant data and user collections',
      ],
      techStack: {
        frontend: 'Angular, Flutter, Dart',
        backend: 'Spring Boot, MySQL, MongoDB, Firebase',
      },
      repo: 'https://github.com/FatiZaha/HerbGuide',
    },
    {
      name: 'SkyLink',
      status: 'Completed / Needs Amelioration',
      version: '1.0.0',
      license: 'MIT',
      description:
        'High-performance airline management & flight reservation platform for managing flight schedules, passenger bookings, and fleet logistics.',
      features: [
        'Flight Operations - Scheduling, route optimization, aircraft management',
        'Elastic Search - Real-time flight availability with dynamic filtering',
        'Premium Booking Flow - User-centric reservation using MUI components',
        'Passenger Hub - Itineraries, check-ins, digital boarding passes',
        'Administrative Insights - Revenue, occupancy, flight status dashboards',
        'Enterprise Security - JWT + Spring Security protocols',
      ],
      techStack: {
        frontend: 'React, MUI, TailwindCSS, React Router',
        backend: 'Spring Boot, Java, Spring Security, Hibernate',
        database: 'MySQL, Docker, Git, Postman',
      },
      architecture: [
        'UI/UX Layer - Tailwind CSS + MUI components',
        'Service Layer - Spring Boot REST API',
        'Security Layer - JWT stateless authentication',
      ],
      repo: 'https://github.com/FatiZaha/SkyLink',
    },
    {
      name: 'NetworkBookclub',
      status: 'Completed',
      version: '1.0.0',
      license: 'MIT',
      description:
        'Desktop-based library management system for automating library operations including book inventories, member registrations, and tracking book loans/returns.',
      features: [
        'Catalog Management - Add, update, remove books (ISBN, Genre, Author)',
        'Member Directory - Manage library members and contact history',
        'Loan Tracking - Monitor borrowed books, due dates, late return penalties',
        'Powerful Search - SQL-powered instant search',
        'Local Data Persistence - Microsoft SQL Server storage',
        'Admin Access - Secure login system',
      ],
      techStack: {
        frontend: '.NET, C#, Windows Forms',
        database: 'SQL Server, ADO.NET',
        tools: 'Visual Studio, Git',
      },
      repo: 'https://github.com/FatiZaha/NetworkBookclub',
    },
  ];

  const getAllTechPills = (project: Project) => {
    const allTech: string[] = [];
    if (project.techStack.frontend) allTech.push(...project.techStack.frontend.split(', '));
    if (project.techStack.backend) allTech.push(...project.techStack.backend.split(', '));
    if (project.techStack.database) allTech.push(...project.techStack.database.split(', '));
    if (project.techStack.tools) allTech.push(...project.techStack.tools.split(', '));
    return allTech.slice(0, 6);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Top Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          A curated selection of projects showcasing full-stack development, clean architecture, and user-focused experiences.
        </p>

        {/* Projects Grid - 3 columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {project.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Version & License */}
              {(project.version || project.license) && (
                <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {project.version && <span>Version: {project.version}</span>}
                  {project.license && <span>License: {project.license}</span>}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {getAllTechPills(project).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 rounded-full text-xs font-medium border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-800/60 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </button>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 z-10 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {selectedProject.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.status === 'Completed'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  About
                </h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                    >
                      <span className="text-indigo-500 mt-0.5 flex-shrink-0">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {getAllTechPills(selectedProject).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-800/60 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture (if exists) */}
              {selectedProject.architecture && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Architecture
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.architecture.map((layer, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <span className="text-indigo-500 font-mono text-sm">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {layer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Version & License */}
              {(selectedProject.version || selectedProject.license) && (
                <div className="flex gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {selectedProject.version && (
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">
                        Version
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {selectedProject.version}
                      </span>
                    </div>
                  )}
                  {selectedProject.license && (
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">
                        License
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {selectedProject.license}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
              <a
                href={selectedProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-3 text-sm font-medium hover:bg-gray-800 transition-all duration-200 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}