export function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-20 text-center">About me</h2>

        <div className="max-w-5xl mx-auto flex flex-row md:flex-row items-center gap-8 md:gap-15">
          {/* Profile image */}
          <div className="relative flex-shrink-0">
            {/* Outer glow frame */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 opacity-70 blur-sm" />

            {/* Image card */}
            <div className="relative w-60 h-90 md:w-95 md:h-135 rounded-[2rem] overflow-hidden border border-white/70 dark:border-gray-700 bg-gray-100/90 dark:bg-gray-900/80 shadow-xl transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent mix-blend-multiply pointer-events-none" />

              <img
                src="portfolio/profile2.png"
                alt="Portrait of Fatima Zahra Zaha"
                className="w-full h-full object-cover rounded-[2rem]"
              />

              {/* Small label chip */}
              <div className="absolute bottom-2 left-6 md:left-1/2 md:transform md:-translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] text-center tracking-wide uppercase bg-black/65 text-white/95 backdrop-blur-sm shadow-sm">
                Computer & Network Engineer
              </div>
            </div>
          </div>

          {/* Professional summary */}
          <div className=" flex-1 bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-xl">
              Recent Computer and Network Engineering graduate specializing in Full-Stack development,
              Spring Boot microservices, and multiplatform applications. Hands-on experience gained through
              academic projects and professional internships, with a solid foundation in API design,
              Object-Oriented Programming (OOP), testing, and modern DevOps tools. Motivated, fast learner,
              and actively seeking entry-level or junior opportunities to grow and contribute to real-world
              software projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}