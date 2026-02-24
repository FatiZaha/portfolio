export function Languages() {
  const languages = [
    { language: 'French', level: 'C1' },
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'B2' },
    { language: 'German', level: 'A1' },
  ];

  return (
    <div className="flex-1 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Languages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
        {languages.map((lang) => (
          <div
            key={lang.language}
            className="bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-xl px-4 py-3 flex items-center justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="font-medium text-sm">{lang.language}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
