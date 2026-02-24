export function Interests() {
  const interests = [
    {
      name: 'Drawing',
      icon: (
        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/40',
    },
    {
      name: 'Music',
      icon: (
        <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      bgColor: 'bg-purple-50 dark:bg-purple-900/40',
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Interests</h2>
      <div className="flex gap-6 justify-center">
        {interests.map((interest) => (
          <div key={interest.name} className="text-center">
            <div className={`w-16 h-16 mx-auto ${interest.bgColor} rounded-full flex items-center justify-center mb-2 transition-all duration-200 hover:scale-110 hover:shadow-lg`}>
              {interest.icon}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-200">{interest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
