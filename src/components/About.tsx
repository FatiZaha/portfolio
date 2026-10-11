import { motion, useReducedMotion } from 'framer-motion'
import softwareDev from '../assets/software_dev.png'
export function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="portfolio-section py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 md:mb-16 text-center">About me</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-10 lg:gap-12">
          {/* Keep the full workspace scene visible at its native aspect ratio. */}
          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl min-w-0 lg:max-w-none"
          >
              <motion.img
                src={softwareDev}
                alt="Fatima Zahra Zaha working at a laptop in a software development workspace"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                animate={reduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
                transition={reduceMotion
                  ? { duration: 0 }
                  : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="block aspect-[3/2] w-full h-auto object-contain"
              />
          </motion.figure>

          {/* Professional summary */}
          <div className="about-summary min-w-0 bg-gray-50 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm">

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
