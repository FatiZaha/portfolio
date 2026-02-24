interface HomeProps {
  onContactClick: () => void;
}

export function Home({ onContactClick }: HomeProps) {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="relative flex-shrink-0">
              {/* Outer glow frame */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 opacity-70 blur-sm" />
              <div className="relative rounded-full overflow-hidden border border-white/70 dark:border-gray-700 bg-gray-100/90 dark:bg-gray-900/80 shadow-xl transform transition-all duration-300">

                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                
                  <img
                    src="assets/profile.png"
                    alt="Portrait of Fatima Zahra Zaha"
                    className="w-full h-full object-cover rounded-full"
                  />
            
                </div>
              </div>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Computer & Network Engineer
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Fatima Zahra Zaha
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            Full-Stack & Multiplatform Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Recent Computer and Network Engineering graduate specializing in Spring Boot microservices,
            RESTful APIs, and modern web & multiplatform applications. Passionate about clean architecture,
            testing, and building real-world solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a
              href="https://github.com/FatiZaha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/fatima-zahra-zaha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span>LinkedIn</span>
            </a>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span>Contact me</span>
            </button>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Based in Marrakech · Open to junior/entry-level opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
