import { motion, useReducedMotion } from 'framer-motion';

export function Philosophy() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="portfolio-section py-16 sm:py-20 lg:py-24"
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.14 },
        },
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          id="philosophy-heading"
          className="mb-10 text-center text-3xl font-bold sm:mb-12"
          variants={reveal}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
        >
          My Philosophy
        </motion.h2>

        <figure className="philosophy-statement relative isolate mx-auto max-w-5xl overflow-hidden rounded-3xl border border-secondary-300 bg-white px-6 py-14 text-center text-primary-700 dark:border-secondary-500/25 dark:bg-primary-900 dark:text-white sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,var(--color-secondary-500)_0%,transparent_65%)] opacity-10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-0 font-serif text-8xl leading-none text-secondary-500/15 sm:left-8 sm:top-2 sm:text-9xl"
          >
            “
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-4 font-serif text-8xl leading-none text-secondary-500/15 sm:right-8 sm:text-9xl"
          >
            ”
          </span>
          <div aria-hidden="true" className="mb-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-peach-500/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-500/70" />
          </div>

          <motion.blockquote
            className="relative mx-auto max-w-3xl text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl sm:leading-relaxed lg:text-4xl lg:leading-relaxed"
            variants={reveal}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          >
            Great software engineers don't know everything. They know how to{' '}
            <span className="philosophy-highlight text-secondary-600 dark:text-secondary-500">understand anything</span>.
          </motion.blockquote>

          <motion.figcaption
            className="relative mt-8 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-200 sm:mt-10 sm:text-base"
            variants={reveal}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
          >
            — Fatima Zahra Zaha
          </motion.figcaption>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-5 font-mono text-xs text-secondary-500/30 sm:bottom-6 sm:left-8 sm:text-sm"
          >
            {'</>'}
          </span>
        </figure>
      </div>
    </motion.section>
  );
}
