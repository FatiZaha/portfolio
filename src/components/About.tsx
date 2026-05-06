import profile2 from '../assets/profile2.jpg'
export function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-20 text-center">About me</h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-15">
          {/* Profile image */}
          <div className="relative flex-shrink-0">
            {/* Outer glow frame */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 opacity-70 blur-sm" />

            {/* Image card */}
            <div className="relative w-60 h-90 md:w-95 md:h-135 rounded-[2rem] overflow-hidden border border-white/70 dark:border-gray-700 bg-gray-100/90 dark:bg-gray-900/80 shadow-xl transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent mix-blend-multiply pointer-events-none" />

              <img
                src={profile2}
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
          <div className="flex-1 bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Intro */}
            <p className="text-gray-800 dark:text-gray-100 leading-relaxed text-sm md:text-lg font-medium">
              I don’t just build applications—I design systems that are meant to scale. 
              My journey into software development started during my Computer and Network Engineering studies, 
              where I became driven by solving real-world problems through clean and efficient code.
            </p>

            {/* Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Card 1 */}
              <div className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  ⚡
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                  Building cross-platform applications from frontend to backend.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  ⚙️
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Spring Boot Microservices
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                  Designing scalable APIs and distributed backend systems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  🧠
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                  Clean Code & DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                  Applying OOP, testing, and modern DevOps practices.
                </p>
              </div>

            </div>

            {/* Closing */}
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-lg">
              Now working at a junior level, I focus on building reliable, production-ready systems 
              while continuously learning and adapting. 
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}I’m looking to contribute to real-world software that scales and makes an impact.
              </span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}