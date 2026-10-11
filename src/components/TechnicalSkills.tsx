export function TechnicalSkills() {
  const skillCardBase =
    'bg-white/80 dark:bg-gray-900/80 border border-gray-100/80 dark:border-gray-700/80 rounded-xl p-6 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg';

  const skillPillBase =
    'px-3 py-1 rounded-full border text-sm font-medium transition-colors duration-150';

  const skillCategories = [
    {
      title: 'Programming Languages',
      items: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL'],
      pillColor: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:text-gray-950 dark:border-primary-400 dark:hover:bg-primary-300',
    },
    {
      title: 'Frontend & Mobile',
      items: ['Angular', 'React', 'Next.js', '.NET MAUI', 'Flutter'],
      pillColor: 'bg-secondary-500 text-gray-950 border-secondary-500 hover:bg-secondary-400',
    },
    {
      title: 'Backend & Architecture',
      items: ['Spring Boot', 'ASP.NET', 'RESTful APIs', 'Microservices Architecture', 'OOP', 'Client-Server'],
      pillColor: 'bg-coral-500 text-gray-950 border-coral-500 hover:bg-coral-400',
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Microsoft SQL Server'],
      pillColor: 'bg-peach-500 text-gray-950 border-peach-500 hover:bg-peach-400',
    },
    {
      title: 'DevOps & Tools',
      items: ['Git', 'Docker', 'PowerAMC', 'VS Code', 'IntelliJ IDEA', 'Visual Studio'],
      pillColor: 'bg-white text-primary-700 border-primary-300 hover:bg-gray-100 dark:border-gray-400',
    },
    {
      title: 'Testing & Quality',
      items: ['JUnit 5 (Jupiter)', 'Unit Testing', 'Integration Testing', 'Mockito basics', 'Code Quality', 'Test Coverage'],
      pillColor: 'bg-primary-100 text-primary-800 border-primary-300 hover:bg-primary-200 dark:bg-primary-800 dark:text-primary-100 dark:border-primary-600 dark:hover:bg-primary-700',
    },
  ];

  const additionalSkills = [
    {
      title: 'Software Design',
      items: ['UML', 'Merise', 'Design Patterns', 'MVC', 'Repository', 'Service Layer'],
      pillColor: 'bg-secondary-100 text-secondary-800 border-secondary-300 hover:bg-secondary-200 dark:bg-secondary-800 dark:text-secondary-100 dark:border-secondary-600 dark:hover:bg-secondary-700',
    },
    {
      title: 'Methodologies',
      items: ['SCRUM', 'Agile Collaboration', 'Requirements Gathering'],
      pillColor: 'bg-peach-100 text-peach-800 border-peach-300 hover:bg-peach-200 dark:bg-peach-800 dark:text-peach-100 dark:border-peach-600 dark:hover:bg-peach-700',
    },
    {
      title: 'Soft Skills',
      items: ['Analytical skills', 'Teamwork', 'Problem-solving', 'Communication', 'Humility'],
      pillColor: 'bg-coral-100 text-coral-800 border-coral-300 hover:bg-coral-200 dark:bg-coral-800 dark:text-coral-100 dark:border-coral-600 dark:hover:bg-coral-700',
    },
  ];

  return (
    <section id="skills" className="portfolio-section py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={skillCardBase}>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className={`${skillPillBase} ${category.pillColor}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalSkills.map((category, idx) => (
            <div key={idx} className={skillCardBase}>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className={`${skillPillBase} ${category.pillColor}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
