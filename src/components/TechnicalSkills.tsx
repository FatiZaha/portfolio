export function TechnicalSkills() {
  const skillCardBase =
    'bg-white/80 dark:bg-gray-900/80 border border-gray-100/80 dark:border-gray-700/80 rounded-xl p-6 shadow-sm transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg';

  const skillPillBase =
    'px-3 py-1 rounded-full text-sm font-medium transition-colors duration-150';

  const skillCategories = [
    {
      title: 'Programming Languages',
      items: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL'],
      pillColor: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-800/60',
    },
    {
      title: 'Frontend & Mobile',
      items: ['Angular', 'React', 'Next.js', '.NET MAUI', 'Flutter'],
      pillColor: 'bg-blue-50 text-blue-800 dark:bg-blue-900/40 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-800/60',
    },
    {
      title: 'Backend & Architecture',
      items: ['Spring Boot', 'ASP.NET', 'RESTful APIs', 'Microservices Architecture', 'OOP', 'Client-Server'],
      pillColor: 'bg-green-50 text-green-800 dark:bg-green-900/40 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-800/60',
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Microsoft SQL Server'],
      pillColor: 'bg-purple-50 text-purple-800 dark:bg-purple-900/40 dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-800/60',
    },
    {
      title: 'DevOps & Tools',
      items: ['Git', 'Docker', 'PowerAMC', 'VS Code', 'IntelliJ IDEA', 'Visual Studio'],
      pillColor: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-100 hover:bg-yellow-100 dark:hover:bg-yellow-800/60',
    },
    {
      title: 'Testing & Quality',
      items: ['JUnit 5 (Jupiter)', 'Unit Testing', 'Integration Testing', 'Mockito basics', 'Code Quality', 'Test Coverage'],
      pillColor: 'bg-red-50 text-red-800 dark:bg-red-900/40 dark:text-red-100 hover:bg-red-100 dark:hover:bg-red-800/60',
    },
  ];

  const additionalSkills = [
    {
      title: 'Software Design',
      items: ['UML', 'Merise', 'Design Patterns', 'MVC', 'Repository', 'Service Layer'],
      // 🟢 Teal new color
      pillColor: 'bg-teal-50 text-teal-800 dark:bg-teal-900/40 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-800/60',
    },
    {
      title: 'Methodologies',
      items: ['SCRUM', 'Agile Collaboration', 'Requirements Gathering'],
      // 🟠 Amber new color
      pillColor: 'bg-amber-50 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-800/60',
    },
    {
      title: 'Soft Skills',
      items: ['Analytical skills', 'Teamwork', 'Problem-solving', 'Communication', 'Humility'],
      // 🌸 Rose new color
      pillColor: 'bg-rose-50 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-800/60',
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950">
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
