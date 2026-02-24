export function Education() {
  const education = [
    {
      title: 'Master of Engineering: Computer Science & Networks (MIAGE)',
      school: 'Moroccan School of Engineering Sciences (EMSI) – Marrakech',
      date: '01/2025',
      color: 'indigo',
    },
    {
      title: 'Baccalaureate: Mathematical Sciences (A)',
      school: 'Al Yassmine High School – Khémisset',
      date: '01/2019',
      color: 'gray',
    },
  ];

  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col md:flex-row md:items-start md:justify-between gap-3"
            >
              <div>
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.school}</p>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full self-start ${
                  edu.color === 'indigo'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                }`}
              >
                {edu.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
